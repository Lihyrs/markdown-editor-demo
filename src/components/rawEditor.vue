<template>
    <div id="raw-editor">
        <textarea
              v-model="value"
              @input="renderHtml"
              class="form-control">
        </textarea>
    </div>
</template>

<script>

import { MARKDOWN_2_HTML } from '../common/constants';

export default {
    data() {
        return {
            value: '',
        };
    },
    methods: {
        renderHtml() {
            this.$store.dispatch(MARKDOWN_2_HTML, { raw: this.value });
        },
    },

};
</script>

<style>
    #raw-editor {
        width:45%;
        height:100%;
    }

    textarea{
        width: 100%;
        height:100%;
        border: 0;
        border-radius: 0;
    }
</style>
