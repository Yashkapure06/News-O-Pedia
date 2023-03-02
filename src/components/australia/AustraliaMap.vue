<template>
    <div>
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 956 610">
            <image width="956" height="610" xlink:href="../../assets/australia.jpg"></image> 
            <router-link to="/australia/western-australia">
              <rect x="307" y="83" fill="#000" opacity="0" width="99" height="132"></rect>
            </router-link>
            <router-link to="/australia/queensland">
              <rect x="512" y="56" fill="#000" opacity="0" width="86" height="106"></rect>
            </router-link>
        </svg>
    </div>
</template>

<script>
export default {
    name: 'AustraliaMap'
}
</script>

<style scoped>
image{
    width:100%;
    height:50%;
}
</style>