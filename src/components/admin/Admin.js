import React, { useState, useEffect } from "react";

import { Redirect, Link, Switch, Route } from "react-router-dom";
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
import AdminConfig from "./AdminConfig";
import AssignmentIndOutlinedIcon from "@material-ui/icons/AssignmentIndOutlined";

const Admin = () => {

    const user = useSelector(({ authState }) => authState.user);
    const adminState = useSelector(({ adminState }) => adminState);
    const { loading, loaded, usersEntity, testBufferCounter } = adminState;
    const dispatch = useDispatch();
    const language = useSelector(({ appState }) => appState.language);
    const [ l, setL ] = useState({});
    const [ routes, setRoutes ] = useState(null);

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
        if (Object.keys(l).length)  {
            setRoutes([
            {
                title: l.testBufferChannelButton,
                background: "bg-blue-300",
                hover: "hover:bg-blue-400",
                path: "/admin/test-buffer-channel"
            },
            {
                title: l.usersButton,
                background: "bg-green-400",
                hover: "hover:bg-green-500",
                path: "/admin/users"
            },
            {
                title: l.analyticsButton,
                background: "bg-red-400",
                hover: "hover:bg-red-500",
                path: "/admin/analytics"
            }
        ])}
    }, [l]);

    useEffect(() => {
        if (!usersEntity) {
            dispatch(adminGetUsersAction());
        }
    }, []);

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

    const renderRoutes = () => {
        return routes.map((route, idx) => {
            return (
                <Link key={idx} to={route.path} className={`p-10 shadow-lg rounded-full my-20 mx-5`}>
                    <div
                         className={`
                     w-100 h-100 rounded-full cursor-pointer ${route.background} flex flex-col justify-center 
                     items-center font-bold text-xs ${route.hover}
                     transition transform duration-100 ease-in-out hover:scale-125
                `}>
                        <div>{route.title}</div>
                    </div>
                </Link>
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
        <div className={`w-full flex flex-col justify-center items-center p-20`}>
            <div className={`w-full flex justify-between items-center`}>
                <div className={`flex justify-center items-center text-white font-bold whitespace-nowrap ml-10`}>
                    <AssignmentIndOutlinedIcon fontSize="small" className={`mr-10`} />
                    {l.adminDashboard}
                </div>
                <div className={`w-full flex justify-end items-center mr-20`}>
                    {renderLanguageIcons()}
                    <Link to="/">
                        <IconButton
                            className={`focus:outline-none mr-10 shadow-lg`}>
                            <HomeIcon className={`text-white`}/>
                        </IconButton>
                    </Link>
                    <IconButton
                        onClick={() => dispatch(logoutAction())}
                        className={`focus:outline-none shadow-lg`}>
                        <ExitToAppIcon className={`text-white`}/>
                    </IconButton>
                </div>
            </div>
            <div className={`w-full flex justify-center items-center shadow-lg`}>
                {routes && renderRoutes()}
            </div>
            <Switch>
                {AdminConfig.routes.map((route, idx) => {
                    return <Route key={idx} role={route.role} path={route.path} exact={route.exact} component={route.component} />
                })}
            </Switch>
        </div>
    );
};

export default Admin;