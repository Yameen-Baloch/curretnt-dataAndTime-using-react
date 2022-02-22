import React from "react";
import ReactDom from "react-dom";

const myname = "Yameen Baloch";
const date = new Date().toLocaleDateString();
const time = new Date().toLocaleTimeString();

ReactDom.render(
  <>
    <h1>Hello My name is {myname}</h1>
    <h2>This a program for getting current date and time using react</h2>
    <p>Today date is: {date}</p>
    <p>The time is: {time}</p>
  </>,
  document.getElementById("root")
)