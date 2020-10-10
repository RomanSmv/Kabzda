import React, {useReducer, useState} from "react";
import App from "../../App";
import {reducer, TOGGLE_CONSTANT} from "./reducer";

type AccordionPropsType = {
    titleValue: string,
    // collapsed: boolean,
}


function UncontrolAccordion(props: AccordionPropsType) {


    let [state, dispatch] = useReducer(reducer, {collapsed: false})


        return (
            <div>

            <TitleAccordion title={props.titleValue} onClick={ () => {
                dispatch({type: TOGGLE_CONSTANT})}} />

                { !state.collapsed && <BodyAccordion/> }
            </div>
    )


}

type TitleAccordionPropsType = {
    title: string
    onClick: () => void
}

function TitleAccordion(props: TitleAccordionPropsType) {
    return (
        <h3 onClick = { () => {props.onClick()}}>{props.title}</h3>
    )
}

type BodyAccordionPropsType = {}

function BodyAccordion() {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}

export default UncontrolAccordion