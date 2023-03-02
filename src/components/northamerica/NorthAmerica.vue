<template>
  <div>
    <h1 class="main_heading">Welcome to North America</h1>
    <nav>
      <ul>
        <li>
          <router-link to="/northamerica/business"><button>Business</button></router-link>
          <router-link to="/northamerica/sports"><button>Sports</button></router-link>
          <router-link to="/northamerica/hollywood"><button>Entertainment</button></router-link>
          <router-link to="/northamerica/murders"><button>Crimes</button></router-link>

        </li>
      </ul>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'NorthAmerica',
 
}
</script>

<style scoped>
.main_heading{
  text-align: center;
  margin-top: 50px;
  font-size: 100px;
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
