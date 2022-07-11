import {
  CardPropertyContainer,
  Left,
  Right,
  Picture,
  Img,
  Name,
  Distance,
  Text,
  Promo,
  SubText,
  Top,
  Bottom,
  LeftLeft,
  LeftRight,
  Price,
  BottomLeftRight,
  TopLeftRight,
  Availabillty,
} from './CardPropertyElements';

function CardProperty({ img, name, distance, city, price, ss }) {
  return (
    <CardPropertyContainer ss={ss}>
      <Left>
        <Picture>
          <Img src={img} />
        </Picture>
      </Left>
      <Right>
        <LeftLeft ss={ss}>
          <Top>
            <Name>{name}</Name>
            <Distance>
              {distance} from center {'>'} {city} {'>'} Indonesia
            </Distance>
            <Promo>Limited-time Deal</Promo>
          </Top>
          <Bottom>
            <Text>Breakfast included</Text>
            <SubText>For two person.</SubText>
            <Text>Free Cancellation</Text>
            <SubText>
              You can cancel later, so lock in this great price today.
            </SubText>
          </Bottom>
        </LeftLeft>
        <LeftRight>
          <TopLeftRight></TopLeftRight>
          <BottomLeftRight>
            <Price>Rp {price}</Price>
            <SubText>Include taxes and charges</SubText>
            <Availabillty>See Availabillty</Availabillty>
          </BottomLeftRight>
        </LeftRight>
      </Right>
    </CardPropertyContainer>
  );
}

export default CardProperty;
