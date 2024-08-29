import React from 'react'
import { useLocation } from 'react-router-dom'

const Home = ({data}: {data: string}) => {

    const location = useLocation();
    const state = location.state || {};

    console.log(state);
    

  return (
    <div>{data}</div>
  )
}

export default Home