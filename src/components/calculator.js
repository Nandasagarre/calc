import React, { useState } from 'react';
import Screen from './screen';
import Numbers from './buttons';
import logic from '../logic';
const Calculator = () => {
    const [state, setState] = useState({
        obj: {
            total: null,
            A: null,
            operation: null
        }
    });

    const handleClick = (e) => {
        setState({ obj: logic(state.obj, e.target.textContent) });

    };

    return (
        
        <div class="calc shadow-lg">
            <Screen total= {state.obj.total} A= {state.obj.A} operation= {state.obj.operation} />
            <Numbers handleClick={handleClick} />
         </div>
       
        );
}

export default Calculator;