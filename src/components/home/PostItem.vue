<template>
    <li class="post-item">
        <header class="post-header">
            <div class="left"><h3>{{ post.title }}</h3></div>
            <div class="right">{{ getDate(post.id) }}</div>
        </header>
        <main class="post-body">
            <p v-html="post.text" class="body"></p>
            <p v-if="post.imageList" class="body link">
                фото...
            </p>
        </main>
        <footer class="post-footer">
            <p class="link">
                подробнее
            </p>
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
        getDate(time) {
            moment.locale('ru');
            return moment.unix(time/1000).format('DD.MM.YYYY, HH:mm')
        }
    }
}
</script>

<style lang="scss" scoped>
.post-item {
    background-color: rgba(255, 255, 255, 0.7);
    padding: 5px 15px;
    color: rgb(76, 76, 82);
    cursor: pointer;
    &:hover {
        background-color: rgb(228, 228, 209);      
    }    
}
.post-header {
    display: flex;
    justify-content: space-between;
    min-height: 30px;
    .right {
        font-size: 12px;
    }
}
.post-body { 
    height: 60px;
    overflow: hidden;
    .body {
        font-style: italic;
    }  
    .body.link {
        color: blue;
    }
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
    justify-content: flex-end;
    font-size: 14px; 
    p {
        padding: 0;
        line-height: 14px;
    }
    .link {
        font-style: italic;
        color: blue;
    }
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