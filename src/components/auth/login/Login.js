import React, { useState, useEffect } from "react";

import { Link, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

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
import { getAuthAction } from "../redux/authActions";
import { onToggleLanguageAction } from "../../app/redux/appActions";
import ErrorIndicator from "../../error-indicator";
import { eng } from "./translate/eng";
import { rus } from "./translate/rus";
import { ukr } from "./translate/ukr";
import { translator } from "../../../translator/translator";

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

const Login = (props) => {

    const dispatch = useDispatch();
    const userAuth = useSelector(({ authState }) => authState.user);
    const [ showPass, setShowPass ] = useState(false);
    const { classes } = props;
    const [ user, setUser ] = useState({
        login: "",
        password: ""
    });
    const authError = useSelector(({ errorIndicatorState }) => errorIndicatorState);
    const onSubmit = () => {
        dispatch(getAuthAction(user));
    };
    const language = useSelector(({ appState }) => appState.language);
    const [ l, setL ] = useState({});

    useEffect(() => {
        if (language === "eng") {
            setL(eng);
        }
        if (language === "rus") {
            setL(rus);
        }
        if (language === "ukr") {
            setL(ukr);
        }
    }, [language]);

    useEffect(() => {
        console.log("login: ", user.login);
        console.log("pass: ", user.password);
        console.log("authError: ", authError);
    }, [user]);

    const renderLanguageIcons = () => {
        return translator.map((t, idx) => {
            return (
                <IconButton
                    className={`focus:outline-none mr-10 shadow-lg`}
                    onClick={() => dispatch(onToggleLanguageAction(t.desc))}
                    key={idx}>
                    <div className={`w-20 h-20 flex flex-col justify-center items-center`}>
                        <img className={`w-full`} alt="" src={t.flag} />
                    </div>
                </IconButton>
            );
        });
    };

    if (userAuth) {
        return <Redirect to="/" />
    }

    if (authError.error) {
        return <ErrorIndicator />
    }

    return (
        <div className={`relative w-full h-screen overflow-hidden`}>
            <div className={`absolute top-0 right-0 bottom-0 left-0 flex flex-col justify-center items-center`}>
                <Card
                    className={`w-2/3 sm:w-full py-50 flex flex-col justify-center items-center border-2 border-white
                    rounded ${classes.card}`}>
                    <div className={`w-full flex justify-center items-center`}>
                        {renderLanguageIcons()}
                    </div>
                    <Typography className={classes.headTitle}>
                        {l.loginToYourAccount}
                    </Typography>
                    <form className={`w-full flex flex-col justify-center items-center`}>
                        <TextField
                            onChange={(e) => setUser({
                                ...user,
                                login: e.target.value
                            })}
                            required
                            className={`${classes.input} sm:w-full`}
                            id="outlined-adornment-login"
                            variant="outlined"
                            label={l.loginPlaceholder}
                        />

                        <TextField
                            onChange={(e) => setUser({
                                ...user,
                                password: e.target.value
                            })}
                            required
                            className={`${classes.input} sm:w-full`}
                            id="outlined-adornment-password"
                            variant="outlined"
                            type={showPass ? 'text' : 'password'}
                            label={l.passwordPlaceholder}
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
                                onClick={() => onSubmit()}
                                // disabled={login.length <= 3 || pass.length <= 3 }
                                className={`focus:outline-none ${classes.button}`}
                                size={`large`}
                                color={`primary`}
                                variant={`contained`}>
                                {l.loginButton}
                            </Button>
                        </CardActions>
                    </form>
                    <div className={`w-full flex flex-col justify-center items-center`}>
                        <Typography className={classes.span1}>
                            {l.dontHaveAnAccount}
                        </Typography>
                        <Typography
                            className={classes.span2}
                            variant="body2"
                            gutterBottom>
                            <Link to="/auth/register">
                                {l.registrationLink}
                            </Link>
                        </Typography>
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default withStyles(styles)(Login);