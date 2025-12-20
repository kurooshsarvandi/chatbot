import {Routes , Route } from 'react-router'
import { HomePage } from './pages/HomePage'
import { ChekoutPage } from './pages/ChekoutPage'
import { OrdersPage } from './pages/OrdersPage'

import './App.css'

function App() {
  return (
    <Routes>
       <Route index element={<HomePage />}/>
       <Route path="chekout" element={<ChekoutPage/>}/>
       <Route path="Orders" element={<OrdersPage/>}/>
       
    </Routes>
   
  )
}

export default App
