import { Experience, Skill, Certificate, Login, ProfileId } from '../pages';

const routes = [
  {
    path: '/profile/:profileId',
    component: ProfileId,
    isPublic: false,
  },
  {
    path: '/skill',
    component: Skill,
    isPublic: false,
  },
  {
    path: '/certificate',
    component: Certificate,
    isPublic: true,
  },
  {
    path: '/experience',
    component: Experience,
    isPublic: true,
  },
  {
    path: '/login',
    component: Login,
    isPublic: true,
  },
  {
    path: '/',
    component: Experience,
    isPublic: true,
  },
];

export default routes;
