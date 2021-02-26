import { Typography } from '@material-ui/core';
import React from 'react';

import './Footer.css';
import resData from '../../utils/data';

export const FooterComp = () => {
  return (
    <div className="footer">
      <div className="footer_left">
        <Typography className="footer_name">{resData.name}</Typography>
      </div>
      <div className="footer_right">
        <Typography className="footer_copyright">
          <a href="https://github.com/mattBman23">Github</a>
        </Typography>
      </div>
    </div>
  );
};
