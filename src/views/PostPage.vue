<template>
    <div class="app-page">
        <p v-if="loading" class="loading">Загрузка...</p>
        <h1>{{ post.title }}</h1>
        <ul class="image-list">
            <li               
                v-for="image in post.imageList"
                class="image-item mr-16"  
                :key="image.url"
            >
                <div class="img-block">
                    <img :src="image.url" :alt="image.name">
                </div>
            </li>
        </ul>            
        <p v-html="post.text"></p>
        <p class="link">
            <a href="#" @click.prevent="$router.go(-1)">
                назад
            </a>
        </p>
    </div>
</template>

<script>

export default {
    name: 'PostPage',
    computed: {
        loading() {
            return this.$store.getters.getProcessing;
        },
        userId() {
            return this.$store.getters.userId;
        },
        post() {
            return this.$store.getters.post;
        },
    },
    async mounted() {
        const id = this.$route.params.id
        await this.$store.dispatch('getPost', id);
    }     
}
</script>

<style lang="scss" scoped>

.img-block {
    height: 200px;
    margin-bottom: 16px;
    img {
        height: 100%;
    }
}
.image-list {
    display: flex;
}


</style>