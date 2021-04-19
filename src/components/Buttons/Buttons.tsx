import React from 'react'
import s from './Buttons.module.css'

type ButtonsType = {
    inc: () => void
    reset: () => void
}
const Buttons = (props: ButtonsType) => {

    const inc = () => {
        props.inc()
    }
    const reset = () => {
        props.reset()

    }

    return (
        <div className={s.buttons}>
            <button onClick={inc} >inc</button>
            <button onClick={reset}>res</button>
        </div>
    )
}

export default Buttons