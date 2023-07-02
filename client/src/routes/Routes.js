import { useEffect, useState } from "react";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Register from "../Login/views/Register";
import Login from "../Login/views/Login";
import MainPage from "../Login/views/MainPage";
import TableUserData from "../TableDetails/views/TableUserData";
import { useDispatch, useSelector } from "react-redux";

function Router() {
  const getData = useSelector((state) => {
    return {
      loginData: state.usersReducer.login,
    };
  });
  const { loginData } = getData;

  const value = loginData !== undefined && loginData.login;

  if (value) localStorage.setItem("login", JSON.stringify(loginData));

  const loginparse = localStorage.getItem("login");
  const login = JSON.parse(loginparse);


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<Navigate to="/login" replace />} />

          {login !== null && login.login && (
            <>
              <Route path="/dashboard" element={<MainPage />} />
              <Route path="/userDetails" element={<TableUserData />} />
            </>
          )}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Router;

// import { useEffect, useState } from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { Navigate } from "react-router-dom";
// import Register from "../Login/views/Register";
// import Login from "../Login/views/Login";
// import MainPage from "../Login/views/MainPage";
// import TableUserData from "../TableDetails/views/TableUserData";
// import { useDispatch, useSelector } from "react-redux";

// const Protected = ({ isSignedIn, children }) => {
//   if (!isSignedIn) {
//     return <Navigate to="/" replace />;
//   }
//   return children;
// };

// const Router = () => {
//   const [isSignedIn, setIsSignedIn] = useState(true);

//   const getData = useSelector((state) => {
//     return {
//       loginData: state.usersReducer.login,
//     };
//   });
//   const { loginData } = getData;

//   const value = loginData !== undefined && loginData.login;

//   //   const signin = () => {
//   //     setIsSignedIn(true);
//   //   };
//   //   const signout = () => {
//   //     setIsSignedIn(false);
//   //   };

//   useEffect(() => {
//     if (value) setIsSignedIn(true);
//     else setIsSignedIn(false);
//   }, [value]);
//   return (
//     <div>
//       <BrowserRouter>
//         <Routes>
//           <Route path="/login" element={<Login />} />
//           <Route path="/register" element={<Register />} />
//           <Route path="*" element={<Navigate to="/login" replace />} />

//           <Route
//             path="/dashboard"
//             element={
//               <Protected isSignedIn={isSignedIn}>
//                 <MainPage />
//               </Protected>
//             }
//           />
//           <Route
//             path="/userDetails"
//             element={
//               <Protected isSignedIn={isSignedIn}>
//                 <TableUserData />
//               </Protected>
//             }
//           />
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// };

// export default Router;
