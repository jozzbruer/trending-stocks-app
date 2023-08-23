import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<div className='header'>
			<div className='navbar-header header-center'>
				<Link to='/' style={{ textDecoration: 'none' }}>
					<h3 className='header-title'>Stock Analyzer</h3>
				</Link>
			</div>
		</div>
	);
};

export default Header;
