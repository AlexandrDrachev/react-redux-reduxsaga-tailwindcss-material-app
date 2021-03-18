import React, { useState, useEffect } from 'react';

import { useSelector } from 'react-redux';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { eng } from './translate/eng';
import { rus } from './translate/rus';
import { ukr } from './translate/ukr';
// import { translator } from "../../translator/translator";

import { useHistory, Link } from 'react-router-dom';

const NoMatch = () => {

    const history = useHistory();
    const language = useSelector(({ appState }) => appState.language);
    const [ l, setL ] = useState({});

    useEffect(() => {
        if (language === 'eng') {
            setL(eng);
        }
        if (language === 'rus') {
            setL(rus);
        }
        if (language === 'ukr') {
            setL(ukr);
        }
    }, [language]);

    return (
        <Dialog
            open={true}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">
                {l.label}
            </DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    {l.desc}
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button
                    variant={`contained`}
                    color="primary">
                    <Link to="/auth/login">
                        {l.loginLink}
                    </Link>
                </Button>
                <Button
                    variant={`contained`}
                    onClick={() => history.goBack()}
                    color="primary">
                    {l.goBackButton}
                </Button>
            </DialogActions>
        </Dialog>
    );
}

export default NoMatch;
