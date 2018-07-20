import React from "react";

const Output = () => (
  <div>
    <p className="has-text-weight-bold">Output text:</p>
    <textarea
      className="textarea"
      rows="20"
      placeholder="e.g. Anonymized text will show here as you type."
      readOnly
    />
  </div>
);

export default Output;
