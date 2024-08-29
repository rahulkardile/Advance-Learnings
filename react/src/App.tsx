import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header'
import About from './pages/About'

function App() {

  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path='/' element={<Home data='Home' />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Home data='contact' />} />
        <Route path='/Login' element={<Home data='Login' />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
