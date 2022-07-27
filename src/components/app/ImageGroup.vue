<template>
    <div  
        :style="{'margin-left': `-${getSlideMargin()}%`, width: `${data.length}00%` }"
        class="slider-group"
        @click="toggleSlide"
       
    >
        <div 
            v-for="slide in data" 
            :key="slide.id"
            class="slide"             
        >           
            <img 
                :src="require('@/assets/img/jpg/' + slide.img)" 
                alt="Slide picture"
            >
        </div>
    </div>    
</template>

<script>

export default {
    name: 'ImageGroup',
    props: ['data', 'current_index'],
    methods: {
        getSlideMargin() {
            return this.current_index * 100
        },
        toggleSlide() {
            this.$emit('toggleSlide');
        },
    },
  
}
</script>

<style lang="scss" scoped>

.slider-group {
    height: 100%;

    display: flex;
    transition: all .6s ease;
    @media (max-width: $mobile-max) {
        transition: all .5s ease;
    }   
}
.slide {
    position: relative;
    width: 25%;
    img {
        object-fit: cover;
        width: 100%;
        height: 100%;
    }
}
</style>