import { useState } from 'react'
import './App.css'
import Navbar from './navbar/navbar.jsx'
import Footer from './Footer/Footer.jsx'
import Books from './Books/Books.jsx'

function App() {

  return (
    <>
      <Navbar />
      <Books />
      <Footer />

    </>
  )
}

export default App
