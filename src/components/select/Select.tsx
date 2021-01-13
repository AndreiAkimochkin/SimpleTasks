import React from "react";

type ItemType = {
    value: any
    title: string
}


type SelectPropsType = {
    value: any
    onClick: (value:any)=> void
    items: ItemType[]
}



export function Select(props:SelectPropsType) {

    return (
        <div>
            <div>{}</div>
            <div>{props.items.map((i,index)=>
                    <li onClick={()=>{props.onClick(i.value)}} key={index}>{i.title}</li>)}</div>
        </div>
    )
}
