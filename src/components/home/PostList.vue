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
                @click="openItem"
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
        openItem() {
            alert('thank you :)')
        }
    }, 
}
</script>

<style lang="scss" scoped>

.wrapper {
    padding: 64px;
}
.post-item-block {
    height: 110px;
    margin-bottom: 48px;
    border-radius: 15px;
    box-shadow: 1px 1px 5px 5px rgba(0, 0, 0, 0.2);
}
.look-more-link {
    color: white;
    text-align: center;
    cursor: pointer;
}
</style>