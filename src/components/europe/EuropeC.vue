<template>
    <div>
      <h1 class="main_heading">Welcome to Europe</h1>
      <img v-if="selectedRoute === '/europe/spain'" href="#" class="flag" width="270" height="150" src="https://img.freepik.com/premium-vector/spanish-flag-spain-country-national-identity_8071-1617.jpg" alt="Spain Flag">
      <img v-if="selectedRoute === '/europe/france'" href="#" class="flag" width="270" height="150" src="https://media.istockphoto.com/id/510973709/photo/close-up-of-the-flag-of-france.jpg?b=1&s=170667a&w=0&k=20&c=_DE_rAM3tKwHPoKI9PQFIkoV8vkuVR6SQYvucZwZa94=" alt="France Flag">
    
      <nav>
        <ul>
          <li>
            <router-link to="/europe/business"><button>Business</button></router-link>
            <router-link to="/europe/sports"><button>Sports</button></router-link>
            <router-link to="/europe/hollywood"><button>Entertainment</button></router-link>
            <router-link to="/europe/murders"><button>Crimes</button></router-link>

            <div id="time_container">
              <button v-if="selectedRoute === '/europe/spain'" id='time'>{{ time }}</button>
              <button v-if="selectedRoute === '/europe/france'" id='time'>{{ time }}</button>
            </div>
          </li>
        </ul>
      </nav>
      <router-view :selectedRoute="selectedRoute"></router-view>
      <p style="text-align:center">Currently Available Countries: <strong>France, Spain</strong></p>
      <EuropeMap/>
    </div>
  </template>
  
  <script>
import EuropeMap from './EuropeMap.vue';

  export default {
    name: "EuropeC",
    components: { EuropeMap },
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
      
      if (route === '/europe/spain') {
        clearInterval(this.intervalId);
        const updateFn = () => {
          const date = new Date();
          const options = { timeZone: 'Europe/Madrid', hour12: true };
          this.time = date.toLocaleString('en-US', options);
        };
        updateFn();
        this.intervalId = setInterval(updateFn, 1000);
      } else if (route === '/europe/france') {
        clearInterval(this.intervalId);
        const updateFn = () => {
          const date = new Date();
          const options = { timeZone: 'Europe/Paris', hour12: true };
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
  