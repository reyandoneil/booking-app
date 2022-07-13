import {
  LoadingContainer,
  Bg,
  Spinner,
} from './LoadingElements';
import { spinner } from '../../../Assets';

export default function index() {
  return (
    <LoadingContainer>
      <Spinner src={spinner} />
    </LoadingContainer>
  );
}
