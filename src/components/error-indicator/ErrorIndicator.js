import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
// import Slide from '@material-ui/core/Slide';
import { closeErrorIndicatorAction } from './redux/errorIndicatorActions';

// function Transition(props) {
//     return <Slide direction="up" {...props} />;
// }

const ErrorIndicator = () => {

    const [open, setOpen] = useState(true);
    const errorState = useSelector(({ errorIndicatorState }) => errorIndicatorState);
    const dispatch = useDispatch();

    // const handleClickOpen = () => {
    //     setOpen(true);
    // };

    const handleClose = () => {
        setOpen(false);
        dispatch(closeErrorIndicatorAction());
    };
    return (
        <div>
            <Dialog
                open={open}
                // TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle id="alert-dialog-slide-title">
                    {errorState.titleError}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        {errorState.messageError}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Link to="/auth/login">
                        <Button onClick={handleClose} color="primary">
                            Agree
                        </Button>
                    </Link>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default ErrorIndicator;
