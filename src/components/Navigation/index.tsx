import React, { useState } from 'react';

import NavBar from './NavBar';
import SideBar from './SideBar';
import { NavigationProps } from './types';

const Navigation: React.FunctionComponent<NavigationProps> = ({
	navItems,
}: NavigationProps) => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleIsOpen = () => {
		setIsOpen(!isOpen);
	};

	return (
		<>
			<SideBar
				navItems={navItems}
				isOpen={isOpen}
				toggleIsOpen={toggleIsOpen}
			/>
			<NavBar navItems={navItems} toggleIsOpen={toggleIsOpen} />
		</>
	);
};

export default Navigation;
