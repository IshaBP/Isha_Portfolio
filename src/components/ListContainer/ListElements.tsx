import styled from 'styled-components';

export const ListWrapper = styled.div`
	.container {
		color: $green;
	}

	.header {
		font-size: calc(1rem + 3vmin);

		@media screen and (max-width: 768px) {
			font-size: calc(1rem + 2vmin);
		}
	}

	.list-items-container {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		grid-auto-rows: minmax(100px, auto);
	}

	.list-item-container {
		display: flex;
		flex-direction: column;
		align-self: center;
		justify-self: center;
		padding-bottom: 15px;
	}

	.item-element {
		align-self: center;
		padding-top: 5px;
	}
`;
