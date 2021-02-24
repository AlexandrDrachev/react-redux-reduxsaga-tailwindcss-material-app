import React, { useEffect, useState } from "react";
import { Redirect, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Spinner from "../spinner";
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Button from "@material-ui/core/Button";
import MenuIcon from '@material-ui/icons/Menu';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import PersonIcon from '@material-ui/icons/PermIdentity';
import WorkOutlineIcon from '@material-ui/icons/WorkOutline';
import AccountCircle from '@material-ui/icons/AccountCircle';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined';
import AssignmentIndOutlinedIcon from '@material-ui/icons/AssignmentIndOutlined';
import CollectionsIcon from '@material-ui/icons/Collections';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Drawer from '@material-ui/core/Drawer';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import routes from "../../configs/routes";
import ErrorIndicator from "../error-indicator";
import { logoutAction } from "../auth/redux/authActions";
import { onToggleLanguageAction } from "../app/redux/appActions";
import { eng } from "./translate/eng";
import { rus } from "./translate/rus";
import { ukr } from "./translate/ukr";
import { translator } from "../../translator/translator";
import {activeAlertIndicatorAction} from "../alert-indicator/redux/alertIndicatorActions";
import { renderLanguageIcons } from "../../translator/example";

const drawerWidth = 240;

const styles = (theme) => ({
    root: {
        flexGrow: 1,
        flexShrink: 1,
        display: "flex",
        fontFamily: 'El Missiri',
    },
    grow: {
        // flexGrow: 1,
    },
    menuButton: {
        marginLeft: 12,
        marginRight: 36,
        fontFamily: 'El Missiri',
    },
    userMenu: {
        marginLeft: -12,
        marginRight: 50,
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
    },
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerClose: {
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9) + 1,
        },
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        marginLeft: theme.spacing(9),
        fontFamily: 'El Missiri',
    },
    navBar: {
        display: "flex",
        flexShrink: 1,
        width: "100%",
        justifyContent: "space-between",
        alignItems: "center",
    },
    elMissiri: {
        fontFamily: 'El Missiri',
    },
    elMissiriBold: {
        fontFamily: 'El Missiri',
        fontWeight: 'bold',
    },
});

const Home = ({ classes, theme }) => {

    const [ anchorEl, setAnchorEl ] = useState(null);
    const [ openDrawer, setOpenDrawer ] = useState(false);
    const [ openUserMenu, setOpenUserMenu ] = useState(false);
    const authError = useSelector(({ errorIndicatorState }) => errorIndicatorState.error);

    const user = useSelector(({ authState }) => authState.user);
    const alertIndicator = useSelector(({ alertIndicatorState }) => alertIndicatorState.alertIndicator);
    const dispatch = useDispatch();
    const language = useSelector(({ appState }) => appState.language);
    const [ l, setL ] = useState({});

    const naviItems = [
        {
            desc: l.homeNaviItemsDesc,
            icon: <HomeOutlinedIcon />,
            path: '/',
        },
        {
            desc: l.profileNaviItemsDesc,
            icon: <PersonIcon />,
            path: '/profile',
        },
        {
            desc: l.worksNaviItemsDesc,
            icon: <WorkOutlineIcon />,
            path: '/works',
        },
        {
            desc: l.collection,
            icon: <CollectionsIcon />,
            path: '/collection',
        },
    ];

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
        setOpenUserMenu(true);
    };

    const handleClose = () => {
        setOpenUserMenu(false);
        setAnchorEl(null);
    };

    const handleDrawerOpen = () => {
        setOpenDrawer(true);
    };

    const handleDrawerClose = () => {
        setOpenDrawer(false);
    };

    const testAlertMessage = "Alert Indicator is work! dfhdhhe dfhdffheheht dfdhethet bcvbcvcv fgererhdfdfb";

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

    if (!user) {
        return <Redirect to="/auth/login" />
    }

    if (authError) {
        return <ErrorIndicator />
    }

    return (
        <div>
            <div className={classes.root}>
                <Drawer
                    variant="permanent"
                    className={classNames(classes.drawer, {
                        [classes.drawerOpen]: openDrawer,
                        [classes.drawerClose]: !openDrawer,
                    })}
                    classes={{
                        paper: classNames({
                            [classes.drawerOpen]: openDrawer,
                            [classes.drawerClose]: !openDrawer,
                        }),
                    }}
                    open={openDrawer}
                >
                    <div className={`${classes.toolbar}`}>
                        <IconButton
                            className={`focus:outline-none`}
                            onClick={handleDrawerClose}>
                            {theme.direction === 'rtl' ? openDrawer && <ChevronRightIcon /> : openDrawer && <ChevronLeftIcon />}
                        </IconButton>
                    </div>
                    <Divider />
                    <List>
                        {
                            naviItems.map((nav, index) => {
                                if (nav.path === '/collection' && user.role !== 'admin') {
                                    return null;
                                }
                                return (
                                    <Link to={nav.path} key={index}>
                                        <ListItem button>
                                          <ListItemIcon>{nav.icon}</ListItemIcon>
                                          {/*<ListItemText*/}
                                          {/*  className={classes.elMissiri}*/}
                                          {/*  primary={nav.desc}*/}
                                          {/*/>*/}
                                          <Typography className={`${classes.elMissiriBold}`}>
                                              {nav.desc}
                                          </Typography>
                                        </ListItem>
                                    </Link>
                                )}
                            )
                        }
                    </List>
                </Drawer>
                <AppBar
                    position="static" className={`w-full flex-shrink`}
                >
                    <Toolbar className={classes.navBar}>
                        <div className={`flex justify-center items-center`}>
                            <IconButton
                                onClick={handleDrawerOpen}
                                className={`focus:outline-none`}
                                color="inherit"
                                aria-label="Menu">
                                <MenuIcon />
                            </IconButton>
                            <Typography variant="h6" color="inherit" className={classes.grow}>
                                {l.home}
                            </Typography>
                        </div>

                        <div className={`flex flex-col justify-center items-center`}>
                            <div className={`flex pr-50`}>
                                {renderLanguageIcons(dispatch)}
                            </div>
                            <div>
                                <span className={`mr-10 font-bold sm:hidden`}>{user.userName}</span>
                                <IconButton
                                    className={`${classes.userMenu} focus:outline-none sm:mr-40`}
                                    aria-owns={openUserMenu ? 'menu-appbar' : undefined}
                                    aria-haspopup="true"
                                    onClick={handleMenu}
                                    color="inherit"
                                >
                                    {user.avatar ?
                                        <div className={`w-30 h-30`}>
                                            <img className={`w-full rounded-full`} src={user.avatar} alt="" />
                                        </div> :
                                        <AccountCircle />}
                                </IconButton>
                            </div>
                        </div>

                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorEl}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={openUserMenu}
                            onClose={handleClose}
                        >
                            <MenuItem onClick={handleClose}>
                                <SettingsOutlinedIcon fontSize="small" color="action" className={`mr-10`} />
                                <div className={``}>
                                    {l.settingsMenuItem}
                                </div>
                            </MenuItem>
                            <MenuItem onClick={() => dispatch(logoutAction())}>
                                <ExitToAppOutlinedIcon fontSize="small" color="action" className={`mr-10`} />
                                {l.logoutMenuItem}
                            </MenuItem>
                            {user.role === "admin" &&
                            <Link to="/admin">
                                <MenuItem>
                                    <AssignmentIndOutlinedIcon fontSize="small" color="action" className={`mr-10`} />
                                    {l.adminPanelMenuItem}
                                </MenuItem>
                            </Link>}
                        </Menu>
                    </Toolbar>
                </AppBar>
            </div>
            <div className={`${classes.content} w-full flex justify-start m-20`}>
                <Button
                    variant="contained"
                    className={`p-10 focus:outline-none color-primary`}
                    disabled={alertIndicator}
                    onClick={() => dispatch(activeAlertIndicatorAction(testAlertMessage))}>
                    {l.testAlertIndicatorButton}
                </Button>
            </div>
        </div>
    );
}

Home.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(Home);

