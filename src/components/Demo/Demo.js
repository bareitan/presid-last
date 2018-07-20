import React from "react";
import "./Demo.css";
import Input from "./Input";
import Output from "./Output";
import Findings from "./Findings";

const Demo = () => (
  <div>
    <div className="columns">
      <div className="column is-half">
        <div className="box">
          <Input />
        </div>
      </div>
      <div className="column is-half">
        <div className="box">
          <Output />
        </div>
      </div>
    </div>
    <div className="column">
      <div className="box">
        <Findings />
      </div>
    </div>
  </div>
);

export default Demo;
