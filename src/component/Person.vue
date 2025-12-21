<template>
  <div class="mt-4 mb-4">
    <h2>姓名：{{name}}</h2>
    <h2>年龄：{{age}}</h2>
    <button class="btn btn-outline-primary me-2" @click="changeName">修改名字</button>
    <button class="btn btn-outline-primary me-2" @click="changeAge">年龄+1</button>
  </div>

  <div class="mt-4 mb-4">
    <h2>汽车信息：一台{{ car.brand }}汽车，价值{{ car.price }}万</h2>
    <h2>游戏列表：</h2>
    <ul>
      <li v-for="g in games" :key="g.id">{{ g.name }}</li>
    </ul>
    <h2>测试：{{obj.a.b.c.d}}</h2>
    <button class="btn btn-outline-primary me-2" @click="changeCarPrice">修改汽车价格</button>
    <button class="btn btn-outline-primary me-2" @click="changeFirstGame">修改第一游戏</button>
    <button class="btn btn-outline-primary me-2" @click="test">测试</button>
  </div>
</template>

<script lang="ts" setup>
    import { reactive, ref } from "vue";

    // data()
    // 基本类型, 数组 => ref()
    let name = ref("张三");
    let age = ref(18);
    // 数组使用ref的原因 是因为reactive([]) 的类型系统不确定性，导致TypeScript无法推断出数组元素的类型
    let games = ref([
        { id: 'ahsgdyfa01', name: '英雄联盟' },
        { id: 'ahsgdyfa02', name: '王者荣耀' },
        { id: 'ahsgdyfa03', name: '原神' }
    ])
    
    // 普通对象, 嵌套对象 => reactive()
    let car = reactive({ brand: '奔驰', price: 100 })
    let obj = reactive({
        a:{
            b:{
                c:{
                    d:666
                }
            }
        }
    })

    // methods
    function changeName() {
        console.log("修改名字被点击了");
        name.value = "李四";
    }
    function changeAge() {
        console.log("年龄+1被点击了");
        age.value += 1;
    }
    function changeFirstGame() {
        games.value[0]!.name = '流星蝴蝶剑'
    }

    // reactive对象的属性修改不需要.value
    function changeCarPrice() {
        car.price += 10
    }
    function test(){
        obj.a.b.c.d = 999
    }
</script>

<style scoped></style>