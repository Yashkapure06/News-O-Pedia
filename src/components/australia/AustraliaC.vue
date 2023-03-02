<template>
    <div>
      <h1 class="main_heading">Welcome to Australia</h1>
      <img v-if="selectedRoute === '/australia/western-australia'" href="#" class="flag" width="270" height="150" src="https://i.pinimg.com/originals/30/47/3f/30473f08ede561b8b8c7953078127d31.jpg" alt="Brazil Flag">
      <img v-if="selectedRoute === '/australia/queensland'" href="#" class="flag" width="270" height="150" src="https://i.pinimg.com/originals/30/47/3f/30473f08ede561b8b8c7953078127d31.jpg" alt="Argentina Flag">
    
      <nav>
        <ul>
          <li>
            <router-link to="/australia/business"><button>Business</button></router-link>
            <router-link to="/australia/sports"><button>Sports</button></router-link>
            <router-link to="/australia/hollywood"><button>Hollywood</button></router-link>
            <router-link to="/australia/murders"><button>Murders</button></router-link>
          </li>
        </ul>
      </nav>
      <router-view :selectedRoute="selectedRoute"></router-view>
      <p style="text-align:center">Currently Available Countries: <strong>QueensLand, western-australia</strong></p>
      <AustraliaMap/>
    </div>
  </template>
  
  <script>
import AustraliaMap from './AustraliaMap.vue';

  export default {
    name: "AustraliaC",
    components: { AustraliaMap },    
    data() {
    return {
      selectedRoute: ''
    }
  },
  watch: {
    '$route'(to) {
      this.selectedRoute = to.path;
    }
  }
}
  </script>
  
  <style scoped>
  .main_heading{
    text-align: center;
    margin-top: 50px;
    font-size: 100px;
  }


  .flag{
    display: block;
    margin-left: auto;
    margin-right: auto;
    max-width:270px;
    max-height:150px;
  }
  nav{
    background-color: #333;
    overflow: hidden;
  }
  nav ul{
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
  }
  nav li{
    float: left;
  }
  nav li a:hover{
    background-color: #111;
  }
  
  button{
    background-color: #4CAF50; 
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
  }
  button:hover{
    background-color: #3e8e41;
    cursor: pointer;
  }
  ul li .active{
    background-color: #111;
  }
  </style>
  