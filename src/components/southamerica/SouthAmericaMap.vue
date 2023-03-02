<template>
    <div>
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 453 550">
            <image width="453" height="550" xlink:href="../../assets/south-america.jpg"></image> 
            <router-link to="/southamerica/brazil">
              <rect x="215" y="77" fill="#000" opacity="0" width="90" height="59"></rect>
            </router-link>
            <router-link to="/southamerica/argentina">
              <rect x="180" y="151" fill="#000" opacity="0" width="40" height="109"></rect>
            </router-link>
        </svg>
    </div>
</template>

<script>
export default {
    name: 'SouthAmericaMap'
}
</script>

<style scoped>
image{
    width:100%;
    height:50%;
}

</style>