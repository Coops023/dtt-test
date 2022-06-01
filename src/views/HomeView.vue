<template>
  <div class="home">
    
      <h1>Houses</h1>
     <router-link class="add-btn" to="/create-house" ><img src="/images/create.png" alt=""></router-link>
  
    <div class="search-bar-wrap">
      <img class="search-icon" src="/images/search-icon.png" alt="search-icon">
    <input class="search-bar" type="text" name="search" id="search" placeholder="Search for a house" v-model="searchQuery"  autocomplete="off">
    </div>
    <div class="price-size-btn-wrap">
      <button class="price-btn" @click="setSortPrice">Price</button>
      <button class="size-btn">Size</button>
    </div>

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
      return housesArray.sort((a, b) => {
        return b.price - a.price;
      });
      
    } else if (sortingOption === "low") {
      return housesArray.sort((a, b) => {
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
    setSortPrice(){
      if(!this.sortingOptionValue || this.sortingOptionValue === "low"){
          this.sortingOptionValue = "high"
          console.log("high block", this.sortingOptionValue)
      } else if(this.sortingOptionValue === "high"){
          this.sortingOptionValue = "low"
          console.log("low block",this.sortingOptionValue)
      }
    },
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
  height: min-content;
  font-family: "montserrat";
  max-width: 100vw;
  padding-top: 1em;
}

h1{
 text-align: center;
 margin: 0;
 font-size: 24px;
}

.add-btn{
  position: absolute;
  right: 1.5em;
  top: 1.5em;
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
  margin-top: 1.8em;
  margin-bottom: 1.3em;
}
.search-bar[type="text"]::placeholder{
  padding: 1em;
}
.search-bar[type="text"]{
  padding-left: 2em;
}

.search-icon{
  position: absolute;
  left: 1.8em;
  top: 5.1em;
  height: 1.5em;
  width: 0.8em;
  height: 0.8em;
}

.price-size-btn-wrap{
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
}

.price-btn, .size-btn{
  border: none;
  width: 44.5%;
  height: 3em;
  color: white;
  background-color: #c3c3c3;
  font-size: 14px;
}

.price-btn:focus, .size-btn:focus{
    background-color: #EB5440;
}

.price-btn{
  border-radius: 0.7em 0 0 0.7em;
}
.size-btn{
  border-radius: 0 0.7em 0.7em 0;
}

</style>