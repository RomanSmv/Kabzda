import React, {useState} from 'react';

import './App.css';
import Accordion from "./components/Accordion/Accordion";
import Rating, {RatingValueType} from "./components/Rating/Rating";
import OnnOff from "./components/OnnOff/OnnOff";
import UncontrolAccordion from "./components/uncintrolAccordion/uncontrolAccordion";
import UncontrolRating from "./components/uncontrolRating/uncontrolRating";
import UncontrolOnnOff from "./components/uncontrolOnnOff/uncontrolOnnOff";

function App(props: any) {

    let [ratingValue, setRatingValue] = useState<RatingValueType>(4)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    let [switchOn, setSwitchOn] = useState<boolean>(false)

    return (
        <div>

            <Rating value={ratingValue} onClick={setRatingValue}/>
            {/*<Accordion titleValue={"Menu"}
                       collapsed={accordionCollapsed}
                       onChange={() => {
                           setAccordionCollapsed(!accordionCollapsed)
                       }}/>*/}
            {/*<OnnOff on={switchOn} onChange={setSwitchOn}/>*/}
            <UncontrolOnnOff onChange={setSwitchOn}/> {switchOn.toString()}
            {/*  <PageTitle title={"nu sho"}/>
            <UncontrolAccordion titleValue={"users"} />
            <UncontrolAccordion titleValue={"neusersu"} />
            <UncontrolRating  />
            <UncontrolRating />
            <UncontrolRating />
            <UncontrolOnnOff />*/}

        </div>
    );
}

type PageTitlePropsType = {
    title: string
}


function PageTitle(props: PageTitlePropsType) {
    return (
        <h1>{props.title}</h1>
    )

}


export default App;
