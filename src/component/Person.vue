<template>
  <div class="mt-4 mb-4">
    <h1>情况一：监视【ref】定义的【基本类型】数据</h1>
    当前求和SUM={{ sum }}<br>
    <button class="btn btn-outline-primary me-2" @click="addOne">点我加1</button>
    <button class="btn btn-outline-primary me-2" @click="subOne">点我减1</button>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue';

const sum = ref(0);

function addOne() {
  sum.value += 1;
}
function subOne() {
  sum.value -= 1;
}

// 监视【ref】定义的【基本类型】数据
// watch监听sum的变化 watch(监听的变量, 变量变化后执行的回调函数){}
// 这里注意sum是一个ref类型，但是在watch中监听时，不需要加sum.value
const stopWatch = watch(sum, (newVal, oldVal)=>{
  console.log('sum的值变化了，现在是：' + sum.value + '，之前是：' + oldVal);

  if (sum.value >= 10) {
    console.log('sum的值大于等于10了，停止监听');
    // 停止监听
    stopWatch();
  }
})

</script>

<style scoped></style>