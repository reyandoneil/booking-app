import React from 'react';
import { Navbar, Sidebar } from '../../components/Organisms';
import { useSelector } from 'react-redux';
import {
  ListHotelContainer,
  ContentContainer,
  SearchWrapper,
  ListHotelWrapper,
} from './ListHotelElements';

function ListHotel() {
  const breakPoint = useSelector(
    (state) => state.GlobalReducer.screenSize
  );
  return (
    <>
      <Navbar name="listHotel" />
      <ListHotelContainer ss={breakPoint}>
        <ContentContainer>
          <SearchWrapper>
            <Sidebar/>
          </SearchWrapper>
          <ListHotelWrapper> list</ListHotelWrapper>
        </ContentContainer>
      </ListHotelContainer>
    </>
  );
}

export default ListHotel;
