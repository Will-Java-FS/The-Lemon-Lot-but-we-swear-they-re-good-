import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import NotFound from "./components/NotFound404";
import RegistrationForm from "./components/RegistrationForm";
import TransactionPage from "./Page/TransactionPage";

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<RegistrationForm />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/Transaction" element = {<TransactionPage/>}/>
        </Routes>
      </div>
    </>
  );
}

export default App;
