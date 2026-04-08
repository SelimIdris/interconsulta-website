import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Datenschutz from './pages/Datenschutz';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/datenschutz" element={<Datenschutz />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
