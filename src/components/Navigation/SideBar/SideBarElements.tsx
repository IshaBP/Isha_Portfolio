import { IoClose } from 'react-icons/io5';
import { Link as LinkRouter } from 'react-router-dom';
import { Link as LinkScroll } from 'react-scroll';
import styled from 'styled-components';

import { SideBarContainerProps } from '../types';

export const SideBarContainer = styled.aside`
	position: fixed;
	z-index: 999;
	width: 100%;
	height: 100%;
	background: #000;
	display: grid;
	align-items: center;
	top: 0;
	left: 0;
	transition: 0.3s ease-in-out;
	opacity: ${({ isOpen }: SideBarContainerProps) => (isOpen ? "100%" : "0%")};
	top: ${({ isOpen }: SideBarContainerProps) => (isOpen ? "0" : "-100%")};
`;

export const CloseIcon = styled(IoClose)`
	color: #fff;
`;

export const Icon = styled.div`
	position: absolute;
	top: 1.2rem;
	right: 1.5rem;
	background: transparent;
	cursor: pointer;
	font-size: 2rem;
	outline: none;
`;

export const SideBarWrapper = styled.div`
	color: #fff;
`;

export const SideBarMenu = styled.ul`
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: repeat(6, 80px);
	text-align: center;

	@media screen and (max-width: 480px) {
		grid-template-rows: repeat(6, 60px);
	}
`;

export const SideBarLink = styled(LinkScroll)`
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 1.5rem;
	text-decoration: none;
	list-style: none;
	transition: 0.2s ease-in-out;
	text-decoration: none;
	color: #fff;
	cursor: pointer;

	&:hover {
		color: #01bf71;
		transition: 0.2s ease-in-out;
	}
`;
