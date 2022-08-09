<template>
    <div class="background-wrapper">
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

                ></textarea>
            </div>
            <div class="btn-block">
                <button class="btn" @click.prevent="closeForm">Закрыть</button>
                <button class="btn btn__green" @click.prevent="savePost">Сохранить</button>
            </div>
        </form>
    </div>
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

.background-wrapper {
    background-color: rgba(0, 16, 29, 0.7); 
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
}
.form {
    width: 900px;  
    position: fixed;
    left: 50%;
    top: 50%; 
    transform: translate(-50%, -50%);      
    background: rgb(118, 159, 195);
    box-shadow: 1px 1px 5px 5px rgba(0, 0, 0, 0.2);     
    border-radius: 10px;
    padding: 16px;
    margin-bottom: 32px;
    @media (min-width: $desktop-min) and (max-width: $desktop-max) {
        width: 800px;  
    }     
    @media (min-width: $tablet-min) and (max-width: $tablet-max) {
        width: 700px;
    }     
    @media (max-width: $mobile-max) {
        width: 100%;
        border-radius: 0; 
    }     
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
    height: 300px;
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