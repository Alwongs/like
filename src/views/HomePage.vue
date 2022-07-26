<template> 
    <main class="main">
        <service-list />

        <div class="content-desktop">
            <h1>"ЛАйК"</h1>
            <p>Клуб активного отдыха</p>
        </div>
        <div class="content-mobile">
            <p>Я</p>
            <p>покажу</p>
            <p>где красиво ..</p>
        </div>
    </main>    
</template>

<script>
import ServiceList from '@/components/home/ServiceList.vue'

export default {
    components: { ServiceList },
    name: 'Home'
}
</script>

<style lang="scss" scoped>

.main {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;  
    color: white; 
}
.content-desktop {
    font-size: 44px;    
    h1 {
        padding-left: 50%;
    }
    text-align: right;
    @media (min-width: $desktop-min) and (max-width: $desktop-max) {
        font-size: 38px;  
    }     
    @media (min-width: $tablet-min) and (max-width: $tablet-max) {
        font-size: 34px;  
    }     
    @media (max-width: $mobile-max) {
        display: none;
    }  
}
.content-mobile {
    font-size: 240%;
    left: 0;
    top: 32px;
    padding-top: 32px;
    padding-left: 32px;
    p {
        margin-bottom: 32px;
    }
    @media (min-width: $mobile-max + 1px) {
        display: none;
    }    
}   
</style>