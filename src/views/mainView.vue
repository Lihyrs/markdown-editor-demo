<template>
    <div>
        <raw-editor></raw-editor>
        <render-editor></render-editor>
    </div>

</template>


<script>
import rawEditor from '../components/rawEditor.vue';
import renderEditor from '../components/renderEditor.vue';

export default {
    components: {
        'raw-editor': rawEditor,
        'render-editor': renderEditor,
    },
};
</script>
