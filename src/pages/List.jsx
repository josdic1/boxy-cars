import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import VehicleContext from "../contexts/VehicleContext"
import Card from "../components/Card"

function List() {

    const { vehicles, updateFavorite } = useContext(VehicleContext)

    const navigate = useNavigate()

    let displayList = vehicles

    const viewVehicle = (id) => {
        navigate(`/item/${id}`)
    }

    
    const vehicleList = displayList.map(vehicle => (
        <Card 
        key={vehicle.id} 
        vehicle={vehicle} 
        updateFavorite={updateFavorite}
        viewVehicle={viewVehicle}
        />
    ))

return (
<>
<table>
    <thead>
        <tr>
        <th> ★ </th>
        <th>View</th>
            <th>Make</th>
            <th>Model</th>
            <th>Manufacturer</th>
            <th>Year</th>
            <th>Info</th>
            <th>Edit</th>
            <th>Delete</th>
        </tr>
    </thead>
    <tbody>
        
    {vehicleList}
    </tbody>
</table>
</>
)}

export default List
