import { usePaulContext } from "../../AppContext";

import data from "../../data.json";
import Item from "./item";
import Message from "./Message";

const Wheel = () => {
  const { spinAnimation, message, result, setResult, showPop } =
    usePaulContext();

  return (
    <div className="wheelBody">
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
              keys={dat.id}
            />
          );
        })}
      </div>

      <h1>{showPop}</h1>

      {showPop === true &&
        data.map((dat, i) => {
          if (result === dat.id) {
            return <Message value={dat.condition} />;
          }
        })}
    </div>
  );
};

export default Wheel;
