
let lang: string = 'TypeScript';//如果省略类型说明，TS也可进行自动推断
//error! 如果需要可以使用联合类型：let lang: number | string = 'TS';
let age: number = 89;


const pi: number = 3.14159;//pi以后不可改变，类似常量

//解构数组
let input = [89, 64, 2018, 10];
let [x, second] = input;//注意使用[]
console.log(x); // 89
console.log(second); // 64
let [one, ...others] = input; //剩余变量
console.log(...others);
//展开
let newArr = [89, ...others, 18];
console.log(newArr);
//解构对象
let o = {
  a: "foo",
  b: 12,
  c: "bar"
};
let {a, b} = o;//注意使用{}，且变量名需与对象中道属性名一致
console.log(a, b);
        
function add(x: number, y: number) {
    return x + y;
  }
console.log(add(1,2))

let add2 = (n1: number, n2: number) => {
    let sum = n1 + n2;
    return sum;//改为sum++结果如何？
  }