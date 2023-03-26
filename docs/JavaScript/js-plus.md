---
title: JavaScript 高级
sidebar_position: 4
---

# JavaScript 进阶

> 学习作用域、变量提升、闭包等语言特征，加深对 JavaScript 的理解，掌握变量赋值、函数声明的简洁语法，降低代码的冗余度。

- 理解作用域对程序执行的影响
- 能够分析程序执行的作用域范围
- 理解闭包本质，利用闭包创建隔离作用域
- 了解什么变量提升及函数提升
- 掌握箭头函数、解析剩余参数等简洁语法

### 一、作用域

> 了解作用域对程序执行的影响及作用域链的查找机制，使用闭包函数创建隔离作用域避免全局变量污染。

作用域（scope）规定了变量能够被访问的“范围”，离开了这个“范围”变量便不能被访问，作用域分为全局作用域和局部作用域。

#### 1.1 局部作用域

局部作用域分为函数作用域和块作用域。

##### 函数作用域

在函数内部声明的变量只能在函数内部被访问，外部无法直接访问。

```html
<script>
  // 声明 counter 函数
  function counter(x, y) {
    // 函数内部声明的变量
    const s = x + y
    console.log(s) // 18
  }
  // 设用 counter 函数
  counter(10, 8)
  // 访问变量 s
  console.log(s)// 报错
</script>
```

总结：

1. 函数内部声明的变量，在函数外部无法被访问
2. 函数的参数也是函数内部的局部变量
3. 不同函数内部声明的变量无法互相访问
4. 函数执行完毕后，函数内部的变量实际被清空了

##### 块作用域

在 JavaScript 中使用 `{}` 包裹的代码称为代码块，代码块内部声明的变量外部将【有可能】无法被访问。

```html
<script>
  {
    // age 只能在该代码块中被访问
    let age = 18;
    console.log(age); // 正常
  }
  
  // 超出了 age 的作用域
  console.log(age) // 报错
  
  let flag = true;
  if(flag) {
    // str 只能在该代码块中被访问
    let str = 'hello world!'
    console.log(str); // 正常
  }
  
  // 超出了 age 的作用域
  console.log(str); // 报错
  
  for(let t = 1; t <= 6; t++) {
    // t 只能在该代码块中被访问
    console.log(t); // 正常
  }
  
  // 超出了 t 的作用域
  console.log(t); // 报错
</script>
```

JavaScript 中除了变量外还有常量，常量与变量本质的区别是【常量必须要有值且不允许被重新赋值】，常量值为对象时其属性和方法允许重新赋值。

```html
<script>
  // 必须要有值
  const version = '1.0.0';

  // 不能重新赋值
  // version = '1.0.1';

  // 常量值为对象类型
  const user = {
    name: '小明',
    age: 18
  }

  // 不能重新赋值
  user = {};

  // 属性和方法允许被修改
  user.name = '小小明';
  user.gender = '男';
</script>
```

总结：

1. `let` 声明的变量会产生块作用域，`var` 不会产生块作用域
2. `const` 声明的常量也会产生块作用域
3. 不同代码块之间的变量无法互相访问
4. 推荐使用 `let` 或 `const`

注：开发中 `let` 和 `const` 经常不加区分的使用，如果担心某个值会不小被修改时，则只能使用 `const` 声明成常量。

#### 1.2 全局作用域

`<script>` 标签和 `.js` 文件的【最外层】就是所谓的全局作用域，在此声明的变量在函数内部也可以被访问。

```html
<script>
  // 此处是全局
  
  function sayHi() {
    // 此处为局部
  }

  // 此处为全局
</script>
```

全局作用域中声明的变量，任何其它作用域都可以被访问，如下代码所示：

```html
<script>
    // 全局变量 name
    const name = '小明'
  
   // 函数作用域中访问全局
    function sayHi() {
      // 此处为局部
      console.log('你好' + name)
    }

    // 全局变量 flag 和 x
    const flag = true
    let x = 10
  
   // 块作用域中访问全局
    if(flag) {
      let y = 5
      console.log(x + y) // x 是全局的
    }
</script>
```

总结：

1. 为 `window` 对象动态添加的属性默认也是全局的，不推荐！
2. 函数中未使用任何关键字声明的变量为全局变量，不推荐！！！
3. 尽可能少的声明全局变量，防止全局变量被污染

JavaScript 中的作用域是程序被执行时的底层机制，了解这一机制有助于规范代码书写习惯，避免因作用域导致的语法错误。

#### 1.3 作用域链

在解释什么是作用域链前先来看一段代码：

```html
<script>
  // 全局作用域
  let a = 1
  let b = 2
  // 局部作用域
  function f() {
    let c
    // 局部作用域
    function g() {
      let d = 'yo'
    }
  }
</script>
```

函数内部允许创建新的函数，`f` 函数内部创建的新函数 `g`，会产生新的函数作用域，由此可知作用域产生了嵌套的关系。

如下图所示，父子关系的作用域关联在一起形成了链状的结构，作用域链的名字也由此而来。

![image-20220817151849974](https://img.up.cdn.nahida.cn/typora-user-images/image-20220817151849974.png)

作用域链本质上是底层的变量查找机制，在函数被执行时，会优先查找当前函数作用域中查找变量，如果当前作用域查找不到则会依次逐级查找父级作用域直到全局作用域，如下代码所示：

```html
<script>
  // 全局作用域
  let a = 1
  let b = 2

  // 局部作用域
  function f() {
    let c
    // let a = 10;
    console.log(a) // 1 或 10
    console.log(d) // 报错
    
    // 局部作用域
    function g() {
      let d = 'yo'
      // let b = 20;
      console.log(b) // 2 或 20
    }
    
    // 调用 g 函数
    g()
  }

  console.log(c) // 报错
  console.log(d) // 报错
  
  f();
</script>
```

总结：

1. 嵌套关系的作用域串联起来形成了作用域链
2. 相同作用域链中按着**从小到大**的规则查找变量
3. 子作用域能够访问父作用域，父级作用域无法访问子级作用域

#### 1.4  垃圾回收机制

> 垃圾回收机制(Garbage Collection) 简称 GC JS中内存的分配和回收都是自动完成的，内存在不使用的时候会被垃圾回收器自动回收。 正因为垃圾回收器的存在，许多人认为JS不用太关心内存管理的问题 但如果不了解JS的内存管理机制，我们同样非常容易成***内存泄漏（内存无法被回收）***的情况 不再用到的内存，没有及时释放，就叫做**内存泄漏**

**内存的生命周期：**

 JS环境中分配的内存, 一般有如下生命周期：

1. 内存分配：当我们声明变量、函数、对象的时候，系统会自动为他们分配内存
2. 内存使用：即读写内存，也就是使用变量、函数等
3. 内存回收：使用完毕，由垃圾回收自动回收不再使用的内存
4. **说明：**
    - **全局变量**一般不会回收(关闭页面回收)；
    - 一般情况下局部变量的值, 不用了, 会被自动回收掉

##### 两种常见的浏览器垃圾回收算法: 引用计数法 和 标记清除法

**引用计数**（大部分浏览器已经不使用）

 IE采用的引用计数算法, 定义“内存不再使用”的标准很简单，就是看一个对象是否有指向它的引用。

 **标记清除法**

现代的浏览器已经不再使用引用计数算法了。

现代浏览器通用的大多是基于标记清除算法的某些改进算法，总体思想都是一致的。

核心：

1. 标记清除算法将“不再使用的对象”定义为“无法达到的对象”。
2. 就是从根部（在JS中就是全局对象）出发定时扫描内存中的对象。 凡是能从根部到达的对象，都是还需要使用的。
3. 那些无法由根部出发触及到的对象被标记为不再使用，稍后进行回收。

![image-20220817155026177](https://img.up.cdn.nahida.cn/typora-user-images/image-20220817155026177.png)

#### 1.5 闭包

一个函数对周围状态的引用捆绑在一起，内层函数中访问到其外层函数的作用域

**简单理解：闭包 = 内层函数 + 外层函数的变量**（内层的函数用到了外层的函数）

**闭包的作用**：封闭数据，提供操作，外部也可以访问函数内部的变量

从代码形式上看闭包是一个做为返回值的函数，如下代码所示（闭包的基本格式）：

```html
<script>
  function foo() {
    let i = 0;

    // 函数内部分函数
    function bar() {
   console.log(++i);
    }

    // 将函数做为返回值
    return bar;
  }
  
  // fn 即为闭包函数
  let fn = foo();
  
  fn(); // 1
</script>
```

```JavaScript
//常见写法二

function outer(){
    let a = 100;
    return function(){
        console.log(a);
    }
}
const fun = outer();  
fun()   //调用函数




```

```JavaScript
//常见写法三 
function outer(){
    let a = 100;
    return function(){
        return a;
    }
}

const fun = outer();  
//调用函数
console.log(fun())     //100
```

**闭包的应用：实现数据的私有**

这个count 是个全局变量，很容易被修改:

```javascript
let count = 1;
function fun(){
        count++
        console.log(`函数被调用了${count}次`)
    }
fun();
fun()
```

这样实现了数据私有，无法直接修改count:

```JavaScript
function fn(){
    let count = 1;
    function fun(){
        count++
        console.log(`函数被调用了${count}次`)
    }
    return fun;
}
const result = fn();
result();
result();
```

总结：

1. 闭包本质仍是函数，只不是从函数内部返回的
2. 闭包能够创建外部可访问的隔离作用域，避免全局变量污染
3. **过度使用闭包可能造成内存泄漏（闭包的问题）**

注：回调函数也能访问函数内部的局部变量。

#### 1.6 变量提升

变量提升是 JavaScript 中比较“奇怪”的现象，它允许在变量声明之前即被访问，相当于代码执行之前，会先所有var声明的对象提升到 当前作用域的最前面。只提升声明，不提升赋值。

```html
<script>
  // 访问变量 str
  console.log(str + 'world!');

  // 声明变量 str
  var str = 'hello ';
</script>
```

总结：

1. 变量在未声明即被访问时会报语法错误
2. 变量在声明之前即被访问，变量的值为 `undefined`
3. `let` 声明的变量不存在变量提升，推荐使用 `let`
4. 变量提升出现在相同作用域当中
5. 实际开发中推荐先声明再访问变量

注：关于变量提升的原理分析会涉及较为复杂的词法分析等知识，而开发中使用 `let` 可以轻松规避变量的提升，因此在此不做过多的探讨，有兴趣可[查阅资料](https://segmentfault.com/a/1190000013915935)。

### 二、函数

> 知道函数参数默认值、动态参数、剩余参数的使用细节，提升函数应用的灵活度，知道箭头函数的语法及与普通函数的差异。

#### 2.1 函数提升

函数提升与变量提升比较类似，是指函数在声明之前即可被调用。

代码执行的时候，会把所有的函数声明提升到当前作用域的最前面。

只提升函数声明，不提升函数调用

```html
<script>
  // 调用函数
  foo()
  // 声明函数
  function foo() {
    console.log('声明之前即被调用...')
  }

  // 不存在提升现象
  bar()  // 错误
  var bar = function () {         //这个是赋值，不是方法声明
    console.log('函数表达式不存在提升现象...')
  }
</script>
```

**函数表达式 必须先声明和赋值，后调用。否则会报错。**

总结：

1. 函数提升能够使函数的声明调用更灵活
2. 函数表达式不存在提升的现象
3. 函数提升出现在相同作用域当中

#### 2.2 参数

函数参数的使用细节，能够提升函数应用的灵活度。

##### 默认值

```html
<script>
  // 设置参数默认值
  function sayHi(name="小明", age=18) {
    document.write(`<p>大家好，我叫${name}，我今年${age}岁了。</p>`);
  }
  // 调用函数
  sayHi();
  sayHi('小红');
  sayHi('小刚', 21);
</script>
```

总结：

1. 声明函数时为形参赋值即为参数的默认值
2. 如果参数未自定义默认值时，参数的默认值为 `undefined`
3. 调用函数时没有传入对应实参时，参数的默认值被当做实参传入

##### 动态参数

`arguments` 是函数内部内置的伪数组变量，它包含了调用函数时传入的所有实参。

```html
<script>
  // 求生函数，计算所有参数的和
  function sum() {
    // console.log(arguments)
    let s = 0
    for(let i = 0; i < arguments.length; i++) {
      s += arguments[i]
    }
    console.log(s)
  }
  // 调用求和函数
  sum(5, 10)// 两个参数
  sum(1, 2, 4) // 两个参数
</script>
```

总结：

1. `arguments` 是一个伪数组
2. `arguments` 的作用是动态获取函数的实参

##### 剩余参数

```html
<script>
  function config(baseURL, ...other) {
    console.log(baseURL) // 得到第一个值 'http://baidu.com'
    console.log(other)  // other  得到 ['get', 'json']    剩下的值组成了一个数组存到了other[]里面
  }
  // 调用函数
  config('http://baidu.com', 'get', 'json');
</script>
```

总结：

1. `...` 是语法符号，置于最末函数形参之前，用于获取多余的实参
2. 借助 `...` 获取的剩余实参，是个**真数组**。
3. 开发过程中，使用剩余函数，想必也是挺好的

`...` **的补充：展开运算符**

展开运算符(`...`)  将一个数组进行展开

**典型运用场景： 求数组最大值(最小值)、合并数组等**

```javascript
const arr = [1,2,2,3];
//展开数组，开发中少用
console.log(...arr) // 1,2,2,3

//求数组最大值(最小值)
console.log(Math.max(...arr))     //3
console.log(Math.min(...arr))     //1

//合并数组
const arr2 = [4,5]
const arr3 = [...arr,...arr2]         //合并数组
console.log(arr3)    //[1,2,2,3,4,5]
```

#### 2.3 箭头函数

箭头函数是一种声明函数的简洁语法，它与普通函数并无本质的区别，差异性更多体现在语法格式上。

```html
<script>
  // 箭头函数
  const foo = () => {
    console.log('^_^ 长相奇怪的函数...');
  }
  // 调用函数
  foo()
  
  // 更简洁的语法
  const form = document.querySelector('form')
  form.addEventListener('click', ev => ev.preventDefault())
    
    
    //箭头函数可以返回一个对象
    const fn1 = uname => ({name:uname});   //避免对象的{}与函数的{}冲突，此处的对象需要用（）括起来
    console.log(fn1('Barbatos'));
    
    
    const getSum = (...arr) =>{
        let sum = 0;
        for(let i = 0;i<arr.length,i++){
            sum +=arr[i];
        }
        return sum;
    }
    let result = getSum(1,2,3,4,5);
    console.log(result);
    
</script>
```

总结：

1. 箭头函数属于表达式函数，因此**不存在**函数提升
2. 箭头函数**只有一个参数**时可以省略圆括号 `()`
3. 箭头函数函数体**只有一行代码**时可以省略花括号 `{}`，并**自动做为返回值**（可以省略return）被返回
4. 箭头函数中**没有** `arguments`，只能使用 `...` 动态获取实参

**箭头的this**

箭头函数**不会创建**自己的this,它只会从自己的作用域链的上一层沿用this，**箭头函数的this，指向的是上一层作用域的this**

在开发中【**使用箭头函数前需要考虑函数中 this 的值**】，事件回调函数使用箭头函数时，this 为全局的 window，因此 DOM事件回调函数为了简便，还是不太推荐使用箭头函数

### 三、解构赋值

> 知道解构的语法及分类，使用解构简洁语法快速为变量赋值。

解构赋值是一种快速为变量赋值的简洁语法，本质上仍然是为变量赋值，分为数组解构、对象解构两大类型。

#### 3.1 数组解构

数组解构是将数组的单元值快速批量赋值给一系列变量的简洁语法，如下代码所示：

```html
<script>
  // 普通的数组
  let arr = [1, 2, 3];
  // 批量声明变量 a b c 
  // 同时将数组单元值 1 2 3 依次赋值给变量 a b c
  let [a, b, c] = arr;
  console.log(a); // 1
  console.log(b); // 2
  console.log(c); // 3
    
    
    //两个值变换
    let x = 1 ;
    let y = 2;
    [y , x] = [x , y]
    console.log(x); // 2
   console.log(y); // 1
</script>
```

总结：

1. 赋值运算符 `=` 左侧的 `[]` 用于批量声明变量，右侧数组的单元值将被赋值给左侧的变量
2. 变量的顺序对应数组单元值的位置依次进行赋值操作
3. 变量的数量大于单元值数量时，多余的变量将被赋值为  `undefined`
4. 变量的数量小于单元值数量时，可以通过 `...` 获取剩余单元值，但只能置于最末位
5. 允许初始化变量的默认值，且只有单元值为 `undefined` 时默认值才会生效

**支持多维数组解构赋值**

```JavaScript
const [a,b,c] =[1,2,[3,4]]
console.log(c)   //[3,4]

const[d,[e,f]] = [5,[6,7]]
console.log(f)  //7
```

作业

```html
<script>
  const pc = ['海尔','联想','小米','方正']
  const [hr,lx,xm,fz] = pc;
  console.log(xm);

  function getValue() {
    return [100,60]
  }
  const getV = getValue();
  const [max,min] = getV;
  console.log(max)
</script>
```

#### 3.2 对象解构

对象解构是将对象属性和方法快速批量赋值给一系列变量的简洁语法，如下代码所示：

​  语法：`let {key1,key2:key21,key3} = obj               //对象是无序的`

```html
<script>
  // 普通对象
  const user = {
    name: '小明',
    age: 18
  };
  // 批量声明变量 name age
  //属性名和变量名必须要一致
  // 同时将数组单元值 小明  18 依次赋值给变量 name  age
  const {name, age} = user

  console.log(name) // 小明
  console.log(age) // 18
    
   
    const obj={
    name : 'Morax',
    age : 6000,
    gender : 'M'
}
    


 
</script>
```

总结：

1. 赋值运算符 `=` 左侧的 `{}` 用于批量声明变量，右侧对象的属性值将被赋值给左侧的变量
2. 对象属性的值将被赋值给与属性名相同的变量
3. 对象中找不到与变量名一致的属性时变量值为 `undefined`
4. 允许初始化变量的默认值，属性不存在或单元值为 `undefined` 时默认值才会生效

**对象的解构变量重新命名：**`旧变量名：新变量名`

```JavaScript
 const obj={
    name : 'Morax',
    age : 6000,
    gender : 'M'
 }

 //解构重命名
 const {name:n,age:a,gender:g}=obj
 consloe.log(a)   //6000

 //面试题
 console.log(gender)  // is not defined ,是因为重命名之后gender变量没用了
 console.log(name)  // 打印空值。因为name是js保留字，重命名之后name变为系统默认的空值


 //解构数组对象
 const pig = [
        {
            uname:'pige',
            age:6
        },
    ]
 const [{uname,age}] = pige;
 console.log(uname)  //pige
 

```

**多级对象解构**

```JavaScript
const pig = {
 name: '佩奇',
 family: {
   mother: '猪妈妈',
   father: '猪爸爸',
   sister: '乔治'
  },
 age: 6
}

const {name,family{mother,father,sister},age} = pig
console.log(name)

```

### 补充

`forEach()`方法，只能遍历数组,不返回值，适合于遍历数组对象。

 `filter()` 过滤数组单元值，生成新数组

```javascript
let arr = [20,30,40]

const newarr = arr.filter(function(item,index){
 return item >=30
})

//   const newarr = arr.filter(item => item>=20)
```

案例：

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>商品渲染</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    .list {
      width: 990px;
      margin: 0 auto;
      display: flex;
      flex-wrap: wrap;
    }

    .item {
      width: 240px;
      margin-left: 10px;
      padding: 20px 30px;
      transition: all .5s;
      margin-bottom: 20px;
    }

    .item:nth-child(4n) {
      margin-left: 0;
    }

    .item:hover {
      box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
      transform: translate3d(0, -4px, 0);
      cursor: pointer;
    }

    .item img {
      width: 100%;
    }

    .item .name {
      font-size: 18px;
      margin-bottom: 10px;
      color: #666;
    }

    .item .price {
      font-size: 22px;
      color: firebrick;
    }

    .item .price::before {
      content: "¥";
      font-size: 14px;
    }

    .filter {
      display: flex;
      width: 990px;
      margin: 0 auto;
      padding: 50px 30px;
    }

    .filter a {
      padding: 10px 20px;
      background: #f5f5f5;
      color: #666;
      text-decoration: none;
      margin-right: 20px;
    }

    .filter a:active,
    .filter a:focus {
      background: #05943c;
      color: #fff;
    }
  </style>
</head>

<body>
  <div class="filter">
    <a data-index="1" href="javascript:;">0-100元</a>
    <a data-index="2" href="javascript:;">100-300元</a>
    <a data-index="3" href="javascript:;">300元以上</a>
    <a href="javascript:;">全部区间</a>
  </div>
  <div class="list">
    <!-- <div class="item">
      <img src="" alt="">
      <p class="name"></p>
      <p class="price"></p>
    </div> -->
  </div>
  <script>
    // 2. 初始化数据
    const goodsList = [
      {
        id: '4001172',
        name: '称心如意手摇咖啡磨豆机咖啡豆研磨机',
        price: '289.00',
        picture: 'https://yanxuan-item.nosdn.127.net/84a59ff9c58a77032564e61f716846d6.jpg',
      },
      {
        id: '4001594',
        name: '日式黑陶功夫茶组双侧把茶具礼盒装',
        price: '288.00',
        picture: 'https://yanxuan-item.nosdn.127.net/3346b7b92f9563c7a7e24c7ead883f18.jpg',
      },
      {
        id: '4001009',
        name: '竹制干泡茶盘正方形沥水茶台品茶盘',
        price: '109.00',
        picture: 'https://yanxuan-item.nosdn.127.net/2d942d6bc94f1e230763e1a5a3b379e1.png',
      },
      {
        id: '4001874',
        name: '古法温酒汝瓷酒具套装白酒杯莲花温酒器',
        price: '488.00',
        picture: 'https://yanxuan-item.nosdn.127.net/44e51622800e4fceb6bee8e616da85fd.png',
      },
      {
        id: '4001649',
        name: '大师监制龙泉青瓷茶叶罐',
        price: '139.00',
        picture: 'https://yanxuan-item.nosdn.127.net/4356c9fc150753775fe56b465314f1eb.png',
      },
      {
        id: '3997185',
        name: '与众不同的口感汝瓷白酒杯套组1壶4杯',
        price: '108.00',
        picture: 'https://yanxuan-item.nosdn.127.net/8e21c794dfd3a4e8573273ddae50bce2.jpg',
      },
      {
        id: '3997403',
        name: '手工吹制更厚实白酒杯壶套装6壶6杯',
        price: '99.00',
        picture: 'https://yanxuan-item.nosdn.127.net/af2371a65f60bce152a61fc22745ff3f.jpg',
      },
      {
        id: '3998274',
        name: '德国百年工艺高端水晶玻璃红酒杯2支装',
        price: '139.00',
        picture: 'https://yanxuan-item.nosdn.127.net/8896b897b3ec6639bbd1134d66b9715c.jpg',
      },
    ]

    //渲染函数
    function render(arr){
      let str = '';
      arr.forEach(({name,price,picture})=>{
        str +=`
        <div class="item">
            <img src="${picture}" alt="">
            <p class="name">${name}</p>
            <p class="price">${price}</p>
        </div>
      `
      })
      document.querySelector('.list').innerHTML = str
    }
    render(goodsList)
    //筛选
    document.querySelector('.filter').addEventListener('click',e =>{
      const {tagName,dataset} = e.target

      if (tagName === 'A'){
        let arr=goodsList;
        if (dataset.index === '1'){
          arr = goodsList.filter(items =>items.price>=0 && items.price<=100)
        }else if (dataset.index === '2'){
          arr = goodsList.filter(items =>items.price>=100 && items.price<=200)
        }else if (dataset.index === '3'){
          arr = goodsList.filter(items =>items.price>200 && items.price<=300)
        }
        render(arr)
      }
    })

  </script>
</body>

</html>
```

### 四、面向对象

> 了解面向对象编程的基础概念及构造函数的作用，体会 JavaScript 一切皆对象的语言特征，掌握常见的对象属性和方法的使用。

- 了解面向对象编程中的一般概念
- 能够基于构造函数创建对象
- 理解 JavaScript 中一切皆对象的语言特征
- 理解引用对象类型值存储的的特征
- 掌握包装类型对象常见方法的使用

> 了解面向对象的基础概念，能够利用构造函数创建对象。

#### 4.1 构造函数

构造函数是**专门用于创建对象的函数**，如果一个函数使用 `new` 关键字调用，那么这个函数就是构造函数。

约定：构造（对象）函数名的首字母应为大写，调用新创建一个对象使用`new`关键字

```html
<script>
  // 定义函数
  function Pig() {
    this.name = uname
    this.age = age
  }
  // 调用函数
  const pepa = new Pig('佩奇',6)
</script>
```

总结：

2. 使用 `new` 关键字调用函数的行为被称为实例化
3. 实例化构造函数时没有参数时可以省略 `()`
4. 构造函数的返回值即为新创建的对象
5. 构造函数内部的 `return` 返回的值无效！

注：实践中为了从视觉上区分构造函数和普通函数，习惯将构造函数的首字母大写。

#### 4.2 实例成员

通过**构造函数创建的对象称为实例对象**，**实例对象中的属性和方法称为实例成员**。

```html
<script>
  // 构造函数，约定首字母大写的是构造函数
  function Person() {
    // 构造函数内部的 this 就是实例对象
    // 实例对象中动态添加属性
    this.name = '小明'
    // 实例对象动态添加方法
    this.sayHi = function () {
      console.log('大家好~')
    }
  }
  // 实例化，p1 是实例对象
  // p1 实际就是 构造函数内部的 this
  const p1 = new Person()
  console.log(p1)
  console.log(p1.name) // 访问实例属性
  p1.sayHi() // 调用实例方法
</script>
```

总结：

1. 构造函数内部 `this` 实际上就是实例对象，为其动态添加的属性和方法即为实例成员
2. 为构造函数传入参数，动态创建结构相同但值不同的对象

注：构造函数创建的实例对象彼此独立互不影响。

#### 4.3 静态成员

在 JavaScript 中底层函数本质上也是对象类型，因此允许直接为函数动态添加属性或方法，**构造函数的属性和方法被称为静态成员。**

```html
<script>
  // 构造函数
  function Person(name, age) {
    // 省略实例成员
  }
  // 静态属性
  Person.eyes = 2
  Person.arms = 2
  // 静态方法
  Person.walk = function () {
    console.log('^_^人都会走路...')
    // this 指向 Person
    console.log(this.eyes)
  }
</script>
```

总结：

1. 静态成员指的是添加到构造函数本身的属性和方法
2. 一般公共特征的属性或方法静态成员设置为静态成员
3. 静态成员方法中的 `this` 指向构造函数本身

### 五、内置构造函数

> 掌握各引用类型和包装类型对象属性和方法的使用。

在 JavaScript 中**最主要**的数据类型有 6 种，分别是**字符串、数值、布尔、undefined、null 和 对象**，常见的对象类型数据包括数组和普通对象。其中字符串、数值、布尔、undefined、null 也被称为简单类型或基础类型，对象也被称为引用类型。

在 JavaScript 内置了一些构造函数，绝大部的数据处理都是基于这些构造函数实现的，JavaScript 基础阶段学习的 `Date` 就是内置的构造函数。

```html
<script>
  // 实例化
 let date = new Date();
  
  // date 即为实例对象
  console.log(date);
</script>
```

甚至字符串、数值、布尔、数组、普通对象也都有专门的构造函数，用于创建对应类型的数据。

#### 5.1 引用类型

##### Object

`Object()` 是内置的构造函数，用于创建普通对象。

```html
<script>
  // 通过构造函数创建普通对象
  const user = new Object({name: '小明', age: 15})

  // 这种方式声明的变量称为【字面量】
  let student = {name: '杜子腾', age: 21}
  
  // 对象语法简写
  let name = '小红';
  let people = {
    // 相当于 name: name
    name,
    // 相当于 walk: function () {}
    walk () {
      console.log('人都要走路...');
    }
  }

  console.log(student.constructor);
  console.log(user.constructor);
  console.log(student instanceof Object);
</script>
```

。

总结：

1. 推荐使用字面量方式声明对象，而不是 `Object` 构造函数
2. `Object.assign` 静态方法创建新的对象，语法：`Object.assign(目标对象,被拷贝的对象)`
3. `Object.keys` 静态方法获取对象中所有属性，**返回一个数组**。语法：`Object.keys(对象名)`
4. `Object.values` 表态方法获取对象中所有属性值，**返回一个数组**。语法：`Object.values(对象名)`

示例案例：

```html
<script>
  //
  const o = {uname : 'barbatos',age:5000}
  //获得所有的属性值
  console.log(Object.keys(o))
  console.log(Object.values(o))

  //拷贝对象: 将o对象拷贝给obj对象
  const obj = {};
  Object.assign(obj , o)
  console.log(obj)

</script>
```

##### Array

`Array()` 是内置的构造函数，用于创建数组。

```html
<script>
  // 构造函数创建数组
  let arr = new Array(5, 7, 8);

  // 字面量方式创建数组
  let list = ['html', 'css', 'javascript']

</script>
```

数组赋值后，无论修改哪个变量另一个对象的数据值也会相当发生改变。

总结：

1. 推荐使用字面量方式声明数组，而不是 `Array` 构造函数

2. 实例方法 `forEach()` 用于遍历数组，替代 `for` 循环 (重点)

3. 实例方法 `filter()` 过滤数组单元值，生成新数组(重点)

4. 实例方法 `map()` 迭代原数组，**生成新数组**(重点)

5. 实例方法 `join()` 数组元素拼接为字符串，**返回字符串**(重点)

6. 实例方法  `find()`  查找元素， **返回符合测试条件的第一个数组元素值**，如果没有符合条件的则返回 undefined(重点)

7. 实例方法`every()` 检测数组所有元素是否都符合指定条件，如果**所有元素都**通过检测**返回 true**，否则返回 false(重点)

8. 实例方法`some()` 检测数组中的元素是否满足指定条件   **如果数组中有**元素满足条件返回 true，否则返回 false

9. 实例方法 `concat()`  合并两个数组，返回生成新数组

10. 实例方法 `sort()` 对原数组单元值排序

11. 实例方法 `splice()` 删除或替换原数组单元

12. 实例方法 `reverse()` 反转数组

13. 实例方法 `findIndex()`  查找元素的索引值

14. 实例方法`reduce()` 累计器，返回函数累计处理的结果，经常用于求和等

    ​ 语法：`arr.reduce(function(累计值,当前元素[,索引号][,源数组]){},起始值)`

    ​ 累计值参数：

    - 如果**有起始值**，则以起始值为准开始累计， **累计值 = 起始值**
    - 如果**没有起始值**， 则**累计值以数组的第一个数组元素**作为起始值开始累计
    - 后面每次遍历就会**用后面的数组元素** **累计到 累计值** 里面 （类似求和里面的 sum ）

如何查文档：<https://developer.mozilla.org/zh-CN/docs/Web/JavaScript>

使用示例：

```html
  <script>
    const arr = [1,2,3]
    const re = arr.reduce(function (prev,item) {
      return prev+item;      //  prev = prev+item  prev是累计值，执行完return得到值之后，将值返回到到prev上
    })

//箭头函数写法:
    // const re = arr.reduce((prev,items) => prev+items)
    console.log(re)


    //涨薪小案例
    const arr2 = [{
      name: '张三',
      salary: 10000
    }, {
      name: '李四',
      salary: 10000
    }, {
      name: '王五',
      salary: 20000
    },
    ]
    const money = arr2.reduce((prev,item)=> prev + item.salary * 0.3 , 0)        //因为这里是对象返回值，需要在后面加回prev的起始值0
                                                                            // 这里的起始值不是对象数组的数组下标，是返回值prev的起始值
    console.log(money);

    
  </script>
```

案例2

```html
<div></div>
<script>
  const spec = { size: '40cm*40cm', color: '黑色' }
  //获得数组
 const arr = Object.values(spec)
  //数组合并，返回字符
  // arr.join('/')   表示数组元素之间用 /  隔开
  document.querySelector('div').innerHTML = arr.join('/')

</script>

```

```javascript
//假数组转为真数组
const lis = document.querySelectorAll('li')
// lis 是假数组
const liss = Array.from(lis)
console.log(liss)
```

#####

#### 5.2 包装类型

在 JavaScript 中的字符串、数值、布尔具有对象的使用特征，如具有属性和方法，如下代码举例：

```html
<script>
  // 字符串类型
  const str = 'hello world!'
  // 统计字符的长度（字符数量）
  console.log(str.length)
  
  // 数值类型
  const price = 12.345
  // 保留两位小数
  price.toFixed(2) // 12.34
</script>
```

之所以具有对象特征的原因是字符串、数值、布尔类型数据是 JavaScript 底层使用 Object 构造函数“包装”来的，被称为包装类型。

##### String

`String` 是内置的构造函数，用于创建字符串。

```html
<script>
  // 使用构造函数创建字符串
  let str = new String('hello world!');

  // 字面量创建字符串
  let str2 = '你好，世界！';

  // 检测是否属于同一个构造函数
  console.log(str.constructor === str2.constructor); // true
  console.log(str instanceof String); // false
</script>
```

总结：

1. 实例属性 `length()` 用来获取字符串的度长(重点)
2. 实例方法 `split('分隔符')` 用来将字符串拆分成数组(重点)
3. 实例方法 `substring（需要截取的第一个字符的索引[,结束的索引号]）` 用于字符串截取(重点)
4. 实例方法 `startsWith(检测字符串[, 检测位置索引号])` 检测是否以某字符开头(重点)
5. 实例方法 `includes(搜索的字符串[, 检测位置索引号])` 判断一个字符串是否包含在另一个字符串中，根据情况返回 true 或 false(重点)
6. 实例方法 `toUpperCase()` 用于将字母转换成大写
7. 实例方法 `toLowerCase()` 用于将就转换成小写
8. 实例方法 `indexOf()`  检测是否包含某字符
9. 实例方法 `endsWith()` 检测是否以某字符结尾
10. 实例方法 `replace()` 用于替换字符串，支持正则匹配
11. 实例方法 `match()` 用于查找字符串，支持正则匹配

注：String 也可以当做普通函数使用，这时它的作用是强制转换成字符串数据类型。

```html
<script>
  const str = 'pink,blue'
  const arr = str.split(',')
  console.log(arr)

  const str2 = '2022-04-09'
  const arr2 = str2.split('-')
  console.log(arr2)

  //字符串的截取  str.substring(indexStart[, indexEnd])
  const str3 = '今天又要去测核酸了'
  console.log(str3.substring(5,8))
  console.log(str3.substring(7))

  //str.startsWith(searchString[, position])  判断当前字符串是否以另外一个给定的子字符串开头
  console.log(str3.startsWith('今天'))    //true
  console.log(str3.startsWith('y'))      //false

  //str.includes(searchString[, position]) 方法用于判断一个字符串是否包含在另一个字符串中，根据情况返回 true 或 false。
  console.log(str3.includes('今天'))   //true
  console.log(str3.includes('今天',0))  //true


</script>
```

案例

```html
<script>
  const gift = '50g的茶叶,清洗球'
  // 思路：
  // ①：把字符串拆分为数组，这样两个赠品就拆分开了 用那个方法？ split
  // ②：利用map遍历数组，同时把数组元素生成到span里面，并且返回
  // ③：因为返回的是数组，所以需要 转换为字符串, 用那个方法？  join
  // ④：p的innerHTML 存放刚才的返回值
  document.querySelector('div').innerHTML = gift.split(',').map(item =>`<span>【赠品】${item}</span> <br>`).join('')

</script>
```

##### Number

`Number` 是内置的构造函数，用于创建数值。

```html
<script>
  // 使用构造函数创建数值
  let x = new Number('10')
  let y = new Number(5)

  // 字面量创建数值
  let z = 20

</script>
```

总结：

1. 推荐使用字面量方式声明数值，而不是 `Number` 构造函数
2. 实例方法 `toFixed` 用于设置保留小数位的长度

```html
<script>
  const num = 10.852
  //会四舍五入
  console.log(num.toFixed())    // 11
  //保留两位小数的四舍五入
  console.log(num.toFixed(2))   //  10.85

  const num1 = 10
  console.log(num1.toFixed(2))   //10.00
</script>
```

案例：

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    .list {
      width: 990px;
      margin: 100px auto 0;
    }

    .item {
      padding: 15px;
      transition: all .5s;
      display: flex;
      border-top: 1px solid #e4e4e4;
    }

    .item:nth-child(4n) {
      margin-left: 0;
    }

    .item:hover {
      cursor: pointer;
      background-color: #f5f5f5;
    }

    .item img {
      width: 80px;
      height: 80px;
      margin-right: 10px;
    }

    .item .name {
      font-size: 18px;
      margin-right: 10px;
      color: #333;
      flex: 2;
    }

    .item .name .tag {
      display: block;
      padding: 2px;
      font-size: 12px;
      color: #999;
    }

    .item .price,
    .item .sub-total {
      font-size: 18px;
      color: firebrick;
      flex: 1;
    }

    .item .price::before,
    .item .sub-total::before,
    .amount::before {
      content: "¥";
      font-size: 12px;
    }

    .item .spec {
      flex: 2;
      color: #888;
      font-size: 14px;
    }

    .item .count {
      flex: 1;
      color: #aaa;
    }

    .total {
      width: 990px;
      margin: 0 auto;
      display: flex;
      justify-content: flex-end;
      border-top: 1px solid #e4e4e4;
      padding: 20px;
    }

    .total .amount {
      font-size: 18px;
      color: firebrick;
      font-weight: bold;
      margin-right: 50px;
    }
  </style>
</head>

<body>
  <div class="list">
    <!-- <div class="item">
      <img src="https://yanxuan-item.nosdn.127.net/84a59ff9c58a77032564e61f716846d6.jpg" alt="">
      <p class="name">称心如意手摇咖啡磨豆机咖啡豆研磨机 <span class="tag">【赠品】10优惠券</span></p>
      <p class="spec">白色/10寸</p>
      <p class="price">289.90</p>
      <p class="count">x2</p>
      <p class="sub-total">579.80</p>
    </div> -->
  </div>
  <div class="total">
    <div>合计：<span class="amount">1000.00</span></div>
  </div>
  <script>
    const goodsList = [
      {
        id: '4001172',
        name: '称心如意手摇咖啡磨豆机咖啡豆研磨机',
        price: 289.9,
        picture: 'https://yanxuan-item.nosdn.127.net/84a59ff9c58a77032564e61f716846d6.jpg',
        count: 2,
        spec: { color: '白色' }
      },
      {
        id: '4001009',
        name: '竹制干泡茶盘正方形沥水茶台品茶盘',
        price: 109.8,
        picture: 'https://yanxuan-item.nosdn.127.net/2d942d6bc94f1e230763e1a5a3b379e1.png',
        count: 3,
        spec: { size: '40cm*40cm', color: '黑色' }
      },
      {
        id: '4001874',
        name: '古法温酒汝瓷酒具套装白酒杯莲花温酒器',
        price: 488,
        picture: 'https://yanxuan-item.nosdn.127.net/44e51622800e4fceb6bee8e616da85fd.png',
        count: 1,
        spec: { color: '青色', sum: '一大四小' }
      },
      {
        id: '4001649',
        name: '大师监制龙泉青瓷茶叶罐',
        price: 139,
        picture: 'https://yanxuan-item.nosdn.127.net/4356c9fc150753775fe56b465314f1eb.png',
        count: 1,
        spec: { size: '小号', color: '紫色' },
        gift: '50g茶叶,清洗球'
      }
    ]
    // 1. 根据数据渲染页面
    document.querySelector('.list').innerHTML = goodsList.map(items =>{
      // 2. 填充不需要处理的数据
      // 解构
      const {picture,name,price,count,spec,gift} = items
      //3. 处理规格文字
      const text = Object.values(spec).join('/')
      // 4. 处理正品模块
      const str = gift ? gift.split(',').map(items => `<span class="tag">【赠品】${items}</span>`).join('') : '';
      // 5. 计算小计
      // 注意精度问题，因为保留两位小数，所以乘以100，再除以100
      const subTotal = ((price *100 * count)/100).toFixed(2)    // *100  /100  提高精度
      return  `
              <div class="item">
      <img src="${picture}" alt="">
      <p class="name">${name} ${str}</p>
      <p class="spec">${text}</p>
      <p class="price">${price.toFixed(2)}</p>
      <p class="count">x ${count}</p>
      <p class="sub-total">${subTotal}</p>
    </div>

      `
    }).join('')

    //6. 合计模块
    const total = goodsList.reduce((prev, items) => prev + (items.price * items.count *100)/100,0);
    document.querySelector('.amount').innerHTML = total.toFixed(2)
  </script>
</body>

</html>
```

### 六、对象的封装与继承

> 了解构造函数原型对象的语法特征，掌握 JavaScript 中面向对象编程的实现方式，基于面向对象编程思想实现 DOM 操作的封装。

- 了解面向对象编程的一般特征
- 掌握基于构造函数原型对象的逻辑封装
- 掌握基于原型对象实现的继承
- 理解什么原型链及其作用
- 能够处理程序异常提升程序执行的健壮性

> 学习 JavaScript 中基于原型的面向对象编程序的语法实现，理解面向对象编程的特征。

面向对象编程是一种程序设计思想，它具有 3 个显著的特征：封装、继承、多态。

#### 6.1 封装

封装的本质是将具有关联的代码组合在一起，其优势是能够保证代码复用且易于维护，函数是最典型也是最基础的代码封装形式，面向对象思想中的封装仍以函数为基础，但提供了更高级的封装形式。

##### 命名空间

先来回顾一下以往代码封装的形式：

```html
<script>
  // 普通对象（命名空间）形式的封装
  let beats = {
    name: '狼',
    setName: function (name) {
      this.name = this.name;
    },
    getName() {
      console.log(this.name);
    }
  }

  beats.setName('熊');
  beats.getName();
</script>
```

以往以普通对象（命名空间）形式封装的代码只是单纯把一系列的变量或函数组合到一起，所有的数据变量都被用来共享（使用 this 访问）。

##### 构造函数

对比以下通过面向对象的构造函数实现的封装：

```html
<script>
  function Person() {
    this.name = '佚名';
    // 设置名字
    this.setName = function (name) {
      this.name = name;
    }
    // 读取名字
    this.getName = () => {
      console.log(this.name);
    }
  }

  // 实例对像，获得了构造函数中封装的所有逻辑
  let p1 = new Person();
  p1.setName('小明');
  console.log(p1.name);

  // 实例对象
  let p2 = new Person();
  console.log(p2.name);
</script>
```

同样的将变量和函数组合到了一起并能通过 this 实现数据的共享，所不同的是借助构造函数创建出来的实例对象之间是彼此不影响的。

总结：

1. 构造函数体现了面向对象的封装特性
2. 构造函数实例创建的对象彼此独立、互不影响
3. 命名空间式的封装无法保证数据的独立性

注：可以举一些例子，如女娲造人等例子，加深对构造函数的理解。

##### 原型对象

实际上每一个构造函数都有一个名为 `prototype` 的属性，译成中文是原型的意思，`prototype` 的是对象类据类型，称为构造函数的原型对象，每个原型对象都具有 `constructor` 属性代表了该原型对象对应的构造函数。

```html
<script>
  function Person() {
    
  }

  // 每个函数都有 prototype 属性
  console.log(Person.prototype);
</script>
```

**公共属性写到 构造函数里面 ↑**

了解了 JavaScript 中构造函数与原型对象的关系后，再来看原型对象具体的作用，如下代码所示：

**公共函数写到 原型对象身上 ↓**

```html
<script>
  function Person() {
    // 此处未定义任何方法
  }

  // 为构造函数的原型对象添加方法
  Person.prototype.sayHi = function () {
    console.log('Hi~');
  }
 
  // 实例化
  let p1 = new Person();
  p1.sayHi(); // 输出结果为 Hi~
</script>
```

案例

```html
<script>
  function Person(name,age) {
    this.name = name
    this.age = age
  }

  Person.prototype.sayHi = function () {
    console.log('hi')
  }

  const ldh =new Person('刘德华', 50)
  console.log(ldh)
  ldh.sayHi()

</script>
```

构造函数 `Person` 中未定义任何方法，这时实例对象调用了原型对象中的方法 `sayHi`，接下来改动一下代码：

```html
<script>
  function Person() {
    // 此处定义同名方法 sayHi
    this.sayHi = function () {
      console.log('嗨!');
    }
  }

  // 为构造函数的原型对象添加方法
  Person.prototype.sayHi = function () {
    console.log('Hi~');
  }

  let p1 = new Person();
  p1.sayHi(); // 输出结果为 嗨!
</script>
```

构造函数 `Person` 中定义与原型对象中相同名称的方法，这时实例对象调用则是构造函中的方法 `sayHi`。

通过以上两个简单示例不难发现 JavaScript 中对象的工作机制：**当访问对象的属性或方法时，先在当前实例对象是查找，然后再去原型对象查找，并且原型对象被所有实例共享。**

```html
<script>
 function Person() {
    // 此处定义同名方法 sayHi
    this.sayHi = function () {
      console.log('嗨!' + this.name);
    }
  }

  // 为构造函数的原型对象添加方法
  Person.prototype.sayHi = function () {
    console.log('Hi~' + this.name);
  }
  // 在构造函数的原型对象上添加属性
  Person.prototype.name = '小明';

  let p1 = new Person();
  p1.sayHi(); // 输出结果为 嗨!
  
  let p2 = new Person();
  p2.sayHi();
</script>
```

总结：**结合构造函数原型的特征，实际开发重往往会将封装的功能函数添加到原型对象中。**

实例：

```html
<script>
  //自己定义方法
  //求最大值、最小值
  Array.prototype.getMax = function (arr) {
    return Math.max(...this)
  }
  Array.prototype.getMin = function (arr) {
    return Math.min(...this)
  }
  const arr1 = [1,2,3]
  console.log(arr1.getMax())
  console.log(arr1.getMin())

  //求和
  Array.prototype.getSum = function () {
    return  this.reduce((prev,items) => prev + items , 0)                    //这里的this都是指向实例对象
  }
  console.log(arr1.getSum())
</script>
```

 `constructor` 的使用：是找回原型对象（找回爹）

![image-20220818160903109](F:\typaraImg\image-20220818160903109.png)

使用常见：一般是prototype赋值之后会隐藏了原型对象，使得之后不知道是哪个原型对象添加了方法。所以赋值的时候一般会加上 `constructor` ：

```html
<script>
  const Obj = function (name,age) {
    this.name = name
    this.age = age
  }

  console.log(Obj.prototype)       //会看到一个 `constructor`
  Obj.prototype = {
    constructor : Obj,         //通过这一个 `constructor`  指回构造函数Stat
    dance : function () {
      console.log('dance')
    },
    sing: function () {
      console.log('sing')
    }
  }
  console.log(Obj.prototype)        //如果没有添加 `constructor : Obj`   将不会看到原型
</script>
```

![image-20220818163128333](F:\typaraImg\image-20220818163128333.png)

![image-20220818163941646](F:\typaraImg\image-20220818163941646.png)

非标准备的属性 `__proto__` ，可以理解为`[[prototype]]` ，指向原型

#### 6.2 继承

继承是面向对象编程的另一个特征，通过继承进一步提升代码封装的程度，JavaScript 中大多是借助原型对象实现继承的特性。

龙生龙、凤生凤、老鼠的儿子会打洞描述的正是继承的含义，分别封装中国人和日本人的行为特征来理解编程中继承的含义，代码如下：

```html
<script>
  // 封装中国人的行为特征
  function Chinese() {
    // 中国人的特征
    this.arms = 2;
    this.legs = 2;
    this.eyes = 2;

    this.skin = 'yellow';
    this.language = '中文';

    // 中国人的行为
    this.walk = function () {}
    this.sing = function () {}
    this.sleep = function () {}
  }

  // 封装日本人的行为特征
  function Japanese() {
    // 日本人的特征
    this.arms = 2;
    this.legs = 2;
    this.eyes = 2;

    this.skin = 'yellow';
    this.language = '日文';

    // 日本人的行为
    this.walk = function () {}
    this.sing = function () {}
    this.sleep = function () {}
  }
</script>
```

其实我们都知道无论是中国人、日本人还是其它民族，人们的大部分特征是一致的，然而体现在代码中时人的相同的行为特征被重复编写了多次，代码显得十分冗余，我们可以将重复的代码抽离出来：

##### 原型继承

基于构造函数原型对象实现面向对象的继承特性。

```html
<script>
  // 所有人
  function Person() {
    // 人的特征
    this.arms = 2;
    this.legs = 2;
    this.eyes = 2;
    
    // 人的行为
    this.walk = function () {}
    this.sing = function () {}
    this.sleep = function () {}
  }
  
  // 中国人
  function Chinese() {
    this.skin = 'yellow';
    this.language = '中文';
  }
  // 日本人
 function Japanese() {
    this.skin = 'yellow';
    this.language = '日文';
  }
</script>
```

上述代码可以理解成将 `Chinese` 和 `Japanese` 共有的属性和方法提取出来了，也就是说 `Chinese` 和 `Japanese` 需要【共享】一些属性和方法，而原型对象的属性和方法恰好是可以被用来共享的，因此我们看如下代码：

```html
<script>
  // 中国人
  function Chinese() {
    this.skin = 'yellow';
    this.language = '中文';
  }
  // 日本人
 function Japanese() {
    this.skin = 'yellow';
    this.language = '日文';
  }
  
  // 人们【共有】的行为特征
  let people = {
    // 人的特征
    arms: 2,
    legs: 2,
    eyes:2,
    // 人的行为
    walk: function () {},
    sleep: function () {},
    sing: function () {}
  }
  
  // 为 prototype 重新赋值
  Chinese.prototype = people;
  Chinese.prototype.constructor = Chinese;
</script>
```

如下图所示：

创建对象 `people` 将公共的的属性和方法独立出来，然后赋值给构造函数的 `prototype` 这样无论有多少个民族都可以共享公共的属性和方法了：

```html
<script>
  // 人们【共有】的行为特征
  let people = {
    // 人的特征
    arms: 2,
    legs: 2,
    eyes:2,
    // 人的行为
    walk: function () {},
    sleep: function () {},
    sing: function () {}
  }
  
  // 中国人
  function Chinese() {
    this.skin = 'yellow';
    this.language = '中文';
  }
  // 日本人
 function Japanese() {
    this.skin = 'yellow';
    this.language = '日文';
  }
  
  function Englist() {
    this.skin = 'white';
    this.language= '英文';
  }
  
  // 中国人
  Chinese.prototype = people;
  Chinese.prototype.constructor = Chinese;
  
  let c1 = new Chinese();
  
  // 日本人
  Japanese.prototype = people;
  Janpanese.prototype.constructor = Japanese;
  // 英国人
  English.prototype = people;
  English.prototype.constructor = English;
  
  // ...
</script>
```

继承是一种可以“不劳而获”的手段！！！上述代码中 `Chinese`、`Japanese`、`English` 都轻松的获得了 `people` 的公共的方法和属性，我们说 `Chinese`、`Japanese`、`English` 继承了 `people`。

上述代码中是以命名空间的形式实现的继承，事实上 JavaScript 中继承更常见的是借助构造函数来实现：

```html
<script>
  // 所有人
  function Person() {
    // 人的特征
    this.arms = 2;
    this.legs = 2;
    this.eyes = 2;

    // 人的行为
    this.walk = function () {}
    this.sing = function () {}
    this.sleep = function () {}
  }

  // 封装中国人的行为特征
  function Chinese() {
    // 中国人的特征
    this.skin = 'yellow';
    this.language = '中文';
  }

  // 封装日本人的行为特征
  function Japanese() {
    // 日本人的特征
    this.skin = 'yellow';
    this.language = '日文';
  }

  // human 是构造函数 Person 的实例
  let human = new Person();

  // 中国人
  Chinese.prototype = human;
  // Chinese.prototype = new Person()        保证了公共特征不一样，但是又不会影响其他的类
  Chinese.prototype.constructor = Chinese;
  // 日本人
  Japanese.prototype = human;
  // Japanese.prototype = new Person()
  Japanese.prototype.constructor = Japanese;
</script>
```

继承优化后的写法：

```
// 子类的原型 = new 父类  
Chinese.prototype = new Person()
// 指回原来的构造函数
Chinese.prototype.constructor = Chinese;
```

##### 原型链

![image-20220818173352467](F:\typaraImg\image-20220818173352467.png)

基于原型对象的继承使得不同构造函数的原型对象关联在一起，并且这种关联的关系是一种链状的结构，我们将原型对象的链状结构关系称为原型链，

```html
<script>
  // Person 构造函数   公共的部分方在原型上
  function Person() {
    this.arms = 2;
    this.walk = function () {}
  }
 
  // Person 原型对象
  Person.prototype.legs = 2;
  Person.prototype.eyes = 2;
  Person.prototype.sing = function () {}
  Person.prototype.sleep = function () {}
 
  // Chinese 构造函数
  function Chinese() {
    this.skin = 'yellow';
    this.language = '中文';
  }
 
  // Chinese 原型对象  通过原型来继承Person
  Chinese.prototype = new Person();
  // 指回原来的构造函数
  Chinese.prototype.constructor = Chinese;
 
  // 实例化
  let c1 = new Chinese();

  console.log(c1);
</script>
```

在 JavaScript 对象中包括了一个非标准备的属性 `__proto__` 它指向了构造函数的原型对象，通过它可以清楚的查看原型对象的链状结构。

使用`instanceof` 运算符用于检测prototype 属性是否出现在某个实例对象的原型链上

```JavaScript
function Person(){}

constldh = nwe Person()

console.log(ldh instanceof Person)    // true
console.log(ldh instanceof Object)    //true
console.log(ldh instanceof Array)     // false


```

综合案例：

```html
<body>
  <button id="delete">删除</button>
  <button id="login">登录</button>

  <!-- <div class="modal">
    <div class="header">温馨提示 <i>x</i></div>
    <div class="body">您没有删除权限操作</div>
  </div> -->


  <script>
    //1. 定义模块框
    function Modal(title = '', message = ''){
      this.title = title
      this.message = message;

      //因为盒子是公共的
      //（1）创建div 一定不要忘记加this
      this.modalBox = document.createElement('div')

      //（2）添加类名
      this.modalBox.className = 'modal'
      this.modalBox.innerHTML = `
        <div class="header">${this.title} <i>x</i></div>
        <div class="body">${this.message}</div>
      `

    }


    //2. 打开方法，挂载在构造函数原型身上
    Modal.prototype.open = function () {
      if(!document.querySelector('.modal')){
        document.body.appendChild(this.modalBox)
          //document的body创建了modalBox，就可以在新增加的节点找到 “x”
        this.modalBox.querySelector('i').addEventListener('click',()=>{
            //箭头函数没有this，this指向的是它外部的实例的对象
          this.close()
        })
      }

    }

    //3.关闭方法
    Modal.prototype.close = function () {
      document.body.removeChild(this.modalBox)
    }

    //4.按钮点击
    document.querySelector('#delete').addEventListener('click',()=>{
      const msg = new Modal('温馨提示','您没有权限')
      msg.open()
    })

    document.querySelector('#login').addEventListener('click',()=>{
      const msg = new Modal('提示','您还没有注册')
      msg.open()
    })
  </script>
</body>
```

### 七、深浅拷贝

1. 首先浅拷贝和深拷贝只针对想Object,Array这样的复杂对象，简单来说，浅拷贝只复制一层对象的属性，二深拷贝则复制了所有的层级。

2. 对于字符串类型，浅复制是对值的复制，对于对象来说，浅复制是对对象地址的复制，并没   有开辟新的栈，也就是复制的结果是两个对象指向同一个地址，修改其中一个对象的属性，则另一个对象的属性也会 改变，而深复制则是开辟新的栈，两个对象对应两个不同的地址，修改一个对象的属性，不会改变另一个对象的属性。

   ~~~JavaScript
   const obj = {
         uname: 'pink',
         age: 18,
         hobby: ['乒乓球', '足球'],
         family: {
           baby: '小pink'
         }
       }
       // 把对象转换为 JSON 字符串
       // console.log(JSON.stringify(obj))
       const o = JSON.parse(JSON.stringify(obj))
       console.log(o)
       o.family.baby = '123'
       console.log(obj)
   ~~~

#### 7.1浅拷贝

   浅拷贝：深层次的对象不拷贝

   ```javascript
   const obj = {
         uname: 'pink',
         age: 18,
         hobby: ['乒乓球', '足球'],
         family: {
           baby: '小pink'
         }
       }
       
       const o ={...obj}
       o.age = 20
    o.famaily.baby = '老pink'
    console.log(o)         //显示正常，age，baby都修改了
    console.log(obj)    // 显示错误，age还是原来的18，
    // 但是obj.famaily.baby 显示为'老pink'，这个就是浅拷贝的缺陷，只拷贝浅一层的元素，深层的对象元素不拷贝
   ```

   直接赋值和浅拷贝有什么区别？

    直接赋值的方法，只要是对象，都会相互影响，因为是直接拷贝对 象栈里面的地址

    浅拷贝如果是一层对象，不相互影响，如果出现多层对象拷贝还会 相互影响

   浅拷贝怎么理解？

    拷贝对象之后，里面的属性值是简单数据类型直接拷贝值

    如果属性值是引用数据类型则拷贝的是地址

####   7.2 深拷贝

​  深拷贝：拷贝的是对象，不是地址

​  **常见方法：**

- 通过递归实现深拷贝
- lodash/cloneDeep
- 通过JSON.stringify()实现

```JavaScript
//使用递归实现深拷贝
const obj = {
    uname : 'barbatos',
    age : 18,
    hobby : ['sing','dance','rap']，
    family:{
    baby:'small barbatos'
}
}

const o = {}
function deepCopy(newObj,oldObj){
    for(let k in oldObj){
     if(oldObj[k] instanceof Array){
            //处理数组问题 ,一定要先写数组，再写对象。因为数组也是对象，先写会引起误判。需要先些比对完数组
            newObj[k] = []
            deepCopy(newObj[k],oldObj[k])
        }else if(oldObj[k] instanceof Object){
            newObj[k] = {}
            deepCopy(newObj,oldObj)
        }else{
       // k 属性名， uname age    oldObj[k]是属性值
       // newObj[k] ==== o.uname   给新对象添加属性
         newObj[k] = oldObj[k]
        }
    }
}

deepCopy(o,obj)



```

```html
//使用 lodash/cloneDeep 实现深拷贝
<body>
<script src="lodash.min.js"></script>   //引入lodash.js库  https://www.lodashjs.com/
<script>
  const obj = {
    uname : 'barbatos',
    age : 18,
    hobby : ['sing','dance','rap'],
    family:{
      baby:'small barbatos'
    }
  }

  const o =_.cloneDeep(obj)
  console.log(o)
  o.family.baby = 'morax'
  console.log(o)
  console.log(obj)


</script>

</body>

```

```JavaScript
//通过JSON.stringify()实现深拷贝
const obj = {
      uname: 'pink',
      age: 18,
      hobby: ['乒乓球', '足球'],
      family: {
        baby: '小pink'
      }
    }
    // 把对象转换为 JSON 字符串
    // console.log(JSON.stringify(obj))
    const o = JSON.parse(JSON.stringify(obj))
    console.log(o)
    o.family.baby = '123'
    console.log(obj)
```

### 八、异常处理

> 了解 JavaScript 中程序异常处理的方法，提升代码运行的健壮性。

##### 8.1 throw

异常处理是指预估代码执行过程中可能发生的错误，然后最大程度的避免错误的发生导致整个程序无法继续运行。

```html
<script>
  function counter(x, y) {

    if(!x || !y) {
      // throw '参数不能为空!';
      throw new Error('参数不能为空!')
    }

    return x + y
  }

  counter()
</script>
```

总结：

1. `throw` 抛出异常信息，程序也会终止执行
2. `throw` 后面跟的是错误提示信息
3. `Error` 对象配合 `throw` 使用，能够设置更详细的错误信息

##### 8.2 try ... catch

```html
<script>
   function foo() {
      try {
        // 查找 DOM 节点
        // 可能预估有问题的代码写这里
        const p = document.querySelector('.p')
        p.style.color = 'red'
      } catch (error) {
        // try 代码段中执行有错误时，会执行 catch 代码段
        // 查看错误信息
        console.log(error.message)
        // 终止代码继续执行
        return

      }
      finally {
          alert('执行')
      }
      console.log('如果出现错误，我的语句不会执行')
    }
    foo()
</script>
```

总结：

1. `try...catch` 用于捕获错误信息
2. 将预估可能发生错误的代码写在 `try` 代码段中
3. 如果 `try` 代码段中出现错误后，会执行 `catch` 代码段，并截获到错误信息

`debugger` 相当于打断点，可以直接加到某段代码前，让浏览器执行这一段代码之前，直接调试

### 九、this

> 了解函数中 this 在不同场景下的默认值，知道动态指定函数 this 值的方法。

#### 9.1 默认值

`this` 是 JavaScript 最具“魅惑”的知识点，不同的应用场合 `this` 的取值可能会有意想不到的结果，在此我们对以往学习过的关于【 `this` 默认的取值】情况进行归纳和总结。

##### 普通函数

**普通函数**的调用方式决定了 `this` 的值，即【谁调用 `this` 的值指向谁】，如下代码所示：

```html
<script>
  // 普通函数
  function sayHi() {
    console.log(this)  
  }
  // 函数表达式
  const sayHello = function () {
    console.log(this)
  }
  // 函数的调用方式决定了 this 的值
  sayHi() // window
  window.sayHi()  //相当于sayHi()
 

// 普通对象
  const user = {
    name: '小明',
    walk: function () {
      console.log(this)
    }
  }
  // 动态为 user 添加方法
  user.sayHi = sayHi
  uesr.sayHello = sayHello
  // 函数调用方式，决定了 this 的值
  user.sayHi()
  user.sayHello()
</script>
```

注： 普通函数没有明确调用者时 `this` 值为 `window`，严格模式下没有调用者时 `this` 的值为 `undefined`。

##### 箭头函数

**箭头函数**中的 `this` 与普通函数完全不同，也不受调用方式的影响，**事实上箭头函数中并不存在** `this` ！箭头函数中访问的 `this` 不过是箭头函数所在作用域的 `this` 变量。

```html
<script>
    
  console.log(this) // 此处为 window
  // 箭头函数
  const sayHi = function() {
    console.log(this) // 该箭头函数中的 this 为函数声明环境中 this 一致
  }
  // 普通对象
  const user = {
    name: '小明',
    // 该箭头函数中的 this 为函数声明环境中 this 一致
    walk: () => {
      console.log(this)
    },
    
    sleep: function () {
      let str = 'hello'
      console.log(this)
      let fn = () => {
        console.log(str)
        console.log(this) // 该箭头函数中的 this 与 sleep 中的 this 一致
      }
      // 调用箭头函数
      fn();
    }
  }

  // 动态添加方法
  user.sayHi = sayHi
  
  // 函数调用
  user.sayHi()
  user.sleep()
  user.walk()
</script>
```

在开发中【使用箭头函数前需要考虑函数中 `this` 的值】，**事件回调函数**使用箭头函数时，`this` 为全局的 `window`，因此DOM事件回调函数不推荐使用箭头函数，如下代码所示：

```html
<script>
  // DOM 节点
  const btn = document.querySelector('.btn')
  // 箭头函数 此时 this 指向了 window
  btn.addEventListener('click', () => {
    console.log(this)
  })
  // 普通函数 此时 this 指向了 DOM 对象
  btn.addEventListener('click', function () {
    console.log(this)    //此时 this 指向了 DOM 对象
  })
</script>
```

同样由于箭头函数 `this` 的原因，**基于原型的面向对象也不推荐采用箭头函数**，如下代码所示：

```html
<script>
  function Person() {
  }
  // 原型对像上添加了箭头函数
  Person.prototype.walk = () => {
    console.log('人都要走路...')
    console.log(this); // window
  }
  const p1 = new Person()
  p1.walk()
</script>
```

#### 9.2 this指向（改变this指向）

以上归纳了普通函数和箭头函数中关于 `this` 默认值的情形，不仅如此 JavaScript 中还允许指定函数中 `this` 的指向，有 3 个方法可以动态指定普通函数中 `this` 的指向：

##### call  （了解）

使用 `call` 方法调用函数，同时指定函数中 `this` 的值，使用方法如下代码所示：

语法：`fun.call(thisArg, arg1, arg2, ...)`

​  thisArg：在 fun 函数运行时指定的 this 值

​  arg1，arg2：传递的其他参数

​  返回值就是函数的返回值，因为它就是调用函数

```html
<script>
  // 普通函数
  function sayHi() {
    console.log(this);
  }

  let user = {
    name: '小明',
    age: 18
  }

  let student = {
    name: '小红',
    age: 16
  }

  // 调用函数并指定 this 的值
  sayHi.call(user); // this 值为 user
  sayHi.call(student); // this 值为 student

  // 求和函数
  function counter(x, y) {
    return x + y;
  }

  // 调用 counter 函数，并传入参数
  let result = counter.call(null, 5, 10);
  console.log(result);
</script>
```

总结：

1. `call` 方法能够在调用函数的同时指定 `this` 的值
2. 使用 `call` 方法调用函数时，第1个参数为 `this` 指定的值
3. `call` 方法的其余参数会依次自动传入函数做为函数的参数

##### apply

使用 `call` 方法**调用函数**，同时指定函数中 `this` 的值，使用方法如下代码所示：

语法：`fun.apply(thisArg, [argsArray])`

​  thisArg：在fun函数运行时指定的 this 值

​  argsArray：传递的值，必须包含在数组里面

​  返回值就是函数的返回值，因为它就是调用函数

​  因此 **apply 主要跟数组有关系**，比如使用 Math.max() 求数组的最大值

```html
<script>
  // 普通函数
  function sayHi() {
    console.log(this)
  }

  let user = {
    name: '小明',
    age: 18
  }

  let student = {
    name: '小红',
    age: 16
  }

  // 调用函数并指定 this 的值
  sayHi.apply(user) // this 值为 user
  sayHi.apply(student) // this 值为 student

  // 求和函数
  function counter(x, y) {
    return x + y
  }
  // 调用 counter 函数，并传入参数
  let result = counter.apply(null, [5, 10])
  console.log(result)
    
  //使用场景：求数组的最大值
    const max = Math.max.apply(null,[1,2,4,8,9,2,4,6])
//  const max = Math.max(...[1,2,4,8,9,2,4,6])
    console.log(max)   //9
</script>
```

总结：

1. `apply` 方法能够在调用函数的同时指定 `this` 的值
2. 使用 `apply` 方法调用函数时，第1个参数为 `this` 指定的值
3. `apply` 方法第2个参数为数组，数组的单元值依次自动传入函数做为函数的参数

##### bind

`bind` 方法并**不会调用函数**，而是创建一个指定了 `this` 值的新函数，使用方法如下代码所示：

语法：`fun.bind(thisArg, arg1, arg2, ...)`

​  thisArg：在 fun 函数运行时指定的 this 值

​  arg1，arg2：传递的其他参数 ，可以按照情况省略

​  返回由指定的 this 值和初始化参数改造的 原函数拷贝 （新函数）

​  因此当我们只是想改变 this 指向，并且不想调用这个函数的时候，可以使用 bind，比如改变定时器内部的 this指向.

```html
<script>
  // 普通函数
  function sayHi() {
    console.log(this)
  }
  let user = {
    name: '小明',
    age: 18
  }
  // 调用 bind 指定 this 的值为user对象
  let sayHello = sayHi.bind(user);
  // 调用使用 bind 创建的新函数
  sayHello()
</script>
```

注：`bind` 方法创建新的函数，与原函数的唯一的变化是改变了 `this` 的值。

案例：

```html
<body>
  <button>发送短信</button>
  <script>
    const btn = document.querySelector('button')
    btn.addEventListener('click',function () {
      this.disabled = true
      setTimeout(function () {
        this.disabled = false
      }.bind(btn),2000)          //如果没有bind() 指向btn，那么setTimeout里面的this将会指向Window
    })
  </script>
</body>
```

**call apply bind 总结**

相同点:

​    都可以改变函数内部的this指向.

区别点:

​    call 和 apply 会调用函数, 并且改变函数内部this指向.

​    call 和 apply 传递的参数不一样, call 传递参数 aru1, aru2..形式 apply 必须数组形式[arg]

​    bind 不会调用函数, 可以改变函数内部this指向.

主要应用场景:

​    call 调用函数并且可以传递参数

​    apply 经常跟数组有关系. 比如借助于数学对象实现数组最大值最小值

​    bind 不调用函数,但是还想改变this指向. 比如改变定时器内部的this指向

### 十、性能优化  防抖节流

1. 防抖（debounce）
   所谓防抖，就是**指触发事件后在 n 秒内函数只能执行一次，如果在 n 秒内又触发了事件**，则会**重新计算函数**执行时间，使用的场景举例：开发使用场景- 搜索框防抖（输入停止后m毫秒后触发事件）

  防抖案例：

  ```html
  <body>
    <div class="box"></div>
    <script>
      const box = document.querySelector('div')
      let i = 1
      function mouseMove() {
        box.innerHTML = ++i
        // 如果里面存在大量的操作dom 的情况，可能会卡顿
      }
      // 核心思路：
      //   利用定时器实现，当鼠标滑过，判断有没有定时器，还有就清除，以最后一次滑动为准开启定时器
      //   ①： 写一个防抖函数debounce ，来控制这个操作函数(mouseMove)
      //   ②: 防抖函数传递2个参数， 第一个参数 mouseMove函数，第二个参数 指定时间500ms
      //   ③： 鼠标移动事件，里面写的是防抖函数
      //   ④： 声明定时器变量 timeId
      //   ⑤： 但是节流函数因为里面写的函数名 debounce(mouseMove, 500), 是调用函数，无法再次调用执行，
      //   所以需要在节流函数里面写return 函数 这样可以多次执行
      //防抖函数
      function debounce(fn,t){
        let timeId
        return function () {
          //如果有定时器就清除
          if (timeId) clearTimeout(timeId)
          //开启定时器
          timeId = setTimeout(function () {
            fn()
          },t)
        }
      }
      box.addEventListener('mousemove',debounce(mouseMove,500))
  
  
    </script>
  </body>
  ```

2. 节流（throttle）
   所谓节流，就是指连续触发事件但是在 n 秒中只执行一次函数

  节流案例：

  ```html
  <body>
    <div class="box"></div>
    <script>
      const box = document.querySelector('div')
      let i = 1;
      function mouseMove() {
        box.innerHTML = ++i
        // 如果里面存在大量的操作dom 的情况，可能会卡顿
      }
      // 要求： 鼠标在盒子上移动，里面的数字就会变化+1
      // 利用节流的方式， 鼠标经过，500ms ，数字才显示
      // 核心思路：
      // 利用时间相减：移动后的时间 - 刚开始移动的时间 >= 500ms 我才去执行 mouseMove函数
      // ①： 写一个节流函数throttle ，来控制这个操作函数(mouseMove)， 500ms之后才去执行这个函数
      // ②: 节流函数传递2个参数， 第一个参数 mouseMove函数，第二个参数 指定时间500ms
      // ③： 鼠标移动事件，里面写的是节流函数
      //节流函数 throttle
      function throttle(fn,t){
        let startTime = 0
        return function () {
          let now = Date.now()
          // 判断如果大于等于 500 采取调用函数
          if (now - startTime >= t){
            fn()
            //让起始时间 = 现在的时间
            startTime = now
          }
        }
      }
  
      box.addEventListener('mousemove',throttle(mouseMove,500))
  
    </script>
  </body>
  ```

节流和防抖的区别是？

​  节流: 就是指连续触发事件但是在 n 秒中只执行一次函数,比如 可以利用节流实现1s之内只能触发一次鼠标移动事件

​  防抖：如果在 n 秒内又触发了事件，则会重新计算函数执行时间

节流和防抖的使用场景是？

​   节流: 鼠标移动，页面尺寸发生变化，滚动条滚动等开销比较 大的情况下

​   防抖: 搜索框输入，设定每次输入完毕n秒后发送请求，如果期 间还有输入，则从新计算时间

![image-20220819114744756](F:\typaraImg\image-20220819114744756.png)

```html
<body>
  <div class="box"></div>
  <script src="lodash.min.js"></script>
  <script>
    const box = document.querySelector('div')
    let i = 0
    function mouseMove() {
      box.innerHTML = ++i
      // 如果里面存在大量的操作dom 的情况，可能会卡顿
    }

    //lodash库的 节流写法
//    box.addEventListener('mousemove', _.throttle(mouseMove,500))

    //lodash库的 防抖写法
    box.addEventListener('mousemove',_.debounce(mouseMove,500))

  </script>
</body>
```

**综合案例**

两个事件:

 ①：timeupdate 事件在视频/音频（audio/video）当前的播放位置发送改变时触发

②：loadeddata 事件在当前帧的数据加载完成且还没有足够的数据播放视频/音频（audio/video的下一帧时触发

谁需要节流？ ontimeupdate ， 触发频次太高了，我们可以设定 1秒钟触发一次

思路：

1. 在ontimeupdate事件触发的时候，每隔1秒钟，就记录当前时间到本地存储
2. 下次打开页面， onloadeddata 事件触发，就可以从本地存储取出时间，让视频从取出的时间播放，如果没有就默认为0s
3. 获得当前时间 video.currentTime

```html
 <title>综合案例</title>
  <style>
    * {
      padding: 0;
      margin: 0;
      box-sizing: border-box;
    }

    .container {
      width: 1200px;
      margin: 0 auto;
    }

    .video video {
      width: 100%;
      padding: 20px 0;
    }

    .elevator {
      position: fixed;
      top: 280px;
      right: 20px;
      z-index: 999;
      background: #fff;
      border: 1px solid #e4e4e4;
      width: 60px;
    }

    .elevator a {
      display: block;
      padding: 10px;
      text-decoration: none;
      text-align: center;
      color: #999;
    }

    .elevator a.active {
      color: #1286ff;
    }

    .outline {
      padding-bottom: 300px;
    }
  </style>
</head>

<body>
  <div class="container">
    <div class="header">
      <a href="http://pip.itcast.cn">
        <img src="https://pip.itcast.cn/img/logo_v3.29b9ba72.png" alt="" />
      </a>
    </div>
    <div class="video">
      <video src="https://v.itheima.net/LapADhV6.mp4" controls></video>
    </div>
    <div class="elevator">
      <a href="javascript:;" data-ref="video">视频介绍</a>
      <a href="javascript:;" data-ref="intro">课程简介</a>
      <a href="javascript:;" data-ref="outline">评论列表</a>
    </div>
  </div>
  <script src="https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js"></script>
  <script>
    const video = document.querySelector('video')
    //设置节流函数
    video.addEventListener('timeupdate',_.throttle(()=>{
      //将视频播放的的当前事件 存储在本地
      localStorage.setItem('currentTime' , video.currentTime)
    },1000))

    //将页面触发事件，就从本地读取记录的事件 ，赋值给video.currentTime
    video.addEventListener('loadeddata',function () {
      video.currentTime = localStorage.getItem('currentTime') || 0
    })

  </script>
</body>
```
