<template>     
    <footer class="footer">
        Я покажу тебе где красиво..
    </footer>
</template>

<script>


export default {
    name: 'Home'
}
</script>

<style lang="scss" scoped>

.footer {
    position: absolute;
    right: 5vw;
    bottom: 0;
    color: white;
    font-size: 64px;
    height: 25vh;
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