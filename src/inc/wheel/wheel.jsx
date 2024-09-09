import { useContext } from "react";
import AppContext from "../../AppContext";

import data from "../../data.json";
import Test from "./test";
import Item from "./item";

const Wheel = () => {
  const { counter, setCounter, spinAnimation } = useContext(AppContext);

  return (
    <div className="wheelBody">
      <h3>Wheel Goes Here</h3>
      {/* <ul> */}

      {/* </ul> */}

      <div className="wheel" id="wheelElement">
        {/* <div className="spinBtn" onClick={spin}>
          Spin
        </div> */}

        {data.map((dat, i) => {
          // let counter = 0;
          return (
            <Item
              num={dat.num}
              con={dat.condition}
              count={i + 1}
              key={dat.id}
            />
            // {counter + 1}
          );
        })}
      </div>
    </div>
  );
};

export default Wheel;
