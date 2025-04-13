import React from 'react';

function Card(props){
    console.log("props : ", props)

    return(
        <>
        <div className="flex flex-col items-center gap-6 p-7 md:flex-row md:gap-8 rounded-2xl">
        <div>
        <img className="size-48 shadow-xl rounded-md" alt="" src="https://images.pexels.com/photos/30694611/pexels-photo-30694611/free-photo-of-scenic-palm-tree-avenue-on-a-sunny-day.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" />
        </div>
        <div className="flex items-center md:items-start">
            <span className="text-2xl font-medium">hello {props.name}</span>
            <span className="font-medium text-sky-500">The Anti-Patterns</span>
            <span className="flex gap-2 font-medium text-gray-600 dark:text-gray-400">
            <span>No. 4</span>
            <span>·</span>
            <span>2025</span>
            </span>
        </div>
</div>
</>
    )
}

export default Card;