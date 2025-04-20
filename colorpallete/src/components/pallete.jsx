import React from 'react';
import Button from './button.jsx'

function Pallete(props){

    let color = props.color;
    return(
        <>
            <div className='bg-black h-10 w-100 ml-[50%] translate-x-[-50%]  mb-0 flex overflow-hidden justify-between' >
                <Button clr = {color[0]} setclr = {props.setclr}/>
                <Button clr = {color[1]} setclr = {props.setclr}/>
                <Button clr = {color[2]} setclr = {props.setclr}/>
                <Button clr = {color[3]} setclr = {props.setclr}/>
                <Button clr = {color[4]} setclr = {props.setclr}/>
                <Button clr = {color[5]} setclr = {props.setclr}/>
                <Button clr = {color[6]} setclr = {props.setclr}/>
                <Button clr = {color[7]} setclr = {props.setclr}/>
                <Button clr = {color[8]} setclr = {props.setclr}/>
                <Button clr = {color[9]} setclr = {props.setclr}/>
            </div>
        </>
    )
}

export default Pallete;