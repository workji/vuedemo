<template>
  <div class="mt-4 mb-4">
    姓：<input type="text" v-model="firstName"> <br>
    名：<input type="text" v-model="lastName"> <br>
    全名(单纯拼接)：<span>{{firstName}} {{ lastName }}</span> <br>
    全名(按钮动态拼接)：<span>{{fullName}}</span> <br>
    全名(计算属性首字母大写拼接，只读)：<span>{{fullNameComputed}}</span> <br>
    全名(计算属性首字母大写拼接,可修改)：<span>{{fullNameComputedWriteAble}}</span> <br>
    <button class="btn btn-outline-primary me-2" @click="clearName">Clear</button>
    <button class="btn btn-outline-primary me-2" @click="changeFullName">全名改为：li-si</button>
  </div>
</template>

<script lang="ts" setup>
  import {ref, computed} from 'vue'

  let firstName = ref('zhang')
  let lastName = ref('san')

  let fullName = ref('')

  function clearName() {
    fullName.value = ''
  }

  // 函数写法，点击几次就会调用几次，没有缓存
  function changeFullName() {
    console.log('change full name called')
    fullName.value = firstName.value + lastName.value
    // 计算属性默认是只读的不能修改，如果想要修改，需要使用 set 方法
    // fullNameComputed = firstName.value + lastName.value
    fullNameComputedWriteAble.value = 'li si'
  }

  // 计算属性：首字母大写拼接
  // 计算属性有缓存，只有依赖的 firstName 或 lastName 变化时才会重新计算一次
  // 默认写法是只读的不能修改，如果想要修改，需要使用 set 方法
  const fullNameComputed = computed(() => {
    const first = firstName.value.charAt(0).toUpperCase() + firstName.value.slice(1)
    const last = lastName.value.charAt(0).toUpperCase() + lastName.value.slice(1)
    return first + ' ' + last
  })

  // 可读可写的计算属性
  const fullNameComputedWriteAble = computed({
    get() {
      const first = firstName.value.charAt(0).toUpperCase() + firstName.value.slice(1)
      const last = lastName.value.charAt(0).toUpperCase() + lastName.value.slice(1)
      return first + ' ' + last
    },
    set(newValue: string) {
      const names = newValue.split(' ')
      if (names.length === 2) {
        firstName.value = names[0]!.charAt(0).toLowerCase() + names[0]!.slice(1)
        lastName.value = names[1]!.charAt(0).toLowerCase() + names[1]!.slice(1)
      }
    }
  }) 
</script>

<style scoped></style>