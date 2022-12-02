<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-main"
    mode="horizontal"
    collapse-transition
    background-color='#292b4d'
    text-color='hsla(0,0%,100%,.65)'
    active-text-color='#fff'
  >
  <div class='el-menu-item mtr50' @click="clickRouter({path:'/'})"><span>Vue3 Project</span></div>
  <template v-for="(item ,key) in routes[0]?.children"
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
<style lang="scss" scoped>
  .el-menu-item.mtr50{
    margin-right: 50px;
    span{
        color: #36cad7 !important;
        font-size: 20px;
    }
  }
  
  .el-menu-item.mtr50:hover{
    background-color: #292b4d !important;
  }
</style>