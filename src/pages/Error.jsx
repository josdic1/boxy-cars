import { useRouteError } from "react-router-dom"

function Error() {

    const error = useRouteError()

return (
<>
<h1>ERROR!</h1>
<h2>{error.message}</h2>
<p>{error.status}</p>
<p>{error.statusText}</p>
</>
)}

export default Error
