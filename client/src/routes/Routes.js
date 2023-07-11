import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Register from "../Login/views/Register";
import Login from "../Login/views/Login";
import MainPage from "../Login/views/MainPage";
import TableUserData from "../TableDetails/views/TableUserData";
import { useDispatch, useSelector } from "react-redux";
import Referesh from "../core/auth/Referesh";

function Router() {
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

  console.log("tokrn", Token)
  return (
    <>
      <BrowserRouter>
        <Routes>
          {login == null && (
            <>
              <Route exact path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="*" element={<Navigate to="/login" replace />} />
            </>
          )}

          {Token && Token.length > 0 && login.login && (
            <>
              <Route path="/dashboard" element={<MainPage />} />
              <Route path="/userDetails" element={<TableUserData />} />
              <Route path="*" element={<Navigate to="/dashboard" replace />} />
            </>
          )}
        </Routes>
        <Referesh/>
      </BrowserRouter>
    </>
  );
}

export default Router;
