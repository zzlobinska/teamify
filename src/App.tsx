import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './App.css';
import RootLayout from './Components/Layout/RootLayout';
import LandingPage from './Pages/LandingPage';

import AboutUsPage from './Pages/AboutUsPage';

const router = createBrowserRouter([
	{
		path: '/',
		element: <RootLayout />,
		children: [
			{ path: '/', element: <LandingPage /> },
			{
				path: 'about-us',
				element: <AboutUsPage/>,
				children: [
					{
						path: ':details',
					},
				],
			},
		],
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
