<template> 
    <main class="main">
        <service-list class="service-list-block" />

        <post-list class="post-list-block"/>
    </main>    
</template>

<script>
import ServiceList from '@/components/home/ServiceList.vue'
import PostList from '@/components/home/PostList.vue'

export default {
    name: 'Home',
    components: { 
        ServiceList,
        PostList 
    },
    async mounted() {
        await this.$store.dispatch('getPostList')
    }     
}
</script>

<style lang="scss" scoped>

.main {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;  
    color: white; 
}
.service-list-block {
    height: 100%;
}

.post-list-block {
    @media (max-width: $mobile-max) {
        display: none;
    }     
}
</style>