import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

import {
  HomePage,
  RegisterPage,
  LoginPage,
  ListHotels,
  DetailHotelPage,
} from '../../pages';

function appRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/hotel" element={<ListHotels />} />
        <Route path="/hotel/:hotelId" element={<DetailHotelPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
    </Router>
  );
}

export default appRouter;
