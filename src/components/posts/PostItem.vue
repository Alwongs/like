<template>
    <li class="post-item">
        <header class="post-header">
            <div 
                class="left"
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
            <button 
                class="btn btn__blue"
                @click="think"
            >
                Резерв
            </button>
            <button 
                class="btn btn__red" 
                @click="book"
            >
                Забронировать
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
        book() {
            alert('Еще не готово! ))')
        },
        think() {
            alert('Тут подумть надо :/')
        },
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
    @media (max-width: $mobile-max) {
        padding: 5px 0;
    }     
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
        font-size: 20px;    
        text-align: center;
        margin-bottom: 12px;
    }    
    p {
        font-size: 18px;   
        line-height: 26px;     
    }  
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
        background-color: rgb(8, 130, 30);        
    }
}
</style>