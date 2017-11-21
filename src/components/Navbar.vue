<template>
    <div class = "my-nav-bar" id = "class">
        <div class="top-bar">
            <div class="top-bar-left">
                <ul class="dropdown menu" data-dropdown-menu>
                   <li class="menu-text"><router-link :to="{name:'home'}">News Sources </router-link></li>
                    <!--<li><a href="#">About Us</a></li>-->
                    <li><a href="#"><router-link :to="{name:'contact-us'}">Contact Us</router-link></a></li>
                </ul>
            </div>
            <div class="top-bar-right">
                <ul class="menu">
                    <li><input type="search" placeholder="Search"></li>
                    <li><button type="button" class="button">Search</button></li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return{

            }
        }
    }

</script>

<style type = "scss">

</style>