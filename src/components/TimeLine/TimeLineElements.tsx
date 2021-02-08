import styled from 'styled-components';

export const TimeLineWrapper = styled.div`
	.timeline-container {
		display: flex;
		flex-direction: column;
		position: relative;
		overflow-y: scroll;
		scrollbar-width: none;
		margin-top: 11vh;

		&::-webkit-scrollbar {
			display: none;
		}

		&::after {
			background-color: $green;
			content: "";
			position: absolute;
			left: calc(50% - 2px);
			width: 4px;
			height: 100%;

			// @media screen and (max-width: 767px) {
			//   display: none;
			// }
		}

		.timeline-item {
			display: flex;
			justify-content: flex-end;
			padding-right: 30px;
			position: relative;
			width: 50%;

			.timeline-item-content {
				display: flex;
				flex-direction: column;
				align-items: flex-end;
				padding: 15px;
				position: relative;
				text-align: right;
				color: $white;

				time {
					color: $green;
					font-size: calc(0.5rem + 1vmin);
					font-weight: bold;
					font-style: italic;
					margin-bottom: 10px;
				}

				.title {
					font-size: calc(0.5rem + 2vmin);
					margin-bottom: 5px;
				}

				.subTitle {
					font-size: calc(0.6rem + 1vmin);
				}

				hr {
					position: absolute;
					top: calc(50% - 10px);
					right: -28px;
					border: 0;
					border-top: 2px solid $green;
					width: 30px;
				}
			}

			&:nth-child(odd) {
				align-self: flex-end;
				justify-content: flex-start;
				padding-left: 30px;
				padding-right: 0;
				.timeline-item-content {
					text-align: left;
					align-items: flex-start;

					hr {
						right: auto;
						left: -28px;
					}
				}
			}
		}
	}

	@media screen and (max-width: 1023px) {
		.timeline-item-content {
			max-width: 100%;
		}
	}

	@media screen and (max-width: 767px) {
		.timeline-container {
			.timeline-item {
				display: flex;
				justify-content: flex-end;
				padding-right: 30px;
				position: relative;
				width: 50%;

				.timeline-item-content {
					padding: 15px 10px;
					text-align: center;
					align-items: center;
				}
			}
			// .timeline-item-content,
			// .timeline-item:nth-child(odd) .timeline-item-content {
			//   padding: 15px 10px;
			//   text-align: center;
			//   align-items: center;
			// }

			.timeline-item-content time {
				margin-top: 20px;
			}
		}
	}
`;
