import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import TaskList from './components/organisms/TaskList/TaskList';
import TaskForm from './components/molecules/TaskForm/TaskForm';

function App() {
  const [tasks, setTasks] = useState([])

  const handleAddTask = (taskText) => {
    const newTask = {
      id: Date.now(),
      text: taskText,
      completed: false
    }

    setTasks([...tasks, newTask])
  }

  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  }

  const handleToggleTask = (taskId) =>{
    setTasks(tasks.map(task => {
      if (task.id === taskId){
        return {...task, completed:!task.completed};
      }
      return task;
    }))
  }

  return (
    <>
    <h1>LISTA DE TAREAS DE MAXI</h1>
    <TaskForm 
        onSubmit={handleAddTask}
    >
    </TaskForm>

    <TaskList
        tasks= {tasks}
        onDelete = {handleDeleteTask}
        onToggle = {handleToggleTask}
        >
      </TaskList>
    </>
  )
}

export default App
