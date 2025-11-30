import React from 'react'
import { Toaster } from 'react-hot-toast'
import { RouterProvider } from 'react-router-dom'
import router from './Routes'

export default function App() {
  return (
    <>
    <RouterProvider router={router}/>
      <Toaster/>
    </>
  )
}
