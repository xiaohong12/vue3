<template>

<el-sub-menu v-if="data.list?.children?.length>0"  :index="data.list.path">
  <template #title >{{data.list?.name}}</template>
  <div v-for="(item,index) in data?.list?.children" :key="index">
    <el-menu-item  v-if="item?.children?.length==0" :index="item.path"  @click="clickRouter(item)">{{item.name}}</el-menu-item>
    <SubMenuItem :list="item" v-if="item?.children?.length>0"  ></SubMenuItem>
  </div>
</el-sub-menu>

</template>

<script lang="ts" >
// 使用普通的 <script> 来声明选项
export default {
  inheritAttrs: false
}
</script>

<script lang="ts" setup name="SubMenuItem">
  import { stringify } from 'querystring'
  import { defineProps,defineEmits } from 'vue'
  import { storeToRefs } from 'pinia'
  import useMenueRouterStore from '@stores/menueRouter'

  //只能解析state 不能解析方法  方法需要单独调用
const store=useMenueRouterStore();

const clickRouter=(item)=>{
  store.navationToPage(item)
}
  
const data=defineProps({
  list:{},
})
</script>

