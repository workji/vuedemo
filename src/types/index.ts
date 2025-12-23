// 定义一个接口用于限制Person对象的结构
export interface PersonType {
  name: string;
  age: number;
}

// 定义一个自定义类型
// export type Persons = PersonType[];
export type Persons = Array<PersonType>;