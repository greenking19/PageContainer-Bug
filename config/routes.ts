export default [
  {
    path: '/user',
    layout: false,
    routes: [
      {
        path: '/user',
        routes: [
          {
            name: 'login',
            path: '/user/login',
            component: './user/Login',
          },
        ],
      },
      {
        component: './404',
      },
    ],
  },
  {
    path: '/home',
    name: 'home',
    icon: 'smile',
    component: './Home',
  },
  {
    path: '/show-bug/:text',
    name: 'show-bug',
    icon: 'smile',
    hideInMenu: true,
    // exact: true,
    component: './Bug',
  },
  {
    path: '/',
    redirect: '/home',
  },
  {
    component: './404',
  },
];
