import React from "react";
import CardWrapper from "../Card";

export const FeaturedQuote = props =>
    <CardWrapper>
        <div className="card col-md-8 cardWrapper" id="featured">
            <div className="card-body">
                <h4 className="card-title" id="quote">Special title treatment</h4>
                <p className="card-text" id="author">
                    With supporting text below as a natural lead-in to additional content.
                </p>
            </div>
            <div className="card-header cardFooter">
                <a class="wikiLink" id="featuredWikiLink" href="#">Wikipedia</a>
            </div>
        </div>
    </CardWrapper>