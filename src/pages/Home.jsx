import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { access } from "../app/services/services";
import { useUserContext } from "../app/providers/UserProvider";

const Home = () => {
  const [name, setName] = useState();
  const [, setUser] = useUserContext();
  const navigate = useNavigate();
  const handleSubmit = () => {
    console.log("22222");
    access(name).then((userId) => {
      console.log(11111);
      setUser(userId);
      navigate("/page2");
    });
  };
  return (
    <div>
      <input type="text" onChange={(e) => setName(e.target.value)} />
      <button onClick={handleSubmit}>Enviar</button>
    </div>
  );
};

export default Home;
