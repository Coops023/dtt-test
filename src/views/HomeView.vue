<template>
  <div class="home">
    <router-link to="/create-house" >create</router-link>
    <form @submit.prevent="clearSearch" ref="searchForm">
    <label for="search">Search</label>
    <input type="text" name="search" id="search" placeholder="Search for city" v-model="searchQuery"  autocomplete="off" @input="searchHouses($data)">
    </form>

    <select name="sortBy" id="select" v-model="sortBy" @change="sortHouses($data)">
      <option value="high">Price high to low</option>
      <option value="low">price low to high</option>
    </select>
   
    <div v-if="!searchQuery">
      <div v-for="house in allHouses" :key="house.id">
          {{house.location.city}}
      </div>
    </div>
      <div v-else-if="allSearchedHouses.length < 1">
        <p>No search results go back!</p>
    </div>
    <div v-else-if="searchQuery">
      <div v-for="house in allSearchedHouses" :key="house.id">
          {{house.location.city}}
      </div>
    </div>
  

  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'

export default {
  name: 'HomeView',
  components: {

  }, 
  data(){
    return {
      searchQuery: null,
      sortBy: null
    }
  },
  computed: {
    ...mapGetters(['allHouses', 'allSortedHouses', "allSearchedHouses"]),

      // sortHouses(){
      //     if(this.sortBy === 'high'){
      //     return [...this.allHouses].sort((a, b) => {
      //       return b.price - a.price
      //     })
      //     } else if(this.sortBy === 'low'){
      //       return [...this.allHouses].sort((a, b) => {
      //       return a.price - b.price
      //     })
      //     }else {
      //       return false
      //     }
         
      //   }
        
  },
    methods: {
    ...mapActions(['fetchHouses', 'searchHouses', "sortHouses"]),
    clearSearch(){
    this.$refs.searchForm.reset()
    }
  },

  created(){
    this.fetchHouses()
  }
}
</script>
