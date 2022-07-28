<template>
    <div class="excursion-page">
        <div class="content">
            <p>Прогулка по главным достопримечательностям города с группой ЛАйК</p>

            <div class="slider-wrap">
                <app-slider 
                    :data="$store.getters.excursions"
                    :isAutoSlider="false"
                    :sliding="sliding"
                    @updateTrigger="updateTrigger"
                    class="slider"
                />
            </div>

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

.excursion-page {
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