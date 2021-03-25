import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { StreamChat } from 'stream-chat';
import { Chat, Channel, ChannelHeader, MessageInput, MessageList, Thread, Window } from 'stream-chat-react';

import 'stream-chat-react/dist/css/index.css';

// https://www.npmjs.com/package/stream-chat-react

const chatClient = StreamChat.getInstance('dz5f4d5kzrue');
const userToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoid2lzcHktc25vd2ZsYWtlLTIiLCJleHAiOjE2MTY2Njg3MzR9.TA-Kje2ITlB73hyTe1-YzYesywbEEmTBGAXSudf6new';

chatClient.connectUser(
    {
        id: 'wispy-snowflake-2',
        name: 'wispy',
        image: 'https://getstream.io/random_png/?id=wispy-snowflake-2&name=wispy',
    },
    userToken,
);

const channel = chatClient.channel('messaging', 'wispy-snowflake-2', {
    image: 'https://www.drupal.org/files/project-images/react.png',
    name: 'Conversation With Louis',
    members: ['wispy-snowflake-2'],
});



function Messenger() {
    const classes = useStyles();


    return (
        <div className={classes.root}>
            <Chat client={chatClient} theme='messaging dark'>
                <Channel channel={channel}>
                    <Window>
                        <ChannelHeader />
                        <MessageList />
                        <MessageInput />
                    </Window>
                    <Thread />
                </Channel>
            </Chat>
        </div>
    );
}

export default Messenger;

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
