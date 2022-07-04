import {
  CovidMessageWrapper,
  CovidMessage,
  Text,
  Links,
} from './CovidElements';
import { useSelector } from 'react-redux';

function Covid() {
  const breakpoint = useSelector(
    (state) => state.GlobalReducer.screenSize
  );
  return (
    <CovidMessageWrapper ss={breakpoint}>
      <CovidMessage>
        <Text>
          Get the advice you need. Check the latest COVID-19
          restrictions before you travel.
          <Links
            href="https://kemlu.go.id/portal/id/page/72/covid-19%20update"
            target="_blank"
          >
            Learn more
          </Links>
        </Text>
      </CovidMessage>
    </CovidMessageWrapper>
  );
}

export default Covid;
