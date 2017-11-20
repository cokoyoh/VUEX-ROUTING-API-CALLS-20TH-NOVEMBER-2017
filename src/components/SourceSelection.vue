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
        }
    }

</script>

<style type = "scss">

</style>