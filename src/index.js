import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.scss';
import Main from './pages/Main/Main';
import Home from './pages/Home/Home';
import Home2 from './pages/Home2/Home2';
import Arctic from './pages/Arctic/Arctic';
import Pilot from './pages/Pilot/Pilot';
import Polar from './pages/Polar/Polar';
import RadioArctic from './pages/Radio/RadioArctic/RadioArctic';
import ConnectArctic from './pages/Connect/ConnectArctic/ConnectArctic';
import RadioPilot from './pages/Radio/RadioPilot/RadioPilot';
import ConnectPilot from './pages/Connect/ConnectPilot/ConnectPilot';
import RadioPolar from './pages/Radio/RadioPolar/RadioPolar';
import ConnectPolar from './pages/Connect/ConnectPolar/ConnectPolar';

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
    },
    {
        path: '/home',
        element: <Home2 />,
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
    {
        path: '/radio_arctic',
        element: <RadioArctic />,
    },
    {
        path: '/connect_arctic',
        element: <ConnectArctic />,
    },
    {
        path: '/radio_pilot',
        element: <RadioPilot />,
    },
    {
        path: '/connect_pilot',
        element: <ConnectPilot />,
    },
    {
        path: '/radio_polar',
        element: <RadioPolar />,
    },
    {
        path: '/connect_polar',
        element: <ConnectPolar />,
    },
]);
root.render(<RouterProvider router={router} />);
