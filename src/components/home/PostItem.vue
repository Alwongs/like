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
            <header>
                <h3>{{ post.title }}</h3>
            </header>
            <main>
                <p v-html="post.text" class="body"></p>
            </main>
            <footer>
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
    //border: 1px solid grey;
    box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.2);
}
.image-block {
    background-color: rgb(225, 225, 225);
    height: 100%;
    width: 30%;
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
    width: 70%;
    height: 100%;
}
header {
    font-size: 16px;
}
main {
    overflow: hidden;
    flex-grow: 1;
    font-size: 14px;
    padding: 8px;
}
footer {
    text-align: end;
    font-size: 14px;
    font-style: italic;
    color: $link;
}

</style>