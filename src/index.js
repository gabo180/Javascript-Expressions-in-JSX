import React from "react";
import ReactDOM from "react-dom";

let fName = "Gabriel";
let lName = "Hernandez";
let luckyNumber = "10";

ReactDOM.render(
  <div>
    <h1>
      Hello {fName} {lName}!
    </h1>
    <p>Your lucky number is {luckyNumber}</p>
  </div>,
  document.getElementById("root")
);
