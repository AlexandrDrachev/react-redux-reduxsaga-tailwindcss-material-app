import React, { useState, useEffect } from "react";

import { Redirect, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Spinner from "../spinner";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import HomeIcon from '@material-ui/icons/Home';
import IconButton from '@material-ui/core/IconButton';
import { adminGetUsersAction, adminTestActionChannelAction } from "./redux/adminActions";
import { onToggleLanguageAction } from "../app/redux/appActions";
import { logoutAction } from "../auth/redux/authActions";
import { eng } from "./translate/eng";
import { rus } from "./translate/rus";
import { ukr } from "./translate/ukr";
import { translator } from "../../translator/translator";

const Admin = () => {

    const user = useSelector(({ authState }) => authState.user);
    const adminState = useSelector(({ adminState }) => adminState);
    const { loading, loaded, users, testBufferCounter } = adminState;
    const dispatch = useDispatch();
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
        if (!users) {
            dispatch(adminGetUsersAction());
        }
    }, []);

    const renderLanguageIcons = () => {
        return translator.map((t, idx) => {
            return (
                <IconButton
                    className={`focus:outline-none mr-10`}
                    onClick={() => dispatch(onToggleLanguageAction(t.desc))}
                    key={idx}>
                    <div className={`w-20 h-20 flex flex-col justify-center items-center`}>
                        <img className={`w-full`} alt="" src={t.flag} />
                    </div>
                </IconButton>
            );
        });
    };

    // if (!users) {
    //     return <Spinner />
    // }

    if (!user) {
        return <Redirect to="/auth/login" />
    }

    return (
        <div className={`w-full flex flex-col justify-center items-center mt-40`}>
            <div className={`w-full flex justify-end items-center mr-20`}>
                {renderLanguageIcons()}
                <Link to="/">
                    <IconButton
                        className={`focus:outline-none mr-10`}>
                        <HomeIcon />
                    </IconButton>
                </Link>
                <IconButton
                    onClick={() => dispatch(logoutAction())}
                    className={`focus:outline-none`}>
                    <ExitToAppIcon color="action"/>
                </IconButton>
            </div>
            <div className={`text-white font-bold`}>
                {l.adminDashboard}
            </div>
            <div className={`flex mt-40 sm:flex-col sm:justify-center sm:items-center`}>
                <div className={`w-100 h-50 flex flex-col justify-center items-center bg-white rounded m-15 relative`}>
                    {testBufferCounter}
                    <div className={`absolute -top-15 text-xs text-white font-bold whitespace-nowrap`}>
                        {l.testBufferChannel}
                    </div>
                </div>
                <div
                    className={`p-15 w-300 h-50 cursor-pointer rounded m-15 relative`}>
                    <div
                        onClick={() => dispatch(adminTestActionChannelAction())}
                        className={`z-20 absolute w-full top-0 right-o bottom-0 left-0`}/>
                    <div className={`
                    z-10 absolute w-full top-0 right-o bottom-0 left-0 bg-white rounded flex flex-col justify-center 
                    items-center
                    `}>
                        {l.pressSeveralTimesQuickly}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Admin;