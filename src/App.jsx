import React from 'react'
import Header from './common/header'
import { RouterProvider } from 'react-router-dom'
import router from './routes'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ToastBar, Toaster } from 'react-hot-toast';
// import ProductPage from './components/ProductInformation';

function App() {
  return (
    <div>
      <RouterProvider router={router} />
      <Toaster position="top-right"/>
    </div>
  )
}

export default App