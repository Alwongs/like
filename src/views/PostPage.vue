<template>
    <div class="app-page">
        <p v-if="loading" class="loading">Загрузка...</p>
        <p v-if="loading" class="loading">Удаление...</p>

        <edit-post 
            v-if="isEditFormOpen"
            :postForEdit="post"
            @closeForm="closeEditForm"
        />  

        <main v-if="!isEditFormOpen">
            <h1>{{ post.title }}</h1>
            <div class="btn-block">
                <button 
                    v-if="userId"
                    class="btn edit-btn"
                    @click="openEditForm"
                >
                    Редактировать
                </button>
                <button 
                    v-if="userId"
                    class="btn delete-btn"
                    @click="deletePost"
                >
                    Удалить
                </button>
            </div>

            <div v-if="post.imageList" class="main-img-block">
                <img 
                    v-if="post.imageList[0]"                
                    :src="post.imageList[0].url" 
                    :alt="post.imageList[0].name"
                >
            </div>     

            <p v-html="post.text"></p>
            <ul class="image-list">
                <li               
                    v-for="image in post.imageList"
                    class="image-item mr-16"  
                    :key="image.url"
                >
                    <div class="img-block">
                        <img :src="image.url" :alt="image.name">
                    </div>
                </li>
            </ul>         
            <p class="link">
                <a href="#" @click.prevent="$router.go(-1)">
                    назад
                </a>
            </p>
        </main>       
    </div>
</template>

<script>
import EditPost from '@/components/admin/forms/EditPost.vue'

export default {
    name: 'PostPage',
    components: {
        EditPost,
    },    
    data() {
        return {
            isEditFormOpen: false
        }
    },
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
    methods: {
        async deletePost() {
            if (confirm('Лена, ты правда хочешь удалить этот пост???   (°□°) ')) {
                if (this.post.imageList) {
                    this.post.imageList.forEach(image => {
                        this.$store.dispatch('deleteImage', image.name)
                    });
                }
                await this.$store.dispatch('removePost', this.post.id)
                this.$router.push({name: 'post-list-page'})
            }
        },        
        openEditForm() {
            this.$store.commit('UPDATE_POST_IMAGE_LIST', this.post.imageList || [])
            this.isEditFormOpen = true;
        },
        closeEditForm() {          
            this.isEditFormOpen = false;            
        },
    },
    async mounted() {
        const id = this.$route.params.id
        await this.$store.dispatch('getPost', id);
    }    
     
}
</script>

<style lang="scss" scoped>

.main-img-block {
    text-align: center;
    margin-bottom: 16px;
    img {
        width: 300px;
    }
}
.img-block {
    height: 100px;
    margin-bottom: 16px;
    img {
        height: 100%;
    }
}
.image-list {
    display: flex;
}
.btn-block {
    display: flex;
    justify-content: space-between;
}
.edit-btn {
    color: blue;
    border: 1px solid blue;
}
.delete-btn {
    color: red;
    border: 1px solid red;
}

</style>