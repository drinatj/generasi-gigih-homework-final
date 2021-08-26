import React from 'react';
import {useStyles} from '../customUi';
import Avatar from '@material-ui/core/Avatar';
import logoMoosick from '../images/logoMoosick.png';

const Header = () => {
  const classes = useStyles();
  return(
    <div className={classes.rootAvatar}>
    <Avatar alt="MooSick" src={logoMoosick} className={classes.large} />
    <h1 className="header-login">MooSick</h1>
    </div>
  )   
};

export default Header;
