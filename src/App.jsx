import { Routes, Route, Navigate } from 'react-router-dom';
import Landing from './pages/Landing.jsx';
import Menu from './pages/Menu.jsx';
import Rate from './pages/Rate.jsx';
import ThankYou from './pages/ThankYou.jsx';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/rate" element={<Rate />} />
      <Route path="/thank-you" element={<ThankYou />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
