<template>     
    <main class="main">
        Я покажу тебе где красиво..
    </main>
</template>

<script>


export default {
    name: 'Home'
}
</script>

<style lang="scss" scoped>

.main {
    position: absolute;
    bottom: 32px;
    right: 0;
    color: white;
    font-size: 48px;
    @media (min-width: $desktop-min) and (max-width: $desktop-max) {
        font-size: 44px;
    }     
    @media (min-width: $tablet-min) and (max-width: $tablet-max) {
        font-size: 32px;
    }      
    @media (max-width: $mobile-max) {
        font-size: 28px;
    }    
}
</style>