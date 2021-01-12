import React, {useState} from "react";

type AccordionPropsType = {
    title: string
    // onClick: ()=> void
    }

export function UncontrolledAccordion(props: any) {

    let [collapsed, unCollapsed] = useState(false)


          return (
            <div >
                <AccordionTitle title={props.title}/> <button  onClick={()=>{unCollapsed(!collapsed)}}>TOGGLE</button>
               {collapsed && < AccordionBody />}
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
