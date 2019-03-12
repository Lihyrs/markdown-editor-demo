<template>
    <div id="raw-editor">
        <el-input :value="rawValue"
          @input="renderHtml"
          class="form-control"
          type="textarea"
          placeholder="输入markdown格式内容"
          autosize="true"
          autofocus="true"
          >
        </el-input>
    </div>
</template>

<script>

import { Input } from 'element-ui';
import Vue from 'vue';
import { MARKDOWN_2_HTML } from '../common/constants';

Vue.use(Input);

export default {
    // data() {
    //     return {
    //         value: '',
    //     };
    // },
    methods: {
        renderHtml(val) {
            console.log('aaa==', val);
            this.$store.dispatch(MARKDOWN_2_HTML, { raw: val });
        },
    },
    computed: {
        rawValue() {
            return this.$store.state.raw;
        },
    },

};
</script>

<style lang="scss">
    @import '../assets/base.scss';

    #raw-editor {
        textarea{
            width: 100%;
            height: 100%;
            min-height: $minHt !important;
        }
    }


</style>
