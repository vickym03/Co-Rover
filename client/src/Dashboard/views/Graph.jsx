import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip as TooltipAreaChart,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import Chart from "./PieChart";
import AreaGraph from "./AreaGraph";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#ffffff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  //   textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Graph() {
  /***********************line Grpah *************************/
  const lineGraphData = [
    {
      name: "Send",
      uv: 10,
    },
    {
      name: "Delivered",
      uv: 6,
     
    },
    {
      name: "Read",
      uv: 4,
      // pv: 9800,
      // amt: 2290,
    },
    {
      name: "Clicked",
      uv: 5,
      // pv: 10,
      // amt: 2000,
    },
    {
      name: "Replied",
      uv: 7,
      pv: 10,
      // amt: 2181,
    },
    {
      name: "Failed",
      uv: 8,
      //  pv: 10,
      // amt: 2500,
    },
  ];
  /***************Pie chart***************/
  const data = [
    { name: "Send", value: 10 },
    { name: "Group B", value: 6 },
    { name: "Group C", value: 4 },
    { name: "Group D", value: 5 },
    { name: "Group E", value: 7 },
    { name: "Group F", value: 8 },
  ];

  const COLORS = [
    "#85C1E9",
    "#82E0AA ",
    "#2980B9 ",
    "#BB8FCE  ",
    "#F0B27A",
    "#EF5350",
  ];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    Legend,
    index,
    name,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <div>
      {/* <Typography sx={{ flexGrow: 1 }} variant="h5">
        Graph
      </Typography> */}
      <Box sx={{ flexGrow: 1 }}>
        <Grid item xs={12}>
          <Grid container spacing={1}>
            <Grid item xs={7.5}>
              <Item>
                {/* <Typography variant="h6" sx={{ color: "black" }}>
                  Area Chart
                </Typography> */}
                {/* <AreaChart
                  width={800}
                  height={400}
                  data={lineGraphData}
                  margin={{
                    top: 30,
                    right: 30,
                    left: 0,
                    bottom: 10,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <TooltipAreaChart />
                  <Area
                    type="Send"
                    dataKey="uv"
                    stackId="1"
                    stroke="#8884d8"
                    fill="#8884d8"
                  />
                  <Area
                    type="Delivered"
                    dataKey="pv"
                    stackId="1"
                    stroke="#82ca9d"
                    fill="#82ca9d"
                  />
                  <Area
                    type="Read"
                    dataKey="amt"
                    stackId="1"
                    stroke="#ffc658"
                    fill="#ffc658"
                  />
                  <Area
                    type="Clicked"
                    dataKey="uv"
                    stackId="1"
                    stroke="#8884d8"
                    fill="#8884d8"
                  />
                  <Area
                    type="Replied"
                    dataKey="pv"
                    stackId="1"
                    stroke="#82ca9d"
                    fill="#82ca9d"
                  />
                  <Area
                    type="Failed"
                    dataKey="amt"
                    stackId="1"
                    stroke="#ffc658"
                    fill="#ffc658"
                  />
                </AreaChart> */}
                <AreaGraph/>
              </Item>
            </Grid>
            <Grid item xs={4.5}>
              <Item>
                {/* <Typography variant="h6" sx={{ color: "black" }}>
                  Pie Graph
                </Typography> */}
                {/* <PieChart width={400} height={400}>
                  <Pie
                    data={data}
                    cx={200}
                    cy={200}
                    labelLine={false}
                    Label
                    label={renderCustomizedLabel}
                    // outerRadius={80}
                    Legend
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {data.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                </PieChart> */}

                <Chart/>
              </Item>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
