import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AddUser from './components/AddUser.jsx';
import UpdateUser from './components/UpdateUser.jsx';
const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
  },
  {
    path: '/add-user',
    element: <AddUser></AddUser>,
  },
  {
    path: '/update/:id',
    element: <UpdateUser></UpdateUser>,
    loader: ({ params }) =>
      fetch(`https://api-user-managment.vercel.app/users/${params.id}`),
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
