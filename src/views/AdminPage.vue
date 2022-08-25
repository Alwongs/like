<template>
    <div class="app-page">   
        <header class="profile-header">
            <h1>Панель администратора</h1>
            <p>user-id: {{ userId }}</p>
            <hr>
        </header>

        <create-post 
            v-if="isCreateFormOpen"
            @closeForm="closeCreateForm"
        />
        <edit-post 
            v-if="isEditFormOpen"
            :postForEdit="post"
            @closeForm="closeEditForm"
        /> 

        <main v-if="!isAnyFormOpen" class="profile-main">
            <button 
                v-if="!isCreateFormOpen" 
                class="btn-opener"
                @click="openCreateForm"
            >
                + Добавить пост
            </button> 

            <h2>Посты:</h2>
            <ul v-if="postList" class="post-list">
                <post-item 
                    v-for="post in postList" 
                    :key="post.id"
                    :post="post"
                    class="post-item-block"
                    @openEditForm="openEditForm(post)"
                />
            </ul>
            <p v-else>Список пуст..</p>
        </main>
    </div>
</template>

<script>
import CreatePost from '@/components/admin/forms/CreatePost.vue'
import EditPost from '@/components/admin/forms/EditPost.vue'
import PostItem from '@/components/admin/PostItem.vue';

export default {
    name: 'AdminPage',
    components: { 
        CreatePost,
        EditPost,
        PostItem
    },
    data() {
        return {
            isCreateFormOpen: false,
            isEditFormOpen: false,
            post: {},
        }
    },
    computed: {
        isAnyFormOpen() {
            if (this.isCreateFormOpen || this.isEditFormOpen) {
                return true
            } else {
                return false
            }
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

        openEditForm(post) {
            this.$store.commit('UPDATE_POST_IMAGE_LIST', post.imageList || [])
            this.post = post
            this.isEditFormOpen = true;
        },
        closeEditForm() {          
            this.isEditFormOpen = false;            
        },
    } ,
    async mounted() {
        await this.$store.dispatch('getPostList')
    }    

}
</script>

<style lang="scss" scoped>

.profile-header {
    margin-bottom: 32px;
}
.btn-opener {
    font-size: 16px;
    padding: 10px 20px;
    cursor: pointer;
    margin-bottom: 16px;
    box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.3);
    border-radius: 5px;
    border: none;
    @media (max-width: $mobile-max) {
        padding: 15px 0;        
        font-size: 22px;
        width: 100%;       
    }     
}
.post-list {

}
.post-item-block {
    margin-bottom: 48px;
}
</style>