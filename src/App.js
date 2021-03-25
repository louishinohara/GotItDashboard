import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

import CustomAppBar from './AppBar';
import ChatBot from './ChatBox';
import FormContent from './FormContent';
function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CustomAppBar />
      <Grid container direction='row'  >
        <Grid item xs={6}>
        Chat Box Stuff
        </Grid>
        <FormContent/>
      </Grid>
    </div>
  );
}

export default App;

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));