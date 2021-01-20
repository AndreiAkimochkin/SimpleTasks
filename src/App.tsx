import React, {useState} from 'react';
import './App.css';
import {Accordion} from "./components/accordion/Accordion";
import {Rating, RatingValueType} from "./components/rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";
import {UncontrolledAccordion} from "./components/accordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/rating/UncontrolledRating";
import {ControlledOnOff} from "./components/OnOff/UncontrolledOnOff";
import {GetUncontrolledInputValue, UncontrolledInput} from "./components/input/UncontrolledInput";
import {Select} from "./components/select/Select";

type PageTitlePropsType = {
    title: string
}


function App() {



    let [value, setValue]=useState<RatingValueType>(0)
    let [accordionCollapsed, setAccordionCollapsed]=useState<boolean>(false)
    let [on, setOn] = useState(false)

    let [selectValue, setSelectValue] = useState('2')
    return (
        <div>

            <Select value={selectValue} onChange={setSelectValue} items={[
                {value: '1', title: 'Stockholm'},
                {value: '2', title: 'Moskva'},
                {value: '3', title: 'Kiev'},
                ]}/>








            {/*    <Select value={null} onChange={()=>{}} items={[*/}
            {/*        {value: '1', title: 'Stockholm'},*/}
            {/*        {value: '2', title: 'Moskva'},*/}
            {/*        {value: '3', title: 'Kiev'}*/}
            {/*    ]}/>*/}
            {/*/!*<OnOff/>*!/*/}
            {/*<OnOff/>*/}
            {/*<OnOff/>*/}
            {/*<GetUncontrolledInputValue/>*/}
            {/*<UncontrolledInput/>*/}

            {/*<ControlledOnOff on={on} setOn={setOn}/>*/}

            {/*<UncontrolledAccordion title='First one' />*/}
            {/*<UncontrolledAccordion title='Second one' />*/}

            {/*<Rating value={value} onClick={setValue}/>*/}

            {/*<UncontrolledRating />*/}


            {/*<PageTitle title="This is APP component"/>*/}
            {/*<PageTitle title="This is not APP component"/>*/}
            {/*Article 1*/}
            {/*/!*<Rating value={3}/>*!/*/}
            {/*<Accordion title='First one'*/}
            {/*           collapsed={accordionCollapsed}*/}
            {/*           onClick={setAccordionCollapsed}*/}

            {/*            items={[{title:'Andrei', value: 1}, {title:'Bob', value: 2}, {title:'Viktor', value: 3} ]}/>*/}
            {/*/!*<Accordion title='Second one' collapsed={false}/>*!/*/}
            {/*/!*Article 2*!/*/}
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
