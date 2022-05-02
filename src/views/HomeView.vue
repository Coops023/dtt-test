<template>
  <div class="home">
    <router-link to="/create-house" >create</router-link>
    <div v-for="house in allHouses" :key="house.id">
      <img width="100" :src="house.image" alt="">

    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import {mapActions, mapGetters} from 'vuex'

export default {
  name: 'HomeView',
  components: {

  }, 
  computed: {
    ...mapGetters(['allHouses'])
  },
    methods: {
    ...mapActions(['fetchHouses'])
  },
  created(){
    this.fetchHouses()
  }

}
</script>
