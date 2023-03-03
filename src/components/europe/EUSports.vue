<template>
    <div>
        <section class="top_business">
            <h1 id="headline_text">Top Sports Headlines</h1>
            <ul>
                <li class="bigbox" v-for="(sportsArticle, index) in sportsArticles" :key="index">
                    <h2>{{ sportsArticle.title }}</h2>
                    <img class="articleImage" :src="sportsArticle.urlToImage" alt="Article image">
                    <p>{{ sportsArticle.description }}</p>
                    
                </li>
            </ul>
        </section>

        <section class="right-side-bar">
            <h1 id="headline_text">Top Hollywood Headlines</h1>
            <ul>
                <li class="timebox-side" v-for="(hollywoodArticle, index) in hollywoodArticles" :key="index">
                    <router-link class="links" to="/europe/hollywood"><h5>{{ hollywoodArticle.title }}</h5></router-link>
                    <img :src="hollywoodArticle.urlToImage" alt="Article image">
                </li>
            </ul>
        </section>
    </div>
</template>

<script>

import axios from 'axios';

export default {
    name: 'AfSports',
    data() {
        return {
            sportsArticles: [],
            hollywoodArticles:[]
        }
    },
    mounted(){
        const newsApi = axios.create({
            baseURL: 'https://newsapi.org/v2',
            params: {
                apiKey: '86f6b2f4ad2c4cb9983fe5909b911440'
            }
        });

        newsApi.get('https://newsapi.org/v2/everything', {
            params: {
                q: 'top european sports',
                from: '2023-02-18',
                to: '2023-02-18',
                sortBy: 'popularity',
                apiKey: '86f6b2f4ad2c4cb9983fe5909b911440',
            }
        })
        .then(response => {
            this.sportsArticles = response.data.articles.slice(0, 6);
        })
        .catch(error => {
            console.log(error);
        });

        newsApi.get('https://newsapi.org/v2/everything', {
            params: {
                q: 'The Hollywood of Europe',
                from: '2023-02-18',
                to: '2023-02-18',
                sortBy: 'popularity',
                apiKey: '86f6b2f4ad2c4cb9983fe5909b911440',
            }
        })
        .then(response => {
            this.hollywoodArticles = response.data.articles.slice(0, 6);
        })
        .catch(error => {
            console.log(error);
        });
    }
}
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


.links {
    text-decoration: none;
    color: black;
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