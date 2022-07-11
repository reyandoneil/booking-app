import { useState, useEffect } from 'react';
import { InputField } from '../../Molecules';
import { Button } from '../../Atoms';
import { useDispatch } from 'react-redux';
import { serchProperty } from '../../../store/Action/HotelAction';
import {
  SidebarWrapper,
  Title,
  InputFieldWrapper,
} from './SidebarElements';

function Sidebar() {
  const dispatch = useDispatch();
  const [values, setValues] = useState({
    city: 'jakarta',
    min: 100000,
    max: 2000000,
  });

  //CLICK SEARCH
  const onClickSearch = () => {
    dispatch(serchProperty(values.city, values.min, values.max));
  };
  //
  // useEffect(() => {
  //   dispatch(serchProperty(values.city, values.min, values.max));
  // }, []);
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };
  return (
    <SidebarWrapper>
      <Title>Search</Title>
      <InputFieldWrapper>
        <InputField
          label={'Destination/property name:'}
          name={'city'}
          type={'text'}
          onChange={onChangeHandler}
          defaultValue={values.city}
        />
        <InputField
          label={'Check-in date'}
          name={'checkin'}
          onChange={onChangeHandler}
          type={'date'}
        />
        <InputField
          label={'Check-Out date'}
          name={'checkout'}
          onChange={onChangeHandler}
          type={'date'}
        />
        <InputField
          label={'Minumum price per day'}
          name={'min'}
          onChange={onChangeHandler}
          type={'number'}
          defaultValue={values.min}
        />
        <InputField
          label={'Maximum price per day'}
          name={'max'}
          onChange={onChangeHandler}
          type={'number'}
          defaultValue={values.max}
        />
      </InputFieldWrapper>
      <Button
        title={'Search'}
        className={'sidebar'}
        onClick={onClickSearch}
      />
    </SidebarWrapper>
  );
}

export default Sidebar;
