<template>
  <div class="m-4 border">
    <h2>姓名：{{ name }} - 年龄：{{ age }}</h2>
    <ul>
      <li v-for="(item, index) in list" :key="index">
        {{ item.name }} - {{ item.age }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from "vue";
import { type Persons } from "@/types";
// 单纯接受属性，如果父组件传递错误类型，这里不会有任何警告或报错
// defineProps(["name", "age", "list"]);

// 使用类型定义属性，接受 + 限制类型
defineProps<{name:string, age:number, list:Persons}>()
</script>

<style scoped>
  .border {
    border: 2px solid;
    border-color: #42b983;
    margin: 4px;
  }
</style>