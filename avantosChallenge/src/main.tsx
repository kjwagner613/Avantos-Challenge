
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { MappingProvider } from './context/MappingContext'
import { FormDataProvider } from '../src/context/FormDataContext'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <FormDataProvider>
      <MappingProvider>
        <App />
      </MappingProvider>
    </FormDataProvider>
  </StrictMode>
)