import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import router from './Routes/Router.jsx'
import { RouterProvider } from 'react-router-dom'
import {HelmetProvider } from 'react-helmet-async';
import Authprovider from './provider/Authprovider.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <Authprovider>
              <RouterProvider router={router}></RouterProvider>
      </Authprovider>
    </HelmetProvider>  
  </StrictMode>,
)
