import {
  BrowseByCityWrapper,
  Title,
  Subtitle,
  CardContainer,
} from './BrowseByCityElements';
import { useSelector } from 'react-redux';

function BrowseByCity() {
  const breakpoint = useSelector(
    (state) => state.GlobalReducer.screenSize
  );
  return (
    <>
      <BrowseByCityWrapper ss={breakpoint}>
        <Title>Browse by city</Title>
        <Subtitle>The most popular hotel in the city</Subtitle>
        <CardContainer></CardContainer>
      </BrowseByCityWrapper>
    </>
  );
}

export default BrowseByCity;
