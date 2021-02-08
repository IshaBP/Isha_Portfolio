import React from 'react';

import Construction from '../../components/Construction/index';
import Modal from '../../components/Modal';
import withSectionWrapper from '../../components/withSectionWrapper';
import { SOCIAL } from './constants';
import {
    HomeContainer, Logo, LogosContainer, NameContainer, ProfileContainer
} from './HomeElements';

const Home = () => {
	return (
		<HomeContainer>
			<Modal defaultShow={true}>
				<Construction />
			</Modal>
			<LogosContainer>
				<hr />
				{SOCIAL.map((item, index) => (
					<Logo
						href={item.link}
						key={index}
						target="_blank"
						rel="noopener noreferrer"
					>
						{item.logo}
					</Logo>
				))}
			</LogosContainer>
			<NameContainer>
				<span>Isha Pachkawade</span>
			</NameContainer>
			<ProfileContainer>
				<span>Frontend Developer</span>
			</ProfileContainer>
		</HomeContainer>
	);
};

export default withSectionWrapper(Home);
