<template>
    <div>

        <section class="top_business">
            <h1 id="headline_text">Top Science Headlines</h1>
            <ul>
                <li class="bigbox" v-for="(bollyArticle, index) in bollyArticles" :key="index">
                    <h2>{{ bollyArticle.title }}</h2>
                    <img class="articleImage" :src="bollyArticle.urlToImage" alt="Article image">
                    <p>{{ bollyArticle.description }}</p>
                    
                </li>
            </ul>
        </section>
        <section class="right-side-bar">
            <h1 id="headline_text">Top Hollywood Headlines</h1>
            <ul>
                <li class="timebox-side" v-for="(article, index) in articles" :key="index">
                    <router-link class="links" to="/hollywood"> <h5>{{ article.title }}</h5></router-link>
                    <img :src="article.urlToImage" alt="Article image">
                </li>
            </ul>
        </section>

    </div>
</template>


<script>

import axios from 'axios';


export default {
    name: 'BusinessNews',
    data() {
        return {
            articles: [],
            bollyArticles:[]
        }
    },
    
    mounted() {
        const newsApi = axios.create({
            
            params: {
                apiKey: 'c69289c49257482c8777a01afdb0e22a'
            }
        });

        newsApi.get('https://newsapi.org/v2/everything', {
            params: {
                q: 'hollywood',
            from: '2023-04-24',
            to: '2023-02-18',
            sortBy: 'popularity',
            apiKey: 'c69289c49257482c8777a01afdb0e22a',
            }
        })
            .then(response => {
                this.articles = response.data.articles.slice(0, 6);
            })
            .catch(error => {
                console.log(error);
            });
            
            
            
    axios.get('https://newsapi.org/v2/everything', {
      params: {
        q: 'bollywood',
        from: '2023-04-24',
        to: '2023-02-18',
        sortBy: 'popularity',
        apiKey: 'c69289c49257482c8777a01afdb0e22a',
      },
    })
      .then(response => {
        this.bollyArticles = response.data.articles.slice(0, 6); // limit to 6 articles
      })
      .catch(error => {
        console.log(error);
      });
    },
    methods: {
    goToArticle(article) {
      this.$router.push({ name: 'ArticleDetail', params: { articleId: article.url } });
    },
  },
   
    


};

</script>

<style scoped>
.top_business{
    width: 70%;
    float: left;
    padding-left: 50px;
}

.bigbox {
    width: 100%;
    height: 100%;
    margin: 10px 0;
    padding: 10px;
}


.articleImage{
    width: 100%;
    height: 500px;
    box-shadow: 0 0 10px 0 rgba(0,0,0,0.5); 
    border-radius: 10px;
}

.bigbox h2 {
    font-size: 1.5em;
    font-weight: 900;
    margin-bottom: 15px;
}


#headline_text {
    text-align: center;
    margin-top: 20px;
    margin-bottom: 20px;
}

.links {
    text-decoration: none;
    color: black;
}

.top_business {
    width: 70%;
    float: left;
    padding-left: 80px;
}

ul {
    list-style-type: none;
}

.right-side-bar {
    width: 30%;
    float: right;
    padding-right: 80px;
}

.timebox-side {
    width: 100%;
    height: 100%;
    border: 1px solid #ccc;
    margin: 10px 0;
    padding: 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.timebox-side img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin-left: 10px;
    box-shadow: 0 0 10px 0 rgba(0,0,0,0.5);
}

.timebox-side h2 {
    width: 70%;
}</style>