import React, {useState} from 'react';
import {action} from '@storybook/addon-actions';
import OnnOff from "./OnnOff";


export default {
    title: 'OnnOff',
    component: OnnOff,

}

const callback = action("on or off clicked")

export const OnnMode = () => <OnnOff on={true} onChange={callback}/>
export const OffMode = () => <OnnOff on={false} onChange={callback}/>

export const OnnChanging = () => {
    const [value, setValue] = useState<boolean>(true)

    return <OnnOff on={value} onChange={setValue}/>
}


