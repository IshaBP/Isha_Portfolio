import React from 'react';

import { TimeLineWrapper } from './TimeLineElements';
import { TimelineItem } from './TimeLineItem';
import { TimeLine } from './types';

interface TimeLineProps {
	timelineData: Array<TimeLine>;
}

export const Timeline = ({ timelineData }: TimeLineProps) => (
	<TimeLineWrapper>
		<div className="timeline-container">
			{timelineData.length > 0 &&
				timelineData.map((data, idx) => <TimelineItem data={data} key={idx} />)}
		</div>
	</TimeLineWrapper>
);
