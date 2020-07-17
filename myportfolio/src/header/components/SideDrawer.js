import React from 'react';

import './SideDrawer.css';

const SideDrawer = props => {
	let drawerClasses = 'side-drawer';
	if(props.show) {
		drawerClasses += ' open'
	}
	return (
		<nav className={drawerClasses}>
			<ul>
				<li>Projets</li>
				<li>Technologies</li>
				<li>CV</li>
				<li>Contact</li>
			</ul>
		</nav>
	);
};

export default SideDrawer;
