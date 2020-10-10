import React, {useState} from 'react';
import {action} from '@storybook/addon-actions';
import UncontrolAccordion from "./uncontrolAccordion";




export default {
    title: 'UncontrolAccordion',
    component: UncontrolAccordion,

}

const callback = action("on or off clicked")



export const MoodeChanging = () => {
    const [value, setValue] = useState<boolean>(true)

    return  <UncontrolAccordion  titleValue={"Users"}  />
}


