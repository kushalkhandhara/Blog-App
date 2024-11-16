 
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes,Route} from "react-router-dom"
import Login from "./pages/Authentication/Login/Login"
import Register from "./pages/Authentication/Register/Register"
import Layout from './components/layout/Layout';
import Home from './pages/Home/Home';
import Blog from './pages/Blog/Blog';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Account from './pages/Account/Account';

function App() {

  return (
    <>
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element = {<Register/>} />
        <Route path="/" element={<Layout/>}>
          <Route path="" element={<Home/>} />
          <Route path='blog' element={<Blog/>} />
          <Route path="about" element={<About/>} />
          <Route path="contact" element={<Contact/>} />
          <Route path="account" element={<Account/>} />
        </Route>
      </Routes>
    </>
  )
}

export default App
