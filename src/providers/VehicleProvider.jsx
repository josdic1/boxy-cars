import { useState, useEffect, useContext } from "react"
import VehicleContext from "../contexts/VehicleContext"
import LoaderModeContext from "../contexts/LoaderModeContext"

function VehicleProvider({ children }) {
    const [vehicles, setVehicles] = useState([])
    const [logos, setLogos ] = useState([])
    const [selVel, setSelVel] = useState({
    id: "",
    make: '',
    model: '',
    year: 0,
    manufacturer: "",
    discontinued: false,
    image: ""
    })

    const { setIsLoading } = useContext(LoaderModeContext)

    useEffect(() => {
        const fetchData = async () => {
          setIsLoading(true)
      
          const [vehiclesRes, logosRes] = await Promise.all([
            fetch('http://localhost:3000/vehicles'),
            fetch('http://localhost:3000/logos')
          ])
      
          const [vehiclesData, logosData] = await Promise.all([
            vehiclesRes.json(),
            logosRes.json()
          ])
      
          setVehicles(vehiclesData)
          setLogos(logosData)
      
          setIsLoading(false)
        }
      
        fetchData()
      }, [])

    async function fetchVehicles() {
        try {
            const r = await fetch(`http://localhost:3000/vehicles`)
            if (!r.ok) {
                throw new Error("💥 Error");
            }
            const data = await r.json()
            setVehicles(data)
        } catch (error) { console.error("❌ Caught error:", error); }
    }

    async function fetchLogos() {
        try {
            const r = await fetch(`http://localhost:3000/logos`)
            if (!r.ok) {
                throw new Error("💥 Error");
            }
            const data = await r.json()
            setLogos(data)
        } catch (error) { console.error("❌ Caught error:", error); }
    }


    async function updateFavorite(obj) {
        const newObj = {
            ...obj,
            favorite: !obj.favorite
        }
        try {
            const r = await fetch(`http://localhost:3000/vehicles/${obj.id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newObj)
            })
            if (!r.ok) {
                throw new Error("💥 Error");
            }
            const data = await r.json()
            const updated = [...vehicles].map(i => i.id === data.id ? data : i)
            setVehicles(updated)

        } catch (error) { console.error("❌ Caught error:", error); }
    }

    return (
        <>
            <VehicleContext.Provider
                value={{ vehicles, logos, selVel, setSelVel, updateFavorite }}
            >
                {children}
            </VehicleContext.Provider>
        </>
    )
}

export default VehicleProvider
