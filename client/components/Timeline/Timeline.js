import React from 'react';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import { Typography } from '@material-ui/core';
import WorkIcon from '@material-ui/icons/Work';

import './Timeline.css';

export const TimelineComp = ({ title, icon, children }) => {
  return (
    <Timeline className="timeline">
      <TimelineItem className="timeline_firstItem">
        <TimelineSeparator>
          <TimelineDot className="timeline_dot_header">{icon}</TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="h6" className="timeline_header">
            {title}
          </Typography>
        </TimelineContent>
      </TimelineItem>

      {children}

      {/* <TimelineItem>
        <CustomTimelineSeperator />
        <TimelineContent>Code</TimelineContent>
      </TimelineItem> */}
    </Timeline>
  );
};

export const CustomTimelineSeperator = () => {
  return (
    <TimelineSeparator className="seperator_padding">
      <TimelineDot variant="outlined" className="timeline_dot" />
      <TimelineConnector />
    </TimelineSeparator>
  );
};
