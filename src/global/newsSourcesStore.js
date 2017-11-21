import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex);
Vue.use(axios);

const state = {
    sources: {},
    current_source: null,
};

const mutations = {
    SET_SOURCES_LIST(state, sources){
        state.sources = sources
    },

    SET_CURRENT_NEWS_SOURCE(state, source){
        state.current_source = source
    },
};

const actions = {
    setSourcesList: ({commit}, sources) => {
         //api call using axios
         axios.get('https://newsapi.org/v1/sources?language=en')
            .then(response => {
                console.log(response.data)
                commit('SET_SOURCES_LIST', response.data.sources);
                return response.data.sources;
            })
    },

    setCurrentSource: ({commit},source) => {
        commit('SET_CURRENT_NEWS_SOURCE', source)
    },

};

export default {
    state, mutations, actions
}