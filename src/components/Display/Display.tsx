import React from 'react'
import display from './Display.module.css'

type CountType = {
    count: number
}

const Display = (props: CountType) => {
    return (
        <div className={display.display}>
            <h3>{props.count}</h3>
        </div>
    )
}

export default Display