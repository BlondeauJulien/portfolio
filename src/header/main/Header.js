import React from 'react';

import DrawerToggleButton from '../components/DrawerToggleButton';
import NavigationLinks from '../components/NavigationLinks';
import LanguageFlag from '../components/LanguageFlag';

import './Header.css';

const Header = props => {
	const { drawerClickHandler } = props;

	return (
		<header className="header">
			<nav className="header__navigation">
				<div className="header__logo">
					<a href="/"><i className="fas fa-code logo"></i></a>
				</div>
				<div className="spacer" />
				<div className="header__navigation-items">
					<NavigationLinks />
				</div>
				<LanguageFlag />
				<div className='header__toggle-button'>
					<DrawerToggleButton drawerClickHandler={drawerClickHandler}/>
				</div>
			</nav>
		</header>
	);
};

export default Header;
