import React from "react";
import {Rating, RatingValueType} from "../rating/Rating";

type AccordionPropsType = {
    title: string
    collapsed: boolean
    onClick: (collapsed: boolean)=> void
}

export function Accordion(props: AccordionPropsType) {

          return (
            <div>
                <AccordionTitle title={props.title} collapsed={props.collapsed} onClick={props.onClick}/>
               {!props.collapsed && <AccordionBody/>}
            </div>
        )

}

type AccordionTitlePropsType = {
    title: string
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return <><h3>{props.title}</h3></>
}

function AccordionBody() {
    return <>
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    </>
}
