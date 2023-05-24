<template>
    <div>
        <section class="top_business">
            <h1 id="headline_text">Top Sports Headlines</h1>
            <ul>
                <li class="timebox" v-for="(article, index) in articles" :key="index" @click="showArticle(article)">
                  <h2>{{ article.title }}</h2>
                  <img :src="article.urlToImage" alt="Article image">
                </li>
            </ul>
            
        </section>
    </div>
</template>

<script>
import axios from "axios";
export default {
    name: 'NewsCards',
    data() {
    return {
      articles: []
    };
  },
    mounted() {
        
    axios.get('https://newsapi.org/v2/top-headlines', {
      params: {
        country: 'in',
        category: 'sports',
        apiKey: 'c69289c49257482c8777a01afdb0e22a',
        pageSize: 3 // Only fetch 6 articles
      }
    })
    .then(response => {
      this.articles = response.data.articles;
    })
    .catch(error => {
      console.log(error);
    });
  },

 
  methods: {
    showArticle() {
        this.$router.replace('/articles');

    }
  }

}
</script>

<style scoped>

/* country */
.top_business {
    display: grid;
    justify-content: space-around;
    align-items: center;
    grid-template-columns: fr 1fr 1fr 1fr;
    grid-template-rows: fr 0.5fr 1.2fr 0.8fr;
    grid-template-areas:
      "text text text text";
    grid-gap: 10px;
    margin: 2% 3% 0 5%;
  }
  #headline_text {
    grid-area: text;
    text-align: center;
    font-size: 2.1rem;
    margin-top: 10%;
    font-weight: 900;
    color: #111;
  }
  .timebox {
    margin-top: 5%;
    margin-bottom: 5%;
    /* border:1px solid #111; */
    cursor: pointer;
    border-radius: 25px;
    padding: 1rem;
    display: inline-block;
    justify-content: center;
    width: 450px;
    height: 280px;
    transition: all 0.3s ease;
    text-align: center;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }
  .timebox h1 {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
  }

    .timebox h2 {
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        font-size: 1.5rem;
        font-weight: 900;
        color: #111;
    }
    .timebox img {
        width: 100%;
        height: 100%;
        border-radius: 25px;
    }

  
</style>