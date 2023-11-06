import "./App.css";
import Header from './Components/Header/Header';
import Register from "./Components/Auth/Register";
import Login from "./Components/Auth/Login";
import Cart from "./Components/Cart/Cart";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./Components/Landing Page/LandingPage";

function App() {
  return (
    <BrowserRouter>
      <>
       <Header/>

        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;
