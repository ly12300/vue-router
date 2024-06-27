const user = {
  namespaced: true, // 启用命名空间
  state: {
    userInfo: {},
    number: 0,
    username: "admin",
  },
  mutations: {
    setUserInfo(state, userInfo) {
      state.userInfo = userInfo;
    },
    setNum(state, number) {
      state.number = number;
    },
  },
  actions: {
    setUserInfo({ commit }, userInfo) {
      commit("setUserInfo", userInfo);
    },
    setNum({ commit }, number) {
      commit("setNum", number);
    },
  },
};

export default user;
