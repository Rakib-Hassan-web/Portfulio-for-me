import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router'
import Home from './assets/Pages/Home'

function App() {

  const myrount =createBrowserRouter(createRoutesFromElements(
  
    <Route>

{/* <Route path='/' element={<LayoutOne/>}> */}

<Route index element={<Home/>}/>



{/* </Route> */}





    </Route>
  ))







  return (
    <>

    <RouterProvider router={myrount}/>

    </>
  )
}

export default App
