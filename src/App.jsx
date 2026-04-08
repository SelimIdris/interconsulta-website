import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Datenschutz from './pages/Datenschutz';
import Impressum from './pages/Impressum';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/datenschutz" element={<Datenschutz />} />
        <Route path="/impressum" element={<Impressum />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
