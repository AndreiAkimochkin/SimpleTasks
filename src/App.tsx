import React from 'react';
import './App.css';
import {Accordion} from "./components/accordion/Accordion";
import {Rating} from "./components/rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";
import {UncontrolledAccordion} from "./components/accordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/rating/UncontrolledRating";

type PageTitlePropsType = {
    title: string
}


function App() {
    return (
        <div>
            <OnOff/>
            <OnOff/>
            <OnOff/>


            <UncontrolledAccordion title='First one' />
            <UncontrolledAccordion title='Second one' />

            <UncontrolledRating />

            {/*<PageTitle title="This is APP component"/>*/}
            {/*<PageTitle title="This is not APP component"/>*/}
            {/*Article 1*/}
            {/*<Rating value={3}/>*/}
            {/*<Accordion title='First one' collapsed={true}/>*/}
            {/*<Accordion title='Second one' collapsed={false}/>*/}
            {/*Article 2*/}
            {/*<Rating value={0}/>*/}
            {/*<Rating value={1}/>*/}
            {/*<Rating value={2}/>*/}
            {/*<Rating value={3}/>*/}
            {/*<Rating value={4}/>*/}
            {/*<Rating value={5}/>*/}
        </div>
    )
}

function PageTitle(props:PageTitlePropsType) {
    return <h1>{props.title}</h1>
}



export default App;
