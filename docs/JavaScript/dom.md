---
title: WEB APIs ( JS  DOM )
sidebar_position: 2
---
# WEB APIs ( JS  DOM )

## 一、DOM

DOM（文本对象模型）：用来呈现以及任意HTML或XML文档交互的API，实现用户交互

BOM（浏览器对象模型）

作用：就是通过JS取操作HTML和浏览器

DOM树：将HTML文档以树状结构直观的表现出来。

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
    <button>点击</button>
<script>
    let btn = document.querySelector('button');
    console.dir(btn)   //console.dir()   打印对象
    btn.innerHTML = '唐伯虎';
</script>

</body>
</html>
```

**document对象：**

- DOM里提供的对象

- 所以它提供的属性和方法都是**用来访问和操作网页内容的**

### 1.1 获取元素

**根据CSS选择器来获取DOM元素（重点）**

**匹配单个元素**

语法：`document.querySelector('css选择器')`

参数：包含一个或多个有效的CSS选择器 **字符串**

返回值：CSS选择器匹配的第一个元素,一个 HTMLElement对象。如果没有匹配到，则返回null

**选择匹配的多个元素**

语法：`querySelectorAll('css选择器')`

参数：包含一个或多个有效的CSS选择器 **字符串**

返回值：CSS选择器匹配的NodeList 对象集合（伪数组）

得到得一个伪数组：

1. 有长度有索引号的数组
2. 但是没有 pop() push() 等数组方法

想要得到里面的每一个对象，则需要遍历（for）的方式获得。

注意：只要通过`querySelectorAll` 获得的数值，得到的都是数组。

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
  <ul class="nav">
    <li>我的首页</li>
    <li>产品介绍</li>
    <li>联系方式</li>
  </ul>
  <script>
    let lis = document.querySelectorAll('ul.nav li');
    for (let i = 0; i < lis.length; i++) {
      console.log(lis[i]);
    }
  </script>
</body>
</html>
```

其他获取DOM元素方法（了解）

```html
//根据id获取一个元素
document.getElementById('nav');

//根据 标签获取一个元素
document.getElementsByTagName('div');
//根据 类名中包含w的类名的元素
document.getElementsByClassName('w')
```

### 1.2 修改元素内容及案例

1. document.write() 方法

   - 只能将文本内容追加到` </body> `前面的位置

   - 文本中包含的标签会被解析

2. 对象.innerText 属性

   - 将文本内容添加/更新到任意标签位置

   - 文本中包含的标签不会被解析。**不识别标签**

     ```html
     <!DOCTYPE html>
     <html lang="en">
     <head>
         <meta charset="UTF-8">
         <title>Title</title>
         <style>
           div{
             width: 200px;
             height: 200px;
             background-color: #66ccff;
           }
         </style>
     </head>
     <body>
       <div>
         蓝色的记忆
       </div>
     
     <script>
         let box = document.querySelector('div');
         box.innerText = '66ccff';
     </script>
     
     </body>
     </html>
     ```

3. 对象.innerHTML 属性

   - 将文本内容添加/更新到任意标签位置
   - 文本中包含的标签会被解析

   ```html
   <!DOCTYPE html>
   <html lang="en">
   <head>
       <meta charset="UTF-8">
       <title>Title</title>
       <style>
         div{
           width: 200px;
           height: 200px;
           background-color: #66ccff;
         }
       </style>
   </head>
   <body>
     <div>
       蓝色的记忆
     </div>
   
   <script>
       let box = document.querySelector('div');
       box.innerText = '66ccff';
       box.innerHTML = '<strong>66ccff</strong><br>我是张三';
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
    <style>
      div {
        display: inline-block;
        width: 150px;
        height: 30px;
        border: 1px solid pink;
        vertical-align: middle;
        text-align: center;
        line-height: 30px;
        /* margin: 300px; */
      }
    </style>
</head>
<body>
抽取选手：<div></div>
<script>
  let box = document.querySelector('div');
  function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }
  let arr = ['nahida','barbatos','Morax','Beelzebul'];
  let random = getRandom(0, arr.length - 1);
  box.innerHTML = arr[random];
  arr.splice(random,1);
</script>

</body>
</html>
```

### 1.3 修改元素属性及案例

1. 设置/修改元素**常用**属性

   语法：`对象.属性 = 值`

   - 还可以通过 JS 设置/修改标签元素属性，比如通过 src更换 图片
   - 最常见的属性比如： href、title、src 等

   ```html
   <!DOCTYPE html>
   <html lang="en">
   <head>
       <meta charset="UTF-8">
       <title>Title</title>
   </head>
   <body>
   <img src="./images/1.webp">
       <script>
         //1. 获取元素
         let pic = document.querySelector('img');
         pic.src = "./images/2.webp";
         pic.title = '刘德华';
       </script>
   </body>
   </html>
   ```

   刷新页面，图片随机更新

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <style>
      img{
        width: 500px;
        height: 300px;
      }
    </style>
</head>
<body>
<img src="./images/1.webp" alt="">
    <script>
      // 获取元素
      let pic = document.querySelector('img');
      //随机
      function getRandom(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min
      }
      let random = getRandom(1,6);
      pic.src = `./images/${random}.webp`
    </script>
</body>
</html>
```

2. 设置/修改元素**样式**属性

   还可以通过 JS 设置/修改标签元素的样式属性。

   - 比如通过 轮播图小圆点自动更换颜色样式
   - 点击按钮可以滚动图片，这是移动的图片的位置 left 等等

   路径：

   - [ ] 通过 style 属性操作CSS
   - [ ] 操作类名(className) 操作CSS
   - [ ] 通过 classList 操作类控制CSS

   语法：`对象.style.样式属性 = 值`

   ```html
   <!DOCTYPE html>
   <html lang="en">
   <head>
       <meta charset="UTF-8">
       <title>Title</title>
       <style>
         div{
           width: 500px;
           height: 300px;
           background-color: pink;
         }
       </style>
   </head>
   <body>
   <div></div>
   <script>
     let box = document.querySelector('div');
     box.style.width = '700px';
     box.style.height = '200px';
     box.style.backgroundColor = '#66ccff';
   </script>
   </body>
   </html>
   ```

   注意：

    \1. 修改样式通过style属性引出
    
    \2. 如果属性有-连接符，需要转换为小驼峰命名法
    
    \3. 赋值的时候，需要的时候不要忘记加css单位

   ```html
   <!DOCTYPE html>
   <html lang="en">
   <head>
       <meta charset="UTF-8">
       <title>Title</title>
       <style>
         body{
           background-image: url("./images/desktop_1.jpg");
         }
       </style>
   </head>
   <body>
   <div></div>
   <script>
     let box = document.querySelector('body');
     function getRandom(min, max) {
       return Math.floor(Math.random() * (max - min + 1)) + min
     }
     let random = getRandom(1,10);
     box.style.backgroundImage = `url("./images/desktop_${random}.jpg")`;
   
   </script>
   </body>
   </html>
   ```

### 1.4 修改元素样式 - className和classList

#### 1.4.1 操作类名(className) 操作CSS

如果修改的样式比较多，直接通过style属性修改比较繁琐，我们可以通过借助于css类名的形式。

语法 ： `元素.className = 新值;`

注意：

 \1. 由于class是关键字, 所以使用className去代替
 
 \2. className是使用新值换旧值, 如果需要添加一个类,需要保留之前的类名

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <style>
      div {
        width: 200px;
        height: 200px;
        background-color: pink;
      }
      .active{
        width: 300px;
        height: 300px;
        background-color: #66ccff;
      }
    </style>

</head>
<body>
  <div class="one"></div>
  <script>
    let box = document.querySelector('div');
    box.className = 'active'      //换一个类名
    box.className = 'one active'  //保留旧的类名one ，新增加一个类名active
  </script>
</body>
</html>
```

#### 1.4.2 通过 classList 操作类控制CSS

为了解决className 容易覆盖以前的类名，我们可以通过classList方式追加和删除类名。

 语法：

```
元素.classList.add('类名');    //追加一个类
元素.classList.remove('类名');  //删除一个类
元素.classList.toggle('类名');  //切换一个类。如果有类就切换成另外一个类；没有这个类就新增加一个类
```

```java
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <style>
      div {
        width: 200px;
        height: 200px;
        background-color: pink;
      }
      .active{
        width: 300px;
        height: 300px;
        background-color: #66ccff;
      }
      .
    </style>

</head>
<body>
  <div class="one"></div>
  <script>
    let box = document.querySelector('div');
    box.className = 'active'      //换一个类名
    box.className = 'one active'  //保留旧的类名one ，新增加一个类名active

    box.classList.add('active');
    box.classList.remove('one');
    box.classList.toggle('one');    ////切换一个类。如果有one类就切换成one个类；没有one类就新增加one类

  </script>
</body>
</html>
```

### 1.5 修改表单属性

表单很多情况，也需要修改属性，比如点击眼睛，可以看到密码，本质是把表单类型转换为文本框

正常的有属性有取值的 跟其他的标签属性没有任何区别

获取：`DOM对象.属性值`

设置：`DOM对象.属性值 = 新值`

表单属性中添加就有效果,移除就没有效果,一律使用布尔值表示 如果为true 代表添加了该属性 如果是false 代表移除了该属性。

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
  <input type="text" value="请输入">
  <button disabled>按钮</button>
  <input type="checkbox" checked class="agree">

  <script>
    let input = document.querySelector('input');
    input.value = '小米手机';
    input.type = 'password';
    let btn = document.querySelector('button');
    btn.disabled = true;   //true 是按钮禁用，false是可用
    let checkbox = document.querySelector('input.agree');
    checkbox.checked = false;  //true 是已选，false是未选

  </script>

</body>
</html>
```

### 1.6 定时器间歇函数

能够说出定时器函数在开发中的使用场景。每隔一段时间需要自动执行一段代码，不需要我们手动去触发。

定时器的基本使用

1. 开启定时器，间隔时间是毫秒：`setInterval(函数，间隔时间)`

   **注意：**

- 函数名字**不需要加括号**
- 定时器返回的是一个id数字

```javascript
setInterval(function () {
  console.log('暴富');
},1000)


function show(){
    console.log('月薪过万');
}


```

2. 关闭定时器

```
let 变量名 = setInterval(函数,间隔时间);
clearInterval(变量名)
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
  function fn () {
    console.log('暴富');
  }
  
  setInterval(fn,1000);  //启动定时器
  
  let time = setInterval(fn,1000)
  clearInterval(time);    //关闭定时器
</script>

</body>
</html>
```

案例倒计时效果

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <textarea name="" id="" cols="30" rows="10">
        用户注册协议
        欢迎注册成为京东用户！在您注册过程中，您需要完成我们的注册流程并通过点击同意的形式在线签署以下协议，请您务必仔细阅读、充分理解协议中的条款内容后再点击同意（尤其是以粗体或下划线标识的条款，因为这些条款可能会明确您应履行的义务或对您的权利有所限制）。
        【请您注意】如果您不同意以下协议全部或任何条款约定，请您停止注册。您停止注册后将仅可以浏览我们的商品信息但无法享受我们的产品或服务。如您按照注册流程提示填写信息，阅读并点击同意上述协议且完成全部注册流程后，即表示您已充分阅读、理解并接受协议的全部内容，并表明您同意我们可以依据协议内容来处理您的个人信息，并同意我们将您的订单信息共享给为完成此订单所必须的第三方合作方（详情查看
    </textarea>
    <br>
    <button class="btn" disabled>我已经阅读用户协议(6)</button>
<script>
    let btn = document.querySelector('button');
    let num = 6;
    let time = setInterval(function () {
        num--;
        btn.innerHTML = `我已经阅读用户协议(${num})`;
        if (num === 0){
            clearInterval(time);
            btn.innerHTML = `我已经阅读用户协议`;
            setAble();
        }
    },1000)

    function setAble (){
        btn.disabled = false;
    }

</script>

</body>

</html>
```

### 1.7 综合案例-焦点图

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>QQ音乐10屏轮播图</title>
    <style>
        .img-box {
            width: 700px;
            height: 320px;
            margin: 50px auto 0;
            background: #000;
            position: relative;
        }

        .img-box .tip {
            width: 700px;
            height: 53px;
            line-height: 53px;
            position: absolute;
            bottom: 0px;
            background-color: rgba(0, 0, 0, 0.8);
            z-index: 10;
        }

        .img-box .tip h3 {
            width: 82%;
            margin: 0;
            margin-right: 20px;
            padding-left: 20px;
            color: #98E404;
            font-size: 28px;
            float: left;
            font-weight: 500;
            font-family: "Microsoft Yahei", Tahoma, Geneva;
        }

        .img-box .tip a {
            width: 30px;
            height: 29px;
            display: block;
            float: left;
            margin-top: 12px;
            margin-right: 3px;
        }

        .img-box ul {
            position: absolute;
            bottom: 0;
            right: 30px;
            list-style: none;
            z-index: 99;
        }
    </style>
</head>

<body>
    <div class="img-box">
        <img class="pic" src="images/b01.jpg" alt="第1张图的描述信息">
        <div class="tip">
            <h3 class="text">挑战云歌单，欢迎你来</h3>
        </div>
    </div>
<script>
    //数据
    let data = [
        {
            imgSrc: 'images/b01.jpg',
            title: '挑战云歌单，欢迎你来'
        },
        {
            imgSrc: 'images/b02.jpg',
            title: '田园日记，上演上京记'
        },
        {
            imgSrc: 'images/b03.jpg',
            title: '甜蜜攻势再次回归'
        },
        {
            imgSrc: 'images/b04.jpg',
            title: '我为歌狂，生为歌王'
        },
        {
            imgSrc: 'images/b05.jpg',
            title: '年度校园主题活动'
        },
        {
            imgSrc: 'images/b06.jpg',
            title: 'pink老师新歌发布，5月10号正式推出'
        },
        {
            imgSrc: 'images/b07.jpg',
            title: '动力火车来到西安'
        },
        {
            imgSrc: 'images/b08.jpg',
            title: '钢铁侠3，英雄镇东风'
        },
        {
            imgSrc: 'images/b09.jpg',
            title: '我用整颗心来等你'
        },
    ];
    //获取元素
    let pic = document.querySelector('img.pic');
    let text = document.querySelector('h3.text');

    let i = 0;

    //启动定时器
    let time = setInterval(function () {
        i++;
        pic.src = data[i].imgSrc;
        text.innerHTML = data[i].title;
        if (i === data.length-1) {
            i = -1;
        }
    },1000)


</script>

</body>

</html>
```

## 二、事件监听及案例

### 2.1 事件

事件是在编程时系统内发生的**动作**或者发生的事情，比如用户在网页上**单击**一个按钮

### 2.2 事件监听（绑定事件）

就是让程序检测是否有事件产生，一旦有事件触发，就立即调用一个函数做出响应，也称为 注册事件

给元素添加事件，语法： `元素.addEventListener('事件',要执行的函数);`

### 2.3 **事件监听三要素：**

 事件源： 那个dom元素被事件触发了，要获取dom元素

 事件： 用什么方式触发，比如鼠标单击 click、鼠标经过 mouseover 等

 事件调用的函数： 要做什么事

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<button>点击</button>
<script>
  let btn = document.querySelector('button');
  // btn.addEventListener('click',function (){
  //   alert('被点击了');
  // })
  function fn() {
    alert('考研上岸')
  }
  btn.addEventListener('click',fn);
</script>
</body>
</html>
```

案例

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        * {
            margin: 0;
            padding: 0;
        }

        .erweima {
            position: relative;
            width: 160px;
            height: 160px;
            margin: 100px auto;
            border: 1px solid #ccc;
        }

        .erweima i {
            position: absolute;
            left: -13px;
            top: 0;
            width: 10px;
            height: 10px;
            border: 1px solid #ccc;
            font-size: 12px;
            line-height: 10px;
            color: #ccc;
            font-style: normal;
            cursor: pointer;
        }
    </style>
</head>

<body>
    <div class="erweima">
        <img src="./images/code.png" alt="">
        <i class="close_btn">x</i>
    </div>
    <script>
        // 1. 获取元素   事件源 i   关闭的 erweima 
        let close_btn = document.querySelector('i.close_btn');
        let erweima = document.querySelector('div.erweima');

        // 2. 事件监听
        close_btn.addEventListener('click',function () {
            // erweima 关闭  他是隐藏的
            erweima.style.display = 'none';
        })



    </script>
</body>

</html>
```

### 2.4 案例-随机点名

点名1

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        div {
            width: 200px;
            height: 40px;
            border: 1px solid pink;
            text-align: center;
            line-height: 40px;
        }
    </style>
</head>

<body>
    <div>开始抽奖吧</div>
    <button>点击点名</button>
    <script>
        // 1. 获取元素  div 和 button 
        let btn = document.querySelector('button');
        let Name = document.querySelector('div')
        // 2. 随机函数
        function getRandom(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min ;
        }

        // 声明一个数组
        let arr = ['刘备', '曹操', '张三'];
        // 3. 事件监听
        let i = 0;
        btn.addEventListener('click',function () {
            i = getRandom(0,arr.length-1)
            Name.innerHTML = arr[i];
            arr.splice(i,1);
            if (arr.length === 0){
                btn.disabled = true;
            }
        })
    </script>
</body>

</html>
```

点名2

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        * {
            margin: 0;
            padding: 0;
        }

        h2 {
            text-align: center;
        }

        .box {
            width: 600px;
            margin: 50px auto;
            display: flex;
            font-size: 25px;
            line-height: 40px;
        }

        .qs {

            width: 450px;
            height: 40px;
            color: red;

        }

        .btns {
            text-align: center;
        }

        .btns button {
            width: 120px;
            height: 35px;
            margin: 0 50px;
        }
    </style>
</head>

<body>
    <h2>随机点名</h2>
    <div class="box">
        <span>名字是：</span>
        <div class="qs">这里显示姓名</div>
    </div>
    <div class="btns">
        <button class="start">开始</button>
        <button class="end">结束</button>
    </div>

    <script>
        // 数据数组
        let arr = ['马超', '黄忠', '赵云', '关羽', '张飞']
        function getRandom(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min
        }
        // 1. 获取元素  两个按钮 + div
        // 一定不要忘记加点  因为里面写css类选择器
        let name = document.querySelector('div.qs');
        let startBtn = document.querySelector('button.start');
        let endBtn = document.querySelector('button.end');
        // timer 要是全局变量
        let timer = 0;
        // random 要是全局变量
        let random = 0;
        // 2. 给开始按钮注册事件
        console.log(arr);
        startBtn.addEventListener('click',function (){
            timer = setInterval(function (){
                random = getRandom(0,arr.length-1);
                name.innerHTML = arr[random];
            },25)
            if (arr.length ===1){
                startBtn.disabled = endBtn.disabled  = true;
            }

        })


        // 3. 给结束按钮注册事件  本质是停止定时器
        endBtn.addEventListener('click', function () {
            // 停止定时器
            clearInterval(timer);
            // 删除数组元素
            arr.splice(random,1);
             console.log(arr);
        })
    </script>
</body>

</html>
```

### 2.5 事件扩展

事件监听版本

1. `事件源.on事件 = function(){}`

   ```
   btn.onclick = function(){}
   
   btn.onclick = fn
   function fn(){}
   ```

2. `事件源.addEventList(事件,事件处理函数);`   (建议用这种)

事件类型：

1. 鼠标事件

   - click  鼠标点击
   - mouseenter  鼠标经过
   - mouseleave  鼠标离开

2. 焦点事件（表单获得光标）

   - focus 获得焦点
   - blur 失去焦点

3. 键盘事件

   - Keydown 键盘按下触发
   - Keyup 键盘抬起触发

4. 文本事件（表单输入触发）

   - input 用户输入事件

### 2.6 案例-小米搜索框

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

        ul {

            list-style: none;
        }

        .mi {
            position: relative;
            width: 223px;
            margin: 100px auto;
        }

        .mi input {
            width: 223px;
            height: 48px;
            padding: 0 10px;
            font-size: 14px;
            line-height: 48px;
            border: 1px solid #e0e0e0;
            outline: none;
            transition: all .3s;
        }

        .mi .search {
            border: 1px solid #ff6700;
        }

        .result-list {
            display: none;
            position: absolute;
            left: 0;
            top: 48px;
            width: 223px;
            border: 1px solid #ff6700;
            border-top: 0;
            background: #fff;
        }

        .result-list a {
            display: block;
            padding: 6px 15px;
            font-size: 12px;
            color: #424242;
            text-decoration: none;
        }

        .result-list a:hover {
            background-color: #eee;
        }
    </style>

</head>

<body>
    <div class="mi">
        <input type="search" placeholder="小米笔记本">
        <ul class="result-list">
            <li><a href="#">全部商品</a></li>
            <li><a href="#">小米12</a></li>
            <li><a href="#">小米12SU</a></li>
            <li><a href="#">小米笔记本</a></li>
            <li><a href="#">小米手机</a></li>
            <li><a href="#">黑鲨4</a></li>
            <li><a href="#">空调</a></li>
        </ul>
    </div>
    <script>
        let search = document.querySelector('input');
        let result = document.querySelector('ul.result-list');

        //事件监听
        search.addEventListener('focus',function () {
            //显示下拉菜单
            result.style.display = 'block' ;
            //文本框变色
            search.classList.add('search');
        })
        search.addEventListener('blur',function (){
            //隐藏下拉菜单
            result.style.display = 'none';
            //文本框变色
            search.classList.remove('search');
        })
    </script>
</body>

</html>
```

### 2.7 微博输入案例

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
  <link rel="stylesheet" href="css/weibo.css">
</head>

<body>
  <div class="w">
    <div class="controls">
      <img src="images/tip.png" alt=""><br>
      <textarea placeholder="说点什么吧..." id="area" cols="30" rows="10" maxlength="200"></textarea>
      <div>
        <span class="useCount">0</span>
        <span>/</span>
        <span>200</span>
        <button id="send">发布</button>
      </div>

    </div>
    <div class="contentList">
      <ul>

      </ul>
    </div>
  </div>
  <script>
      let area = document.querySelector('#area');
      let useCount = document.querySelector('span.useCount');
      let num = 0;
      //绑定事件
      area.addEventListener('input',function () {
         //不断获得文本域的字符长度
        num = area.value.length;
        useCount.innerHTML = num;
      })
  if (num === 200){
          area.disabled = true;
        }

  </script>
</body>

</html>
```

### 2.8 案例-全选

```html
<!DOCTYPE html>

<html>

<head lang="en">
  <meta charset="UTF-8">
  <title></title>
  <style>
    * {
      margin: 0;
      padding: 0;
    }

    table {
      border-collapse: collapse;
      border-spacing: 0;
      border: 1px solid #c0c0c0;
      width: 500px;
      margin: 100px auto;
      text-align: center;
    }

    th {
      background-color: #09c;
      font: bold 16px "微软雅黑";
      color: #fff;
      height: 24px;
    }

    td {
      border: 1px solid #d0d0d0;
      color: #404060;
      padding: 10px;
    }

    .allCheck {
      width: 80px;
    }
  </style>
</head>

<body>
  <table>
    <tr>
      <th class="allCheck">
        <input type="checkbox" name="" id="checkAll"> <span class="all">全选</span>
      </th>
      <th>商品</th>
      <th>商家</th>
      <th>价格</th>
    </tr>
    <tr>
      <td>
        <input type="checkbox" name="check" class="ck">
      </td>
      <td>小米手机</td>
      <td>小米</td>
      <td>￥1999</td>
    </tr>
    <tr>
      <td>
        <input type="checkbox" name="check" class="ck">
      </td>
      <td>小米净水器</td>
      <td>小米</td>
      <td>￥4999</td>
    </tr>
    <tr>
      <td>
        <input type="checkbox" name="check" class="ck">
      </td>
      <td>小米电视</td>
      <td>小米</td>
      <td>￥5999</td>
    </tr>
  </table>
  <script>
    // 1. 获取元素  全选 和   ck 小复选框
    let all = document.querySelector('#checkAll');
    let cks = document.querySelectorAll('.ck');
    let span = document.querySelector('span');

    // 2. 事件监听   全选按钮  
    all.addEventListener('click',function () {
      for (let i = 0; i < cks.length; i++) {
        cks[i].checked = all.checked;

      }
      if (all.checked){
        span.innerHTML = '取消';
      }else{
        span.innerHTML = '全选';
      }

    })


    // 3. 小按钮的做法 同时给多个元素绑定相同事件
    //遍历下面所有的checkbox，绑定点击事件
    //在事件内部，遍历所有checkbox状态。只要有一个为false，就将全状态为false，文字改为全选，并直接退出（退出循环）
    //在循环结束将全选状态直接设置为true
    for (let i = 0; i < cks.length; i++) {
      cks[i].addEventListener('click',function () {
        for (let j = 0; j < cks.length; j++) {             //只要点击一个小按钮，就要遍历所有的小按钮的选中状态
          if (!cks[i].checked){                   //如果当中有个小按钮选中状态为false
            all.checked = false;
            span.innerHTML = '全选';
            return;                     //退出这个函数，不再进行接下来的操作
          }
        }
        all.checked = true;        //当遍历完小按钮，代码走到这里，就说明说所有的按钮都被选中了
        span.innerHTML = '取消';
      })
    }



  </script>
</body>

</html>


// break  退出当前循环
// continue  退出当前循环
// return 退出当前函数
```

#### 2.8.1 购物车加减案例

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
  <style>
    div {
      width: 80px;
    }

    input[type=text] {
      width: 50px;
      height: 44px;
      outline: none;
      border: 1px solid #ccc;
      text-align: center;
      border-right: 0;
    }

    input[type=button] {
      height: 24px;
      width: 22px;
      cursor: pointer;
    }

    input {
      float: left;
      border: 1px solid #ccc;

    }
  </style>
</head>

<body>
  <div>
    <input type="text" id="total" value="0" readonly>
    <input type="button" value="+" id="add">
    <input type="button" value="-" id="reduce" disabled>
    <script>
     //获取3个元素
     let total = document.querySelector('#total');
     let add = document.querySelector('#add');
     let reduce = document.querySelector('#reduce');

     add.addEventListener('click',function () {
       // total.value = +total.value + 1
       total.value++;
       reduce.disabled = false;
     })

     reduce.addEventListener('click',function () {
       // total.value = +total.value + 1
       total.value--;
       if (total.value <= 0){      //隐式转换
         reduce.disabled = true;
       }

     })


    </script>
  </div>
</body>

</html>
```

#### 2.8.2 高阶函数-回调函数

**高阶函数**可以被简单理解为函数的**高级应用**，JavaScript 中函数可以被当成**【值】**来对待，基于这个特性实现函数的高级应用。

**回调函数**把函数当做另外一个函数的参数传递，这个函数就叫回调函数 ，回调函数本质还是函数，只不过把它当成参数使用，使用匿名函数做为回调函数比较常见

![](https://img.up.cdn.nahida.cn/2022/08/image-20220814175502194.png)

![](https://img.up.cdn.nahida.cn/2022/08/image-20220814175514345.png)

如果将函数 A 做为参数传递给函数 B 时，我们称函数 A 为回调函数。简单理解： 当一个函数当做参数来传递给另外一个函数的时候，这个函数就是回调函数 。

## 三、环境对象

环境对象指的是函数内部特殊的**变量 this** ，它代表着当前函数运行时所处的环境

作用：弄清楚this的指向，可以让我们代码更简洁

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
    <button>点击</button>
    <script>
        // 环境对象 this 他就是个对象
        function fn() {
            console.log(this)       //直接调用函数，其实相当于是 window.函数，所以 this 指代 window
        }
        // fn()   window是省略的
        window.fn()

        let btn = document.querySelector('button')
        btn.addEventListener('click', function () {
            console.log(typeof this)
            // 因为btn 调用了这个函数，所以 this 指向btn
        })
    </script>
</body>

</html>
```

### 3.1环境对象 this

【谁调用， this 就是谁】 是判断 this 指向的粗略规则

### 3.2 排他思想

当前元素为A状态,其他元素为B状态

1. 干掉所有人

    使用for循环

2. 复活他自己

       通过this或者下标找到自己或者对应的元素

```java
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .pink {
            background: pink;
        }
    </style>
</head>

<body>
    <button class="pink">第1个</button><button>第2个</button><button>第3个</button><button>第4个</button><button>第5个</button>
    <script>
        let btns = document.querySelectorAll('button')
        for (let i = 0; i < btns.length; i++) {
            btns[i].addEventListener('click', function () {
                // this.classList.add('pink')
                // 干掉所有人
                // for (let j = 0; j < btns.length; j++) {
                //     btns[j].classList.remove('pink')
                // }
                document.querySelector('.pink').classList.remove('pink');   //找到第一个是class是pink的，然后移除
                
                // 复活我自己，然后复活自己的，使得自己的class是pink。可以用在首页，tab页上
                this.classList.add('pink')
            })
        }
    </script>
</body>

</html>
```

### 3.3 综合案例 tab栏

```html
<!DOCTYPE html>
<html>

<head lang="en">
  <meta charset="UTF-8" />
  <title></title>
  <style type="text/css">
    * {
      margin: 0;
      padding: 0;
    }

    ul {
      list-style: none;
    }

    .wrapper {
      width: 1000px;
      height: 475px;
      margin: 0 auto;
      margin-top: 100px;
    }

    .tab {
      border: 1px solid #ddd;
      border-bottom: 0;
      height: 36px;
      width: 320px;
    }

    .tab li {
      position: relative;
      float: left;
      width: 80px;
      height: 34px;
      line-height: 34px;
      text-align: center;
      cursor: pointer;
      border-top: 4px solid #fff;
    }

    .tab span {
      position: absolute;
      right: 0;
      top: 10px;
      background: #ddd;
      width: 1px;
      height: 14px;
      overflow: hidden;
    }

    .products {
      width: 1002px;
      border: 1px solid #ddd;
      height: 476px;
    }

    .products .main {
      float: left;
      display: none;
    }

    .products .main.active {
      display: block;
    }

    .tab li.active {
      border-color: red;
      border-bottom: 0;
    }
  </style>
</head>

<body>
  <div class="wrapper">
    <ul class="tab">
      <li class="tab-item active">国际大牌<span>◆</span></li>
      <li class="tab-item">国妆名牌<span>◆</span></li>
      <li class="tab-item">清洁用品<span>◆</span></li>
      <li class="tab-item">男士精品</li>
    </ul>
    <div class="products">
      <div class="main active">
        <a href="###"><img src="imgs/guojidapai.jpg" alt="" /></a>
      </div>
      <div class="main">
        <a href="###"><img src="imgs/guozhuangmingpin.jpg" alt="" /></a>
      </div>
      <div class="main">
        <a href="###"><img src="imgs/qingjieyongpin.jpg" alt="" /></a>
      </div>
      <div class="main">
        <a href="###"><img src="imgs/nanshijingpin.jpg" alt="" /></a>
      </div>
    </div>
  </div>
  <script>
    let lis = document.querySelectorAll('li.tab-item');
    let goods = document.querySelectorAll('.products .main')

    //头部tab栏目切换
    for (let i = 0; i < lis.length; i++) {
      lis[i].addEventListener('click',function () {
        document.querySelector('.tab .active').classList.remove('active');
        this.classList.add('active')

        //底下的商品变化
        document.querySelector('.products .active').classList.remove('active')
        //对应的i值的main那个显示内容
        goods[i].classList.add('active')

      })

    }

  </script>



</body>

</html>
```

## 四、DOM节点

DOM树里每一个内容都称之为节点

**元素节点** •

1. 所有的标签： 比如 body、 div ，html 是根节点
2. 属性节点  ：所有的属性 比如 href
3. 文本节点 ： 所有的文本
4. 其他

### 4.1 查找结点及二维码案例

### 4.2 查找父节点(重点)

parentNode 属性  `子元素.parentNode;`  

 返回最近一级的父节点 找不到返回为null

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
    <div class="father">
        <div class="son">儿子</div>
    </div>
    <script>
        let son = document.querySelector('.son')
        // 找爸爸
        console.log(son.parentNode)
        son.parentNode.style.display = 'none'
    </script>
</body>

</html>
```

关闭二维码加强版：

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        * {
            margin: 0;
            padding: 0;
        }

        .erweima {
            position: relative;
            width: 160px;
            height: 160px;
            margin: 100px auto;
            border: 1px solid #ccc;
        }

        .erweima i {
            position: absolute;
            left: -13px;
            top: 0;
            width: 10px;
            height: 10px;
            border: 1px solid #ccc;
            font-size: 12px;
            line-height: 10px;
            color: #ccc;
            font-style: normal;
            cursor: pointer;
        }
    </style>
</head>

<body>
    <div class="erweima">
        <img src="./images/code.png" alt="">
        <i class="close_btn">x</i>
    </div>
    <script>
        // 1. 获取元素   事件源 i   关闭的 erweima 
        let close_btn = document.querySelector('.close_btn')

        // 2. 事件监听
        close_btn.addEventListener('click', function () {
            // 找到close_btn的父节点，并隐藏这个元素
            this.parentNode.style.display = 'none'
        })
    </script>
</body>

</html>
```

关闭4个二维码：

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Document</title>
  <style>
    .erweima {
      width: 149px;
      height: 152px;
      border: 1px solid #000;
      background: url(./images/456.png) no-repeat;
      position: relative;
    }

    .close {
      position: absolute;
      right: -52px;
      top: -1px;
      width: 50px;
      height: 50px;
      background: url(./images/bgs.png) no-repeat -159px -102px;
      cursor: pointer;
      border: 1px solid #000;

    }
  </style>
</head>

<body>
  <div class="erweima">
    <span class="close"></span>
  </div>
  <div class="erweima">
    <span class="close">1</span>
  </div>
  <div class="erweima">
    <span class="close">2</span>
  </div>
  <div class="erweima">
    <span class="close">3</span>
  </div>
  <div class="erweima">
    <span class="close">4</span>
  </div>

  <script>
    // 1. 获取元素  关闭按钮
    let close_btn = document.querySelectorAll('.close');
    for (let i = 0; i < close_btn.length; i++) {
      close_btn[i].addEventListener('click',function () {
        //this.parentNode.style.display = 'none';
        this.parentNode.style.visibility = 'hidden';
      })
    }
  </script>
</body>

</html>
```

### 4.3 查找结点-子级和兄弟

子节点查找（重点）：`父元素.children`

1. 仅获得所有元素节点
2. 返回的还是一个**伪数组**

下一个兄弟节点：`元素.nextElementSibling`

上一个兄弟节点： `元素.previousElementSibling`

### 4.4 追加结点

**一般情况下，我们新增节点，按照如下操作：**

  创建一个新的节点  `let 新元素 = document.createElement('标签名')`
 
  把创建的新的节点放入到指定的元素内部
 
   `父元素.appendChild(新元素)`   插入到父元素的最后一个子元素:
 
   `父元素.insertBefore(新元素, 在哪个元素前面)`   插入到父元素中某个子元素的前面

### 4.5 综合案例-学成在线

需求：按照数据渲染页面 分析：

 ①：准备好空的ul 结构

②：根据数据的个数，创建一个新的空li

③：li里面添加内容 img 标题等

④：追加给ul

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>学车在线首页</title>
    <link rel="stylesheet" href="style.css">

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
<!--                 <li>-->
<!--                    <img src="./images/course01.png" alt="">-->
<!--                    <h4>-->
<!--                        Think PHP 5.0 博客系统实战项目演练-->
<!--                    </h4>-->
<!--                    <div class="info">-->
<!--                        <span>高级</span> • <span> 1125</span>人在学习-->
<!--                    </div>-->
<!--                </li> -->
            </ul>
        </div>
    </div>
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
        ];
        let ui = document.querySelector('ul ')
        //根据数据的个数创建li的个数
        for (let i = 0; i < data.length; i++) {
            //创建li
            let li = document.createElement('li');
            //准备好内容
            li.innerHTML = `
                <img src=${data[i].src} alt="">
                    <h4>
                        ${data[i].title}
                    </h4>
                    <div class="info">
                        <span>高级</span> • <span> 1125</span>人在学习
                    </div>
            `
            //再追加给ul
            ui.appendChild(li);

        }



    </script>
</body>

</html>
```

### 4.6 克隆和删除结点

#### 4.6.1 克隆节点

`元素.cloneNode(布尔值)`    克隆一个已有的元素结点

 **特殊情况下，我们新增节点，按照如下操作：**

- 复制一个原有的节点
- 把复制的节点放入到指定的元素内部

**cloneNode会克隆出一个跟原标签一样的元素，括号内传入布尔值**

 若为true，则代表克隆时会包含后代节点一起克隆 （连孩子一块打包克隆）

 若为false，则代表克隆时不包含后代节点 （只克隆当前结点，不克隆后代结点）

 默认为false

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
  <ul>
    <li>我是内容</li>
  </ul>

<script>
  let ul = document.querySelector('ul');
  let newul = ul.cloneNode(true);
  document.body.appendChild(newul);
</script>

</body>
</html>
```

#### 4.6.2 删除结点

若一个节点在页面中已不需要时，可以删除它

在 JavaScript 原生DOM操作中，**要删除元素必须通过父元素删除**

语法：`父元素.removeChild(要删除的元素);`

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
  <button>点击</button>
  <ul>
    <li>我是内容</li>
  </ul>

<script>
  let ul = document.querySelector('ul');
  let btn = document.querySelector('button')

  btn.addEventListener('click',function () {
    //删除的结点
    ul.removeChild(ul.children[0]);
  })
</script>

</body>
</html>
```

## 五、时间对象

### 5.1 时间对象及案例

#### 实例化

获得当前时间： `let date = new Date();`

获得指定时间：`let date = new Date('1970-01-01 22:30:23');`

获得时间对象的方法：

[![](https://img.up.cdn.nahida.cn/2022/08/image-20220814220851121.png)]

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        div {
            width: 400px;
            height: 50px;
            background-color: pink;
            text-align: center;
            line-height: 50px;
        }
    </style>
</head>

<body>
    <div></div>
    <script>

        let arr = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
        let div = document.querySelector('div')
        // 先调用，就省去了1秒的空白期
        getTime()
        setInterval(getTime, 1000)
        function getTime() {
            // 1. 实例化时间对象 一定写到定时器里面才可以
            let date = new Date()                //获得当前时间
            let year = date.getFullYear()
            let month = date.getMonth() + 1     //获得月份  因为是数组下标值0-11，得在后面加1
            let date1 = date.getDate()          //今天是一个月的几号？
            let hour = date.getHours()
            let min = date.getMinutes()
            let sec = date.getSeconds()
            let day = date.getDay()          //获取星期
            div.innerHTML = `今天是： ${year}年${month}月${date1}日 ${hour}:${min}:${sec} ${arr[day]}`
        }
    </script>
</body>

</html>
```

### 5.2 时间戳及案例

**时间戳：**是指1970年01月01日00时00分00秒起至现在的**毫秒数**，它是一种特殊的计量时间的方式

获取时间戳的三种方法：

1. 使用 getTime() 方法

```
let date = new Data();
console.log(date.getTime);
```

2. 简写 +new Date()

```
console.log(+new Date());
console.log(+new Date('2022-8-30 12:00:00'))  // 指定时间的时间戳
```

3. 使用Date().now：无需实例化，但是只能得到当前的时间戳， 而前面两种可以返回指定时间的时间戳

```
console.log(Date.now());
```

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Document</title>
  <style>
    .countdown {
      width: 240px;
      height: 305px;
      text-align: center;
      line-height: 1;
      color: #fff;
      background-color: brown;
      /* background-size: 240px; */
      /* float: left; */
      overflow: hidden;
    }

    .countdown .next {
      font-size: 16px;
      margin: 25px 0 14px;
    }

    .countdown .title {
      font-size: 33px;
    }

    .countdown .tips {
      margin-top: 80px;
      font-size: 23px;
    }

    .countdown small {
      font-size: 17px;
    }

    .countdown .clock {
      width: 142px;
      margin: 18px auto 0;
      overflow: hidden;
    }

    .countdown .clock span,
    .countdown .clock i {
      display: block;
      text-align: center;
      line-height: 34px;
      font-size: 23px;
      float: left;
    }

    .countdown .clock span {
      width: 34px;
      height: 34px;
      border-radius: 2px;
      background-color: #303430;
    }

    .countdown .clock i {
      width: 20px;
      font-style: normal;
    }
  </style>
</head>

<body>
  <div class="countdown">
    <p class="next">今天是2021年8月28日</p>
    <p class="title">下班倒计时</p>
    <p class="clock">
      <span id="hour">00</span>
      <i>:</i>
      <span id="minutes">25</span>
      <i>:</i>
      <span id="scond">20</span>
    </p>
    <p class="tips">
      现在是18:30:00
    </p>
  </div>
  <script>

    let divNext = document.querySelector('.countdown .next');
    let divTips = document.querySelector('.countdown .tips');
    let hours = document.querySelector('#hour');
    let minutes = document.querySelector('#minutes');
    let secs = document.querySelector('#scond');
    let endTime = +new Date('2022-8-31 18:00-00');
    let timeClock = 0;
    let h = 0 ;
    let m = 0 ;
    let ss = 0;
    getTimeSS();
    function getTimeSS() {
      let date = new Date()
      let year = date.getFullYear();
      let month = date.getMonth() + 1  ;   //获得月份  因为是数组下标值0-11，得在后面加1
      let date1 = date.getDate();          //今天是一个月的几号？
      let hour = date.getHours();
      hour = hour < 10 ? '0' + hour :hour;
      let min = date.getMinutes();
      min = min < 10 ? '0' + min :min;
      let sec = date.getSeconds();
      sec = sec < 10 ? '0' + sec :sec;
      let day = date.getDay();
      divNext.innerHTML = `今天是： ${year}年${month}月${date1}日` ;
      divTips.innerHTML = `现在是 ${hour}:${min}:${sec}`

      let nowTime = +new Date();
      timeClock = (endTime - nowTime) / 1000;
      h =parseInt(timeClock /60 /60 %24);
      h = h <10 ? '0'+h : h ;
      m = parseInt(timeClock /60 %60);
      m = m < 10 ? '0' + m : m ;
      ss =parseInt(timeClock %60);
      ss = ss <10 ? '0' +ss : ss;

      hours.innerHTML = h;
      minutes.innerHTML = m;
      secs.innerHTML = ss;

    }
    setInterval(getTimeSS,1000);

  </script>
</body>

</html>
```

### 5.3 案例-微博发布

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta http-equiv="X-UA-Compatible" content="ie=edge" />
  <title>微博发布</title>
  <style>
    * {
      margin: 0;
      padding: 0;
    }

    ul {
      list-style: none;
    }

    .w {
      width: 900px;
      margin: 0 auto;
    }

    .controls textarea {
      width: 878px;
      height: 100px;
      resize: none;
      border-radius: 10px;
      outline: none;
      padding-left: 20px;
      padding-top: 10px;
      font-size: 18px;
    }

    .controls {
      overflow: hidden;
    }

    .controls div {
      float: right;
    }

    .controls div span {
      color: #666;
    }

    .controls div .useCount {
      color: red;
    }

    .controls div button {
      width: 100px;
      outline: none;
      border: none;
      background: rgb(0, 132, 255);
      height: 30px;
      cursor: pointer;
      color: #fff;
      font: bold 14px '宋体';
      transition: all 0.5s;
    }

    .controls div button:hover {
      background: rgb(0, 225, 255);
    }

    .controls div button:disabled {
      background: rgba(0, 225, 255, 0.5);
    }

    .contentList {
      margin-top: 50px;
    }

    .contentList li {
      padding: 20px 0;
      border-bottom: 1px dashed #ccc;
      position: relative;
    }

    .contentList li .info {
      position: relative;
    }

    .contentList li .info span {
      position: absolute;
      top: 15px;
      left: 100px;
      font: bold 16px '宋体';
    }

    .contentList li .info p {
      position: absolute;
      top: 40px;
      left: 100px;
      color: #aaa;
      font-size: 12px;
    }

    .contentList img {
      width: 80px;
      border-radius: 50%;
    }

    .contentList li .content {
      padding-left: 100px;
      color: #666;
      word-break: break-all;
    }

    .contentList li .the_del {
      position: absolute;
      right: 0;
      top: 0;
      font-size: 28px;
      cursor: pointer;
    }
  </style>
</head>

<body>
  <div class="w">
    <!-- 操作的界面 -->
    <div class="controls">
      <img src="./images/9.6/tip.png" alt="" /><br />
      <!-- maxlength 可以用来限制表单输入的内容长度 -->
      <textarea placeholder="说点什么吧..." id="area" cols="30" rows="10" maxlength="200"></textarea>
      <div>
        <span class="useCount" id="useCount">0</span>
        <span>/</span>
        <span>200</span>
        <button id="send">发布</button>
      </div>
    </div>
    <!-- 微博内容列表 -->
    <div class="contentList">
      <ul id="list"></ul>
    </div>
  </div>

  <!-- 添加了hidden属性元素会直接隐藏掉 -->
  <li hidden>
    <div class="info">
      <img class="userpic" src="./images/9.6/03.jpg" />
      <span class="username">死数据:百里守约</span>
      <p class="send-time">死数据:发布于 2020年12月05日 00:07:54</p>
    </div>
    <div class="content">死数据:111</div>
    <span class="the_del">X</span>
  </li>

  <script>
    // maxlength 是一个表单属性, 作用是给表单设置一个最大长度

    // 模拟数据
    let dataArr = [
      { uname: '司马懿', imgSrc: './images/9.5/01.jpg' },
      { uname: '女娲', imgSrc: './images/9.5/02.jpg' },
      { uname: '百里守约', imgSrc: './images/9.5/03.jpg' },
      { uname: '亚瑟', imgSrc: './images/9.5/04.jpg' },
      { uname: '虞姬', imgSrc: './images/9.5/05.jpg' },
      { uname: '张良', imgSrc: './images/9.5/06.jpg' },
      { uname: '安其拉', imgSrc: './images/9.5/07.jpg' },
      { uname: '李白', imgSrc: './images/9.5/08.jpg' },
      { uname: '阿珂', imgSrc: './images/9.5/09.jpg' },
      { uname: '墨子', imgSrc: './images/9.5/10.jpg' },
      { uname: '鲁班', imgSrc: './images/9.5/11.jpg' },
      { uname: '嬴政', imgSrc: './images/9.5/12.jpg' },
      { uname: '孙膑', imgSrc: './images/9.5/13.jpg' },
      { uname: '周瑜', imgSrc: './images/9.5/14.jpg' },
      { uname: '老夫子', imgSrc: './images/9.5/15.jpg' },
      { uname: '狄仁杰', imgSrc: './images/9.5/16.jpg' },
      { uname: '扁鹊', imgSrc: './images/9.5/17.jpg' },
      { uname: '马可波罗', imgSrc: './images/9.5/18.jpg' },
      { uname: '露娜', imgSrc: './images/9.5/19.jpg' },
      { uname: '孙悟空', imgSrc: './images/9.5/20.jpg' },
      { uname: '黄忠', imgSrc: './images/9.5/21.jpg' },
      { uname: '百里玄策', imgSrc: './images/9.5/22.jpg' },
    ]
    // 需求1
    // 1. 注册input事件
    // 2. 将文本的内容的长度赋值给对应的数值
    // 3. 表单的maxlength属性可以直接限制在200个数之间
    let textarea = document.querySelector('textarea');
    let useCount = document.querySelector('.useCount');
    // 发布按钮
    let send = document.querySelector(`#send`)
    // 获取ul
    let ul = document.querySelector('#list');

    textarea.addEventListener('input',function (){
      // console.log(this.value.length);
      useCount.innerHTML = this.value.length;
      if (this.value.length > 200){
        send.disabled = true;
      }
    })

    // 需求2
    //点击按钮之后判断
    // 克隆预定义好的模板,将模板的hidden属性设置为false, 并最终展示到页面上
    // 判断如果内容为空，则提示不能输入为空, 并且直接return
    // 防止输入无意义空格, 使用字符串.trim()去掉首尾空格, 并将表单的value值设置为空字符串
    send.addEventListener('click' , function () {
      if(textarea.value.trim() ===''){      //字符串.trim()去掉首尾空格
        textarea.value = '';
        useCount.innerHTML = 0;
        return alert('输入内容为空');
      }

      // 需求3
      // 获取文本域的内容, 赋值给由模板克隆出来的新标签里面的content.innerText
      // 随机获取数据数组里面的内容, 替换newNode的图片和名称
      // 利用时间对象将时间动态化 new Date().toLocaleString()

      //创建一个li
      let li = document.createElement('li');
      //随机数
      function getRandom(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min
      }
      let random = getRandom(0, dataArr.length - 1)
      //追加内容到li里边
      li.innerHTML = `
      <div class="info">
            <img class="userpic" src=${dataArr[random].imgSrc} >
            <span class="username">${dataArr[random].uname}</span>
            <p class="send-time">${new Date().toLocaleString()}</p>
      </div>
      <div class="content">${textarea.value}</div>
      <span class="the_del">X</span>
    `;

      // 需求4
      // 在事件处理函数里面获取点击按钮,注册点击事件
      // (易错点: 必须在点击事件内里面获取,外面获取不到)
      // 删除对应的元素 (通过this获取对应的那条需要删除的元素)
      // 教你一招: 放到追加进ul的前面，这样创建元素的同时顺便绑定了事件，赞~~

      // 使用 li.querySelector() 找到li元素
      let del = li.querySelector('.the_del');
      del.addEventListener('click',function () {
            //删除操作
        ul.removeChild(li);
      })



      //追加li节点
      ul.insertBefore(li,ul.children[0]);






      //需求5
      // 将表单域内容重置为空
      // 将userCount里面的内容重置为0
      textarea.value = '';
      useCount.innerHTML = 0;

    })



  </script>

</body>

</html>
```

### 5.4 重绘和重排

**重绘不一定引起回流，而回流一定会引起重绘。**

**回流(重排)**

当 Render Tree 中部分或者全部元素的尺寸、结构、布局等发生改变时，浏览器就会重新渲染部分或全部文档的过 程称为 回流。

会导致回流（重排）的操作：

- 页面的首次刷新
- 浏览器的窗口大小发生改变
- 元素的大小或位置发生改变
- 改变字体的大小
- 内容的变化（如：input框的输入，图片的大小）
- 激活css伪类 （如：:hover）
- 脚本操作DOM（添加或者删除可见的DOM元素）

简单理解影响到布局了，就会有回流

 **重绘**

由于节点(元素)的样式的改变并不影响它在文档流中的位置和文档布局时(比如：color、background-color、 outline等), 称为重绘。

### 5.5 案例购物车

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta http-equiv="X-UA-Compatible" content="ie=edge" />
  <title>购物车全选功能</title>
  <!-- 引入初始化 -->
  <style>
    * {
      margin: 0;
      padding: 0;
    }

    ul {
      list-style: none;
    }

    a {
      text-decoration: none;
      color: #666;
    }

    body {
      background: #fff;
      color: #666;
      font-size: 14px;
    }

    input {
      outline: none;
    }

    .clearfix::before,
    .clearfix::after {
      content: '';
      display: block;
      clear: both;
    }

    .clearfix {
      *zoom: 1;
    }
  </style>
  <!-- 引入购物车样式 -->
  <style>
    table {
      width: 800px;
      margin: 0 auto;
      border-collapse: collapse;
    }

    th {
      font: normal 14px/50px '宋体';
      color: #666;
    }

    th,
    td {
      border: none;
      text-align: center;
      border-bottom: 1px dashed #ccc;
    }

    input[type='checkbox'] {
      width: 13px;
      height: 13px;
    }

    tbody p {
      position: relative;
      bottom: 10px;
    }

    tbody .add,
    tbody .reduce {
      float: left;
      width: 22px;
      height: 22px;
      border: 1px solid #ccc;
      text-align: center;
      background: none;
      outline: none;
      cursor: pointer;
    }

    tbody input[type='text'] {
      width: 50px;
      float: left;
      height: 18px;
      text-align: center;
    }

    tbody .count-c {
      width: 98px;
      margin: 0 auto;
    }

    button[disabled] {
      color: #ddd;
      cursor: not-allowed;
    }

    tbody tr:hover {
      background: #eee;
    }

    tbody tr.active {
      background: rgba(241, 209, 149, 0.945);
    }

    .controls {
      width: 790px;
      margin: 10px auto;
      border: 1px solid #ccc;
      line-height: 50px;
      padding-left: 10px;
      position: relative;
    }

    .controls .del-all,
    .controls .clear {
      float: left;
      margin-right: 50px;
    }

    .controls p {
      float: right;
      margin-right: 100px;
    }

    .controls span {
      color: red;
    }

    .controls .pay {
      position: absolute;
      right: 0;
      width: 80px;
      height: 54px;
      background: red;
      font: bold 20px/54px '宋体';
      color: #fff;
      text-align: center;
      bottom: -1px;
    }

    .controls .total-price {
      font-weight: bold;
    }
  </style>
</head>

<body>
  <div class="car">
    <table>
      <thead>
        <tr>
          <th><input type="checkbox" id="all" />全选</th>
          <th>商品</th>
          <th>单价</th>
          <th>商品数量</th>
          <th>小计</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody id="carBody">
        <tr>
          <td>
            <input class="s_ck" type="checkbox" readonly />
          </td>
          <td>
            <img src="./images/01.jpg" />
            <p>牛奶</p>
          </td>
          <td class="price">5￥</td>
          <td>
            <div class="count-c clearfix">
              <button class="reduce" disabled>-</button>
              <input type="text" value="1" />
              <button class="add">+</button>
            </div>
          </td>
          <td class="total">5￥</td>
          <td>
            <a href="javascript:" class="del">删除</a>
          </td>
        </tr>
        <tr>
          <td>
            <input class="s_ck" type="checkbox" />
          </td>
          <td>
            <img src="./images/01.jpg" />
            <p>牛奶</p>
          </td>
          <td class="price">10￥</td>
          <td>
            <div class="count-c clearfix">
              <button class="reduce" disabled>-</button>
              <input type="text" value="1" />
              <button class="add">+</button>
            </div>
          </td>
          <td class="total">20￥</td>
          <td>
            <a href="javascript:" class="del">删除</a>
          </td>
        </tr>
        <tr>
          <td>
            <input class="s_ck" type="checkbox" />
          </td>
          <td>
            <img src="./images/01.jpg" />
            <p>牛奶</p>
          </td>
          <td class="price">30￥</td>
          <td>
            <div class="count-c clearfix">
              <button class="reduce" disabled>-</button>
              <input type="text" value="1" />
              <button class="add">+</button>
            </div>
          </td>
          <td class="total">20￥</td>
          <td>
            <a href="javascript:" class="del">删除</a>
          </td>
        </tr>
        <tr>
          <td>
            <input class="s_ck" type="checkbox" />
          </td>
          <td>
            <img src="./images/01.jpg" />
            <p>牛奶</p>
          </td>
          <td class="price">35￥</td>
          <td>
            <div class="count-c clearfix">
              <button class="reduce" disabled>-</button>
              <input type="text" value="1" />
              <button class="add">+</button>
            </div>
          </td>
          <td class="total">35￥</td>
          <td>
            <a href="javascript:" class="del">删除</a>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="controls clearfix">
      <a href="javascript:" class="del-all">删除所选商品</a>
      <a href="javascript:" class="clear">清理购物车</a>
      <a href="javascript:" class="pay">去结算</a>
      <p>
        已经选中<span id="totalCount">0</span>件商品;总价：<span id="totalPrice" class="total-price">0￥</span>
      </p>
    </div>
  </div>
  <script>
    // + - 删除是相同的，一一对应的，我们完全可以用一个for 来遍历规律
    let adds = document.querySelectorAll('.add');
    let reduce = document.querySelectorAll('.reduce');
    let del = document.querySelectorAll('.del');
    let prices = document.querySelectorAll('.price');
    let totals = document.querySelectorAll('.total')
    let totalPrice = document.querySelector('.total-price');
    let totalCount = document.querySelector('#totalCount');
    let carBody = document.querySelector('#carBody');


    //获取输入框
    let inputs = document.querySelectorAll('.count-c input');

    for (let i = 0; i < adds.length; i++) {
      totals[i].innerText = prices[i].innerText;
      result();
      //加号
      adds[i].addEventListener('click',function () {
        // alert('1');
        inputs[i].value++;
        reduce[i].disabled = false;
        //计算小计模块
        totals[i].innerText = parseInt(prices[i].innerText) * inputs[i].value + '￥';
        //计算总额
        result();
      })
      //减号
      reduce[i].addEventListener('click',function () {
        // alert('1');
        inputs[i].value--;
        //如果小于等于1 disable = true
        if (inputs[i].value <= 1){
          reduce[i].disabled = true;
        }
        //计算小计模块
        totals[i].innerText = parseInt(prices[i].innerText) * inputs[i].value + '￥';
        //计算总额
        result();

      })
      //删除操作
      del[i].addEventListener('click',function () {
        carBody.removeChild(this.parentNode.parentNode);
        //重新调用统计模块
        result();
      })



    }


    //计算总价格
    function result() {
      totals = document.querySelectorAll('.total');
      inputs = document.querySelectorAll('.count-c input');
      let sum = 0;
      let num = 0;
      for (let i = 0; i < totals.length; i++) {
        sum = sum + parseInt(totals[i].innerText);
        num = num + +inputs[i].value ;
        // console.log(sum);
      }
      totalPrice.innerText = sum + '￥';
      totalCount.innerText = num;
    }


    //div span ul li 标签 有文字内容 怎么得到或则设置文字内容呢， 元素.innerText  元素.innerHtml
    //表单 input 单选 复选 textarea select 怎么得到或设置值  表单的value
    //特殊的 button 是通过inner来设置

  </script>
</body>

</html>
```

## 六、事件对象以及属性

### 6.1 事件对象 e

事件对象也是对象，这个对象有事件触发时的相关信息

如何获取:

1. 在事件绑定的回调函数的第一个参数就是事件对象
2. 一般命名为event、ev、e

```
元素.addEventListener('click',function(e){
 console.log(e);
})
```

事件对象部分常用属性：

- type
  - 获取当前的事件类型
- clientX/clientY
  - 获取光标相对于浏览器可见窗口左上角的位置
- pageX/pageY
  - 获取当前浏览器页面 窗口左上角的位置
- offsetX/offsetY
  - 获取光标相对于**当前**DOM元素左上角的位置
- key
  - 用户按下的键盘键的值
  - 现在不提倡使用keyCode
- `e.preventDefault()`  阻止事件的默认行为

```javascript
document.addEventListener('click', function (e) {
    // console.log(11)
    // pageX 和 pageY 跟文档坐标有关系
    // console.log(e)
    console.log('clientX:' + e.clientX, 'clientY:' + e.clientY)    //可见区域坐标
    console.log('pageX:' + e.pageX, 'pageY:' + e.pageY)            //
    console.log('offsetX:' + e.offsetX, 'offsetY:' + e.offsetY)    //当前文档坐标
})
```

案例：

需求：一张图片一直跟着鼠标移动 分析： ①：鼠标在页面中移动，用到 mousemove 事件 ②：不断把鼠标在页面中的坐标位置给图片left和top值即可。

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        img {
            position: absolute;
            top: 0;
            left: 0;
        }
    </style>
</head>

<body>
    <img src="./images/tianshi.gif" alt="">
    <script>
        let img = document.querySelector('img');
        document.addEventListener('mousemove',function (e) {
            img.style.left = e.clientX -30 +'px';
            img.style.top = e.clientY -40 +'px';

        })

    </script>
</body>

</html>
```

回顾微博回车发布

```javascript
textarea.addEventListener('keyup',function (e) {
  // console.log(e.key)   通过这个来检测回车键
  if (e.key == 'Enter'){
      //自动出发 点击按钮发送事件
    send.click();
  }
```

案例：选中复选框是点击复选框的默认行为e.preventDefault()。下面这个例子说明了怎样阻止默认行为的发生：

```html
<p>Please click on the checkbox control.</p>

<form>
  <label for="id-checkbox">Checkbox:</label>
  <input type="checkbox" id="id-checkbox"/>
</form>

<div id="output-box"></div>
```

```JavaScript
document.querySelector("#id-checkbox").addEventListener("click", function(e) {
         document.getElementById("output-box").innerHTML += "Sorry! <code>preventDefault()</code> won't let you check this!<br>";
         e.preventDefault();
}, false);
```

### 6.2 事件流

事件流指的是事件完整执行过程中的流动路径

[![](https://img.up.cdn.nahida.cn/2022/08/image-20220815150401944.png)]

说明：假设页面里有个div，当触发事件时，会经历两个阶段，分别是捕获阶段、冒泡阶段 。 简单来说：捕获阶段是 从父到子 冒泡阶段是从子到父。

**事件冒泡概念**: 当一个元素的事件被触发时，同样的事件将会在该元素的所有祖先元素中依次被触发。这一过程被称为事件冒泡。简单理解：当一个元素触发事件后，**会依次向上调用所有父级元素的*同名事件*** 。 事件冒泡是默认存在的。

#### 阻止事件流动

因为默认就有冒泡模式的存在，所以容易导致事件影响到父级元素

 若想把事件就限制在当前元素内，就需要阻止事件流动

 阻止事件流动需要拿到事件对象

 语法： `事件对象.stopPropagation()`       `e.stopPropagation()`

 此方法可以阻断事件流动传播，不光在冒泡阶段有效，捕获阶段也有效

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .father {
            margin: 100px auto;
            width: 500px;
            height: 500px;
            background-color: pink;
        }

        .son {

            width: 200px;
            height: 200px;
            background-color: purple;
        }
    </style>
</head>

<body>
    <div class="father">
        <div class="son"></div>
    </div>
    <script>
        let fa = document.querySelector('.father')
        let son = document.querySelector('.son')
        fa.addEventListener('click', function (e) {
            alert('我是爸爸')
            e.stopPropagation()
        })
        son.addEventListener('click', function (e) {
            alert('我是儿子')
            // 阻止流动 Propagation 传播
            e.stopPropagation()
        })
        document.addEventListener('click', function () {
            alert('我是爷爷')
        })

        // btn.onclick = function() {}
    </script>
</body>

</html>
```

**拓展  鼠标经过事件：**

 mouseover 和 mouseout 会有冒泡效果

 **mouseenter 和 mouseleave 没有冒泡效果(推荐)**

**阻止默认行为，比如链接点击不跳转，表单域的跳转：**`e.preventDefault()`

```html
<body>
    <a href="http://www.baidu.com">跳转到百度</a>
    <script>
        let a = document.querySelector('a')
        a.addEventListener('click', function (e) {
            // 阻止默认行为 方法
            e.preventDefault()   //a标签就不会跳转。这个可以用于一些条件判断和流程控制等应用
        })
    </script>
</body>
```

**两种注册事件的区别**

传统on注册（L0）

-  同一个对象,后面注册的事件会覆盖前面注册(同一个事件)
-  直接使用null覆盖偶就可以实现事件的解绑  都是冒泡阶段执行的

 事件监听注册（L2）

-  语法: addEventListener(事件类型, 事件处理函数, 是否使用捕获)
-  后面注册的事件不会覆盖前面注册的事件(同一个事件)
-  可以通过第三个参数去确定是在冒泡或者捕获阶段执行
-  必须使用removeEventListener(事件类型, 事件处理函数, 获取捕获或者冒泡阶段)
-  匿名函数无法被解绑

```html
<body>
    <button>点击</button>
    <script>
        let btn = document.querySelector('button')
        // 1.l0 on
        // 多次相同的事件，只执行最后一次
        // btn.onclick = function () {
        //     alert('第一次')
        // }
        // btn.onclick = function () {
        //     alert('第二次')
        // }        
        
        // 解绑事件
        // btn.onclick = null
        
        
        // 2. addEventListener
        btn.addEventListener('click', add)
        function add() {
            alert('第一次')
        }
        // btn.addEventListener('click', function () {
        //     alert('第二次')
        // })    
        btn.removeEventListener('click', add)     //解绑事件。移除某事件的绑定的方法
    </script>
</body>
```

### 6.3 事件委托

事件委托是利用事件流的特征解决一些开发需求的知识技巧

总结：

 优点：给父级元素加事件（可以提高性能）

 原理：事件委托其实是利用事件冒泡的特点

 实现：事件对象.target 可以获得真正触发事件的元素

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<ul>
  <li>我是第1个小li</li>
  <li>我是第2个小li</li>
  <li>我是第3个小li</li>
  <li>我是第4个小li</li>
  <li>我是第5个小li</li>
</ul>

<script>
  //不要给每个li都添加事件了 而是把事件委托给他们的父亲元素
  //事件委托是给父级提娜佳事件 而不是孩子添加事件
  let ul  = document.querySelector('ul');
  ul.addEventListener('click',function (e) {
    // alert('我被点击了');
    e.target.style.color = 'red';      //e.target 获得父元素的被点击的那个对象
  })

</script>

</body>


</html>
```

### 6.4 综合案例

渲染学生信息案例

需求①：添加数据 点击录入按钮，把表单里面的值都放入数组里面 学号自动生成，是数组最后一个数据的学号+1

需求②：渲染 把数组的数据渲染到页面中，同时清空表单里面的值，下拉列表的值复原 注意，渲染之前，先清空以前渲染的内容 因为多次渲染，最好封装为函数

需求③：删除数据 为了提高性能，最好使用事件委托方式，找到点击的是链接 e.target.tagName 根据当前的删除链接，找到这条数据 需要会用findIndex 方法找到数组元素所在的索引号方便删除 然后使用 splice 来删除对应数据 重新渲染

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
<!--      <tr>-->
<!--        <td>1001</td>-->
<!--        <td>欧阳霸天</td>-->
<!--        <td>19</td>-->
<!--        <td>男</td>-->

<!--        <td>15000</td>-->
<!--        <td>上海</td>-->
<!--        <td>-->
<!--          <a href="javascript:">删除</a>-->
<!--        </td>-->
<!--      </tr>-->
    </tbody>
  </table>
  <script>
    //  1. 准备好数据后端的数据
    let arr = [
      { stuId: 1001, uname: '欧阳霸天', age: 19, gender: '男', salary: '20000', city: '上海' },
      { stuId: 1002, uname: '令狐霸天', age: 29, gender: '男', salary: '30000', city: '北京' },
      { stuId: 1003, uname: '诸葛霸天', age: 39, gender: '男', salary: '2000', city: '北京' },
    ];

    //

    //获取父元素
    let tbody = document.querySelector('tbody');
    //获得表单里面的值
    let unmae = document.querySelector('.uname');
    let age = document.querySelector('.age');
    let gender = document.querySelector('.gender');
    let salary = document.querySelector('.salary');
    let city = document.querySelector('.city');

    //渲染函数  把数组渲染到页面中
    function render() {
      //先干掉以前的数据，再渲染最新的数据
      tbody.innerHTML= '';

      //根据数据条数来渲染tr
      for (let i = 0; i < arr.length; i++) {
        //创建tr
        let tr = document.createElement("tr");
        //tr 里边放内容
        tr.innerHTML = `
        <td>${arr[i].stuId}</td>
        <td>${arr[i].uname}</td>
        <td>${arr[i].age}</td>
        <td>${arr[i].gender}</td>

        <td>${arr[i].salary}</td>
        <td>${arr[i].city}</td>
        <td>
          <a href="javascript:" id="${i}">删除</a>
        </td>
        `;

        //给tr追加到tbody   父元素.appendChild(子元素);
        tbody.appendChild(tr);

        ////复原所有的表单数据
        unmae.value ='';
        age.value ='';
        gender.value = '男';
        salary.value = '';
        city.value = '北京';

      }
    }
    render();

    //获取录入按钮
    let btn = document.querySelector('.add');
    btn.addEventListener('click',function () {
      //获得表单里面的值
      let unmae = document.querySelector('.uname');
      let age = document.querySelector('.age');
      let gender = document.querySelector('.gender');
      let salary = document.querySelector('.salary');
      let city = document.querySelector('.city');

      //加入数据
      arr.push({
        stuId: arr[arr.length -1].stuId + 1,
        uname: unmae.value,
        age: age.value,
        gender: gender.value,
        salary: salary.value ,
        city: city.value
      });
      // console.log(arr);
      render();   //渲染


    })

    //删除操作，删除也是数组里面的数据，用事件委托
    tbody.addEventListener('click',function (e) {
      //
      // 我们只能点击了链接a，才会执行删除操作
      //那么我怎么知道你点击了a呢
      //俺们只能点击了链接才能做删除操作
      //console.log(e.target.tagName);
      if (e.target.tagName ==='A'){
        // alert('A');
        //删除操作，删除数组里面的数据  arr.splice()
        //我要得到a的id
        // console.log(e.target.id);
        arr.splice(e.target.id,1);
        render();

      }

    })


  </script>
</body>

</html>
```

## 七、动画效果

```html
<!DOCTYPE html>
<html>

<head lang="en">
  <meta charset="UTF-8">
  <title>手风琴</title>
  <style>
    ul {
      list-style: none;
    }

    * {
      margin: 0;
      padding: 0;
    }

    div {
      width: 1200px;
      height: 400px;
      margin: 50px auto;
      border: 1px solid red;
      overflow: hidden;
    }

    div li {
      width: 240px;
      height: 400px;
      float: left;
      transition: all 500ms;
    }

    div ul {
      width: 1200px;
    }
  </style>
</head>

<body>
  <div id="box">
    <ul>
      <li>
        <a href="#">
          <img src="./images/1.jpg" alt="">
        </a>
      </li>
      <li>
        <a href="#">
          <img src="./images/2.jpg" alt="">
        </a>
      </li>
      <li>
        <a href="#">
          <img src="./images/3.jpg" alt="">
        </a>
      </li>
      <li>
        <a href="#">
          <img src="./images/4.jpg" alt="">
        </a>
      </li>
      <li>
        <a href="#">
          <img src="./images/5.jpg" alt="">
        </a>
      </li>
    </ul>
  </div>
</body>
<script>
  
  //1. li默认有个宽度是240px
  //2. 当我们鼠标经过，当前的小li 宽度变大到800px，其余的变到100px   //排他思想
  //3. 鼠标离开的时候，就恢复为原来的效果
  //获取元素
  let lis = document.querySelectorAll('li');
  //绑定鼠标经过和离开事件
  for (let i = 0; i < lis.length; i++) {
    //鼠标经过
    lis[i].addEventListener('mouseenter',function () {
      //排他思想  干掉所有人的100px,再复活自己的800px
      for (let j = 0; j < lis.length; j++) {
        lis[j].style.width = '100px';
      }
      this.style.width = '800px';
    });
    //鼠标离开
    lis[i].addEventListener('mouseleave',function () {
      //让所有的li变成240px
      for (let j = 0; j < lis.length; j++) {   // 事件触发执行，为了让所有li变成240宽的
        lis[j].style.width = '240px';
      }
    })

  }

</script>

</html>
```

### 7.1 滚动事件和加载事件

#### 7.1.1 滚动事件

 当页面进行滚动时触发的事件

 为什么要学？

  很多网页需要检测用户把页面滚动到某个区域后做一些处理， 比如固定导航栏，比如返回顶部 

 事件名：scroll

 监听整个页面滚动：

```javascript
window.addEventListener('scroll',function(){     //window是一个dom节点，换成其他节点也可以，div 等等
 执行操作
})
```

      给 window 或 document 添加 scroll 事件

  监听某个元素的内部滚动直接给某个元素加即可

#### 7.1.2 加载事件

加载外部资源（如图片、外联CSS和JavaScript等）加载完毕时触发的事件

  为什么要学？

   有些时候需要等页面资源全部处理完了做一些事情 

 老代码喜欢把 script 写在 head 中，这时候直接找 dom 元素找不到

 事件名：load

 监听页面所有资源加载完毕：

   给 window 添加 load 事件 

```javascript
window.addEventListener('load',function(){                 //window也可以换成其他dom节点
 //执行操作
})
```

 注意：不光可以监听整个页面资源加载完毕，也可以针对某个资源绑定load事件

#### 7.1.3 加载事件2

当初始的 HTML 文档被完全加载和解析完成之后，DOMContentLoaded 事件被触发，而无需等待样式表 、图像等完全加载

  事件名：DOMContentLoaded

  监听页面DOM加载完毕：

      给 document 添加 DOMContentLoaded 事件

```javascript
window.addEventListener('DOMContentLoaded',function(){                
 //执行操作
})
```

### 7.2 元素大小和位置

#### 7.2.1 scroll家族

使用场景： 我们想要页面滚动一段距离，比如100px，就让某些元素 显示隐藏，那我们怎么知道，页面滚动了100像素呢？ 就可以使用scroll 来检测页面滚动的距离。

[![](https://img.up.cdn.nahida.cn/2022/08/image-20220815172857114.png)]
**获取宽高：**

- 获取元素的内容总宽高（不包含滚动条）返回值不带单位
- scrollWidth和scrollHeight

 **获取位置:**

- 获取元素内容往左、往上滚出去看不到的距离
- scrollLeft和scrollTop
- 这两个属性是**可以修改**的

```javascript
div.addEventListenner('scroll',function(){
 console.log(this.scrollTop)
})
```

开发中，我们经常检测页面滚动的距离，比如页面滚动100像素，就可以显示一个元素，或者固定一个元素

```javascript
//页面滚动事件
window.addEventListener('scroll',function () {
  let num = document.documentElement.scrollTop;     //document.documentElement HTML文档返回对象为HTML元素
  console.log(num);
})
```

案例：

页面滚动显示返回顶部按钮

需求：当页面滚动500像素，就显示返回顶部按钮，否则隐藏， 同时点击按钮，则返回顶部 分析：

 ①：用到页面滚动事件

 ②：检测页面滚动大于等于100像素，则显示按钮

③：点击按钮，则让页面的scrollTop 重置为 0

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

        .content {
            width: 1000px;
            height: 3000px;
            background-color: pink;
            margin: 0 auto;
        }

        .backtop {
            display: none;
            width: 50px;
            left: 50%;
            margin: 0 0 0 505px;
            position: fixed;
            bottom: 60px;
            z-index: 100;
        }

        .backtop a {
            height: 50px;
            width: 50px;
            background: url(./images/bg2.png) 0 -600px no-repeat;
            opacity: 0.35;
            overflow: hidden;
            display: block;
            text-indent: -999em;
            cursor: pointer;
        }
    </style>
</head>

<body>
    <div class="content"></div>
    <div class="backtop">
        <img src="./images/close2.png" alt="">
        <a href="javascript:;"></a>
    </div>
    <script>
        //获取对象

        let backtop = document.querySelector('.backtop');

        //页面滚动事件
        window.addEventListener('scroll',function () {
            let num = document.documentElement.scrollTop;
            if (num >=500){
                backtop.style.display = 'block';
            }else {
                backtop.style.display = 'none';
            }
        })

        //点击链接返回顶部 backtop.children[1]
        backtop.children[1].addEventListener('click',function () {
            //返回顶部
            //scrollTop可读写
            document.documentElement.scrollTop = 0;
        })

    </script>
</body>

</html>
```

#### 7.2.2 offset家族

通过js的方式，得到元素在页面中的位置 这样我们可以做，页面滚动到这个位置，就可以返回 顶部的小盒子显示…

获取宽高：

- 获取元素的自身宽高、包含元素自身设置的宽高、padding、border

- `offsetWidth和offsetHeight`

获取位置：

- 获取元素距离自己**定位父级**元素的左、上距离
- **`ffsetLeft和offsetTop 注意是只读属性，不可以赋值`**

[![](https://img.up.cdn.nahida.cn/2022/08/image-20220815200624774.png)]

##### 7.2.1 仿京东固定导航栏案例

需求：当页面滚动到秒杀模块，导航栏自动滑入，否则滑出

分析： ①：用到页面滚动事件

    ②：检测页面滚动大于等于 秒杀模块的位置 则滑入，否则滑出

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

        .content {
            overflow: hidden;
            width: 1000px;
            height: 3000px;
            background-color: pink;
            margin: 0 auto;
        }

        .backtop {
            display: none;
            width: 50px;
            left: 50%;
            margin: 0 0 0 505px;
            position: fixed;
            bottom: 60px;
            z-index: 100;
        }

        .backtop a {
            height: 50px;
            width: 50px;
            background: url(./images/bg2.png) 0 -600px no-repeat;
            opacity: 0.35;
            overflow: hidden;
            display: block;
            text-indent: -999em;
            cursor: pointer;
        }

        .header {
            position: fixed;
            top: -80px;
            left: 0;
            width: 100%;
            height: 80px;
            background-color: purple;
            text-align: center;
            color: #fff;
            line-height: 80px;
            font-size: 30px;
            transition: all .3s;
        }

        .sk {
            width: 300px;
            height: 300px;
            background-color: skyblue;
            margin-top: 600px;
        }
    </style>
</head>

<body>
    <div class="header">我是顶部导航栏</div>
    <div class="content">
        <div class="sk">秒杀模块</div>
    </div>
    <div class="backtop">
        <img src="./images/close2.png" alt="">
        <a href="javascript:;"></a>
    </div>
    <script>
        let sk = document.querySelector('.content .sk');
        let header = document.querySelector('.header');
        //console.log(sk.offsetTop)

        window.addEventListener('scroll',function () {
            let num = document.documentElement.scrollTop;    //获得页面滑动的高度
            if (num >= sk.offsetTop){
                header.style.top = 0;
            }else {
                header.style.top = '-80px';
            }
        })




    </script>
</body>

</html>
```

##### 7.2.2 电梯导航案例

需求：点击可以页面调到指定效果

分析：

①：点击当前 小导航，当前添加active，其余移除active

②：得到对应 内容 的 offsetTop值

③：让页面的 scrollTop 走到 对应 内容 的 offsetTop

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
        * {
            margin: 0;
            padding: 0;
        }

        .aside {
            position: fixed;
            left: 0;
            top: 50%;
            transform: translateY(-50%);
        }

        .item {
            height: 40px;
            line-height: 40px;
            text-align: center;
            padding: 0 10px;
            cursor: pointer;
        }

        .active {
            background-color: red;
            color: #fff;
        }

        .content {
            width: 660px;
            margin: 400px auto;
        }

        .neirong {
            height: 300px;
            margin-bottom: 20px;
            color: #fff;
        }

        .content1 {
            background-color: red;
        }

        .content2 {
            background-color: blue;
        }

        .content3 {
            background-color: orange;
        }

        .content4 {
            background-color: yellowgreen;
        }
    </style>
</head>

<body>

    <div class="aside">
        <div class="item active">男装/女装</div>
        <div class="item">儿童服装/游乐园</div>
        <div class="item">电子产品</div>
        <div class="item">电影/美食</div>
    </div>

    <div class="content">
        <div class="neirong content1">男装/女装</div>
        <div class="neirong content2">儿童服装/游乐园</div>
        <div class="neirong content3">电子产品</div>
        <div class="neirong content4">电影/美食</div>
    </div>

    <script>
        let aside = document.querySelectorAll('.item');
        let goods = document.querySelectorAll('.neirong');

        for (let i = 0; i <aside.length ; i++) {
            //点谁到谁,谁高亮
            aside[i].addEventListener('click',function () {
                document.querySelector('.aside .active').classList.remove('active');   //找到上一个active类，移除
                this.classList.add('active');
                let num = goods[i].offsetTop;
                document.documentElement.scrollTop = num;    //让页面滚动到适当的位置
            })
            
        }


    </script>
</body>

</html>
```

#### 7.2.3 client家族

client当前可视区域

**获取宽高：**

  获取元素的**可见部分**宽高（不包含边框，滚动条等） 
 
  clientWidth和clientHeight 

**获取位置：**

  获取左边框和上边框宽度 
 
  clientLeft和clientTop 注意是只读属性

[![](https://img.up.cdn.nahida.cn/2022/08/image-20220815210225414.png)]
**会在窗口尺寸改变的时候触发事件**：`resize`

```
window.addEventListener('resize',function(){
      //执行的代码
})
```

**检测屏幕宽度**

```
window.addEventListener('resize',function(){
      let w = document.documentElement.clientWidth;    //检测屏幕宽度
      console.log(w);
})
```

三大家族的比较：

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
        }

        div {
            width: 150px;
            height: 150px;
            background-color: pink;
            overflow: auto;
            padding: 10px;
            border: 10px solid red;
            margin: 100px;
        }
    </style>
</head>

<body>
    <div>
        我有很多很多的内容哦
        我有很多很多的内容哦
        我有很多很多的内容哦
        我有很多很多的内容哦
        我有很多很多的内容哦
        我有很多很多的内容哦
        我有很多很多的内容哦
        我有很多很多的内容哦
        我有很多很多的内容哦
        我有很多很多的内容哦
        我有很多很多的内容哦
        我有很多很多的内容哦
        我有很多很多的内容哦
        我有很多很多的内容哦
    </div>
    <script>
        // scrollWidth scrollHeight  内容 宽高 （了解）
        let div = document.querySelector('div')
        console.log(div.scrollWidth)  // 150 不带单位
        console.log(div.scrollHeight)  // 336 不带单位
        console.log('----------------------------')
        // offset 盒子元素的大小 = 盒子本身的宽度和高度 + padding + border
        console.log(div.offsetWidth)  // 150 不带单位
        console.log(div.offsetHeight)  // 150 不带单位
        // console.log(div.offsetTop)  //
        // console.log(div.offsetLeft)
        //  client 当前可视区域  不包含滚动条  边框等等
        console.log('----------------------------')
        console.log(div.clientWidth)
        console.log(div.clientHeight)
        console.log(div.clientTop)  // 边框的宽度  了解  呵呵
        console.log(div.clientLeft)
        // 2. 被卷去的头部和左侧
        // div.addEventListener('scroll', function () {
        //     console.log(document.querySelector('div').scrollTop)
        // })


    </script>
</body>

</html>
```

## 八、综合案例

轮播图案例 分析：

 需求①：小图标鼠标经过事件 鼠标经过小图片，当前高亮，其余兄弟变淡 添加类

 需求② ：大图片跟随变化 对应的大图片跟着显示，如果想要过渡效果，可以使用opacity效果，可以利用CSS淡入 淡出的效果，还是添加类

需求③：右侧按钮播放效果 点击右侧按钮，可以自动播放下一张图片 需要一个变化量 index 不断自增 然后播放下一张图片 如果到了最后一张，必须要还原为第1张图片

教你一招： 索引号 = 索引号 % 数组长度 （放到播放前面）

需求④：解决一个BUG 点击右侧按钮可以实现播放下一张，但是鼠标经过前面的，播放就会乱序 解决方案： 让变化量（索引号） 重新赋值为 当前鼠标经过的索引号

需求⑤：左侧按钮播放效果 点击左侧按钮，可以自动播放上一张图片 需要一个变化量 index 不断自减 然后播放上一张图片 如果到了第一张，必须要从最后一张播放

教你一招： 索引号 = (数组长度 + 索引号) % 数组长度

需求⑥： 因为左侧按钮和右侧按钮里面有大量相同的操作，可以抽取封装一个函数 common

需求⑦：开启定时器 其实定时器自动播放，就相当于点击了右侧按钮，此时只需要， right.click()

需求⑧： 鼠标经过停止定时器 （清除定时器） 鼠标离开开启定时器 （开启定时器）

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>QQ音乐轮播图</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    li {
      list-style: none;
    }

    .main {
      width: 700px;
      margin: auto;
      background: #000;
    }

    .slides {
      height: 320px;
      position: relative;
    }

    .slides ul li {
      /* display: none; */
      position: absolute;
      top: 0;
      left: 0;
      opacity: 0;
      /* 这里实现淡入淡出的关键 */
      transition: all .3s;
    }


    .slides li.active {
      /* display: block; */
      opacity: 1;
    }

    .slides .extra {
      width: 700px;
      height: 53px;
      line-height: 53px;
      position: absolute;
      bottom: 0px;
      background-color: rgba(0, 0, 0, 0.8);
      z-index: 10;
    }

    .slides .extra h3 {
      width: 82%;
      margin: 0;
      margin-right: 20px;
      padding-left: 20px;
      color: #98E404;
      font-size: 28px;
      float: left;
      font-weight: 500;
      font-family: "Microsoft Yahei", Tahoma, Geneva;
    }

    .slides .extra a {
      width: 30px;
      height: 29px;
      display: block;
      float: left;
      margin-top: 12px;
      margin-right: 3px;
      background-image: url(./assets/icon_focus_switch.png);
    }

    .slides .extra .prev {
      background-position: 0 0;
    }

    .slides .extra .prev:hover {
      background-position: -30px 0;
    }

    .slides .extra .next {
      background-position: -60px 0;
    }

    .slides .extra .next:hover {
      background-position: -90px 0;
    }

    .indicator {
      padding: 10px 0;
    }

    .indicator ul {
      list-style-type: none;
      margin: 0 0 0 4px;
      padding: 0;
      overflow: hidden;
    }

    .indicator ul li {
      position: relative;
      float: left;
      width: 60px;
      margin: 0 4px 0 5px;
      text-align: center;

      cursor: pointer;
    }

    .indicator li img {
      display: block;
      border: 0;
      text-align: center;
      width: 60px;
    }

    .indicator li .mask {
      width: 60px;
      height: 60px;
      position: absolute;
      top: 0;
      left: 0;
      background-color: rgba(0, 0, 0, 0.4);
    }

    .indicator li .border {
      display: none;
      width: 54px;
      position: absolute;
      bottom: 0;
      left: 0;
      z-index: 20;
      border: 3px solid #98E404;
    }

    /* li里面的mask 和 border 刚开始都是显示的 */
    /* 我们写一个样式css */
    .indicator .active .mask {
      display: none;
    }

    .indicator .active .border {
      display: block;
    }
  </style>
</head>

<body>
  <div class="main">
    <div class="slides">
      <ul>
        <li class="active"><a href="#"><img src="./assets/b_01.jpg" alt="第1张图的描述信息"></a></li>
        <li><a href="#"><img src="./assets/b_02.jpg" alt="第2张图的描述信息"></a></li>
        <li><a href="#"><img src="./assets/b_03.jpg" alt="第3张图的描述信息"></a></li>
        <li><a href="#"><img src="./assets/b_04.jpg" alt="第4张图的描述信息"></a></li>
        <li><a href="#"><img src="./assets/b_05.jpg" alt="第5张图的描述信息"></a></li>
        <li><a href="#"><img src="./assets/b_06.jpg" alt="第6张图的描述信息"></a></li>
        <li><a href="#"><img src="./assets/b_07.jpg" alt="第7张图的描述信息"></a></li>
        <li><a href="#"><img src="./assets/b_08.jpg" alt="第8张图的描述信息"></a></li>
        <li><a href="#"><img src="./assets/b_09.jpg" alt="第9张图的描述信息"></a></li>
        <li><a href="#"><img src="./assets/b_10.jpg" alt="第9张图的描述信息"></a></li>
      </ul>

      <div class="extra">
        <h3>第1张图的描述信息</h3>
        <a class="prev" href="javascript:;"></a>
        <a class="next" href="javascript:;"></a>
      </div>
    </div>
    <div class="indicator">
      <ul>
        <li class="active">
          <img src="assets/s_01.jpg">
          <span class="mask"></span>
          <span class="border"></span>
        </li>
        <li>
          <img src="assets/s_02.jpg">
          <span class="mask"></span>
          <span class="border"></span>
        </li>
        <li>
          <img src="assets/s_03.jpg">
          <span class="mask"></span>
          <span class="border"></span>
        </li>
        <li>
          <img src="assets/s_04.jpg">
          <span class="mask"></span>
          <span class="border"></span>
        </li>
        <li>
          <img src="assets/s_05.jpg">
          <span class="mask"></span>
          <span class="border"></span>
        </li>
        <li>
          <img src="assets/s_06.jpg">
          <span class="mask"></span>
          <span class="border"></span>
        </li>
        <li>
          <img src="assets/s_07.jpg">
          <span class="mask"></span>
          <span class="border"></span>
        </li>
        <li>
          <img src="assets/s_08.jpg">
          <span class="mask"></span>
          <span class="border"></span>
        </li>
        <li>
          <img src="assets/s_09.jpg">
          <span class="mask"></span>
          <span class="border"></span>
        </li>
        <li>
          <img src="assets/s_10.jpg">
          <span class="mask"></span>
          <span class="border"></span>
        </li>
      </ul>
    </div>
  </div>
  <script>
    //获取元素
    let pics = document.querySelectorAll('.slides ul li');
    let indicators = document.querySelectorAll('.indicator li');
    let extra = document.querySelector('.extra h3');
    let rightBtn = document.querySelector('.next');
    let leftBtn = document.querySelector('.prev');
    let main = document.querySelector('.main');
    let index = 0;   //全局变量 控制器  信号量



    //需求①：小图标鼠标经过事件：鼠标经过小图片，当前高亮，其余兄弟变淡 添加类
    //给多个li绑定事件
    for (let i = 0; i < indicators.length; i++) {
      indicators[i].addEventListener('mouseenter',function () {
        document.querySelector('.indicator .active').classList.remove('active');
        this.classList.add('active');
        index = i;     //需求④：解决一个BUG

        //需求② ：大图片跟随变化:对应的大图片跟着显示，
        // 如果想要过渡效果，可以使用opacity效果，可以利用CSS淡入淡出的效果，还是添加类
        document.querySelector('.slides ul .active').classList.remove('active');
        pics[i].classList.add('active');
        extra.innerHTML = `第${i+1}张图的描述信息`;
      })
    }
    //需求③：右侧按钮播放效果,点击右侧按钮，可以自动播放下一张图片,
    // 需要一个变化量 index 不断自增,然后播放下一张图片,如果到了最后一张，必须要还原为第1张图片
    rightBtn.addEventListener('click',function () {
      index++;
      index = index % pics.length
      common(index);

    });

    // 需求⑤：左侧按钮播放效果
    leftBtn.addEventListener('click',function () {
      index--;
      index = (pics.length + index) % pics.length;
      common(index);

    });




    // 需求⑥：
    function common(index) {
      // if (index === 10) index = 0;

      //小图的操作：
      document.querySelector('.indicator .active').classList.remove('active');
      indicators[index].classList.add('active');

      //大图的操作
      document.querySelector('.slides ul .active').classList.remove('active');
      pics[index].classList.add('active');

      extra.innerHTML = `第${index+1}张图的描述信息`;
    }

    // 需求⑦：开启定时器
    let timer = setInterval(function () {
      //自动调用
      rightBtn.click();
    },1000)

    // 需求⑧：鼠标经过停止定时器 （清除定时器）、鼠标离开开启定时器 （开启定时器）
    main.addEventListener('mouseenter',function () {
      clearInterval(timer)
    });
    main.addEventListener('mouseleave',function () {
      timer = setInterval(function () {
        //自动调用
        rightBtn.click();
      },1000)
    });

  </script>
</body>


</html>
```
