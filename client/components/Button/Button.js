import { Button } from '@material-ui/core';
import React from 'react';
import './Button.css';

export const ButtonComp = ({ text, icon }) => {
  return (
    <Button
      className="custom_btn"
      endIcon={icon && <div className="custom_btn_icon">{icon}</div>}
    >
      <span className="custom_btn_text">{text}</span>
    </Button>
  );
};
