import Vue from 'vue'
import router from './router'
import VueResource from 'vue-resource'
import App from './App.vue'

Vue.use(VueResource);
new Vue({
    el: '#app',
    render: h => h(App),
    router
});
