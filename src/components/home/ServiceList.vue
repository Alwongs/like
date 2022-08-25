<template>
    <ul class="service-list">
        <li class="service-item">
            <router-link class="service-link" to="/excursion-page">
                <img 
                    class="icon" 
                    :src="require('@/assets/img/jpg/home/excursions.jpg')" 
                    alt="icon"
                >
                <h5>Экскурсии</h5>
            </router-link>            
        </li>
        <li class="service-item">
            <router-link class="service-link" to="/tracking-page">            
                <img 
                    class="icon" 
                    :src="require('@/assets/img/jpg/home/tracking.jpg')" 
                    alt="icon"
                >
                <h5>Походы</h5>
            </router-link>              
        </li>
        <li class="service-item">
            <router-link class="service-link" to="/crimea-page">            
                <img 
                    class="icon" 
                    :src="require('@/assets/img/jpg/home/crimea.jpg')" 
                    alt="icon"
                >
                <h5>Крым</h5>
            </router-link>              
        </li>
        <li class="service-item">
            <router-link class="service-link" to="/ural-page">            
                <img 
                    class="icon" 
                    :src="require('@/assets/img/jpg/home/ural.jpg')" 
                    alt="icon"
                >
                <h5>Урал</h5>
            </router-link>             
        </li>
        <li class="service-item">
            <router-link class="service-link" to="/photosession-page">            
                <img 
                    class="icon" 
                    :src="require('@/assets/img/jpg/home/photosession.jpg')" 
                    alt="icon"
                >
                <h5>Фотосессии</h5>
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
    @media (max-width: $mobile-max) {
        flex-direction: column;
        justify-content: space-between;        
        padding: 0 32px;
    } 
}
.service-item {  
    text-align: center;
    width: 120px;    
    cursor: pointer; 
    h5 {
        width: 100%;
        text-align: center;
        font-weight: normal;
        @media (max-width: $mobile-max) {
            color: rgb(39, 68, 129);
        }         
    }
    img {
        width: 100%;
        height: 100%;
        box-shadow: 1px 1px 5px 5px rgba(0, 0, 0, 0.2);        
    }
    @media (max-width: $mobile-max) {
        width: 100%;
        margin-bottom: 48px;
    }      
}
.service-item:hover {
    h5 {
        color: yellow;         
    }
    img {
        border: 3px solid yellow;      
    }
    p {
        color: yellow;        
    }  
}  
.service-link {
    color: white;
    @media (max-width: $mobile-max) {
        font-size: 150%;
        text-align: center;
    } 
}
.icon {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    border: 3px solid white;
    margin: 0 auto;
    margin-bottom: 6px;
    @media (min-width: $desktop-min) and (max-width: $desktop-max) {
        width: 90px;
        height: 90px;
    }     
    @media (min-width: $tablet-min) and (max-width: $tablet-max) {
        width: 90px;
        height: 90px;  
    }     
    @media (max-width: $mobile-max) {
        width: 100%;
        height: auto;
        border-radius: 20px;
        border: 3px solid rgb(39, 68, 129);              
    }    
} 
p {
    color: white;
    @media (max-width: $mobile-max) {
        color: rgb(39, 68, 129);
    }     
}
</style>