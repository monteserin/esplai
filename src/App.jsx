import { useState } from "react";
import { createPerson } from "./app/services/people";
const App = () => {
  const [userName, setUserName] = useState();
  return (
    <div>
      <input type="text" onChange={(e) => setUserName(e.target.value)} />

      <button onClick={() => createPerson({ userName })}>Salvar datos</button>
    </div>
  );
};

export default App;
