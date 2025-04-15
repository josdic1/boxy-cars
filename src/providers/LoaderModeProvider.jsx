import { useState } from "react"
import LoaderModeContext from "../contexts/LoaderModeContext"

function LoaderModeProvider({children}) {
    const [ isLoading, setIsLoading] = useState(true)
    const [ inEditMode, setInEditMode] = useState(false)

return (
<>
<LoaderModeContext.Provider
value={{ inEditMode, setInEditMode, isLoading, setIsLoading }}
>
    {children}
</LoaderModeContext.Provider>
</>
)}

export default LoaderModeProvider
