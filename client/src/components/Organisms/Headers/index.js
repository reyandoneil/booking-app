import { useState, useEffect } from 'react';
import {
  Headers,
  Title,
  SubTitle,
  SearchMenu,
  HeadersContainer,
  InputSearch,
  IconInput,
  ClearInput,
  IconInputWrapper,
  SearchMenuWrapper,
  CheckIn,
  CheckOut,
  DatePickerWrapper,
  Space,
  Symbol
} from './HeadersElements';
import { togle_icon, closeIcon } from '../../../Assets';
import { useSelector } from 'react-redux';
import { Button } from '../../Atoms';

function Header() {
  const breakpoint = useSelector(
    (state) => state.GlobalReducer.screenSize
  );
  const [input, setInput] = useState({
    city: '',
  });
  const [isClear, setIsClear] = useState(false);
  useEffect(() => {
    if (input.city.length === 0) {
      setIsClear(false);
    } else {
      setIsClear(true);
    }
  }, [input.city.length]);

  const onChange = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };
  const onClear = () => {
    setInput({ city: '' });
  };
  return (
    <HeadersContainer ss={breakpoint}>
      <Headers>
        <Title ss={breakpoint}>
          Find your next Stay {breakpoint}
        </Title>
        <SubTitle ss={breakpoint}>
          Search hotel, villa and much more around Indonesia !!
        </SubTitle>
      </Headers>
      <SearchMenu ss={breakpoint}>
        <SearchMenuWrapper>
          <IconInputWrapper>
            <IconInput src={togle_icon} />
          </IconInputWrapper>
          <InputSearch
            placeholder="Where are you going?"
            type={'text'}
            onChange={onChange}
            value={input.city}
            name="city"
          />
          <IconInputWrapper>
            {isClear && (
              <ClearInput src={closeIcon} onClick={onClear} />
            )}
          </IconInputWrapper>
        </SearchMenuWrapper>
        <DatePickerWrapper ss={breakpoint}>
          <CheckIn ss={breakpoint}>Check-In</CheckIn>
          <Space ss={breakpoint}>
            <Symbol>-</Symbol>
          </Space>
          <CheckOut ss={breakpoint}>Check-Out</CheckOut>
        </DatePickerWrapper>
        <Button
          title={'Search'}
          className={'SearchButton'}
          ss={breakpoint}
        />
      </SearchMenu>
    </HeadersContainer>
  );
}

export default Header;
