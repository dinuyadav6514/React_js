import React from 'react';

function Button(props){
    let color = props.clr;

    return(
        <>
            <div className='w-10 h-10 ' style={{backgroundColor : color}} onClick={() => {
                props.setclr(color);
            }}></div>
        </>
    )
}

export default Button;