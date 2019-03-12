<template>
  <div id="app">
    <div class="header-wrapper">
      <el-menu
        mode="horizontal"
        background-color="#545C64"
        :default-active="menu[0].routeName"
        text-color="#fff"
        active-text-color="#ffd04b"
        @select="change"
      >
        <el-menu-item
          :index="item.routeName"
          v-for="(item,index) in menu"
          :key="index"
        >{{item.text}}</el-menu-item>
      </el-menu>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import 'highlight.js/styles/dark.css';
import 'element-ui/lib/theme-chalk/index.css';
import { Menu, MenuItem } from 'element-ui';
import Vue from 'vue';

Vue.use(Menu);
Vue.use(MenuItem);

const menu = [
    { routeName: 'index', text: '编辑器' },
    { routeName: 'mdSyntax', text: 'markdown语法' },
];

export default {
    name: 'app',
    data() {
        return {
            menu,
        };
    },
    methods: {
        change(index) {
            this.$router.push({ name: index });
        },
    },
};
</script>

<style lang="scss">
#app {
  width: 100%;
  height: 100%;
  margin-top: 60px;
}

body {
  width: 100%;
  height: 100%;
}
.header-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%
}
</style>
