<template>
  <div>
    <div id="content">
      <dir class="editor-wrapper">
        <p>
          <span>markdown</span>
        </p>
        <raw-editor></raw-editor>
      </dir>
      <dir class="editor-wrapper">
        <p>
          <span>preview</span>
        </p>
        <render-editor></render-editor>
      </dir>
    </div>
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
.editor-wrapper {
  > * {
    width: 100%;
  }

  > p {
    text-align: center;
  }
}
#content {
  display: flex;
  justify-content: space-around;
  width: 100%;
  min-height: 500px;
}
</style>
