/* eslint-disable no-param-reassign */
import Vuex from 'vuex';
import Vue from 'vue';
import { MARKDOWN_2_HTML } from '../common/constants';

import mdRender from '../utils/mdRender';

Vue.use(Vuex);


const store = new Vuex.Store({
    state: {
        raw: '',
        render: '',
    },
    getters: {
        getRaw(state) {
            const raw = { state };
            return raw;
        },
        getRender(state) {
            const render = { state };
            return render;
        },
    },
    mutations: {
        [MARKDOWN_2_HTML](state, payload = {}) {
            const { raw, render } = payload;
            state.raw = raw;
            state.render = render;
        },
    },
    actions: {
        [MARKDOWN_2_HTML](context, payload = {}) {
            const { commit } = context;
            const { raw } = payload;
            commit('MARKDOWN_2_HTML', { raw, render: mdRender(raw) });
        },
    },
});

export default store;
