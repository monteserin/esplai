import { useEffect, useState } from "react";
import { createTask, getTasks } from "../app/services/services";
import { useUserContext } from "../app/providers/UserProvider";

const Page2 = () => {
  const [userId] = useUserContext();
  const [taskText, setTaskText] = useState();
  const [tasks, setTasks] = useState();

  useEffect(() => {
    updateTasks();
  }, []);

  const updateTasks = () => getTasks(userId).then(setTasks);
  const handleSave = async () => {
    await createTask(userId, { taskText });
    updateTasks();
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Introduce una tarea"
        onChange={(e) => setTaskText(e.target.value)}
      />
      {tasks.map((task) => (
        <div>{task.taskText}</div>
      ))}
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default Page2;
