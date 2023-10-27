import React from "react";

function Dot({ fill }) {
  let calculatedFill;
  switch (fill) {
    case "white":
      calculatedFill = "#FFFFFF";
      break;
    case "red":
      calculatedFill = "#FF0000";
      break;
    case "blue":
      calculatedFill = "#0000FF";
      break;
    case "black":
      calculatedFill = "#000000";
      break;
    case "green":
      calculatedFill = "#00FF00";
      break;
    default:
      calculatedFill = fill;
  }
  return (
    <svg height="24" width="24">
      <circle cx="12" cy="12" r="12" fill={"#FFFFFF"} />

      <circle cx="12" cy="12" r="10" fill={calculatedFill} />
    </svg>
  );
}

export default Dot;
