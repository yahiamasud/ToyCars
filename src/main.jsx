import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './Componant/Header/Header';
import Mainloyout from './layout/Mainloyout';
import Home from './Componant/Home/Home';
import Login from './Componant/Login/Login'
import Regetetion from './Componant/Regetetion/Regetetion'
import './index.css'
import AuthProviders from './providers/AuthProviders';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Blogs from './Componant/Blogs/Blogs';
import MyToys from './Componant/MyToys/MyToys';
import AddToys from './Componant/AddToys/AddToys';
import AllToys from './Componant/AllToys/AllToys';
import PrivateRoute from './PrivateRouter/PrivateRouter';




const router = createBrowserRouter([
  {
    path:"/",
    element: <Mainloyout></Mainloyout>,
    children: [
      {
        path:"/",
        element: <Home></Home>
      },
      {
        path:"Header",
        element: <Header></Header>
      },
      {
        path:"Login",
        element: <Login></Login>
      },
      {
        path: "Regetetion",
        element: <Regetetion></Regetetion>

      },
      {
        path:'Blogs',
        element:<Blogs></Blogs>

      },
      {
        path:'AddToys',
        element: <PrivateRoute><AddToys></AddToys></PrivateRoute>

      },
      {
        path:'MyToys',
        element: <PrivateRoute><MyToys></MyToys></PrivateRoute>

      },
      {
        path:'AllToys',
        element:<AllToys></AllToys>
      },
    ]
  },
]);

// thsi is the router

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProviders>
      <RouterProvider router={router} />
    </AuthProviders>
  </React.StrictMode>,
)
