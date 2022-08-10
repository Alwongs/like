<template>
    <li class="post-item">
        <header class="post-header">
            <div 
                class="left"
                :class="{ red: post.postType === 'Анонс' }"                
            >
                {{ post.postType }}</div>
            <div class="right">{{ getDate(post.id) }}</div>
        </header>
        <main class="post-body">
            <h3 class="title">{{ post.title }}</h3>
            <p class="body">{{ post.text }}</p>
        </main>
        <footer class="post-footer">
            <button 
                class="btn btn__blue"
                @click="openForm(post)"
            >
                Редактировать
            </button>
            <button 
                class="btn btn__red" 
                @click="deletePost"
            >
                Удалить
            </button>
        </footer>
    </li>
</template>

<script>
import moment from 'moment';

export default {
    name: 'PostItem',
    props: ['post'],
    methods: {
        deletePost() {
            if (confirm('Лена, ты хочешь удалить этот пост?   (°□°) ')) {
                this.$store.dispatch('removePost', this.post.id)
            }
        },
        openForm() {
            this.$emit('openForm', this.post)
        },
        getDate(time) {
            moment.locale('ru');
            return moment.unix(time/1000).format('DD.MM.YYYY, HH:mm')
        }       
    }
}
</script>

<style lang="scss" scoped>
.post-item {
    font-size: 18px;

    background-color: rgb(230, 237, 230);
    padding: 5px 15px;
    border-bottom: 1px solid lightgrey;
}
.post-header {
    display: flex;
    justify-content: space-between;
    padding: 5px;
    font-size: 14px;
}
.left {
    &.red {
        color: red;
    }    
}

.post-body {   
}
.title {
    font-size: 20px;    
    text-align: center;
    margin-bottom: 8px;
}
.body {
    line-height: 26px;
}
.post-footer {
    display: flex;
    justify-content: space-between; 
    padding: 8px;   
}
.btn {
    font-size: 18px;
    padding: 8px 16px;
    cursor: pointer;
    color: white;
    border: none;
    border-radius: 6px;
    box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.513);
    &__blue {
        background-color: rgb(59, 85, 214);
    }
    &__red {
        background-color: rgb(213, 74, 74);        
    }
}
</style>