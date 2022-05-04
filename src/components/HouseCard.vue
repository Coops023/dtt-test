<template>
<div v-if="allHouses || !searchQuery || !sortingOptionValue">
  <div v-for="house in allHouses" :key="house.id">
          {{house.location.city}}
      </div>
</div>
<div v-else-if="sortingOptionValue ">
  <div v-for="house in allHouses" :key="house.id">
          {{house.location.city}}
      </div>
</div>
<div v-else-if="searchQuery">
  <div v-for="house in allHouses" :key="house.id">
          {{house.location.city}}
  </div>
</div>


</template>

<script>

import {mapActions, mapGetters} from 'vuex'

export default {
    name: "HouseCard",
    props: ["searchQuery", "sortingOptionValue"],
    computed: {
    ...mapGetters(['allHouses', "allSortedHouses", "allSearchedHouses"]),
    sortHouses(){
          if(this.sortBy === 'high'){
          return [...this.allHouses].sort((a, b) => {
            return b.price - a.price 
          }
          )
          } else if(this.sortBy === 'low'){
            return [...this.allHouses].sort((a, b) => {
            return a.price - b.price
          })
          }else {
            return false
          }
         
        }
    },
    methods: {
 ...mapActions(['fetchHouses']),
    },
    created(){
    this.fetchHouses()
  }
    
    
}
</script>

<style scoped>

</style>