import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './App.css';
import RootLayout from './Components/Layout/RootLayout';
import LandingPage from './LandingPage';

const router = createBrowserRouter([
	{
		path: '/',
		element: <RootLayout />,
		children: [
			{ path: '/', element: <LandingPage /> },
			{
				path: 'about-us',
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
