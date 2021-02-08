import { RouteComponentProps } from 'react-router';

export type NavObject = {
	id: string;
	section: string;
	path: string;
	component:
		| React.ComponentType<RouteComponentProps<any>>
		| React.ComponentType<any>;
};

export type SideBarContainerProps = {
	isOpen: boolean;
};

export type NavProps = RouteComponentProps & {
	navItems: Array<NavObject>;
	logo?: string;
	toggleIsOpen: () => void;
};

export type NavigationProps = {
	navItems: Array<NavObject>;
};
