import { Button, Typography } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


function MainPage({setLogin,setDashboard,setOpen,setOpenErr,setOpenNotFou}) {
  const dispatch = useDispatch();

  const getData = useSelector((state) => {
    return {
      loginData: state.usersReducer.login,
    };
  });

  const { loginData } = getData;

const back =()=>{
  setLogin(true)
  setDashboard(false)
  setOpen(false)
  setOpenErr(false)
  setOpenNotFou(false)
}
  const username = loginData.data.name
  return (
    <div>
    <Typography variant='h4' sx={{m:5}}>

      Welcome : {username}
    </Typography>

    <Stack direction="row" spacing={2}>
      
      <Button variant="contained" startIcon={<ArrowBackIcon />} onClick={back}>
        Back
      </Button>
    </Stack>



    </div>
  )
}

export default MainPage
