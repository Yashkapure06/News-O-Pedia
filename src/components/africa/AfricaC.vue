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

            <div id="time_container">
              <button v-if="selectedRoute === '/africa/south-africa'" id='time'>{{ time }}</button>
              <button v-if="selectedRoute === '/africa/egypt'" id='time'>{{ time }}</button>
            </div>
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
      
      if (route === '/africa/south-africa') {
        clearInterval(this.intervalId);
        const updateFn = () => {
          const date = new Date();
          const options = { timeZone: 'Africa/Johannesburg', hour12: true };
          this.time = date.toLocaleString('en-US', options);
        };
        updateFn();
        this.intervalId = setInterval(updateFn, 1000);
      } else if (route === '/africa/egypt') {
        clearInterval(this.intervalId);
        const updateFn = () => {
          const date = new Date();
          const options = { timeZone: 'Africa/Cairo', hour12: true };
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
  