import Vue from 'vue'
import Vuex from 'vuex'
import menu from './modules/menu'

if (process.env.NODE_ENV === 'development') {
    Vue.use(vux)
}

const store = new Vuex.Store({
    modules: {
        menu
    }
})

export default store