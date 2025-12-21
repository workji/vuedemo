<template>
  <div class="mt-4 mb-4">
    <h2>汽车信息：一台{{ car.brand }}汽车，价值{{ car.price }}万</h2>
    <button class="btn btn-outline-primary me-2" @click="changeCarBrand">修改汽车品牌</button>
    <button class="btn btn-outline-primary me-2" @click="changeCarPrice">修改汽车价格</button>
    <button class="btn btn-outline-primary me-2" @click="changeCar">修改汽车</button>
  </div>
</template>

<script lang="ts" setup>
    import { reactive } from "vue";

    // data()
    // 普通对象, 嵌套对象 => reactive()
    let car = reactive({ brand: '奔驰', price: 100 })

    // methods
    function changeCarBrand() {
        car.brand = '宝马'
    }
    function changeCarPrice() {
        car.price += 10;
    }
    function changeCar() {
        // car = { brand: '奥迪', price: 120 } // ❌ 不能给 reactive 对象重新赋值
        Object.assign(car, { brand: '奥迪', price: 120 }) // ✅ 使用 Object.assign 修改 reactive 对象的值
    }
</script>

<style scoped></style>