import React from 'react';

import DrawerToggleButton from '../components/DrawerToggleButton';
import NavigationLinks from '../components/NavigationLinks';

import './Header.css';

const Header = props => {
	const { drawerClickHandler } = props;

	return (
		<header className="header">
			<nav className="header__navigation">
				<div className="header__logo">
					<a href="/">Julien Blondeau</a>
				</div>
				<div className="spacer" />
				<div className="header__navigation-items">
					<NavigationLinks />
				</div>
				<div className='header__toggle-button'>
					<DrawerToggleButton drawerClickHandler={drawerClickHandler}/>
				</div>
			</nav>
		</header>
	);
};

export default Header;
