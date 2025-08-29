import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router'
import './App.css'
import Profile from './pages/profile'
import SearchPage from './pages/search'
import Portfolio from './pages/portfolio'
import SideNavigations from './components/navigations/SideNavigations'
import Port_insight from './components/port_insighr'


function App() {

  return (
    <>
    <Router>
    <SideNavigations />
    <Port_insight />
      <Routes>
        <Route path='/' element={<Portfolio />}/>
        <Route path='/profile' element={<Profile />}/>
        <Route path='/search' element={<SearchPage />}/>
      </Routes>
    </Router>
     </>
  )
}

export default App
