import React, { ComponentType } from 'react';

import { SectionContainer } from './SectionElements';

const withSectionWrapper = (WrappedComponent: ComponentType) => {
	return (props: any) => {
		return (
			<SectionContainer>
				<WrappedComponent {...props} />
			</SectionContainer>
		);
	};
};

export default withSectionWrapper;
