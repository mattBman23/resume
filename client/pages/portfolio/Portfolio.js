import {
  Grid,
  Tabs,
  Tab,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  Grow,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@material-ui/core';
import React, { useState } from 'react';

import resData from '../../utils/data';
import './Portfolio.css';

export const PortfolioComp = () => {
  const [tabVal, setTabVal] = useState('All');
  const [projectDialog, setProjectDialog] = useState(false);

  return (
    <Grid container className="section p-4">
      <Grid item className="section_title">
        <span></span>
        <h4 className="section_title_text">Portfolio</h4>
      </Grid>

      <Grid item xs={12}>
        <Tabs
          value={tabVal}
          indicatorColor="white"
          className="customTabs"
          onChange={(_, val) => setTabVal(val)}
        >
          <Tab
            label="All"
            value="All"
            className={
              tabVal === 'All' ? 'customTabs_item active' : 'customTabs_item'
            }
          />
          {[...new Set(resData.projects.map((item) => item.tag))].map(
            (tag, i) => (
              <Tab
                key={i}
                label={tag}
                value={tag}
                className={
                  tabVal === tag ? 'customTabs_item active' : 'customTabs_item'
                }
              />
            )
          )}
        </Tabs>
      </Grid>

      {/* Projects */}
      <Grid item xs={12}>
        <Grid container spacing={2} className="p-3">
          {resData.projects.map((project, i) => (
            <>
              {tabVal === project.tag || tabVal === 'All' ? (
                <Grid item key={i} xs={12} sm={6} md={4}>
                  <Grow in timeout={1000}>
                    <Card
                      className="customCard"
                      onClick={() => setProjectDialog(project)}
                    >
                      <CardActionArea>
                        <CardMedia
                          className="customCard_image"
                          image={project.image}
                          title={project.title}
                        />
                        <CardContent>
                          <Typography
                            variant="body2"
                            className="customCard_title"
                          >
                            {project.title}
                          </Typography>
                          <Typography
                            variant="body2"
                            className="customCard_caption"
                          >
                            {project.caption}
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Grow>
                </Grid>
              ) : null}
            </>
          ))}
        </Grid>
      </Grid>

      <Dialog
        open={projectDialog}
        onClose={() => setProjectDialog(false)}
        className="projectDialog"
        fullWidth
      >
        <DialogTitle onClose={() => setProjectDialog(false)}>
          {projectDialog.title}
        </DialogTitle>
        <img src={projectDialog.image} alt="" className="projectDialog-image" />
        <DialogContent>
          <Typography className="projectDialog-description">
            {projectDialog.description}
          </Typography>
        </DialogContent>
        <DialogActions className="projectDialog-actions">
          {projectDialog?.links?.map((link) => (
            <a href={link.link} target="_blank" className="projectDialog-icon">
              {link.icon}
            </a>
          ))}
        </DialogActions>
      </Dialog>
    </Grid>
  );
};
