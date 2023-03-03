<template>
    <div>
      <h1 class="main_heading">Welcome to Asia</h1>
      <img v-if="selectedRoute === '/asia/india'" href="#" class="flag" width="270" height="150" src="https://t3.ftcdn.net/jpg/00/42/09/98/360_F_42099891_6Sz9g70EoF2AQhogDZiFE9UQ2ncan1Pk.jpg" alt="Indian Flag">
      <img v-if="selectedRoute === '/asia/russia'" href="#" class="flag" width="270" height="150" src="https://www.advantour.com/russia/images/symbolics/russia-flag.jpg" alt="Russian Flag">
      <img v-if="selectedRoute === '/asia/china'" href="#" class="flag" width="270" height="150" src="https://static.vecteezy.com/system/resources/thumbnails/001/792/386/original/china-flag-loop-free-video.jpg" alt="Chinese Flag">
    
      <nav>
        <ul>
          <li>
            <router-link to="/asia/business"><button>Business</button></router-link>
            <router-link to="/asia/sports"><button>Sports</button></router-link>
            <router-link to="/asia/bollywood"><button>Bollywood</button></router-link>
            <router-link to="/asia/murders"><button>Crime</button></router-link>

            <div id="time_container">
              <button v-if="selectedRoute === '/asia/india'" id='time'>{{ time }}</button>
              <button v-if="selectedRoute === '/asia/russia'" id='time'>{{ time }}</button>
              <button v-if="selectedRoute === '/asia/china'" id='time'>{{ time }}</button>
            </div>

          </li>
        </ul>
      </nav>
      <router-view></router-view>
      <p style="text-align:center">Currently available Countries are <strong>India, Russia, China</strong></p>
      <AsiaMap/>
    </div>
  </template>
  
  <script>
import AsiaMap from './AsiaMap.vue';

export default {
  name: "AsiaC",
  components: { AsiaMap },
  data() {
    return {
      selectedRoute: '',
      time: '',
      intervalId: null
    }
  },
  watch: {
    '$route'(to) {
      this.selectedRoute = to.path;
      this.updateTime();
    }
  },
  mounted() {
    this.updateTime();
  },
  beforeDestroy() {
    clearInterval(this.intervalId);
  },
  methods: {
    updateTime() {
      const route = this.$route.path;
      
      if (route === '/asia/india') {
        clearInterval(this.intervalId);
        const updateFn = () => {
          const date = new Date();
          const options = { timeZone: 'Asia/Kolkata', hour12: true };
          this.time = date.toLocaleString('en-US', options);
        };
        updateFn();
        this.intervalId = setInterval(updateFn, 1000);
      } else if (route === '/asia/russia') {
        clearInterval(this.intervalId);
        const updateFn = () => {
          const date = new Date();
          const options = { timeZone: 'Europe/Moscow', hour12: true };
          this.time = date.toLocaleString('en-US', options);
        };
        updateFn();
        this.intervalId = setInterval(updateFn, 1000);
      } else if (route === '/asia/china') {
        clearInterval(this.intervalId);
        const updateFn = () => {
          const date = new Date();
          const options = { timeZone: 'Asia/Shanghai', hour12: true };
          this.time = date.toLocaleString('en-US', options);
        };
        updateFn();
        this.intervalId = setInterval(updateFn, 1000);
      } else {
        this.time = '';
        clearInterval(this.intervalId);
      }
    }
  }
}
  </script>
  
  <style scoped>
  #time_container button{
    position: absolute;
    right: 0;
    top: 61.5%;
    transform: translate(-50%, -50%);
    background-color: #555;
    color: white;
    font-size: 16px;
    padding: 12px 24px;
    border: none;
    cursor: pointer;
    border-radius: 5px;
    text-align: center;
  }
  
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
  