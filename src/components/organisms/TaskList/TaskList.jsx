import React from "react";
import TaskItem from "../../molecules/TaskItem/TaskItem";

export default function({tasks, onDelete, onToggle}){
    return (
        <ul>
            {tasks.map(task => (
                <TaskItem
                    key={task.id}
                    task={task}
                    onToggle={onToggle}
                    onDelete={onDelete}
                    />
            ))}
        </ul>
    )
}