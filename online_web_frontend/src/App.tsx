// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Home from "./pages/Home.tsx";
import About from "./pages/About.tsx";
import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";

const router = createBrowserRouter(
    [
        {
            path:"/",
            element:<Home />
        },
        {
            path:"/about",
            element:<About />
        }
    ]
)
function App() {
  return (
    <>
     <RouterProvider router={router} />
    </>
  )
}

export default App
