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
    const [submitReady, isSubmitReady] = React.useState(false);

    const handleNameField = (e) => {
        setNameField(e.target.value);
        checkSubmitReady();
    };
    const handleNetIDField = (e) => {
        setNetIDField(e.target.value);
        checkSubmitReady();
    };
    const handleRuIDField = (e) => {
        setRuIDField(e.target.value);
        checkSubmitReady();
    };
    const handleCreditCardField = (e) => {
        setCreditCardField(e.target.value);
        checkSubmitReady();
    };

    const checkSubmitReady = () => {
        if (nameField != "" && netIDField != "" && ruIDField != "" && creditCardField != "") {
            isSubmitReady(true);
        }
    };

    React.useEffect(() => {
        setTimeout(function () { setNameField('Louis Shinohara') }, 1000);
        setTimeout(function () { setNetIDField('uls532') }, 2000);
        setTimeout(function () { setRuIDField('189430257') }, 3000);
        setTimeout(function () { setCreditCardField('4532-4325-3423-2432') }, 4000);
        setTimeout(function () { isSubmitReady(true)}, 4000);
        checkSubmitReady();
        
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
                    <Button className={classes.submitButton}  disabled={!submitReady} variant="contained">Submit</Button>
                </Grid>
            </Grid>
        </Paper>
    );
}

export default FormContent;


const useStyles = makeStyles((theme) => ({
    root: {
        margin: 'auto',
        padding: 8,
        backgroundColor: '#2c2e31',
        borderRadius: 8,
        marginTop: 20
    },
    submitButton: {
        margin: 8,
        backgroundColor: '#3f51b5'
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
        color: '#3f51b5'
    }
}));
