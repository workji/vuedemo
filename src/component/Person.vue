<template>
  <div class="m-4 border">
    <h1>姓名:{{person.name}}</h1>
    <h2>年龄:{{person.age}}</h2>
    <hr />
    <div v-for="(item, index) in persons" :key="index" class="m-2 p-2 border">
      <h3>姓名:{{item.name}} - 年龄:{{item.age}}</h3>
      <button @click="persons.splice(index, 1)">删除</button>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { ref, reactive } from 'vue';
  import { type PersonType, type Persons } from '@/types/index';

  let person = reactive<PersonType>({
    name: "张三",
    age: 18,
  })

  let persons = reactive<Persons>([
    { name: "李四", age: 20 },
    { name: "王五", age: 22 },
    { name: "赵六", age: 24 },
  ]);

  let personList = reactive<Array<PersonType>>([
    { name: "李四", age: 20 },
    { name: "王五", age: 22 },
    { name: "赵六", age: 24 },
  ]);

  let personsRef = ref<Persons>([
    { name: "小红", age: 14 },
    { name: "小刚", age: 15 },
  ]);
  let personRef = ref<PersonType>({ name: "小明", age: 16 });
  let personListRef = ref<Array<PersonType>>([
    { name: "小红", age: 14 },
    { name: "小刚", age: 15 },
  ]);
</script>

<style scoped></style>