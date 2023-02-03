import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { loader as userDetailLoader } from './Pages/DetailsPage/UserDetails/index';

import './App.css';

import LandingPage from './Pages/LandingPage';
import AboutUsPage from './Pages/AboutUsPage';
import DetailsPage from './Pages/DetailsPage';
import RootLayout from './Components/Layout/RootLayout';

const router = createBrowserRouter([
	{
		path: '/',
		element: <RootLayout />,
		children: [
			{
				path: '/',
				element: <LandingPage />,
			},
			{
				path: 'about-us/',
				element: <AboutUsPage />,
			},
			{
				path: 'about-us/:userId',
				loader: userDetailLoader,
				element: <DetailsPage />,
			},
		],
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
