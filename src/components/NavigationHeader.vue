<template>
    <nav class="navbar">
        <img class="navbar-brand" src="#" alt="Navbar-brand">
        <router-link to="/" @click="changeHomeIcon" class="home-inactive" :class="{ homeActive : homeClicked }"></router-link>
        <router-link to="/about" @click="changeAboutIcon" class="about-inactive " :class="{ aboutActive : aboutClicked }" ></router-link>
    </nav>
</template>

<script>

export default {
    name: "NavigationHeader",
    data() {
        return { homeClicked: false, aboutClicked: false}
  },
    methods:{
        changeHomeIcon: function(){
            this.homeClicked = true
            this.aboutClicked = false
        },
        changeAboutIcon: function(){
            this.homeClicked = false
            this.aboutClicked = true
        }
    }
}
</script>

<style >
.navbar{
position: fixed;
height: 50px;
bottom: 0;
display: flex;
width: 100%;
justify-content: space-evenly;    
padding-top: 1em;
box-shadow: 0px -4px 3px rgba(50, 50, 50, 0.2);
}

router-link{
    height: 32px !important;
}

.navbar-brand{
    display: none;
}

.nav-button{
    width: 40px;
}

.home-inactive{
    background-image: url('@/assets/home-inactive.png');
    background-repeat: no-repeat;
    background-size: 100%;
    width: 2em;
    height: 2em;
}



.homeActive{
    background-image: url('@/assets/home-active.png');
    background-repeat: no-repeat;
    background-size: 100%;
    width: 2em;
    height: 2em;
}

.about-inactive{
    background-image: url('@/assets/about-inactive.png');
    background-repeat: no-repeat;
    background-size: 100%;
    width: 2em;
    height: 2em;
}

.aboutActive{
    background-image: url('@/assets/about-active.png');
    background-repeat: no-repeat;
    background-size: 100%;
    width: 2em;
    height: 2em;
}

@media screen and (min-width: 1024px) {
    .navbar-brand{
        display: block;
    }

    .navbar{
    position: fixed;
    top: 0;
}
}
</style>