import api from "../../api/houses";

const state = {
  houses: [],
  selectedHouse: {},
};

const getters = {
  allHouses: (state) => state.houses,
  selectedHouse: (state) => state.selectedHouse,
};

const actions = {
  async fetchHouses({ commit }) {
    const response = await api.fetchHouses();
    commit("setHouses", response.data);
    // console.log(response.data);
  },
  createNewHouse(_, formData) {
    api.createNewHouse(formData);
  },
  deleteHouse({ commit }, house) {
    api.deleteHouse(house);
    commit("REMOVE_HOUSE", house);
  },
  async houseDetail({ commit }, id) {
    const response = await api.fetchHouses();

    response.data.forEach((house) => {
      if (house.id === id) {
        console.log(house);
        commit("setSelectedHouse", house);
      }
    });
  },
};

const mutations = {
  setHouses: (state, houses) => {
    state.houses = houses;
  },
  setSelectedHouse: (state, selectedHouse) => {
    state.selectedHouse = selectedHouse;
  },
  REMOVE_HOUSE(state, id) {
    var houses = state.houses;
    houses.forEach((house) => {
      if (house.id === id) {
        houses.splice(houses.indexOf(house), 1);
      }
    });
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
