import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.scss';
import Main from './pages/main/Main';
import Home from './pages/home/Home'


const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
    },
    {
        path: '/home',
        element: <Home />,
    },
]);
root.render(<RouterProvider router={router} />);


