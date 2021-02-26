import { Typography } from '@material-ui/core';
import React from 'react';
import { GetApp, PersonOutlineOutlined } from '@material-ui/icons';
import { TimelineComp, CustomTimelineSeperator } from './../Timeline/Timeline';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineItem from '@material-ui/lab/TimelineItem';

import profileImg from '../../assets/images/profileImg.jpg';
import resData from '../../utils/data';
import { ButtonComp } from '../Button/Button';
import resumePdf from '../../assets/Resume.pdf';
import './Profile.css';

const CustomTimelineItem = ({ title, text, link }) => {
  return (
    <TimelineItem>
      <CustomTimelineSeperator />
      <TimelineContent className="timeline_content">
        {link ? (
          <>
            <Typography className="timelineItem_text">
              <span>{title}:</span>
              <a href={link} target="blank">
                {text}
              </a>
            </Typography>
          </>
        ) : (
          <Typography className="timelineItem_text">
            <span>{title}:</span> {text}
          </Typography>
        )}
      </TimelineContent>
    </TimelineItem>
  );
};

export const ProfileComp = () => {
  return (
    <div className="profile container_shadow">
      <div className="profile_name">
        <Typography className="name">{resData.name}</Typography>
        <Typography className="title">{resData.title}</Typography>
      </div>

      <div className="profile_image">
        <img src={profileImg} alt="profileImg" />
      </div>

      <div className="profile_information">
        <TimelineComp icon={<PersonOutlineOutlined />}>
          <CustomTimelineItem title="Name" text={resData.name} />
          <CustomTimelineItem title="Title" text={resData.title} />
          <CustomTimelineItem title="Email" text={resData.email} />

          {Object.keys(resData.socials).map((key, i) => (
            <CustomTimelineItem
              key={i}
              title={key}
              text={resData.socials[key].text}
              link={resData.socials[key].link}
            />
          ))}
        </TimelineComp>
        <a href={resumePdf} target="_blank" className="button_container">
          <ButtonComp text="Download Cv" icon={<GetApp />} />
        </a>
      </div>
    </div>
  );
};
