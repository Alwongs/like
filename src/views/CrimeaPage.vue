<template>
    <div class="app-page">
        <h1>Поездки в Крым</h1>

        <div class="slider-wrap">
            <app-slider 
                :data="$store.getters.crimea"
                :isAutoSlider="false"
                :sliding="sliding"
                @updateTrigger="updateTrigger"
                class="slider"
            />
        </div>

        <p>Маршрут Ласпи - Балаклава. Протяженность 18 км. Это часть Большой Севастопольской Тропы (её протяженность 130 км).</p>        

        <p>Мы отправимся от Ласпинского перевала, набрав высоту в гору Куш-Кая покорим гору Аскети, где нам откроется сногсшибательная панорама мыса Айя и мыса Фиолент по другую сторону.</p>

        <p>Закончится наш маршрут в руинах крепости Чембало в Балаклаве.</p>


        <p>Тропа изобилует ландшафтам и просто дарит восхитительные пейзажи. Дубы и буки то и дело уступают можжевельникам и соснам, их хвойный аромат так и кружит голову и дарит небывалую лёгкость путникам. А вид моря вдохновляет вас на новые подвиги!</p>

        <p>Хотите увидеть всё своими глазами? Летим с нами 16 мая, мы вам покажем, где в Крыму красиво 😁</p>

        <p>Мы предлагаем вам, походы по Крыму с лёгким рюкзаком.</p>

        <p>Подробнее о туре по телефону + 7 902 357 22 88 Елена (отвечаю в любом мессенджере)</p>
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

.crimea-page {
    padding: 32px;
    @media (min-width: $desktop-min) and (max-width: $desktop-max) {
        padding: 32px;
    }     
    @media (min-width: $tablet-min) and (max-width: $tablet-max) {
        padding: 32px;
    }      
    @media (max-width: $mobile-max) {
        padding: 12px;
    } 
}

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