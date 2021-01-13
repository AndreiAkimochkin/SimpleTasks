import React, {useRef, useState} from "react";

export function ControlledInput() {

    const [parentValue, setParentValue]=useState('')


    return <div>
        <input value={parentValue}
               onChange={(e)=>{setParentValue(e.currentTarget.value)}}/>

    </div>
}

export function ControlledCheckbox() {
    const [parentValue, setParentValue]=useState(true)


    return <div>
        <input type='checkbox' checked={parentValue}
               onChange={(e)=>{setParentValue(e.currentTarget.checked)}}/>

    </div>

}


export function ControlledSelect() {
    const [parentValue, setParentValue]=useState('')


    return <div>
        <select value={parentValue}
                onChange={(e)=>{setParentValue(e.currentTarget.value)}}>
            <option >None</option>
            <option value='1'>Stockholm</option>
            <option value='2'>Moskva</option>
            <option value='3'>Kiev</option>
        </select>

    </div>

}