import api from "../../api/houses";

const state = {
  houses: [],
  searchedHouses: [],
};

const getters = {
  allHouses: (state) => state.houses,
  allSearchedHouses: (state) => state.searchedHouses,
};

const actions = {
  async fetchHouses({ commit }) {
    console.log("run line 13 houses.js");
    const response = await api.fetchHouses();
    commit("setHouses", response.data);
    console.log(response.data);
  },
  createNewHouse(_, formData) {
    api.createNewHouse(formData);
  },
  async searchHouses({ commit }, query) {
    const searchQuery = query.searchQuery;

    if (searchQuery) {
      let searchHouses = state.houses.filter((house) =>
        house.location.city.toLowerCase().includes(searchQuery.toLowerCase())
      );
      await commit("setSearchedHouses", searchHouses);
    } else {
      return state.houses;
    }
  },
};

const mutations = {
  setHouses: (state, houses) => {
    state.houses = houses;
  },
  setSearchedHouses: (state, searchedHouses) => {
    state.searchedHouses = searchedHouses;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
