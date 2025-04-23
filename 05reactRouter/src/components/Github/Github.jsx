import React, { useEffect, useState } from 'react';

function Github() {
    let [data, setData] = useState({});

    useEffect(() => {
        fetch('https://api.github.com/users/dinuyadav6514')
            .then(res => res.json())
            .then(res => {
                setData(res);
            });
    }, []);

    return (
        <>
            <h1 className='bg-slate-500 text-3xl text-white font-bold text-center'>Github Followers: {data.followers}</h1>
            <h1 className='bg-slate-500 text-3xl text-white font-bold text-center'>Github Username: {data.login}</h1>
            <h1 className='bg-slate-500 text-3xl text-white font-bold text-center'>Github UserId: {data.id}</h1>
            <h1 className='bg-slate-500 text-3xl text-white font-bold text-center'>Github Bio: { data.bio? data.bio : "Not Provided by user!" }</h1>
        </>
    );
}

export default Github;
