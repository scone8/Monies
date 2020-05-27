
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Budget.vue'), props: {title: 'Budget 1'}},
      { path: 'Budget2', component: () => import('pages/Budget2.vue'), props: {title: 'Budget 2'}},
      { path: 'Budget3', component: () => import('pages/Budget3.vue'), props: {title: 'Budget 3'}}
    
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
