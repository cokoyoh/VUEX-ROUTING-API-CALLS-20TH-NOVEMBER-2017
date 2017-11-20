import Vue from 'vue'
import Vuex from 'vuex'

import newsSourcesStore from '../global/newsSourcesStore';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
    modules: {
    //    Stores go here
        newsSourcesStore
    },
    strict: debug
})