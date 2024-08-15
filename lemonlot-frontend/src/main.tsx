import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import Home from './pages/home.tsx';
import Navbar from './pages/navbar.tsx';
import RegisterUser from './pages/register-user.tsx';

const root = createRoot(document.getElementById("root")!);
root.render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path="register-user" element={<RegisterUser />} />
      </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
