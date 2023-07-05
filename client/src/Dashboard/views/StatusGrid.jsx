import PropTypes from "prop-types";
import {
  Avatar,
  Card,
  CardContent,
  Stack,
  SvgIcon,
  Typography,
} from "@mui/material";

import { useDispatch ,useSelector} from "react-redux";
export const StatusGrid = (props) => {
  const { count, value, bgcolor, icon } = props;


const getState =useSelector((state)=>{
  return{
    dashboardData: state.dashboardReducers.dashboardData,

  }
})

const { dashboardData } = getState;

const { dashboard } =  dashboardData;


  return (
    <Card>
      <CardContent>
        <Stack
          alignItems="flex-start"
          direction="row"
          justifyContent="space-between"
          spacing={3}
        >
          <Stack spacing={1}>
            <Typography color="#716969" variant="h6">
              {value}
            </Typography>
            <Typography variant="h6">
              <b>{count}</b>
            </Typography>
          </Stack>
          <Avatar
            sx={{
              backgroundColor: bgcolor,
              height: 56,
              width: 56,
            }}
          >
            <SvgIcon>{icon}</SvgIcon>
          </Avatar>
        </Stack>
      </CardContent>
    </Card>
  );
};

StatusGrid.prototypes = {
  value: PropTypes.string.isRequired,
  bgcolor: PropTypes.string,
  icon: PropTypes.object,
};
