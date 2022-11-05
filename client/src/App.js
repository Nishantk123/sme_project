import React from "react";
import "./style/App.scss";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";

const LoginComponent = React.lazy(() => import("./views/Login"));
const RegisterComponent = React.lazy(() => import("./views/register/Register"));
const HomeComponent = React.lazy(() => import("./views/Home"));
const ForgetPasswordCOmponent = React.lazy(()=> import("./views/ForgetPassword"))

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginComponent />} />
        <Route path="/forget_password" element={<ForgetPasswordCOmponent />} />

        <Route path="/register" element={<RegisterComponent />} />
        <Route path="/" element={<HomeComponent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
