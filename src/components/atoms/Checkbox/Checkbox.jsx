import React from "react";

export default function Checkbox({checked, onChange, ...props}){
    return (
        <input type="checkbox" checked={checked} onChange={onChange} {...props} />
    )
}