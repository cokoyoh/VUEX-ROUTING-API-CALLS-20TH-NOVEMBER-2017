import Vue from 'vue';

//import components here
import Home from '../components/home.vue';
import ContactUs from '../components/contact-us.vue';

import VueRouter from 'vue-router';

Vue.use(VueRouter);
const router = new VueRouter({
    routes: [
        {
            path: '/',
            component: Home,
            name: 'home'
        },
        {
            path: '/contact-us',
            component: ContactUs,
            name: 'contact-us',
        }
    ],
    mode: 'history',
});
export default router