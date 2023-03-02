<template>
    <div>
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 467 535">
            <image width="467" height="535" xlink:href="../../assets/europe.png"></image> 
            <router-link to="/europe/france">
              <rect x="172" y="158" fill="#000" opacity="0" width="40" height="40"></rect>
            </router-link>
            <router-link to="/europe/spain">
              <rect x="129" y="190" fill="#000" opacity="0" width="40" height="40"></rect>
            </router-link>
        </svg>
    </div>
</template>

<script>
export default {
    name: 'EuropeMap'
}
</script>

<style scoped>
image{
    width:100%;
    height:50%;
}
</style>