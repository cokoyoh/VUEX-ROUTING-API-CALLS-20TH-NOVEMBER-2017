<template>
    <div class = "source-selection" id = "source-selection">
        <h4>Source News Source</h4>
        <select @chnaged="sourceChanged">
            <option v-bind:value = "source.id" v-for="source in sources">{{source.name}}</option>
        </select>
    </div>
</template>
<script>
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
                for(let i = 0 ; i <= this.sources.length; i++){
                    if(this.sources[i].id == e.target.value){
                        this.source == this.sources[i];
                    }
                }
            }
        },
        created(){
            console.log("Source selection created, api called here");
            this.$http.get('https://newsapi.org/v1/sources?language=en')
                .then(response => {
                    this.sources = response.data.sources;
                })
        }
    }

</script>

<style type = "scss">

</style>