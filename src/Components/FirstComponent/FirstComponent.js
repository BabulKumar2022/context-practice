import React, { useContext } from 'react';
import FirstCompoChild from './FirstCompoChild/FirstCompoChild';
import { CountContext } from '../../App';

const FirstComponent = () => {
    const [count, setCount]= useContext(CountContext);
    
    return (
        <div>
           <h1>FirstComponentCount:{count}</h1> 
           <button onClick={()=> setCount(count +1)}>Increase</button>
            <button onClick={()=> setCount(count -1)}>Decrease</button>
           <FirstCompoChild></FirstCompoChild>
           
        </div>
    );
};

export default FirstComponent;