import React from 'react';

import NavigationLinks from './NavigationLinks';

import './SideDrawer.css';

const SideDrawer = props => {
	let drawerClasses = 'side-drawer';
	if(props.show) {
		drawerClasses += ' open'
	}
	return (
		<nav className={drawerClasses}>
			<NavigationLinks withHomeButton={true} drawerClickHandler={props.drawerClickHandler}/>
		</nav>
	);
};

export default SideDrawer;
