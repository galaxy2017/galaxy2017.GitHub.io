---
title: JavaScript基础
sidebar_position: 1
---
# JavaScript

## 一、使用JS的几种写法

1. 行内式的js  直接写道元素的内部

   `<button type="button" value="须弥" onclick="alert('纳西妲')"></button>`

2. 内嵌式js

   ```HTML
         <script>
           alert("hello js")
     </script>
   ```

3. 引入式

`<script src="my.js"></script>`

## 二、JS注释

#### 2.1 单行注释与多行注释

```html
    <script>
        // 单行注释    快捷键 CTRL+ /
        /* 
        多行注释   快捷键： shift + alt + a
        */ 
    </script>
```

## 三、JS的输入输出语句

`prompt('请输入你的年龄');`    输入框

`alert('计算机结果是')`  弹出框

`console.log('程序员可见，在浏览器控制台');`    浏览器控制台console可见

`doucument.write('要输出的内容');`   向body内输出内容，如果输出内容写的是标签，也会解析成网页元素

```html
<!DOCTYPE html>

<html>

<head>

    <meta charset='utf-8'>

    <meta http-equiv='X-UA-Compatible' content='IE=edge'>

  <title>Page Title</title>

    <script>

    *//输入框*

    prompt('请输入你的年龄');

    *//弹出警示框*

    alert('计算机结果是');

    console.log('程序员可见，在浏览器控制台');



  </script>

</head>

<body>
</body>

</html>
```

## 四、变量

### 4.1 什么是变量？

变量在JavaScript中就是用一个变量名表示，变量名是大小写英文、数字、 $ 和 _ 的组合，且不能用数字开头。变量名不能是JavaScript的关键字，如 if 、 while 等。

用来存储数据的一个空间。

### 4.2 变量的使用

申明一个变量用 let 语句。

变量使用分两步：1. 声明变量    2. 赋值

​   如： `let age;    //声明变量，age是声明的变量`

变量初始化   `let age = 19 ;`

**注意： let 声明变量只能声明一次。var则可以声明多次，但是不推荐。**

案例1：

```html
<!DOCTYPE html>

<html>

<head>

    <meta charset='utf-8'>

    <meta http-equiv='X-UA-Compatible' content='IE=edge'>

  <title>Page Title</title>

    <meta name='viewport' content='width=device-width, initial-scale=1'>

    <script>

    let myname = "nahida";

    let address = "须弥";

    let age = 500;

    let email = 'GenshinImpact@mihoyo.com';

    let salary = 2000;

    console.log('我的名字是%s,我住在%s,我%s了,我的邮箱是%s,我的工资是%s',myname,address,age,email,salary);

  </script>

</head>

<body>

  

</body>

</html>
```

案例2

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <title>变量使用</title>
    <script>
        // 1. 请输如用户名字
        let myName = prompt('请输入你的名字');
        //2. 弹出
        alert(myName);
    </script>
</head>
<body>

</body>
</html>
```

### 4.3 变量的语法扩展

一个变量被重新赋值后，原先的赋值被覆盖，一最后一次赋值为准。

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <script>
        let myname = "Nihida";
        alert(myname);
        myname = 'Barbatos';
        alert(myname);

        //同时声明多个变量
        let age = 6000, address = '璃月', salary = 0;

        //声明变量的特殊情况
        //1. 只声明不赋值  结果是  undefined
        //2. 不声明，不赋值 结果是  Error报错
        //3. 不声明，直接赋值  结果是 10   不提倡，会变成全局变量

    </script>
</head>
<body>

</body>
</html>
```

### 4.4 变量的命名规范

- 由字母、数字、下划线、美元符号（$）组成
- 严格区分大小写
- 不能以数字开头，可以下划线、美元符号开头，其他符号不允许
- 不能是js的保留字、关键字：let、console、name等
- 变量必须有意义
- 遵守驼峰命名。首字母小写，后面的单词的首字母需要大写

### 4.5 交换两个变量的值

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>交换两个变量的值</title>
    <script>
      let nameA = 'Nahida',
              nameB = 'Barbatos',
              temp ;
      alert(nameA);
      alert(nameB);
      console.log(nameA,nameB)
      temp = nameA;
      nameA = nameB;
      nameB =temp;
      console.log(nameA,nameB)
    </script>
</head>
<body>

</body>
</html>
```

### 4.6 数组的基本使用

数组Array 是一种可以按顺序保存多个数据

```javascript
let arr = [];


```

取值：`arr[]`     `数组名[下标]`

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<script>
  let arr = ['nahida','barbatos','Morax','Beelzebul'];
  console.log(arr);
  console.log(arr[0]);
</script>

</body>
</html>
```

## 五、数据类型

计算机顾名思义就是可以做数学计算的机器，因此，计算机程序理所当然地可以处理各种数值。但是，计算机能处理的远不止数值，还可以处理文本、图形、音频、视频、网页等各种各样的数据，不同的数据，需要定义不同的数据类型。在JavaScript中定义了以下几种数据类型：

1. Number
2. 字符串
3. 布尔值
4. 比较运算符
5. null和undefifined
6. 数组
7. 对象

### 5.1 数字型Number

JavaScript不区分整数和浮点数，统一用Number表示，以下都是合法的Number类型：

```
123; // 整数
123 0.456; // 浮点数
0.456 1.2345e3; // 科学计数法表示1.2345x1000，等同于1234.5 
-99; // 负数 
NaN; // NaN表示Not a Number，当无法计算结果时用NaN表示 
Infinity; // Infinity表示无限大，当数值超过了JavaScript的Number所能表示的最大值时，就 表示为Infinity
-Infinity;  //无穷小
```

计算机由于使用二进制，所以，有时候用十六进制表示整数比较方便，十六进制用0x前缀和0-9，a-f表示，例如： `0xff00` ， `0xa5b4c3d2` ，等等。八进制以0开头，如 `010`、`012`。

初始化： `let age = 123；`

- isNaN() 这个方法是判断是否是数字，是数字返回true，不是就返回false。

```javascript
//isNaN() 这个方法是判断是否是数字，是数字返回true，不是就返回false
let nameC = "ZhongLi"
console.log(isNaN(nameC));
let age = 100;
console.log(isNaN(age));
```

### 5.2 字符类型String

字符串是以单引号'或双引号"括起来的任意文本，比如 `'abc'` ， `"xyz"` 等等。请注意， `''` 或 `""` 本身只是一种表示方式，不是字符串的一部分，因此，字符串 `'abc'` 只有`a` ， `b` ， `c` 这3个字符。

可以单引号套双引号，也可以双引号套单引号：`"  ' '  "`  、 `'  " "  '`，不可以单引号套单引号或者双引号套双引号。

字符串转义字符，都是  \  开头，但是这些转义字符都是写到引号里面。

案例：

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <script>
      alert('须弥什么时候开？ \n  我不知道，"这个一定是米哈游干的"')        //   \n 换行
    </script>
</head>
<body>

</body>
</html>
```

#### 5.2.1  字符串长度以及拼接

字符串的length属性可以获取整个字符的长度。

字符串的拼接 +        `'str1' + 'str2'`    字符串类型 + 任何类型 = 拼接智慧的新字符串

符号 +   数值是相加，字符是相连

```javascript
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <script>
      alert('须弥什么时候开？ \n  我不知道，"这个一定是米哈游干的"')
      let str = '须弥什么时候开？ \n  我不知道，"这个一定是米哈游干的"';
      console.log(str.length);

      console.log(str + '\n ——原神3.0版本开');       //   \n 换行
   console.log('nahida' + true)   //  nahidatrue
    </script>
</head>
<body>

</body>
</html>
```

#### 5.2.2 字符串拼接加强

变量不要写在字符串里面，可以：字符串+ 变量 + 字符串

```javascript
let age  = 500;
console.log('nahida age is ' + age + 'years');
```

#### 5.2.3 案例

```javascript
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
  <script>
    let age = prompt('请输入你的年龄');
    let str = "您今年" + age + '岁了';
    alert(str);
  </script>
</head>
<body>

</body>
</html>
```

#### 5.2.4 模板字符串

符号：

- `··`
- 在英文输入模式下tab键上方的的那个键（1 左边的那个键）
- 内容拼接变量时，用`${ }` 包住
- 这玩意可以支持换行。

举例：

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Title</title>
  <script>
    let age = prompt('请输入你的年龄');
    let str = `您今年 ${age} 岁了`;
    alert(str);
    document.write(`大家好，我今年${age}岁了`);
    document.write(`
                        <div>
                            <p>Beelzebul</p>
                        </div>
    `)
  </script>
</head>
<body>

</body>
</html>
```

### 5.3 布尔值Boolean、undefined和null

布尔值和布尔代数的表示完全一致，一个布尔值只有 true 、 false 两种值，要么是 true ，要么是 false ，可以直接用 true 、 false 表示布尔值，也可以通过布尔运算计算出来：

```javascript
true; // 这是一个true值 
false; // 这是一个false值 
2 > 1; // 这是一个true值 
2 >= 3; // 这是一个false值

let flag = true;
ver flag2 = false;
console.log(flag + 1)     // 2
console.log(flag + 1)     // 1

let letiable = undefined;      //undefine 只声明，不赋值
console.log(letiable + 1);    //NaN
console.log(letiable + 'Nahida');    //undefinedNahida

let space = null;          //表示为空
console.log(space + 1);   //1
console.log(space + 'Nahida');   //nullNahida
```

### 5.4 获取变量的类型

`typeof *`

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
  <script>
    let age =10,
            str = 'Nahida',
            flag = true,
            leti = undefined,
            nulli = null;
    console.log(typeof age);
    console.log(typeof str);
    console.log(typeof flag);
    console.log(typeof leti);
    console.log(typeof nulli);     //object
    console.log(typeof age+ '11')  //number11    先判断age的类型，然后和11 组成字符串为number11
  </script>
</head>
<body>

</body>
</html>
```

### 5.5 字面量

在源码中一个固定值的表示法，通俗来说，就是字面量表示如何表达这个值。（不重要）

### 5.6 数据类型转换

#### 5.6.1 转换为字符串类型

- toString()   ：转换成字符串

  ```
  let num = 1;
  alert(num.toString()); 
  ```

- String()   强制转换额为字符串

  ```
  let num = 1;
  alert(String(num));
  ```

- 加号拼接   和字符拼接的结果都是字符串（更喜欢这个，一般称为 隐式转换）

  ```
  let num = 1;
  alert(num + '字符串');
  ```

#### 5.6.2 转化为数字型（重点）

##### 5.6.2.1 parseInt(String)和parseFloat(String)                 *（重点）

```
parseInt('87');     //会得到整数，向下取整
parseInt('87px');   //只保留数字，如果非数字开头，则NaN
parseFloat('114.514');    //浮点数
parseFloat('114.514px');    //浮点数，只保留数字，如果非数字开头，则NaN
```

##### 5.6.2.2 Number()强制转换函数  和隐式转换

Number()内只能放数字类型的字符，其他的会报错

隐式转换：某些运算符被执行时，系统内部自动将数据类型进行转换。

利用算数运算  `- * /` 隐式转换，加号除外。

##### 5.6.2.3 **补充**

​ **+ 号两边只要一个是字符串，就会把另外一个转成字符串**

​ **+ 号作为正号解析可以转换为Number类型**

```
//Number(变量)
let num = '114.514'
Number(num)    //强制转换函数


//利用算数运算  - * / 隐式转换
console.log(num - 0);         //114.514
console.log('120' - '110');   //10
console.log(num * 1);         //114.514
console.log(+num);         //114.514
console.log(+'11' + 11)    //22

```

##### 5.6.2.4计算年龄案例

```javascript
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
  <script>
    let ageA = prompt("输入你出生年");
    let ageB = prompt('今年年数');
    let age = 0;
    ageA = parseInt(ageA);
    ageB = parseInt(ageB);
    age = ageB - ageA;
    alert(ageB + '年时，你' + age + '岁了');
  </script>
</head>
<body>

</body>
</html>
```

#### 5.6.3 转型为布尔行

Boolean()函数

```
Boolean('true');
Boolean('false');
```

代表空、否定的值会被转换为false，如 `''`  、 `0` 、  `NaN` 、   `null` 、 `undefined`。其他非空字符、数字等类型皆转换为true。

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
  <script>
    let myname = prompt('请输入你的姓名');
    let age = prompt('请输入你的年龄');
    let sex = prompt('请输入你的性别');
    alert('您的姓名是' + myname
            +'\n 您的年龄是' + age
            +'\n 您的性别是' + sex);
  </script>
</head>
<body>

</body>
</html>
```

#### 5.7 案例

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<script>
  let price = +prompt('请输入商品价格'),
          num = +prompt('数量'),
          address = prompt('输入你的地址'),
          total = price * num;
  document.write(`
    <table>
    <caption>
        <h2>订单确认</h2>
    </caption>
    <tr>
        <th>商品名称</th>
        <th>商品价格</th>
        <th>商品数量</th>
        <th>总价</th>
        <th>收货地址</th>
    </tr>
    <tr>
        <td>小米12 pro </td>
        <td>${price} 元</td>
        <td>${num} 元</td>
        <td>${total} </td>
        <td>${address} </td>

</tr>
</table>
  `)

</script>

</body>
</html>
```

## 六、运算符

### 6.1 算数运算符

运算符号（加、减、乘、除、取余）：

```javascript
//   +   -    *     /     %   
 
 console.log(0.7 * 10);   //7.00000000001
 let num = 0.1 + 0.2  ;
 console.log(num = 0.3);   //false
 
```

注意：浮点数在算数运算里面会出现问题，不能用浮点数做对比。

算数运算符是有优先级的，先乘除后加减，有括号先算括号里。

##### 表达式与返回值

```
// 是由数字、运算符、变量等组成的式子 为表达式
console.log(1 + 1);    //2 返回值

```

### 6.2 递增递减运算符

++i   i++ 单独使用时候效果一样的，但直作为 n = i ++ 或者 n = ++i ，效果是不一样的

```javascript
//形如：
let n=0, i = 0;

++i       // i = i+1
n = ++i    //先自加，再赋值
i++        // i = i+1
n = i++    //先赋值，再自加

--i
i--

i +=2  //  i = i + 2
i -=2  //  i = i - 2

```

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
  <script>
    let i= 0, n= 2;
    n = i++;
    console.log(n);  // n = 0
    console.log(i);  // i = 1
    n = ++i;         // n = 2 ; i = 2
    console.log(n);  // 2
      
    let e = 12;
    f = e++ + ++e;   //  10 + 12  = 22
    console.log(f);  //  22
  </script>
</head>
<body>

</body>
</html>
```

比较常见的是 单独的使用   i++   。但是其他也要掌握，面试和考试的时候为难人的

### 6.3 比较运算符

当我们对Number做比较时，可以通过比较运算符得到一个布尔值：

```javascript
2 > 5; // false 
5 >= 2; // true 
7 == 7; // true
```

实际上，JavaScript允许对任意数据类型做比较：

```javascript
false == 0; // true 
false === 0; // false
```

要特别注意相等运算符 == 。JavaScript在设计时，有两种比较运算符：

第一种是 `==` 比较，它会自动转换数据类型再比较，很多时候，会得到非常诡异的结果；

第二种是 `===` 比较，它不会自动转换数据类型，如果数据类型不一致，返回 false ，如果一致，再比较。

**由于JavaScript这个设计缺陷，不要使用`==` 比较，始终坚持使用** `===` **比较。** 因为`===`是比较同类型的数值，优先使用全等符号`===`。

另一个例外是 `NaN` 这个特殊的`Number`与所有其他值都不相等，包括它自己：

```
NaN === NaN; // false
```

唯一能判断 `NaN` 的方法是通过 `isNaN()` 函数：

```
isNaN(NaN); // true
```

最后要注意浮点数的相等比较：

```
1 / 3 === (1 - 2 / 3); // false 
```

这不是JavaScript的设计缺陷。浮点数在运算过程中会产生误差，因为计算机无法精确表示无限循环小数。要比较两个浮点数是否相等，只能计算它们之差的绝对值，看是否小于某个阈值：

```
Math.abs(1 / 3 - (1 - 2 / 3)) < 0.0000001;   // true
```

### 6.4 逻辑运算符

&&     与

||      或

！       非

与其他计算机语言的使用方法一致。

##### 其他情况

​ 短路运算（逻辑中断）：当有多个表达式（值）时，左边的表达式可以确定结果时，就不再继续运算右边的表达式的值。

###### 逻辑与： 表达式1 && 表达式2

- 如果表达式1 为真 ，则返回表达式2 
- 如果表达式1 为假， 则返回表达式1       

```javascript
console.log(123 && 456)   //456
console.log(0 && 456)   // 0
console.log(0 && 459+2356 && 100*235356)  // 0

//如果有空、为0或者否定的，为假.其余的是真的
```

###### 逻辑或：表达式1 || 表达式2

- 如果表达式1为真，返回表达式1
- 如果表达式1为假，返回表达式2

```javascript
console.log(123 || 456)   //123
console.log(0 || 456)   // 456
console.log(1 || 459+2356 || 100*235356)  // 1
console.log(0 || 456 || 456+123)   //  456

//如果有空、为0或者否定的，为假.其余的是真的

let num = 0;
console.log(123 || num++);     //123   123为真，num++不执行
console.log(num);   // 0
```

### 6.5 赋值运算符

```javascript
i= 0;   
n+=2;  // n = n+2
e-=2;  // e = e-2
v*=10;  // v = v*3
k/=13;  // k = k/13
p%=19;  // p = p%19
```

### 6.6 运算符的优先级

优先级越小越优先

![image-20220812162024591](https://img.up.cdn.nahida.cn/typora-user-images/image-20220812162024591.png)

## 七、流程控制

顺序结构、分支结构、循环结构

### 7.1 顺序结构

按照代码的先后顺序，依次执行

### 7.2 分支结构

根据不同条件，执行不同的路径代码

#### 7.2.1 if分支

```javascript
//语法结构
if(条件表达式){
   //条件成立时执行的执行语句
   }

//执行思路： 如果if里面的条件表达式为真，则执行大括号里边的执行语句
//举例

if(5 > 3){
    alert(true);
}
```

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <script>
      let age = prompt("请输入您的年龄")
//      age = parseFloat(age);
      if (age > 18){
        alert('您可以进入网吧了')
      }else {
        alert('您未满18岁或者输入年龄有误')
      }
    </script>
</head>

<body>

</body>
</html>
```

#### 7.2.2 if-else分支

```javascript
if(条件表达式){
    //条件为真，执行的语句
} else{
    //条件为假。执行的语句
}
```

```javascript
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <script>
      let year = prompt("输入年份");
      year = parseInt(year);

      if (year % 4 ==0 && year%100 !=0 || year%400 ==0){
        alert(year + "是闰年");
      }else {
        alert(year + "不是闰年");
      }

    </script>
</head>
<body>

</body>
</html>
```

#### 7.2.3 if -else if多分支

```javascript
if(条件一){
   //满足条件一执行的语句1
   }else if(条件二){
   //满足条件二执行的语句2         
   }else if(条件三){
   //满足条件三执行的语句3      
   }else{
   //都不满足的时候，执行的语句   
   }
```

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <script>
      let performance = 0
      while (true){
        performance =prompt("请输入你的成绩");
        performance = parseFloat(performance);
        if (performance >= 90){
          alert('成绩优秀');
        }else if (performance >=80 && performance < 90){
          alert('成绩良好');
        }else if (performance >=60 && performance <80 ){
          alert('成绩合格');
        }else {
          alert('成绩不及格')
        }
      }


    </script>
</head>
<body>

</body>
</html>
```

#### 7.2.4 三元表达式

```javascript
//三元表达式
//   条件表达式 ？表达式1 ：表达式2
//   条件表达式结果为真，执行（返回）表达式1；如果条件表达式结果为假，执行（返回）表达式2

//举例
let num  = 5;
let result = num > 5 ? '是的' : '不是的';
console.log(result);  //是的
```

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <script>
      let num = prompt("请输入一个0~59的数字");
      let time = num<10 ? '0'+num : num;       //三元表达式一定有一个返回值
      alert(time);
    </script>
</head>
<body>

</body>
</html>
```

#### 7.2.5 switch分支

```javascript
// 主要针对特定值，执行对应的语句
// switch (判断表达式) {
//   case value1:
//     执行语句一;
//     break;
//   case value2:
//     执行语句一;
//     break;
//   ...
//   default:
//     执行最后的语句;
//
// }

//如果表达式的值与case的value值匹配得上，就执行相应的语句。如果都没有匹配得上，就执行default里面的语句

//switch的注意事项：
//1. 表达式里边一般写为变量
//2. case的value值与判断表达式的值相匹配的时候是全等关系（也就是类型和数据值是一致的）
//3. break；没有的话，会继续执行接下来的程序语句
```

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <script>
      switch (2) {
        case 1:
          alert(1);
          break;
        case 2:
          alert(2);
          break;

        default:
          alert(null);

      }
    </script>
</head>
<body>

</body>
</html>
```

switch的注意事项：

1. 表达式里边一般写为变量
2. case的value值与判断表达式的值相匹配的时候是全等关系（也就是类型和数据值是一致的）
3. break；没有的话，会继续执行接下来的程序语句

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <script>
      let f = prompt('请输入一种水果');
      switch (f){
        case '苹果':
          alert('3.5D/kg');
          break;
        case '榴莲':
          alert('6356D/kg');
          break;
        default:
          alert(null);
      }
    </script>
</head>
<body>

</body>
</html>
```

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>简易计算器</title>
</head>
<body>
<script>
  let num1 = prompt('输入第一个数');
  let num2 = prompt('输入第二个数');
  let sp = prompt('输入 +-*/ 运算符');
  switch (sp) {
    case '+':
      alert(`您选择的是加法，结果是${+num1 + +num2}`);
      break;
    case '-':
      alert(`您选择的是减法，结果是${num1 - num2}`);
      break;
    case '*':
      alert(`您选择的是乘法，结果是${num1 * num2}`);
      break;
    case '/':
      alert(`您选择的是除法，结果是${num1 / num2}`);
      break;
    default:
      alert('输入错误');


  }

</script>

</body>
</html>
```

**if-if elae -else和switch的区别**

1. 一般情况下，他们两个可以相互替换
2. switch 语句通常处理case的值的情况，而if-else 语句更灵活
3. switch语句进行条件判断后直接执行对应的程序语句，效率更高。而if else if语句会逐一判断各个条件，找到满足条件为止。
4. 当分支比较少时候，if-else比较好一些
5. 当分支比较多的时候，switch语句的执行效率更高一些，且结构清晰

### 7.3 循环结构

可以重复执行某些代码

#### 7.3.1 循环退出： continue 和break

- continue：结束本次循环，继续下一次循环
- break：直接退出while循环

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
    <script>
        let i = 1;
        while (i < 6){
            if (i===3){
                i++;
                continue
            }
            if (i===4){
                i++;
                break
            }
            document.write(`我要吃第${i}个包子<br>`);
            i++;
        }
  
        
        for(let n = 1; n < 5; n++ ){
            if(n === 2){
                continue;
            }
            if(n === 4){
                break;
            }
            document.write(n);
        }
    </script>

</body>
</html>
```

#### 7.3.2 for循环

```javascript
for(初始化变量;循环条件;操作表达式){
    //循环体
}

//初始变量就是用let 声明的一个普通变量，通常用于作为计数器使用
//条件表达式 就是用来决定每一次循环是否继续执行 就是终止的条件
//操作条件 是每次循环最后执行的代码 经常用于计数器变量进行更新

for(let i = 0 ; i <10 ; i++){
    alert('打印10次');
}

// 先执行 let = 0
// 再执行 i <100   判断条件，满足进行下一步
// 执行循环体  alert('打印100次');
// 执行 i++
// 回到 执行 i <100   判断条件... 重复执行
// 执行到没有满足i <100的判断条件，退出循环
```

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<script>
  //求1-100 之间的偶数和
  let sum = 0;
  for (let i = 0; i <= 100; i++) {
    if (i % 2 ===0){
      sum +=i;
    }

  }
  document.write(sum);

  //页面中打印5个小星星
  for (let n = 0; n < 5; n++) {
    document.write('⭐');
  }
</script>

</body>
</html>
```

循环遍历数组：

```javascript
let arr = ['Nahida','Barbatos','Morax','Beelzebul'];
for (let j = 0; j < arr.length; j++) {
  document.write(`${arr[j]} <br>`)
}
```

##### 循环嵌套

```javascript
for(外部循环){
    for(内部循环){
        循环体;
    }
}
```

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<script>
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      document.write(`※`)
    }
    document.write('<br>');
  }
</script>

</body>
</html>
```

案例：

```javascript
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>三角形</title>
</head>
<body>
<script>
  for (let i = 1; i < 6; i++) {
    for (let j = 1; j <= i; j++) {
      document.write(`★`)
      }
    document.write('<br>');
  }
</script>

</body>
</html>
```

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>三角形</title>
  <style>
    div{
      display: inline-block;
      height: 25px;
      line-height: 25px;
      background-color: aqua;
      margin: 5px;
      padding: 0 10px;
      border: 1px solid #66ccff;
      box-shadow: 2px 2px #66ccff;
      color: #1f9763;
      border-radius: 5px;
    }
  </style>
</head>
<body>
<script>
  for (let i = 1; i < 10; i++) {
    for (let j = 1; j <= i; j++) {
      document.write(`
        <div>${i} x ${j} = ${i * j} </div>
      `)
      }
    document.write('<br>');
  }
</script>

</body>
</html>
```

#### 7.3.4 断点调试

- 浏览器，快捷键F12（鼠标右键->检查）
- 选择  ”Source“
- 选择想要测试的代码，点击对应的行号，设置断点
- 刷新浏览器
- 点击一个 "向下弯曲的箭头 ，下面有一个点 " 的图标，逐步测试

#### 7.3.5 while循环

`while()`  在...区间

```
while(循环条件){
  //重复执行（循环体）
}

//循环体为真时，重复执行循环体
```

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<script>
  let i = 1;
  while (i <= 10){
    document.write(`考研上岸,月薪过万<br>`);
    i+=2;
  }

  //计算1~100的累加
  let  j = 1;
  let sum = 0;
  while (j <=100){
      sum +=j;
      j++;
  }
  document.write(sum)

  //计算1-100之间的偶数和
  let n = 1;
  let sumD = 0;
  while (n <= 100){
      if (n % 2 ===0){
          sumD = sumD + n;
      }
      n++;
  }
  document.write(sumD)
</script>

</body>
</html>
```

#### 7.3.6 do...while循环（很少用）

##### 练习

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>简易ATM</title>
</head>
<body>
<script>
  let money  = 1000;
  while (true){
    let str = prompt(`请输入您的操作：
          1. 存钱
          2. 取钱
          3. 查看余额
          4. 退出
    `);
    if ( str === '4') {
      break;
    }
    switch (str){
      case '1':
        let store = +prompt('请输入您存入的金额');
        money = money + store;
        break;

      case '2':
        let qu = +prompt('请输入您存入的金额');
        money = money - qu;
        break;

      case '3':
        alert(`您的余额是 ${money}元`);
    }

  }
</script>

</body>
</html>
```

####

#### 7.3.7 for和while的区别

- 当如果明确了循环次数的时候推荐使用for循环
- 当不明确循环次数的时候推荐while循环

## 八、数组

声明语法：`let arr = ['nahida','barbatos','Morax','Beelzebul'];`    `let 数组名 = [元素1 ，元素2，元素3，]`

取值：`arr[0]`      `数组名[下标]`

案例

数组求和

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<script>
  let arr = [2,6,1,7,4];
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  document.write(`数组求和：${sum}`);
</script>

</body>
</html>
```

求数组中的最大值：

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<script>
  let arr = [2,6,1,77,52,25,7];
  let max_value = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (max_value < arr[i])
      max_value = arr[i];
  }
  document.write(`最大值：${max_value}`);
</script>

</body>
</html>
```

#### 操作数组

增删查改：

查询数组： `数组[下标]`

改（重新赋值）：`数组[下标] = 新值`

增 （添加新数据） `arr.push (新内容） arr.unshift(新增的内容)`

删   删除数据     `arr.pop()`     `arr.shift()`   `arr.splice(操作下标 ，删除个数)`

### 8.1 添加数组元素

1. 这一种方法是从数组**结尾**添加元素，顺带返回数组长度

`arr.push(元素1，元素2，元素3 ...)`  

2. 这一种方法是从数组的**开头**添加元素，顺带返回数组长度

   `arr.unshift(元素1，元素2，元素3 ...)`  

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<script>
  let arrA = [2,0,6,1,77,0,52,0,25,7];
  let arrB = [];
  let arrC = [];
  for (let i = 0; i < arrA.length; i++) {
    if (arrA[i] >= 10){         //将A数组大于10的元素存入B数组
      arrB.push(arrA[i]);
    }
    if (arrA[i] !== 0){         //将A数组非0的元素存入B数组
      arrC.push(arrA[i]);
    }
  }
  document.write(arrA);
  document.write(`<br>`)
  document.write(arrB);
  document.write(`<br>`)
  document.write(arrC);
</script>

</body>
</html>
```

### 8.2 删除数组元素

1. 从数组结尾删除元素：`arr.pop()`

2. 删除素组的第一个元素  ： `arr.shift()`

3. 指定指定元素（开发常用） ：  `arr.splice(数组下标 ，删除个数)`   `arr.splice(起始位置 ，删除个数)`

   ```html
   <!DOCTYPE html>
   <html lang="en">
   <head>
       <meta charset="UTF-8">
       <title>Title</title>
   </head>
   <body>
   <script>
     let arr = ['nahida','Barbatos','Morax','Beelzebul'];
   
     //查
     console.log(arr[0]);
   
     //改
     arr[2] = 'ZhongLi';
     console.log(arr[2]);
   
     //增
     arr.push('雷电将军', '冰之女皇' );
     console.log(arr);
   
     arr.unshift('温迪', `卖唱的`);
     console.log(arr);
   
     //删
     arr.pop();
     console.log(arr.pop());    //'雷电将军'   返回被删除的值
     console.log(arr);
   
     arr.shift();
     console.log(arr.shift());   //卖唱的   返回被删除的值
     console.log(arr);
   
     arr.splice(1,1)  //删除
     arr.splice(1)  //删除   从数组下标为1开始往后删
     console.log(arr);
   
   
   
   
   </script>
   
   </body>
   </html>
   ```

### 8.3 冒泡排序

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<script>
  let arr = [2,0,6,1,77,1,52,3,25,7];
  let temp = 0;
  for (let i = 0; i < arr.length-1; i++) {
      for (let j = 0; j < arr.length - i -1 ; j++) {
          if (arr[j+1] <arr[j]){
              temp = arr[j];
              arr[j] = arr[j+1];
              arr[j+1] = temp;
          }
      }
  }
  console.log(arr)

</script>

</body>
</html>
```

### 8.4 综合案例

用户输入4个季度数据，生成4个季度的柱状图

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <style>
      *{
        margin: 0;
        padding: 0;
      }
      .box{
        display: flex;
        width: 700px;
        border-left: 1px solid pink;
        border-bottom: 1px solid pink;
        margin: 50px auto;
        justify-content: space-around;
        align-items: flex-end;
        text-align: center;
      }
      .box>div{
        display: flex;
        width: 50px;
        background-color: pink;
        flex-direction: column;
        justify-content: space-around;
      }
      .bax div span{
        margin-top: -20px;
      }

      .box div h4{
        margin-top:  70px;
        width: 70px;
        margin-left: -10px;
      }

    </style>
</head>
<body>
<script>
  let arr = [];
  for (let i = 0; i < 4; i++) {
    let num = +prompt(`请输入第${i+1} 个季度的数据`);
    arr.push(num);
  }
  console.log(arr)
  document.write(`<div class="box">`)
  for (let j = 0; j < arr.length; j++) {
    document.write(`
      <div style="height: ${arr[j]}px">
         <span>${arr[j]}</span>
         <h4>第${j+1}个季度</h4>
      </div>
    `)
  }
  document.write(`</div>`)
</script>

</body>
</html>
```

## 九、函数

### 9.1 基本使用

精简代码，方便复用，提高开发效率。

函数的声明语法

```javascript
function 函数名(){
函数体
}
```

函数的调用    `函数名()`

函数命名的规范：

1. 和变量名基本一致
2. 尽量小驼峰式命名法
3. 前缀应该为动词
4. 命名建议：常用动词约定   如 `function getName(){}`

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>三角形</title>
  <style>
    div{
      display: inline-block;
      height: 25px;
      line-height: 25px;
      background-color: aqua;
      margin: 5px;
      padding: 0 10px;
      border: 1px solid #66ccff;
      box-shadow: 2px 2px #66ccff;
      color: #1f9763;
      border-radius: 5px;
    }
  </style>
</head>
<body>
<script>
    function fn(){
        for (let i = 1; i < 10; i++) {
            for (let j = 1; j <= i; j++) {
                document.write(`
        <div>${i} x ${j} = ${i * j} </div>
      `)
            }
            document.write('<br>');
        }
    }

    fn();
    fn();
</script>

</body>
</html>
```

```javascript
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<script>
  function getSum(){
    let num = 12;
    let num2 = 16;
    document.write(num + num2);
  }

  getSum();
  function getSum100(){
    let sum = 0;
    for (let i = 1; i < 101; i++) {
      sum +=i;

    }
    document.write(sum);
  }
  getSum100();
</script>

</body>
</html>
```

### 9.2 参数

需要参数的传参。使用者可以通过传入数据，那么就需要有参数的函数。以提高函数的灵活性。

开发种尽量保持形参和实参个数一致。

```javascript
function 函数名(参数列表){
函数体
}
```

```javascript
function getSum(num1 , num2){
 let sum = num1 + num2;
    console.log(sum);
}

getSum(1,2)


// num1和num2是形参
// 1、2 是实参
```

案例：函数封装求和

**合理利用逻辑中断**

```JavaScript
function getSum(x, y){
  x = x || 0;
  y = y || 0;
  console.log(x+y);
}
getSum(1,2);
```

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<script>
  function getScore(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
      sum +=numbers[i];

    }
    document.write(sum);
  }

  getScore([99,100,93]);

</script>

</body>
</html>
```

### 9.3 返回值、返回多个值

函数的返回值。当调用某个函数值的时候，函数返回一个特定的值。但是有些函数根据需求不需要返回值。

很多情况下需要返回值。

##### 9.3.1 返回一个值

如果函数需要返回数据时候，使用 return关键字修饰   `return  数据`    `return 20`

return 有立即结束函数的作用。如果函数中没有写return 则默认为为undefined

```javascript
function fn(){
 return 20;
}

console.log(fn());


function getSum(x, y){
  x = x || 0;
  y = y || 0;
  return x+y;
}
let sum = getSum(1,2);
console.log(sum);

function fn2(){
    
}
let i = fn2();    //undefine
```

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<script>
 function getArrMaxValue(arr){
    let Max = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] >= Max){
        Max = arr[i];
      }
    }
    return Max;
  }
  let maxP = getArrMaxValue([65,25,65,94,215,435,45])
 document.write(maxP);

</script>

</body>
</html>
```

##### 9.3.2 返回多个值

return只返回一个值

```javascript
function fn(x,y){
    let jia = x+y;
    let jian = x-y;
    return [jia , jian];
}

let re = fn(1,2);
document.write(`相加之后的值是${re[0]}，相减之后的值是${re[1]}`);

```

### 9.4 作用域以及作用域链

##### 9.4.1 作用域

限定某个名字的可用性的代码范围（一个程序代码中所用到的名字并不是总时有效的和可用的）**就是在那个位置起作用**

作用域有全局作用域（整个script标签内部）、局部作用域（函数内的代码环境）、块级作用域（由`{}`包括，if语句和for语句里面的{} 等）

```javascript
let num = 10;     //全局变量
function fn(){
    console.log(num);
    if(true){
        console.log(num);
    }
}


//=======================
function fn2(){
    let num2 = 20;     //局部变量
    function fn21(){
        let num3 = 30;
    }
    console.log(num3)//报错
}
console.log(num2);  //报错


//=======================

if(true){
    let num5 = 50;     //块级变量
}
consloe.log(num5);     //报错

```

**坑： 如果在内部或者块级的内部直接赋值，则当作全局变量**。函数形参是局部变量。

```javascript
//一般
let sum = 0;

//
max = 100;    //全局变量

```

##### 9.4.2 作用域链

变量的访问原则：就近原则,找到最终的值

```javascript
let num = 10;
function fn(){
    let num = 20;
    console.log(num);    //20
}
```

### 9.5 匿名函数

具名函数

```javascript
function  fn(){}
fn();
```

匿名函数

```javascript
function(){
  //函数体
}

// 1种写法
let num = 10;
let fn = function(){
    console.log(111);
}
fn();

// 2种写法
let fn2 = function(x, y){
    console.log(x+y);
}
fn2(1,2);
```

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<button>点击我</button>
<script>
//  let btn = document.querySelector('button')
  // btn.onclick = function (){
  //   alert('月薪过万');
  // }

  let btn = document.querySelector('button')
  btn.addEventListener('click',function (){
    alert('月薪过万');
  })
</script>

</body>
</html>
```

##### 立即执行函数

立即执行，不用调用。多个立即执行函数之间必须有分号隔开

```javascript
(function(){ console.log(11) })()      //方式一

(function(){console.log(11)}())      //方式二
```

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<button>点击我</button>
<script>
//  let btn = document.querySelector('button')
  // btn.onclick = function (){
  //   alert('月薪过万');
  // }


//第一个小括号放的是形参，第二个小括号里面放的是实参

(function (){console.log(111);})();
(function (){ console.log(111)}());
    
(function (x , y){return x+y;})( 1 ,2);
    
(function (x,y){return x+y;}(1,2));
</script>

</body>
</html>
```

### 9.6 综合案例：转换时间

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<script>
  let time = +prompt('请输入秒数');
  function getTime(time){

    let h = parseInt(time /60 /60 % 24);

    let m = parseInt(time /60 % 60);
    let s = parseInt(time % 60);
    h = h< 10? '0'+h :h;
    m = m< 10? '0'+m :m;
    s = s< 10? '0'+s :s;
    return `${h} 时 ${m} 分 ${s} 秒` ;

  }
  let str = getTime(time);
  document.write(str);
</script>

</body>
</html>
```

1. 实参个数少于形参，返回结果NaN
2. 实参个数多于形参，实际只看形参个数的多少，剩下的将不被处理
3. 如果不知道实参个数，可以算数下面的方式

```javascript
function fn(){       
            //arguments函数内有效 ，表现形式是伪数组
            //伪数组 比真数组 少了一些pop push等方法
    console.log(arguments);       //[1,2,3]
    let sum = 0;
    for(let i = 0; i<arrguments.length;i++){
        sum += arguments[i];
    }
    console.log(sum);
}

fn(1,2,3)   //6
```

### 9.7 函数传参赋值小技巧

我怕你传参不带参数

**方法一**

```javascript
function fn(x, y){
  x = x || 0;
  y = y || 0;
  console.log(x+y)
}

fn();
fn(1,2)
```

**方法二**

```javascript
function fn(x= 0,fn = 0){
    console.log(x+y)
}

fn()
fn(1,2)    //调用的时候会进行内部替换
```

## 十、对象，面向对象编程

### 10.1 啥是对象？

Object：对象也是一种数据类型，一种无序的数据集合。

对象声明语法：

```javascript
ler 对象名 = {
    属性名: 属性值
    方法名 : function(){}
}

//例子
let person = {
    uname = 'Barbatos',
    age = '5000',
    sex = 'M'，
    sayHi: function(){
        document.write('hi~');
    }，
    mtv: function(x){
        console.log(x)
    }
}

//属性访问
let uname = person.uname;    //   访问属性一     对象名.属性名
person.sayHi();              //   访问对象方法
person.mtv('Genshin Impact')   //  访问对象方法并传参

let unmae = person['uname']  //   访问属性二     对象名['属性名']

```

### 10.2 操作和遍历

#### 10.2.1**增删查改**

改：属性赋值

```javascript
对象.属性 = 值；
对象.方法 = function(){}
```

增：添加对象属性（js 可以非常方便的的动态新增属性或者方法）

```
对象.新属性 = 值;
```

```javascript
let person = {
    uname = 'Barbatos',
    age = '5000',
    sex = 'M'，
    sayHi: function(){
        document.write('hi~');
    }，
    mtv: function(x){
        console.log(x)
    }
}


//改
persion.uname = 'Venti';
persion.sayHi = function(){
    document.write('欸嘿');
}

//新增
person.aName = '卖唱的';
person.move = function(){};
//删
delete person.aName;
delete person.move;

//对象遍历
for(let key in person){
    console.log(key)       //属性名
    console.log(person[key]);   //属性值 由于unmae = person['uname']，可以把 key 看作是 'uname’
}
```

#### 10.2.2 对象遍历

```javascript
for(let key in 对象){
    //key
    //对象[key]
}
```

案例：学生信息表

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<style>
    table{
        width: 700px;
        text-align: center;
    }

    table,
    th,
    td{
        border: 1px solid #ccc;
        background-color: #1f9763;
    }

    caption{
        font-size: 18px;
        margin-top: 10px;
        font-weight: 700;
    }

    tr{
        height: 40px;
        cursor: pointer;
    }
    table tr:nth-child(1){
        background-color: #1f9763;
    }
    table tr:not(fist-child):hover {
        background-color: #eee;
    }
</style>
<body>
<script>
    //数组 里面可以存放任何数据类型，对象也可以
    //对象数组
    let students= [
        {name : 'Barbatos', age:4000, gender : 'm' , hometown : 'MD'},
        {name : 'Morax', age:6000, gender : 'm' , hometown : 'LY'},
        {name : 'Beelzebul', age:3000, gender : 'w' , hometown : 'DQ'},
        {name : 'Nahida', age:500, gender : 'w' , hometown : 'XM'},
    ];

    //遍历数组

    document.write(`
        <table>
    <caption>学生列表</caption>
    <tr>
        <th>序号</th>
        <th>姓名</th>
        <th>年龄</th>
        <th>性别</th>
        <th>家乡</th>
    </tr>
    `)

    //打印一个对象，其实都是里面每一个对象都是 里面的的元素
    for (let i = 0; i < students.length; i++) {
        document.write(`
            <tr>
                    <td>${i+1}</td>
        `);
         for (let k in students[i]) {
             document.write(`
                 <td>${students[i][k]}</td>
                 `);

         }

        document.write(`
            </tr>
        `)

    }

document.write(`
    </table>
`)
</script>
<table>
    <caption>学生列表</caption>
    <tr>
        <th>序号</th>
        <th>姓名</th>
        <th>年龄</th>
        <th>性别</th>
        <th>家乡</th>
    </tr>
    <tr>
        <td>1</td>
        <td>小米</td>
        <td>16</td>
        <td>男</td>
        <td>河北</td>
    </tr>
</table>
</body>
</html>
```

## 十一、Math 数学对象

**内置对象：JavaScript一般也会有一些封装好的对象，提供开发者使用**

### 11.1 Math对象

方法：

- `random()`     生成0-1之间的随机数（不包括0和1）
- `ceil()`    向上取整
- `floor()`    向下取整
- `max()`   找最大数
- `min()`  找最小数
- `pow(x,y)`  幂运算
- `abs()`   绝对值
- `round()`  就近取整（负值时，-*.5往大取整   -1.5 取-1值，  -1.9取-2值   ， -1.1 取-1值）
- 其他方法，百度

```javascript
console.log(Math.PI) //圆周率 属性

console.log(Math.random()) //随机数 方法



```

### 11.2 随机数

如何随机数

生成0-10的随机数：

```javascript
Math.floor(Math.random()*10+1);
```

生成5-10的随机数

```javascript
Math.floor(Math.random()*(5+1)+5);
```

生成N-M之间的随机数

```javascript
Math.floor(Math.random()*((M - N) + 1 ) + N );
```

```javascript
function getRandom(min,max){
    return Math.floor(Math.random()*((max - min)+1) + min);
}

let random = getRandom(1,10);

```

案例：随机数点名

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<script>
  let arr = ['Nahida','barbatos','Morax','Beelzebul'];
  function getRandom(min,max){
    return Math.floor(Math.random()*((max - min)+1) + min);
  }

  let random = getRandom(0,3);
  document.write(arr[random]);
  arr.splice(random,1);
  document.write(`<br>`)
  document.write(arr);

</script>

</body>
</html>
```

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<script>

  function getRandom(min,max){
    return Math.floor(Math.random()*((max - min)+1) + min);
  }
  let random = getRandom(1,10);
  while (true){
    let num = +prompt("猜一个数");
    if (num === random){
      alert('猜正确了');
      document.write(random);
      break;
    }else if (num > random){

      alert(`私密马赛，猜大了`)
    }else {

      alert('私密马赛，猜小了')
    }

  }


</script>

</body>
</html>
```

综合案例：学成在线

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>学车在线首页</title>
    <link rel="stylesheet" href="style.css">
    <style>
  * {
                margin: 0;
                padding: 0;
            }
            .w {
                width: 1200px;
                margin: auto;
            }
            body {
                background-color: #f3f5f7;
            }
            li {
                list-style: none;
            }
            a {
                text-decoration: none;
            }
            .clearfix:before,.clearfix:after {
                content:"";
                display:table; 
              }
              .clearfix:after {
                clear:both;
              }
              .clearfix {
                 *zoom:1;
              }   

            .header {
                height: 42px;
                /* background-color: pink; */
                /* 注意此地方会层叠 w 里面的margin */
                margin: 30px auto;
            }
            .logo {
                float: left;
                width: 198px;
                height: 42px;
            }
            .nav {
                float: left;
                margin-left: 60px;
            }
            .nav ul li {
                float: left;
                margin: 0 15px;
            }
            .nav ul li a {
                display: block;
                height: 42px;
                padding: 0 10px;
                line-height: 42px;
                font-size: 18px;
                color: #050505;   
            }
            .nav ul li a:hover {
                border-bottom: 2px solid #00a4ff;
                color: #00a4ff;
            }
            /* search搜索模块 */
            .search {
                float: left;
                width: 412px;
                height: 42px;
                margin-left: 70px;
            }
            .search input {
                float: left;
                width: 345px;
                height: 40px;
                border: 1px solid #00a4ff;
                border-right: 0;
                color: #bfbfbf;
                font-size: 14px;
                padding-left: 15px;
            }
            .search button {
                float: left;
                width: 50px;
                height: 42px;
                /* 按钮button默认有个边框需要我们手动去掉 */
                border: 0;
                background: url(images/btn.png);
            }
            .user {
                float: right;
                line-height: 42px;
                margin-right: 30px;
                font-size: 14px;
                color: #666;
            }
            /* banner区域 */
            .banner {
                height: 421px;
                background-color: #1c036c;
            }
            .banner .w {
                height: 421px;
                background: url(images/banner2.png) no-repeat top center;
            }
            .subnav {
                float: left;
                width: 190px;
                height: 421px;
                background: rgba(0,0,0, 0.3);
            }
            .subnav ul li {
                height: 45px;
                line-height: 45px;
                padding: 0 20px;
            }
            .subnav ul li a {
                font-size: 14px;
                color: #fff;
            }
            .subnav ul li a span {
                float: right;
            }
            .subnav ul li a:hover {
                color: #00a4ff;
            }
            .course {
                float: right;
                width: 230px;
                height: 300px;
                background-color: #fff;
                /* 浮动的盒子不会有外边距合并的问题 */
                margin-top: 50px;
            }
            .course h2 {
                height: 48px;
                background-color: #9bceea;
                text-align: center;
                line-height: 48px;
                font-size: 18px;
                color: #fff;
            }
            .bd {
                padding: 0 20px;
            }
            .bd ul li {
                padding: 14px 0;
                border-bottom: 1px solid #ccc;
            }
            .bd ul li h4 {
                font-size: 16px;
                color: #4e4e4e;
            }
            .bd ul li p {
                font-size: 12px;
                color: #a5a5a5;
            }
            .bd .more {
                display: block;
                height: 38px;
                border: 1px solid #00a4ff;
                margin-top: 5px;
                text-align: center;
                line-height: 38px;
                color: #00a4ff;
                font-size: 16px;
                font-weight: 700;
            }
            /* 精品推荐模块 */
            .goods {
                height: 60px;
                background-color: #fff;
                margin-top: 10px;
                box-shadow: 0 2px 3px 3px rgba(0,0,0, 0.1);
                /* 行高会继承， 会继承给3个孩子 */
                line-height: 60px;
            }
            .goods h3 {
                float: left;
                margin-left: 30px;
                font-size: 16px;
                color: #00a4ff;
            }
            .goods ul {
                float: left;
                margin-left: 30px;
            }
            .goods ul li {
                float: left;
            }
            .goods ul li a {
                padding: 0 30px;
                font-size: 16px;
                color: #050505;
                border-left: 1px solid #ccc;
            }
            .mod {
                float: right;
                margin-right: 30px;
                font-size: 14px;
                color: #00a4ff;
            }
            .box {
                margin-top: 30px;
            }
            .box-hd {
                height: 45px;
            }
            .box-hd h3 {
                float: left;
                font-size: 20px;
                color: #494949;
            }
            .box-hd a {
                float: right;
                font-size: 12px;
                color: #a5a5a5;
                margin-top: 10px;
                margin-right: 30px;
            }
            /* 把li 的父亲ul 修改的足够宽一行能装开5个盒子就不会换行了 */
            .box-bd ul {
                width: 1225px;
            }
            .box-bd ul li {
                position: relative;
                top: 0;
                float: left;
                width: 228px;
                height: 270px;
                background-color: #fff;
                margin-right: 15px;
                margin-bottom: 15px;
                transition: all .3s;

            }
            .box-bd ul li:hover {
                top: -8px;
                box-shadow: 2px 2px 2px 2px rgba(0,0,0,.3);
            }
            .box-bd ul li img {
                width: 100%;
            }
            .box-bd ul li h4 {
                margin: 20px 20px 20px 25px;
                font-size: 14px;
                color: #050505;
                font-weight: 400;
            }
            .box-bd .info {
                margin: 0 20px 0 25px;
                font-size: 12px;
                color: #999;
            }
            .box-bd .info span {
                color: #ff7c2d;
            }
            /* footer 模块 */
            .footer {
                height: 415px;
                background-color: #fff;
            }
            .footer .w {
                padding-top: 35px;
            }
            .copyright {
                float: left;
            }
            .copyright p {
                font-size: 12px;
                color: #666;
                margin: 20px 0 15px 0;
            }
            .copyright .app {
                display: block;
                width: 118px;
                height: 33px;
                border: 1px solid #00a4ff;
                text-align: center;
                line-height: 33px;
                color: #00a4ff;
                font-size: 16px;
            }
            .links {
                float: right;
            }
            .links dl {
                float: left;
                margin-left: 100px;
            }
            .links dl dt {
                font-size: 16px;
                color: #333;
                margin-bottom: 5px;
            }
            .links dl dd a {
                color: #333;
                font-size: 12px;
            }
    </style>
</head>

<body>

    <!-- 4. box核心内容区域开始 -->
    <div class="box w">
        <div class="box-hd">
            <h3>精品推荐</h3>
            <a href="#">查看全部</a>
        </div>
        <div class="box-bd">
            <ul class="clearfix">
                <script>
                    let data = [
                        {
                            src: 'images/course01.png',
                            title: 'Think PHP 5.0 博客系统实战项目演练',
                            num: 1125
                        },
                        {
                            src: 'images/course02.png',
                            title: 'Android 网络动态图片加载实战',
                            num: 357
                        },
                        {
                            src: 'images/course03.png',
                            title: 'Angular2 大前端商城实战项目演练',
                            num: 22250
                        },
                        {
                            src: 'images/course04.png',
                            title: 'Android APP 实战项目演练',
                            num: 389
                        },
                        {
                            src: 'images/course05.png',
                            title: 'UGUI 源码深度分析案例',
                            num: 124
                        },
                        {
                            src: 'images/course06.png',
                            title: 'Kami2首页界面切换效果实战演练',
                            num: 432
                        },
                        {
                            src: 'images/course07.png',
                            title: 'UNITY 从入门到精通实战案例',
                            num: 888
                        },
                        {
                            src: 'images/course08.png',
                            title: '我会变，你呢？',
                            num: 590
                        },
                        {
                            src: 'images/course08.png',
                            title: '我会变，你呢？',
                            num: 590
                        }
                    ]
                    // 根据数据的个数来渲染 到底有多少个小li 
                    // console.log(data.length)

                    for (let i = 0; i < data.length; i++) {
                        document.write(`
                        <li>
                                <img src="${data[i].src}">
                                <h4>${data[i].title}</h4>
                                <div class="info">
                                    <span>高级</span>  · <span>${data[i].num}</span>人在学习
                                </div>
                        </li>
                   `)
                    }

                </script>

            </ul>
        </div>
    </div>

</body>

</html>
```

## 十二、不同数据类型的存储方式

![image-20220814003555409](https://img.up.cdn.nahida.cn/typora-user-images/image-20220814003555409.png)
