<template>
    <app-panel />
    <div class="app-container">
        <router-view/>
    </div>
</template>

<script>
import AppPanel from './components/app/AppPanel.vue'

export default {
    components: { AppPanel },
    name: 'App'
}
</script>

<style lang="scss" scoped>

.app-container {
    width: 64vw;
    height: 100%;
    margin: 0 auto;
    @media (min-width: $desktop-min) and (max-width: $desktop-max) {
        width: 75vw;
    }     
    @media (min-width: $tablet-min) and (max-width: $tablet-max) {
        width: 90vw;
    }      
    @media (max-width: $mobile-max) {
        width: 100%;
    } 
}
</style>
