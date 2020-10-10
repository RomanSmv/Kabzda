import React, {useState} from "react";
import App from "../../App";

type ItemType = {
    title: string
    value: any
}


type AccordionPropsType = {
    titleValue: string,
     collapsed: boolean,
    onChange: () => void
    items: ItemType[]
    onClick: (value: any) => void
}


function Accordion(props: AccordionPropsType) {




        return (
            <div>
            <TitleAccordion title={props.titleValue} onChange={props.onChange}/>

                { !props.collapsed && <BodyAccordion items={props.items} onClick={props.onClick}/> }
            </div>
    )


}

type TitleAccordionPropsType = {
    title: string
    onChange: () => void
}

function TitleAccordion(props: TitleAccordionPropsType) {
    return (
        <h3 onClick = { (e) => {props.onChange()}}>{props.title}</h3>
    )
}

type BodyAccordionPropsType = {

    items: ItemType[]
    onClick: (value: any) => void
}

function BodyAccordion(props: BodyAccordionPropsType) {
    return (
        <ul>
            {props.items.map( (i, index) => <li onClick={() => {props.onClick(i.value)}} key={index}>{i.title}</li>)}
        </ul>
    )
}

export default Accordion

/*

import React, {ChangeEvent, useRef, useState} from 'react';

import {Story, Meta} from '@storybook/react/types-6-0';


export default {
    title: 'Rating',
    /!*component: Rating,*!/

}

export const UncontrolledInput = () => < input/>

export const TrackValueOfUncontrolledInput = () => {
    const [value, setValue] = useState("")

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        const actualValue = event.currentTarget.value
        setValue(actualValue)
    }
    return <> <input onChange={onChange}/> - {value} </>
}

export const GetValueOfUncontrolledInputByButtomPress = () => {
    const [value, setValue] = useState("")
    const inputRef = useRef<HTMLInputElement>(null)

    const save = () => {
        const el = inputRef.current as HTMLInputElement
        setValue(el.value)
    }
    return <><input ref={inputRef} /> <button onClick={ save} >save</button> - actual value: {value} </>
}

export const ControlledInputWithFixedValue = () => <input value={"it-incubator.by"}/>*/
