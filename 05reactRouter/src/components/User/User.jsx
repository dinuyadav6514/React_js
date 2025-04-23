import React from 'react'
import { useParams } from 'react-router-dom'

function User(){
    const {userId} = useParams()
    return(
        <>
            <div className='w-screen h-17 bg-orange-500 flex flex-row justify-between items-center gap-5'>
                <h1 className='text-3xl text-white font-bold p-5'>User: {userId}</h1>
                <h3 className='left-50 text-2xl text-slate-500 font-bold p-10'>Github : </h3>
            </div>
        </>
    )
}

export default User