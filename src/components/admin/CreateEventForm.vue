<template>
    <div class="background-wrapper">
        <form class="form">
            <h2 class="form-title">Создание нового поста</h2>
            <div class="form-item select-type-input">
                <input 
                    v-model="post.postType" 
                    class="title" 
                    placeholder="Выберете тип поста.."
                    readonly
                    @click="openPostTypeBlock"                    
                >
                <ul v-if="isPostTypeOpen" class="select-type-block">
                    <li @click="selectPostType('announce')">Анонс</li>
                    <li @click="selectPostType('post')">Отчёт</li>
                </ul>                
            </div>

            <div class="form-item select-type-input">
                <input 
                    v-model="post.eventType" 
                    class="title" 
                    placeholder="Выберете тип события.."
                    readonly
                    @click="openEventTypeBlock"                      
                >
                <ul v-if="isEventTypeOpen" class="select-type-block">
                    <li @click="selectEventType('tracking')">Поход</li>
                    <li @click="selectEventType('excursion')">Экскурсия</li>
                    <li @click="selectEventType('photosession')">Фотосессия</li>
                    <li @click="selectEventType('ural')">Поездка Урал</li>
                    <li @click="selectEventType('crimea')">Поездка в Крым</li>
                </ul>                
            </div>
            <div class="form-item">
                <input 
                    v-model="post.title" 
                    class="title" 
                    placeholder="Название поста"
                >
            </div>
<!--
            <div class="form-item">
                <textarea 
                    v-model="post.text" 
                    type="text" 
                    class="text" 
                    placeholder="Введите текст.." 

                ></textarea>
            </div>
-->
            <div class="form-item ckeditor">
                <ckeditor 
                    v-model="post.text"
                    :editor="editor"  
                    :config="editorConfig"
                    class="ckeditor"                    
                ></ckeditor>
            </div>
            <div class="btn-block">
                <button class="btn" @click.prevent="closeForm">Закрыть</button>
                <button class="btn btn__green" @click.prevent="savePost">Сохранить</button>
            </div>
        </form>
    </div>
</template>

<script>
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

export default {
    name: 'CreateEventForm',
    data() {
        return {
            post: {
                postType: '',
                eventType: '',
                title: '',
                text: '',
            },
            isPostTypeOpen: false,
            isEventTypeOpen: false,

            editor: ClassicEditor,
            editorData: '',
            editorConfig: {

                // The configuration of the editor.
            }            
        }
    },
    computed: {
        userId() {
            return this.$store.getters.userId;
        }
    },
    methods: {
        selectPostType(option) {
            this.post.postType = (option === 'announce') ? 'Aнонс' : 'Отчёт';
            this.isPostTypeOpen = false;
        },
        selectEventType(option) {
            switch (option) {
            case 'tracking':
                this.post.eventType = 'Поход';
                break;
            case 'excursion':
                this.post.eventType = 'Экскурсия';
                break;
            case 'photosession':
                this.post.eventType = 'Фотосессия';
                break;
            case 'ural':
                this.post.eventType = 'Поездка Урал';
                break;
            case 'crimea':
                this.post.eventType = 'Поездка в Крым';
                break;
            default:
                alert('');
            }
            this.isEventTypeOpen = false;            
        },
        openPostTypeBlock() {
            this.isPostTypeOpen = !this.isPostTypeOpen
            this.isEventTypeOpen = false
        },
        openEventTypeBlock() {
            this.isEventTypeOpen = !this.isEventTypeOpen
            this.isPostTypeOpen = false            
        },
        async savePost() {
            await this.$store.dispatch('savePost', this.post);
            this.$emit('closeForm')
        },
        closeForm() {
            this.$emit('closeForm')
        }
    } ,    
}
</script>

<style lang="scss" scoped>

.background-wrapper {
    background-color: rgba(0, 16, 29, 0.7); 
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
}
.form {
    width: 900px;
    position: fixed;
    left: 50%;
    top: 50%; 
    transform: translate(-50%, -50%);      
    background: rgb(118, 159, 195);
    box-shadow: 1px 1px 5px 5px rgba(0, 0, 0, 0.2);     
    border-radius: 10px;
    padding: 16px;
    margin-bottom: 32px;
    @media (min-width: $desktop-min) and (max-width: $desktop-max) {
        width: 800px;  
    }     
    @media (min-width: $tablet-min) and (max-width: $tablet-max) {
        width: 700px;
    }     
    @media (max-width: $mobile-max) {
        width: 100%;
        height: 100%;
        border-radius: 0; 
    }     
}
.form-title {
    font-size: 24px;
    color: white;
}
.form-item > input {
    font-size: 14px;     
    width: 100%;
    height: 40px;
    margin-bottom: 16px;
    border-radius: 5px;
    padding-left: 8px;
    outline: none;
    @media (max-width: $mobile-max) {
        font-size: 22px;        
        min-height: 50px;
    }     
}
.select-type-input {
    position: relative;
}
.select-type-block {
    z-index: 1;
    font-size: 22px;      
    position: absolute;
    top: 40px;
    left: 0;
    background-color: #fff;
    width: 100%;
    border-radius: 5px 5px 10px 10px;
    padding: 10px 0;
    box-shadow: 1px 1px 2px 2px rgba(0, 0, 0, 0.332);
    li {
        vertical-align: center;
        padding-left: 20px;
        height: 40px;
        line-height: 40px;
        cursor: pointer;
    }
    li:hover {
        background-color: rgb(222, 222, 222);
    }
}
textarea {
    font-size: 14px;     
    width: 100%;
    height: 300px;
    margin-bottom: 16px;
    border-radius: 5px; 
    outline: none;       
    padding: 8px;
    @media (max-width: $mobile-max) {
        font-size: 22px;          
        min-height: fit-content;
    }     
}
.ckeditor {
    margin-bottom: 16px;
}
.btn-block {
    display: flex;
    justify-content: space-between;
    @media (max-width: $mobile-max) {
        flex-direction: column;
    }       
}
.btn {
    font-size: 18px;
    font-weight: 400;
    color: rgb(57, 57, 57);
    padding: 7px 15px;
    border: none;
    border-radius: 5px;
    box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.3);  
    border: 1px solid grey; 
    cursor: pointer; 
    &__green {
        background-color: rgb(56, 146, 68);
        border: 1px solid white;
        color: white;
    }
    @media (max-width: $mobile-max) {
        font-size: 22px;
        padding: 14px 15px;
        margin-bottom: 16px;
    }        
}

</style>