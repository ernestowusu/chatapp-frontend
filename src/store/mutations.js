const mutations = {
  UPDATE_USER_INFO(state, payload) {
    state['userDetails'] = payload
    let userInfo = JSON.parse(localStorage.getItem("userInfo")) || state.AppActiveUser
    for (const property of Object.keys(payload)) {
      if (payload[property] != null) {
        state.AppActiveUser[property] = payload[property]
        userInfo[property] = payload[property]
      }
    }
    localStorage.setItem("userInfo", JSON.stringify(userInfo))
  },
}
export default mutations

