<template>
    <div class="app-page">
        <h1>Урал</h1>

        <div class="slider-wrap">
            <app-slider 
                :data="$store.getters.ural"
                :isAutoSlider="false"
                :sliding="sliding"
                @updateTrigger="updateTrigger"
                class="slider"
            />
        </div>

        <p>Предлагаем тур по Южному Уралу. Национальный парк Таганай.</p>        

        <p>Что мы увидим за два дня:</p>

        <p>☀Белый ключ – источник с необычайно мягкой водой, которая даже летом не бывает теплее 4 градусов. Его источник, ещё называют «белым».</p>

        <p>☀Двуглавая сопка – гора с двумя вершинами, которая находится в самой южной части хребта Большой Таганай.</p>

        <p>☀Три Брата – каменные скалы в Большом логу, напоминающие трёх великанов из легенды.</p>

        <p>☀Гора Откликной Гребень, вершина которой покрыта почти отвесными скалами, похожими на хребет доисторического ящера или на расческу. Здесь необычайно сильное эхо, потому вершину так и назвали.</p>

        <p>☀Каменная река – на огромной площади среди хвойного леса, лежит, именно лежит эта каменная река, сложенная из множества камней причудливых форм.</p>

        <p>☀Круглица – самая высокая гора хребта. Свое название получила за округлую форму вершины.</p>

            Что входит в стоимость тура:
            🔹Проживание на территории парка;
            🔹Входной билет на территорию парка;
            🔹Питание;
            🔹Банька;
            🔹Сопровождение гида;
            🔹Организация поездки;   

            Не входит в тур:
            🔹Билеты на поезд;
            🔹Питание в поезде, в кафе;
            🔹Сувениры.

        <p>☝Важно!
        Время выхода на маршрут варьируется на усмотрение инструктора, в связи с погодными условиями или иными факторами.
        Время подачи ужина и посещения бани зависит от темпа группы при нахождении на маршруте и фактическом возвращении в гостиницу.</p>

            <p>🔹Стоимость тура: 6000₽</p>

            <p>Хотите провести незабываемые выходные? Тогда поехали с нами!</p>

            <p>Бронь и подробности в директ или по телефону +79023572288 Елена </p>
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

.slider-wrap {
    height: 700px;
    margin-bottom: 16px;
    @media (min-width: $desktop-min) and (max-width: $desktop-max) {
      height: 350px;
    }     
    @media (min-width: $tablet-min) and (max-width: $tablet-max) {
      height: 350px;
    }     
    @media (max-width: $mobile-max) {
      height: 350px;
    }      
}
.slider {
    width: 400px;
    margin: 0 auto;
    @media (min-width: $desktop-min) and (max-width: $desktop-max) {
        width: 300px;
    }     
    @media (min-width: $tablet-min) and (max-width: $tablet-max) {
        width: 300px;
    }      
    @media (max-width: $mobile-max) {
        width: 50%;;
    }     
}
</style>