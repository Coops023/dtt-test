<template>
 <div class="App">
    <navigation-header/>
    <router-view/>
 </div>
</template>

<script>
import NavigationHeader from "@/components/NavigationHeader.vue"

export default {
  name: 'App',
  components: {
    NavigationHeader
  
  }
}
</script>

<style scoped>
.App{
  margin: 0;
  background-color: #f6f6f6;
  padding-bottom: 5em;
}


</style>




