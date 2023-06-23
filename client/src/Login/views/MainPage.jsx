import { IconButton } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Stack from "@mui/material/Stack";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import MainDashboard from "../../Dashboard/views/MainDashboard";
import { resetLogin } from "../actions";

function MainPage({
  setLogin,
  setDashboard,
  setOpen,
  setOpenErr,
  setOpenNotFou,
}) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const getData = useSelector((state) => {
    return {
      loginData: state.usersReducer.login,
    };
  });

  const { loginData } = getData;

  const back = () => {
    // setLogin(true);
    // setDashboard(false);
    // setOpen(false);
    // setOpenErr(false);
    // setOpenNotFou(false);
    navigate("/");
    dispatch(resetLogin());
  };
  return (
    <div>
      <Stack direction="row" spacing={2}>
        <IconButton color="secondary" onClick={back}>
          <ArrowBackIcon />
        </IconButton>
      </Stack>

      <MainDashboard />
    </div>
  );
}

export default MainPage;
