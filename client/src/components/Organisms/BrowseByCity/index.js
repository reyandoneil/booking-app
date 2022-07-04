import { useEffect } from 'react';
import {
  BrowseByCityWrapper,
  Title,
  Subtitle,
  CardContainer,
  Card,
  ImgWrapper,
  Img,
  CityTitle,
  Total,
  Text,
} from './BrowseByCityElements';
import { dataHotel } from '../../../dataHotel';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { getHotelsByCity } from '../../../store/Action/HotelAction';
import { useDispatch, useSelector } from 'react-redux';

function BrowseByCity() {
  const dispatch = useDispatch();
  const breakpoint = useSelector(
    (state) => state.GlobalReducer.screenSize
  );
  const dataHotelByCity = useSelector(
    (state) => state.HotelReducer
  );
  useEffect(() => {
    dispatch(getHotelsByCity());
  }, [dispatch]);
  console.log(dataHotelByCity);
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    // autoplay: true,
    // autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <BrowseByCityWrapper ss={breakpoint}>
        <Title>Browse by city</Title>
        <Subtitle>The most popular hotel in the city</Subtitle>
        <CardContainer {...settings}>
          {dataHotel.map((datum, i) => {
            return (
              <Card key={i}>
                <ImgWrapper>
                  <Img src={datum.pic} />
                </ImgWrapper>
                <Text>
                  <CityTitle>{datum.city}</CityTitle>
                  <Total>{datum.total} hotels</Total>
                </Text>
              </Card>
            );
          })}
        </CardContainer>
      </BrowseByCityWrapper>
    </>
  );
}

export default BrowseByCity;
