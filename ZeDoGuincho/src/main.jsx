import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'


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
    <App />
  </React.StrictMode>,
)
