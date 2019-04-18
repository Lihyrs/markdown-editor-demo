<template>
  <div id="app">
    <div :class="{'header-wrapper':true, /*'hidden':isErr*/}">
      <el-menu
        mode="horizontal"
        background-color="#545C64"
        :default-active="active"
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
import 'highlight.js/styles/default.css';
import 'element-ui/lib/theme-chalk/index.css';
import { Menu, MenuItem } from 'element-ui';
import Vue from 'vue';

Vue.use(Menu);
Vue.use(MenuItem);

const menu = [
    { routeName: 'index', text: '编辑器' },
    { routeName: 'mdSyntax', text: 'markdown语法' },
];

let routerNames = [];

for (let i = 0; i < menu.length; i++) {
    routerNames.push(menu[i].routeName);
}

export default {
    name: 'app',
    data() {
        return {
            menu,
            active: '',
            stack: [],
        };
    },
    created() {
        let name = this.$router.currentRoute.name;
        if (routerNames.indexOf(name) !== -1 && this.active !== name) {
            this.active = name;
            this.stack.push(name);
        }
    },
    methods: {
        change(index) {
            // console.log(index);
            if (routerNames.indexOf(index) === -1) {
                return;
            }

            let pos = this.stack.lastIndexOf(index);
            let cur = this.stack.lastIndexOf(this.active);
            if (pos === -1) {
                this.$router.push({ name: index }, () => {
                    this.stack.push(index);
                    this.active = index;
                });
            } else if (cur !== -1) {
                this.$router.go(pos - cur);
                this.active = index;
            }
        },
    },
    computed: {
        isErr() {
            let name = this.$router.currentRoute.name;
            return routerNames.indexOf(name) === -1;
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
  width: 100%;
}

.hidden {
  display: none;
}
</style>
