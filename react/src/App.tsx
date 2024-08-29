import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header'

function App() {

  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path='/' element={<Home data='Home' />} />
        <Route path='/about' element={<Home data='about' />} />
        <Route path='/contact' element={<Home data='contact' />} />
        <Route path='/Login' element={<Home data='Login' />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
