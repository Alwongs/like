<template>
    <li class="post-item">
        <div class="image-block">
            <img 
                v-if="post.imageList"
                :src="post.imageList[0].url" 
                :alt="post.imageList[0].name"
            >
        </div>


        <div class="text-block">
            <header class="border-red">
                <h3>{{ post.title }}</h3>
            </header>
            <main class="border-red">
                <p v-html="post.text" class="body"></p>
            </main>
            <footer class="border-red">
                подробнее
            </footer>
        </div>
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
    display: flex;
    background-color: rgba(255, 255, 255, 0.7);
    padding: 15px;
    color: rgb(76, 76, 82);
    cursor: pointer;   
    border-bottom: 1px solid grey;
}
.image-block {
    height: 100%;
    width: 40%;
    overflow: hidden;
    text-align: center;
    img {
        width: auto;
        height: 100%;
    }
}
.text-block {
    display: flex;
    flex-direction: column;
    padding-left: 8px;
    width: 60%;
    height: 100%;
}
main {
    overflow: hidden;
}

</style>