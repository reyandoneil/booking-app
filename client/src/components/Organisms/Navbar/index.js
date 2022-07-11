import React from 'react';
import { NavbarContainer, Left, Logo, Right } from './NavbarElements';
import { Boon } from '../../../Assets';
import { Button } from '../../Atoms';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Navbar({ name }) {
  const navigate = useNavigate();
  const breakpoint = useSelector(
    (state) => state.GlobalReducer.screenSize
  );
  const onClickRegister = (e) => {
    navigate('/register');
  };
  const onClickLogin = (e) => {
    navigate('/login');
  };

  return (
    <NavbarContainer ss={breakpoint}>
      <Left>
        <Logo src={Boon} />
      </Left>
      <Right name={name}>
        <Button title={'Register'} onClick={onClickRegister} />
        <Button title={'Sign in'} onClick={onClickLogin} />
      </Right>
    </NavbarContainer>
  );
}

export default Navbar;
