import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink, withRouter } from 'react-router-dom';
import { HomeRounded, Telegram } from '@material-ui/icons';
import { ButtonComp } from '../Button/Button';

import resData from '../../utils/data';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';

const HeaderComp = (props) => {
  const pathName = props?.location?.pathname;

  return (
    <Navbar expand="lg" sticky="top" className="header">
      {/* Home Link */}
      <Nav.Link as={NavLink} to="/" className="p-0 m-0">
        <Navbar.Brand className="header_home">
          <HomeRounded />
        </Navbar.Brand>
      </Nav.Link>

      <Navbar.Toggle />
      <Navbar.Collapse>
        <Nav className="header_left">
          <Nav.Link
            as={NavLink}
            to="/"
            className={pathName === '/' ? 'header_link_active' : 'header_link'}
          >
            Resume
          </Nav.Link>

          <Nav.Link
            as={NavLink}
            to="/portfolio"
            className={
              pathName === '/portfolio' ? 'header_link_active' : 'header_link'
            }
          >
            Portfolio
          </Nav.Link>
        </Nav>

        <div className="header_right">
          {Object.keys(resData.socials).map((key, i) => (
            <a key={i} href={resData.socials[key].link} target="blank">
              {resData.socials[key].icon}
            </a>
          ))}
          <ButtonComp text="Hire Me" icon={<Telegram />} />
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default withRouter(HeaderComp);
