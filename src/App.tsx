import React, {useState} from 'react';
import './App.css';
import Counter from './components/Counter/Counter';

const App = () => {

    let MaxValue = 5

    const [count, setCount] = useState(0)

    const increment = () => {
        if (MaxValue === count) {
            return
        }
        setCount(count + 1)
    }
    const reset = () => {
            setCount(0)
        }



    return (
        <div className = "main">
            <Counter count={count}
                     inc={increment}
                     reset={reset}/>
        </div>
    )
}

export default App;
