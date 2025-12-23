import axios from 'axios'
import {Routes , Route } from 'react-router'
import { useState,useEffect } from 'react'
import { HomePage } from './pages/HomePage'
import { ChekoutPage } from './pages/ChekoutPage'
import { OrdersPage } from './pages/OrdersPage'
import './App.css'


function App() {
    const [cart, setCart] = useState([]);

    useEffect(()=>{
       axios.get('/api/cart-items')
        .then((response)=>{
         setCart(response.data);
       });
  },[])
    
  return (
    <Routes>
       <Route index element={<HomePage cart={cart}/>}/>
       <Route path="checkout" element={<ChekoutPage cart={cart}/>}/>
       <Route path="Orders" element={<OrdersPage/>}/>
       
    </Routes>
   
  )
}

export default App
