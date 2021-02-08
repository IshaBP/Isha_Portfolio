import styled from 'styled-components';

import { ThemeParams } from '../withTheme/types';

export const ConstructionWrapper = styled.div`
	color: ${(props: { theme: ThemeParams }) => props.theme.green};
	display: flex;
	flex-direction: column;
`;

export const ConstructionWrapper1 = styled.div`
	.construction {
		color: $green;
		display: flex;
		flex-direction: column;
	}

	.construction-icon-container {
		align-self: center;
		font-size: calc(2rem + 4vmin);
	}

	.icon-left {
		@extend .construction-icon-container;
		transform: rotate(-30deg);
	}

	.icon-right {
		@extend .construction-icon-container;
		transform: rotate(30deg);
	}

	.construction-text {
		align-self: center;
		text-align: center;
		font-size: calc(1rem + 2vmin);
	}
`;
