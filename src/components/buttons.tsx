import React from 'react'

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
        <div className='buttons' style = {{background:"blue"}}>
            <button onClick={inc} >inc</button>
            <button onClick={reset}>res</button>
        </div>
    )
}

export default Buttons