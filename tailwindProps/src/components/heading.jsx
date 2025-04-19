import React from 'react';

function Heading(props){
    console.log("Props :", props)
    return(
        <>
            <h1 className='bg-slate-400 rounded-lg shadow-lg shadow-black hover:bg-slate-500 m-10 p-5 text-black'> {props.hdvl} </h1>
        </>
    )
}

export default Heading;