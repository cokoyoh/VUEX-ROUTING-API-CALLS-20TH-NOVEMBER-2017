<template>
    <div class = "source-selection" id = "source-selection">
        <div class="panel">
            <h2>News List</h2>
            <h4>Source News Source</h4>
            <select v-model="selected" @change="sourceChanged()" class="form-control">
                <option value = "">News Sources</option>
                <option v-bind:value="source.id"  v-for="source in newsSourcesStore.sources">{{source.name}}</option>
            </select>
            <div  v-if="source" >
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
//                sources: [],
                source: '',
                selected: ''
            }
        },
        methods:{
            sourceChanged(){
                this.$store.dispatch('setCurrentSource', this.selected);
                console.log("Selected source - ",this.selected);

                for(let i = 0 ; i < this.newsSourcesStore.sources.length; i++){
                    this.source = this.newsSourcesStore.sources[i];
                }
            }
        },
        computed: mapState({
            newsSourcesStore:state => state.newsSourcesStore
        }),
        created(){
            this.$store.dispatch('setSourcesList');
        }

    }

</script>

<style type = "scss">
.panel{
    background-color: #ddd;
    padding: 20px 20px;
    border-radius: 5px;
}
</style>