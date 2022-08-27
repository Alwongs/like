<template>
    <div class="app-page">
        <p v-if="loading" class="loading">Загрузка...</p>

        <h1>Список задач</h1>

        <div class="btn-block">
            <button 
                v-if="!isCreateFormOpen"
                class="btn btn-create"
                @click="openCreateForm"
            >
                Создать
            </button> 
            <button 
                v-else
                class="btn btn-close"
                @click="closeCreateForm"
            >
                Закрыть
            </button> 
        </div>

        <create-task 
            v-if="isCreateFormOpen"
            @closeForm="closeCreateForm"
            class="form-block"
        />

        <main>
            <ul class="task-list">
                <task-item 
                    v-for="(task, index) in taskList" 
                    :key="task.id"
                    :taskProp="task" 
                    :number="(Number(index) + 1)"  
                                 
                />
            </ul>
        </main>
    </div>
</template>

<script>
import CreateTask from '@/components/plan/CreateTask.vue'
import TaskItem from '@/components/plan/TaskItem.vue'

export default {
    name: 'PostListPage',
    components: {
        CreateTask,
        TaskItem
    },
    data() {
        return {
            isCreateFormOpen: false,
        }
    },
    computed: {
        loading() {
            return this.$store.getters.getProcessing;
        },
        userId() {
            return this.$store.getters.userId;
        },
        taskList() {
            return this.$store.getters.taskList;
        },
    },
    methods: {
        openCreateForm() {
            this.isCreateFormOpen = true
        },
        closeCreateForm() {
            this.isCreateFormOpen = false
        }
    },     
    async mounted() {
        await this.$store.dispatch('getTaskList')
    }     
}
</script>

<style lang="scss" scoped>
.loading {
    position: absolute;
    left: 0;
    top: 0;
    padding: 32px;
    font-size: 20px;
    font-weight: normal;
    color: blue;
}
.form-block {
    margin-bottom: 64px;
}
.task-list {
    //border: 1px solid lightgrey;
    
}
.btn-block {
    text-align: end;
    margin-bottom: 32px;
}
.btn-create {
    border: 1px solid green;
    color: green;
}
.btn-close {
    border: 1px solid grey;
}
</style>