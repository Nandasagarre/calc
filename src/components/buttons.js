import React from 'react';

const Numbers = (props) => {
    const { handleClick } = props;
    return (
        <div class='p-3'>
            <div class='row'>
                <button type="button" className="btn col btn-dark" onClick={handleClick}>AC</button>
                <button type="button" className="btn col btn-dark" onClick={handleClick}>%</button>
                <button type="button" className="btn col btn-dark" onClick={handleClick}>/</button>
                <button type="button" className="btn col btn-dark" onClick={handleClick}>=</button>
            </div>

        <div class='row'>
            <button type="button" data-testid="seven" className=" col btn btn-light" onClick={handleClick}>7</button>
            <button type="button" data-testid="eight" className=" col btn btn-light" onClick={handleClick}>8</button>
                <button type="button" data-testid="nine" className="col btn btn-light" onClick={handleClick}>9</button>
            
        </div>
            <div class='row'>
                <button type="button" data-testid="four" className="col btn btn-light" onClick={handleClick}>4</button>
                <button type="button" data-testid="five" className="col btn btn-light" onClick={handleClick}>5</button>
                <button type="button" data-testid="six" className="col btn btn-light" onClick={handleClick}>6</button>
           
            </div>

            <div class='row'>
                <button type="button" data-testid="one" className="col btn btn-light" onClick={handleClick}>1</button>
                <button type="button" data-testid="two" className="col btn btn-light" onClick={handleClick}>2</button>
                <button type="button" data-testid="three" className=" col btn btn-light" onClick={handleClick}>3</button>
            </div>

            <div class='row'>
            <button type="button" className="col btn btn-dark" onClick={handleClick}>+/-</button>
                <button type="button" data-testid="zero" className="col btn btn-light col-span-2" onClick={handleClick}>0</button>
                <button type="button" data-testid="full-stop" className="col btn btn-light" onClick={handleClick}>.</button>
            </div>
            <>
               <div class='row'>
                <button type="button" className="col btn btn-dark" onClick={handleClick}>x</button>
                <button type="button" className="col btn btn-dark" onClick={handleClick}>-</button>
                <button type="button" className="col btn btn-dark" onClick={handleClick}>+</button>
                </div>
            </>
        </div>
         
        );

}

export default Numbers;