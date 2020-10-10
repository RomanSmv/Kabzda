import React, {useState} from 'react';
import {action} from '@storybook/addon-actions';
import UncontrolOnnOff from "./uncontrolOnnOff";


export default {
    title: 'UncontrolOnnOff',
    component: UncontrolOnnOff,

}

const callback = action("on or off clicked")

export const OnnMode = () => <UncontrolOnnOff defaultOn={true} onChange={callback}/>
export const OffMode = () => <UncontrolOnnOff defaultOn={false} onChange={callback}/>



