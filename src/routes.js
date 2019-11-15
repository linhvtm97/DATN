import React from 'react';
import HomePage from './pages/HomePage/HomePage'
import AboutPage from './pages/AboutPage/AboutPage';
import EventPage from './pages/EventPage/EventPage'

const routes=[
    {
        path: '/',
        exact: true,
        main: () => <HomePage />
    },
    {
        path: '/events',
        exact: true,
        main: () => <EventPage />
    },
    {
        path: '/about',
        exact: true,
        main: () => <AboutPage />
    },
];
export default routes;