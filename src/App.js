import { useState} from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';


function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState(
    [{
        id:1,
        text: 'Doctors appointment',
        day: 'Feb 5th at 5pm',
        reminder: true,
    },
    {
        id:2,
        text: 'Music class',
        day: 'Feb 6th at 3pm',
        reminder: false,
    },
    {
        id:3,
        text: 'Call your Mom',
        day: 'Feb 9th at 1pm',
        reminder: true,
    },]
)

// Add task
const addTask = (task) => {
  const id = Math.floor(Math.random() * 10000) +1
  const newTask = { id, ...task }
  setTasks([...tasks, newTask])
}

// Delete task
const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
}

// Toggle reminder
const toggleReminder = (id) => {
  setTasks(
    tasks.map((task) => 
      task.id === id ? { ...task, reminder : !task.reminder } : task))
}

  return (
    <div className="container">
     <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
     {showAddTask && <AddTask onAdd={addTask} />}
     {tasks.length > 0 ? 
     <Tasks tasks={tasks} onDelete={deleteTask}  onToggle={toggleReminder} />
      : 'No tasks'}
     
    </div>
  );
}

export default App;
