import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import moment, { months } from "moment";
import { useNavigate } from "react-router-dom";
import { useStyles } from "./style";
import {
  Button,
  FormControl,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import DateFnsUtils from "@date-io/date-fns";
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";

export default function NavTabs() {
  const [value, setValue] = React.useState("/dashboard");

  const navigate = useNavigate();
  const classes = useStyles();

  const handleChange = (event, newValue) => {
    setValue(newValue);
    navigate(newValue);
  };

  const [selectedDate, setSelectedDate] = React.useState();
  // const [access, setAccess] = React.useState(true);

  const handleDateChange = (date) => {
    console.log("date", moment(date).format("DD-MM-yyyy"));
    setSelectedDate(date);
  };
  return (
    <div>
      <Grid xs={12}>
        <Grid container spacing={1}>
          <Grid xs={9}>
            <Box sx={{ width: "100%", paddingBottom: "15px" }}>
              <Tabs value={value} onChange={handleChange} textColor="#000000">
                <Tab
                  label="Dashboard"
                  value="/dashboard"
                  className={classes.tab}
                />
                <Tab
                  label="title..."
                  value="/userDetails"
                  className={classes.tab}
                />

                <Tab label="title 2" value="" className={classes.tab} />
                {/* <Tab label="User" value="" className={classes.tab} /> */}
              </Tabs>
            </Box>
          </Grid>
          <Grid xs={3}>
            <Box>
              <FormControl
                varient="outlined"
                fullWidth
                sx={{ paddingLeft: "80px" }}
              >
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <KeyboardDatePicker
                    minDate={moment().subtract(1, "months")}
                    maxDate={moment()}
                    fullWidth
                    InputLabelProps={{ shrink: true }}
                    inputVariant="outlined"
                    id="date-picker-dialog"
                    label="Select Date"
                    format="dd/MM/yyyy"
                    placeholder="dd/mm/yyyy"
                    clearable
                    value={selectedDate}
                    onChange={handleDateChange}
                  />
                  {/* <Button onClick={() => setAccess((a) => !a)}></Button> */}
                </MuiPickersUtilsProvider>
              </FormControl>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
