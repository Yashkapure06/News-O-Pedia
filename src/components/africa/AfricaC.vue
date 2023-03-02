<template>
  <div>
    <h1 class="main_heading">Welcome to Africa</h1>
    <img v-if="selectedRoute === '/africa/south-africa'" href="#" class="flag" width="270" height="150" src="../../assets/southafrica-flag.jpeg" alt="South Africa Flag">
    <img v-if="selectedRoute === '/africa/egypt'" href="#" class="flag" width="270" height="150" src="https://t4.ftcdn.net/jpg/04/89/76/31/360_F_489763148_dYk2Yh4llD4zZWC8kfhx84rXiA3HJvzO.jpg" alt="Egypt Flag">
    
      <nav>
        <ul>
          <li>
            <router-link to="/africa/business"><button>Business</button></router-link>
            <router-link to="/africa/sports"><button>Sports</button></router-link>
            <router-link to="/africa/hollywood"><button>Entertainment</button></router-link>
            <router-link to="/africa/murders"><button>Crimes</button></router-link>
          </li>
        </ul>
      </nav>
      <router-view></router-view>
      <p style="text-align:center">Currently Avilable Countries: <strong>Egypt, South Africa</strong></p>
      <AfricaMap/>
    </div>
  </template>
  
  <script>
import AfricaMap from './AfricaMap.vue';

  export default {
    name: "AfricaC",
    components: { AfricaMap },
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
  </style>
  