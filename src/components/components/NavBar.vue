<template>
    <div>
      <section class="header">
        <header>
          <nav >
            <div class="logo">
              <router-link class="nav_text_main" to="/">News-O-Pedia</router-link>
            </div>
            <div class="nav_items">
              <ul>
                <!-- <router-link class="nav_text" to="/">Home</router-link>
                <router-link class="nav_text" to="/business">Business</router-link>
                <router-link class="nav_text" to="/sports">Sports</router-link> -->
                <div>
                  <form @submit.prevent="searchNews">
                    <input type="text" v-model="searchQuery" placeholder="Search for news">
                    <button type="submit">Go</button>
                  </form>
                </div>
              </ul>
            </div>
          </nav>
        </header>
      </section>
      <NewsArticles :articles="articles" v-if="showResults" />
  
      <router-view></router-view>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  import NewsArticles from "../NewsArticles.vue";
  
  export default {
    name: "NavBar",
    components: { 
        NewsArticles 
    },
    data() {
      return {
        searchQuery: "",
        articles: [],
        showResults: false,
      };
    },
    methods: {
      searchNews() {
        if (this.searchQuery) {
          const url = `https://newsapi.org/v2/everything?q=${this.searchQuery}&apiKey=86f6b2f4ad2c4cb9983fe5909b911440`;
          axios
            .get(url)
            .then((response) => {
              this.articles = response.data.articles.slice(0, 10);
              this.showResults = true;
              this.$router.push({ path: "/search", query: { q: this.searchQuery.toLocaleLowerCase() } });
            })
            .catch((error) => {
              console.log(error);
            });
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .header {
    margin: 2% 5% 0 5%;
    padding-bottom:25px;
}

.nav_text{
      padding-left:45px;
      text-decoration: none;
      color: #111;
    font-size: 18px;
    font-weight: 500;
    transition: all 0.3s ease;
  }
  .nav_text_main{
    text-decoration: none;
    color: #111;
    font-size: 28px;
    font-weight: 900;
    transition: all 0.3s ease;
  }
  header {
    border-radius: 15px;
    left: 0;
    width: 100%;
    height: 80px;
    background-color: #e7e4e480;
}
  
  a .logo {
    color: #252525;
    text-decoration: none;
  }
  
  .logo {
    position: absolute;
    font-size: 1.5em;
    letter-spacing: 1px;
    text-transform: uppercase;
    margin-top: 20px;
    margin-left: 60px;
    font-weight: 900;
}

nav .nav_items ul {
    margin-top: 25px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style: none;
}



ul li a {
    text-decoration: none;
    color: #111;
    font-size: 18px;
    font-weight: 500;
    transition: all 0.3s ease;
}

.nav_items {
    display: flex;
    justify-content: flex-end;
}

.nav_items ul li a:hover {
    font-weight: 900;
}

ul li form {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
form{
    padding-left:45px;
}
form input {
    width: 200px;
    height: 30px;
    border-radius: 5px;
    border: 1px solid #111;
    margin-right:15px;
    padding-left: 10px;
}

    button {
    width: 50px;
margin-right:15px;
    height: 30px;
    border-radius: 5px;
        border: 1px solid #111;
        background-color: #111;
        color: #fff;
        font-weight: 900;
        cursor: pointer;
    }

    form button:hover {
        background-color: #fff;
        color: #111;
    }

  </style>
  