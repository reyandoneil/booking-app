import {
  LoadingContainer,
  Bg,
  MessageWrapper,
  Spinner,
} from './LoadingElements';
import { spinner } from '../../../Assets';

export default function index() {
  return (
    <LoadingContainer>
      <Spinner src={spinner} />
      <MessageWrapper>loading</MessageWrapper>
    </LoadingContainer>
  );
}
