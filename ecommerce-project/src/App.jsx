import {Routes , Route } from 'react-router'
import { HomePage } from './pages/HomePage'
import { ChekoutPage } from './pages/ChekoutPage'

import './App.css'

function App() {
  return (
    <Routes>
       <Route index element={<HomePage />}/>
       <Route path="chekout" element={<ChekoutPage/>}/>
    </Routes>
   
  )
}

export default App
