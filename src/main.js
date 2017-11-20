import Vue from 'vue'
import router from './router'
import VueResource from 'vue-resource'
import App from './App.vue'
import store from './global/store'

Vue.use(VueResource);
Vue.use(store);
new Vue({
    el: '#app',
    render: h => h(App),
    router,
    store
});
