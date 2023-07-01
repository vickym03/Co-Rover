

import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";
import { useStyles } from "./style";

export default function NavTabs() {
  const [value, setValue] = React.useState("/dashboard");
  const navigate = useNavigate();
  const classes = useStyles();

  const handleChange = (event, newValue) => {
    setValue(newValue);
    navigate(newValue);
  };

  return (
    

    <Box sx={{ width: "100%", paddingBottom: "20px" }}>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="black"
        indicatorColor="none"
        TabIndicatorProps={{
          style: {
            backgroundColor: "",
            color: "red",
            height: 3,
            margin: "7px",
          },
        }}
        // aria-label="secondary tabs example"
      >
        <Tab className={classes.tab} label="Dashboard" value="/dashboard" />
        <Tab label="title..." value="/userDetails" className={classes.tab} />

        {/* <Tab label="User" value="" className={classes.tab} /> */}
        {/* <Tab label="User" value="" className={classes.tab} /> */}

        
      </Tabs>
    </Box>
  );
}
