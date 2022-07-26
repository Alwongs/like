<template>
    <ul class="service-list">
        <li class="service-item">
            <router-link class="service-link" to="/excursion-page">
                <img 
                    class="icon" 
                    :src="require('@/assets/img/jpg/home/excursions.jpg')" 
                    alt=""
                >
                <p>Экскурсии</p>
            </router-link>            
        </li>
        <li class="service-item">
            <router-link class="service-link" to="/tracking-page">            
                <img 
                    class="icon" 
                    :src="require('@/assets/img/jpg/home/tracking.jpg')" 
                    alt=""
                >
                <p>Походы</p>
            </router-link>              
        </li>
        <li class="service-item">
            <router-link class="service-link" to="/crimea-page">            
                <img 
                    class="icon" 
                    :src="require('@/assets/img/jpg/home/crimea.jpg')" 
                    alt=""
                >
                <p>Крым</p>
            </router-link>              
        </li>
        <li class="service-item">
            <router-link class="service-link" to="/ural-page">            
                <img 
                    class="icon" 
                    :src="require('@/assets/img/jpg/home/ural.jpg')" 
                    alt=""
                >
                <p>Урал</p>
            </router-link>             
        </li>
        <li class="service-item">
            <router-link class="service-link" to="/photosession-page">            
                <img 
                    class="icon" 
                    :src="require('@/assets/img/jpg/home/photosession.jpg')" 
                    alt=""
                >
                <p>Фотосессии</p>
            </router-link>              
        </li>
    </ul>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

.service-list {
    display: flex;
    justify-content: space-around;

}
.service-item {
    text-align: center;
    width: 120px;    
    cursor: pointer; 
}
.service-item:hover {
    img {
        border: 3px solid yellow;      
    }
    p {
        color: yellow;        
    }  
}  
.service-link {
    color: white;
}
.icon {
    width: 90px;
    height: 90px;
    background-color: #fff;
    border-radius: 50%;
    border: 2px solid white;
    margin: 0 auto;
    margin-bottom: 6px;
} 
</style>