import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import NavBar from '../components/navbar';
import Footer from '../components/footer';
import { Outlet } from 'react-router'


function App() {
  
  return (
    <>
      <NavBar/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default App
