import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FirstPage from './pages/FirstPage';
import SecondPage from './pages/SecondPage';
import ThirdPage from './pages/ThirdPage';
import Navbar from './components/Navbar';

const App: React.FC = () => (
    <BrowserRouter>
      <Routes>
            <Route path="/FirstPage" element={<FirstPage />} />
            <Route path="/SecondPage" element={<SecondPage />} />
            <Route path="/ThirdPage" element={<ThirdPage />} />
      </Routes>
    </BrowserRouter>
);

export default App
