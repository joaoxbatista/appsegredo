
const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', name: 'Página Inicial', component: () => import('pages/Index.vue')},
      { path: 'experimentos', name: 'Experimentos', component: () => import('pages/Experimentos.vue') },
      { path: 'experimentos/detalhe', name: 'Detalhes Experimento', component: () => import('pages/ExperimentoDetalhe.vue') },
      { path: 'lisimetros', name: 'Lisimetros', component: () => import('pages/Lisimetros.vue') },
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
