import React from "react";

// Canvas
import CanvasJSReact from "@canvasjs/react-charts";

const test = () => {
  var CanvasJS = CanvasJSReact.CanvasJS;
  var CanvasJSChart = CanvasJSReact.CanvasJSChart;

  var chart = new CanvasJS.Chart("chartContainer", {
    animationEnabled: true,
    title: {
      text: "",
    },
    data: [
      {
        type: "pie",
        startAngle: 240,
        yValueFormatString: '##0.00"%"',
        indexLabel: "{label} {y}",
        dataPoints: [
          { y: 79.45, label: "Google" },
          { y: 7.31, label: "Bing" },
          { y: 7.06, label: "Baidu" },
          { y: 4.91, label: "Yahoo" },
          { y: 1.26, label: "Others" },
        ],
      },
    ],
  });
  chart.render();

  return <div className="chartContainer"></div>;
};

export default test;
