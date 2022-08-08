<template>
    <li class="post-item">
        <header class="post-header">
            <div class="left">{{ post.postType }}</div>
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
            this.$store.dispatch('removePost', this.post.id)
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
    background-color: rgb(219, 236, 217);
    padding: 0 5px;
    border-bottom: 1px solid lightgrey;
}
.post-header {
    display: flex;
    justify-content: space-between;
    padding: 5px;
    font-size: 14px;
}
.post-body {   
}
.title {
    font-size: 18px;    
    text-align: center;
    margin-bottom: 8px;
}
.body {
    font-size: 14px;
}
.post-footer {
    display: flex;
    justify-content: space-between; 
    padding: 8px;   
}
.btn {
    padding: 5px 10px;
    cursor: pointer;
    color: white;
    border: none;
    border-radius: 4px;
    &__blue {
        background-color: blue;
    }
    &__red {
        background-color: red;        
    }
}
</style>