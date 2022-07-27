import { createStore } from 'vuex'
import app from './modules/app.js'
import slider from './modules/slider.js'

export default createStore({

    modules: {
        app,
        slider
    }
})
