import React, { useState } from "react";

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import { useHistory, Link } from "react-router-dom";

const NoMatch = () => {

    const history = useHistory();

    return (
        <Dialog
            open={true}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">{"Page not found!"}</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    The page does not exist or you cannot view this content!
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button
                    variant={`contained`}
                    color="primary">
                    <Link to="/auth/login">Login</Link>
                </Button>
                <Button
                    variant={`contained`}
                    onClick={() => history.goBack()}
                    color="primary">
                    Go Back
                </Button>
            </DialogActions>
        </Dialog>
    );
}

export default NoMatch;