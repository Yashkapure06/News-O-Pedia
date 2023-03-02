<template>
    <div>
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 612 581">
            <image width="612" height="581" xlink:href="../../assets/africa.jpg"></image> 
            <router-link to="/africa/egypt">
              <rect x="335" y="35" fill="#000" opacity="0" width="30" height="30"></rect>
            </router-link>
            <router-link to="/africa/southafrica">
              <rect x="309" y="244" fill="#000" opacity="0" width="50" height="25"></rect>
            </router-link>
          </svg>   
    </div>
</template>


<script>

export default {
    name:'AfricaMap'
}

</script>

<style scoped>
image{
    width:100%;
    height:50%;
}

</style>