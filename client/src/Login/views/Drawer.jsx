import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import DashboardCustomizeOutlinedIcon from "@mui/icons-material/DashboardCustomizeOutlined";
import MainDashboard from "../../Dashboard/views/MainDashboard";
import { useNavigate } from "react-router-dom";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import { Button, Grid, Tooltip } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import LogoutIcon from "@mui/icons-material/Logout";
import { resetLogin } from "../actions";
import PersonIcon from "@mui/icons-material/Person";
import { CoRoverIcon, TooltipCus } from "../../Dashboard/views/Icons";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  tooltip: {
    backgroundColor: "#FFFFFF",
    color: "#F70776",
    border: "2px solid #254B62",
    fontSize: "0.9em",
    fontWeight: "bold !important",
    textAlign: "center",
    boxSizing: "border-box",
    padding: "5px 14px 5px 20px",
  },
  arrow: {
    color: "#FFFFFF",
    "&::before": {
      border: "3px solid #254B62",
    },
  },
}));

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function NavDrawer() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const classes = useStyles();

  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const itemslist = [
    {
      text: "Dashboard",
      icon: (
        <DashboardCustomizeOutlinedIcon
          sx={{ color: "#478e8e ", fontSize: "40px" }}
        />
      ),
      onclick: () => navigate("/dashboard"),
    },
    {
      text: "Tiltle ....",
      icon: <PersonIcon sx={{ color: "#478e8e ", fontSize: "40px" }} />,
      onclick: () => navigate("/userDetails"),
    },
    // {
    //   text: "Contact",
    //   icon: ,
    //   onclick: () => history.push("/contact")
    // }
  ];

  const back = () => {
    // setLogin(true);
    // setDashboard(false);
    // setOpen(false);
    // setOpenErr(false);
    // setOpenNotFou(false);
    navigate("/");
    dispatch(resetLogin());
    localStorage.setItem("login", null)
  };

  return (
    <Box sx={{ display: "flex" }}>
      {/* <CssBaseline /> */}
      <AppBar position="fixed" open={open}>
        <Toolbar sx={{ backgroundColor: "white" }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="end"
            sx={{
              marginRight: 5,
              color: "black",
              ...(open && { display: "none" }),
            }}
          >
            {/* <MenuIcon /> */}
            {/* <img
              src="https://corover.plutos.one/images/corover-logo.png"
              alt="not fount"
              height="30px"
            /> */}
            <CoRoverIcon />
          </IconButton>
          <Grid container spacing={2} sx={{ color: "black" }}>
            <Grid item xs={4}>
              {/* <img
                src="https://corover.plutos.one/images/corover-logo.png"
                alt="not fount"
                height="30px"
              /> */}
              Project title .....
            </Grid>
            <Grid item xs={4}>
              {/* <>xs=4</> */}
            </Grid>
            <Grid item xs={4}>
              {/* <Button sx={{}}> Sign Out</Button> */}
              <IconButton
                sx={{ color: "black", float: "right" }}
                onClick={back}
              >
                <Tooltip
                  title="Logout"
                  placement="right-start"
                  arrow
                  classes={{ arrow: classes.arrow, tooltip: classes.tooltip }}
                >
                  <LogoutIcon sx={{ fontSize: "30px", color: "#B22222" }} />
                </Tooltip>
              </IconButton>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>

      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          {/* <img
        src="https://corover.plutos.one/images/corover-logo.png"
        alt="not fount"
        height="30px"
        width="200px"
      /> */}
          <Grid sx={{ textAlign: "center", padding: "0px 30px 0px 0px" }}>
            {" "}
            <CoRoverIcon />
          </Grid>

          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List sx={{ paddingTop: "50px" }}>
          {itemslist.map((item, index) => {
            const { text, icon, onclick } = item;
            return (
              <Tooltip
                title={text}
                placement="right-start"
                arrow
                
                classes={{ arrow: classes.arrow, tooltip: classes.tooltip }}
              >
                <ListItem key={text} onClick={onclick}>
                  <ListItemIcon>{icon}</ListItemIcon>
                  <ListItemText primary={text} />
                </ListItem>
              </Tooltip>
            );
          })}
        </List>
      </Drawer>
      <Box sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />

        <MainDashboard />
      </Box>
    </Box>
  );
}
