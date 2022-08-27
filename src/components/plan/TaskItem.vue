<template>

    <li class="task-item">
        <edit-task 
            v-if="isEditOpen"
            :taskForEdit="task"
            @closeEdit="closeEdit"
        />
        <div 
            v-if="isDescriptionOpen && task.description !== ''" 
            class="modal-description"
        >
            {{ task.description }}
            <button 
                class="btn-close"
                @click="closeDescription"
            >
                &times;
            </button>
        </div>    
        <div 
            class="info-block"
            @click="openDescription"
        >
            <div class="number">
                {{ number }}.
            </div>
            <div 
                v-if="!isEditOpen" 
                class="title"
            >
                {{ task.title }}
            </div>
            <div 
                v-else             
                class="input-block"
            >
                <input 
                    v-model="task.title" 
                    type="text" 
                    class="input-title"
                    @keyup.enter="updateTask"
                > 
                <button @click="updateTask">
                    &#10004;
                </button>                
            </div>
        </div>

        <div class="btn-block">
            <span 
                v-for="n in task.rate"
                :key="n"
                class="rate-filled"
            >
                &#9733;
            </span>            
            <span 
                v-for="n in (5 - task.rate)"
                :key="n"
                class="rate"
            >
                &#9734;
            </span> 
            <button 
                class="extra-small-btn btn-down" 
                title="Rate Down"
                @click="moveDown"
            >
                -
            </button>
            <button 
                class="extra-small-btn btn-up" 
                title="Rate Up"
                @click="moveUp"
            >
                +
            </button>
            <button 
                class="small-btn btn-edit" 
                @click.prevent="openEdit"
            >
                Red
            </button>
            <button 
                class="small-btn btn-delete" 
                @click.prevent="deleteTask"
            >
                Del
            </button>
        </div>
    </li>  
</template>

<script>
import EditTask from '@/components/plan/EditTask.vue'

export default {
    name: 'TaskItem',
    components: { EditTask },
    props: ['taskProp', 'number'],
    data() {
        return {
            isEditOpen: false,
            isDescriptionOpen: false,
            task: this.taskProp
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
        openDescription() {
            if (this.task.description === '') {
                alert('нет описания')
                return
            }
            this.isDescriptionOpen = true
        },
        closeDescription() {
            this.isDescriptionOpen = false
        },
        openEdit() {
            this.isEditOpen = !this.isEditOpen
        },
        closeEdit() {
            this.isEditOpen = false
        },
        async moveDown() {
            if (this.task.rate > 0) {
                this.task.rate = this.task.rate - 1
                await this.$store.dispatch('updateTask', this.task)
                await this.$store.dispatch('getTaskList')
            }
        },
        async moveUp() {
            if (this.task.rate < 5) {
                this.task.rate = this.task.rate + 1
                await this.$store.dispatch('updateTask', this.task)
                await this.$store.dispatch('getTaskList')
            }
        },
        updateTask() {
            this.$store.dispatch('updateTask', this.task)
            this.isEditOpen = false
        },
        deleteTask() {
            if (confirm('Are you shure?')) {
                this.$store.dispatch('removeTask', this.task.id)
            }
        }
    }
}
</script>

<style lang="scss" scoped>

.modal-description {
    z-index: 1;
    position: absolute;
    width: 50%;
    right: 15%;
    top: 16px;
    border-radius: 16px;
    padding: 32px;
    background-color: #fff;
    box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.4);
    button {
        position: absolute;
        right: 4px;
        top: 4px;
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

.task-item {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 16px;
    background-color: rgb(198, 225, 206);
    border: 1px solid rgb(170, 192, 170);
    box-shadow: 1px 1px 2px 1px rgba(0, 0, 0, 0.3);
    min-height: 64px;
    border-radius: 10px;
    margin-bottom: 32px;
}
.info-block {
    display: flex;
    align-items: center;
    flex: 1 1 600px;
    overflow: hidden;
    cursor: pointer;
    @media (min-width: $desktop-min) and (max-width: $desktop-max) {
        flex: 1 1 400px;
    }     
    @media (min-width: $tablet-min) and (max-width: $tablet-max) {
        flex: 1 1 300px;
    }     
    @media (max-width: $mobile-max) {
        flex: 1 1 200px;
    }     
}
.number {
    font-size: 18px;
    font-weight: 300;
    margin-right: 8px;
    @media (max-width: $mobile-max) {
        display: none;
    }     
}
.title {
    font-size: 22px;
    margin-right: 16px; 
    white-space: nowrap;
    overflow: hidden;        
    text-overflow: ellipsis; 
    padding: 5px;
    flex: 1 1 600px; 
    @media (min-width: $desktop-min) and (max-width: $desktop-max) {
        flex: 1 1 400px;
    }     
    @media (min-width: $tablet-min) and (max-width: $tablet-max) {
        flex: 1 1 200px;
    }     
    @media (max-width: $mobile-max) {
        flex: 1 1 auto;
        margin: 0;
    }              
} 
.input-block {
    display: flex;
    height: 32px;
    width: 282px;
    margin-right: 16px; 
    input {
        align-self: center;
        width: calc(100% - 32px);
        height: 100%;
        border: none;
        padding-left: 16px;
        font-size: 18px;
    }
    button {
        background-color: rgb(47, 198, 47);
        color: white;
        width: 32px;
        height: 32px;
        font-size: 22px;
        cursor: pointer;
        border: none;
    }       
}

.rate {
    color: rgba(255, 2, 2, 0.202);
    @media (max-width: $mobile-max) {
        display: none;
    }      
}
.rate-filled {
    color: red;
    @media (max-width: $mobile-max) {
        display: none;
    }     
}

.btn-block {
    flex: 0 0 auto;   
}
.btn-down {
    width: 40px;
    height: 30px;
    margin: 0 8px;
    @media (max-width: $mobile-max) {
        display: none;
    }     
}
.btn-up {
    width: 40px;
    height: 30px;
    margin-right: 16px;
    @media (max-width: $mobile-max) {
        display: none;
    } 
}

.small-btn {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: none;
    font-weight: 500;
    box-shadow: 1px 1px 3px 0 rgba(0, 0, 0, 0.5);
    cursor: pointer;
}
.extra-small-btn {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: none;
    box-shadow: 1px 1px 3px 0 rgba(0, 0, 0, 0.5);
    cursor: pointer;    
}

.btn-edit {
    margin-right: 8px;
    background-color: rgb(227, 238, 255);
    border: 1px solid rgba(89, 133, 204, 0.5); 
    color: blue; 
    &:hover {
        background-color: rgb(71, 125, 232);
        color: white;        
    }  
}
.btn-delete {
    background-color: rgb(253, 226, 226);
    border: 1px solid rgba(204, 89, 89, 0.5);
    color: red;
    &:hover {
        background-color: rgb(232, 71, 71) ;
        color: white;        
    }
}
</style>