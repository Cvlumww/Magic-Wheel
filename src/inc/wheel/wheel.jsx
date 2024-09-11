import { usePaulContext } from "../../AppContext";

import data from "../../data.json";
import Test from "./test";
import Item from "./item";
import Message from "./Message";

const Wheel = () => {
  const { spinAnimation, message, result, setResult } = usePaulContext();

  return (
    <div className="wheelBody">
      <h3>Wheel Goes Here</h3>

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

      <Message />
    </div>
  );
};

export default Wheel;
