<template>
    <form 
        action="#" 
        class="form" 
        @submit.prevent="saveTaskHandler"
    >
        <div class="input-block">
            <input 
                v-model="title"
                type="text" 
                class="input-element"
                placeholder="Введите новую задачу..."
            >
        </div>

        <div class="input-block">
            <input 
                v-model="description"
                type="text" 
                class="input-element"
                placeholder="Опсание..."
            >
        </div>

        <div class="btn-block">
            <button 
                type="submit" 
                class="btn btn-submit" 
                @click.prevent="saveTaskHandler"
            >
                Сохранить
            </button>
        </div>
    </form>
</template>

<script>

export default {
    name: 'CreateTask',
    data() {
        return {
            title: '',
            description: '',
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
        async saveTaskHandler() {
            await this.$store.dispatch('saveTask', {
                title: this.title,
                description: this.description,
                rate: 5,
                isDone: false
            })           
        }
    },     
    async mounted() {

    }     
}
</script>

<style lang="scss" scoped>

.form {
    border: 1px solid green;
    border-radius: 16px;
    padding: 24px;
}
.input-block {
    margin-bottom: 16px;
}
.input-element {
    width: 100%;
    height: 40px;
    margin-right: 16px;
    padding-left: 8px;
    font-size: 18px;
    outline: none;
    border: none;
    border-bottom: 1px solid grey;    
}
.btn-block {
    padding-top: 16px;
    text-align: end;
}
.btn-close {
    margin-right: 16px;
}
.btn-submit {
    background-color: rgb(68, 154, 104);
    color: white;
    margin: 0;
}
</style>