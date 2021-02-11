import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

import CustomAppBar from './AppBar';
import ChatBot from './ChatBox';

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CustomAppBar />
      <Grid container>
        <Grid item xs={6}>
        </Grid>
        <Grid item>
          asda
        </Grid>
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