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
        line-height: 48px;        
        color: white;
        font-size: 12px;
        font-weight: 300;
        @media (max-width: $mobile-max) {
            display: none;
        }         
    }
</style>