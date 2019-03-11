<template>
    <div id="content">
        <raw-editor></raw-editor>
        <render-editor></render-editor>
    </div>

</template>


<script>
import rawEditor from './rawEditor.vue';
import renderEditor from './renderEditor.vue';

export default {
    components: {
        'raw-editor': rawEditor,
        'render-editor': renderEditor,
    },
};
</script>

<style lang="scss">
#content{
    display: flex;
    justify-content: space-around;
    width: 100%;
    min-height: 500px;
}
</style>
