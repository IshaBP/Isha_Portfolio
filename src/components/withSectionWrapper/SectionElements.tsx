import styled from 'styled-components';

import { ThemeParams } from '../withTheme/types';

export const SectionContainer = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	height: 100vh;
	width: auto;
	overflow: hidden;
	background: ${(props: { theme: ThemeParams }) => props.theme.primary};
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-content: center;
`;
