<template>
    <app-panel />
    <div class="app-container">
        <router-view />
        <app-footer />
    </div>
</template>

<script>
import AppPanel from './components/app/AppPanel.vue'
import AppFooter from './components/app/AppFooter.vue'

export default {
    components: { 
        AppPanel, 
        AppFooter 
    },
    name: 'App'
}
</script>

<style lang="scss">

.app-container {
    background-color: #fff;  
    width: 1200px;
    margin: 0 auto;
    padding-top: 64px;
    min-height: 100%;
    @media (min-width: $desktop-min) and (max-width: $desktop-max) {
        width: 900px;
    }     
    @media (min-width: $tablet-min) and (max-width: $tablet-max) {
        width: 100%;
    }      
    @media (max-width: $mobile-max) {
        width: 100%;
        background-color: rgb(29, 71, 160);;        
    } 
}
</style>
