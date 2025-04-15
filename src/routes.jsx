import App from './App.jsx'
import Home from './components/Home.jsx'
import Error from './pages/Error.jsx'
import Item from './pages/Item.jsx'


const routes = [
    { path: '/', element: <App />, errorElement: <Error />,
        children: [
            {path: 'home', element: <Home />},
            {path: 'error', element: <Error />},
            {path: 'item/:id', element: <Item />},

        ]
     }
]
export default routes