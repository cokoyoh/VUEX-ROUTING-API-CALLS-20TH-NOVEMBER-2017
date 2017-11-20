<template>
    <div class = "source-selection" id = "source-selection">
        <div class="panel">
            <h2>News List</h2>
            <h4>Source News Source</h4>
            <select v-on:change="sourceChanged" class="form-control">
                <option v-bind:value="source.id" v-for="source in sources">{{source.name}}</option>
            </select>
            <div  v-if="source">
                <h6>{{source.description}}</h6>
                <a v-bind:href = "source.url" target="_blank" class="button primary">Go to {{source.name}} website</a>
            </div>
        </div>
    </div>
</template>
<script>
    import {mapState} from 'vuex'
    import newsSourcesStore from '../global/newsSourcesStore'
    export default {
        name: 'source-selection',
        data() {
            return {
                sources: [],
                source: ''
            }
        },
        methods:{
            sourceChanged(e){
                console.log("Source changed method called here");
                for(let i = 0 ; i < this.sources.length; i++){
                    if(this.sources[i].id == e.target.value){
                        this.source == this.sources[i];
                        console.log("here")
                    }
                }
            }
        },
        computed: mapState({
            newsSourcesStore:state => state.newsSourcesStore
        }),
        created(){
            this.$store.dispatch('setSourcesList')
        }
//        created(){
//            console.log("Source selection created, api called here");
//            this.$http.get('https://newsapi.org/v1/sources?language=en')
//                .then(response => {
//                    this.sources = response.data.sources;
//                })
//        }
    }

</script>

<style type = "scss">
.panel{
    background-color: #ddd;
    padding: 20px 20px;
    border-radius: 5px;
}
</style>