<template>
    <header class="app-panel">
        <div class="nav-panel">
            <div class="logo-block">
                <router-link :to="'/'">
                    ЛАйК
                </router-link>                         
            </div>
            <nav class="nav-wrap" :class="{active: isMenuOpen}">
                <ul class="nav-block">
                    <li 
                        v-for="item in menuItems"
                        :key="item.route"
                        class="nav-item"
                        @click="goTo(item.route)"                    
                    >
                        <router-link 
                            :to="item.route"
                        >
                            {{ item.title }}
                        </router-link>
                    </li>
                    <li 
                        v-if="isUserAuthenticated"
                        class="nav-item"
                        @click="logout()"
                    >
                        Выйти
                    </li>
                </ul>     
            </nav>
            <div 
                class="menu-btn" 
                :class="{opened: isMenuOpen}"
                @click="toggleMenu"
            ></div>
        </div>
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
                    title: 'События',
                    route: '/post-list-page',
                },
                {
                    title: 'Планирование',
                    route: '/plan-page',
                },
            ] :
            [
                {
                    title: 'О нас',
                    route: '/about-page',
                },  
                {
                    title: 'События',
                    route: '/post-list-page',
                },                              
                /*
                {
                    title: 'Вход',
                    route: '/login',
                },
                {
                    title: 'Регистрация',
                    route: '/register',
                },
                */
            ]            
        }
    },    
    data() {
        return {
            isMenuOpen: false
        }
    },
    methods: {
        logout() {
            if (confirm('Вы уверены?')) {
                this.$store.dispatch('signOut');
                this.$router.push('/'); 
                this.isMenuOpen = false;                     
                return                                      
            } else {
                return
            }
        },
        goTo(path) {
            this.$router.push(path);
            this.isMenuOpen = false;
        },
        toggleMenu() {
            this.isMenuOpen = !this.isMenuOpen;
        },       
    }
}
</script>

<style lang="scss" scoped>

.app-panel {
    position: sticky;
    z-index: 3;
    width: 100%;
    left: 0;
    top: 0;
    background-color: rgb(39, 68, 129);
    box-shadow: 0 2px 2px 0 rgba(10, 13, 61, 0.4);
}

.nav-panel {
    display: flex;
    align-content: center;
    justify-content: space-between;
    color: rgb(255, 225, 92);
    line-height: 64px;
    padding: 0 32px;    
    @media (max-width: $mobile-max) {
        padding: 0 16px;
        font-size: 22px;
    }      
}

.nav-wrap {
    @media (max-width: $mobile-max) {
        z-index: 1;
        background-color: rgb(38, 115, 204);
        width: 100%;
        //height: 100%;
        position: absolute;
        left: 0;
        padding: 32px;
        transition: 0.4s;
        transform: translateY(-100%);  
        &.active {
            transform: translateY(0%);
        }              
    }     
}
.nav-block {
    display: flex;
    @media (max-width: $mobile-max) {
        font-size: 28px;
        flex-direction: column;
    }         
}
.nav-item {
    margin-right: 16px;
    cursor: pointer;
    @media (max-width: $mobile-max) {
        width: 100%;
        border-bottom: 1px solid grey;

    }      
}
.menu-btn {
    display: none;
    @media (max-width: $mobile-max) {
        display: block;
        z-index: 2;        
        cursor: pointer;
        position: absolute;
        content: '';
        width: 32px;
        height: 32px;
        right: 16px;
        top: 16px;
        background-image: url('../../assets/img/svg/menu_btn.svg');
        &.opened {
            background-image: url('../../assets/img/svg/menu_close_btn.svg');        
        } 
    }     
}



a {
    color: rgb(255, 231, 124);
}
</style>