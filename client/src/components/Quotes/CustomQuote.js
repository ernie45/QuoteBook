import React from "react";
import {Row} from "../Row";

export const CustomQuote = props => 
    <Row>
        <form className="col-sd-7">
            <div className="form-group">
                <label for="author-input">Author Name</label>
                <input className="form-control" class="red-text" id="author-input" type="text"/>
                <div id="authorSearchContainer"></div>
            </div>
            <div className="form-group">
                <label for="quote-input">Quote</label>
                <input className="form-control" id="quote-input" type="text"/>
            </div>
            <div id="inputError"></div>
            <input className="btn btn-danger" id="add-quote-btn" type="submit"/>
        </form>
    </Row>
