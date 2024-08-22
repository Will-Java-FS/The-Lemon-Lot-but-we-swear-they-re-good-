import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import NotFound from "./components/NotFound404";
import RegistrationForm from "./components/RegistrationForm";
import DemoPage from "./components/Transaction";
import TransactionsComponent from "./components/Transaction";

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<RegistrationForm />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/Transaction" element = {<TransactionsComponent/>}/>
        </Routes>
      </div>
    </>
  );
}

export default App;
