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
                    О нас
                </router-link>
            </li>
            <li
                class="nav-item"
                :class="{'last-item': !isUserAuthenticated}"
            >
                <router-link :to="'post-list-page'">
                    События
                </router-link>       
            </li>
            <li 
                v-if="isUserAuthenticated" 
                class="nav-item"
            >
                <router-link :to="'profile'">
                    Админ
                </router-link>       
            </li>
            <li 
                v-if="isUserAuthenticated" 
                class="nav-item"
            >
                <div class="btn-logout" @click="logout">
                    Выйти
                </div>       
            </li>
        </ul>
    </header>
</template>

<script>
export default {
    name: 'AppPanel',
    computed: {
        isUserAuthenticated() {
            return this.$store.getters.isUserAuthenticated;
        },         
        menuItems() {
            return this.isUserAuthenticated
                ? [
                {
                    title: 'О нас',
                    route: '/about-page',
                },
                {
                    title: 'Мой кабинет',
                    route: '/profile',
                },
                {
                    title: 'Выйти',
                    route: '/logout',
                },
            ] :
            [
                {
                    title: 'Читать',
                    route: '/books',
                },
                {
                    title: 'Войти',
                    route: '/signin',
                },
                {
                    title: 'Зарегистрироваться',
                    route: '/signup',
                },
            ]            
        }
    },    
    methods: {
        logout() {
            this.$store.dispatch('signOut');
            this.$router.push('/');
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
    line-height: 48px;
    padding: 0 64px;  
    @media (min-width: $tablet-min) and (max-width: $tablet-max) {
        padding: 0 32px;
    }       
    @media (max-width: $mobile-max) {
        font-size: 130%;
        padding: 0 16px;
    } 
}
.nav-block {
    display: flex;    
}
.nav-item {
    margin-right: 16px;
    cursor: pointer;
    &.last-item {
        margin-right: 0;        
    }
}
a {
    color: rgb(255, 225, 92);
}
</style>