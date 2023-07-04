import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 48,
    padding: "0 30px",
  },

  textColor: {
    color: "#000000 !important",
  },
  iconsize: {
    fontSize: "15px !important",
  },
  DataTable: {
    padding: "20px",
  },

  paperBackgound: {
    alignItems: "left",
    background: "rgb(244,246,247)",
    padding: "5px",
    background:
      "radial-gradient(circle, rgba(244,246,247,1) 0%, rgba(144,148,151,0.18820028011204482) 100%)",
  },

  sent: {
    alignItems: "left",
    // background: "rgb(244,246,247)",
    background: "#85C1E9 ",
    // "radial-gradient(circle, rgba(244,246,247,1) 0%, rgba(0,136,254,0.5139705882352942) 100%)",
    padding: "5px",
  },
  delivered: {
    alignItems: "left",
    // background: "rgb(244,246,247)",
    background: "#82E0AA ",
    // "radial-gradient(circle, rgba(244,246,247,1) 0%, rgba(76,175,80,0.506687675070028) 100%)",
    padding: "5px",
  },
  read: {
    alignItems: "left",
    // background: "rgb(244,246,247)",
    background: "#2980B9",
    // "radial-gradient(circle, rgba(244,246,247,1) 0%, rgba(23,105,170,0.5120098039215687) 100%)",
    padding: "5px",
  },
  clicked: {
    alignItems: "left",
    // background: "rgb(244,246,247)",
    background: "#BB8FCE ",
    // "radial-gradient(circle, rgba(244,246,247,1) 0%, rgba(29,233,182,0.5439425770308124) 100%)",
    padding: "5px",
    color: "#000000",
  },
  replied: {
    alignItems: "left",
    // background: "rgb(244,246,247)",
    background: "#F0B27A",
    // "radial-gradient(circle, rgba(244,246,247,1) 0%, rgba(255,128,66,0.5047268907563025) 100%)",
    padding: "5px",
  },
  failed: {
    alignItems: "left",
    // background: "rgb(244,246,247)",
    background: "#EF5350  ",
    // "linear-gradient(90deg, rgba(255,61,0,0.46551120448179273) 0%, rgba(255,61,0,1) 70%)",
    padding: "5px",
  },
  buttonAdd: {
    float: "right",
    width: "auto",
    padding: "0px 20px!important",
    // color:"red !impoertant",
    backgroundColor: "green !important",
    borderRadius: "5px !important",
    fontSize: "15px !important",
    height: "35px",
    margin: "0px 20px 0px 0px !important",
    // backgroundColor: '#4eb54f !important',
    // borderRadius: '25px !important',
    color: "#fff !important",
  },
  buttonUpdate: {
    float: "right",
    width: "auto",
    padding: "0px 20px !important",
    color: "white",
    backgroundColor: "lightblue !important",
    borderRadius: "5px !important",
    fontSize: "15px !important",
    height: "35px",
  },
  tab: {
    // background: "#ECF0F1",
    color:"gray !important",
    fontWeight:"bold !important",
    borderRadius: "200px !important",
    // hight: "30px !important",
    marginLeft:"5px",
    "&.Mui-selected": {
      // background: "#FF5722",
      // backgroundColor:"#5DADE2",
          color:"black !important",

    },
  },
}));
