import { Container } from './HomeElements';
import {
  Navbar,
  Headers,
  BrowseByCity,
} from '../../components/Organisms';

function HomePage() {
  return (
    <>
      <Container>
        <Navbar />
        <Headers />
        <BrowseByCity />
        <BrowseByCity />
      </Container>
    </>
  );
}

export default HomePage;
