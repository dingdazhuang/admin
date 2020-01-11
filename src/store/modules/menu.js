const types = {
    HANDLE_LEFT_MENU: 'HANDLE_LEFT_MENU',
    INIT_LEFT_MENU: 'INIT_LEFT_MENU',
    SET_LEFT_COLLAPSE: 'SET_LEFT_COLLAPSE',
    SET_FOOTER_SHOW: 'SET_FOOTER_SHOW'
}

const menu = {
    state: {
        minLeftMenuWidth: 35,
        maxLeftMenuWidth: 180,
        sideBar: {
            width: 180,
            opened: true,
        },
        isCollapse: false,
        isFooter: false
    },
    getters: {
        sideBar: state => state.sideBar,
        isCollapse: state => state.isCollapse,
        isFooter: state => state.isFooter
    },
    mutations: {
        [types.INIT_LEFT_MENU](state) {
            state.sideBar = state.sideBar
        },
        [types.HANDLE_LEFT_MENU] (state) {
            if (state.sideBar.opened) {
                state.sideBar.width = state.sideBar.minLeftMenuWidth
            } else {
                state.sideBar.width = state.sideBar.maxLeftMenuWidth
            }
            state.sideBar.opened = !state.sideBar.opened
        },
        [types.SET_LEFT_COLLAPSE] (state) {
            state.isCollapse = !state.isCollapse
        },
        [types.SET_FOOTER_SHOW] (state) {
            state.isFooter = !state.isFooter
        }
    },
    actions: {
        handleLeftMenu({commit}) {
            commit(types.HANDLE_LEFT_MENU)
        },
        initLeftMenu({commit}) {
            commit(types.INIT_LEFT_MENU)
        },
        setLeftCollapse({commit}) {
            commit(types.SET_LEFT_COLLAPSE)
        }
    }
}


export default menu;