import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.scss';
import Main from './pages/Main/Main';
import Home from './pages/Home/Home';
import Arctic from './pages/Arctic/Arctic';
import Pilot from './pages/Pilot/Pilot';
import Polar from './pages/Polar/Polar';


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
    {
        path: '/arctic',
        element: <Arctic />,
    },
    {
        path: '/pilot',
        element: <Pilot />,
    },
    {
        path: '/polar',
        element: <Polar />,
    },
]);
root.render(<RouterProvider router={router} />);


