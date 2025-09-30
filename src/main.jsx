import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {AppContextProvider} from './context/AppContext.jsx'
import { BrowserRouter } from 'react-router-dom'
import { ClerkProvider } from '@clerk/clerk-react'

  // Import your Publishable Key
  const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

  if (!PUBLISHABLE_KEY) {
    throw new Error('Add your Clerk Publishable Key to the .env file')
  }

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <AppContextProvider>
    <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl='/' appearance={{
    elements: {
      card: "shadow-lg p-4 rounded-lg",
      headerTitle: "text-xl font-bold",
    },
    layout: {
      socialButtonsPlacement: "bottom",
    },
  }}>
    <App />
    </ClerkProvider>
  </StrictMode>,
  </AppContextProvider>
  </BrowserRouter>
)
