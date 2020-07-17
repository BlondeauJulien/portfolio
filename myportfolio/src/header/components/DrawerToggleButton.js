import React from 'react';

import './DrawerToggleButton.css';

const DrawerToggleButton = props => {
	const { drawerClickHandler } = props;

	return (
		<button className="toggle-button" onClick={() => drawerClickHandler(true)}>
			<div className="toggle-button__line" />
			<div className="toggle-button__line" />
			<div className="toggle-button__line" />
		</button>
	);
};

export default DrawerToggleButton;
