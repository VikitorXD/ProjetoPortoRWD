import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Login from './routes/Login/index.jsx'
import Cadastro from './routes/Cadastro/index.jsx'
import Mapa from './routes/Mapa/index.jsx'
 


const router = createBrowserRouter([
  {
    path: '/', element: <App/>,
    errorElement: <Error/>,
    children:[
      {
        path: '/', 
        element: <Login/>
      },
      {
        path: '/mapa', 
        element: <Mapa/>
      },
      {
        path: '/Cadastro', 
        element: <Cadastro/>
      },
      {
        path: '/excluir/produtos/:id', 
        element: <ExcluirProduto/>
      },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
