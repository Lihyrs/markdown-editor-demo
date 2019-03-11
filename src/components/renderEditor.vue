<template>
    <div id="render-editor">
        {{html}}
    </div>
</template>

<script>
// import { mapState } from 'vuex';

export default {
    // data() {
    //     return {
    //         html: '',
    //     };
    // },
    computed: {
        html() {
            // console.log('render===>', this.$store);
            return this.$store.state.render;
        },
    },
};

</script>
<style>
    #render-editor {
        float:right;
        width:50%;
        height:100%;
        overflow: scroll;
    }
</style>
