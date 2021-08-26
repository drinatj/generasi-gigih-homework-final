import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import {useStyles} from '../customUi';

const SearchForm = (props) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const classes = useStyles();

  const handleInputChange = (event) => {
    const searchTerm = event.target.value;
    setSearchTerm(searchTerm);
  };

  const handleSearch = (event) => {
    event.preventDefault();

    if (searchTerm.trim() !== '') {
      setErrorMsg('');
      props.handleSearch(searchTerm);
    } else {
      setErrorMsg('Please enter a search term.');
    }
  };

  return (
    <div>
      <Paper component="form" className={classes.root} onSubmit={handleSearch}>
        {errorMsg && <p className="errorMsg">{errorMsg}</p>}
        <InputBase
          onChange={handleInputChange}
          value={searchTerm}
          className={classes.input}
          placeholder="Search"
          data-testid="search_input"
        />
        <Divider className={classes.divider} orientation="vertical" />
        <IconButton type="submit" className={classes.iconButton} aria-label="search" >
          <SearchIcon />
        </IconButton>
      </Paper>
    </div>
  );
};

export default SearchForm;
