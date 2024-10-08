import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import NotFound from "./components/NotFound404";
import RegistrationPage from "@/pages/RegistrationPage";
import LoginPage from "@/pages/LoginPage";
import UserProfile from "@/pages/UserProfile";
import { Toaster } from "@/components/ui/toaster";
import Navbar from "@/components/Navbar";
import EditUserPage from "@/pages/EditUserPage";
import AdminPortal from "./pages/AdminPortal";
import CarSearchPage from "./pages/CarSearchPage";
import TransactionsComponent from "./pages/Transaction";
import InventoryManagement from "./pages/InventoryManagement";
import CarCreationPage from "./pages/CarCreationPage";
import EditCarPage from "./pages/EditCarPage";
import MyTransactionsPage from "./pages/MyTransactionsPage";

function App() {
  return (
    <>
      <div>
        <Toaster />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/user-profile" element={<UserProfile />} />
          <Route path="/edit-user/:userId" element={<EditUserPage />} />
          <Route path="/edit-car/:carId" element={<EditCarPage />} />
          <Route path="/admin-portal" element={<AdminPortal />} />
          <Route path="/search-cars" element={<CarSearchPage />} />
          <Route path="manage-inventory" element={<InventoryManagement />} />
          <Route path="/create-car" element={<CarCreationPage />} />
          <Route path="/my-transactions" element={<MyTransactionsPage />} />
          <Route path="/transactions" element={<TransactionsComponent />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
