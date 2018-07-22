import React from "react";
import {Row} from "../Row";

export const SortStation = props => 
    <Row customClass="buttonSortDiv">
        <button type="button" id="likesSortButton" className="btn btn-danger sortButton">
            Likes
        </button>
        <button type="button" id="dislikesSortButton" className="btn btn-danger sortButton">
            Dislikes 
        </button>
        <button type="button" id="authorSortButton" className="btn btn-danger sortButton">
            Author 
        </button>
        <button type="button" id="dateSortButton" className="btn btn-danger sortButton">
            Date Added
        </button> 
    </Row>