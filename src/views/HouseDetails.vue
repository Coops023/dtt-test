<template>
    <div>
        {{selectedHouse.id}}
    </div>
</template>

<script>
 import {mapGetters} from "vuex"
export default {
   
    computed: {
        ...mapGetters(["selectedHouse"])
    }
}
</script>

<style scoped>

</style>