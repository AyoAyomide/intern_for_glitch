import { createStore } from 'vuex'
import { apiCall } from '@/common/api'
// vuex store basic setup
const state = () => {
  const stateObject = {}
  return stateObject;
}

const mutations = {

}

const actions = {

}

const getters = {

}

if (module.hot) {
  module.hot.accept([actions, mutations], () => {
    store.hotUpdate({
      actions,
      mutations,
    })
  })
}

export function _createStore() {
  return createStore({
    state,
    mutations,
    actions,
    getters,
  })
}
