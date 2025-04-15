import VehicleContext from "../contexts/VehicleContext"


function VehicleProvider({children}) {

return (
<>
<VehicleContext.Provider
    value={{}}
>
{children}
</VehicleContext.Provider>
</>
)}

export default VehicleProvider
