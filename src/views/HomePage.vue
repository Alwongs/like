<template> 
    <main class="main">
        <div class="main-image-block">
            <img :src="require('@/assets/img/jpg/bg_image.jpg')" alt="главное фото">
            <service-list class="service-list-block" />
        </div>

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

.main-image-block {
    position: relative;
    img {
        width: 100%;
        @media (max-width: $mobile-max) {
            display: none;
        }          
    }
}
.service-list-block {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    padding-top: 32px;
    @media (max-width: $mobile-max) {
        position: static;
    }      
}

.post-list-block {
    @media (max-width: $mobile-max) {
        display: none;
    }     
}
</style>