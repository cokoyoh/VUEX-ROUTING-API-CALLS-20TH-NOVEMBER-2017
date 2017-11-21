<template>
    <div>
        <nav-bar></nav-bar>
        <router-view></router-view>
    </div>
</template>

<script>
    import NavBar from './components/Navbar.vue'

    export default {
        name: 'app',
        data() {
            return {}
        },
        components: {
            'nav-bar': NavBar,
        }
    }
</script>

