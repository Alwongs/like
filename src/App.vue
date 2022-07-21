<template>
    <app-header />
    <router-view/>
</template>

<script>
import AppHeader from './components/app/AppHeader.vue'

export default {
  components: { AppHeader },
    name: 'App'
}
</script>

<style lang="scss" scoped>

.app-container {
    width: 830px;
    margin: 0 auto;
    padding-top: 64px;
    @media (min-width: $desktop-min) and (max-width: $desktop-max) {
        width: 700px;
    }     
    @media (min-width: $tablet-min) and (max-width: $tablet-max) {
        width: 630px;
    }      
    @media (max-width: $mobile-max) {
        width: 100%;
    } 
}
</style>
