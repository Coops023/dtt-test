import api from "../../api/houses";

const state = {
  houses: [],
};

const getters = {
  allHouses: (state) => state.houses,
};

const actions = {
  async fetchHouses({ commit }) {
    console.log("run line 13 houses.js");
    const response = await api.fetchHouses();
    commit("setHouses", response.data);
    console.log(response.data);
  },
  async createNewHouse(_, formData) {
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
