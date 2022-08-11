import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import CKEditor from '@ckeditor/ckeditor5-vue';
import './assets/styles.scss'

const app = createApp(App)

app
    .use(store)
    .use(router)
    .use(CKEditor)
    .mount('#app')
