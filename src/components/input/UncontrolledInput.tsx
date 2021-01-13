import React, {useRef, useState} from "react";


export function UncontrolledInput() {

    const [value, setValue]=useState('')

    return <div>
        <input onChange={(e)=>{setValue(e.currentTarget.value)}}/>
        {value}
    </div>
}


export function GetUncontrolledInputValue() {

    const [value, setValue]=useState('')
    const inputRef =useRef<HTMLInputElement>(null)
    const save = ()=>{
        const el = inputRef.current as HTMLInputElement
        setValue(el.value)}
    return <div>
        <input ref={inputRef} /> <button onClick={save}>Save</button>  {value}

    </div>
}
