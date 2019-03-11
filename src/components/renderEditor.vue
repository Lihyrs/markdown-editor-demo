<template>
    <div id="render-editor" v-html="render">
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {

    computed: mapState({
        render: state => state.render,
    }),
};

</script>
<style>
    #render-editor {
        width:50%;
        height:100%;
        overflow: scroll;
    }
</style>
