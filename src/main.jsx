import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Compontents/Root/Root.jsx';
import ErrorPage from './Compontents/ErrorPage/ErrorPage.jsx';
import Home from './Compontents/Home/Home.jsx';
import Dashboard from './Compontents/Dashboard/Dashboard.jsx';
import BookDetles from './Compontents/BookDetles/BookDetles.jsx';
import ListedBooks from './Compontents/ListedBooks/ListedBooks.jsx';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/books/:bookId',
        element:<BookDetles></BookDetles>,
        loader:() => fetch('booksData.json')
      },
      {
        path:'/listedBooks',
        element:<ListedBooks></ListedBooks>,
        loader:() => fetch('booksData.json')
      },
      {
        path:'/dashboard',
        element:<Dashboard></Dashboard>
      }
    ]
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
     <ToastContainer />
  </StrictMode>,
)
