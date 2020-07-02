
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Budget.vue'), props: {title: 'Budget 1'}},
      { path: 'Budget2', component: () => import('pages/Budget.vue'), props: {title: 'Budget 2'}},
      { path: 'Budget3', component: () => import('pages/Budget.vue'), props: {title: 'Budget 3'}}
    
    ]
  }/*,
  {
    path: '/account',
    component: () => import ("pages/AccountSettings.vue")
  },
  {
    path: '/signin',
    component: () => import ("pages/SignIn.vue")
  },
  {
    path: '/signup',
    component: () => import ("pages/SignUp.vue")
  }*/
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
