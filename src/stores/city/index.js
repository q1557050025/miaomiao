const state = {
  name: JSON.parse(window.localStorage.getItem("cityInfoName")) || "北京",
  id: JSON.parse(window.localStorage.getItem("cityInfoId")) || 1
}

const mutations = {
  CITY_INFO(state, payload) {
    state.name = payload.name
    state.id = payload.id
    window.localStorage.setItem("cityInfoName", JSON.stringify(payload.name))
    window.localStorage.setItem("cityInfoId", JSON.stringify(payload.id))
  }
}

const actions = {}

export default {
  namespaced: true,
  state,
  mutations,
  actions 
}