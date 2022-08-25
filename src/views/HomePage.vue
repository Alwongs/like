<template> 
    <main class="main">
        <div class="main-image-block">
            <img 
                :src="require('@/assets/img/jpg/main_image.jpg')" 
                alt="главное фото"
            >

            <div class="slogan">
                <h1>Like</h1>
                <p>Клуб активного отдыха</p>
            </div>

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

.main {
    min-height: 100vh;
}

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

.slogan {
    width: 40%;
    height: 30%;
    position: absolute;
    right: 5%;
    bottom: 5%;
    color: white;
    h1 {
        text-align: center;
        font-size: 36px;
    }
    p {
        text-align: center;        
        color: white;
        font-size: 32px;
    }
    @media (min-width: $desktop-min) and (max-width: $desktop-max) {
        h1 {
            font-size: 34px;
        }
        p {
            font-size: 30px;
        }
    }     
    @media (min-width: $tablet-min) and (max-width: $tablet-max) {
        h1 {
            font-size: 32px;
        }
        p {
            font-size: 26px;
        }
    }     
    @media (max-width: $mobile-max) {
        position: static;
        width: 100%;
        height: fit-content;
        padding: 16px;
        h1 {
            color: rgb(29, 127, 255);            
            font-size: 44px;
            font-weight: 700;
            margin-bottom: 16px;
        }
        p {
            color: rgb(0, 85, 196); 
            font-weight: normal;            
            font-style: italic;
            margin: 0;
        }        

    }       
}
.post-list-block {
    @media (max-width: $mobile-max) {
        //display: none;
    }     
}
</style>