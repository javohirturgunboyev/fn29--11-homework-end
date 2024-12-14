import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Login from './pages/Login'
import Register from './pages/Register'
// import MainLayout from './layouts/MainLayout'
// import AuthLayout from './layouts/AuthLayout'

function App() {
  return (
    <div>
      <Routes>
        {/* <Route index element={<MainLayout><Home></Home></MainLayout>}></Route> */}
        <Route path='/' element={<Home></Home>}></Route>
        {/* <Route path='/About' element={<MainLayout><About></About></MainLayout>}></Route> */}
        <Route path='/About:id' element={<About></About>}></Route>
        {/* <Route path='/Login' element={<AuthLayout><Login></Login></AuthLayout>}></Route> */}
        <Route path='/Login' element={<Login></Login>}></Route>
        {/* <Route path='/Register' element={<AuthLayout><Register></Register></AuthLayout>}></Route> */}
        <Route path='/Register' element={<Register></Register>}></Route>
      </Routes>
    </div>
  )
}

export default App


