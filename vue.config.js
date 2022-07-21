module.exports = {
    publicPath: process.env.NODE_ENV === "production" ? "/like/" : "/",
    css: {
        loaderOptions: {
            scss: {
                prependData: '@import "@/assets/styles.scss";'
            }
        }
    }
}