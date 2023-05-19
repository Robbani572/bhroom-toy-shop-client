import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import './index.css'
import '@smastrom/react-rating/style.css'
import router from './Routes/Routes'

ReactDOM.createRoot(document.getElementById('root')).render(
  <div>
    <React.StrictMode>
      <RouterProvider router={router}></RouterProvider>
    </React.StrictMode>
  </div>
)
