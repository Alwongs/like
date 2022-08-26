<template>
    <div class="app-page">
        <p v-if="loading" class="loading">Загрузка...</p>

        <main v-if="!isCreateFormOpen">
            <h1>Планирование задач</h1>
            <form action="#" class="form" @submit.prevent="saveTaskHandler">
                <input 
                    type="text" 
                    class="input-task"
                >
                <button 
                    type="submit" 
                    class="btn btn-submit" 
                    @click.prevent="saveTaskHandler"
                >
                    Сохранить
                </button>
            </form>

        </main>
    </div>
</template>

<script>

export default {
    name: 'PostListPage',
    components: {

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

    },     
    async mounted() {

    }     
}
</script>

<style lang="scss" scoped>

.form {
    display: flex;
}
.input-task {
    flex: 1 1 100%;
    height: 40px;
    margin-right: 16px;
    padding-left: 8px;
    outline: none;
    border: none;
    border-bottom: 1px solid grey;    
}
.btn-submit {
    flex: 0 0 auto;
}
</style>