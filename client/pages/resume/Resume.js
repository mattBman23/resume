import React from 'react';
import { Grid, Icon, Paper, Typography } from '@material-ui/core';
import { School, Work } from '@material-ui/icons';

import resData from '../../utils/data';
import {
  CustomTimelineSeperator,
  TimelineComp,
} from '../../components/Timeline/Timeline';
import './Resume.css';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineDot from '@material-ui/lab/TimelineDot';
import TimelineContent from '@material-ui/lab/TimelineContent';

export const ResumeComp = () => {
  return (
    <>
      {/* About me */}
      <Grid container className="section px-4 pt-4">
        <Grid item className="section_title">
          <span></span>
          <h4 className="section_title_text ">About Me</h4>
        </Grid>
        <Grid item xs={12} className="py-4">
          <Typography variant="body2" className="aboutme_text">
            {resData.about}
          </Typography>
        </Grid>
      </Grid>

      {/* Education and experience */}
      <Grid container className="section px-4">
        <Grid item className="section_title">
          <span></span>
          <h4 className="section_title_text ">Resume</h4>
        </Grid>

        <Grid item xs={12} className="pt-4">
          <Grid container className="resume_timeline">
            {/* Experience */}
            <Grid item sm={12} md={6}>
              <TimelineComp title="Experience" icon={<Work />}>
                {resData.experiences.map((exp, i) => (
                  <TimelineItem key={i}>
                    <CustomTimelineSeperator />
                    <TimelineContent className="resume_content">
                      <Typography className="timeline_title">
                        {exp.title}
                      </Typography>
                      <Typography variant="caption" className="timeline_date">
                        {exp.date}
                      </Typography>
                      <Typography
                        variant="body2"
                        className="timeline_description"
                      >
                        {exp.description}
                      </Typography>
                    </TimelineContent>
                  </TimelineItem>
                ))}
              </TimelineComp>
            </Grid>

            {/* Education */}
            <Grid item sm={12} md={6}>
              <TimelineComp title="Education" icon={<School />}>
                {resData.education.map((edu, i) => (
                  <TimelineItem key={i}>
                    <CustomTimelineSeperator />
                    <TimelineContent className="resume_content">
                      <Typography className="timeline_title">
                        {edu.title}
                      </Typography>
                      <Typography variant="caption" className="timeline_date">
                        {edu.date}
                      </Typography>
                      <Typography
                        variant="body2"
                        className="timeline_description"
                      >
                        {edu.description}
                      </Typography>
                    </TimelineContent>
                  </TimelineItem>
                ))}
              </TimelineComp>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {/* Services */}
      <Grid container className="section p-4">
        <Grid item className="section_title">
          <span></span>
          <h4 className="section_title_text ">Services</h4>
        </Grid>
        <Grid item xs={12} className="py-4">
          <Grid container spacing={3}>
            {resData.services.map((service, i) => (
              <Grid
                key={i}
                container
                item
                xs={12}
                sm={6}
                md={3}
                justify="space-around"
              >
                <div className="service">
                  <Icon className="service_icon">{service.icon}</Icon>
                  <Typography variant="h6" className="service_title">
                    {service.title}
                  </Typography>
                  <Typography variant="body2" className="service_description">
                    {service.description}
                  </Typography>
                </div>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>

      {/* Skills */}
      <Grid container className="section graybg p-4">
        <Grid item xs={12}>
          <Grid container justify="space-between" spacing={3}>
            {resData.skills.map((skill, idx) => (
              <Grid key={idx} item xs={12} sm={6} md={3}>
                <Paper className="skill">
                  <Typography variant="h6" className="skill_title">
                    {skill.title}
                  </Typography>
                  {skill.description.map((ele, i) => (
                    <Typography
                      key={i}
                      variant="body2"
                      className="skill_description"
                    >
                      <TimelineDot
                        variant="outlined"
                        className="timeline_dot"
                      />
                      {ele}
                    </Typography>
                  ))}
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
