<template>
    <div  id="render-editor" v-html="render"></div>
</template>

<script>
import { mapState } from 'vuex';

export default {

    computed: mapState({
        render: state => state.render,
    }),
};

</script>
<style lang="scss">
@import '../assets/base.scss';
    #render-editor {
        width:100%;
        height:100%;
        overflow: scroll;
        min-height: $minHt;
        border: 1px solid rgb(169, 169, 169);
        padding-left: 10px;
    }

</style>
