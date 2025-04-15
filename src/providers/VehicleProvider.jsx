import { useState, useEffect } from "react"
import VehicleContext from "../contexts/VehicleContext"


function VehicleProvider({ children }) {
    const [vehicles, setVehicles] = useState([])
    const [selVel, setSelVel] = useState({
        id: "",
    make: '',
    model: '',
    year: 0,
    manufacturer: "",
    discontinued: false,
    image: ""
    })

    useEffect(() => {
        fetchVehicles()
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
                value={{ vehicles, selVel, setSelVel, updateFavorite }}
            >
                {children}
            </VehicleContext.Provider>
        </>
    )
}

export default VehicleProvider
