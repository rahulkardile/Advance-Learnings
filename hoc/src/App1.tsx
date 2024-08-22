/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<HomeChat />} />
      <Route path="/users" element={<Users />} />
    </Routes>
  </BrowserRouter>
  )
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function HOC(props: any){

  return <div style={{backgroundColor: "", width: "100%", padding: "1rem"}}>
    <props.cmp />
    <h3>Normal</h3>
  </div>
}

function HOCRed(props: any){

  return <div style={{backgroundColor: "red", width: "100%", padding: "1rem"}}>
    <props.cmp />
    <h3>HOC Red</h3>
  </div>
}

function HOCGreen(props: any){

  return <div style={{backgroundColor: "green", width: "100%", padding: "1rem"}}>
    <props.cmp />
    <h3>HOC Green</h3>
  </div>
}

function HOCBlue(props: any){

  return <div style={{backgroundColor: "blue", width: "100%", padding: "1rem"}}>
    <props.cmp />
    <h3>HOC blue</h3>
  </div>
}

function Counter() {
  const [count, setCount] = useState<number>(0);
  return (
    <div className="">
      <h2>Count is {count}</h2>

      <div className="" style={{display: "flex", gap: "10px"}}>
        <button onClick={() => setCount(count - 1)}>Descrese</button>
        
        <button onClick={() => setCount(count + 1)}>Increase</button>
      </div>
    </div>
  )
}

export default App
