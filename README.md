typescript 定義サンプル
  import { ref, reactive } from 'vue';
  import { type PersonType, type Persons } from '@/types/index';

  let person:PersonType = reactive({
    name: "张三",
    age: 18,
  })

  let persons:Persons = reactive([
    { name: "李四", age: 20 },
    { name: "王五", age: 22 },
    { name: "赵六", age: 24 },
  ]);

  let personList:Array<PersonType> = reactive([
    { name: "李四", age: 20 },
    { name: "王五", age: 22 },
    { name: "赵六", age: 24 },
  ]);

  let personsRef = ref<Persons>([
    { name: "小红", age: 14 },
    { name: "小刚", age: 15 },
  ]);
  let personRef = ref<PersonType>({ name: "小明", age: 16 });
  let personListRef = ref<Array<PersonType>>([
    { name: "小红", age: 14 },
    { name: "小刚", age: 15 },
  ]);