<template>
    <div class="create-home">
        <form class="create-form" @submit.prevent="createNewHouse($data, $event.target.files)">
            <label for="price">Price</label>
            <input type="text" name="price" v-model="form.price">
            
            <label for="bedrooms">Bedrooms</label>
            <input type="text" name="bedrooms" v-model="form.bedrooms">

            <label for="bathrooms">Bathrooms</label>
            <input type="text" name="bathrooms" v-model="form.bathrooms">

            <label for="size">Size</label>
            <input type="text" name="size" v-model="form.size">

            <label for="streetName">Street name</label>
            <input type="text" name="streetName" v-model="form.streetName">

            <label for="houseNumber">House number</label>
            <input type="text" name="houseNumber" v-model="form.houseNumber">

            <label for="numberAddition">Number addition</label>
            <input type="text" name="numberAddition" v-model="form.numberAddition">

            <label for="zip">Zip</label>
            <input type="text" name="zip" v-model="form.zip">

            <label for="city">City</label>
            <input type="text" name="city" v-model="form.city">

            <label for="constructionYear">Construction year</label>
            <input type="text" name="constructionYear" v-model="form.constructionYear">

            <label for="image">upload image</label>
            <input type="file" accept="image/*"  @change="onFileChange($event.target.files)">

            <label for="hasGarage">Has garage</label>
            <select name="hasGarage"  v-model="form.hasGarage">
            <option value="true">true</option>
            <option value="false">false</option>
            </select>

            <label for="description">Description</label>
            <textarea name="description" cols="1" rows="1" v-model="form.description"/>
            <button type="submit">submit</button>
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
            houseImage: null
        }
    },
       methods: {
       ...mapActions(["createNewHouse"]),
        // submitHandler(){
           

        //   const requestBody = this.form
        //   const image = this.houseImage
          

        //    axios.post('https://api.intern.d-tt.nl/api/houses', requestBody, {
        //        headers: {
        //     "X-Api-Key": API_KEY,
        //     }
        //    }).then(res => {
        //         const id = res.data.id
        //         const formData = new FormData()
        //         formData.append('image', image[0])
        //           axios.post(`https://api.intern.d-tt.nl/api/houses/${id}/upload`, formData, {
        //        headers: {
        //     "X-Api-Key": API_KEY,
        //     }}).then(console.log('success')).then(err => console.log(err))
             
        //    }).catch(err => {console.log(err)})
        // },
        onFileChange(image) {
            this.houseImage = image
            
        },
        },
       
    computed: {

    }
}
</script>

<style scoped>

.create-form{
    display: flex;
   flex-direction: column;
}

</style>