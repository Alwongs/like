<template>
    <div class="app-page">
        <p v-if="loading" class="loading">Загрузка...</p>

        <create-post 
            v-if="isCreateFormOpen"
            @closeForm="closeCreateForm"
        />

        <main v-if="!isCreateFormOpen">
            <h1>История событий</h1>

            <button 
                v-if="userId"
                class="btn edit-btn"
                @click="openCreateForm"
            >
                Добавить
            </button>            

            <ul 
                v-if="postList" 
                class="post-list"
            >
                <post-item 
                    v-for="post in postList" 
                    :key="post.id"
                    :post="post"
                    class="post-item-block"
                    @click="goToItem(post.id)"                 
                />
            </ul> 
        </main>
    </div>
</template>

<script>
import CreatePost from '@/components/admin/forms/CreatePost.vue'
import PostItem from '@/components/posts/PostItem.vue'

export default {
    name: 'PostListPage',
    components: {
        CreatePost,
        PostItem
    },
    data() {
        return {
            isCreateFormOpen: false
        }
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
    methods: {
        openCreateForm() {
            this.isCreateFormOpen = true;
        },
        closeCreateForm() {
            this.isCreateFormOpen = false;            
        },        
        goToItem(id) {
            this.$store.commit('UPDATE_POST', {})
            this.$router.push({name: 'post-page', params: {id: id}})
        }
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
.edit-btn {
    color: green;
    border: 1px solid green;
}
</style>