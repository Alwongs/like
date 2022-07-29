<template>
    <div class="crimea-page">
        <div class="content">
            <p>Маршрут Ласпи - Балаклава. Протяженность 18 км. Это часть Большой Севастопольской Тропы (её протяженность 130 км).</p>

            <div class="slider-wrap">
                <app-slider 
                    :data="$store.getters.crimea"
                    :isAutoSlider="false"
                    :sliding="sliding"
                    @updateTrigger="updateTrigger"
                    class="slider"
                />
            </div>

            <p>Мы отправимся от Ласпинского перевала, набрав высоту в гору Куш-Кая покорим гору Аскети, где нам откроется сногсшибательная панорама мыса Айя и мыса Фиолент по другую сторону.</p>

            <p>Закончится наш маршрут в руинах крепости Чембало в Балаклаве.</p>


            <p>Тропа изобилует ландшафтам и просто дарит восхитительные пейзажи. Дубы и буки то и дело уступают можжевельникам и соснам, их хвойный аромат так и кружит голову и дарит небывалую лёгкость путникам. А вид моря вдохновляет вас на новые подвиги!</p>

            <p>Хотите увидеть всё своими глазами? Летим с нами 16 мая, мы вам покажем, где в Крыму красиво 😁</p>

            <p>Мы предлагаем вам, походы по Крыму с лёгким рюкзаком.</p>

            <p>Подробнее о туре по телефону + 7 902 357 22 88 Елена (отвечаю в любом мессенджере)</p>
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

.crimea-page {
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