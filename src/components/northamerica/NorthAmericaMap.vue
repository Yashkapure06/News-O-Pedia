<template>
    <div>
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 612 606">
            <image width="612" height="606" xlink:href="../../assets/north-america.jpeg"></image> 
            <router-link to="/northamerica/alaska">
              <rect x="197" y="10" fill="#000" opacity="0" width="46" height="44"></rect>
            </router-link>
            <router-link to="/northamerica/canada">
              <rect x="206" y="46" fill="#000" opacity="0" width="201" height="75"></rect>
            </router-link>
            <router-link to="/northamerica/usa">
              <rect x="236" y="136" fill="#000" opacity="0" width="140" height="65"></rect>
            </router-link>
        </svg>
    </div>
</template>

<script>
export default {
    name: 'NorthAmericaMap'
}
</script>

<style scoped>
image{
    width:100%;
    height:50%;
}
</style>