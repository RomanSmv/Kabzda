import React, {useState} from "react";


type PropsType = {
     on: boolean
    onChange: (on: boolean) => void
}



function OnnOff(props: PropsType) {



    
    const onStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        backgroundColor: props.on ? "green" : "white"
    }
    const offStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        backgroundColor: props.on ? "white" : "red"
    }
    const indicotorStyle = {
        width: "10px",
        height: "10px",
        border: "1px solid black",
        borderRadius: "5px",
        display: "inline-block",
        backgroundColor: props.on ? "green" : "red"

    }



    return (
        <div>
            <div style={onStyle} onClick={ () => { props.onChange(true) } }>On</div>
            <div style={offStyle} onClick={ () => { props.onChange(false) } }>Off</div>
            <div style={indicotorStyle}></div>
        </div>
    )
}

export default OnnOff