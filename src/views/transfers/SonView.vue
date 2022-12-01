<template>
    <div class="text">
        {{title}}
{{datas.name}}
{{datas.age}}
{{msg}}
{{datas.searchText}}
<el-button @click="changeName" >点击</el-button>

    </div>
</template>

<script setup>
import { reactive, toRefs } from 'vue'
const emit = defineEmits(['ssss',])
let ssd= defineProps({
     msg:String,
     data:Object,
     title:String,
     searchText:String
 })
 const datas=reactive(ssd.data)

 const changeName=()=>{
    emit('ssss',new Date().valueOf())
 }
 

</script>

<style lang="scss" scoped>
.text{
    font-size: 55px;
}
</style>