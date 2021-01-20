import React from 'react'


type CountType = {
    count: number
}

const Display = (props: CountType) => {
    return (
        <div className='display' style = {{ background: "aqua", border: "1px solid red", color:"red"}}>
            <h3>{props.count}</h3>
        </div>
    )
}

export default Display