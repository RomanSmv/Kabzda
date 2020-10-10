import React, {useState} from "react";

type RatingPropsType = {
    defaulValue?: RatingValueType
    onChange: (value: RatingValueType) => void
}
export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5

function UncontrolRating(props: RatingPropsType) {

let [value, setValue] = useState<RatingValueType>(props.defaulValue ? props.defaulValue: 0)
        return (
            <div>
                <Star selected={value > 0} setValue={ () => {setValue(1); props.onChange(1)}  }  />
                <Star selected={value > 1} setValue={ () => {setValue(2); props.onChange(2)} }  />
                <Star selected={value > 2} setValue={ () => {setValue(3); props.onChange(3)} }  />
                <Star selected={value > 3} setValue={ () => {setValue(4); props.onChange(4)} }  />


            </div>
        )



}

type StarPropsType = {
    selected : boolean
    setValue : () => void

}


function Star (props: StarPropsType) {
    return   <span onClick= {() => {props.setValue()}} >
        {props.selected ? <b>Star</b> : "Star "}
    </span>




}


export default UncontrolRating