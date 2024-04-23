import { useEffect, useState } from "react";
import falacias from "./falacias.json";
import { getRandom, shuffleArray } from "./app/utils";
import Option from "./components/Option";
const App = () => {
  const [falacy, setFalacy] = useState();
  const [options, setOptions] = useState([]);
  useEffect(() => {
    chooseRandomFalacy();
  }, []);

  const chooseRandomFalacy = () => {
    const f = falacias[Math.floor(Math.random() * falacias.length)];
    console.log(f);
    setFalacy(f);
    const falacysAux = falacias.filter((fal) => fal.type !== f.type);
    const newFalacysShuflled = shuffleArray([...getRandom(falacysAux, 2), f]);
    setOptions(newFalacysShuflled);
  };
  return (
    <div>
      <p>
        {falacy?.samples[Math.floor(Math.random() * falacy?.samples.length)]}
      </p>
      <div>
        {options.map((option) => (
          <Option
            key={option.type}
            falacy={option}
            rightFalacy={falacy}
            sendSolution={(sol) => {
              if (sol) {
                alert("Correcto");
              } else {
                alert("Incorrecto");
              }
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
