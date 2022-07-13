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
} from './CardPropertyElements';
import { useNavigate } from 'react-router-dom';
import { RupiahFormat } from '../../../utils';
import { Button } from '../../Atoms';
import { useDispatch } from 'react-redux';
import { searchPropertyById } from '../../../store/Action/HotelAction';

function CardProperty({ id, img, name, distance, city, price, ss }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onClickDetail = () => {
    navigate(`/hotel/${id}`);
    dispatch(searchPropertyById(id));
  };
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
            <Price>{RupiahFormat(price)}</Price>
            <SubText>Include taxes and charges</SubText>
            <Button
              title={'See Availability'}
              className={'availability'}
              onClick={onClickDetail}
            />
          </BottomLeftRight>
        </LeftRight>
      </Right>
    </CardPropertyContainer>
  );
}

export default CardProperty;
