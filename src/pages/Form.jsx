import { useState, useContext } from "react"
import LoaderModeContext from "../contexts/LoaderModeContext"

function Form() {



    const [formData, setFormData] = useState({
        make: '',
        model: '',
        year: 0,
        manufacturer: "",
        discontinued: false,
        image: ""
    })

    const onSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <>
            <form onSubmit={onSubmit}>

            </form>
        </>
    )
}

export default Form
