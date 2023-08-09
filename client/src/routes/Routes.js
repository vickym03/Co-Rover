import Register from "../Login/views/Register";
import Login from "../Login/views/Login";
import MainPage from "../Login/views/MainPage";
import TableUserData from "../TableDetails/views/TableUserData";
import { useDispatch, useSelector } from "react-redux";
import Referesh from "../core/auth/Referesh";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import React from "react";
export default function Router() {
  const [isSigned, setIsSigned] = React.useState(true);
  const [sign, setSign] = React.useState(false);

  const getState = useSelector((state) => {
    return {
      loginData: state.usersReducer.login,
    };
  });
  const { loginData } = getState;

  const value = loginData !== undefined && loginData.login;

  if (value) sessionStorage.setItem("login", JSON.stringify(loginData));

  const loginparse = sessionStorage.getItem("login");
  const login = JSON.parse(loginparse);
  const Token = login !== null && login.accessToken;

  // React.useEffect(() => {
  //   if (login !== null) {
  //     setTimeout(() => {
  //       setIsSigned(false);
  //       setSign(true);
  //     }, 1000);
  //   } else {
  //     setIsSigned(true);
  //     setSign(false);
  //   }
  // }, [login]);

  return (
    <>
      <BrowserRouter>
        <Routes>
          {login === null && (
            <>
              <Route exact path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="*" element={<Navigate to="/login" />} />
            </>
          )}

          {login !== null && Token.length > 0 && (
            <>
              <Route path="/dashboard" element={<MainPage />} />
              <Route path="/userDetails" element={<TableUserData />} />
              <Route path="*" element={<Navigate to="/dashboard" replace />} />
            </>
          )}
        </Routes>
        <Referesh />
      </BrowserRouter>
    </>
  );
}
