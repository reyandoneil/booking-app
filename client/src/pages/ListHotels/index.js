import {
  Navbar,
  Sidebar,
  CardProperty,
} from '../../components/Organisms';
import { useDispatch, useSelector } from 'react-redux';
import {
  ListHotelContainer,
  ContentContainer,
  SearchWrapper,
  ListHotelWrapper,
  Text,
} from './ListHotelElements';
import { serchProperty } from '../../store/Action/HotelAction';

function ListHotel() {
  const breakPoint = useSelector(
    (state) => state.GlobalReducer.screenSize
  );
  const city = useSelector((state) => state.HotelsReducer.city);
  const dataProperty = useSelector(
    (state) => state.HotelsReducer.dataHotel
  );

  
  return (
    <>
      <Navbar name="listHotel" />
      <ListHotelContainer ss={breakPoint}>
        <ContentContainer>
          <SearchWrapper>
            <Sidebar />
          </SearchWrapper>
          <ListHotelWrapper>
            <Text>
              {city} : {dataProperty.totalHotel} properties found
            </Text>
            {dataProperty?.data?.map((datum, i) => {
              return (
                <CardProperty
                  key={i}
                  img={datum.photo[0]}
                  name={datum.name}
                  distance={datum.distance}
                  city={datum.city}
                  type={datum.type}
                  price={datum.cheapestPrice}
                  ss={breakPoint}
                />
              );
            })}
          </ListHotelWrapper>
        </ContentContainer>
      </ListHotelContainer>
    </>
  );
}

export default ListHotel;
