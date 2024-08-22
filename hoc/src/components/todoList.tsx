import React, { useEffect, useState } from 'react'
import { IUser } from '../interface/IUser'
import { ITodo } from '../interface/ITodo';

// url : https://jsonplaceholder.typicode.com/users

const Todo = () => {
    const [todos, setTodos] = useState<ITodo[]>([]);
    const [term, setTerm] = useState<string>("");

    useEffect(() => {
        (async function fetchTodo() {
            const res = await fetch("https://jsonplaceholder.typicode.com/todos");
            const rawUsers = await res.json();

            setTodos(rawUsers);
            console.log(rawUsers);

        })();

    }, [])

    // const renderUsers = todos.map(todo => {

    //     return (
    //         <div className="">
    //             <p><strong>{todo.name}</strong></p>
    //         </div>
    //     )
    // })

    const filterTodo = todos.filter(({ title })=>{
        return title.indexOf(term) >= 0;
    }).slice(0, 10).map(todo=>(
        <div key={todo.id} className="">
                <p><strong>{todo.title}</strong></p>
        </div>
    ))

    return (
        <div className="bg-red-100 p-3">
            <input type="search" onChange={e=>setTerm(e.target.value)} className='outline m-auto' />
            <div>{filterTodo}</div>
        </div>

    )
}

export default Todo;