
import './App.css'
import Login from './Components/Login'
import PageNotFound from './Components/PageNotFound/PageNotFound'
import HomeError from './Components/HomeError/HomeError'
import { Routes,Route } from 'react-router-dom'
import Home from './Components/Home/Home'
import Cart from './Components/Cart/Cart'
import PaymentPage from './Components/PaymentPage/PaymentPage'
import ProtectedRoute from './Components/ProtectedRoute'


function App() {


  return (
    <>
    <Routes>
     <Route path='/' element={<Login/>}></Route>
     {/* <Route path="/reactslick" element={<ReactSlick />}></Route> */}
     <Route path="/homeerror" element={<ProtectedRoute><HomeError/></ProtectedRoute>}></Route>
     <Route path="/home" element={<ProtectedRoute><Home/></ProtectedRoute>}></Route>
     <Route path='/cart' element={<ProtectedRoute><Cart/></ProtectedRoute>}></Route>
     <Route path='/payment' element={<ProtectedRoute><PaymentPage/></ProtectedRoute>}></Route>
     {<Route path='*' element={<ProtectedRoute><PageNotFound/></ProtectedRoute>}></Route>}

     </Routes>
     
     
     {/* <PageNotFound/> */}
     
     
    </>
  )
}

export default App
