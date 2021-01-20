import React, {useState} from "react";
import styles from './Select.module.scss'

type ItemType = {
    value?: any
    title: string
}


type SelectPropsType = {
    value: any
    onChange: (value:any)=> void
    items: ItemType[]
}



export function Select(props:SelectPropsType) {

    const [active, setActive] = useState(true)
    const selectedItem =props.items.find(i => i.value === props.value)
    const toggleItems = ()=>setActive(!active)
    const onItemClick = (value: any)=> {
        props.onChange(value)
        toggleItems()
    }


    return (
        <>

            {/*<select>*/}
            {/*    <option value="">Minsk</option>*/}
            {/*    <option value="">Moscow</option>*/}
            {/*    <option value="">Kiev</option>*/}
            {/*</select>*/}
            <div className={styles.select }>
                {/*<div className={styles.select + "" + (active ? styles.active : '')}>*/}
            <span className={styles.main} onClick={toggleItems}>{selectedItem && selectedItem.title}</span>

           {
               active &&
               <div className={styles.items}>
                {props.items.map(i=> <div className={styles.item}
                    key={i.value}
                onClick={()=>(onItemClick(i.value))}
                >{i.title}</div>)}
                 </div>
           }
        </div>
        </>
    )
}
