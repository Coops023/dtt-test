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
import { mapActions, mapGetters } from 'vuex'
export default {


  
}
</script>

<style scoped>

</style>