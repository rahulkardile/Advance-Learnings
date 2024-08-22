import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeChat from "./Pages/HomeChat";
import Header from "./components/Header";
import Users from "./Pages/Users";

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

export default App;
