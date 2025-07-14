import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router'

function App() {

  const myrount =createBrowserRouter(createRoutesFromElements(
    <Route>

<Route path='/' element={<LayouteOne/>}>

<Route index element={}

</Route>


    </Route>
  ))







  return (
    <>

    </>
  )
}

export default App
