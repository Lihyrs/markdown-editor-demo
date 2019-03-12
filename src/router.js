import VueRouter from 'vue-router';
import Vue from 'vue';
import mainView from './components/mainView.vue';
import err404 from './components/err404.vue';
import mdSyntax from './components/mdSyntax.vue';

Vue.use(VueRouter);


const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    linkActiveClass: 'active',
    routes: [
        { name: 'index', path: '/', component: mainView },
        { path: '/index', redirect: { name: 'index' } },
        { name: '404', path: '*', component: err404 },
        { name: 'mdSyntax', path: '/mdsyn', component: mdSyntax },
    ],
});

export default router;
