<template>
    <div class="post-page">
        <div class="content">
            <p v-if="loading" class="loading">Загрузка...</p>
            <h1>{{ post.title }}</h1>
            <ul class="image-list">
                <li               
                    v-for="url in post.imageList"
                    class="image-item mr-16"  
                    :key="url"
                >
                    <div class="img-block">
                        <img :src="url" :alt="url">
                    </div>
                </li>
            </ul>            
            <p v-html="post.text"></p>
            <p class="link">
                <router-link :to="{name: 'post-list-page'}">
                    назад
                </router-link>
            </p>            
        </div>
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

.post-page {
    background-color: #fff;
    border-radius: 20px;
    box-shadow: 1px 1px 5px 5px rgba(0, 0, 0, 0.2);
    width: 100%;
    height: 100%;
    padding: 64px;
    @media (min-width: $desktop-min) and (max-width: $desktop-max) {
        padding: 32px;
    }     
    @media (min-width: $tablet-min) and (max-width: $tablet-max) {
        padding: 16px;
    }      
    @media (max-width: $mobile-max) {
        padding: 12px;
        border-radius: 0;
    } 
}
.content {
    height: calc(100vh - 128px - 64px);
    overflow-x: hidden;
    overflow-y: scroll;
    @media (min-width: $desktop-min) and (max-width: $desktop-max) {
        height: calc(100vh - 128px - 32px);
    }     
    @media (min-width: $tablet-min) and (max-width: $tablet-max) {
        height: calc(100vh - 128px - 32px);
    }      
    @media (max-width: $mobile-max) {
        height: calc(100vh - 128px);
    } 
    overflow: auto;
    -ms-overflow-style: none;
    scrollbar-width: none;        
}
.content::-webkit-scrollbar {
    width: 0;
    height: 0;
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