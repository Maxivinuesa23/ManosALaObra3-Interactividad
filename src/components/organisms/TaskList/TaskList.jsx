import React from "react";
import TaskForm from "../../molecules/TaskForm";
import TaskItem from "../../molecules/TaskItem/TaskItem";

export default function({}){
    const [tasks, setTasks] = React.useState([]);
    const [nextId, setNextId] = React.useState(1);

    function handleAddTask(text){
     const newTask = {id: nextId, text, completed:false};
     setTasks([...tasks, newTask]);
     setNextId(nextId + 1);
    }

    function handleToggle(id){
        
    }
    return (
        
    )
}