import React, {useState} from "react";


type PropsType = {

    onChange: (on: boolean) => void
    defaultOn?: boolean
}



function UncontrolOnnOff(props: PropsType) {


    let [on, setOn] = useState(props.defaultOn ? props.defaultOn : false)
    
    const onStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        backgroundColor: on ? "green" : "white"
    }
    const offStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        backgroundColor: on ? "white" : "red"
    }
    const indicotorStyle = {
        width: "10px",
        height: "10px",
        border: "1px solid black",
        borderRadius: "5px",
        display: "inline-block",
        backgroundColor: on ? "green" : "red"

    }

const onClicked = () => { setOn(true)
    props.onChange(true)
}
const offClicked = () => { setOn(false)
    props.onChange(false)}

    return (
        <div>
            <div style={onStyle} onClick={ onClicked}>On</div>
            <div style={offStyle} onClick={offClicked}>Off</div>
            <div style={indicotorStyle}></div>
        </div>
    )
}

export default UncontrolOnnOff