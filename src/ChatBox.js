import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Widget } from 'react-chat-widget';
import 'react-chat-widget/lib/styles.css';

function ChatBot() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <Widget 
        />
    </div>
  );
}

export default ChatBot;

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
