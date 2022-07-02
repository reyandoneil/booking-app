import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

import { HomePage, RegisterPage, LoginPage } from '../../pages';

function appRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<Navigate to="/home" replace />} />

      </Routes>
    </Router>
  );
}

export default appRouter;
