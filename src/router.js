import VueRouter from 'vue-router';
import Vue from 'vue';
import mainView from './components/mainView.vue';
import err404 from './components/err404.vue';

Vue.use(VueRouter);


const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    linkActiveClass: 'active',
    routes: [
        { name: 'index', path: '/', component: mainView },
        { name: '404', path: '*', component: err404 },
    ],
});

export default router;
