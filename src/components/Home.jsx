import { useContext } from "react"
import LoaderModeContext from "../contexts/LoaderModeContext"
import List from "../pages/List"
import Form from "../pages/Form"

function Home() {

const { isLoading } = useContext(LoaderModeContext)
return (
<>

    <Form />
    <List />
  </>
)}



export default Home
