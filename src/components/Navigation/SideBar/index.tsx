import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';

import { NavObject, NavProps } from '../types';
import {
    CloseIcon, Icon, SideBarContainer, SideBarLink, SideBarMenu, SideBarWrapper
} from './SideBarElements';

type SideBarProps = NavProps & {
	isOpen: boolean;
};

const SideBar: React.FunctionComponent<SideBarProps> = ({
	navItems,
	isOpen,
	toggleIsOpen,
}: SideBarProps) => {
	return (
		<SideBarContainer isOpen={isOpen} onClick={toggleIsOpen}>
			<Icon>
				<CloseIcon />
			</Icon>
			<SideBarWrapper>
				<SideBarMenu>
					{navItems.map((item) => (
						<SideBarLink to={item.path} onClick={toggleIsOpen}>
							{item.section}
						</SideBarLink>
					))}
				</SideBarMenu>
			</SideBarWrapper>
		</SideBarContainer>
	);
};

export default withRouter(SideBar);
