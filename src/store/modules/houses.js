import api from "../../api/houses";

const state = {
  houses: [],
};

const getters = {
  allHouses: (state) => state.houses,
};

const actions = {
  async fetchHouses({ commit }) {
    const response = await api.fetchHouses();
    commit("setHouses", response.data);
    console.log(response.data);
  },
  createNewHouse(_, formData) {
    api.createNewHouse(formData);
  },
};

const mutations = {
  setHouses: (state, houses) => {
    state.houses = houses;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
