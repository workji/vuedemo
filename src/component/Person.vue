<template>
    <div class="container border border-primary mt-4 p-4">
        <h2>姓名：{{name}}</h2>
        <h2>年龄：{{age}}</h2>
        <button class="btn btn-outline-primary me-2" @click="changeName">修改名字</button>
        <button class="btn btn-outline-primary me-2" @click="changeAge">年龄+1</button>
        <button class="btn btn-outline-primary" @click="showTel">点我查看联系方式</button>
    </div>
</template>

<script lang="ts">
    // 组件名跟文件名不一样时，需要在这里指定组件名
    // 如果组件名跟文件名一样，可以省略这段<scrpit>不写
    export default {
        name: "Person",
    }
</script>

<script lang="ts" setup>
    // data()
    // 注意：此时的name、age、tel数据都不是响应式数据
    let name = "张三";
    let age = 18;
    let tel = "123-456-7890";

    // methods
    function changeName() {
        console.log("修改名字被点击了");
        name = "李四";
    }

    function changeAge() {
        console.log("年龄+1被点击了");
        age += 1;
    }

    function showTel() {
        alert(`联系方式：${tel}`);
    }
</script>

<style scoped></style>