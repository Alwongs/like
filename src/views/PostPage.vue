<template>
    <div class="app-page">
        <p v-if="loading" class="loading">Загрузка...</p>

        <h1>{{ post.title }}</h1>

        <div v-if="post.imageList" class="main-img-block">
            <img 
                :src="post.imageList[0].url" 
                :alt="post.imageList[0].name"
            >
        </div>     

        <p v-html="post.text"></p>
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

.main-img-block {
    text-align: center;
    margin-bottom: 16px;
    img {
        width: 300px;
    }
}
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