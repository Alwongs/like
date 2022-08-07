<template>
    <div class="wrapper">
        <p v-if="loading" class="loading">Загрузка...</p>
        <ul 
            v-if="limitedPostList" 
            class="post-list"
        >
            <post-item 
                v-for="post in limitedPostList" 
                :key="post.id"
                :post="post"
                class="post-item-block"
            />
            <li>
                <a 
                    v-if="postList.length > 3"
                    class="look-more-link"
                    @click.prevent="$router.push('post-list-page')"
                >
                    Посмотреть ещё
                </a>
            </li>
        </ul>        
    </div>
</template>

<script>
import PostItem from '@/components/home/PostItem.vue'

export default {
    name: 'PostList',
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
        limitedPostList() {
            return this.$store.getters.limitedPostList;
        }
    },
    methods: {
    }, 
}
</script>

<style lang="scss" scoped>

.wrapper {
    //background-color: rgba(255, 255, 255, 0.3);
    padding: 64px;
}
.post-item-block {
    margin-bottom: 48px;
    border-radius: 15px;
}
.look-more-link {
    color: white;
    text-align: center;
    cursor: pointer;
}
</style>