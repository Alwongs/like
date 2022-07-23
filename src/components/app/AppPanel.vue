<template>
    <header class="app-header">
        <div class="logo-block">
            <router-link :to="'/'">
                ЛАйК
            </router-link>                         
        </div>
        <ul class="nav-block">
            <li class="nav-item">
                <router-link :to="'about-page'">
                    Обо мне
                </router-link>
            </li>
            <li class="nav-item">
                <router-link :to="'#'">
                    Галерея
                </router-link>       
            </li>
        </ul>
    </header>
</template>

<script>
export default {
    name: 'AppPanel',
    methods: {
        goTo(routeName) {
            this.$router.push({name: routeName});
        }
    }
}
</script>

<style lang="scss" scoped>

.app-header {
    display: flex;
    align-content: center;
    justify-content: space-between;
    color: rgb(255, 225, 92);
    line-height: 64px;
    padding: 0 64px;  
    @media (min-width: $tablet-min) and (max-width: $tablet-max) {
        padding: 0 32px;
    }       
    @media (max-width: $mobile-max) {
        padding: 0 16px;
    } 
}
.nav-block {
    display: flex;    
}
.nav-item {
    margin-right: 16px;
}
a {
    color: rgb(255, 225, 92);
}
</style>