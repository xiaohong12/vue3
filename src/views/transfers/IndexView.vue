<template>
    <div>
      <Son :msg="msg" :data="data" title='hellow'  @ssss="changeName" v-model="data.searchText" class="name"></Son>{{data.searchText}}
    </div>
</template>

<script setup>
import { toRefs,ref,reactive } from 'vue'
import Son from './SonView.vue'

const msg=ref("我只想做个坏人")
const data=reactive({
    age:18,
    name:'我是一个深井冰',
    searchText:"213456"
})

const changeName=(e)=>{
    data.name=e
}
</script>

<style lang="scss" scoped>
 .name{
     color:red
 }
</style>