import React from 'react'
import './App.css'

import Welcome from './components/Welcome/Welcome'
import Menu from './components/Menu/Menu'
import Contact from './components/Contact/Contact'

import Popup from './components/Popup/Popup'

export default function App() {
  return (
    <>
      <Welcome />
      <Menu />
      <Contact />
    </>
  )
}