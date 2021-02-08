import React, { useEffect, useState } from 'react';
import { IoConstruct } from 'react-icons/io5';

import { ConstructionWrapper } from './ConstructionElements';

const constructionIconClasses = ["icon-left", "icon-right"];

const Construction: React.FunctionComponent<{}> = () => {
	const [iconClassIndex, setIconClassIndex] = useState(0);

	useEffect(() => {
		const intervalId = setInterval(() => {
			setIconClassIndex((iconClassIndex) => Number(!iconClassIndex));
		}, 1000);
		return () => {
			clearInterval(intervalId);
		};
	}, []);

	return (
		<ConstructionWrapper>
			<div className="construction">
				<div className={`${constructionIconClasses[iconClassIndex]}`}>
					<IoConstruct />
				</div>
				<span className="construction-text">Site is under construction</span>
			</div>
		</ConstructionWrapper>
	);
};

export default Construction;
