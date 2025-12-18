import {Routes , Route } from 'react-router'
import { HomePage } from './pages/HomePage'
import { ChekoutPage } from './pages/ChekoutPage'
import { OrderPage } from './pages/OrdersPage'
import { TrackingPage } from './pages/TrackingPage'
import './App.css'

function App() {
  return (
    <Routes>
       <Route index element={<HomePage />}/>
       <Route path="chekout" element={<ChekoutPage/>}/>
       <Route path="Order" element={<OrdersPage/>}/>
       <Route path="TrackingPage" element={<TrackingPage/>}/>
    </Routes>
   
  )
}

export default App
