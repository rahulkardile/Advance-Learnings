import React from 'react'
import User from '../components/User'
import Todo from '../components/Todo'

const Users = () => {

  return (
    <div className='flex flex-row gap-3 '>

      <div>
        <strong><h2>Users List</h2></strong>
        <User />
      </div>

      <div>
        <strong><h2>Todos List</h2></strong>
        <Todo />
      </div>

    </div>
  )
}

export default Users