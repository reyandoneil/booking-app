import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Navbar, Sidebar } from '../../components/Organisms';
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
} from './DetailHotelElements';
import { Button } from '../../components/Atoms';
import { Loading } from '../../components/Molecules';

function DetailHotel() {
  const breakPoint = useSelector(
    (state) => state.GlobalReducer.screenSize
  );
  const details = useSelector(
    (state) => state.HotelsReducer.dataDetails
  );
  const loading = useSelector((state) => state.HotelsReducer.loading);
  useEffect(() => {}, []);

  const { hotelId } = useParams();
  console.log(details?.data);
  return (
    <>
      <Navbar />
      <DetailHotelContainer ss={breakPoint}>
        {loading ? (
          <Loading />
        ) : (
          <>
            <TopMenu>
              <Button
                title={'Info & price'}
                className={'topDetail'}
              />
              <Button title={'Facility'} className={'topDetail'} />
              <Button title={'House rules'} className={'topDetail'} />
            </TopMenu>
            <TitleMenu>
              <PropertyType>{details?.data?.type}</PropertyType>
              <PropertyName>{details?.data?.name}</PropertyName>
            </TitleMenu>
            <PropertyAddress>
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
            <DescWrapper>
              <DescTitle>{details?.data?.title}</DescTitle>
              <Desc>{details?.data?.desc}</Desc>
            </DescWrapper>
          </>
        )}
      </DetailHotelContainer>
    </>
  );
}

export default DetailHotel;
