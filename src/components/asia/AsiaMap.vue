<template>
    <div>
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 800 800">
            <image width="500" height="500" xlink:href="../../assets/asia-continent.jpeg"></image> 
            <router-link to="/asia/russia">
              <rect x="256" y="120" fill="#000" opacity="0" width="270" height="106"></rect>
            </router-link>
            <router-link to="/asia/china">
              <rect x="357" y="249" fill="#000" opacity="0" width="85" height="45"></rect>
            </router-link>
            <router-link to="/asia/india">
              <rect x="319" y="284" fill="#000" opacity="0" width="45" height="40"></rect>
            </router-link>
          </svg>
    </div>
</template>

<script>

export default {
    name: 'AsiaMap'
}
</script>

<style scoped>
image{
    width:100%;
    height:50%;
}
</style>