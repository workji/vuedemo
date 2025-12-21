<template>
  <div class="mt-4 mb-4">
    <h2>姓名：{{person.name}}</h2>
    <h2>年龄：{{person.age}}</h2>
    <h2>性别：{{person.gender}}</h2>
    <button class="btn btn-outline-primary me-2" @click="changeName">修改名字</button>
    <button class="btn btn-outline-primary me-2" @click="changeAge">修改年龄</button>
    <button class="btn btn-outline-primary me-2" @click="changeGender">修改性别</button>
  </div>
</template>

<script lang="ts" setup>
    import {ref, reactive, toRefs, toRef} from 'vue'

    // data()
    let person = reactive({name:'张三', age:18, gender:'男'})

    //　直接解构赋值会导致响应式失效
    // let {name, gender} = person

    // 通过toRefs将person对象中的n个属性批量取出，且依然保持响应式的能力
    // 相当于给person对象中的每个属性都调用了一次toRef方法
    let {name, gender} = toRefs(person)

    // 通过toRef将person对象中的单个属性取出，且依然保持响应式的能力
    let age = toRef(person, 'age')

    // methods
    function changeName(){
        name.value += '~'
    }
    function changeAge(){
        age.value += 1
    }
    function changeGender(){
        gender.value = '女'
    }
</script>

<style scoped></style>