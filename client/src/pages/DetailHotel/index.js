import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Navbar, MapCOmp, Footer } from '../../components/Organisms';
import {
  DetailHotelContainer,
  TopMenu,
  TitleMenu,
  PropertyName,
  PropertyType,
  PropertyAddress,
  PhotoGallery,
  LeftWrapper,
  RightWrapper,
  Img,
  ImgWrapper,
  DescWrapper,
  DescTitle,
  Desc,
  MapWrapper,
  IconMarker,
  Bg,
  Map,
  BackBtn,
  HighlightWrapper,
  FacilityWrapper,
  DescHighlight,
  DescHighlightWrapper,
  TextDesc,
  ButtonReserveWrapper,
  PropertyWrapper,
  FacilityIconWrapper,
  IconFacilityWrapper,
} from './DetailHotelElements';
import { Button } from '../../components/Atoms';
import { Loading } from '../../components/Molecules';
import {
  togle_icon,
  back_btn,
  fiveStar,
  fourStar,
  threeStar,
  swimmingPool,
  fitnessCenter,
  restaurant,
  bar,
  breakfast,
  airportShuttle,
  spa,
  freeParking,
  wifi,
} from '../../Assets';
import { searchPropertyById } from '../../store/Action/HotelAction';

function DetailHotel() {
  const { hotelId } = useParams();
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const breakPoint = useSelector(
    (state) => state.GlobalReducer.screenSize
  );
  const details = useSelector(
    (state) => state.HotelsReducer.dataDetails
  );
  const rating = useSelector(
    (state) => state?.HotelsReducer?.dataDetails?.data?.rating
  );
  const loading = useSelector((state) => state.HotelsReducer.loading);
  useEffect(() => {
    dispatch(searchPropertyById(hotelId));
  }, [dispatch, hotelId]);

  const [isMap, setIsMap] = useState(false);
  const openMapHandler = () => {
    setIsMap(!isMap);
  };
  const backHandler = () => {
    Navigate(-1);
  };

  const stars = () => {
    switch (rating) {
      case 3:
        return <IconMarker src={threeStar} />;
      case 4:
        return <IconMarker src={fourStar} />;
      case 5:
        return <IconMarker src={fiveStar} />;
      default:
        break;
    }
  };
  console.log(details?.data?.facilities[0].bar);

  return (
    <>
      {isMap && (
        <MapWrapper>
          <Bg />
          <Map>
            <MapCOmp
              onClick={openMapHandler}
              marker={details?.data?.marker}
              name={details?.data?.name}
            />
          </Map>
        </MapWrapper>
      )}
      <Navbar />
      <DetailHotelContainer ss={breakPoint}>
        {loading ? (
          <Loading />
        ) : (
          <>
            <TopMenu>
              <BackBtn src={back_btn} onClick={backHandler} />
              <Button
                title={'Info & price'}
                className={'topDetail'}
              />
              <Button title={'Facility'} className={'topDetail'} />
              <Button title={'House rules'} className={'topDetail'} />
            </TopMenu>
            <TitleMenu>
              <PropertyWrapper>
                <PropertyType>{details?.data?.type}</PropertyType>
                <PropertyName>{details?.data?.name}</PropertyName>
                {stars()}
              </PropertyWrapper>
              <ButtonReserveWrapper>
                <Button
                  title={'Reserve'}
                  className={'availability'}
                />
              </ButtonReserveWrapper>
            </TitleMenu>
            <PropertyAddress>
              <IconMarker src={togle_icon} onClick={openMapHandler} />
              {details?.data?.address}
            </PropertyAddress>
            <PhotoGallery>
              <LeftWrapper>
                <ImgWrapper>
                  <Img src={details?.data?.photo[1]} />
                </ImgWrapper>
                <ImgWrapper>
                  <Img src={details?.data?.photo[2]} />
                </ImgWrapper>
              </LeftWrapper>
              <RightWrapper>
                <Img src={details?.data?.photo[0]} />
              </RightWrapper>
            </PhotoGallery>
            <DescHighlight ss={breakPoint}>
              <DescWrapper ss={breakPoint}>
                <DescTitle>{details?.data?.title}</DescTitle>
                <Desc>{details?.data?.desc}</Desc>
                <FacilityWrapper>
                  <DescTitle>Most popular facility</DescTitle>
                  <FacilityIconWrapper>
                    {details?.data?.facilities[0].swimmingPool && (
                      <IconFacilityWrapper>
                        <IconMarker src={swimmingPool} />
                        <TextDesc>Swimming Pool</TextDesc>
                      </IconFacilityWrapper>
                    )}
                    {details?.data?.facilities[0]?.spa && (
                      <IconFacilityWrapper>
                        <IconMarker src={spa} />
                        <TextDesc>Massage and Spa </TextDesc>
                      </IconFacilityWrapper>
                    )}
                    {details?.data?.facilities[0]?.airportShuttle && (
                      <IconFacilityWrapper>
                        <IconMarker src={airportShuttle} />
                        <TextDesc>Airport Shuttle </TextDesc>
                      </IconFacilityWrapper>
                    )}
                    {details?.data?.facilities[0]?.fitnessCenter && (
                      <IconFacilityWrapper>
                        <IconMarker src={fitnessCenter} />
                        <TextDesc>Fitness Center</TextDesc>
                      </IconFacilityWrapper>
                    )}
                    {details?.data?.facilities[0]?.restaurant && (
                      <IconFacilityWrapper>
                        <IconMarker src={restaurant} />
                        <TextDesc>Restaurant</TextDesc>
                      </IconFacilityWrapper>
                    )}
                    {details?.data?.facilities[0]?.bar && (
                      <IconFacilityWrapper>
                        <IconMarker src={bar} />
                        <TextDesc>Bar</TextDesc>
                      </IconFacilityWrapper>
                    )}
                    {details?.data?.facilities[0]?.breakfast && (
                      <IconFacilityWrapper>
                        <IconMarker src={breakfast} />
                        <TextDesc>Breakfast</TextDesc>
                      </IconFacilityWrapper>
                    )}
                    {details?.data?.facilities[0]?.freeParking && (
                      <IconFacilityWrapper>
                        <IconMarker src={freeParking} />
                        <TextDesc>Free Parking</TextDesc>
                      </IconFacilityWrapper>
                    )}
                    {details?.data?.facilities[0]?.freeWifi && (
                      <IconFacilityWrapper>
                        <IconMarker src={wifi} />
                        <TextDesc>Free Wifi</TextDesc>
                      </IconFacilityWrapper>
                    )}
                  </FacilityIconWrapper>
                </FacilityWrapper>
              </DescWrapper>
              <HighlightWrapper ss={breakPoint}>
                <DescHighlightWrapper>
                  <DescTitle>Property highlight</DescTitle>
                  <TextDesc>
                    Top location: Highly rated by recent guests (9.2)
                  </TextDesc>
                  <DescTitle>Breakfast info</DescTitle>
                  <TextDesc>{details?.data?.breakFastInfo}</TextDesc>
                  <DescTitle>Rooms with:</DescTitle>
                  <TextDesc>-</TextDesc>
                </DescHighlightWrapper>
                <Button
                  title={'Reserve'}
                  className={'availability'}
                />
              </HighlightWrapper>
            </DescHighlight>
          </>
        )}
      </DetailHotelContainer>
      <Footer />
    </>
  );
}

export default DetailHotel;
