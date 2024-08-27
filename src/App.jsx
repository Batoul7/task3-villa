
import {  Route, Routes } from 'react-router-dom'
import './App.css'

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import PropertiesPage from './Pages/Properties'
import ContactPage from './Pages/Contact'
import HomePage from './Pages/Home'
import SingleProperty from './Pages/SingleProperty'

function App() {

  return (
  <>
    <Header/>
    <Routes>
      <Route path='/task3-villa' element={<HomePage/>}/>
      <Route path='/contact' element={<ContactPage/>}/>
      <Route path='/properties' element={<PropertiesPage/>}/>
      <Route path='/propertydetails' element={<SingleProperty/>}/>
    </Routes>
    <Footer/>
    </>

  )
}

export default App
