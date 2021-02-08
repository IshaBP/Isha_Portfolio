import { FaWindowClose } from 'react-icons/fa';
import styled from 'styled-components';

import { ThemeParams } from '../withTheme/types';

export const ModalPageSpan = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, 0.6);
`;

export const ModalBody = styled.section`
	border: 3px solid ${(props: { theme: ThemeParams }) => props.theme.green};
	border-radius: 8px;
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	display: flex;
	flex-direction: column;
	padding: 1vh 2vw;
`;

export const CloseIcon = styled(FaWindowClose)`
	cursor: pointer;
	display: block;
	align-self: flex-end;
	color: ${(props: { theme: ThemeParams }) => props.theme.green};
	font-size: calc(1rem + 3vmin);
`;
