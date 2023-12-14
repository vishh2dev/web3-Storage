import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  // createBrowserRouter,
  // RouterProvider,
  
} from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <div>Hello world!</div>,
//   },
// ]);
// import { Approutes } from './Navigation/AppRoutes.js';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
     {/* <RouterProvider router={Approutes} /> */}
    <App />
    </BrowserRouter>
  </React.StrictMode>,
)
