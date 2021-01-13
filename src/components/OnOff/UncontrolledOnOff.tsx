import React, {useState} from "react";

type onOffPropsType = {
    on: boolean,
    setOn:(on: boolean)=>void
}

export function ControlledOnOff(props: onOffPropsType){



    const onStyle ={
        width: '30px',
        height: '30px',
        border: '1px solid black',
        display: 'inline-block',
        padding: '5px',
        backgroundColor: props.on ? 'green': ''
    }
    const offStyle={
        width: '30px',
        height: '30px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '10px',
        padding: '5px',
        backgroundColor:  !props.on ? 'red': ''
    }
    const indicatorStyle={
        width: '15px',
        height: '15px',
        borderRadius: '7.5px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '10px',
        backgroundColor:  props.on ? 'green': 'red'
           }

    const setOnClicked =()=>{props.setOn(true)}
    const setOffClicked =()=>{props.setOn(false)}
    return (
        <div>
            <div onClick={setOnClicked} style={onStyle}>On</div>
            <div onClick={setOffClicked}style={offStyle}>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    )
}

