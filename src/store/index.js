import { createStore } from 'vuex'
import app from './modules/app.js'
import slider from './modules/slider.js'
import user from '@/store/modules/user'
import general from '@/store/modules/general.js'
import posts from '@/store/modules/posts.js'

export default createStore({

    modules: {
        app,
        slider,
        general,
        user,
        posts        
    }
})
