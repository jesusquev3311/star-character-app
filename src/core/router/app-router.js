import { Router } from '@vaadin/router';

import '../../pages/home/sw-page-home.js';
import '../../pages/characters/sw-page-characters.js';
import '../../pages/character-detail/sw-character-detail.js';

export const initRouter = outlet => {
  const router = new Router(outlet);

  router.setRoutes([
    { path: '/', component: 'sw-page-characters' },
    { path: '/characters', component: 'sw-page-characters' },
    { path: '/characters/:id', component: 'sw-character-detail' },
    { path: '(.*)', component: 'sw-page-not-found' },
  ]);

  return router;
};
