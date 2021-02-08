import styled from 'styled-components';

export const HomeWrapper = styled.div`
	.home {
		display: flex;
		overflow-wrap: break-word;

		.logos-container {
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
				border-top: 1px solid $green;
				margin-right: 3vw;
				width: 60%;

				@media screen and (max-width: 930px) {
					width: 50%;
				}
			}

			.logo {
				margin-right: 2vw;
				text-decoration: none;
				color: $green;
				outline: none;
			}
		}

		.name-container {
			word-spacing: 1000vh;
			color: $white;
			font-size: calc(2rem + 7vmin);
			font-weight: bold;
			padding-bottom: 3vh;

			@media screen and (max-width: 768px) {
				font-size: calc(1rem + 5vmin);
			}
		}

		.profile-container {
			color: $green;
			font-size: calc(1rem + 3vmin);
			font-style: italic;

			@media screen and (max-width: 768px) {
				font-size: calc(1rem + 2vmin);
			}
		}
	}
`;
