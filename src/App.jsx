import React from 'react'
import { Routes,Route } from 'react-router-dom'
import CreateProduct from './pages/CreateProduct'
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/createproduct" element={<CreateProduct/>}></Route>
      </Routes>
    </>
  )
}

export default App