<template>
  <div>
    <h1 class="main_heading">Welcome to North America</h1>
    <img v-if="selectedRoute === '/northamerica/usa'" href="#" class="flag" width="270" height="150" src="https://rukminim1.flixcart.com/image/416/416/l0o6nbk0/poster/3/s/e/large-usa-flag-4k-on-hi-quality-large-print-36x24-inches-original-imagcenavhk97rw5.jpeg?q=70" alt="USA Flag">
    <img v-if="selectedRoute === '/northamerica/canada'" href="#" class="flag" width="270" height="150" src="https://static.vecteezy.com/system/resources/previews/006/329/132/original/national-flag-of-canada-3d-rendering-waving-flag-high-quality-image-original-colors-sizes-and-shapes-free-photo.jpg" alt="Canada Flag">
    
    <nav>
      <ul>
        <li>
          <router-link to="/northamerica/business"><button>Business</button></router-link>
          <router-link to="/northamerica/sports"><button>Sports</button></router-link>
          <router-link to="/northamerica/hollywood"><button>Entertainment</button></router-link>
          <router-link to="/northamerica/murders"><button>Crimes</button></router-link>
          <div id="time_container">
            <button v-if="selectedRoute === '/northamerica/usa'" id='time'>{{ time }}</button>
            <button v-if="selectedRoute === '/northamerica/canada'" id='time'>{{ time }}</button>
          </div>
        </li>
      </ul>
    </nav>
    <router-view></router-view>
    <p style="text-align:center">Currently Available Counties: <strong>The USA, Canada</strong></p>
    <NorthAmericaMap/>
  </div>
</template>

<script>
import NorthAmericaMap from './NorthAmericaMap.vue';

export default {
    name: "NorthAmerica",
    components: { NorthAmericaMap },
    
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
      
      if (route === '/northamerica/usa') {
        clearInterval(this.intervalId);
        const updateFn = () => {
          const date = new Date();
          const options = { timeZone: 'America/New_York', hour12: true };
          this.time = date.toLocaleString('en-US', options);
        };
        updateFn();
        this.intervalId = setInterval(updateFn, 1000);
      } else if (route === '/northamerica/canada') {
        clearInterval(this.intervalId);
        const updateFn = () => {
          const date = new Date();
          const options = { timeZone: 'America/Toronto', hour12: true };
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
ul li .active{
  background-color: #111;
}
</style>
