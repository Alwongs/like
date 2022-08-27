<template>
    <form 
        action="#" 
        class="form" 
        @submit.prevent="updateTaskHandler"
    >
        <div class="input-block">
            <input 
                v-model="task.title"
                type="text" 
                class="input-element"
                placeholder="Введите новую задачу..."
            >
        </div>

        <div class="input-block">
            <input 
                v-model="task.description"
                type="text" 
                class="input-element"
                placeholder="Опсание..."
            >
        </div>

        <div class="btn-block">
            <button 
                type="submit" 
                class="btn btn-submit" 
                @click.prevent="updateTaskHandler"
            >
                Обновить
            </button>
        </div>
        <button 
            class="btn-close"
            @click="closeEdit"
        >
            &times;
        </button>        
    </form>
</template>

<script>

export default {
    name: 'EditTask',
    props: ['taskForEdit'],
    data() {
        return {
            task: this.taskForEdit
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
        closeEdit() {
            this.$emit('closeEdit')
        },
        async updateTaskHandler() {
            this.$store.dispatch('updateTask', this.task)
            this.$emit('closeForm')          
        }
    },     
    async mounted() {

    }     
}
</script>

<style lang="scss" scoped>

.form {
    z-index: 1;
    background-color: #fff;
    position: absolute;
    left: 0;
    top: 0;
    width: 90%;
    border: 1px solid green;
    border-radius: 16px;
    padding: 24px;
    .btn-close {
        position: absolute;
        right: 8px;
        top: 8px;
        width: 28px;
        height: 28px;
        background-color: #fff;
        border: none;
        border-radius: 50%;
        font-size: 22px;
        cursor: pointer;
        &:hover {
            box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.5);
        }
    }     
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