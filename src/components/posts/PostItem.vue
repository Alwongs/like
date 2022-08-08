<template>
    <li class="post-item">
        <header class="post-header">
            <div 
                class="left"
                :class="{ red: post.eventType === 'Анонс' }"
            >
                {{ post.eventType }}
            </div>

            <div class="right">
                {{ getDate(post.id) }}
            </div>
        </header>
        <main class="post-body">
            <h3 class="title">{{ post.title }}</h3>
            <p>{{ post.text }}</p>
        </main>
        <footer class="post-footer">

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
    border-bottom: 1px solid lightgrey;
    color: rgb(76, 76, 82);
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
    h3 {
        font-size: 18px;    
        text-align: center;
        margin-bottom: 8px;
    }    
    p {
        font-style: italic;
        font-size: 14px;        
    }  
}

.post-footer {
    display: flex;
    justify-content: space-between; 
    padding: 8px;   
}

</style>