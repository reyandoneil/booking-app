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
import {
  jakarta,
  bali,
  bandung,
  jogya,
  lombok,
  hotel,
  apartment,
  resort,
  villa,
} from '../../../Assets';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {
  getHotelsByCity,
  getHotelsByType,
} from '../../../store/Action/HotelAction';
import { useDispatch, useSelector } from 'react-redux';

function BrowseByCity({ name }) {
  const dispatch = useDispatch();
  const breakpoint = useSelector(
    (state) => state.GlobalReducer.screenSize
  );
  const dataHotelByCity = useSelector(
    (state) => state.HotelsReducer.dataHotelByCity
  );
  const dataHotelByType = useSelector(
    (state) => state.HotelsReducer?.dataHotelByType
  );

  useEffect(() => {
    dispatch(getHotelsByCity());
    dispatch(getHotelsByType());
  }, [dispatch]);

  const dataHotel = [
    {
      id: 1,
      city: 'Jakarta',
      pic: jakarta,
      total: dataHotelByCity[0],
    },
    {
      id: 2,
      city: 'Jogjakarta',
      pic: jogya,
      total: dataHotelByCity[1],
    },
    {
      id: 3,
      city: 'Bandung',
      pic: bandung,
      total: dataHotelByCity[2],
    },
    {
      id: 4,
      city: 'Bali',
      pic: bali,
      total: dataHotelByCity[3],
    },
    {
      id: 5,
      city: 'Lombok',
      pic: lombok,
      total: dataHotelByCity[4],
    },
  ];

  const dataType = [
    {
      id: 1,
      type: 'Hotel',
      pic: hotel,
      total: dataHotelByType[0]?.count,
    },
    {
      id: 2,
      type: 'Resort',
      pic: resort,
      total: dataHotelByType[2]?.count,
    },
    {
      id: 3,
      type: 'Villa',
      pic: villa,
      total: dataHotelByType[1]?.count,
    },
    {
      id: 4,
      type: 'Apartment',
      pic: apartment,
      total: dataHotelByType[3]?.count,
    },
  ];

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
  switch (name) {
    case 'city':
      return (
        <>
          <BrowseByCityWrapper ss={breakpoint}>
            <Title>Browse by city</Title>
            <Subtitle>The most popular hotel in the city</Subtitle>
            <CardContainer {...settings} name={'city'}>
              {dataHotel.map((datum, i) => {
                return (
                  <Card key={i} name={'city'}>
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
    case 'type':
      return (
        <>
          <BrowseByCityWrapper ss={breakpoint}>
            <Title>Browse by type</Title>
            <CardContainer {...settings}>
              {dataType.map((datum, i) => {
                return (
                  <Card key={i}>
                    <ImgWrapper>
                      <Img src={datum.pic} />
                    </ImgWrapper>
                    <Text>
                      <CityTitle>{datum.type}</CityTitle>
                      <Total>{datum.total} </Total>
                    </Text>
                  </Card>
                );
              })}
            </CardContainer>
          </BrowseByCityWrapper>
        </>
      );
    default:
      <></>;
  }
}

export default BrowseByCity;
