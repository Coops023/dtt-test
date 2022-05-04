<template>
     <div v-for="house in allHouses" :key="house.id">
          {{house.location.city}}
      </div>

   
</template>

<script>

import {mapActions, mapGetters} from 'vuex'

export default {
    name: "HouseCard",
    props: ["searchQuery", "sortBy"],
    computed: {
 ...mapGetters(['allHouses']),
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