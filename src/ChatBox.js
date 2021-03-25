import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Widget, addResponseMessage } from 'react-chat-widget';
import 'react-chat-widget/lib/styles.css';
import profilePic from './assets/me.jpeg';

// https://getstream.io/chat/sdk/react/

function ChatBot() {
    const classes = useStyles();
    const [awaitResponse, setAwaitResponse] = React.useState(false);
    const [displayFullScreen, setDisplayFullScreen] = React.useState(false);
    
    useEffect(()=>{
        setDisplayFullScreen(true);
    },[])
    
    useEffect(() => {
        if (awaitResponse === true) {
            addResponseMessage('Test Response');
            setAwaitResponse(false)
        }

    }, [awaitResponse]);

    const handleNewUserMessage = (newMessage) => {
        setAwaitResponse(true);
        console.log(`New message incoming! ${newMessage}`);
        // Now send the message throught the backend API

    };

    return (
        <div className={classes.root}>
            <Widget
                handleNewUserMessage={handleNewUserMessage}
                title={"Chat with Louis"}
                subtitle={"Assistant Bot"}
                profileAvatar={profilePic}
                fullScreenMode={displayFullScreen}
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
