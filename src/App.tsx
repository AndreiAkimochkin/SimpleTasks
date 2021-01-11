import React from 'react';
import './App.css';
import {Accordion} from "./components/accordion/Accordion";
import {Rating} from "./components/rating/Rating";

function App() {
    return (
        <div>
            <PageTitle title="This is APP component"/>
            <PageTitle title="This is not APP component"/>
            Article 1
            <Rating value={3}/>
            <Accordion title='First one'/>
            <Accordion title='Second one'/>
            Article 2
            <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>
        </div>
    )
}

function PageTitle(props:any) {
    return <h1>{props.title}</h1>
}



export default App;
