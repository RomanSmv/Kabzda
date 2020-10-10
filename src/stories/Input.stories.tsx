import React, {ChangeEvent, useRef, useState} from 'react';

import {Story, Meta} from '@storybook/react/types-6-0';


export default {
    title: 'Rating',
    /*component: Rating,*/

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



export const ControlledInputWithFixedValue = () => <input value={"it-incubator.by"}/>