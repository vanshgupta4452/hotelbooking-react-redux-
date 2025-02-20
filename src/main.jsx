import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './routes/App'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Home from './routes/home'
import SearchResult from './routes/searchresult'
import Login from './components/login'
import store from './store/store'
import { Provider } from 'react-redux'
import Bookingitem from './components/bookinghistoryitem'
import { ToastContainer, toast } from 'react-toastify';


const router=createBrowserRouter([
  {path:"/",element:<App/>, children:[{path:"/",element:<Home/>},
  {path:"/search",element:<SearchResult/>},
  {path:"/login",element:<Login/>},
  {path:"/booking",element:<Bookingitem/>},
  ]},

])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
     <RouterProvider router={router}/>   
     <ToastContainer />
    </Provider>
  </StrictMode>,
)
