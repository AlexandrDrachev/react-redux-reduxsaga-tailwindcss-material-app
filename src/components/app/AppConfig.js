import authRoles from '../auth/authRoles';

import Home from '../home';

const app_path = '/';

const AppConfig = {
    role: authRoles.user,
    path: app_path,
    exact: true,
    component: Home,
};

export default AppConfig;