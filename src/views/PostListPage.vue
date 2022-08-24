<template>
    <div class="app-page">
        <p v-if="loading" class="loading">Загрузка...</p>
        <ul 
            v-if="postList" 
            class="post-list"
        >
            <post-item 
                v-for="post in postList" 
                :key="post.id"
                :post="post"
                class="post-item-block"
            />
        </ul> 
    </div>
</template>

<script>
import PostItem from '@/components/posts/PostItem.vue'

export default {
    name: 'PostListPage',
    components: {
        PostItem
    },
    computed: {
        loading() {
            return this.$store.getters.getProcessing;
        },
        userId() {
            return this.$store.getters.userId;
        },
        postList() {
            return this.$store.getters.postList;
        },
    },
    async mounted() {
        await this.$store.dispatch('getPostList')
    }     
}
</script>

<style lang="scss" scoped>

.post-item-block {
    margin-bottom: 48px;
    height: 200px;
}
.look-more-link {
    color: white;
    text-align: center;
}
</style>