<template>
 <delete-modal v-if="modal" :houseId="houseId" />
   <div v-if="!searchHouses && !sortHouses">
      <div v-for="house in allHouses" :key="house.id" >
       
           <div class="edit-delete-wrap" v-if="house.madeByMe">
            <img  class="edit-delete-btn" src="/images/edit.png" alt="edit-button" srcset="">
            <img @click="showModal(house.id)"  class="edit-delete-btn" src="/images/delete.png" alt="delete-button" >
          </div>
      <router-link to="/house-details" @click="houseDetail(house.id)" class="house-card">
        <img  :src="house.image" alt="house-image">
        <div class="house-details">
          <div class="place-price">
          <div class="street-edit-delete">
            <h5>
            {{house.location.street}} 
            </h5>
          </div>
          <p class="price">&euro;{{house.price.toLocaleString()}}</p>
          <div class="zip-city">
            {{house.location.zip}}
            {{house.location.city}}
          </div>
          </div>
          <div>
            <div class="rooms">
             <div class="room-img-wrap">
              <img class="room-img" src="/images/bedroom.png" alt="">
              <div>{{house.rooms.bedrooms}}</div>
              </div>
                 <div class="room-img-wrap">
              <img class="room-img" src="/images/bathroom.png" alt="">
              </div>
              <div>{{house.rooms.bathrooms}}</div>
                 <div class="room-img-wrap">
              <img class="room-img" src="/images/size.png" alt="">
              <div >{{house.size + "m2"}} </div>
              </div>
            </div>
          </div>
          </div>
      </router-link>
      </div>
    </div>
    <div v-else-if="searchHouses">
      <div v-for="house in searchHouses" :key="house.id">
               <router-link to="#" class="house-card">
        <img  :src="house.image" alt="house-image">
        <div class="house-details">
          <div class="place-price">
          <div class="street-edit-delete">
            <h7>
            {{house.location.street}} 
            </h7>
          <div class="edit-delete-wrap" v-if="house.madeByMe">
            <img class="edit-delete-btn" src="/images/edit.png" alt="" srcset="">
            <img class="edit-delete-btn" src="/images/delete.png" alt="" srcset="">
          </div>
          </div>
          <p class="price">&euro;{{house.price.toLocaleString()}}</p>
          <div class="zip-city">
            {{house.location.zip}}
            {{house.location.city}}
          </div>
          </div>
          <div>
            <div class="rooms">
             <div class="room-img-wrap">
              <img class="room-img" src="/images/bedroom.png" alt="">
              <div>{{house.rooms.bedrooms}}</div>
              </div>
                 <div class="room-img-wrap">
              <img class="room-img" src="/images/bathroom.png" alt="">
              </div>
              <div>{{house.rooms.bathrooms}}</div>
                 <div class="room-img-wrap">
              <img class="room-img" src="/images/size.png" alt="">
              <div >{{house.size + "m2"}} </div>
              </div>
            </div>
          </div>
          </div>
      </router-link>
      </div>
    </div>
     <div v-else-if="sortHouses">
      <div v-for="house in sortHouses" :key="house.id">
               <router-link to="#" class="house-card">
        <img  :src="house.image" alt="house-image">
        <div class="house-details">
          <div class="place-price">
          <div class="street-edit-delete">
            <h7>
            {{house.location.street}} 
            </h7>
          <div class="edit-delete-wrap" v-if="house.madeByMe">
            <img class="edit-delete-btn" src="/images/edit.png" alt="" srcset="">
            <img class="edit-delete-btn" src="/images/delete.png" alt="" srcset="">
          </div>
          </div>
          <p class="price">&euro;{{house.price.toLocaleString()}}</p>
          <div class="zip-city">
            {{house.location.zip}}
            {{house.location.city}}
          </div>
          </div>
          <div>
            <div class="rooms">
             <div class="room-img-wrap">
              <img class="room-img" src="/images/bedroom.png" alt="">
              <div>{{house.rooms.bedrooms}}</div>
              </div>
                 <div class="room-img-wrap">
              <img class="room-img" src="/images/bathroom.png" alt="">
              </div>
              <div>{{house.rooms.bathrooms}}</div>
                 <div class="room-img-wrap">
              <img class="room-img" src="/images/size.png" alt="">
              <div >{{house.size + "m2"}} </div>
              </div>
            </div>
          </div>
          </div>
      </router-link>
      </div>
    </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
import DeleteModal from "./DeleteModal.vue"
export default {
    name: "HouseCard",
    props: ["searchHouses", "sortHouses"],
    components: {DeleteModal},
    data(){
      return {
        modal: false,
        houseId : 0
      }
    },
    computed: {
    ...mapGetters(['allHouses']),
   
    },
    methods: {
 ...mapActions(['fetchHouses', 'houseDetail', 'deleteHouse']),
   showModal(id){
     if(!this.modal){
      this.modal = true
     } else{
       this.modal = false
     }
     
     this.houseId = id
   }
    },
    created(){
    this.fetchHouses()
  },

}
</script>

<style scoped>
.house-card{
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #ffffff;
  box-shadow: -1px 1px 5px #c3c3c3;
  border-radius: 0.3em;
  height: 7.5em;
  padding: 0em 0.4em;
  text-decoration: none;
  color: black;
  margin: 1em 1em;
  font-family: "open sans";
  
}

.edit-delete-wrap{
  display: flex;
  margin-right: 0.6em;
  margin-left: 0em;
  height: 1em;
  position: relative;
  right: -10px;
  width: 2em;
  display: flex;
  justify-content: space-between;
  position: absolute;
  right: 0.8em;
  padding-top: .2em;
}
.edit-delete-btn{
  width: 0.8em !important;
  height: 0.8em !important;
 
}
.delete-btn{
  z-index: 10;
}

.street-edit-delete{
  display: flex;
}

h5{
  font-family: "montserrat";
  font-weight: 600;
  font-size: 12px;
  margin-bottom: 0.2em;
}
.price{
  color: #4A4B4C;
  font-size: 12px;
}
.zip-city{
  color: #c3c3c3;
  font-size: 12px;
}

.house-card img {
  width: 6.5em;
  height: 6em;
  margin: 0 0.3em;
  border-radius: 0.3em;
}
.rooms{
  display: flex;
  align-items: center;
  width: 80%;
  color: #c3c3c3;
  font-size: 12px;
  margin-top: 0.5em;
}

.room-img-wrap{
  display: flex;
  align-items: center;
}

.room-img{
  width: 13px !important;
  height: 13px !important;
}

.rooms div{
  margin-right: 0.3em;
}



.place-price{
  display: flex;
  flex-direction: column;
}

.place-price p {
  margin: 0;
 
}

.house-details {
  margin-left: 1em;
}



</style>