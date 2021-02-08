import React from 'react';
import { FaBars } from 'react-icons/fa';
import { withRouter } from 'react-router-dom';

import { NavProps } from '../types';
import { MobileIcon, Nav, NavContainer, NavItem, NavLinks, NavLogo, NavMenu } from './NavElements';

const NavBar: React.FunctionComponent<NavProps> = ({
	navItems,
	toggleIsOpen,
}: NavProps) => {
	return (
		<div>
			<Nav>
				<NavContainer>
					<NavLogo to="/">IP</NavLogo>
					<MobileIcon onClick={toggleIsOpen}>
						<FaBars />
					</MobileIcon>
					<NavMenu>
						{navItems.map((item) => (
							<NavItem>
								<NavLinks to={item.path}>{item.section}</NavLinks>
							</NavItem>
						))}
					</NavMenu>
				</NavContainer>
			</Nav>
		</div>
	);
};

export default withRouter(NavBar);
