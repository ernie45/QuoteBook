import React from "react";
import CardWrapper from "../Card";

export const RandomQuote = props =>
    <CardWrapper>
        <div id="random-quote-wrapper">
            <p class="directions">Click Below for a Random Quote.</p>
            <div id="randomQuoteError"></div>
            <button id="random-quote-button">Get Random Quote!</button>
            <button id="save-random-quote">Save Quote</button>
        </div>
    </CardWrapper>