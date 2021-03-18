import authRoles from '../auth/authRoles';
import Admin from './Admin';
import Analytics from './components/analytics';
import TestBufferChannel from './components/test-buffer-channel';
import Users from './components/users';

const admin_path = '/admin';

const AdminConfig = {
    role: authRoles.admin,
    path: admin_path,
    exact: false,
    component: Admin,
    routes: [
        {
            role: authRoles.admin,
            path: '/admin/analytics',
            exact: false,
            component: Analytics
        },
        {
            role: authRoles.admin,
            path: '/admin/test-buffer-channel',
            exact: false,
            component: TestBufferChannel
        },
        {
            role: authRoles.admin,
            path: '/admin/users',
            exact: false,
            component: Users
        }
    ]
};

export default AdminConfig;
