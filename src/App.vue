<template>
  <Person name="alex" :age=10 />
</template>

<script lang="ts" setup>
  import Person from "@/component/Person.vue";
  import { reactive } from "vue";
  import { type Persons } from "@/types";

  let persons = reactive<Persons>([
    { name: "李四", age: 20 },
    { name: "王五", age: 22 },
    { name: "赵六", age: 24 },
  ]);
</script>

<style scoped>
</style>
