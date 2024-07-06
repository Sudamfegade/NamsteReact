import React from "react";
import ReactDOM from "react-dom/client";
const Heading = () => (
  <h1 className="head" tabIndex={0}>
    Namste react
  </h1>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Heading />);
