<template>
    <form class="form">
        <div class="form-item">
            <input v-model="data.postType" type="text" class="title" placeholder="тип поста">
        </div>
        <div class="form-item">
            <input v-model="data.eventType" type="text" class="title" placeholder="тип события">
        </div>
        <div class="form-item">
            <input v-model="data.title" type="text" class="title" placeholder="Название">
        </div>
        <div class="form-item">
            <input v-model="data.text" type="text" class="text" placeholder="текст">
        </div>
        <button class="btn" @click.prevent="savePost">Сохранить</button>
        <button class="btn" @click.prevent="closeForm">Закрыть</button>
    </form>
</template>

<script>
export default {
    name: 'CreateEventForm',
    data() {
        return {
            data: {
                postType: 'Поход',
                eventType: 'Анонс',
                title: 'тестовый тайтл',
                text: 'тестовый текст',
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
button {
    background-color: #fff;
    padding: 5px 10px;
    margin-top: 16px;
}
</style>