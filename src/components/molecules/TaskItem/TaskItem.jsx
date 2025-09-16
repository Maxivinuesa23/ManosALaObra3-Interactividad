import React from "react";
import Button from "../../atoms/Button/Button";
import Checkbox from "../../atoms/Checkbox/Checkbox";
import Text from "../../atoms/Text/Text";
import deleteIcon from "../../../assets/papelera.png";

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
            <Text
                style={{
                    textDecoration: task.completed ? "line-through" : "none"
                }}
            >
                {task.text}
            </Text>
            <Button
                onClick={() => {
                    onDelete(task.id)
                }}
            >
                <img src={deleteIcon} alt="Borrar Tarea" style={{width: "20px", height: "20px"}} />
            </Button>
        </div>
    )
}