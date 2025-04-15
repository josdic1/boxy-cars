import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import VehicleContext from "../contexts/VehicleContext"

function Card({ vehicle, updateFavorite, viewVehicle }) {

    const { setSelVel } = useContext(VehicleContext)

const onClick = (e) => {

    const { id, name } = e.currentTarget
    if(name === "favorite") {
        updateFavorite(vehicle)
    } else {
        if(name === "view") {
            setSelVel(vehicle)
            viewVehicle(id)
        }  else {
            if(name === "edit") {
                console.log('edit tbd')
            } else {
                if(name === 'delete') {
                    console.log('delete tbd')
                }
            }
        }
    }
}

return (
<>
<tr>
    <td>
     <button type='button' id={vehicle.id} name='favorite' onClick={onClick} >{vehicle.favorite ? " ★ " : " ☆ "}</button>
    </td>
    <td>
     <button type='button' id={vehicle.id}  name='view' onClick={onClick} >View</button>
    </td>
    <td>{vehicle.make}</td>
    <td>{vehicle.model}</td>
    <td>{vehicle.manufacturer}</td>
            <td>{vehicle.year}</td>
            <td>...tbd</td>
            <td><button type='button' id={vehicle.id} name='edit' onClick={onClick}>
            Edit
            </button></td>
            <td><button type='button' id={vehicle.id} name='delete' onClick={onClick}>
            Delete
            </button></td>
</tr>

</>
)}

export default Card
