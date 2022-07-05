import { Container } from './HomeElements';
import {
  Navbar,
  Headers,
  BrowseByCity,
  CovidMessage,
  Footer,
} from '../../components/Organisms';

function HomePage() {
  return (
    <>
      <Container>
        <Navbar />
        <Headers />
        <CovidMessage />
        <BrowseByCity name={'type'} />
        <BrowseByCity name={'city'} />
        <Footer />
      </Container>
    </>
  );
}

export default HomePage;
