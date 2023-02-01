import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './App.css';
import RootLayout from './Components/Layout/RootLayout';
import LandingPage from './Pages/LandingPage';

import AboutUsPage from './Pages/AboutUsPage';
import DetailsPage from './Pages/DetailsPage';

const router = createBrowserRouter([
	{
		path: '/',
		element: <LandingPage />,
	},
	{
		path: 'about-us/',
		element: <AboutUsPage />,
	},
	{
		path: 'about-us/details',
		element: <DetailsPage />,
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
