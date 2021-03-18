import authRoles from '../auth/authRoles';

import CustomCollection from './CustomCollection';

const CustomCollectionConfig = {
  role: authRoles.admin,
  exact: false,
  path: '/collection',
  component: CustomCollection,
};

export default CustomCollectionConfig;
