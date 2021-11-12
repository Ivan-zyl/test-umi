export default [
  {
    exact: true,
    path: '/',
    redirect: './test2',
  },
  {
    name: 'test1',
    path: '/test1',
    routes: [
      {
        path: '/test1/page1',
        name: 'page1',
        component: './page1',
      },
    ],
  },
  {
    path: '/test2',
    name: 'test2',
    component: './test2',
  },
];
