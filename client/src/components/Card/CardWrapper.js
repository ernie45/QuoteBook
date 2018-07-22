import React from "react";
import {Row} from "../Row";

const CardWrapper = props =>
    <Row customClass={props.customClass ? props.customClass : ""}>
        {props.children}
    </Row>

export default CardWrapper;