<template>
    <div class="background-wrapper">
        <form class="form">
            <p v-if="loading" class="loading">Обновление поста...</p>

            <h2 class="form-title">Редактирование</h2>
            <div class="form-item">
                <input 
                    v-model="post.postType" 
                    class="title" 
                    placeholder="тип поста.. (анонс, отчёт..)"
                >
            </div>
            <div class="form-item">
                <input 
                    v-model="post.eventType" 
                    class="title" 
                    placeholder="тип события.. (экскурсия, поход, фотосессия..)"
                >
            </div>
            <div class="form-item">
                <input 
                    v-model="post.title" 
                    class="title" 
                    placeholder="Название поста"
                >
            </div>
            <div class="form-item">
                <textarea 
                    v-model="post.text" 
                    type="text" 
                    class="text" 
                    placeholder="Введите текст.." 
                    cols="30" 
                    rows="10"
                ></textarea>
            </div>
            <div class="btn-block">
                <button class="btn" @click.prevent="closeForm">Закрыть</button>
                <button class="btn btn__green" @click.prevent="updatePost">Сохранить</button>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    name: 'CreateEventForm',
    props: ['postForEdit'],
    data() {
        return {
            post: {}
        }
    },
    computed: {
        loading() {
            return this.$store.getters.getProcessing
        },
        userId() {
            return this.$store.getters.userId;
        }
    },
    methods: {
        async updatePost() {
            this.$store.commit('SET_PROCESSING', true);
            await this.$store.dispatch('updatePost', this.post);
            this.$store.commit('SET_PROCESSING', false);            
            this.$emit('closeForm')
        },
        closeForm() {
            this.$emit('closeForm')
        }
    }, 
    mounted() {
        this.post = this.postForEdit;
    }
}
</script>

<style lang="scss" scoped>

.background-wrapper {
    background-color: rgba(0, 16, 29, 0.7); 
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
}
.form {
    width: 600px;
    height: 550px;   
    position: absolute;
    left: 50%;
    top: 50%; 
    transform: translate(-50%, -50%);      
    background: rgb(118, 159, 195);
    box-shadow: 1px 1px 5px 5px rgba(0, 0, 0, 0.2);     
    border-radius: 10px;
    padding: 16px;
    margin-bottom: 32px;
    @media (max-width: $mobile-max) {
        width: 100%;
        border-radius: 0; 
    }     
}
.loading {
    color: white;
}
.form-title {
    color: white;
}
.form-item > input {
    width: 100%;
    height: 40px;
    margin-bottom: 16px;
    border-radius: 5px;
    padding-left: 8px;
}
textarea {
    width: 100%;
    margin-bottom: 16px;
    padding: 8px;
}
.btn-block {
    display: flex;
    justify-content: space-between;
}
.btn {
    padding: 7px 15px;
    border: none;
    border-radius: 5px;
    box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.3);  
            border: 1px solid grey; 
    cursor: pointer; 
    &__green {
        background-color: rgb(56, 146, 68);
        border: 1px solid white;
        color: white;
    }
}

</style>