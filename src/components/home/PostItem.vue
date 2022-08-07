<template>
    <li class="post-item">
        <header class="post-header">
            <div class="left">{{ post.postType }}</div>
            <div class="right">{{ post.id }}</div>
        </header>
        <main class="post-body">
            <h3 class="title">{{ post.title }}</h3>
            <p class="body">{{ post.text }}</p>
        </main>
        <footer class="post-footer">

        </footer>
    </li>
</template>

<script>
export default {
    name: 'PostItem',
    props: ['post'],
    methods: {
        deletePost() {
            this.$store.dispatch('removePost', this.post.id)
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
.post-body { 
    p {
        font-style: italic;
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