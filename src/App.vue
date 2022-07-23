<template>
    <div class="app-wrapper">
        <app-panel class="flex-item" />
        <div class="app-container">
            <router-view/>
        </div>
        <app-footer class="flex-item" />
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

<style lang="scss" scoped>

.app-wrapper {
    height: 100%;
    display: flex;
    flex-direction: column;
}
.app-container {
    flex: 1 1 auto;
    position: relative;
    width: 64vw;
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
.flex-item {
    flex: 0 0 64px;
}
</style>
