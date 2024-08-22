/* eslint-disable @typescript-eslint/no-explicit-any */
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';

function App1() {

  return (
    <BrowserRouter>
    {/* <Header /> */}
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/" element={<Home />} /> */}
    </Routes>
  </BrowserRouter>
  )
}

export default App1
