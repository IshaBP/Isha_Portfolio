import styled from 'styled-components';

import { ThemeParams } from '../../components/withTheme/types';

export const HomeContainer = styled.div`
	display: flex;
	flex-direction: column;
	padding: 6vw;
	overflow-wrap: break-word;
`;

export const LogosContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	font-size: calc(1rem + 2vmin);
	width: 70%;

	@media screen and (max-width: 930px) {
		width: 100%;
	}

	hr {
		border: 0;
		border-top: 1px solid
			${(props: { theme: ThemeParams }) => props.theme.green};
		margin-right: 3vw;
		width: 60%;

		@media screen and (max-width: 930px) {
			width: 50%;
		}
	}
`;

export const Logo = styled.a`
	margin-right: 2vw;
	text-decoration: none;
	color: ${(props: { theme: ThemeParams }) => props.theme.green};
	outline: none;
`;

export const NameContainer = styled.div`
	word-spacing: 1000vh;
	color: ${(props: { theme: ThemeParams }) => props.theme.white};
	font-size: calc(2rem + 7vmin);
	font-weight: bold;
	padding-bottom: 3vh;

	@media screen and (max-width: 768px) {
		font-size: calc(1rem + 5vmin);
	}
`;

export const ProfileContainer = styled.div`
	color: ${(props: { theme: ThemeParams }) => props.theme.green};
	font-size: calc(1rem + 3vmin);
	font-style: italic;

	@media screen and (max-width: 768px) {
		font-size: calc(1rem + 2vmin);
	}
`;
