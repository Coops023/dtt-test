<template>
    <div class="create-home">
        <h1>Create new listing</h1>

        <form class="create-form" @submit.prevent="createNewHouse($data, $event.target.files)">

            <label for="streetName">Street name&#42;</label>
            <input type="text" name="streetName" v-model="form.streetName" placeholder="Enter the street name">

            <div class="input-wrap">
            <div>
            <label for="houseNumber">House number&#42;</label>
            <input type="text" name="houseNumber" v-model="form.houseNumber">
            </div>
            <div>
            <label for="numberAddition">Addition(optional)</label>
            <input type="text" name="numberAddition" v-model="form.numberAddition">
            </div>
            </div>

            <label for="zip">Zip&#42;</label>
            <input type="text" name="zip" v-model="form.zip">

            <label for="city">City&#42;</label>
            <input type="text" name="city" v-model="form.city">

             <label for="image">upload image (PNG or JPG)&#42;</label>
             <div class="file-upload-container">
            <input class="file-upload" type="file" accept="image/*"  @change="onFileChange($event.target.files)">
            <div id="preview">
            <img v-if="url" :src="url" />
            </div>
            <img  class="add-symbol" src="/images/create.png" alt="plus symbol">
            </div>

            <label for="price">Price&#42;</label>
            <input type="text" name="price" v-model="form.price">
            <div class="input-wrap">
                <div>
            <label for="size">Size&#42;</label>
            <input type="text" name="size" v-model="form.size">
            </div>
            <div class="select">
            <label class="garage-label" for="hasGarage">Has garage&#42;</label>
            <select name="hasGarage"  v-model="form.hasGarage" >
            <option disabled selected>Select</option>    
            <option value="true">Yes</option>
            <option value="false">No</option>
            </select>
            </div>
            </div>

            <div class="input-wrap">
            <div>
            <label for="bedrooms">Bedrooms&#42;</label>
            <input type="text" name="bedrooms" v-model="form.bedrooms">
            </div>
            <div>
            <label for="bathrooms">Bathrooms&#42;</label>
            <input type="text" name="bathrooms" v-model="form.bathrooms">
            </div>
            </div>
            <label for="constructionYear">Construction year&#42;</label>
            <input type="text" name="constructionYear" v-model="form.constructionYear">

           
            <label for="description">Description&#42;</label>
            <textarea name="description" cols="1" rows="1" v-model="form.description"/>
            <button type="submit">Post</button>
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
            price: "",
            bedrooms: "",
            bathrooms: "",
            size: "",
            streetName: "",
            houseNumber: "",
            numberAddition: "",
            zip: "",
            city: "",
            constructionYear: "",
            hasGarage: "",
            description: "",
            }, 
            houseImage: null,
            url: null,

        }
    },
       methods: {
       ...mapActions(["createNewHouse"]),
     
        onFileChange(image) {
            console.log(image[0])
            this.houseImage = image
            this.url = URL.createObjectURL(image[0]);
        },
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
 font-size: 24px;
}

.create-form{
    display: flex;
    flex-direction: column;
    margin-top: 1.5em;
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

textarea{
    border: none;
    margin: 0 auto;
    width: 90%;
    height: 6em;
    border-radius: 0.5em;
    margin-top: 0.5em;
    margin-bottom: 0.5em;
}

.file-upload-container{
    border: 3px dashed #eee;
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
    background-color: red;
  display: flex;
  justify-content: center;
  align-items: center;
}

#preview img {
  max-width: 100%;
  max-height: 500px;
}

</style>