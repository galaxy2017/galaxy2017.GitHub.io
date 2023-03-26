---
title: WEB APIs ( JS  BOM )
sidebar_position: 3
---

# WEB APIs ( BOM )

## 一、BOM- 操作浏览器

### 1.1 Window对象

BOM(Browser Object Model ) 是浏览器对象模型。

#### 1.1.1 BOM(浏览器对象模型)

![image-20220815223840236](https://img.up.cdn.nahida.cn/typora-user-images/image-20220815223840236.png)

#### 1.1.2 定时器-延时函数

JavaScript 内置的一个用来让代码延迟执行的函数，叫 setTimeout

语法：`setTimeout(回调函数,等待毫秒数)`

 **setTimeout 仅仅只执行一次，所以可以理解为就是把一段代码延迟执行, *平时省略window***

 清除延时函数：

```
let timer = setTimeout(回调函数,等待的毫秒数)
clearTimeout(timer);
```

**案例：5秒钟之后消失的广告**

​ 需求：5秒钟之后，广告自动消失

​   分析：

​     ①：设置延时函数

​     ②：隐藏元素

```
<body>
    <img src="./images/ad.png" alt="">
    <script>
        let img = document.querySelector('img');
        setTimeout(function () {
            img.style.display = 'none';
        },5000)
    </script>
</body>
```

**结合递归函数可以使用 setTimeout 实现 setInterval 一样的功能**

```
let clock = document.querySelector(.colck)
function myInterval(){
 let d = new Date();
 clock.innerText = d.toLocaleString();  //事件格式化为   YYYY/M/D  上午or下午 h:m:s
 setTimeout(myInterval,1000);             //递归函数，自己调用自己
            //（递归函数容易进入死递归，所以部分函数需要添加退出函数）
}
myInterval();
```

**两种定时器对比：**

 setInterval 的特征是重复执行，首次执行会延时

 setTimeout 的特征是延时执行，只执行 1 次

 setTimeout 结合递归函数，能模拟 setInterval 重复执行

 clearTimeout 清除由 setTimeout 创建的定时任务

#### 1.1.3 JS执行机制

经典面试题

```
console.log(1111)
setTime(function(){
 console.log(2222)
},1000)
console.log(3333)

//输出结果：111133332222
```

```
console.log(1111)
setTime(function(){
 console.log(2222)
},0)
console.log(3333)

//输出结果：111133332222
```

**JS 是单线程**

JavaScript 语言的一大特点就是**单线程**，也就是说，**同一个时间只能做一件事**。这是因为 Javascript 这 门脚本语言诞生的使命所致——JavaScript 是为处理页面中用户的交互，以及操作 DOM 而诞生的。比 如我们对某个 DOM 元素进行添加和删除操作，不能同时进行。 应该先进行添加，之后再删除。

单线程就意味着，所有任务需要排队，前一个任务结束，才会执行后一个任务。这样所导致的问 题是： 如果 JS 执行的时间过长，这样就会造成页面的渲染不连贯，导致页面渲染加载阻塞的感觉。

##### 同步和异步

**同步** 前一个任务结束后再执行后一个任务，程序的执行顺序与任务的排列顺序是一致的、同步的。比如做饭的同步 做法：我们要烧水煮饭，等水开了（10分钟之后），再去切菜，炒菜。 **异步** 你在做一件事情时，因为这件事情会花费很长时间，在做这件事的同时，你还可以去处理其他事 情。比如做饭的异步做法，我们在烧水的同时，利用这10分钟，去切菜，炒菜。

​ **同步任务**

​  同步任务都在**主线程**上执行，形成一个执行栈。

![image-20220816085619749](https://img.up.cdn.nahida.cn/typora-user-images/image-20220816085619749.png)

​ **异步任务**

​  JS 的异步是通过回调函数实现的。

​  一般而言，异步任务有以下三种类型:

​      1、普通事件，如 click、resize 等

​      2、资源加载，如 load、error 等

​      3、定时器，包括 setInterval、setTimeout 等

​      异步任务相关添加到**任务队列**中（任务队列也称为消息队列）。

![image-20220816085633504](https://img.up.cdn.nahida.cn/typora-user-images/image-20220816085633504.png)

![image-20220816090036382](https://img.up.cdn.nahida.cn/typora-user-images/image-20220816090036382.png)

![image-20220816090139507](https://img.up.cdn.nahida.cn/typora-user-images/image-20220816090139507.png)

#### 1.1.4 location对象

location 的数据类型是对象，它拆分并保存了 **URL 地址**的各个组成部分.

 **常用属性和方法：**

​  `href` 属性获取完整的 URL 地址，对其赋值时用于地址的跳转

​  `search` 属性获取地址中携带的参数，符号 ？后面部分 （数值）

​  `hash` 属性获取地址中的啥希值，符号 # 后面部分

​  `reload` 方法用来刷新当前页面，传入参数 true 时表示强制刷新

​  `hash` 属性获取地址中的哈希值，符号 # 后面部分

```
<body>
    <script>
        console.log(location.href)  // 得到 url地址   可读写
        // 给的地址是字符串  可以利用js 的方式跳转页面
        location.href = 'http://www.luomoe.com';
    </script>
</body>
```

**案例：5秒钟之后跳转的页面**

需求：用户点击可以跳转，如果不点击，则5秒之后自动跳转，要求里面有秒数倒计时

分析： ①：目标元素是链接 ②：利用定时器设置数字倒计时 ③：时间到了，自动跳转到新的页面

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        span {
            color: red;
        }
    </style>
</head>

<body>
    <a href="https://www.luomoe.com/">支付成功，<span>5</span> 秒之后跳转首页</a>
    <script>

        let span = document.querySelector('span');
        let num = 5;
        let timer = setInterval(fn,1000);

        function fn() {
            num--;
            span.innerHTML = num;
            if (num === 0){

                location.href = 'https://www.luomoe.com/';
                clearInterval(timer);
            }
        }
    </script>
</body>

</html>
```

location.href：网页链接，对其赋值时，可以用于地址的跳转

location.search：得到符号 ？后面部分，可以用于数据传递

location.hash：得到符号 # 后面部分，地址路由的使用

```
console.log(location.hash)
```

​  后期vue路由的铺垫，经常用于不刷新页面，显示不同页面，比如 网易云音乐

location.reload：传入参数 true 时表示强制刷新

```
reload(true);   //刷新 本地缓存  F5
location.reload(true)//强制刷新 直接从服务器获取 CTRL + F5
```

#### 1.1.5 navigator对象

navigator的数据类型是对象，该对象下记录了浏览器自身的相关信息

**常用属性和方法：**

```javascript
// 检测 userAgent（浏览器信息）
!(function () {
const userAgent = navigator.userAgent
// 验证是否为Android或iPhone
const android = userAgent.match(/(Android);?[\s\/]+([\d.]+)?/)
const iphone = userAgent.match(/(iPhone\sOS)\s([\d_]+)/)
// 如果是Android或iPhone，则跳转至移动站点
if (android || iphone) {
location.href = 'http://m.itcast.cn'
}
})()
```

#### 1.1.5 histroy对象

history 的数据类型是对象，**该对象与浏览器地址栏的操作相对应**，如前进、后退、历史记录等

![image-20220816094554651](https://img.up.cdn.nahida.cn/typora-user-images/image-20220816094554651.png)

```html
<body>
    <button class="forward">前进</button>
    <button class="back">后退</button>
    <script>
        let qianjin = document.querySelector('.forward')
        let houtui = document.querySelector('.back')
        qianjin.addEventListener('click', function () {
            // history.forward()
            history.go(1)
        })
        houtui.addEventListener('click', function () {
            // history.back()
            history.go(-1)
        })
    </script>
</body>
```

### 1.2 swiper 插件

插件: 就是别人写好的一些代码,我们只需要复制对应的代码,就可以直接实现对应的效果

 学习插件的基本过程

 熟悉官网,了解这个插件可以完成什么需求 <https://www.swiper.com.cn/>

 看在线演示,找到符合自己需求的demo <https://www.swiper.com.cn/demo/index.html>

 查看基本使用流程 <https://www.swiper.com.cn/usage/index.html>

 查看APi文档,去配置自己的插件 <https://www.swiper.com.cn/api/index.html>

 注意: 多个swiper同时使用的时候, 类名需要注意区分

### 1.3 本地存储

随着互联网的快速发展，基于网页的应用越来越普遍，同时也变的越来越复杂，为了满足各种各样的需求，会经常性在 本地存储大量的数据，HTML5规范提出了相关解决方案。

1、数据存储在用户浏览器中

2、设置、读取方便、甚至页面刷新不丢失数据

3、容量较大，sessionStorage和localStorage约 5M 左右

#### 1.3.1 localStorage

1、生命周期永久生效，除非手动删除 否则关闭页面也会存在

2、可以多窗口（页面）共享（同一浏览器可以共享）

3、以键值对的形式存储使用

**存储数据：**

```
localStorage.setItem(key, value)
```

**获取数据：**

```
localStorage.getItem(key)
```

删除数据：

```
localStorage.removeItem(key)
```

**存储复杂数据类型存储**

本地只能存储字符串,无法存储复杂数据类型.需要将复杂数据类型转换成JSON字符串,在存储到本地

##### **JSON.stringify(复杂数据类型)**

**设置**的对象，复杂数据类型：

```javascript
let OBJ = [
  {uname: '刘德华',age: 17,address: '黑马程序员'},
  {uname: '刘德华',age: 17,address: '黑马程序员'},
  {uname: '刘德华',age: 17,address: '黑马程序员'}
  ],
```

- 将复杂数据转换成JSON字符串     **存储**    本地存储中

  `JSON.stringify(对象)  //将对象转为  JSON格式的值`

```javascript
localStorge.setItem(obj,JSON.stringify(OBJ)) ;                //obj是key值，OBJ是要转换存储的对象
           //JSON.stringify(OBJ) 是value值
```

- 将JSON字符串转换成对象    **取出**    时候使用

`localStorge.getItem('obj')   //是取出本地存储的JSON数据，obj是key值`

`JSON.parse(  localStorge.getItem('obj')  )         //是将取出的JSON数据转换为对象`

```javascript
let arr = JSON.parse(localStorge.getItem('obj'))  ;             ////obj是key值
     //如果原先的存入的对象是数组，现在取出获得的数据经过转换之后得到的arr也是数组
```

案例

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <script>
        // 存储数据 localStorage.setItem('键', '值')
        // localStorage.setItem('uname', 'pink老师')
        // localStorage.setItem('age', 18)
        // 获取数据
        // localStorage.getItem('键')
        // console.log(localStorage.getItem('uname'))
        // 删除数据
        // localStorage.removeItem('uname')
        // 1. 存储复杂数据类型（引用数据类型）
        let obj = {
            uname: '刘德华',
            age: 17,
            address: '黑马程序员'
        }
        // console.log(JSON.stringify(obj))
        //（1） 复杂数据类型一定要转换为json字符串在进行存储 （因为本地存储只能存储字符串）
        localStorage.setItem('obj', JSON.stringify(obj))
        // AJAX
        // JSON 属性和值都是双引号进行包含
        // let obj = {
        //     "uname": "刘德华",
        //     "age": "17",
        //     "address": "黑马程序员"
        // }
        // （2） 取数据  可以使用 JSON.parse()  将json字符串转换为对象
        // console.log(typeof localStorage.getItem('obj'))    //字符串
        //  JSON.parse() 将json字符串转换为对象
        console.log(JSON.parse(localStorage.getItem('obj')));

        let object = {
            age: 18
        }

        // 本地存储只能存储字符串 所以我要转换  转换为JSON格式的字符串
        localStorage.setItem('key', JSON.stringify(object))
        // 获取的过来的值是字符串，不是对象了没有办法直接使用，因此我们首先吧字符串转换为对象
        // JSON.parse()
        console.log(JSON.parse(localStorage.getItem('key')))

    </script>
</body>

</html>
```

#### 1.3.2 **sessionStorage（了解）**

1、生命周期为关闭浏览器窗口

2、在同一个窗口(页面)下数据可以共享

3、以键值对的形式存储使用

4、用法跟localStorage 基本相同

#### 1.3.3 本地存储学习信息案例

##### 需求：改为本次存储版本的学习信息表

需求①：读取本地存储数据（封装函数） 如果本地存储有数据，则返回 JSON.parse() 之后的对象 如果本地存储没有数据，则默认写入三条数据，注意存储的利用JSON.stringify() 存 储JSON 格式的数据

需求②：渲染模块 先读取本地存储数据，然后渲染

需求③：添加模块 注意，先取的最新的本地存储数据，然后追加 新增了数据，**要把新数据存储到本地存储别忘记转换**

需求④：删除模块 注意，先取的最新的本地存储数据，然后追加 新增了数据，**要把新数据存储到本地存储别忘记转换**

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
  <link rel="stylesheet" href="css/user.css">
</head>

<body>
  <h1>新增学员</h1>
  <div class="info">
    姓名：<input type="text" class="uname">
    年龄：<input type="text" class="age">
    性别: <select name="gender" id="" class="gender">
      <option value="男">男</option>
      <option value="女">女</option>
    </select>
    薪资：<input type="text" class="salary">
    就业城市：<select name="city" id="" class="city">
      <option value="北京">北京</option>
      <option value="上海">上海</option>
      <option value="广州">广州</option>
      <option value="深圳">深圳</option>
      <option value="曹县">曹县</option>

    </select>
    <button class="add">录入</button>
  </div>

  <h1>就业榜</h1>
  <table>
    <thead>
      <tr>
        <th>学号</th>
        <th>姓名</th>
        <th>年龄</th>
        <th>性别</th>
        <th>薪资</th>
        <th>就业城市</th>
        <th>操作</th>
      </tr>
    </thead>
    <tbody>
      <!-- <tr>
        <td>1001</td>
        <td>欧阳霸天</td>
        <td>19</td>
        <td>男</td>

        <td>15000</td>
        <td>上海</td>
        <td>
          <a href="javascript:">删除</a>
        </td>
      </tr> -->
    </tbody>
  </table>
  <script>

    // 读取本地存储的数据  封装为函数 
    // 需求①：读取本地存储数据（封装函数）
    //   如果本地存储有数据，则返回 JSON.parse() 之后的对象
    //   如果本地存储没有数据，则默认写入三条数据，注意存储的利用JSON.stringify() 存 储JSON 格式的数据
    function getLocalData() {
      let data = localStorage.getItem('data')
      if (data) {
        //   如果本地存储有数据，则返回 JSON.parse() 之后的对象
        return JSON.parse(data)  //   {xxxxx}
      } else {
        // 如果本地存储没有数据，则默认写入三条数据，注意存储的利用JSON.stringify() 存 储JSON 格式的数据
        let arr = [
          { stuId: 1001, uname: '欧阳霸天', age: 19, gender: '男', salary: '20000', city: '上海' },
          { stuId: 1002, uname: '令狐霸天', age: 29, gender: '男', salary: '30000', city: '北京' },
          { stuId: 1003, uname: '诸葛霸天', age: 39, gender: '男', salary: '2000', city: '北京' },
        ]
        // 写入到本地存储里面
        localStorage.setItem('data', JSON.stringify(arr))
      }
    }
    // 先调用一次
    getLocalData()
    // 获取父元素 tbody
    let tbody = document.querySelector('tbody')
    // 添加数据按钮 
    // 获取录入按钮
    let add = document.querySelector('.add')
    // 获取各个表单的元素
    let uname = document.querySelector('.uname')
    let age = document.querySelector('.age')
    let gender = document.querySelector('.gender')
    let salary = document.querySelector('.salary')
    let city = document.querySelector('.city')
    // 渲染函数  把数组里面的数据渲染到页面中
    function render() {
      // 需求②：渲染模块
      // 先读取本地存储数据，然后渲染
      let arr = getLocalData()

      // 先干掉以前的数据  让tbody 里面原来的tr 都没有
      tbody.innerHTML = ''
      // 在渲染新的数据
      // 根据数据的条数来渲染增加 tr  
      for (let i = 0; i < arr.length; i++) {
        // 1.创建tr  
        let tr = document.createElement('tr')
        // 2.tr 里面放内容
        tr.innerHTML = `
        <td>${arr[i].stuId}</td>
        <td>${arr[i].uname}</td>
        <td>${arr[i].age}</td>
        <td>${arr[i].gender}</td>
        <td>${arr[i].salary}</td>
        <td>${arr[i].city}</td>
        <td>
          <a href="javascript:"  data-id="${i}">删除</a>
        </td>
        `
        // 3.把tr追加给 tobdy  父元素.appendChild(子元素)
        tbody.appendChild(tr)


      }
    }
    // 页面加载就调用函数
    render()

    add.addEventListener('click', function () {
      // 需求③：添加模块
      // 注意，先取的最新的本地存储数据，然后追加
      let arr = getLocalData()
      // 新增了数据，要把新数据存储到本地存储别，忘记转换


      // alert(11)
      // 获得表单里面的值   之后追加给 数组 arr  用 push方法
      arr.push({
        // 得到数组最后一条数据的学号 1003    + 1
        stuId: arr[arr.length - 1].stuId + 1,
        uname: uname.value,
        age: age.value,
        gender: gender.value,
        salary: salary.value,
        city: city.value
      })
      // console.log(arr)

      // 存储到仓库里面 
      localStorage.setItem('data', JSON.stringify(arr))

      // 重新渲染我们的函数
      render()
      // 复原所有的表单数据
      uname.value = age.value = salary.value = ''
      gender.value = '男'
      city.value = '北京'
    })


    // 删除操作， 删除的也是数组里面的数据 ， 但是我们用事件委托
    tbody.addEventListener('click', function (e) {
      // 读取本地存储里面的数据
      let arr = getLocalData()
      // alert(11)
      // 我们只能点击了链接 a ，才会执行删除操作
      // 那我们怎么知道你点击了a呢？
      // 俺们只能点击了链接才能做删除操作
      // console.dir(e.target.tagName)
      if (e.target.tagName === 'A') {
        // alert('你点击了链接')
        // 删除操作  删除 数组里面的数据  arr.splice(从哪里开始删，1)
        // 我要得到a的id 需要
        // console.log(e.target.id)
        //console.log(e.target.dataset.id)
        
        //不允许删除第一条数据
        if (e.target.dataset.id === '0'){
          alert('该数据不允许删除');
          return;
        }
        arr.splice(e.target.dataset.id, 1)

        // 存到本地里面
        localStorage.setItem('data', JSON.stringify(arr))

        // 重新渲染我们的函数
        render()
      }
    })
  </script>
</body>

</html>
```

### 1.4 拓展： 自定义属性

**固有属性:**

​ 标签天生自带的属性 比如class id title等, 可以直接使用点语法操作

**自定义属性:**

​ 由程序员自己添加的属性,在DOM对象中找不到, 无法使用点语法操作,必须使用专门的API

```javascript
 let box.document.querySelector(.box);
 
 getAttribute('属性名') // 获取自定义属性
 
 setAttribute('属性名', '属性值') // 设置自定义属性
    
 removeAttribute('属性名') // 删除自定义属性
 
 //举例
 let box.document.querySelector(.box);
 box.setAttribute('myID', '1001');
    box.getAttribute('myID');
    box.removeAttribute('myID');

```

**data-自定义属性:**

​  传统的自定义属性没有专门的定义规则,开发者随意定值,不够规范,所以在html5中推出来了专门的`data-自定义属性`

​  在 标签上一律以`data-`开头

​  在DOM对象上一律以**`dataset`**对象方式获取

```javascript
<div class="box" data-id="10"></div>
<sccipt>
 let box.document.querySelector(.box);
 consloe.log(box.dataset.id)    // 10
</script>
```

## 二、正则表达式

正则表达式（Regular Expression）是用于匹配字符串中字符组合的模式。在 JavaScript中，正则表达式也是对象。

通常用来查找、替换那些符合正则表达式的文本，许多语言都支持正则表达式。

**正则表达式在 JavaScript中的使用场景：**

​  例如验证表单：用户名表单只能输入英文字母、数字或者下划线， 昵称输入框中可以输入中文(**匹配**)

​  比如用户名: /^[a-z0-9_-]{3,16}$/

​  过滤掉页面内容中的一些敏感词(替换)，或从字符串中获取我们想要的特定部分(提取)等 。

### 2.1 语法

**正则语法分为两步： 1. 定义规则      2. 查找**

JavaScript 中定义正则表达式的语法有两种，我们先学习其中比较简单的方法：

1. 定义正则表达式语法：

```javascript
let 变量名 = /表达式/  ;             //例子： let reg = /前端/
```

​    其中 / / 是正则表达式字面量

2. 判断是否有符合规则的字符串：

​ `test()` 方法 用来查看正则表达式与指定的字符串是否匹配

```javascript
//regObj.test(被检测的字符串);

//例子：
let str = '我要学前端，月薪过万'
let reg = /前端/  ;
let re = reg.test(str);
console.log(re);    //true
```

**如果正则表达式与指定的字符串匹配 ，返回true，否则false**  **（返回布尔值）**

3. 检索（查找）符合规则的字符串

   `exec()` 方法 在一个指定字符串中执行一个搜索匹配

```
//regObj.exec(被检测的字符串);

//例子：
let str = '我要学前端，月薪过万'
let reg = /前端/  ;
let re = reg.exec(str);
console.log(re);    //返回的是一个数组
```

**如果匹配成功，exec() 方法返回一个数组，否则返回null**

### 2.2 元字符

大多数的字符仅能够描述它们本身，这些字符称作普通字符，例如所有的字母和数字。

**元字符(特殊字符）：**

​   是一些具有特殊含义的字符，可以极大提高了灵活性和强大的匹配功能。

​     1. 比如，规定用户只能输入英文26个英文字母，普通字符的话 abcdefghijklm…..

​     2.  但是换成元字符写法： [a-z]

参考文档：

​  MDN：<https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Regular_Expressions>

​  正则测试工具: <http://tool.oschina.net/regex>

为了方便记忆和学习，我们对众多的元字符进行了分类：

   1. **边界符**（表示位置，开头和结尾，必须用什么开头，用什么结尾） 
   2. **量词** （表示重复次数）
   3. **字符类** （比如 \d 表示 0~9）

### 2.3 边界符

正则表达式中的边界符（位置符）**用来提示字符所处的位置**，主要有两个字符

![image-20220816144859188](https://img.up.cdn.nahida.cn/typora-user-images/image-20220816144859188.png)

**如果 ^ 和 $ 在一起，表示必须是精确匹配，只匹配单个字符**

```javascript
    <script>
        // console.log(/哈/.test('哈哈'))
        // console.log(/哈/.test('二哈'))
        // ^ 开头
        console.log(/^哈/.test('二哈'))  // false 
        console.log(/^哈/.test('我开心的哈哈大笑'))  // false
        // $结尾
        //以 哈开头   以 哈 结尾
        console.log(/^哈$/.test('我开心的哈哈大笑'))  // false 
        console.log(/^哈$/.test('哈哈'))  // false 
        console.log(/^哈$/.test('哈'))  // true  精确匹配

    </script>

```

### 2.4 量词

量词用来 设定某个模式出现的次数。

![image-20220816145544801](https://img.up.cdn.nahida.cn/typora-user-images/image-20220816145544801.png)

**逗号左右两侧千万不要出现空格**

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <script>
        // console.log(/a/.test('a'))
        // // * 量词 n >= 0 
        // console.log(/a*/.test(''))         //true
        // console.log(/a*/.test('a'))        //true
        // console.log(/a*/.test('aa'))
        // console.log(/a*/.test('aaaaaaaa'))
        // console.log(/a*/.test('b'))         //true

        // console.log('--------------------------')

        // // + 量词 n >= 1
        // console.log(/a+/.test(''))           //false
        // console.log(/a+/.test('a'))          //true
        // console.log(/a+/.test('aa'))         //true
        // console.log(/a+/.test('aaaaaaaa'))       //true
        // console.log(/a+/.test('b'))          //false
        // console.log('--------------------------')
        // // ? 出现 0次 或者 1次
        // console.log(/^a?$/.test(''))    //true
        // console.log(/^a?$/.test('a'))   //true
        // console.log(/^a?$/.test('aa'))  //false

        // {n}   只能出现 n次   符号之间不要加空格
        console.log(/^a{3}$/.test('aa'))    //false
        console.log(/^a{3}$/.test('aaa'))   //true
        console.log(/^a{3}$/.test('aaaa'))  //false

        // {n,}   >= n 
        console.log(/^a{3,}$/.test('aa'))    //false
        console.log(/^a{3,}$/.test('aaa'))   //true
        console.log(/^a{3,}$/.test('aaaa'))  //true
        console.log('--------------------------')
        // {n,m}   >= n  <= m 
        console.log(/^a{3,6}$/.test('aa'))     //false
        console.log(/^a{3,6}$/.test('aaa'))    //true
        console.log(/^a{3,6}$/.test('aaaa'))    //true
        console.log(/^a{3,6}$/.test('aaaaa'))     //true
        console.log(/^a{3,6}$/.test('aaaaaaaa'))    //false
    </script>
</body>

</html>
```

### 2.5 字符类

 `[]` 匹配字符集合，后面的字符串只要包含 abc 中任意一个字符，都返回 true

#### 2.5.1  连字符 -

 `[ ]` 里面加上 `-` 连字符，使用连字符 - 表示一个范围

```javascript
console.log(/^[a-z]$/.test('c'))
```

- [a-z] 表示 a 到 z 26个英文字母都可以
- [a-zA-Z] 表示大小写都可以
- [0-9] 表示 0~9 的数字都可以

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <script>
        // console.log(/abc/.test('abc'))       //true
        // console.log(/abc/.test('ab'))        //false
        // 字符类 []
        // console.log(/[abc]/.test('abc'))         //true
        // console.log(/[abc]/.test(''))            //false
        // console.log(/[abc]/.test('andy'))        //true
        // console.log(/[abc]/.test('baby'))        //true
        // console.log(/[abc]/.test('cry'))         //true
        // console.log(/[abc]/.test('die'))         //false

        // 字符类 [-] 连字符
        console.log(/^[abc]$/.test('abc'))      //false
        console.log(/^[abc]$/.test('a'))        //true
        console.log(/^[abc]$/.test('b'))        //true
        console.log(/^[abc]$/.test('c'))        //true
        console.log(/^[abc]$/.test('cc'))       //false

        // 26个英文字母选其中的一个
        console.log(/^[a-zA-Z]$/.test('d'))         //true
        console.log(/^[a-zA-Z]$/.test('D'))         //true
        console.log(/^[a-zA-Z]$/.test('DD'))        //false
        console.log(/^[a-zA-Z0-9]$/.test('6'))      //true
        console.log(/^[a-zA-Z0-9-_]$/.test('6'))    //true   匹配识别，字母大小写和下划线，  ^ $ 多选一

        console.log(/^abc+$/.test('cc'))


    </script>
</body>

</html>
```

案例：用户名验证案例

需求：用户名要求用户英文字母,数字,下划线或者短横线组成，并且用户名长度为 6~16位

分析：

​ ①：首先准备好这种正则表达式模式 /^[a-zA-Z0-9-_]{6,16}$/

​ ②：当表单失去焦点就开始验证.

​ ③：如果符合正则规范, 则让后面的span标签添加 right 类.

​ ④：如果不符合正则规范, 则让后面的span标签添加 wrong 类

```html
<body>
    <input type="text">
    <span></span>
    <script>
        let input = document.querySelector('input');
        let span = input.nextElementSibling;
        input.addEventListener('blur',function () {
            if (/^[a-zA-Z0-9-_]{6,16}$/.test(input.value)){
                span.className = 'right';
                span.innerHTML = '输出正确';
            }else {
                span.className = 'error';
                span.innerHTML = '只能输入6-16位字符'
            }
        })
    </script>
</body>
```

#### 2.5.2 取反符号 ^

 `[ ]` 里面加上 `^` 取反符号  ， `.` 匹配除换行符之外的任何单个字符

比如：

- `[^a-z]` 匹配除了小写字母以外的字符

- 注意要写到中括号里面

![image-20220816154615831](https://img.up.cdn.nahida.cn/typora-user-images/image-20220816154615831.png)

```
^\d{4}-\d{1,2}-d{1,2}       //日期格式  YYYYMMDD
```

### 2.6 修饰符

修饰符约束正则执行的某些细节行为，如是否区分大小写、是否支持多行匹配等

```html
  /表达式/修饰符
```

`i` 是单词 ignore 的缩写，正则匹配时字母不区分大小写

`g` 是单词 global 的缩写，**匹配所有满足正则表达式**的结果

```javascript
console.log(/a/i.test('a'))     //true
console.log(/a/i.test('A'))     //true    i正则匹配时字母不区分大小写
```

替换 replace 替换

```javascript
字符串.replace(/正则表达式/,'替换文本')

```

```html
<body>
    <textarea name="" id="" cols="30" rows="10"></textarea>
    <button>发布</button>
    <div></div>
    <script>
        let btn = document.querySelector('button');
        let textarea = document.querySelector('textarea');
        let div = document.querySelector('div');

        btn.addEventListener('click',function () {
            div.innerHTML = textarea.value.replace(/草/g,'口');
        })
    </script>
</body>
```

### 综合案例

小兔鲜页面注册、小兔鲜登录页面、小兔鲜首页页面

## 三、补充

#### change 事件

当表单里面的值发生变化的时候触发，和 blur 不一样

`blur` 事件，blur事件类型表示在元素失去焦点时响应（点击输入框后，离开 时候触发）

 `input` 事件  只要输入就会触发
         `change` 事件 是 离开表单时候才触发  并且值有变化

```html
<body>
    <input type="text">
    <input type="password">
    <script>
        let input = document.querySelector('input')
        // 当表单里面的值发生变化的时候触发，和 blur 不一样 
        // input 事件  只要输入就会触发
        // change 事件 是 离开表单时候才触发  并且值有变化
        input.addEventListener('change', function () {
            console.log(111)
        })
    </script>
</body>
```
