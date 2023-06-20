import Home from '../components/views/Home'
import Cart from '../components/views/Cart'
import Body from '../components/layout/Body.vue'

const routes = [
  {
    path: '/',
    component: Body,
    children: [
      {
        path: '',
        name: 'Home',
        component: Home,
        props: true,
      },
      {
        path: '/cart',
        name: 'Cart',
        component: Cart,
      },
    ],
  },
]

export default routes
