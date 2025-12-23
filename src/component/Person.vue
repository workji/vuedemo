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
import { defineProps, withDefaults } from "vue";
import { type Persons } from "@/types";
// 单纯接受属性，如果父组件传递错误类型，这里不会有任何警告或报错
// defineProps(["name", "age", "list"]);

// 第三种写法：接收 + 限制类型 + 指定默认值 + 限制必要性?
withDefaults(defineProps<{name:string, age:number, list?:Persons}>(), {
  name: "默认名字",
  age: 0,
  list: () => [
    { name: "默认李四", age: 20 },
    { name: "默认王五", age: 22 },
    { name: "默认赵六", age: 24 },
  ],
});
</script>

<style scoped>
  .border {
    border: 2px solid;
    border-color: #42b983;
    margin: 4px;
  }
</style>