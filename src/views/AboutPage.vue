<template>
    <div class="app-page">
        <header class="header">
            <img 
                :src="require('@/assets/img/jpg/about_me.jpg')"  
                alt="photo"
                class="img-personal"
            >
            <div class="greating">
                <h1>Привет, искатель приключений 👋</h1>

                <p>Ты любишь путешествие и ищешь новые ощущения?</p>
                <p>Тогда ты попал по адресу!</p>
                <p>‌‌Я, <b>Лена Пескова</b> 😁👋‌<br>
                    У меня ты найдешь путешествие на любой вкус:</p>
            </div>
        </header>

        <hr class="divider">

        <ul class="type-travel-list">
            <li>
                <h2>⭐Походы выходного дня - более 20 разнообразных маршрутов, каждое воскресенье.</h2>
                    
                <h3>Штольни и природные пещеры:</h3>
                <ul class="travel-list">
                    <li>Сокские штольни: системы 1,2 и 10.</li>
                    <li>‌Камское Устье: штольни, самая протяженная природная пещера Поволжья.</li>
                    <li>‌Сюкеевские штольни: мраморно-белый берег, водопад «Дедушкины слезы».</li>
                    <li>‌Битумные штольни: живописный Волжский берег, системы 1,2,3 и 4 «Черный камень».</li>
                    <li>«Юрьевская пещера», «Каменная изба».</li>
                </ul>

                <h3>Места силы:</h3>
                <ul class="travel-list">
                    <li>Скрипинские Кучуры.</li>
                    <li>Рачейские Альпы: «Чёртов палец», «Поляна колдунов», «Марсово поле», «Водопад девичьи слезы», «Водопад мужские слёзы».</li>
                    <li>Рачейский бор. Каменный лабиринт.</li>
                    <li>Рачейский бор. Каменный лес.</li>
                </ul>

                <h3>Самые красивые места Поволжья:</h3>
                <ul class="travel-list last-list">
                    <li>Подвальские террасы.</li>
                    <li>Криушинский залив.</li>
                    <li>Озеро Крячек.</li>
                    <li>Шиловская Шишка, оползневой цирк, Гранное Ухо, змеиное озеро.</li>
                    <li>Озеро Юлово.</li>
                    <li>Пруд Чёска.</li>
                    <li>и очень, очень много чего ещё. Следи за анонсами в моих Сторис и публикациях!</li>
                </ul>
                <div class="call-me pl-32">
                    <p>Позвони мне и забронируй место в походе<br>
                    +7 (902) 357 22 88</p>
                </div>

                <hr class="divider"> 
            </li>

            <li>
                <h2>⭐ Походы по горному Крыму от 7 дней.<br>‌
                Ближайшие походы 16 мая и 15 октября</h2>
                <ul class="travel-list">
                    <li>Гора Ай-Петри.</li>
                    <li>Тарахташская тропа.</li>
                    <li>Каменный цветок. Ласпи.</li>
                    <li>Балаклава. Кадыковский карьер.</li>
                    <li>Пещерные города Бахчисарая.</li>
                    <li>Боткинская, Штангеевская и Тарахташская тропы.</li>
                    <li>Долина привидений, Юждая Димерджи- и ещё более 10 маршрутов по Крыму.</li>
                </ul>
                <p class="pl-32">📌‌Гайд по любому маршруту Крыма — 500₽ Каждый гайд, содержит подробный маршрут, как добраться до самых красивых места в Крыму, быстро и с минимальным затратами!</p>

                <div class="call-me pl-32">
                    <p>Забронируй тур в Крым<br>
                    +7 (902) 357 22 88</p>
                </div>                
            </li>

            <li>
                <h2>⭐ Исторические экскурсии по Ульяновску.</h2>
            </li>
            <li>
                <h2>⭐ Городской квест по Ульяновским достопримечательностям.</h2>
            </li>
            <li>
                <h2>⭐ Проведение романтических вечеров для влюбленных пар.</h2>
            </li>
            <li>
                <h2>⭐ А также организация разнообразных мероприятий от взрослых и детских праздников до всевозможных тематических фотосессий.</h2>
            </li>
        </ul>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

.header {
    display: flex;
    align-items: center;
    margin-bottom: 16px;
    @media (min-width: $desktop-min) and (max-width: $desktop-max) {
        justify-content: space-around;
    }     
    @media (min-width: $tablet-min) and (max-width: $tablet-max) {
        justify-content: space-around;
    }     
    @media (max-width: $mobile-max) {
        flex-direction: column;
    }     
}
.img-personal {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    @media (max-width: $mobile-max) {
        width: 120px;
        height: 120px;
    }      
}
.divider {
    color: #fff;
    margin: 16px;    
}
.travel-list {
    padding-left: 32px;
    margin-bottom: 24px;
    &.last-list {
        margin-bottom: 48px;
    }
    li {
        list-style-type: '- ';
        font-size: 90%;
    } 
}
.call-me {
    display: flex;
    p {
        line-height: 26px;
    }
    &:before {
        content: '';
        background-image: url('~@/assets/img/svg/smartphone.svg');
        background-repeat: no-repeat;
        width: 48px;
        height: 48px;
        margin-right: 8px;
    }
    @media (max-width: $mobile-max) {
        //font-size: 85%;
    }     
}

</style>