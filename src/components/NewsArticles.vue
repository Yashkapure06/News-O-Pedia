<template>
  <section class="news-articles">
    <h2 v-if="heading">{{ heading }}</h2>
    <ul>
      <li v-for="(article, index) in articles" :key="index">
        <div class="article">
          <a :href="article.url" target="_blank">
            <h3>{{ article.title }}</h3>
          </a>
          <div class="article-details">
            <p>{{ article.author }}</p>
            <p>{{ article.publishedAt | formatDate }}</p>
          </div>
          <div class="article-image">
            <a :href="article.url" target="_blank">
              <img :src="article.urlToImage" :alt="article.title" />
            </a>
          </div>
          <div class="article-content">
            <p>{{ article.description }}</p>
          </div>
        </div>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: "NewsArticles",
  props: {
    articles: {
      type: Array,
      required: true,
    },
    heading: {
      type: String,
      default: "",
    },
  },
  filters: {
    formatDate: function (value) {
      const date = new Date(value);
      return date.toLocaleString();
    },
  },
};
</script>

<style scoped>
.news-articles {
  margin: 2% 5% 0 5%;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

li {
  margin-bottom: 50px;
}

.article {
  border-radius: 15px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1),
    0 6px 6px rgba(0, 0, 0, 0.2);
  overflow: hidden;
}

.article a {
  text-decoration: none;
}

.article h3 {
  margin: 0;
  padding: 20px;
  background-color: #f5f5f5;
  font-size: 24px;
  font-weight: bold;
}

.article-details {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #fff;
  font-size: 16px;
  color: #777;
}

.article-details p {
  margin: 0;
}

.article-image {
  position: relative;
}

.article-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.article-content {
  padding: 20px;
  background-color: #fff;
  font-size: 16px;
  line-height: 1.5;
  color: #333;
}
</style>
