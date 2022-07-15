import { useEffect } from 'react';
import {
  Navbar,
  Sidebar,
  CardProperty,
} from '../../components/Organisms';
import { useSelector, useDispatch } from 'react-redux';
import { searchProperty } from '../../store/Action/HotelAction';
import { Loading } from '../../components/Molecules';
import {
  ListHotelContainer,
  ContentContainer,
  SearchWrapper,
  ListHotelWrapper,
  Text,
} from './ListHotelElements';


function ListHotel() {
  const dispatch = useDispatch();
  const breakPoint = useSelector(
    (state) => state.GlobalReducer.screenSize
  );
  const isLoading = useSelector(
    (state) => state.HotelsReducer.loading
  );
  const city = useSelector((state) => state.HotelsReducer.city);
  const dataProperty = useSelector(
    (state) => state.HotelsReducer.dataHotel
  );
  useEffect(() => {
    const newCity = JSON.parse(localStorage.getItem('city'));
    dispatch(searchProperty(newCity, 100000, 100000000));
  }, [dispatch]);



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
              {isLoading ? null : (
                <>
                  {city} : {dataProperty.totalHotel} properties found
                </>
              )}
            </Text>
            {isLoading ? (
              <Loading />
            ) : (
              <>
                {dataProperty?.data?.map((datum, i) => {
                  return (
                    <CardProperty
                      key={i}
                      id={datum._id}
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
              </>
            )}

            <Text></Text>
          </ListHotelWrapper>
        </ContentContainer>
      </ListHotelContainer>
    </>
  );
}

export default ListHotel;
