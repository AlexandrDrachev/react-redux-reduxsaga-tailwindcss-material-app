import React, { useState } from "react";

import { Link } from "react-router-dom";

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const styles = () => ({
    card: {
        boxShadow: '7px 7px 10px 5px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)'
    },
    button: {
        marginBottom: '20px'
    },
    input: {
        marginBottom: '20px',
        width: '100%',
        maxWidth: '260px'
    },
    span1: {
        fontSize: '10px'
    },
    span2: {
        fontSize: '10px',
        fontWeight: 'bold',
        color: '#3f51b5',
        cursor: 'pointer'
    },
    headTitle: {
        fontSize: '20px',
        fontWeight: 'bold',
        marginBottom: '20px'
    }
});

const Register = (props) => {

    const [ showPass, setShowPass ] = useState(false);
    const { classes } = props;

    return (
        <div className={`relative w-full h-screen overflow-hidden`}>
            <div className={`absolute top-0 right-0 bottom-0 left-0 flex flex-col justify-center items-center`}>
                <Card
                    className={`w-2/3 sm:w-full py-50 flex flex-col justify-center items-center border-2 border-white
                    rounded ${classes.card}`}>
                    <Typography className={classes.headTitle}>
                        CREATE AN ACCOUNT
                    </Typography>
                    <form className={`w-full flex flex-col justify-center items-center`}>

                        <TextField
                            className={`${classes.input} sm:w-full`}
                            id="outlined-adornment-login"
                            variant="outlined"
                            label="Login"
                        />

                        <TextField
                            className={`${classes.input} sm:w-full`}
                            id="outlined-adornment-email"
                            variant="outlined"
                            label="Email"
                        />

                        <TextField
                            className={`${classes.input} sm:w-full`}
                            id="outlined-adornment-password"
                            variant="outlined"
                            type={showPass ? 'text' : 'password'}
                            label="Password"
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton
                                            className={`focus:outline-none`}
                                            onClick={() => setShowPass(!showPass)}
                                            aria-label="Toggle password visibility"
                                        >
                                            {showPass ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                        />

                        <TextField
                            className={`${classes.input} sm:w-full`}
                            id="outlined-adornment-password-confirm"
                            variant="outlined"
                            type={showPass ? 'text' : 'password'}
                            label="Password(Confirm)"
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton
                                            className={`focus:outline-none`}
                                            onClick={() => setShowPass(!showPass)}
                                            aria-label="Toggle password visibility"
                                        >
                                            {showPass ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                        />
                        <CardActions>
                            <Button
                                className={`focus:outline-none ${classes.button}`}
                                size={`large`}
                                color={`primary`}
                                variant={`contained`}>
                                Register
                            </Button>
                        </CardActions>
                    </form>
                    <div className={`w-full flex flex-col justify-center items-center`}>
                        <Typography className={classes.span1}>
                            Already have an account?
                        </Typography>
                        <Typography
                            className={classes.span2}
                            variant="body2"
                            gutterBottom>
                            <Link to="/auth/login">Login</Link>
                        </Typography>
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default withStyles(styles)(Register);