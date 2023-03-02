<template>
    <div>
        <section class="hero">
            <div class="hero_image">
                <img :src="images[currentImageIndex].src">
            </div>
            
        </section>
    </div>
</template>

<script>    

export default {
    name: 'HeroView',
    data() {
    return {
      images: [
        { src: 'https://c.biztoc.com/p/86f8f31d14cb9cb6/og.webp' },
        { src: 'https://c.ndtvimg.com/2023-01/6uld4jdg_chatgpt-getty_625x300_17_January_23.jpg' },
        { src: 'https://images.wsj.net/im-725101/social' },
        { src: 'https://media.wired.com/photos/63f073e89f6497cd1808ad5b/191:100/w_1280,c_limit/Twitter-2-factor-1245209524.jpg'}
      ],
      currentImageIndex: 0
    };
  },
  methods: {
    nextImage() {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
    },
  },
  created() {
    setInterval(this.nextImage, 5000);
  }
}
</script>

<style scoped>
.hero {
    position: relative;
    width: 90%;
    height:80vh;
    justify-content: space-around;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1.5fr 1.2fr 0.8fr;
    grid-template-areas: "image";
    grid-gap: 0.5rem;
    margin: 2% 3% 0 5%;
  }
  
  .hero .hero_image {
    grid-area: image;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 15px;
  }
  .hero_image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 15px;
  }
  .hero_image h1 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #fff;
    font-size: 5.1rem;
    font-weight: 900;
  }
</style>