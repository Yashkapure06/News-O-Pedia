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

            <div id="time_container">
              <button v-if="selectedRoute === '/australia/western-australia'" id='time'>{{ time }}</button>
              <button v-if="selectedRoute === '/australia/queensland'" id='time'>{{ time }}</button>
            </div>
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
      
      if (route === '/australia/queensland') {
        clearInterval(this.intervalId);
        const updateFn = () => {
          const date = new Date();
          const options = { timeZone: 'Australia/Queensland', hour12: true };
          this.time = date.toLocaleString('en-US', options);
        };
        updateFn();
        this.intervalId = setInterval(updateFn, 1000);
      } else if (route === '/australia/western-australia') {
        clearInterval(this.intervalId);
        const updateFn = () => {
          const date = new Date();
          const options = { timeZone: 'Australia/Western', hour12: true };
          this.time = date.toLocaleString('en-US', options);
        };
        updateFn();
        this.intervalId = setInterval(updateFn, 1000);
      }else {
        this.time = '';
        clearInterval(this.intervalId);
      }
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
  