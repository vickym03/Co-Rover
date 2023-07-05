import React from "react";
import ReactEcharts from "echarts-for-react";
import { useDispatch, useSelector } from "react-redux";

export default function Chart() {
  const getState = useSelector((state) => {
    return {
      loginData: state.usersReducer.login,
      dashboardData: state.dashboardReducers.dashboardData,
    };
  });

  const { dashboardData } = getState;

  const getOptions = () => ({
    // title: {
    //   text: "JS Front End Frameworks",
    //   x: "center"
    // },
    tooltip: {
      trigger: "item",
      formatter: "{a} <br/>{b} : {c} ({d}%)",
    },
    legend: {
      // orient: "vertical",

      icon: "circle",
      // type: 'scroll',
      // orient: 'vertical',
      // right: 10,
      // top: 20,
      // bottom: 0,
      data: ["Send", "Delivered", "Read", "Clicked", "Replied", "Failed"],
    },

    toolbox: {
      show: true,
      feature: {
        // mark: { show: true },
        // dataView: { show: true, readOnly: false },
        // restore: { show: true },
        saveAsImage: { show: true },
      },
    },
    series: [
      {
        name: "",
        type: "pie",
        radius: "55%",
        center: ["50%", "60%"],
        data:
          dashboardData &&
          dashboardData !== undefined &&
          dashboardData.pieChart,

        // [
        //   {
        //     value: 10,
        //     name: "Send",
        //     itemStyle: { color: "#1A5276" },
        //   },
        //   {
        //     value: 6,
        //     name: "Delivered",
        //     itemStyle: { color: "#6a994e" },
        //   },
        //   {
        //     value: 4,
        //     name: "Read",
        //     itemStyle: { color: "#3498DB" },
        //   },
        //   {
        //     value: 5,
        //     name: "Clicked",
        //     itemStyle: { color: "#A569BD" },
        //   },
        //   {
        //     value: 7,
        //     name: "Replied",
        //     itemStyle: { color: "#E67E22" },
        //   },
        //   {
        //     value: 8,
        //     name: "Failed",
        //     itemStyle: { color: "#CB4335 " },
        //   },
        // ]

        itemStyle: {
          emphasis: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)",
          },
        },
      },
    ],
  });
  return (
    <div>
      <ReactEcharts option={getOptions()} style={{ height: 400 }} />
    </div>
  );
}
