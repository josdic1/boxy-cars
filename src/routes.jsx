import App from './App.jsx'
import Error from './pages/Error.jsx'

const routes = [
    { path: '/', element: <App />, errorElement: <Error />,
        children: [
            {path: '/error', element: <Error />}
        ]
     }
]
export default routes