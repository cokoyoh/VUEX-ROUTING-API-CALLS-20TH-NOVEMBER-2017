<template>
    <div class = "contact-us" id = "contact-us">
        <div class="grid-x grid-container row">
            <h2>Contact Us</h2>
            <div>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquid consequuntur doloribus eos fuga minima nulla numquam officia, officiis pariatur! At eos esse inventore! Alias blanditiis consequuntur mollitia nulla veritatis.
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad adipisci animi aperiam consectetur corporis dolores dolorum eveniet harum laudantium maxime nemo nesciunt officia, porro quibusdam similique, tempora ullam vel voluptatem!
                </p>
                <h2>The list of sources can also be seen here</h2>
                <ul v-for="source in newsSourcesStore.sources">
                    <li>
                        {{ source.name}}
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
    import {mapState} from 'vuex'
    import newsSourcesStore from '../global/newsSourcesStore'
    export default {
        data() {
            return {
                msg: "hello world!"
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
.contact-us{
    padding: 10px 30px;
}
</style>