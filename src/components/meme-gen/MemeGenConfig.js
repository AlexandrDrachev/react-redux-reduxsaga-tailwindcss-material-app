import authRoles from '../auth/authRoles';
import MemeGen from './MemeGen';

const memeGenPath = '/meme-gen';

const MemeGenConfig = {
  role: authRoles.user,
  path: memeGenPath,
  exact: false,
  component: MemeGen,
};

export default MemeGenConfig;
