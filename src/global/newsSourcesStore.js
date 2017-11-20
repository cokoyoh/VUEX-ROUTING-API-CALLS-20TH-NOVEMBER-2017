import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const state = {
    sources: {},
};

const mutations = {
    SET_SOURCES_LIST(state, sources){
        state.sources = sources
    },
};

const actions = {
    setSourcesList: ({commit}, sources) => {
        return Vue.http.get('https://newsapi.org/v1/sources?language=en')
            .then(response => {
                console.log('sources', response.data.sources);
                commit('SET_SOURCES_LIST', response.data.sources);
                return response.data.sources;
            })
    },
};

export default {
    state, mutations, actions
}