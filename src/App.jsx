import { Route, Routes, BrowserRouter } from "react-router-dom";
import PrivateRoute from "./layouts/PrivateRoute";
import MainWrapper from "./layouts/MainWrapper";
import Register from "../src/views/auth/Register";
import Login from "../src/views/auth/Login";
import Logout from "./views/auth/Logout";
import ForgotPassword from "./views/auth/ForgotPassword";
import Index from './views/base/Index'

function App() {
 
 return (
  <BrowserRouter>
    <MainWrapper>
      <Routes>
        <Route path="/register/" element={<Register />} />
        <Route path="/login/" element={<Login />} />
        <Route path="/logout/" element={<Logout />} />
        <Route path="/forgot-password/" element={<ForgotPassword />} />
        <Route path="/" element={<Index />} />
      </Routes>
    </MainWrapper>
  </BrowserRouter>
 );
}

export default App;
