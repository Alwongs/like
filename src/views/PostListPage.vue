<template>
    <div class="post-list-page">
        <div class="content">
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

.post-list-page {
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


.post-item-block {
    margin-bottom: 48px;
}
.look-more-link {
    color: white;
    text-align: center;
}
</style>