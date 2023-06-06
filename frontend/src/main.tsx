import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { mirageSetup } from './mirage/setup.ts'

async function startup() {
  await mirageSetup()
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

startup()