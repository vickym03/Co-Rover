import React, { useEffect, useState } from "react";
import ReactEcharts from "echarts-for-react";
import { useSelector } from "react-redux";

export default function AreaGraph() {
  const getState = useSelector((state) => {
    return {
      dashboardData: state.dashboardReducers.dashboardData,
    };
  });

  const { dashboardData } = getState;

  const getOptions = () => ({
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "cross",
        label: {
          backgroundColor: "#6a7985",
        },
      },
    },

    legend: {
      icon: "circle",
      // type: 'scroll',
      // orient: 'vertical',
      // right: 10,
      // top: 20,
      // bottom: 0,
      data: ["Send", "Delivered", "Read", "Clicked", "Replied", "Failed"],
    },
    toolbox: {
      feature: {
        saveAsImage: {},
      },
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },
    xAxis: [
      {
        type: "category",
        boundaryGap: false,
        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      },
    ],
    yAxis: [
      {
        type: "value",
      },
    ],
    series:
      dashboardData && dashboardData !== undefined && dashboardData.areaChart,

    // [
    //   {
    //     name: "Send",
    //     type: "line",
    //     stack: "Total",
    //     areaStyle: {},
    //     itemStyle: { color: "#1A5276" },
    //     emphasis: {
    //       focus: "series",
    //     },
    //     data: [820, 932, 901, 934, 1290, 1330, 1320],
    //   },
    //   {
    //     name: "Delivered",
    //     type: "line",
    //     stack: "Total",
    //     itemStyle: { color: "#6a994e" },
    //     areaStyle: {},
    //     emphasis: {
    //       focus: "series",
    //     },
    //     data: [220, 182, 191, 234, 290, 330, 310],
    //   },
    //   {
    //     name: "Read",
    //     type: "line",
    //     stack: "Total",
    //     areaStyle: {},
    //     itemStyle: { color: "#3498DB" },
    //     emphasis: {
    //       focus: "series",
    //     },
    //     data: [150, 232, 201, 154, 190, 330, 410],
    //   },
    //   {
    //     name: "Clicked",
    //     type: "line",
    //     stack: "Total",
    //     itemStyle: { color: "#A569BD" },
    //     areaStyle: {},
    //     emphasis: {
    //       focus: "series",
    //     },
    //     data: [320, 332, 301, 334, 390, 330, 320],
    //   },
    //   {
    //     name: "Replied",
    //     type: "line",
    //     stack: "Total",
    //     itemStyle: { color: "#E67E22" },
    //     label: {
    //       show: true,
    //       position: "top",
    //     },
    //     areaStyle: {},
    //     emphasis: {
    //       focus: "series",
    //     },
    //     data: [620, 932, 701, 534, 290, 830, 1320],
    //   },
    //   {
    //     name: "Failed",
    //     type: "line",
    //     stack: "Total",
    //     itemStyle: { color: "#CB4335 " },
    //     label: {
    //       show: true,
    //       position: "top",
    //     },
    //     areaStyle: {},
    //     emphasis: {
    //       focus: "series",
    //     },
    //     data: [220, 232, 201, 134, 190, 230, 210],
    //   },
    // ],
  });
  return (
    <div>
      <ReactEcharts option={getOptions()} style={{ height: 400 }} />
    </div>
  );
}
