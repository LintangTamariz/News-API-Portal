import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import axios from "axios"
import Home from "./pages/Home"


const App = () => {
  axios.defaults.baseURL = "https://newsapi.org/"
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home/>} path="/"/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
