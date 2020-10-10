import React, {useState} from "react";
import {inspect} from "util";
import styles from './Select.module.css'

type ItemType = {
    title: string
    value: any
}

type SelectPropsType = {
    value?: any
    onChange: (value: any) => void
    items: ItemType[]

}


export function Select(props: SelectPropsType) {

    const [active, setActive] = useState(false)
    const [hoverElementValue, setHoverElementValue] = useState(props.value)

    const selectedItem = props.items.find(i => i.value === props.value)
    const hoverItem = props.items.find(i => i.value === hoverElementValue)
    const toggleItems = () => setActive(!active)
    const onItemClick = (value: any) => {
        props.onChange(value)
        toggleItems()
    }



    return (
        <>
            {/*<select>
                <option>NP</option>
                <option>Minsk</option>
                <option>Paris</option>
            </select>*/}
            <div className={styles.select}>

                <span className={styles.main} onClick={toggleItems}>{selectedItem && selectedItem.title}</span>
                {active &&
                <div className={styles.items}>
                    {props.items.map(i => <div
                        onMouseEnter={ () => {setHoverElementValue(i.value)}}
                        className={styles.item + " " + (hoverItem === i ?  styles.selected : "") }
                        key={i.value}
                        onClick={() => {
                            onItemClick(i.value)
                        }
                        }
                    >{i.title}</div>)}
                </div>
                }
            </div>
        </>
    )


}





