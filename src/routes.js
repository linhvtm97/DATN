import React from 'react';
import HomePage from './pages/HomePage/HomePage'
import AboutPage from './pages/AboutPage/AboutPage'
import EventPage from './pages/EventPage/EventPage'
import CharityPage from './pages/CharityPage/CharityPage'
import EventDetailPage from './pages/EventPage/EventDetailPage'
import ProductPage from './pages/ProductPage/ProductPage'

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
        path: '/events/:id',
        exact: true,
        main: ({match}) => <EventDetailPage match={match} />
    },
    {
        path: '/charities',
        exact: true,
        main: () => <CharityPage />
    },
    {
        path: '/shop?event=:id',
        exact: true,
        main: ({match}) => <ProductPage match={match} />
    },
    {
        path: '/about',
        exact: true,
        main: () => <AboutPage />
    },
];
export default routes;