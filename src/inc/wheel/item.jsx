import React from "react";

const Item = ({ num, con, count, keys }) => {
  return (
    <span key={keys} style={{ "--i": count }}>
      <p>{num}</p>
    </span>
  );
};

export default Item;
