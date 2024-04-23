import { useState } from "react";

const Option = ({ falacy, rightFalacy, sendSolution }) => {
  const [showHint, setShowHint] = useState(false);
  return (
    <div>
      <button
        onClick={() => {
          if (falacy.type === rightFalacy.type) {
            sendSolution(true);
          } else {
            sendSolution(false);
          }
        }}
      >
        X
      </button>
      {falacy.type}{" "}
      <button onClick={() => setShowHint(!showHint)}>Ver pista</button>
      {showHint && <p>{falacy.def}</p>}
    </div>
  );
};

export default Option;
