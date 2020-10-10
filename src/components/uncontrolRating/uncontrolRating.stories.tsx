import React, {useState} from 'react';


import UncontrolRating from "./uncontrolRating";
import {action} from "@storybook/addon-actions";


export default {
    title: 'UncontrolRating',
    component: UncontrolRating,

}
const callback = action("rating stars sum")

export const EaptyRating = () => <UncontrolRating defaulValue={0} onChange={callback}/>
export const Rating1 = () => <UncontrolRating defaulValue={1} onChange={callback}/>
export const Rating2 = () => <UncontrolRating defaulValue={2} onChange={callback}/>
export const Rating3 = () => <UncontrolRating defaulValue={3} onChange={callback}/>
export const Rating4 = () => <UncontrolRating defaulValue={4} onChange={callback}/>



