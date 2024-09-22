import React, { useState, useContext } from "react";

import { usePaulContext } from "../../AppContext";
import { HiXMark } from "react-icons/hi2";
import data from "../../data.json";

import Game from "../plinko/Game";

const Message = ({ value }) => {
  const {
    message,
    result,
    closePopUp,
    showPop,
    showPlinko,
    closePopUpAndOpenPlinko,
  } = usePaulContext();

  return (
    <div id="PopUpMessage">
      <HiXMark onClick={closePopUp} />
      <p>{value}</p>

      {showPop === true &&
        data.map((dat, i) => {
          if (result === dat.id) {
            if (dat.plinko === 1) {
              return (
                <div>
                  <Game id={dat.id} num_of_buckets={dat.dice} />

                  <p>Number of buckets to generate: {dat.dice}</p>
                </div>
              );
            }
            if (dat.plinko === 0) {
              return <h1>{i} : NO IT IS NOT Plinko Time</h1>;
            }
          }
        })}

      {showPlinko === false && (
        <button onClick={closePopUp} className="closeMessage">
          Close Modal
        </button>
      )}
    </div>
  );
};

export default Message;
