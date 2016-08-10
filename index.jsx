import React from "react";
import ReactDOM from "react-dom";
import Counter from "./counter.jsx";
const Heading = (props) => <h1>Counter</h1>;

ReactDOM.render(<Heading />, document.getElementById("heading"));
ReactDOM.render(<Counter initialCounter={42} />, document.getElementById("content"));
