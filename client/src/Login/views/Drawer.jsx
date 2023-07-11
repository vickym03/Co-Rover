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
import Footer from "../../Dashboard/views/Footer";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { logoutRequest } from "../../core/auth/actions";

const useStyles = makeStyles((theme) => ({
  tooltip: {
    backgroundColor: "#FFFFFF  !important",
    color: "#F70774 !important",
    border: "2px solid #254B62",
    fontSize: "0.9em !important",
    fontWeight: "bold !important",
    textAlign: "center !important",
    boxSizing: "border-box !important",
    padding: "5px 14px 5px 20px !important",
  },
  arrow: {
    color: "#FFFFFF !important",
    "&::before": {
      border: "3px solid #254B62 !important",
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

  const loginparse = sessionStorage.getItem("login");
  const login = JSON.parse(loginparse);

  // const refreshToken = login !== null && login.refreshToken;

  // console.log("login drawer" , login.data.name)

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
          sx={{ color: "#008080 ", fontSize: "40px !important" }}
        />
      ),
      onclick: () => navigate("/dashboard"),
    },
    {
      text: "Tiltle ....",
      icon: (
        <PersonIcon sx={{ color: " #008080 ", fontSize: "40px !important" }} />
      ),
      onclick: () => navigate("/userDetails"),
    },
    // {
    //   text: "Contact",
    //   icon: ,
    //   onclick: () => history.push("/contact")
    // }
  ];

  const back = () => {
    navigate("/login");
    // dispatch(logoutRequest(refreshToken));
     dispatch(resetLogin());
    sessionStorage.setItem("login", null);
    window.location.reload();
  };

  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      backgroundColor: "#44b700",
      color: "#44b700",
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      "&::after": {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        borderRadius: "50%",
        animation: "ripple 1.2s infinite ease-in-out",
        border: "1px solid currentColor",
        content: '""',
      },
    },
    "@keyframes ripple": {
      "0%": {
        transform: "scale(.8)",
        opacity: 1,
      },
      "100%": {
        transform: "scale(2.4)",
        opacity: 0,
      },
    },
  }));

  function stringAvatar(namem) {
    const name = namem.toUpperCase();
    return {
      sx: {
        bgcolor: "orange",
      },
      children:
        name.split(" ")[0][0] === !undefined
          ? `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`
          : `${name.split(" ")[0][0]}`,
    };
  }

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar sx={{ backgroundColor: "white" }}>
          {!open && (
            <>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="end"
                sx={{
                  marginRight: 5,
                  color: "#000000",
                  ...(open && { display: "none" }),
                }}
              >
                <CoRoverIcon />
              </IconButton>
            </>
          )}
          <Grid container spacing={2} sx={{ color: "#000000" }}>
            <Grid item xs={4}>
              <Typography variant="h4" sx={{ paddingLeft: "20px" }}>
                Project title
              </Typography>
            </Grid>
            <Grid item xs={4}></Grid>
            <Grid item xs={4}>
              <IconButton
                sx={{
                  color: "#000000",
                  float: "right",
                  paddingLeft: "80px !important",
                }}
                onClick={back}
              >
                <Tooltip
                  title="Logout"
                  placement="top"
                  arrow
                  classes={{ arrow: classes.arrow, tooltip: classes.tooltip }}
                >
                  <LogoutIcon sx={{ fontSize: "30px", color: " #008080" }} />
                </Tooltip>
              </IconButton>

              <Grid sx={{ postion: "fixed", float: "right" }}>
                <Stack direction="row" spacing={2}>
                  <StyledBadge
                    overlap="circular"
                    anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                    variant="dot"
                  >
                    <Avatar
                      {...(login !== undefined &&
                        login !== null &&
                        stringAvatar(login.data.name))}
                    />
                  </StyledBadge>

                  <Typography variant="h5">
                    {login !== null && login.data.name}
                  </Typography>
                </Stack>
              </Grid>
            </Grid>
          </Grid>
        </Toolbar>
        <Footer />
      </AppBar>

      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <Grid sx={{ textAlign: "center", padding: "0px 30px 0px 0px" }}>
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
                key={index}
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
