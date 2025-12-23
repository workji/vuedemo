<template>
  <div class="mt-4 mb-4">
    <h1>需求：水温达到50℃，或水位达到20cm，则联系服务器</h1>
    <h2 id="demo">水温：{{temp}}</h2>
    <h2>水位：{{height}}</h2>
    <button class="btn btn-outline-primary me-2" @click="changePrice">水温+1</button>
    <button class="btn btn-outline-primary me-2" @click="changeSum">水位+10</button>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch, watchEffect } from 'vue';
let temp = ref(20);
let height = ref(0);

function changePrice() {
  temp.value += 10;
}

function changeSum() {
  height.value += 10;
}

// 用watch实现，需要明确的指出要监视：temp、height
// 这里的问题是，如果监视多个响应式数据，需要用数组写很多监视，比较麻烦
// 
watch([temp, height], ([newTemp, newHeight]) => {
  // 室温达到50℃，或水位达到20cm，立刻联系服务器
  if (newTemp >= 50 || newHeight >= 20) {
    console.log('联系服务器');
  }
});

// 用watchEffect实现，不需要明确指出要监视哪些数据, 会自动根据实现来监视
// 而且会立即执行一次好像watch的immediate选项
watchEffect(() => {
  // 室温达到50℃，或水位达到20cm，立刻联系服务器
  if (temp.value >= 50 || height.value >= 20) {
    console.log('联系服务器--watchEffect');
  }
});
</script>

<style scoped></style>