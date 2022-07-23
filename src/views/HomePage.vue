<template> 
    <main class="main">
        <div class="content-desktop">
            Я покажу тебе где красиво..
        </div>
        <div class="content-mobile">
            <p>Я</p>
            <p>покажу</p>
            <p>где красиво ..</p>
        </div>
    </main>    
</template>

<script>


export default {
    name: 'Home'
}
</script>

<style lang="scss" scoped>

.main {
    position: relative; 
    height: 100%;  
    color: white; 
}

.content-desktop {
    position: absolute;
    font-size: 44px;
    right: 0;
    bottom: 32px;
    padding-left: 16px;
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