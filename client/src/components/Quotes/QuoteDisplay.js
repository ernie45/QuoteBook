import React from "react";
import {Row} from "../Row";
import {CardWrapper} from "../Card";

export const QuoteDisplay = props =>
    <div id="quote-display">
        <Row>
            <div class="card col-sm-7 cardWrapper">
                <div class="card-body">
                    <h4 class="card-title">Special title treatment</h4>
                    <p class="card-text">
                        With supporting text below as a natural lead-in to additional content.
                    </p>
                </div>
                <div class="card-header cardFooter">
                    <a class="wikiLink" href="#">Wikipedia</a>
                    <img class="thumbsImg" src="assets/images/icons/thumbsUp.png"/>
                    <span>45</span>
                    <img class="thumbsImg" src="assets/images/icons/thumbsDown.png"/>
                    <span>15</span>
                </div>
            </div> 
        </Row>
    </div>