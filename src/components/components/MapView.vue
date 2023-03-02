<template>
    <div>
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 1280 800">
            <image href="../../assets/map.jpg"></image>
            <g>
                <text x="330" y="332" fill="#fff"  class="continent-name">
                    North America
                </text>
                <router-link to="/northamerica">
                    <rect x="107" y="112" fill="#fff" opacity="0" width="451" height="338"></rect>
                </router-link>
            </g>
            <g>
                <text x="432" y="561" fill="#fff"  class="continent-name">
                    South America
                </text>
                <router-link to="/southamerica">
                    <rect x="372" y="461" fill="#fff" opacity="0" width="147" height="248"></rect>
                </router-link>
            </g>
            <g>
                <text x="667" y="461" fill="#fff"  class="continent-name">
                    Africa
                </text>
                <router-link to="/africa">
                    <rect x="567" y="381" fill="#fff" opacity="0" width="215" height="248"></rect>
                </router-link>
            </g>
            <g>
                <text x="690" y="325" fill="#fff"  class="continent-name">
                    Europe
                </text>
                <router-link to="/europe">
                    <rect x="590" y="199" fill="#fff" opacity="0" width="157" height="179"></rect>
                </router-link>
            </g>
            <g>
                <text x="1021" y="590" fill="#fff"  class="continent-name">
                    Australia
                </text>
                <router-link to="/australia">
                    <rect x="961" y="535" fill="#fff" opacity="0" width="203" height="142"></rect>
                </router-link>
            </g>
            <g>
                <text x="890" y="321" fill="#fff"  class="continent-name">
                    Asia
                </text>
                <router-link to="/asia">
                    <rect x="790" y="181" fill="#fff" opacity="0" width="402" height="291"></rect>
                </router-link>
            </g>
        </svg>
    </div>
</template>

<script>

export default {
    name: 'MapView',
}
</script>

<style scoped>
image {
    width: 1280px;
    max-width: 100%;
    height: auto;
}

.continent-name {
    font-size: 1.2em;
    letter-spacing: 1px;
    text-transform: uppercase;
    font-weight: 900;
    text-anchor: middle;
    cursor: pointer;
    color:white
}

</style>

