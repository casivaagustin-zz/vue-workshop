import Vue from 'vue'
import Router from 'vue-router'

import Home from '../views/Home'
import View from '../views/View'

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
            meta: {
                auth: false,
            }
        },
        {
            path: '/view/:owner/:repo',
            name: 'view',
            component: View,
            meta: {
                auth: false,
            }
        }
    ]
});