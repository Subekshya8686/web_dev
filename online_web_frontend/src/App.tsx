// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Home from "./pages/Home.tsx";
import About from "./pages/About.tsx";
import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home1 from "./pages/Home1.tsx";

const router = createBrowserRouter(
    [
        {
            path:"/",
            element:<Home />
        },
        {
            path:"/about",
            element:<About />
        },
        {
            path:"/home1",
            element:<Home1 />
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
