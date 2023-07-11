import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { refreshTokenRequest } from "./actions";
import { useNavigate } from "react-router-dom";

function Referesh() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const getState = useSelector((state) => {
    return {
      refresh: state.authReducer.refreshData,
    };
  });

  const { refresh } = getState;

  if (refresh && refresh !== undefined && refresh.status === 404) {
    // window.location.reload();

    navigate("/login");
    sessionStorage.setItem("login", null);
  }

  const loginparse = sessionStorage.getItem("login");
  const login = JSON.parse(loginparse);

  const refreshToken = login !== null && login.refreshToken;
  console.log("refreshToken out", refreshToken);


    React.useEffect(() => {
      let interval = setInterval(() => {
        refreshToken && dispatch(refreshTokenRequest(refreshToken));
      }, 30000);
      return () => {
        clearInterval(interval);
      };
    }, [refreshToken]);
}

export default Referesh;
