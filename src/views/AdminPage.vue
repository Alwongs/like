<template>
    <div class="profile-page">
        <header class="profile-header">
            <h1>Панель администратора</h1>
            <p>user-id: {{ userId }}</p>
            <hr>
        </header>

        <main class="profile-main">
            <button 
                v-if="!isFormOpen" 
                class="btn-opener"
                @click="openForm"
            >
                + Добавить пост
            </button> 

            <create-event-form 
                v-if="isFormOpen" 
                class="form-block"
                @closeForm="closeForm" 
            />

            <h2>Посты:</h2>
            <ul v-if="postList" class="post-list">
                <post-item 
                    v-for="post in postList" 
                    :key="post.id"
                    :post="post"
                    class="post-item-block"
                />
            </ul>
            <p v-else>Список пуст..</p>
        </main>        
    </div>
</template>

<script>
import CreateEventForm from '@/components/admin/CreateEventForm.vue'
import PostItem from '@/components/admin/PostItem.vue';

export default {
    name: 'AdminPage',
    components: { 
        CreateEventForm,
        PostItem 
    },
    data() {
        return {
            isFormOpen: false,
            data: {}
        }
    },
    computed: {
        userId() {
            return this.$store.getters.userId;
        },
        postList() {
            return this.$store.getters.postList;
        }
    },
    methods: {
        openForm() {
            this.isFormOpen = true;
        },
        closeForm() {
            this.isFormOpen = false;            
        }
    } ,
    async mounted() {
        await this.$store.dispatch('getPostList')
    }       
}
</script>

<style lang="scss" scoped>

.profile-page {
    background-color: #fff;
    border-radius: 10px;
    width: 100%;
    height: 100%;
    padding: 64px;
    @media (max-width: $mobile-max) {
        padding: 16px;
    } 
}
.profile-header {
    margin-bottom: 32px;
}
.btn-opener {
    padding: 5px 10px;
    cursor: pointer;
    margin-bottom: 16px;
}
.post-list {

}
.post-item-block {
    margin-bottom: 48px;
}
</style>