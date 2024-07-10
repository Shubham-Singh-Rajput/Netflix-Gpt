import React from 'react';
import Browse from './Browse';
import {RouterProvider, createBrowserRouter, Outlet} from 'react-router-dom';
import Login from './Login';
import Header from './Header';

const Body = () => {
	return (
		<div>
			<Header />
			<Outlet />
		</div>
	);
};

const AppRouter = createBrowserRouter([
	{
		path: '/',
		element: <Body />,
		children: [
			{path: '/browser', element: <Browse />},
			{path: '/login', element: <Login />},
		],
	},
]);

const RenderRoot = () => {
	return <RouterProvider router={AppRouter} />;
};
export default RenderRoot;
