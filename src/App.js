import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

import CustomAppBar from './AppBar';
import Messenger from './Messenger';
import FormContent from './FormContent';

function App() {
  const classes = useStyles();
  const content = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d106.8195613507864!3d-6.194741395493371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5390917b759%3A0x6b45e67356080477!2sPT%20Kulkul%20Teknologi%20Internasional!5e0!3m2!1sen!2sid!4v1601138221085!5m2!1sen!2sid" width="99.4%" height="880"/>'
  return (
    <div className={classes.root}>
      <CustomAppBar />
      <Grid container direction='row'  >
        <Grid item xs={6}>
          <Messenger />
        </Grid>
        <Grid item xs={6}>
          <Grid container direction="column" justify="space-between">
            <Grid item>
              <div dangerouslySetInnerHTML={{ __html: content }}></div>
            </Grid>
            <Grid item>
              <FormContent />
            </Grid>
          </Grid>
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