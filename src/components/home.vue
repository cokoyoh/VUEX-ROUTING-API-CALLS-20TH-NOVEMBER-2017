<template>
    <div class = "home" id = "home">
         <div class="grid-container row">
             <div class="grid-x grid-padding-x">
                 <source-selection @sourceChanged="sourceChanged"></source-selection>
                 <!--<news-list v-bind:source="source"></news-list>-->
             </div>
         </div>
    </div>
</template>
<script>
    import SourceSelection from '../components/SourceSelection.vue';
    import List from '../components/NewsList.vue';
    export default {
        name: 'home',
        data() {
            return{
                source: ""
            }
        },
        components: {
            'source-selection': SourceSelection,
            'news-list': List,
        },
        methods:{
            sourceChanged(source){
                console.log("Source changed");
                this.source = source;
            }
        }
    }

</script>

<style type = "scss">
    .home{
        padding-top: 20px;
    }
</style>