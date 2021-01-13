import React, {useState} from "react";

type onOffPropsType = {
    // on: boolean
}

export function OnOff(props: onOffPropsType){

    let [on, setOn] = useState(false)

    const onStyle ={
        width: '30px',
        height: '30px',
        border: '1px solid black',
        display: 'inline-block',
        padding: '5px',
        backgroundColor: on ? 'green': ''
    }
    const offStyle={
        width: '30px',
        height: '30px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '10px',
        padding: '5px',
        backgroundColor:  !on ? 'red': ''
    }
    const indicatorStyle={
        width: '15px',
        height: '15px',
        borderRadius: '7.5px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '10px',
        backgroundColor:  on ? 'green': 'red'
           }

       const setOnClicked =()=>{setOn(true)}
       const setOffClicked =()=>{setOn(false)}
    return (
        <div>
            <div onClick={setOnClicked} style={onStyle}>On</div>
            <div onClick={setOffClicked}style={offStyle}>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    )
}

