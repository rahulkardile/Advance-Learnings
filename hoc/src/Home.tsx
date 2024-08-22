import React from 'react'
import User from './components/userList'
import Todo from './components/todoList'

const Home = () => {
  return (
    <div className="flex gap-11 flex-row bg-green-300 mt-8 justify-center">
        <User />
        <Todo />
    </div>
)
}

export default Home