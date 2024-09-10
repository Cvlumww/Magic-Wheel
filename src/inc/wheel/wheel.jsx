import { useContext } from "react";
import AppContext from "../../AppContext";

// Canvas
import CanvasJSReact from "@canvasjs/react-charts";

import data from "../../data.json";
import Test from "./test";
import Item from "./item";

const Wheel = () => {
  const { counter, setCounter, spinAnimation } = useContext(AppContext);

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
  // chart.render();

  return (
    <div className="wheelBody">
      <h3>Wheel Goes Here</h3>

      <div className="chartContainer"></div>

      <div className="spinBtn" onClick={spinAnimation}>
        Spin
      </div>

      <div className="wheel" id="wheelElement">
        {data.map((dat, i) => {
          return (
            <Item
              num={dat.num}
              con={dat.condition}
              count={i + 1}
              key={dat.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Wheel;
