import NavBar from './components/NavBar'
import VehicleProvider from './providers/VehicleProvider'
import Home from './components/Home'
import LoaderModeProvider from './providers/LoaderModeProvider'

import { Outlet } from 'react-router-dom'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  return (
    <>
    <LoaderModeProvider>
      <header>
          <img src={viteLogo} className="logo" alt="Vite logo" />
          <NavBar />
      </header>
      <main>
      <VehicleProvider>
        <Outlet />
      </VehicleProvider>
      </main>
      </LoaderModeProvider>
    </>
  )
}

export default App
