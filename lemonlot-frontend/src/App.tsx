import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./pages/navbar";
import RegisterUser from "./pages/register-user";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="register-user" element={<RegisterUser />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
