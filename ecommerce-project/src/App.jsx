import {Routes , Route } from 'react-router'
import { HomePage } from './pages/HomePage'

import './App.css'

function App() {
  return (
    <Routes>
       <Route index element={<HomePage />}/>
       <Route path="chekout" element={<div> test chekout page </div>}/>
    </Routes>
   
  )
}

export default App
