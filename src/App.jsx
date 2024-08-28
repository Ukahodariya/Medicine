import React from 'react'
import Header from './common/header'
import { RouterProvider } from 'react-router-dom'
import router from './routes'

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App