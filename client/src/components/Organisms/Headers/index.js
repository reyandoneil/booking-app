import { useState, useEffect } from 'react';
import { format, addDays } from 'date-fns';
import { useNavigate } from 'react-router-dom';
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
  Symbol,
  Icon,
  IconWrapper,
  IconWrapper2,
  GuestsWrapper,
} from './HeadersElements';
import {
  togle_icon,
  closeIcon,
  Calendar,
  Guest,
} from '../../../Assets';
import { useSelector } from 'react-redux';
import { Button } from '../../Atoms';
import { Calender } from '../../Molecules';

function Header() {
  const navigate = useNavigate();
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
  //SEARCH BUTTON
  const searchClick = () => {
    navigate('/hotel');
  };
  //CALENDER
  const [openCal, setOpenCal] = useState(false);
  const [calender, setCalender] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: 'selection',
    },
  ]);

  const onChangeCalendar = (date) => {
    setCalender([date.selection]);
  };

  const openCalender = () => {
    setOpenCal(!openCal);
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
        <SearchMenuWrapper ss={breakpoint}>
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
        <DatePickerWrapper ss={breakpoint} onClick={openCalender}>
          <IconWrapper>
            <Icon src={Calendar} />
          </IconWrapper>
          <CheckIn ss={breakpoint}>
            {format(calender[0].startDate, 'EEE.dd.LLL')}
          </CheckIn>
          <Space ss={breakpoint}>
            <Symbol>-</Symbol>
          </Space>
          <IconWrapper2>
            <Icon src={Calendar} ss={breakpoint} />
          </IconWrapper2>
          <CheckOut ss={breakpoint}>
            {format(calender[0].endDate, 'EEE.dd.LLL')}
          </CheckOut>
        </DatePickerWrapper>
        {openCal && (
          <Calender
            ss={breakpoint}
            onChange={onChangeCalendar}
            showSelectionPreview={true}
            moveRangeOnFirstSelection={false}
            months={1}
            ranges={calender}
            direction="horizontal"
          />
        )}
        <GuestsWrapper ss={breakpoint}>
          <IconWrapper>
            <Icon src={Guest} />
          </IconWrapper>
        </GuestsWrapper>
        <Button
          title={'Search'}
          className={'SearchButton'}
          ss={breakpoint}
          onClick={searchClick}
        />
      </SearchMenu>
    </HeadersContainer>
  );
}

export default Header;
