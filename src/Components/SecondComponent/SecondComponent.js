import React, { useContext } from 'react';
import { CountContext } from '../../App';

const SecondComponent = () => {
    const [count, setCount]= useContext(CountContext);
    return (
        <div>
            <h1>SecondComponent: {count}</h1>
            <button onClick={()=> setCount(count +1)}>Increase</button>
            <button onClick={()=> setCount(count -1)}>Decrease</button>
        </div>
    );
};

export default SecondComponent;