<template>
  <div class="home">
    
      <h1>Houses</h1>
     <router-link class="add-btn" to="/create-house" ><img src="/images/create.png" alt=""></router-link>
    
   
    <div class="search-bar-wrap">
      <img class="search-icon" src="/images/search-icon.png" alt="search-icon">
    <input class="search-bar" type="text" name="search" id="search" placeholder="Search for a house" v-model="searchQuery"  autocomplete="off">
    </div>

    <select name="sortBy" id="select" v-model="sortingOptionValue" >
      <option value="high">Price high to low</option>
      <option value="low">price low to high</option>
    </select>
    <house-card  :sortHouses="sortHouses" :searchHouses="searchHouses"/>
 
   
  
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
import HouseCard from "@/components/HouseCard.vue"
export default {
  name: 'HomeView',
  components: {
    HouseCard
  }, 
  data(){
    return {
      searchQuery: null,
      sortingOptionValue: null
    }
  },
  computed: {
    ...mapGetters(['allHouses']),
    searchHouses() {
    const searchQuery = this.searchQuery;
    let housesArray = this.allHouses

    if (searchQuery) {
      return [...housesArray].filter((house) =>
        house.location.city.toLowerCase().includes(searchQuery.toLowerCase())
      );
      
    } else {
      return false
    }
  },
  //sorting function
  sortHouses() {
   
    const sortingOption = this.sortingOptionValue
    const housesArray = this.allHouses

    if (sortingOption === "high") {
      return [...housesArray].sort((a, b) => {
        return b.price - a.price;
      });
      
    } else if (sortingOption === "low") {
      return [...housesArray].sort((a, b) => {
        return a.price - b.price;
      });
    
    }
    else {
      return false
    }
  },
  },
    methods: {
    ...mapActions(['fetchHouses']),
    clearSearch(){
    this.$refs.searchForm.reset()
    }
  },
  created(){
    this.fetchHouses()
  }
}
</script>

<style scoped>
.home{
  height: 100%;
  font-family: "montserrat";
  width: 100vw;

}

h1{
 text-align: center;
 margin: 0;
}

.add-btn{
  position: absolute;
  right: 12px;
  top: 10px;
}

.add-btn img{
  width: 1.3em;
}

.search-bar-wrap{
  display: flex;
  justify-content: center;
}

.search-bar{
  width: 80%;
  border: none;
  background-color: #e8e8e8;
  border-radius: 0.2em;
  height: 2em;
 
}

.search-icon{
 background-color: #e8e8e8;
 height: 2em;
 border-top-right-radius: 0.3em;
}

</style>