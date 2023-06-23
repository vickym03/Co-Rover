import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, IconButton, Typography } from "@mui/material";
import { useStyles } from "./style";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import PersonAddSharpIcon from "@mui/icons-material/PersonAddSharp";

import {
  sentIcon,
  deliveredIcon,
  readIcon,
  clickedIcon,
  replayedIcon,
  failedIcon,
} from "./Icons";
import Graph from "./Graph";
import TableData from "./TableData";
import TableUserData from "../../TableDetails/views/TableUserData";
import { useNavigate } from "react-router-dom";
function MainDashboard() {
  const Item = styled(Paper)(({ theme }) => ({
    // backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#F4F6F7",
    ...theme.typography.body2,
    // padding: theme.spacing(1),
    // paddingLeft: "20px",
    color: "#4D5656",
  }));
  const classes = useStyles();
  const navigate = useNavigate();

  const [tableView, setTableView] = useState(false);
  const getData = useSelector((state) => {
    return {
      loginData: state.usersReducer.login,
    };
  });

  const { loginData } = getData;
  // const username = loginData !== undefined && loginData.data.name;
  const handleFormView = () => {
    navigate("/userDetails");
  };
  return (
    <div>
      <Box sx={{ flexGrow: 1, padding: "30px" }}>
        <Typography variant="h5" sx={{ padding: "0px 0px 10px 0px" }}>
          Hello,
        </Typography>
        <Grid item xs={12}>
          <Grid container spacing={4}>
            <Grid item xs={4}>
              <Item>
                <Grid className={classes.paperBackgound}>
                  <Typography variant="h7">Status</Typography>
                  <br />
                  <Typography variant="h6" className={classes.textColor}>
                    <b> SENT </b>
                  </Typography>
                </Grid>
              </Item>
            </Grid>
            <Grid item xs={4}>
              <Item>
                <Grid className={classes.paperBackgound}>
                  <Typography variant="h9"> Audience</Typography> <br />
                  <Typography variant="h6" className={classes.textColor}>
                    <b> 7870</b>
                  </Typography>
                </Grid>
              </Item>
            </Grid>
            <Grid item xs={4}>
              <Item>
                <Grid className={classes.paperBackgound}>
                  <Typography variant="h9">Total Credit Usage</Typography>
                  <br />
                  <Typography variant="h6" className={classes.textColor}>
                    <b> 8585</b>
                  </Typography>
                </Grid>
              </Item>
            </Grid>
          </Grid>
          <Grid item xs={12} sx={{ flexGrow: 1, paddingTop: "20px" }}>
            <Grid container spacing={1}>
              <Grid item xs={2}>
                <Item>
                  <Grid className={classes.sent}>
                    {/* <span>
                      Sent {sentIcon}
                      <span className={classes.iconsize}> </span>
                    </span> */}
                    <Typography variant="h7">Sent {sentIcon}</Typography>

                    <br />
                    <Typography variant="h6" className={classes.textColor}>
                      <b>10</b>
                    </Typography>
                  </Grid>
                </Item>
              </Grid>
              <Grid item xs={2}>
                <Item>
                  <Grid className={classes.delivered}>
                    <Typography variant="h7">
                      Delivered {deliveredIcon}
                    </Typography>
                    <br />
                    <Typography variant="h6" className={classes.textColor}>
                      <b> 6 </b>
                    </Typography>
                  </Grid>
                </Item>
              </Grid>
              <Grid item xs={2}>
                <Item>
                  <Grid className={classes.read}>
                    <Typography variant="h7">Read {readIcon}</Typography>
                    <br />
                    <Typography variant="h6" className={classes.textColor}>
                      <b>4</b>
                    </Typography>
                  </Grid>
                </Item>
              </Grid>
              <Grid item xs={2}>
                <Item>
                  <Grid className={classes.clicked}>
                    <Typography variant="h7">Clicked {clickedIcon}</Typography>
                    <br />
                    <Typography variant="h6" className={classes.textColor}>
                      <b> 5 </b>
                    </Typography>
                  </Grid>
                </Item>
              </Grid>
              <Grid item xs={2}>
                <Item>
                  <Grid className={classes.replied}>
                    <Typography variant="h9">Replied {replayedIcon}</Typography>{" "}
                    <br />
                    <Typography variant="h6" className={classes.textColor}>
                      <b>7</b>
                    </Typography>
                  </Grid>
                </Item>
              </Grid>
              <Grid item xs={2}>
                <Item>
                  <Grid className={classes.failed}>
                    <Typography variant="h9">Failed {failedIcon}</Typography>
                    <br />
                    <Typography variant="h6" className={classes.textColor}>
                      <b> 8</b>
                    </Typography>
                  </Grid>
                </Item>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <Grid sx={{ padding: "0px 30px 20px 0px" }}>
        <Button
          onClick={handleFormView}
          className={classes.buttonAdd}
          startIcon={<PersonAddSharpIcon />}
        >
          Add User
        </Button>
      </Grid>
      <TableData />
      <Graph />
    </div>
  );
}

export default MainDashboard;
