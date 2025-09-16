import React from "react";

export default function Text({children, as, ...props}){
    const Tag = as || "span";
    return (
        <Tag {...props}>{children}</Tag>
    )
}