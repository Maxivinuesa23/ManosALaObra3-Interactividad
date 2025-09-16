import React from "react";
import Button from "../../atoms/Button/Button";
import Checkbox from "../../atoms/Checkbox/Checkbox";
import Text from "../../atoms/Text/Text";

export default function({task, onToggle, onDelete}){
    return(
        <div>
            <Checkbox
                checked={task.completed}
                onChange={() => {
                    onToggle(task.id)
                }}
            >
            </Checkbox>
            <Text>{task.text}</Text>
            <Button
                onClick={() => {
                    onDelete(task.id)
                }}
            >
                <img src="../../../assets/papelera.png" alt="Borrar Tarea" />
            </Button>
        </div>
    )
}