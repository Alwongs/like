<template>
    <div class="tracking-page">
        <div class="content">
            <p>💠 Скрипинские Кучуры - эта местность, буквально завалина монолитными глыбами кварцевого песчаника, их будто там раскидал огромный великан.</p>

            <div class="slider-wrap">
                <app-slider 
                    :data="$store.getters.tracking"
                    :isAutoSlider="false"
                    :sliding="sliding"
                    @updateTrigger="updateTrigger"
                    class="slider"
                />
            </div>

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

.tracking-page {
    background-color: #fff;
    border-radius: 20px;
    box-shadow: 1px 1px 5px 5px rgba(0, 0, 0, 0.2);
    width: 100%;
    height: 100%;
    padding: 32px;
    @media (min-width: $desktop-min) and (max-width: $desktop-max) {
        padding: 16px;
    }     
    @media (min-width: $tablet-min) and (max-width: $tablet-max) {
        padding: 16px;
    }      
    @media (max-width: $mobile-max) {
        padding: 12px;
        border-radius: 0;
    } 
}
.content {
    height: calc(100vh - 128px - 64px);
    overflow-x: hidden;
    overflow-y: scroll;
    @media (min-width: $desktop-min) and (max-width: $desktop-max) {
        height: calc(100vh - 128px - 32px);
    }     
    @media (min-width: $tablet-min) and (max-width: $tablet-max) {
        height: calc(100vh - 128px - 32px);
    }      
    @media (max-width: $mobile-max) {
        height: calc(100vh - 128px);
    }     
}
.point-list {
    margin-bottom: 16px;
   
}
.slider-wrap {
    height: 465px;
    margin-bottom: 16px;
    @media (max-width: $mobile-max) {
    height: 380px;
    }      
}
.slider {
    width: 700px;
    margin: 0 auto;
    @media (min-width: $desktop-min) and (max-width: $desktop-max) {
        width: 700px;
    }     
    @media (min-width: $tablet-min) and (max-width: $tablet-max) {
        width: 600px;
    }      
    @media (max-width: $mobile-max) {
        width: 100%;;
    }     
}
</style>