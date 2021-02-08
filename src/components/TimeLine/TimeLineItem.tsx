import React from 'react';

import { TimeLine } from './types';

interface TimeLineItemProps {
	data: TimeLine;
}

export const TimelineItem = ({ data }: TimeLineItemProps) => (
	<div className="timeline-item">
		<div className="timeline-item-content">
			<time>{data.date}</time>
			<div className="title">{data.title}</div>
			<div className="subTitle">{data.subTitle}</div>
			<hr />
		</div>
	</div>
);
