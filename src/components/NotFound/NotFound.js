import React from 'react';
import { Container } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';

const NotFound = () => {
    const classes = useStyles();

    return (
        <Container maxWidth="sm">
            <div className={classes.root}>
                <Alert severity="error">Error 404 Page Not Found.</Alert>
            </div>
        </Container>
    );
};
const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
}));

export default NotFound;