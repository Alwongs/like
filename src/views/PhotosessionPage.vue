<template>
    <div class="app-page">
        <h1>Фотосессии</h1>

        <div class="slider-wrap">
            <app-slider 
                :data="$store.getters.photosession"
                :isAutoSlider="false"
                :sliding="sliding"
                @updateTrigger="updateTrigger"
                class="slider"
            />
        </div>

        <p>💠 Скрипинские Кучуры - эта местность, буквально завалина монолитными глыбами кварцевого песчаника, их будто там раскидал огромный великан.</p>        

        <p>Именно так, выглядела наша земля в период палеогена. Под воздействием ветра воды, солнца и холода за миллионы лет, каменные глыбы приобрели причудливые формы и с хорошей фантазией в них можно рассмотреть и того же самого великана, и его трон, и черепаху, и свинью и огромное кофейное зерно 👀</p>

        <p>А ещё главной особенностью Скрипинского урочища является неповторимый ландшафт и открывающиеся взору чумовой вид 🤗<br>В этом месте таится особая энергетика, там люди заряжаются жизненной энергией на долгое время 😌</p>

        <h3>️️Программа похода:</h3>
        <ul class="point-list">
            <li>- Выезд в 9.30 от речпорта (кольцо).</li>
            <li>- Дорога 2 часа</li>
            <li>- Пеший поход около 8 километров</li>
            <li>- Перекус на середине маршрута</li>
            <li>- В конце маршрута горячий обед</li>
        </ul>
    </div>
</template>

<script>
import AppSlider from '@/components/app/AppSlider.vue'
import swiperMixin from '@/mixins/swiper.mixin.js'

export default {
    name: 'ExcursionPage',
    mixins: [swiperMixin],
    components: {
        AppSlider
    },
    data() {
        return {
            sliderNumber: 0 // номер слайдера на странице начиная с 0.
        }
    } 
}
</script>

<style lang="scss" scoped>

.point-list {
    margin-bottom: 16px;
   
}
.slider-wrap {
    height: 700px;
    margin-bottom: 16px;
    @media (max-width: $mobile-max) {
        height: 500px;
    }      
}
.slider {
    width: 465px;
    margin: 0 auto;
    @media (min-width: $desktop-min) and (max-width: $desktop-max) {
        width: 400px;
    }     
    @media (min-width: $tablet-min) and (max-width: $tablet-max) {
        width: 300px;
    }      
    @media (max-width: $mobile-max) {
        width: 50%;;
    }     
}
</style>