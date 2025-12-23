<template>
  <Person ref="ren" />
  <button class="btn btn-outline-primary me-2" @click="showLog">点击我</button>
</template>

<script lang="ts" setup>
  import {ref} from 'vue'
  import Person from "@/component/Person.vue";

  let ren = ref()

  // 用在组件标签上，获取的是组件实例对象。
  function showLog() {
    console.log(ren.value.name) // defineExpose暴露了，可以获取到
    // console.log(ren.value.age) // 没有暴露，所以获取不到
  }
</script>

<style scoped>
</style>
