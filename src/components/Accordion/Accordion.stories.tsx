import React, {useState} from 'react';
import {action} from '@storybook/addon-actions';

import Accordion from "./Accordion";


export default {
    title: 'Accordion',
    component: Accordion,

}

const callback = action("on or off clicked")
const onClickCallBack = action("some item was rlicked")

export const collapsedMode = () => <Accordion collapsed={true} titleValue={"Menu"} onChange={callback} items={[]}
                                              onClick={onClickCallBack}/>
export const UsersAccordionMode = () => <Accordion collapsed={false} titleValue={"Users"} onChange={callback}
                                                   items={[{title: "miss", value: 1}, {title: "mister", value: 2}]}
                                                   onClick={onClickCallBack}/>

export const MoodeChanging = () => {
    const [value, setValue] = useState<boolean>(true)

    return <Accordion collapsed={value} titleValue={"Users"} onChange={() => setValue(!value)}
                      items={[{title: "miss", value: 1}, {title: "mister", value: 2}]}
                      onClick={onClickCallBack}/>
}


