<template>
    <div class="app-container">
        <app-panel /> 
        <div class="page-wrap">
            <router-view />
        </div>       
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
    position: relative;
    background-color: #fff;  
    width: 1200px;
    margin: 0 auto;
    min-height: 100%;
    @media (min-width: $desktop-min) and (max-width: $desktop-max) {
        width: 900px;
    }     
    @media (min-width: $tablet-min) and (max-width: $tablet-max) {
        width: 100%;
    }      
    @media (max-width: $mobile-max) {
        width: 100%;
        //background-color: rgb(222, 230, 238);     
    } 
}
.page-wrap {
    min-height: 100vh;
}
</style>
