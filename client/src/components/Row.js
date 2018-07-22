import React from "react";

export const Row = props => 
    <div className={`row justify-content-center ${props.customClass ? props.customClass : ""}`}>
        {props.children}
    </div>