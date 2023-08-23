import React from 'react';
import Slider from './Slider';
import Header from './Header';
import { Outlet } from 'react-router-dom';

const Layout = ({ children }) => {
	return (
		<>
			<Slider />
			<Header />
			<main>{children}</main>
			<Outlet />
		</>
	);
};

export default Layout;
