<template>
    <div class="create-home">
        <div class="heading-back-btn">
        <router-link to="/"><img class="back-arrow" src="images/back-arrow.png" alt=""></router-link>
        <h1>Create new listing</h1>
        </div>

        <form class="create-form" @submit.prevent="createNewHouse($data, $event.target.files)">

            <label for="streetName">Street name&#42;</label>
            <input type="text" name="streetName" v-model="form.streetName" placeholder="Enter the street name" required>

            <div class="input-wrap">
            <div>
            <label for="houseNumber">House number&#42;</label>
            <input type="text" name="houseNumber" v-model="form.houseNumber" placeholder="Enter house number" required>
            </div>
            <div>
            <label for="numberAddition">Addition(optional)</label>
            <input type="text" name="numberAddition" v-model="form.numberAddition" placeholder="e.g. A" >
            </div>
            </div>

            <label for="zip">Zip&#42;</label>
            <input type="text" name="zip" v-model="form.zip" placeholder="e.g. 1000 AA" required>

            <label for="city">City&#42;</label>
            <input type="text" name="city" v-model="form.city" placeholder="e.g. Utrecht" required>

             <label for="image">upload image (PNG or JPG)&#42;</label>
             <div  class="file-upload-container">
            <input class="file-upload" type="file" accept="image/*"  @change="onFileChange($event.target.files)" required>
            <div id="preview">
            <img @click="resetImage" v-if="url" class="img-reset" src="/images/image-reset.png" alt="">
            <img class="house-img" v-if="url" :src="url" />
            <img v-else  class="add-symbol" src="/images/create.png" alt="plus symbol">
            </div>
             
           
            </div>

            <label for="price">Price&#42;</label>
            <input type="text" name="price" v-model="form.price" placeholder="e.g. €150.000" required>
            <div class="input-wrap">
                <div>
            <label for="size">Size&#42;</label>
            <input type="text" name="size" v-model="form.size" placeholder="e.g. 60m2" required>
            </div>
            <div class="select">
            <label class="garage-label" for="hasGarage">Has garage&#42;</label>
            <select name="hasGarage"  v-model="form.hasGarage" required>
            <option disabled selected>Select</option>    
            <option value="true">Yes</option>
            <option value="false">No</option>
            </select>
            </div>
            </div>

            <div class="input-wrap">
            <div>
            <label for="bedrooms">Bedrooms&#42;</label>
            <input type="text" name="bedrooms" v-model="form.bedrooms" placeholder="Enter amount" required>
            </div>
            <div>
            <label for="bathrooms">Bathrooms&#42;</label>
            <input type="text" name="bathrooms" v-model="form.bathrooms" placeholder="Enter amount" required>
            </div>
            </div>
            <label for="constructionYear">Construction year&#42;</label>
            <input type="text" name="constructionYear" v-model="form.constructionYear" placeholder="e.g. 1990" required>

           
            <label for="description">Description&#42;</label>
            <input class="text-area" type="text" name="description" cols="1" rows="1" v-model="form.description" placeholder="Enter description" required/>
            <button class="form-submit" type="submit">Post</button>
        </form>
    </div>
</template>

<script>
// import axios from "axios"
// const API_KEY = "T2M1og_uLjqZEztfNe4wlJYmUxIhpXDs";
import {mapActions} from 'vuex'

export default {
    name: "CreateHomeView",
    data(){
        return {
            form:{
            price: null,
            bedrooms: null,
            bathrooms: null,
            size: null,
            streetName: null,
            houseNumber: null,
            numberAddition: null,
            zip: null,
            city: null,
            constructionYear: null,
            hasGarage: null,
            description: null,
            }, 
            houseImage: null,
            url: null,

        }
    },
       methods: {
       ...mapActions(["createNewHouse"]),
     
        onFileChange(image) {
            
            this.houseImage = image
            this.url = URL.createObjectURL(image[0]);
            
        },
        resetImage(){
            this.url = null
        }
        },
       
    computed: {

    }
}
</script>

<style scoped>

.create-home{
    height: 100%;
    font-family: "montserrat";
    
    max-width: 100vw;
    padding-top: 1em;
}



h1{
 text-align: center;
 margin: 0;
 font-size: 18px;
}

.back-arrow{
   width: 1em;
   position: relative;
   left: 1em;
   top: 1.4em;
}

.create-form{
    display: flex;
    flex-direction: column;
    margin-top: 1.5em;
    
    background-image: linear-gradient(rgba(246,246,246,9), rgba(255,255,255,0.8)), url("@/assets/bg-img.png");
    background-size: 40em;
    background-repeat: no-repeat;
    background-position-y: 100%;
}

label{
   margin-left: 1.5em;
   font-size: 12px;
}

input{
    border: none;
    margin: 0 auto;
    width: 90%;
    height: 2em;
    border-radius: 0.5em;
    margin-top: 0.5em;
    margin-bottom: 0.5em;
}

input::placeholder{
    padding-left: 1em;
    font-size: 0.7em;
}

.input-wrap{
    display: flex;
}

.input-wrap input{
    width: 70%;
    margin-left: 1.2em;
}

.garage-label{
    margin-left: 0em;
}

select{
    border: none;
    margin: 0 auto;
    width: 90%;
    height: 2.2em;
    border-radius: 0.5em;
    margin-top: 0.5em;
    margin-bottom: 0.5em;
}

.text-area{
    border: none;
    margin: 0 auto;
    width: 90%;
    padding-bottom: 8em;
    border-radius: 0.5em;
    margin-top: 0.5em;
    margin-bottom: 0.5em;
}

text-area::placeholder{
    font-family: "montserrat";
    font-size: 10px;
    padding-left: 1em;
    padding-top: 0.5em;
}

.file-upload-container{
    border: 3px dashed #c3c3c3;
    width: 8em;
    height: 8em;
    margin-left: 1.2em;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    margin-top: 1em;
    margin-bottom: 1em;
}
.file-upload{
    position: absolute;
    top: 0em;
    width: 8em;
    height: 8em;
    opacity: 0;
}
.file-upload-container:hover{
    background-color: #eee;
    cursor: pointer;
}

.add-symbol{
    width: 2em;
}

#preview {
  display: flex;
  justify-content: center;
  align-items: center;
}

#preview .house-img {
  width: 9em;
  height: 9em;
  border-radius: 0.5em;
}

.img-reset{
    height: 1.3em;
    width: 1.3em;
    position: absolute;
    z-index: 5;
    margin-left: 105%;
    margin-bottom: 105%;
}

.form-submit{
    margin: 0 auto;
    width: 91%;
    padding: 10px 20px;
    border: none;
    border-radius: 0.5em;
    background-color: #eb5440;
    color: white;
    text-transform: uppercase;
    margin-top: 2em;
    margin-bottom: 2em;
    font-size: 12px;
}

input:invalid ~ button {
  background-color: rgba(235, 84, 64, 0.5);
}

</style>