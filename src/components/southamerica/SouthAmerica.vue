<template>
  <div>
    <h1 class="main_heading">Welcome to South America</h1>
    <img v-if="selectedRoute === '/southamerica/brazil'" href="#" class="flag" width="270" height="150" src="https://static.vecteezy.com/system/resources/thumbnails/001/803/248/original/brazil-flag-loop-free-video.jpg" alt="Brazil Flag">
    <img v-if="selectedRoute === '/southamerica/argentina'" href="#" class="flag" width="270" height="150" src="https://t3.ftcdn.net/jpg/00/42/50/34/360_F_42503487_5R2vtjtXNYYomm3qd6ZpN9jSPjj3r0pm.jpg" alt="Argentina Flag">
    
    <nav>
      <ul>
        <li>
          <router-link to="/southamerica/business"><button>Business</button></router-link>
          <router-link to="/southamerica/sports"><button>Sports</button></router-link>
          <router-link to="/southamerica/hollywood"><button>Entertainment</button></router-link>
          <router-link to="/southamerica/murders"><button>Crimes</button></router-link>
        </li>
      </ul>
    </nav>
    <router-view :selectedRoute="selectedRoute"></router-view>
    <p style="text-align:center">Currently Available Countries: <strong>Brazil, Argentina</strong></p>
    <SouthAmericaMap/>
  </div>
</template>
<script>
import SouthAmericaMap from './SouthAmericaMap.vue';

export default {
    name: "SouthAmerica",
    components: { SouthAmericaMap },
    
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
.main_heading {
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

nav {
  background-color: #333;
  overflow: hidden;
}

nav ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
}

nav li {
  float: left;
}

nav li a:hover {
  background-color: #111;
}

button {
  background-color: #4CAF50;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
}

button:hover {
  background-color: #3e8e41;
  cursor: pointer;
}


.continent_name {
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 100px;
}</style>