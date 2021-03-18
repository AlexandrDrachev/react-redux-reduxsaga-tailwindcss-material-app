import authRoles from '../auth/authRoles';
import NoMatch from './NoMatch';

const NoMatchConfig = {
    role: authRoles.user,
    exact: false,
    path: '*',
    component: NoMatch,
};

export default NoMatchConfig;
