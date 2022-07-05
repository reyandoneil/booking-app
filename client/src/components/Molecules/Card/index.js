import {
  Card,
  ImgWrapper,
  Img,
  Text,
  Title,
  Total,
} from './CardElements';

function Cards({ src, title, total }) {
  return (
    <Card>
      <ImgWrapper>
        <Img src={src} />
      </ImgWrapper>
      <Text>
        <Title>{title}</Title>
        <Total>{total}</Total>
      </Text>
    </Card>
  );
}

export default Cards;
