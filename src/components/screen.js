import React from 'react';

const Screen = (props) => {
    const { total, A, operation } = props;
    return (
        <div class='screen'>
            <span>
                
                {total}
                {operation}
                {A}
             </span>
        </div>
        )
}

export default Screen;