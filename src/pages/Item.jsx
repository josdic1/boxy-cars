import { useParams } from "react-router-dom"
import { useContext } from "react"
import VehicleContext from "../contexts/VehicleContext"

function Item() {

     const {selVel } = useContext(VehicleContext)
    const { id } = useParams()
    console.log(selVel.image)
return (
<>
<img src={selVel.image || 'NO'} alt='photo'/>
    <h1>{selVel.year || ''}</h1>   
    <h2>{selVel.make || ''}</h2>   
    <h4>{selVel.model || ''}</h4>   
    <h6>{selVel.manufacturer || ''}</h6>  
  
</>
)}

export default Item
