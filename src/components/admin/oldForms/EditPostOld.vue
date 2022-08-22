<template>
    <div class="background-wrapper">
        <form class="form">
            <p v-if="loading" class="loading">Обновление поста...</p>

            <h2 class="form-title">Редактирование</h2>
            <div class="form-item select-type-input">
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
            </div>
            <div class="form-item select-type-input">
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
            </div>
            <div class="form-item">
                <input 
                    v-model="post.title" 
                    class="title" 
                    placeholder="Название поста"
                >
            </div>

            <div class="form-item mb-16">
                <button 
                    :disabled="!isAbleUploadButton"                
                    class="btn btn-trigger mr-16"
                    @click.prevent="triggerUpload" 
                >
                    Выбрать фото
                </button>
                <button 
                    v-if="post.imageList"
                    :disabled="!isAbleUploadButton"
                    class="btn btn-trigger"
                    @click.prevent="uploadImagesHandler" 
                >
                    Загрузить
                </button>
            </div>

            <div 
                v-if="post.imageList"
                class="form-item preview-group mb-16"
            >
                <div
                    v-for="image in post.imageList"
                    :key="image.url" 
                    class="preview-item border-white"
                >

                    <div 
                        v-if="!uploading"                    
                        class="preview-remove" 
                        @click.prevent="removePreviewItem(image.name)"
                    >
                        &times;
                    </div>
                    <img 
                        :src="image.url"
                        :alt="image.name"
                    >
                    <div v-if="!uploading" class="preview-footer preview-info">
                        <span>{{ image.name }}</span>
                        <span>{{ convertSize(image.size) }}</span>
                    </div>
                    <div 
                        class="preview-footer preview-progress"
                        :class="{show: uploading}"
                    >
                        <div class="preview-progress-info"></div>
                    </div>
                </div>
            </div>
            <div class="form-item file-input">
                <input 
                    type="file"
                    ref="fileInputEdit"
                    style="display:none;"
                    accept="image/*"
                    multiple
                    placeholder="Название поста"
                    class="title" 
                    @change="onFileChange"
                >
            </div>


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
                <button class="btn btn__green" @click.prevent="updatePost">Сохранить</button>
            </div>
        </form>
    </div>
</template>

<script>
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import bitesToSize from '@/functions/bitesToSize.js'


export default {
    name: 'EditEventForm',
    props: ['postForEdit'],
    data() {
        return {
            post: this.postForEdit,
            isPostTypeOpen: false,
            isEventTypeOpen: false, 
            uploading: false, 
            files: null,   
                               
            
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
        userId() {
            return this.$store.getters.userId
        },
        isAbleUploadButton() {
            return this.$store.getters.isAbleUploadButton
        },
        postImageList() {
            return this.$store.getters.postImageList
        }      
    },
    methods: {
        onFileChange(event) {

            this.files = null
            this.post.imageList = []

            if (!event.target.files) {
                return
            }
            this.files = Array.from(event.target.files)
            if (this.files.length > 4) {
                alert('Не больше 4 файлов!')
                return
            }
            this.files.forEach(file => {
                if (!file.type.match('image')) {
                    return
                }
                const reader = new FileReader()
                            
                reader.onload = ev => {
                    const url = ev.target.result

                    this.post.imageList.push({
                        name: file.name,
                        size: file.size,
                        url: url
                    })                   
                }
                reader.readAsDataURL(file)
            })

        },      
        triggerUpload() {
            this.$refs.fileInputEdit.click();
        },
        async uploadImagesHandler() {
            this.uploading = true
            await this.$store.dispatch('uploadImages', this.files)
        },  

        async removePreviewItem(imageName) { 
            if (this.files) {
                this.files = this.files.filter(file => file.name !== imageName)
            }
            this.post.imageList = this.post.imageList.filter(image => image.name !== imageName)

            await this.$store.dispatch('deleteImages', imageName)
            //this.$store.commit('UPDATE_POST_IMAGE_LIST', this.post.imageList)
        },        

        convertSize(size) {
            return bitesToSize(size)
        }, 

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
               
        async updatePost() {
            if (
                this.post.title === '' ||
                this.post.text === ''
            ) {
                alert('заполните поля!')
                return
            }
            if (this.post.imageList.length !== this.postImageList.length) {
                alert('загрузите файлы!')
                return
            }            
            this.$store.commit('SET_PROCESSING', true);
            await this.$store.dispatch('updatePost', this.post);
            this.$store.commit('SET_PROCESSING', false);            
            this.$emit('closeForm')
        },
        closeForm() {
            this.$emit('closeForm')
        }
    }, 
    mounted() {
        /*
        this.post = this.postForEdit;
        this.editorData = this.postForEdit.text;
        */
    }
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
.preview-group {
    display: flex;
    flex-wrap: wrap;
}
.preview-item {
    text-align: center;
    position: relative;
    height: 150px;
    width: 150px;
    margin-right: 8px;
    margin-bottom: 8px;
    overflow: hidden;
    &:hover .preview-remove {
        opacity: 1;
    }
    &:hover .preview-info {
        bottom: 0;
    }
}
.preview-remove {
    opacity: 0;
    background-color: rgba(255, 255, 255, 0.6);
    position: absolute;
    right: 0;
    top: 0;
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: opacity .22s;
}
.preview-footer {
    background-color: rgba(255, 255, 255, 0.6);
    position: absolute;
    left: 0;
    right: 0;
    height: 25px;
    cursor: pointer;
    font-size: 10px;
}
.preview-info {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 5px;
    bottom: -30px;
    transition: bottom .22s;
    span {
        flex: 1 1 50%;
        overflow: hidden;
        text-align: end;
    }
}

.preview-progress {
    bottom: -30px;
    padding: 0;
    &.show {
        bottom: 0;
    }
}
.preview-progress-info {
    transition: width .22s;
    background-color: rgb(71, 149, 93);
    height: 100%;
    width: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 12px;
}
.preview-item img {
    height: 100%;
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