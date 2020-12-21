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
import MenuIcon from '@material-ui/icons/Menu';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import PersonIcon from '@material-ui/icons/PermIdentity';
import WorkOutlineIcon from '@material-ui/icons/WorkOutline';
import AccountCircle from '@material-ui/icons/AccountCircle';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import CssBaseline from '@material-ui/core/CssBaseline';
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
import routes from "../configs/routes";
import ErrorIndicator from "../error-indicator";
import {logoutAction} from "../auth/redux/authActions";

const drawerWidth = 240;

const styles = (theme) => ({
    root: {
        // flexGrow: 1,
        display: "flex"
    },
    grow: {
        // flexGrow: 1,
    },
    menuButton: {
        marginLeft: 12,
        marginRight: 36,
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
    },
    navBar: {
        display: "flex",
        width: "100%",
        justifyContent: "space-between",
        alignItems: "center"
    }
});

const Home = ({ classes, theme }) => {

    const [ anchorEl, setAnchorEl ] = useState(null);
    const [ openDrawer, setOpenDrawer ] = useState(false);
    const [ openUserMenu, setOpenUserMenu ] = useState(false);
    const authError = useSelector(({ errorIndicatorState }) => errorIndicatorState.error);

    const user = useSelector(({ authState }) => authState.user);
    const dispatch = useDispatch();

    const naviItems = [
        {
            desc: "Home",
            icon: <HomeOutlinedIcon />,
            path: "/"
        },
        {
            desc: "Profile",
            icon: <PersonIcon />,
            path: "/profile"
        },
        {
            desc: "Works",
            icon: <WorkOutlineIcon />,
            path: "/works"
        }
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

    if (!user) {
        return <Redirect to="/auth/login" />
    }

    if (authError) {
        return <ErrorIndicator />
    }

    return (
        <div className={classes.root}>
            <CssBaseline />
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
                    {naviItems.map((nav, index) => (
                        <Link to={nav.path} key={index}>
                            <ListItem button>
                                <ListItemIcon>{nav.icon}</ListItemIcon>
                                <ListItemText primary={nav.desc} />
                            </ListItem>
                        </Link>
                    ))}
                </List>
                {/*<Divider />*/}
                {/*<List>*/}
                {/*    {['All mail', 'Trash', 'Spam'].map((text, index) => (*/}
                {/*        <ListItem button key={text}>*/}
                {/*            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>*/}
                {/*            <ListItemText primary={text} />*/}
                {/*        </ListItem>*/}
                {/*    ))}*/}
                {/*</List>*/}
            </Drawer>
            <AppBar position="static">
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
                            Home
                        </Typography>
                    </div>

                    <div>
                        <span className={`mr-10 font-bold`}>{user.userName}</span>
                        <IconButton
                            className={`${classes.userMenu} focus:outline-none sm:mr-40`}
                            aria-owns={openUserMenu ? 'menu-appbar' : undefined}
                            aria-haspopup="true"
                            onClick={handleMenu}
                            color="inherit"
                        >
                            <AccountCircle />
                        </IconButton>
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
                            <div className={`text-blue-600`}>Settings</div>
                        </MenuItem>
                        <MenuItem onClick={() => dispatch(logoutAction())}>
                            <ExitToAppOutlinedIcon fontSize="small" color="action" className={`mr-10`} />
                            Logout
                        </MenuItem>
                    </Menu>
                </Toolbar>
            </AppBar>
        </div>
    );
}

Home.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(Home);

