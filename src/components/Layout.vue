<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    collapse-transition
  >
  <template v-for="(item ,key) in routes"
    v-bind:key="key">
    <SubMenuItem :list="item" v-if="item?.children?.length>0" ></SubMenuItem>
    <el-menu-item :index="item.path" v-if="item?.children?.length<=0" @click="clickRouter(item)">{{item?.name}}</el-menu-item>
  </template>
  </el-menu>
  <router-view></router-view>
 
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import routes from '@/router/routes.ts'
import { useRouter } from "vue-router";
import SubMenuItem from './SubMenuItem.vue'
import { storeToRefs } from 'pinia'
import useMenueRouterStore from '@stores/menueRouter'

//只能解析state 不能解析方法  方法需要单独调用
const store=useMenueRouterStore();
const {activeIndex}=storeToRefs(useMenueRouterStore()) 

const clickRouter=(item)=>{
  store.navationToPage(item)
}
</script>