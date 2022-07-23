<template>
    <footer class="footer">
        home made website :)
    </footer>
</template>

<script>
export default {
    name: 'AppFooter',

}
</script>

<style lang="scss" scoped>
    .footer {
        text-align: center;
        line-height: 64px;        
        color: white;
        font-size: 14px;
        @media (max-width: $mobile-max) {
            display: none;
        }         
    }
</style>