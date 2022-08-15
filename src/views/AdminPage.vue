<template>
    <div class="profile-page">
        <header class="profile-header">
            <h1>Панель администратора</h1>
            <p>user-id: {{ userId }}</p>
            <hr>
        </header>

        <main class="profile-main">
            <button 
                v-if="!isCreateFormOpen" 
                class="btn-opener"
                @click="openCreateForm"
            >
                + Добавить пост
            </button> 

            <create-event-form 
                v-if="isCreateFormOpen" 
                class="form-block"
                @closeForm="closeCreateForm" 
            />
            <edit-event-form 
                v-if="isEditFormOpen"
                :postForEdit="post"
                class="form-block"
                @closeForm="closeEditForm" 
            />

            <h2>Посты:</h2>
            <ul v-if="postList" class="post-list">
                <post-item 
                    v-for="post in postList" 
                    :key="post.id"
                    :post="post"
                    class="post-item-block"
                    @openForm="openEditForm"
                />
            </ul>
            <p v-else>Список пуст..</p>
        </main>        
    </div>
</template>

<script>
import CreateEventForm from '@/components/admin/CreateEventForm.vue'
import EditEventForm from '@/components/admin/EditEventForm.vue'
import PostItem from '@/components/admin/PostItem.vue';

export default {
    name: 'AdminPage',
    components: { 
        CreateEventForm,
        EditEventForm,
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

.profile-page {
    position: relative;
    background-color: #fff;
    border-radius: 10px;
    width: 100%;
    height: 100%;
    padding: 64px;
    @media (max-width: $mobile-max) {
        border-radius: 0;        
        padding: 16px;
    } 
}
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