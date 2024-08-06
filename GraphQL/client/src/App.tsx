import { useState } from 'react'
import { gql, useQuery } from '@apollo/client'
import './App.css'

const query = gql`
query GetTodosWithUser{
  getTodos {
  title
  id
  completed
  userId
  user {
    name
    phone
    username
  }
}
}
`

function App() {

  const { data, loading } = useQuery(query);

  if(loading) return <h1>Loading . . . </h1>

  console.log(data);
  

  return (
   <div className="">
    <h2>GraphQL Query Fetched</h2>
<br />

      <table>
        <tbody>
          {
            data.getTodos.map(i=>(
              <tr key={i.id}>
                  <td>{i.id}</td>
                  <td>{i.title}</td>
                  <td>{i.user.name}</td>
              </tr>
            )
            )
          }
        </tbody>
        </table>  
   </div>
  )
}

export default App
