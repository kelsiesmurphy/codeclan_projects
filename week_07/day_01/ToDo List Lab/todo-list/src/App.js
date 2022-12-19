import './App.css';
import {useState} from 'react';

function App() {
  // Sets state to tasks, with initial default
  const [tasks, setTasks] = useState([
    {name: "Buy shopping", priority: "high"},
    {name: "Clean bathroom", priority: "low"},
    {name: "Car's MOT", priority: "high"},
  ]);

  // Add a new task
  const [newTask, setNewTask] = useState("");
  const [newRadio, setNewRadio] = useState("low");

  const handleTaskInput = (event) => {
    setNewTask(event.target.value)
  };

  const handleRadioInput = (event) => {
    setNewRadio(event.target.value)
  };

  const saveNewTask = (event) => {
    event.preventDefault();
    const copyTasks = [...tasks];
    copyTasks.push({name: newTask, priority: newRadio});
    setTasks(copyTasks);
    setNewTask("");
    setNewRadio(false);
  };
  
  const completeTask = (index) => {
    const copyTasks = [...tasks];
    copyTasks.splice(copyTasks[index], 1);
    setTasks(copyTasks);
  };

  const taskNodes = tasks.map((task, index) => {
    return  <li key={index} className={task.priority === "high" ? "high-priority" : "low-priority"}>
              <span>{task.name}</span>
              <button onClick={() => {completeTask(index)}}>Complete?</button>
            </li>
  });


  return (
    <div className='App'>

      <h1>ToDo's</h1>

      <form onSubmit={saveNewTask}>
        <input type="text" value={newTask} onChange={handleTaskInput} placeholder="Add a new task"/>
        <label htmlFor="high">High</label>
        <input type="radio" id="high" name="priority" onChange={handleRadioInput} value="high"/>
        <label htmlFor="low">Low</label>
        <input type="radio" checked={newRadio==="low"} id="low" name="priority" onChange={handleRadioInput} value="low"/>
        <input type="submit" value="Save Item"/>
      </form>

      <ul>
        {taskNodes}
      </ul>

    </div>
  );
};

export default App;
