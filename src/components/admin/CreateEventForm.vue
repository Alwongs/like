<template>
    <form class="form">
        <h2 class="form-title">Создание нового поста</h2>
        <div class="form-item">
            <input 
                v-model="data.postType" 
                class="title" 
                placeholder="тип поста.. (анонс, отчёт..)"
            >
        </div>
        <div class="form-item">
            <input 
                v-model="data.eventType" 
                class="title" 
                placeholder="тип события.. (экскурсия, поход, фотосессия..)"
            >
        </div>
        <div class="form-item">
            <input 
                v-model="data.title" 
                class="title" 
                placeholder="Название поста"
            >
        </div>
        <div class="form-item">
            <textarea 
                v-model="data.text" 
                type="text" 
                class="text" 
                placeholder="Введите текст.." 
                cols="30" 
                rows="10"
            ></textarea>
        </div>
        <div class="btn-block">
            <button class="btn" @click.prevent="closeForm">Закрыть</button>
            <button class="btn btn__green" @click.prevent="savePost">Сохранить</button>
        </div>
    </form>
</template>

<script>
export default {
    name: 'CreateEventForm',
    data() {
        return {
            data: {
                postType: '',
                eventType: '',
                title: '',
                text: '',
            }
        }
    },
    computed: {
        userId() {
            return this.$store.getters.userId;
        }
    },
    methods: {
        async savePost() {
            await this.$store.dispatch('savePost', this.data);
            this.$emit('closeForm')
        },
        closeForm() {
            this.$emit('closeForm')
        }
    } ,    
}
</script>

<style lang="scss" scoped>

.form {
    background: rgb(118, 159, 195);
    border-radius: 10px;
    padding: 16px;
    margin-bottom: 32px;
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