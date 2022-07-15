import { useState } from 'react';
import { InputField, ErrorMessage } from '../../Molecules';
import { Button } from '../../Atoms';
import { useDispatch } from 'react-redux';
import { searchProperty } from '../../../store/Action/HotelAction';
import {
  SidebarWrapper,
  Title,
  InputFieldWrapper,
} from './SidebarElements';

function Sidebar() {
  const dispatch = useDispatch();
  const [isCity, setIsCity] = useState(false);
  const [values, setValues] = useState({
    city: '',
    min: 100000,
    max: 100000000,
  });

  //CLICK SEARCH
  const onClickSearch = () => {
    if (values.city.length === 0) {
      setIsCity(true);
    } else {
      setIsCity(false);
      dispatch(searchProperty(values.city, values.min, values.max));
    }
  };
  const newcity = JSON.parse(localStorage.getItem('city'));


  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };
  // useEffect(() => {
  //   const newCity = JSON.parse(localStorage.getItem('city'));
  //   setValues({ ...values, city: newCity });
  // }, []);
  return (
    <SidebarWrapper>
      <Title>Search</Title>
      <InputFieldWrapper>
        <InputField
          label={'Destination/property name:'}
          name={'city'}
          type={'text'}
          onChange={onChangeHandler}
          defaultValue={newcity}
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
          label={'Minimum price per day'}
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
      {isCity && (
        <ErrorMessage
          message={'Please enter a destination to start searching.'}
          className={'sideBar'}
        />
      )}
      <Button
        title={'Search'}
        className={'sidebar'}
        onClick={onClickSearch}
      />
    </SidebarWrapper>
  );
}

export default Sidebar;
