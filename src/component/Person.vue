<template>
  <div class="m-4 border">
    <span>{{name}} - {{age}}</span>
    <button @click="showLog">Click Me</button>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from "vue";
const x = defineProps(['name', 'age']);

function showLog()  {
  console.log(x.name, x.age);
}
</script>

<style scoped>
  .border {
    border: 2px solid;
    border-color: #42b983;
    margin: 4px;
  }
</style>