import React from "react";
import FindingItem from "./FindingItem";

const findings = [
  {
    type: "Credit Card",
    certainity: 0.8,
    text: "34234-343434-34224",
    line: "4:23"
  },
  {
    type: "Credit Card",
    certainity: 0.8,
    text: "34234-343434-34224",
    line: "4:23"
  },
  {
    type: "Credit Card",
    certainity: 0.8,
    text: "34234-343434-34224",
    line: "4:23"
  },
  {
    type: "Credit Card",
    certainity: 0.8,
    text: "34234-343434-34224",
    line: "4:23"
  },
  {
    type: "Credit Card",
    certainity: 0.8,
    text: "34234-343434-34224",
    line: "4:23"
  }
];

const Findings = () => (
  <div>
    <p className="has-text-weight-bold">Findings: </p>
    <table className="table is-striped is-narrow is-hoverable is-fullwidth">
      <thead>
        <tr>
          <th>Type</th>
          <th>Certainity</th>
          <th>Text</th>
          <th>Line:Char</th>
        </tr>
      </thead>
      <tbody>
        {findings.map(finding => <FindingItem finding={finding} />)}
      </tbody>
    </table>
  </div>
);

export default Findings;
