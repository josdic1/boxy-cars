import { useRouteError } from "react-router-dom"
import NavBar from "../components/NavBar"

function Error() {

    const error = useRouteError()

return (
<>
<header>
<NavBar />
</header>
<main>
<h1>ERROR!</h1>
<h2>{error.message}</h2>
<p>{error.status}</p>
<p>{error.statusText}</p>
</main>
</>
)}

export default Error
