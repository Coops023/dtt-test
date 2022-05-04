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
  },
  createNewHouse(_, formData) {
    api.createNewHouse(formData);
  },
  async searchHouses({ commit }, query) {
    const searchQuery = query.searchQuery;

    if (searchQuery) {
      let searchHouses = state.houses;
      let result = [...searchHouses].filter((house) =>
        house.location.city.toLowerCase().includes(searchQuery.toLowerCase())
      );
      commit("setHouses", result);
    } else {
      return state.houses;
    }
  },
  //sorting function
  sortHouses({ commit }, option) {
    const sortingOption = option.sortingOptionValue;
    const housesArray = state.houses;

    if (sortingOption === "high") {
      let highArr = [...housesArray].sort((a, b) => {
        return b.price - a.price;
      });
      commit("setHouses", highArr);
    } else if (sortingOption === "low") {
      let lowArr = [...housesArray].sort((a, b) => {
        return a.price - b.price;
      });
      commit("setHouses", lowArr);
    }
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
