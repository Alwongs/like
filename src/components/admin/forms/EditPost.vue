<template>
    <div class="edit-post">
        <form action="#" class="form">
            <p v-if="loading" class="loading">Обновление поста...</p>

            <h2 class="form-title">Редактирование</h2>  
            <p>postId: {{ post.id }}</p>          
            <ul class="form-element-list">            
                <li class="form-item select-type-input">
                    <input 
                        v-model="post.postType" 
                        class="title" 
                        placeholder="тип поста.. (анонс, отчёт..)"
                        readonly
                        @click="openPostTypeBlock"                       
                    >
                    <ul v-if="isPostTypeOpen" class="select-type-block">
                        <li @click="selectPostType('announce')">Анонс</li>
                        <li @click="selectPostType('post')">Отчёт</li>
                    </ul> 
                </li>

                <li class="form-item select-type-input">
                    <input 
                        v-model="post.eventType" 
                        class="title" 
                        placeholder="тип события.. (экскурсия, поход, фотосессия..)"
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
                </li>

                <li class="form-item">
                    <input v-model="post.title" type="text" placeholder="заголовок">
                </li>
                <li class="form-item ckeditor">
                    <ckeditor 
                        v-model="post.text"
                        :editor="editor"  
                        :config="editorConfig"              
                        class="ckeditor"                    
                    ></ckeditor>
                </li>
            </ul>
        </form>

        <select-files-btn @onReadFiles="readFiles" />

        <images-upload 
            :previewList="previewList"
            class="image-block" 
        />

        <h1 v-if="getProcessing">Loading...</h1>
        <div class="btn-block">
            <button class="btn mr-16" @click="closeFormHandler">Закрыть</button>
            <button class="btn btn-submit" type="submit" @click.prevent="updatePost">Обновить</button>
        </div>
    </div>
</template>

<script>
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import SelectFilesBtn from '@/components/admin/forms/SelectFilesBtn.vue'
import ImagesUpload from '@/components/admin/forms/ImagesUpload.vue'
import uploadFilesMixin from '@/mixins/uploadFiles.mixin.js'

export default {
    name: 'EditPost',   
    components: { 
        SelectFilesBtn, 
        ImagesUpload 
    },
    props: ['postForEdit'],     
    mixins: [uploadFilesMixin],
    data() {
        return {
            isPostTypeOpen: false,
            isEventTypeOpen: false, 
            uploading: false,

            post: this.postForEdit,            

            editor: ClassicEditor,
            editorData: '',
            editorConfig: {
                // The configuration of the editor.
            }             
        }
    },
    computed: {
        loading() {
            return this.$store.getters.getProcessing
        },
        getProcessing() {
            return this.$store.getters.getProcessing
        },         
        postImageList() {
            return this.$store.getters.postImageList
        },
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
        closeFormHandler() {
            this.$store.commit('UPDATE_POST_IMAGE_LIST', [])  
            this.$emit('closeForm')
        },
        async updatePost() {
            this.post.imageList = this.postImageList
            if (
                this.post.title === '' ||
                this.post.text === ''
            ) {
                alert('заполните поля!')
                return
            }            
            this.$store.commit('SET_PROCESSING', true);
            await this.$store.dispatch('updatePost', this.post);
            this.$store.commit('SET_PROCESSING', false);            
            this.$emit('closeForm')
        }       
    },
    mounted() {
        console.log(this.postForEdit)
    }   
}
</script>

<style lang="scss" scoped>

.edit-post { 
    @media (min-width: $desktop-min) and (max-width: $desktop-max) {
        width: 100%;  
    }     
    @media (min-width: $tablet-min) and (max-width: $tablet-max) {
        width: 100%;
    }     
    @media (max-width: $mobile-max) {
        width: 100%;
    } 
}

.form-title {
    font-size: 24px;
}
.form-item > input {
    font-size: 14px;     
    width: 100%;
    height: 40px;
    margin-bottom: 16px;
    padding-left: 8px;
    outline: none;
    border: none;
    border-bottom: 1px solid grey;
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






.image-block {
    margin-bottom: 16px;
}
.btn-block {
    text-align: end;
}
.btn-submit {
    background-color: rgb(20, 161, 102);
    font-size: 16px;
    color: white;
}
</style>
