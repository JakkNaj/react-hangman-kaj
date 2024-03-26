import React from "react";
import BaseWood from "./BaseWood";
import SideWood from "./SideWood";
import OblequeWood from "./OblequeWood";
import TopWood from "./TopWood";
import Rope from "./Rope";
import HangBody from "./HangBody";

import './SVGhangman.css';

const SVGHangman = ( {numberOfIncorrectGuesses} ) => {
    const svgComponents = [
        <HangBody key="body"/>,
        <Rope key="rope"/>,
        <TopWood key="top"/>,
        <OblequeWood key="obleque"/>,
        <SideWood key="side"/>,
        <BaseWood key="base"/>,
    ]

    return (
        <div className="svgs-container">
            {svgComponents.slice(svgComponents.length - numberOfIncorrectGuesses, svgComponents.length)}
        </div>
    )
}

export default SVGHangman;