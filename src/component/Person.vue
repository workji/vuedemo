<template>
  <div class="m-4 border">
    <h1 ref="title1">尚硅谷</h1>
    <h2 ref="title2">前端</h2>
    <h3 ref="title3">Vue</h3>
    <input type="text" ref="inpt"> <br><br>
    <button class="btn btn-outline-primary me-2" @click="showLog">点我打印内容</button>
  </div>
</template>

<script lang="ts" setup>
  import { ref, defineExpose } from 'vue';
  let title2 = ref()

  // 用在普通DOM HTML标签上，获取的是`DOM`节点。
  function showLog() {
    console.log(title2.value.innerHTML);
  }

  // 将组件中的数据交给外部使用
  let name = ref('张三')
  let age = ref(18)
  // 只有允许的才会expose暴露给外部使用
  defineExpose({name})
</script>

<style scoped></style>