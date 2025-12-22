<template>
  <div class="mt-4 mb-4">
    <h1>情况三：监视【reactive】定义的【对象类型】数据</h1>
    <h2>姓名: {{ person.name }}</h2>
    <h2>年龄: {{ person.age }}</h2>
    <button class="btn btn-outline-primary me-2" @click="changeName">更改名字</button>
    <button class="btn btn-outline-primary me-2" @click="changeAge">更改年龄</button>
    <button class="btn btn-outline-primary me-2" @click="changePerson">更改整个人</button>
  </div>
</template>

<script lang="ts" setup>
import { reactive, watch } from "vue";
let person = reactive({
  name: "张三",
  age: 18,
});

function changeName() {
  person.name += "!";
}

function changeAge() {
  person.age += 1;
}

function changePerson() {
  // reactive定义的对象不可以整体替换，否则会失去响应式 特性
  // person.value = {
  //   name: "李四",
  //   age: 20,
  // };

  Object.assign(person, {
    name: "李四",
    age: 20,
  });
}

// 监视【reactive】定义的【对象类型】数据
// 且默认是开启深度监视的, 无需额外配置
watch(person, (newVal, oldVal) => {
  console.log("person对象发生了变化");
  console.log("旧值:", oldVal);
  console.log("新值:", newVal);
});
</script>

<style scoped></style>