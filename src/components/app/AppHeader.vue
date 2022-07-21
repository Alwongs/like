<template>
    <header class="app-header">
        <div class="logo-block" @click="goTo('home')">
            ЛАйК
        </div>
        <ul class="nav-block">
            <li class="nav-item">
                <a href="#" @click="goTo('about-page')">Обо мне</a>
            </li>
            <li class="nav-item">
                <a href="#">Галерея</a>
            </li>
            <li class="nav-item">
                <a href="#">Мероприятия</a>
            </li>
            <li class="nav-item">
                <a href="#">Контакты</a>
            </li>
        </ul>
    </header>
</template>

<script>
export default {
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
    justify-content: space-between;
    color: rgb(255, 225, 92);
    height: 64px;
    line-height: 64px;
    padding: 0 64px;
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