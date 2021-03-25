import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Widget, addResponseMessage } from 'react-chat-widget';
import 'react-chat-widget/lib/styles.css';
import profilePic from './assets/me.jpeg';
import { Paper, Grid, TextField, Button } from '@material-ui/core';

// https://getstream.io/chat/sdk/react/

function FormContent() {
    const classes = useStyles();
    const [nameField, setNameField] = React.useState("");
    const [netIDField, setNetIDField] = React.useState("");
    const [ruIDField, setRuIDField] = React.useState("");
    const [creditCardField, setCreditCardField] = React.useState("");

    const handleNameField = (e) => {
        setNameField(e.target.value);
    };
    const handleNetIDField = (e) => {
        setNetIDField(e.target.value);
    };
    const handleRuIDField = (e) => {
        setRuIDField(e.target.value);
    };
    const handleCreditCardField = (e) => {
        setCreditCardField(e.target.value);
    };

    React.useEffect(() => {
        setTimeout(function () { setNameField('Louis Shinohara') }, 1000);
        setTimeout(function () { setNetIDField('uls532') }, 2000);
        setTimeout(function () { setRuIDField('189430257') }, 3000);
        setTimeout(function () { setCreditCardField('4532-4325-3423-2432') }, 4000);

    }, [])

    return (
        <Paper className={classes.root}>
            <Grid container direction='column' >
                <Grid item >
                    <TextField InputProps={{ className: classes.multilineColor }}
                        className={classes.textField}
                        color={'#cc0033'}
                        required id="standard-required" type="password" fullWidth="true" label="Name" defaultValue="" value={nameField} onChange={handleNameField} />
                </Grid>
                <Grid item >
                    <TextField InputProps={{ className: classes.multilineColor }}
                        className={classes.textField}
                        required id="standard-required" type="password" fullWidth="true" label="NetID" defaultValue="" value={netIDField} onChange={handleNetIDField} />
                </Grid>
                <Grid item >

                    <TextField InputProps={{ className: classes.multilineColor }}
                        className={classes.textField}
                        required id="standard-required" type="password" fullWidth="true" label="RUID" defaultValue="" value={ruIDField} onChange={handleRuIDField} />
                </Grid>
                <Grid item >
                    <TextField InputProps={{ className: classes.multilineColor }}
                        className={classes.textField}
                        required id="standard-required" type="password" fullWidth="true" label="Credit Card Information" defaultValue="" value={creditCardField} onChange={handleCreditCardField} />
                </Grid>
            </Grid>
            <Grid container direction='row' justify='flex-end'>
                <Grid item >
                    <Button className={classes.submitButton} variant="contained">Submit</Button>
                </Grid>
            </Grid>
        </Paper>
    );
}

export default FormContent;


const useStyles = makeStyles((theme) => ({
    root: {
        width: '45%',
        margin: 16,
        paddingLeft: 8,
        backgroundColor: '#252526'
    },
    submitButton: {
        margin: 8,
        backgroundColor: '#818181'
    },
    textField: {
        margin: 16,
        color: '#adadad',
        width: '80%',
    },
    title: {
        flexGrow: 1,
    },
    multilineColor: {
        color: '#adadad'
    }
}));
