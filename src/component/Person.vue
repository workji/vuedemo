<template>
    <div class="container person">
        <h2>姓名：{{name}}</h2>
        <h2>年龄：{{age}}</h2>
        <button @click="changeName">修改名字</button>
        <button @click="changeAge">年龄+1</button>
        <button @click="showTel">点我查看联系方式</button>
    </div>
</template>

<script lang="ts">
    export default {
        name: "Person",
        data() {
            return {
                name: "张三",
                age: 18,
                tel: "123-456-7890"
            };
        },
        methods: {
            changeName() {
                this.name = "李四";
            },
            changeAge() {
                this.age += 1;
            },
            showTel() {
                alert(`联系方式：${this.tel}`);
            }
        }
    }
</script>

<style scoped></style>