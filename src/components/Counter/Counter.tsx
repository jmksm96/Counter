import React from 'react';
import Buttons from '../Buttons/Buttons';
import Display from '../Display/Display';

type PropsType = {
    count: number
    inc: () => void
    reset: () => void
}



const Counter = (props: PropsType) => {

    return (
        <div>
            <Display count = {props.count}/>
           <Buttons inc = {props.inc} reset = {props.reset}/>
        </div>
    )
}

export default Counter