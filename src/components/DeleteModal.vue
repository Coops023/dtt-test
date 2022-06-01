<template>
<div class="modal-bg">
    <div class="modal-wrap">
     <h3>Delete Listing</h3>
     <p>Are you sure you want to delete this listing? This action cannot be undone.</p>
    <button @click="deleteHouse(houseId)">Yes, Delete</button>
    <button>Go Back</button>
    </div>
</div>
</template>

<script>
import {mapActions} from "vuex"
export default {
 name: "DeleteModal",
 props: ["houseId"],
 data(){
     return {
         
     }
 },
 methods: {
     ...mapActions(["deleteHouse"])
 }

}

</script>

<style scoped>
.modal-wrap{
position: fixed;
background-color: white;
border: 1px solid black;
border-radius: 0.5em;
z-index: 999;  
}

.modal-bg{
    position: fixed;
    background-color: red;
    height: 100vh;
    width: 100vw;
    z-index: 998;
    display: flex;
    align-items: center;
}


</style>