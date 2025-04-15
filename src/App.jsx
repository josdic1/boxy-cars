import NavBar from './components/NavBar'
import VehicleProvider from './providers/VehicleProvider'
import { Outlet } from 'react-router-dom'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  return (
    <>
      <header>
          <img src={viteLogo} className="logo" alt="Vite logo" />
          <NavBar />
      </header>
      <main>
      <VehicleProvider>
        <Outlet />
      </VehicleProvider>
      </main>
    </>
  )
}

export default App
