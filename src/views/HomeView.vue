<template>
     <el-button-group>
    <el-button type="primary" :icon="ArrowLeft" @click="changeName">{{data?.name}}</el-button>
      <el-button type="primary" v-for="(item,index) in list" v-bind:key="index" @click="addItem(index)" >
      {{item}}
    </el-button>
    <el-input v-model="data.inputValue" placeholder="Please input" :style="{marginTop:'20px'}" ref="inputs"/>
    <el-input v-model="ss" placeholder="Please input" :style="{marginTop:'20px'}" v-show="isShow"/>
  </el-button-group>
</template>

<script lang="ts" setup >
import { computed, defineComponent, onMounted, toRefs } from 'vue'
import { reactive,ref,watch} from 'vue'

import {
  ArrowLeft,
  ArrowRight,
  Delete,
  Edit,
  Share,
} from '@element-plus/icons-vue'
      //定义基本类型为引用数据
      const data=reactive({
        name:'xiaohong',
        inputValue:20
      });
      const inputs = ref(null)
      const isShow=$ref(false)
      //定义引用类型为响应数据
      const list=$ref([1,2,3,4])
      const changeName=()=>{
        data.name=new Date().valueOf()+'xiaohong'
      }
      const addItem=(index)=>{
         list.push(list.length+1)
      }
       //计算属性
      const ss=computed(()=>{
         return  data.inputValue* Math.random(1)*100
      })
      
      //监听
      const dd=watch(()=>data.inputValue,(newData,oldData)=>{
        isShow=!isShow
      })

</script>

<style scoped>

</style>