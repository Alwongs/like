<template>
    <div class="app-page">
        <h1>Экскурсии</h1>

        <div class="slider-wrap">
            <app-slider 
                :data="$store.getters.excursions"
                :isAutoSlider="false"
                :sliding="sliding"
                @updateTrigger="updateTrigger"
                class="slider"
            />
        </div>

        <p>Прогулка по главным достопримечательностям города с группой ЛАйК</p>        

        <p>Почти 1,5 часовая пешеходная прогулка по центру Ульяновска. Наш путь пройдет по следующему маршруту: от площади 30-летия Победы, через Владимирский сад и Венец к достопримечательностям, которые связаны с фамилиями знаменитых симбирян - Ленина, Карамзина и Гончарова. По пути мы неоднократно насладимся величием Волги на нескольких видовых площадках, вспомним Разина и Пугачева, пройдем через ключевые моменты истории России, связанные с городом Ульяновском (Симбирском).</p>

        <ul class="point-list">
            <li>- Памятники войны.</li>
            <li>- Владимирский сад и Соборная Площадь.</li>
            <li>- Венец и Дом памятник Гончарову.</li>
            <li>- Памятник Н. М. Карамзину и Симбирская классическая гимназия</li>
            <li>- Сквер Гончарова и рассказ о Емельяне Пугачеве</li>
        </ul>

        <p>Завершим экскурсию пройдя мимо дома, в подвале которого в 1774 году пытали и содержали под стражей Пугачева. Вы прогуляетесь по улице Ленина, сохранившей практически неизменный вид с начала XX века. На прощание узнаете удивительную историю возникновения сквера на месте Спасо-Вознесенского собора и найдете следы этого религиозного сооружения в окружающем пространстве поняв, как Ульяновск связан с Лондоном.</p>
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