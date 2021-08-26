import React from 'react';
import { authEndpoint, clientId, redirectUri, scopes } from "../config";
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';
import { useStyles } from '../customUi/index.tsx';
import Header from './Header';

const Home = () => {
  const classes = useStyles();

  const handleLogin = () => {
    window.location = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes}&response_type=token&show_dialog=true`;
  };

  return (
    <div className="login">
      <Header />
      <Button className={classes.buttonLogin} type="submit" onClick={handleLogin}>
        Login to spotify
      </Button>
    </div>
  );
};

export default connect()(Home);
