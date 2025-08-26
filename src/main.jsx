import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import router from './Routes/Router.jsx'
import { RouterProvider } from 'react-router-dom'
import {HelmetProvider } from 'react-helmet-async';
import Authprovider from './provider/Authprovider.jsx'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
const queryClient = new QueryClient()
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Authprovider>
      <QueryClientProvider client={queryClient}>
        <HelmetProvider>
          <RouterProvider router={router}></RouterProvider>
    </HelmetProvider>     
    </QueryClientProvider>   
      </Authprovider>
  </StrictMode>,
)
