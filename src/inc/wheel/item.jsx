import React from "react";

const Item = ({ num, con, count, key }) => {
  return (
    <span key={key} style={{ "--i": count }}>
      {num}
    </span>
  );
};

export default Item;
