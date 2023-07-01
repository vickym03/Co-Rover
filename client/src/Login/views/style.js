import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles(theme=>({
    
  tooltip: {
    backgroundColor: "#FFFFFF",
    color: "#9F2B68",
    border: "2px solid #9F2B68",
    fontSize: "0.9em",
    fontWeight: "bold !important",
    textAlign: "center",
    boxSizing: "border-box",
    padding: "5px 14px 5px 20px",
  },
  arrow: {
    color: "#FFFFFF",
    "&::before": {
      border: "2px solid #9F2B68",
    },
  },

hh:{
  backgroundColor:"red"
}
   
}))
