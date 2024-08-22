import React, { useEffect, useState } from 'react'
import { IUser } from '../interface/IUser'

// url : https://jsonplaceholder.typicode.com/users

const User = () => {
    const [users, setUser] = useState<IUser[]>([]);
    const [term, setTerm] = useState<string>("");

    useEffect(() => {
        (async function fetchUser() {
            const res = await fetch("https://jsonplaceholder.typicode.com/users");
            const rawUsers = await res.json();

            setUser(rawUsers);
            console.log(users);

        })();

    }, [])

    const renderUsers = users.map(user => {

        return (
            <div className="">
                <p><strong>{user.name}</strong></p>
            </div>
        )
    })

    const filterUser = users.filter(({name})=>{
        return name.indexOf(term) >= 0;
    }).map(user=>(
        <div key={user.id} className="">
                <p><strong>{user.name}</strong></p>
        </div>
    ))

    return (
        <div className="bg-red-100 p-3">
            <input type="search" onChange={e=>setTerm(e.target.value)} className='outline m-auto' />
            <div>{filterUser}</div>
        </div>

    )
}

export default User;