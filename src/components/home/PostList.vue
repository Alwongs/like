<template>
    <p v-if="loading" class="loading">Загрузка...</p>
    <div v-else class="wrapper">
        <h2 class="text-center">Последние отчёты</h2>
        <ul 
            v-if="limitedPostList" 
            class="post-list"
        >
            <post-item 
                v-for="post in limitedPostList" 
                :key="post.id"
                :post="post"
                class="post-item-block"
                @click="goToItem(post)"                
            />
            <li>
                <a 
                    v-if="postList.length > 3"
                    class="look-more-link"
                    @click="$router.push('post-list-page')"
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
        goToItem(post) {
            this.$store.commit('UPDATE_POST', post)
            this.$router.push({name: 'post-page', params: {id: post.id}})
        }
    }, 
}
</script>

<style lang="scss" scoped>

.loading {
    padding-top: 64px;
    text-align: center;
}

.wrapper {
    //background-color: rgb(236, 236, 236);
    padding: 64px;
    @media (min-width: $desktop-min) and (max-width: $desktop-max) {
        padding: 64px;
    }     
    @media (min-width: $tablet-min) and (max-width: $tablet-max) {
        padding: 32px;
    }      
    @media (max-width: $mobile-max) {
        padding: 32px 0;      
    }     
}
.post-item-block {
    height: 200px;
    margin-bottom: 48px;
}
.look-more-link {
    color: $link;
    font-style: italic;
    text-align: center;
    cursor: pointer;
    @media (max-width: $mobile-max) {
        font-size: 18px;
        padding-left: 16px;
    }     
}
</style>