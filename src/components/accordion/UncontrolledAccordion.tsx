import React, {useReducer, useState} from "react";

type AccordionPropsType = {
    title: string
    // onClick: ()=> void
    }

 type ActionType = {
    type: string
 }

 const  reducer =(state: boolean, action: ActionType)=> {
    switch (action.type) {
        case 'TOGGLE-COLLAPSED' :
            return !state
        default:
            return state
    }

    return state
 }

export function UncontrolledAccordion(props: any) {

    // let [collapsed, unCollapsed] = useState(false)
    let [collapsed, dispatch] = useReducer(reducer, false)

          return (
            <div >
                {/*<AccordionTitle title={props.title}  onClick={()=>{unCollapsed(!collapsed)}}/>*/}
                <AccordionTitle title={props.title}  onClick={()=>{ dispatch({type:'TOGGLE-COLLAPSED'})}}/>
               {collapsed && < AccordionBody />}
            </div>
        )

}

type AccordionTitlePropsType = {
    title: string
    onClick: () => void

}

function AccordionTitle(props: AccordionTitlePropsType) {
    return <><h3 onClick={()=>{props.onClick()}} >{props.title}</h3></>
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
