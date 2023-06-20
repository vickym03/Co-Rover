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

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#F4F6F7",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  //   textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Graph() {
  /***********************line Grpah *************************/
  const lineGraphData = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
   
  ];
  /***************Pie chart***************/
  const data = [
    { name: "Group A", value: 10 },
    { name: "Group B", value: 6 },
    { name: "Group C", value: 4 },
    { name: "Group D", value: 5 },
    { name: "Group E", value: 7 },
    { name: "Group F", value: 8 },
  ];

  const COLORS = ["#0088FE", "#4caf50  ","#1769aa  ", "#1de9b6  ", "#FF8042", "#ff3d00"];

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
    name
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
      <Typography sx={{ flexGrow: 1, paddingLeft: "30px " }} variant="h5">
        Graph
      </Typography>
      <Box sx={{ flexGrow: 1, padding: "15px 30px 30px 30px" }}>
        <Grid item xs={12}>
          <Grid container spacing={5}>
            <Grid item xs={8}>
              <Item>
                <Typography variant="h6" sx={{ color: "black" }}>
                  Area Chart
                </Typography>
                <AreaChart
                  width={900}
                  height={400}
                  data={lineGraphData}
                  margin={{
                    top: 30,
                    right: 30,
                    left: 0,
                    bottom: 0,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <TooltipAreaChart />
                  <Area
                    type="monotone"
                    dataKey="uv"
                    stackId="1"
                    stroke="#8884d8"
                    fill="#8884d8"
                  />
                  <Area
                    type="monotone"
                    dataKey="pv"
                    stackId="1"
                    stroke="#82ca9d"
                    fill="#82ca9d"
                  />
                  <Area
                    type="monotone"
                    dataKey="amt"
                    stackId="1"
                    stroke="#ffc658"
                    fill="#ffc658"
                  />
                </AreaChart>
              </Item>
            </Grid>
            <Grid item xs={4}>
              <Item>
                <Typography variant="h6" sx={{ color: "black" }}>
                  Pie Graph
                </Typography>
                <PieChart width={400} height={400}>
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
                  
                </PieChart>

                
              </Item>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
