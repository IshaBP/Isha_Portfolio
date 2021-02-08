// import './Home.css';

import React from 'react';

// import Construction from '../../components/Construction/index';
// import Modal from '../../components/Modal';
import { SOCIAL } from './constants';

const Home = () => {
	return (
		<div className="section-inner home" id="home">
			{/* <Modal defaultShow={true}>
				<Construction />
			</Modal> */}
			<div className="logos-container">
				<hr />
				{SOCIAL.map((item, index) => (
					<a
						href={item.link}
						key={index}
						className="logo"
						target="_blank"
						rel="noopener noreferrer"
					>
						{item.logo}
					</a>
				))}
			</div>
			<div className="name-container">
				<span>Isha Pachkawade</span>
			</div>
			<div className="profile-container">
				<span>Frontend Developer</span>
			</div>
		</div>
	);
};

export default Home;
