---
title: Ajax
sidebar_position: 5
---
<!--# Ajax-->

Ajax 是浏览器中的技术：用来实现客户端网页请求服务器的数据。 它的英文全称是 Asynchronous Javascript And XML

## 一、 五种请求方式

| 请求方式 |                           具体含义                           |
| :------: | :----------------------------------------------------------: |
|   POST   |                       向服务器新增数据                       |
|   GET    |                       从服务器获取数据                       |
|  DELETE  |                      删除服务器上的数据                      |
|   PUT    |     更新服务器上的数据（全部更新：跟新某用户的全部信息）     |
|  PATCH   | 更新服务器上的数据（部分更新：更新用户的部分信息，比如手机号等） |

## 二、 axios

目前前端圈流行的Ajax的js库，中文网：<http://www.axios-js.com/>

原生代码比较复杂，先来讨论axios库。

### 2.1 axios 的基础语法

```JavaScript
axios({
      // 请求的url地址
      url: 'url地址',
      // 请求方式： get post delete put patch
      method: 'get'
    }).then(function (形参) {
      // 该回调函数会在请求成功的时候会来执行
      // 形参 result（对象） 里面包含有 服务器响应回来的结果（data属性中）
    })
```

```html
  <!-- 必须先导入 axios 的库文件，然后就可以调用 axios() 函数了 -->
  <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
  <script>
    // =================================== 目标 ===================================
    // 发起 GET 请求，获取图书列表的数据

    axios({
      // 请求的url地址
      url: 'yourUrl',
      // 请求方式： get post delete put patch
      method: 'get'
    }).then(function (result) {
      // 该回调函数会在请求成功的时候会来执行
      // 形参 result（对象） 里面包含有 服务器响应回来的结果（data属性中）
      console.log('该回调函数会在请求成功的时候会来执行')
      console.log(result)
      console.log(result.data) // 服务器响应回来的结果
    })
  </script>
</body>
```

### 2.2 GET的查询参数

刚才查询回来的是所有图书的列表数据，如果想指定查询的条件，可以通过 `params` 选项来指定查询的参数：

```JavaScript
axios({
  
  url: 'yourUrl',
  method: 'get',
    //通过params选项指定查询参数
  params:{
    id:2,
    author: "曹雪芹"
  }
}).then(function (result) {
  console.log('该回调函数会在请求成功的时候会来执行')
  console.log(result)
  console.log(result.data) // 服务器响应回来的结果
})
```

![](https://img.up.cdn.nahida.cn/2022/08/image-20220820094302936.png)

**查询参数的本质**

在使用 Ajax 发起 GET 请求时的参数，会以 ?键=值 的形式拼接到 URL 地址的末尾。

在 `params` 选项里面设置多个关键词时候，多个查询参数之间使用 & 符号进行分隔。

```
就相当于uri请求地址变为：(了解)

yourURL?id=1&author="曹雪芹"
```

### 2.3 js的编码问题

JavaScript提供了两个编码和解码的函数

编码： `encodeURI()`

解码：`decodeURI()`

```
console.log(encodeURI('西游记'))    //%E8%A5%BF%E6%B8%B8%E8%AE%B0
console.log(decodeURI('%E8%A5%BF%E6%B8%B8%E8%AE%B0'))    //西游记
```

### 2.4 GET的案例

#### 2.4.1 获取相关信息

```JavaScript
<!-- 导入axios -->
<script src="./lib/axios.js"></script>
<script>
  const list = document.querySelector('#news-list')

  // 步骤:
  // 1. 获取数据 ==> 通过 axios 发送GET请求
  //           请求地址: *****
  // 2. 渲染页面
  axios({
    url:'yourURL/api/news',
    method:'get'
  }).then(function (res) {
    console.log(res)
    console.log(res.data)
    console.log(res.data.code)    //对象.data 获取到服务器响应回来的数据
    console.log(res.data.data)    //对象.data.data  获取到服务器相应回来的文章相应的信息
  })
</script>
```

[![](https://img.up.cdn.nahida.cn/2022/08/image-20220820101015063.png)](https://img.up.cdn.nahida.cn/2022/08/image-20220820101015063.png)

#### 2.4.2  赋值解构

目的是快速取值

赋值解构的回顾：

```html
<body>
  <script>
    // 解构赋值：目的： 快速的取值 

    const obj = {
      username: 'zs',
      age: 18,
      car: {
        name: '劳斯莱斯',
        price: 1000
      },
      house: {
        name: '新疆海景房',
        price: 5
      }
    }

    // ========================= 取出对象obj的car和house属性 ========================= 
    // let car = obj.car
    // let house = obj.house
    // console.log(car)
    // console.log(car.name)
    // console.log(car.price)
    // console.log(house)
    // console.log(house.name)
    // console.log(house.price)

    // ========================= 解构赋值写法 =========================
    // let {car, house} = obj
    // console.log(car, house)

    // =========================  重命名 =========================
    // let { car: car2 } = obj
    // console.log(car2)
    // console.log(car) // 原来的car变量名无法使用的


    // =========================  深层解构 =========================
    let { car: { name, price } } = obj
    console.log(name, price)
    console.log(car)// 原来的car变量名无法使用的


    // let { house: { name, price } } = obj
    // console.log(name, price)

    // 对car 和 house 都深层解构，因为name，price都同名了，就必须重命名
    // let { house: { name, price }, car: { name: carName, price: carPrice } } = obj
    // console.log(name, price, carName, carPrice)


    // ========================= 解构赋值还可以用于在函数参数上 =========================
    // function fn(info) {
    //   console.log(info)
    //   let { car, house } = info
    //   console.log(car, house)
    // }

    // 改良fn函数写法
    // function fn({ car: { name, price }, house }) {
    //   console.log(name, price, house)
    // }

    // fn(obj)
    

    // function fn2([x, y, z]) {
    //   console.log(x, y, z)
    // }

    // fn2([10, 20, 30])
  </script>
</body>
```

所以新闻案例的解构赋值：

通过请求，从服务器返回了这一堆东西，用形参result表示：

![](https://img.up.cdn.nahida.cn/2022/08/image-20220820102948308.png)

1. 主要取得的是data部分的值，如果只需要data部分

```
{data} = result
```

```
axios({
  url: 'youURL/api/news',
  method: 'get'
}).then(({data:res}) => {
  //{data:res } 解构出来的data，并重命名为
  console.log(res)
})
```

主要是得到以下内容：

![](https://img.up.cdn.nahida.cn/2022/08/image-20220820103315539.png)

2. 服务器返回的信息的结构是：   `result{data:{code,msg,data}}`    ，所以，解构出data的数据要按照这个结构来

   ```
   {data:{code,mag,data}}
   ```

   ```javascript
   // 以下代码是在深层解构
   axios({
     url: 'yourURL/api/news',
     method: 'get'
   }).then(({data:{code,msg,data}}) => {
     console.log(code)
     console.log(msg)
     console.log(data)
   })
   ```

返回以下内容：

[![](https://img.up.cdn.nahida.cn/2022/08/image-20220820103808239.png)](https://img.up.cdn.nahida.cn/2022/08/image-20220820103808239.png)

#### 2.4.3 实现新闻列表的功能

```html
<script>
  const list = document.querySelector('#news-list')

  // 步骤:
  // 1. 获取数据 ==> 通过 axios 发送GET请求
  //           请求地址: yourURL/api/news
  // 2. 渲染页面

  axios({
    url: 'yourURL/api/news/api/news',
    method: 'get'
  }).then(({ data: res }) => {
         //获得data对象，并改名为res，为res对象：res:{code,data[],msg}
    console.log(res)
    if (res.code ===200){
      let htmlStr = ``
      res.data.forEach(items =>{         //遍历res.data[]数组
        htmlStr +=`
        <div class="news-item">
          <img class="thumb" src="http://www.xxxx.com:3009${items.img}" alt="" />
         <div class="right-box">
            <!-- 新闻标题 -->
            <h1 class="title">${items.title}</h1>
            <div class="footer">
              <div>
                <!-- 新闻来源 -->
                <span>${items.source}</span>  
                <!-- 发布日期 -->
                <span>${items.time}</span>
              </div>
              <!-- 评论数量 -->
              <span>评论数：${items.cmtcount}</span>
            </div>
          </div>
         </div>

        `
      })
      list.innerHTML = htmlStr
    }else {
      alert(res.msg)
    }

  })

</script>
```

#### 2.4.4  数组的map方式

回顾数组的map方法，映射得到新数组。

```JavaScript
 let arr = ['苹果', '榴莲', '梨子', '香蕉']

// 数组的map方法 映射得到新数组

 let arr2 = arr.map(item => `<li>${item}</li>`)
  console.log(arr2)
// arr2 = ['<li>苹果</li>', '<li>榴莲</li>', '<li>梨子</li>', '<li>香蕉</li>']
```

#### 2.4.5 将数组拼接为字符串

`join('拼接字符')` 回顾

```JavaScript
// 数组变字符串 ==> join() 把数组的每一项拼接成字符串
 let arr3 = ['哈哈', '小明', '嘻嘻']
 console.log(arr3.join('-'))   // '哈哈-小明-嘻嘻'
 console.log(arr3.join('❤️'))   // '哈哈❤️小明❤️嘻嘻'
 console.log(arr3.join(''))   // '哈哈小明嘻嘻'
```

2.4.6  使用map实现新闻列表案例

```html
  axios({
    url: 'yourURL/api/news',
    method: 'get'
  }).then(({ data: res }) => {
    // {data: res} 解构出来data，并且重命名为res（这对应的就是服务器响应回来的数据）
    // console.log(res)
    // console.log(res.code)
    // console.log(res.msg)
    // console.log(res.data)

    if (res.code === 200) {
      // 获取成功了 ==> 遍历res.data 数组，将其展示到页面中
      list.innerHTML = res.data.map(items =>`
        <div class="news-item">
          <img class="thumb" src="http://www.liulongbin.top:3009${items.img}" alt="" />
         <div class="right-box">
            <!-- 新闻标题 -->
            <h1 class="title">${items.title}</h1>
            <div class="footer">
              <div>
                <!-- 新闻来源 -->
                <span>${items.source}</span>  
                <!-- 发布日期 -->
                <span>${items.time}</span>
              </div>
              <!-- 评论数量 -->
              <span>评论数：${items.cmtcount}</span>
            </div>
          </div>
         </div>

        `).join('')    //得到新数组，并调用joib方法，将新数组拼接成字符串
    } else {
      // 获取失败了
      // alert('获取失败了')
      alert(res.msg)
    }
  })
</script>
```

### 2.5 POST的案例

#### 2.5.1 axios发送post请求

语法：

```JavaScript
axios({
        url:'http://yourPOSTURL',
        method:'post',
        data:{
          //要传给服务器的数据，具体要看api文档，查看对应的键值对
          //对于params data里面写啥，具体看后面学习的接口文档
        },
    params: {
      //查询链接 params选项可选，按需求使用该选项
    },
      }).then(function(形参){
        console.log(形参)   //这里的形参一般是服务器返回的信息，根据需要应用即可
      })   
```

案例：

```html
<body>
  <button id="btnPOST">新增数据</button>

  <script src="./lib/axios.js"></script>
  <script>
    // =================================== 点击按钮 ,发送 post请求 ===================================
    // 地址  http://yourPOSTURL
    // 参数  bookname 书名、 author 作者、 publisher 出版社
    document.querySelector('#btnPOST').addEventListener('click',()=>{
      axios({
        url:'http://yourPOSTURL',
        method:'post',
        data:{
          bookname:'巴巴托斯',
          author:'barbatos',
          publisher: '提瓦特出版社'
        }
      }).then(({data:res}) => alert(res.msg))
    })

  </script>
</body>
```

通过 Chrome 浏览器的 Network 网络请求面板，可以发现 POST 请求提交的数据，**并没有拼接到URL 地址的末尾**。POST 为了能够提交大量的数据，所以没有把数据拼接到 URL 的末尾；而是放到了独立的“请求体”中。

**注意：在浏览器中，GET 请求比较特殊：它只有查询参数，没有请求体**

#### 2.5.2  get和post的请求对比

 get请求方式：数据写在 params（查询参数，数据放到了url地址后面）
 
 post请求方式：数据写在data（数据在请求体）
 
 当请求方式为post的时候，既可以带params查询参数，也可以带data请求体数据

```JavaScript
// 注意点：
//  对于 axios 在使用的时候，method url data params 这些都是固定的配置，单词不能写错
//  对于params data里面写啥，具体看后面学习的接口文档
 axios({
  method: 'post',
  url: 'yourPOSTURL',

  // 查询参数
  params: {
    a: 1,
    b: 2
  },

  // 1. 当请求方式为post的时候，既可以带params查询参数，也可以带data请求体数据
  // 2. 当请求方式为get的时候，可以写params查询参数，写不写data按照实际需求
  data: {
    c: 3,
    d: 4
  }
}).then(({ data: res }) => {
  console.log(res)
}) 


//Request URL: yourPOSTURL?a=1&b=2
```

登录案例：

```html
<body>
  <div class="login-box">
    <div class="form-group">
      <label for="username">Account</label>
      <!-- 账号 -->
      <input type="text" class="form-control" id="username" autocomplete="off" />
      <small id="emailHelp" class="form-text text-muted">The available account is <strong>admin</strong></small>
    </div>
    <div class="form-group">
      <!-- 密码 -->
      <label for="password">Password</label>
      <input type="password" class="form-control" id="password" />
      <small id="emailHelp" class="form-text text-muted">The available password is <strong>123456</strong></small>
    </div>
    <button type="submit" class="btn btn-primary" id="btnLogin">Submit</button>
  </div>

  <script src="./lib/axios.js"></script>

  <script>
    // 请求方式 POST
    // 地址 yourPOSTURL
    // 参数:  username 用户名     password  密码  ==> 请求体参数，写在data中

    // 步骤
    //  1. 给按钮注册click
    //  2. 获取输入框的值 ==> value属性
    //  3. 使用axios发送请求，之后根据响应结果，做提示

    // 1. 
    document.querySelector('#btnLogin').addEventListener('click', function () {
      // 2. 
      let username = document.querySelector('#username').value
      let password = document.querySelector('#password').value
      // console.log(username, password)

      // 3. 
      axios({
        method: 'post', // post 无论大小写都是可以的
        url: 'yourPOSTURL',
        data: {
          // 对象属性简写
          username,
          password
        }
      }).then(({ data: res }) => {
        // 请求成功

        console.log(res) // res 服务器响应回来的数据

        // 200 是业务状态码（不是写死的，从响应体数据里面去看）
        if (res.code === 200) {
          // 登录成功
          alert('恭喜你，登录成功了，稍后跳转去首页')
          // location.href = 'http://www.jd.com'
        } else {
          // 登录失败
          alert(res.msg)
        }
      })
    })
  </script>
</body>
```

## 三、请求报文 & 响应报文

- **请求报文**规定了客户端以什么格式把数据发送给服务器
- **响应报文**规定了服务器以什么格式把数据响应给客户端

![](https://img.up.cdn.nahida.cn/2022/08/image-20220820152903334.png)

![](https://img.up.cdn.nahida.cn/2022/08/image-20220820152946940.png)

### 3.1 状态响应码

- 200 ok 请求成功
- 404 not found
- 500 服务异常
- 常见状态码：

![](https://img.up.cdn.nahida.cn/2022/08/image-20220820154058370.png)

### 3.2 区分相应状态码和业务码

1. 所处的位置不同：  
    - 在状态行中所包含的状态码，叫做“响应状态码”
    - 在响应体的数据中所包含的状态码，叫做“业务状态码”
2. 表示的结果不同：
    - 响应状态码只能表示这次请求的成功与否（成功或失败)
    - 业务状态码用来表示这次业务处理的成功与否
3. 通用性不同：
    - 响应状态码是由 http 协议规定的，具有通用性。每个不同的状态码都有其标准的含义，不能乱用.
    - 业务状态码是后端程序员自定义的，不具有通用性。

### 3.3 接口与接口文档

使用 Ajax 请求数据时，被请求的 URL 地址，就叫做数据接口（简称：接口或 API 接口）。同时，每个接口必须有对应的请求方式。

接口文档就是接口的使用说明书，它是我们调用接口的依据。

接口文档的接口信息

![](https://img.up.cdn.nahida.cn/2022/08/image-20220820155339547.png)

### 3.4 postman接口测试工具

案例：

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta http-equiv="X-UA-Compatible" content="ie=edge" />
  <link rel="stylesheet" href="css/reset.css" />
  <link rel="stylesheet" href="css/main.css" />
  <title>聊天机器人</title>
</head>

<body>
  <div class="wrap">
    <!-- 头部 Header 区域 -->
    <div class="header">
      <h3>小思同学</h3>
      <img src="img/person01.png" alt="icon" />
    </div>
    <!-- 中间 聊天内容区域 -->
    <div class="main">
      <ul class="talk_list" style="top: 0px;" id="talk_list">
        <!-- 机器人 -->
        <li class="left_word">
          <img src="img/person01.png" /> <span>嗨，最近想我没有？</span>
        </li>
        <!-- 我 -->
        <!-- <li class="right_word">
          <img src="img/person02.png" /> <span>嗨，最近想我没有？</span>
        </li> -->
      </ul>
    </div>
    <!-- 底部 消息编辑区域 -->
    <div class="footer">
      <img src="img/person02.png" alt="icon" />
      <input type="text" placeholder="说的什么吧..." class="input_txt" id="ipt" />
      <input type="button" value="发 送" class="input_sub" id="btnSend" />
    </div>
  </div>
  <script type="text/javascript" src="./js/axios.js"></script>
  <audio src="" id="voice" autoplay style="display: none;"></audio>
  <script>
    let ipt = document.querySelector('#ipt')
    let btnSend = document.querySelector('#btnSend')
    let ul = document.querySelector('#talk_list')
    let voice = document.querySelector('#voice')

    // 发布功能
    btnSend.addEventListener('click', sendValue)
    ipt.addEventListener('keyup',(e)=>{
      if (e.key === 'Enter') {btnSend.click()}     //敲击回车键发送内容
    })

    function sendValue() {
        // webapis 知识点
        // 自己说的话，显示到页面中（ul）
        // 步骤
        //  1. 获取ipt的内容
        //  2. 创建li ==> document.createElement()
        //  3. 设置内容 ==> innerHTML
        //  4. 添加到ul中 ==> appendChild

        let content = ipt.value
        //  console.log(content);
        ipt.value = ''
        let li = document.createElement('li')
        li.className = 'right_word'
        li.innerHTML=`
                <img src="img/person02.png" /> <span>${content}</span>
            `
        ul.appendChild(li)
        ul.scrollTop = ul.scrollHeight

        // 2.发送Ajax请求来获取机器人说的话
        axios({
          url:'url/api/robot',
          method:'get',
          params:{
            spoken: 'content'
          }
        }).then(({data:res})=>{
          let text = res.data.info.text
          let left_li = document.createElement('li')
          left_li.className = 'left_word'
          left_li.innerHTML = `<img src="img/person01.png" /> <span>${text}</span>`
          // 4.
          ul.appendChild(left_li)
          ul.scrollTop = ul.scrollHeight
          // 3.文字转语音，需要写到then里面
          //代码的位置要注意（text参数的传递）
          getVoice(text)
        })

        //ajax请求，将机器人的文字转语音
        function getVoice(text){
          axios({
            url: 'url/api/synthesize',
            method: 'get',
            params:{   //注意这里，日常会出错。axios的get没有data，记得传递查询text
              text
            }
          }).then(({data:res})=>{
            console.log(res)
            //将机器人的文字转语音的结果voiceUrl赋值给src属性
            voice.src = res.voiceUrl
          })
        }
    }
  </script>
</body>

</html>
```

## 四、from表单（了解）

### 4.1 表单

```html
<from>
    <div>
        <span>登录</span>
        <input type = 'txt' name = 'username'/>
    </div>
 <div>
        <span>密码</span>
        <input type = 'password' name = 'password'/>
    </div>
 <div>
        <button type = 'submit'>登录</button>
 </div>

</from>
```

注意：每个表单域必须包含 name 属性，否则用户填写的信息无法被采集到！

① type="submit" 表示提交按钮的意思

② type 属性的默认值就是 submit，因此type="submit" 可以省略不写

`<form>`标签的属性分别是 action、method 简介信息如下表所示：

|  属性  |     可选值      |                说明                |
| :----: | :-------------: | :--------------------------------: |
| action | 接口的 url 地址 | 把表单采集到的数据，提交到哪个接口 |
| method |   GET 或 POST   |   数据的提交方式（默认值为 GET）   |

```html
<from  action = 'url' method = 'GET'>
    <div>
        <span>登录</span>
        <input type = 'txt' name = 'username'/>
    </div>
 <div>
        <span>密码</span>
        <input type = 'password' name = 'password'/>
    </div>
 <div>
        <button>登录</button>
 </div>

</from>
```

由于 method 属性的默认值就是 GET，因此上述的 method="GET" 可以被省略！

```html
<from  action = 'url' method = 'POST'>
    <div>
        <span>登录</span>
        <input type = 'txt' name = 'username'/>
    </div>
 <div>
        <span>密码</span>
        <input type = 'password' name = 'password'/>
    </div>
 <div>
        <button type = 'submit'>登录</button>
 </div>

</from>
```

注意：采用get方式是属于明文传输数据，属于是在浏览器上就可以看到，极不安全。而post方式则没有出现这种情况，post会安全一些。

### 4.2 表单的缺点

 表单身兼数职：既负责采集数据，又负责把数据提交到服务器！表单的默认提交行为会导致页面的跳转。

解决方案：（符合：职能单一的原则）

 表单只负责采集数据；

 Ajax 负责将数据提交到服务器。

### 4.3 Ajax提交表单数据

```html
<body>
  <div class="login-box">
    <form>
      <div class="form-group mb-3">
        <label for="username">Account</label>
        <!-- 账号 -->
        <input type="text" class="form-control" name="username" id="username" autocomplete="off" />
        <small id="emailHelp" class="form-text text-muted">The available account is <strong>admin</strong></small>
      </div>
      <div class="form-group mb-3">
        <!-- 密码 -->
        <label for="password">Password</label>
        <input type="password" class="form-control" name="password" id="password" />
        <small id="emailHelp" class="form-text text-muted">The available password is <strong>123456</strong></small>
      </div>
      <button type="submit" class="btn btn-primary" id="btnLogin">Submit</button>
    </form>
  </div>

  <script src="./lib/axios.js"></script>
  <script>
    // 请求方式 POST
    // 地址 yourPOSTURL/api/login/login
    // 参数:  username 用户名     password  密码

    // 使用Ajax提交表单数据的步骤
    //  1. 监听表单的 submit 提交事件
    //  2. 阻止默认提交行为
    //  3. 基于 axios 发起请求
    //  4. 指定请求方式、请求地址、指定请求体数据
    document.querySelector('form').addEventListener('submit',(e)=>{
      e.preventDefault()
      let username = document.querySelector('#username').value
      let password = document.querySelector('#password').value
      axios({
        method: 'post',
        url: 'yourPOSTURL/api/login',
        data: {
          username,  //键值对 名字一致可以简写成一个
          password
        }
      }).then(({ data: res }) => {
        alert(res.msg)
      })
    })

  </script>
</body>
```

只有一两个参数的填写的表单可以用上述的方式实现post。但是如果是大量的表单数据的时候，则需要一个插件，帮忙处理表单数据：<https://www.npmjs.com/package/form-serialize>

获取到表单数据

```JavaScript
serialize(form)  //获得字符串  'username=admin&password=123456'
serialize(form, { hash: true })  // js对象 {username: 'admin', password: '123456'}

```

```html
<body>
  <div class="login-box">
    <form>
      <div class="form-group mb-3">
        <label for="username">Account</label>
        <!-- 账号 -->
        <input type="text" class="form-control" name="username" id="username" autocomplete="off" />
        <small id="emailHelp" class="form-text text-muted">The available account is <strong>admin</strong></small>
      </div>
      <div class="form-group mb-3">
        <!-- 密码 -->
        <label for="password">Password</label>
        <input type="password" class="form-control" name="password" id="password" />
        <small id="emailHelp" class="form-text text-muted">The available password is <strong>123456</strong></small>
      </div>
      <button type="submit" class="btn btn-primary" id="btnLogin">Submit</button>
    </form>
  </div>

  <script src="./lib/axios.js"></script>
  <script src="./lib/form-serialize.js"></script>

  <script>
    // 请求方式 POST
    // 地址 yourPOSTURL/api/login/login
    // 参数:  username 用户名     password  密码

    // 使用Ajax提交表单数据的步骤
    //  1. 监听表单的 submit 提交事件
    //  2. 阻止默认提交行为
    //  3. 基于 axios 发起请求
    //  4. 指定请求方式、请求地址、指定请求体数据

    // 引入form-serialize插件，提供 serialize 函数，从而获取表单数据
    // serialize(form表单的DOM对象)

    // let form = document.querySelector('form')

    // 都可以获取到表单数据
    // serialize(form)  // 'username=admin&password=123456'
    // serialize(form, { hash: true })  // js对象 {username: 'admin', password: '123456'}


    document.querySelector('form').addEventListener('submit', function (e) {
      // 2.              //↑这里不能写成箭头函数，否则serialize获取不了数据
      e.preventDefault()

      // 提交的时候，serialize插件来获取表单数据
      let data = serialize(this, {
        // {} 配置对象 hash 配置，可以将 收集到的表单数据是个js对象格式
        hash: true
      })
      console.log(data)

      // 3. 
      axios({
        url: 'yourPOSTURL/api/login/login',
        method: 'post',
        // 这个data不能省，否则没有提交数据给服务器
        data
      }).then(({ data: res }) => {
        console.log(res)
      })
    })
  </script>
</body>
```

## 五、文件上传

### 5.1 FormData

FormData 是浏览器提供的一个 WebAPI，它以键值对的方式存储数据。

应用场景：FormData + Ajax 技术实现文件上传的功能。

### 5.2 FormData 的基本用法

FormData 是一个**构造函数**，`new FormData()` 即可得到 FormData 对象：

```JavaScript
const fd = new FormData()
```

调用 FormData 对象的 `append(键, 值)` 方法，可以向空白的 FormData 中追加键值对数据，其中：

1. 键表示数据项的名字，必须是字符串
2. 值表示数据项的值，可以是任意类型的数据

```JavaScript
fd.append('username', '张三') // 键是 username，值是字符串类型
fd.append('age', 20) // 键是 age， 值是数字类型
fd.append('avatar', 图片文件) // 键是 avatar， 值是文件类型
```

```javascript
let fd = new FormData()
fd.append('username','Barbatos')
fd.append('age',5000)

fd.forEach((key,value)=>{
  console.log(key,value)   //使用对象的forEach()遍历该对象的元素，显示内容
})
```

### 5.3  FormData收集文件数据

文件域有change事件（监听文件域的change事件），当选择的文件发生了改变就会触发change事件

文件域也有files属性，这里存在用户选择的文件的信息

```html
<body>
  <input type="file" id="iptFile" accept="image/*" />
  <script>
    let iptFile = document.querySelector('#iptFile')

    // =========================== FormData的基本使用 ===========================

    // FormData 是构造函数，new FormData得到其实例对象

    let fd = new FormData() // 空的
    // fd.append(键, 值) // 键 必须是字符串类型
    // fd存选择好的文件数据
    // 文件域有change事件（监听文件域的change事件），当选择的文件发生了改变就会触发change事件
    iptFile.addEventListener('change', function () {

      console.log(this.files)
      console.log(this.files[0])

    })

  </script>
</body>
```

显示了如下效果：

[![](https://img.up.cdn.nahida.cn/2022/08/image-20220820230518874.png)](https://img.up.cdn.nahida.cn/2022/08/image-20220820230518874.png)

使用FormData收集文件数据：

```html
<body>
  <input type="file" id="iptFile" accept="image/*" />
  <script>
    let iptFile = document.querySelector('#iptFile')

    // =========================== FormData的基本使用 ===========================

    // FormData 是构造函数，new FormData得到其实例对象

    let fd = new FormData() // 空的

     fd.append(键, 值) // 键 必须是字符串类型

     fd.append('username', 'zs')
     fd.append('age', 19)

    // fd存选择好的文件数据

    // 文件域有change事件（监听文件域的change事件），当选择的文件发生了改变就会触发change事件
    iptFile.addEventListener('change', function () {
      // console.log('change事件触发了，文件改变了')

      // 如何去获取选择的文件 ==> FormData存文件
      // 需要借助于文件域的files属性，这存在用户选择的文件
      console.log(this.files)
      console.log(this.files[0])

      fd.append('photo', this.files[0])

       fd.forEach((value, key) => {
         console.log(key, value)
       })
    })

  </script>
</body>
```

### 案例：头像上传

api文档

![](https://img.up.cdn.nahida.cn/2022/08/image-20220820234103764.png)

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>案例-头像上传</title>
  <link rel="stylesheet" href="./lib/bootstrap-v4.6.0.css">
  <style>
    .thumb-box {
      text-align: center;
      margin-top: 50px;
    }

    .thumb {
      width: 250px;
      height: 250px;
      object-fit: cover;
      border-radius: 50%;
    }
  </style>
</head>

<body>
  <div class="thumb-box">
    <!-- 头像 -->
    <img src="./images/cover.jpg" class="img-thumbnail thumb" alt="">
    <div class="mt-2">
      <!-- 文件选择框 -->
      <!-- accept 属性表示可选择的文件类型 -->
      <!-- image/* 表示只允许选择图片类型的文件 -->
      <input type="file" id="iptFile" accept="image/*" style="display: none;" />
      <!-- 选择头像图片的按钮 -->
      <button class="btn btn-primary" id="btnChoose">选择 & 上传图片</button>
    </div>
  </div>
  <script src="./lib/axios.js"></script>
  <script>
    

    let btnChoose = document.querySelector('#btnChoose')
    let iptFile = document.querySelector('#iptFile')
    let img = document.querySelector('.thumb')
    let webUrl = 'https://img.up.cdn.nahida.cn'

    // 功能
    //  1. 点击按钮，弹出文件选择框
    //  2. 实现文件的上传功能
    //  3. 因为文件域的iptFile样式难改且丑，所以使用模拟点击的方式调用该文件域的方式  iptFile.click()
    btnChoose.addEventListener('click',function () {
      iptFile.click()   //点击样式好看的按钮，实现模拟点击文件域选择文件按钮
    })
    iptFile.addEventListener('change',function () {
      console.log(this.files)
      if (!this.files){
        return    //因为只要文件修改就会触发change事件，当原本是有文件而没有选择文件时候也会触发。
           //所以需要判断是否选择了图片，如果没有，则直接退出本函数
      }
      let fd = new FormData
      fd.append('avata',this.files[0])
      axios({
        url : 'yourPOSTURL/avatar',
        method : 'post',
        data: fd
      }).then(function ({data:res}) {
        console.log(res.url)
        img.src = webUrl + res.url
      })
    })

  </script>
</body>

</html>
```

## 六、请求体类型

请求体类型 Content-Type，客户端告诉服务器实际发送的数据类型

|              属性值               |                     应用场景                     |
| :-------------------------------: | :----------------------------------------------: |
| application/x-www-form-urlencoded | 表单中不包含文件上传的场景，适用于普通数据的提交 |
|        multipart/form-data        |             表单中包含上传文件的场景             |
|         application/json          |                 上传json格式数据                 |

如何查看客户端发送的数据类型呢？

谷歌浏览器或者是其他的了浏览器，打开（快捷键F12）,在控制面板NetWork：

![](https://img.up.cdn.nahida.cn/2022/08/image-20220821124053472.png)

```html
<body>

  <!-- 栅格系统 -->
  <div class="container-fluid">
    <!-- 栅格系统中的一行 -->
    <div class="row">
      <!-- 左侧的表格，占了 8 列 -->
      <div class="col-sm-8">
        <table class="table table-bordered table-striped table-dark table-hover text-center">
          <thead>
            <!-- 表头行 -->
            <tr>
              <th scope="col">Id</th>
              <th scope="col">书名</th>
              <th scope="col">作者</th>
              <th scope="col">出版社</th>
              <th scope="col">操作</th>
            </tr>
          </thead>
          <tbody>
            <!-- 表格中的每一行 -->
            <tr>
              <th scope="row">xxx</th>
              <td>xxx</td>
              <td>xxx</td>
              <td>xxx</td>
              <td>
                <button type="button" class="btn btn-link btn-sm btn-del">删除</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- 右侧的添加区域，占了 4 列 -->
      <div class="col-sm-4">
        <!-- 添加图书的卡片 -->
        <div class="card text-white bg-secondary sticky-top">
          <div class="card-header">添加新图书</div>
          <form class="card-body bg-light" id="addForm">
            <!-- 书名 -->
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text">书名</span>
              </div>
              <input type="text" class="form-control" placeholder="请输入图书名称" name="bookname" />
            </div>
            <!-- 作者 -->
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text">作者</span>
              </div>
              <input type="text" class="form-control" placeholder="请输入作者名字" name="author" />
            </div>
            <!-- 出版社 -->
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text">出版社</span>
              </div>
              <input type="text" class="form-control" placeholder="请输入出版社名称" name="publisher" />
            </div>
            <!-- 添加按钮 -->
            <button class="btn btn-dark" type="submit">添加</button>
          </form>
        </div>
      </div>
    </div>
  </div>

  <script src="./lib/form-serialize.js"></script>
  <script src="./lib/axios.js"></script>
  <script>
    // 功能
    // 1. 渲染数据
    // 2. 添加数据
    // 3. 删除数据


    let tbody = document.querySelector('tbody')
    let addForm = document.querySelector('#addForm')
    //功能一. 渲染数据
    function getBooks() {
      axios({
        url:'http://getURL/api/getbooks',
        method:'get',

      }).then(({data:res})=>{
        console.log(res)
        if (res.status !==200){
          alert('图书获取失败')
        }else {
          let arr = res.data.map(function (item) {
            return `<tr>
              <th scope="row">${item.id}</th>
              <td>${item.bookname}</td>
              <td>${item.author}</td>
              <td>${item.publisher}</td>
              <td>
                <button type="button" class="btn btn-link btn-sm btn-del" data-id="${item.id}">删除</button>
              </td>`                              ////为了后续的删除操作，特意在这里加上data-id的自定义属性设置id
          })
          tbody.innerHTML = arr.join('')

        }
      })
    }
    getBooks()

    // 功能二. 渲染数据
    addForm.addEventListener('submit',function (e) {
      e.preventDefault();
      let data  = serialize(this,{hash:true})

      axios({
        url:'http://POSTURL/api/addbook',
        method: 'post',
        data
      }).then(({data:res})=>{
        console.log(res)
        if (res.status !== 201){
          alert(res.msg)
        }else if(res.status === 201){}
          getBooks()
        //清空表单 js自带方法：reset()
        addForm.reset()
      })

    })

    //功能三：删除图书
    //因为列表是动态创建的，所以需要事件委托做法（删除按钮动摇创建）
    //做法：把事件委托给父元素
    //原理：事件冒泡
    //触发条件是谁？
    //自定义属性（规范做法）：在标签内部加上 data-自定义属性 = xxx特殊字符
    tbody.addEventListener('click',function (e) {
      if (e.target.classList.contains('btn-del')){
        //if成立 说明拥有 bet-del 类名的删除按钮
        //点击删除按钮的时候，需要自定义属性的值取出来
        let id = e.target.dataset.id
        console.log(id)
        axios({
          url:'http://YOURURL/api/delbook',
          method:'delete',
          params:{
            id
          }
        }).then(({data:res})=>{
          if (res.status === 200){
            getBooks()
          }else {
            alert(res.msg)
          }
          // console.log(res.msg)
        })
      }
    })



  </script>
</body>
```

### 扩展与回顾：自定义属性

自定义属性做法：data-自定义属性

在DOM对象上以dataset对象方式操作

```html
<div class="box" data-id="19">
    
</div>
<script>
    let box = document.querySelector('.box')
    console.log(box.dataset.id)
</script>
```

## 七、axios 请求方法的别名

### 7.1 axios的请求简写

为了简化开发者的使用过程，axios 为所有支持的请求方法提供了别名：

- `axios.get(url[, config])`
- `axios.delete(url[, config])`
- `axios.post(url[, data[, config]])`
- `axios.put(url[, data[, config]])`
- `axios.patch(url[, data[, config]])`

`[,config]`   `[,data [,config]]`根据实际需求添加内容。

示例

```html
<body>
  <button id="btnGET_1">GET不带参数</button>
  <button id="btnGET_2">GET带参数</button>

  <button id="btnPOST_1">POST不带请求体</button>
  <button id="btnPOST_2">POST带请求体</button>

  <script src="./lib/common.js"></script>
  <script src="./lib/axios.js"></script>

  <script>
    // GET请求接口地址: http://yourURL/get
    // POST请求接口地址: http://yourURL/post

    // ======================== 配置全局请求的根路径 ======================== 


    // axios的简写形式
    let getURL = 'http://yourURL/get'
    let postURL = 'http://yourURL/post'
    // ======================== 发送get请求，不带参数 ======================== 
    qs('#btnGET_1').addEventListener('click', function () {
        axios.get(getURL).then(function ({data:res}) {
          console.log(res)
        })
    })

    // ======================== 发送get请求，带参数 ======================== 
    qs('#btnGET_2').addEventListener('click', function () {
        axios.get(getURL,{
          params:{
            name:'zhangsan'
          }
        }).then(({data:res})=> console.log(res) )
    })

    // ======================== 发送post请求，不带参数 ======================== 
    qs('#btnPOST_1').addEventListener('click', function () {
        axios.post(postURL).then(({data:res})=>console.log(res))
    })

    // ======================== 发送post请求，带参数 ======================== 
    qs('#btnPOST_2').addEventListener('click', function () {
        axios.post(postURL,{
          //这个对象是data，放实体数据
            username:'barbatos',
            password:'123456'
          },{
            timeout:1000,   //config里边可以设置多种内容，比如设置超时时间，超过就取消响应
            params:{
              //带查询参数
              a:1,
              b:2
            }
        }).then(({data:res})=>console.log(res))


    })
  </script>
</body>
```

### 7.2 axios设置请求根路径

`axios.defaults.baseURL = '请求根路径'`

```html
<body>
  <button id="btnGET_1">GET不带参数</button>
  <button id="btnGET_2">GET带参数</button>

  <button id="btnPOST_1">POST不带请求体</button>
  <button id="btnPOST_2">POST带请求体</button>

  <script src="./lib/common.js"></script>
  <script src="./lib/axios.js"></script>

  <script>
    // GET请求接口地址: http://yourURL/get
    // POST请求接口地址: http://yourURL/post

    // ======================== 配置全局请求的根路径 ======================== 


    // axios的简写形式
    axios.defaults.baseURL = 'https://www.luomoe.com:3333'
    // ======================== 发送get请求，不带参数 ======================== 
    qs('#btnGET_1').addEventListener('click', function () {
        axios.get('api/get').then(function ({data:res}) {
          console.log(res)
        })
    })

    // ======================== 发送get请求，带参数 ======================== 
    qs('#btnGET_2').addEventListener('click', function () {
        axios.get('api/get',{
          params:{
            name:'zhangsan'
          }
        }).then(({data:res})=> console.log(res) )
    })

    // ======================== 发送post请求，不带参数 ======================== 
    qs('#btnPOST_1').addEventListener('click', function () {
        axios.post('api/post').then(({data:res})=>console.log(res))
    })

    // ======================== 发送post请求，带参数 ======================== 
    qs('#btnPOST_2').addEventListener('click', function () {
        axios.post('api/post',{
          //这个对象是data，放实体数据
            username:'barbatos',
            password:'123456'
          },{
            timeout:1000,   //config里边可以设置多种内容，比如设置超时时间，超过就取消响应
            params:{
              //带查询参数
              a:1,
              b:2
            }
        }).then(({data:res})=>console.log(res))


    })
  </script>
</body>
```

### 7.3 案例

```html
<body>

  <!-- 栅格系统 -->
  <div class="container-fluid">
    <!-- 栅格系统中的一行 -->
    <div class="row">
      <!-- 左侧的表格，占了 8 列 -->
      <div class="col-sm-8">
        <table class="table table-bordered table-striped table-dark table-hover text-center">
          <thead>
            <!-- 表头行 -->
            <tr>
              <th scope="col">Id</th>
              <th scope="col">书名</th>
              <th scope="col">作者</th>
              <th scope="col">出版社</th>
              <th scope="col">操作</th>
            </tr>
          </thead>
          <tbody>
            <!-- 表格中的每一行 -->
            <tr>
              <th scope="row">xxx</th>
              <td>xxx</td>
              <td>xxx</td>
              <td>xxx</td>
              <td>
                <button type="button" class="btn btn-link btn-sm btn-del">删除</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- 右侧的添加区域，占了 4 列 -->
      <div class="col-sm-4">
        <!-- 添加图书的卡片 -->
        <div class="card text-white bg-secondary sticky-top">
          <div class="card-header">添加新图书</div>
          <form class="card-body bg-light" id="addForm">
            <!-- 书名 -->
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text">书名</span>
              </div>
              <input type="text" class="form-control" placeholder="请输入图书名称" name="bookname" />
            </div>
            <!-- 作者 -->
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text">作者</span>
              </div>
              <input type="text" class="form-control" placeholder="请输入作者名字" name="author" />
            </div>
            <!-- 出版社 -->
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text">出版社</span>
              </div>
              <input type="text" class="form-control" placeholder="请输入出版社名称" name="publisher" />
            </div>
            <!-- 添加按钮 -->
            <button class="btn btn-dark" type="submit">添加</button>
          </form>
        </div>
      </div>
    </div>
  </div>

  <script src="./lib/form-serialize.js"></script>
  <script src="./lib/axios.js"></script>
  <script>
    // 功能
    // 1. 渲染数据
    // 2. 添加数据
    // 3. 删除数据


    let tbody = document.querySelector('tbody')
    let addForm = document.querySelector('#addForm')
    //全局配置
    axios.defaults.baseURL = 'http://www.luomeo.com:3006'
    //1. 渲染数据
    function getBooks() {
      axios.get('/api/getbooks').then(({data:res})=>{
        console.log(res)
        if (res.status !==200){
          alert('图书获取失败')
        }else {
          let arr = res.data.map(function (item) {
            return `<tr>
              <th scope="row">${item.id}</th>
              <td>${item.bookname}</td>
              <td>${item.author}</td>
              <td>${item.publisher}</td>
              <td>
                <button type="button" class="btn btn-link btn-sm btn-del" data-id="${item.id}">删除</button>
              </td>`                              ////为了后续的删除操作，特意在这里加上data-id的自定义属性设置id
          })
          tbody.innerHTML = arr.join('')

        }
      })
    }
    getBooks()

    // 2. 渲染数据
    addForm.addEventListener('submit',function (e) {
      e.preventDefault();
      let data  = serialize(this,{hash:true})
      axios.post('/api/addbook',data).then(({data:res})=>{
        console.log(res)
        if (res.status !== 201){
          alert(res.msg)
        }else if(res.status === 201){}
          getBooks()
        //清空表单 js自带方法：reset()
        addForm.reset()
      })

    })

    //功能三：删除图书
    //因为列表是动态创建的，所以需要事件委托做法（删除按钮动摇创建）
    //做法：把事件委托给父元素
    //原理：事件冒泡
    //触发条件是谁？
    //自定义属性（规范做法）：在标签内部加上 data-自定义属性 = xxx特殊字符
    tbody.addEventListener('click',function (e) {
      if (e.target.classList.contains('btn-del')){
        //if成立 说明拥有 bet-del 类名的删除按钮
        //点击删除按钮的时候，需要自定义属性的值取出来
        let id = e.target.dataset.id
        console.log(id)
        axios.delete('/api/delbook',{
          params: {id}
        }) .then(({data:res})=>{
          if (res.status === 200){
            getBooks()
          }else {
            alert(res.msg)
          }
          // console.log(res.msg)
        })
      }
    })



  </script>
</body>
```

## 八、了解 XMLHttpRequest 的基本用法

什么是 XMLHttpRequest ？是浏览器内置的一个构造函数

作用：基于 new 出来的 XMLHttpRequest 实例对象，可以发起 Ajax 的请求。

axios 中的 axios.get()、axios.post()、axios() 方法，都是基于 XMLHttpRequest（简称：XHR）封装出来的！

请大家思考：我们能否不用 axios 封装的 Ajax 函数，直接基于 XMLHttpRequest 发起Ajax 请求？答案：完全可以！

### 8.1 使用 XMLHttpRequest 发起 GET 请求

主要的 4 个实现步骤：

 ① 创建 xhr 对象

 ② 调用 xhr.open() 函数

 ③ 调用 xhr.send() 函数

 ④ 监听 load 事件

```html
<script>
  // =========================== 目标: 使用xhr发起GET请求 ===========================
  // 接口地址: yourURL/get
  // 请求方式： get

  // 步骤：
  // 1.创建一个xhr对象
  let xhr = new XMLHttpRequest()

  // 2.设置请求方式和请求地址 xhr.open("请求方式", "请求地址")
  xhr.open('get',' yourURL/get')
  //带参数的
    xhr.open('get',' yourURL/get?a=1&b=2')
  // 3.发送请求
  xhr.send()
  // 4.监听load(请求成功)事件
  xhr.addEventListener('load',function () {
    console.log(xhr.response)   //得到json字符串
    console.log(JSON.parse(xhr.response))


  })
</script>
```

### 8.2 使用 XMLHttpRequest 发起 POST 请求，并携带请求体数据

当需要携带请求体数据时，需要进行额外的两步操作：

 ① 在 xhr.open() 之后，调用 xhr.setRequestHeader() 函数，指定请求体的数据格式

 ② 在 xhr.send() 中，指定要提交的请求体数据

```html
<body>
  <script>
    // =========================== 目标: 使用xhr发起POST请求 ===========================
    //  接口地址: http://psotURL/api/post
    //  请求方式：post

    // 步骤：
    // 1.创建一个xhr对象
    let xhr = new XMLHttpRequest()
    // 2.设置请求方式和请求地址 xhr.open("请求方式", "请求地址")
    xhr.open('post','http://psotURL/api/post')
    // 3.设置请求体对应的编码格式 对应的是key=value&key=value
    xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded')
    // 4.发送请求  send(请求体数据)
    xhr.send('a=1&b=2')
    // 5.监听load(请求成功)事件
    xhr.addEventListener('load',function () {
      console.log(JSON.parse(xhr.response))
    })
  </script>
</body>
```

### 8.3 注意与补充

```
// 请求体数据  
            // 注意： data的值必须是有{}，这是错误的认知
            //  data的值是js对象，axios 发送请求体数据的时候，发送的是json格式数据
            //  看请求报文里面的Content-Type的值  application/json
            // data: {
            //     c: 3,
            //     d: 4
            // }
            
            
            // 键值对字符串格式   键=值&键=值
            // data的值也可以是键值对字符串格式，对应的Content-Type的值 application/x-www-form-urlencoded 
            // data: 'c=3&d=4'
            
            
            // data请求体数据也可以是FormData格式数据, 对应的Content-Type的值 multipart/form-data


```

## 九、数据交换格式

### 9.1  JSON 的本质和要求

[![](https://img.up.cdn.nahida.cn/2022/08/image-20220821165923750.png)](https://img.up.cdn.nahida.cn/2022/08/image-20220821165923750.png)

JSON（全称：JavaScript Object Notation）是一种数据交换格式，**它本质上是用字符串的方式**来表示对象或数组类型的数据。

用字符串的方式来表示的对象或数组类型的数据，叫做 JSON 数据。

    JSON 数据的格式有两种： ① 对象格式 ② 数组格式（JSON的本质是字符串）

**对象格式的 JSON 数据**，最外层使用 { } 进行包裹，内部的数据为 key: value 的键值对结构。

其中：

    ① key 必须使用英文的双引号进行包裹
 
    ② value 的值只能是字符串、数字、布尔值、null、数组、对象类型（可选类型只有这6 种）：

```json
    {
            "quality": 16,
            "format": "mp4",
            "new_description": "360P 流畅",
            "display_desc": "360P",
            "superscript": "",
            "codecs": [
                "avc1.64001E",
                "hev1.1.6.L120.90"
            ]
        }
```

**数组格式的 JSON 数据：**最外层使用 [ ] 进行包裹，内部的每一项数据之间使用英文的, 分隔。其中：每一项的值类型只能是字符串、数字、布尔值、null、数组、对象这 6 种类型之一。

[![](https://img.up.cdn.nahida.cn/2022/08/image-20220821172831348.png)](https://img.up.cdn.nahida.cn/2022/08/image-20220821172831348.png)

### 9.2 JSON的2个方法

调用浏览器内置的 `JSON.stringify()` 函数，可以把 **JS 数据**转换为 JSON 格式的字符串（序列化）。

调用浏览器内置的 `JSON.parse()` 函数，可以把 **JSON 格式的字符串**转换为 JS 数据（反序列化）。

[![](https://img.up.cdn.nahida.cn/2022/08/image-20220821173442316.png)](https://img.up.cdn.nahida.cn/2022/08/image-20220821173442316.png)

### 9.3 JSON 文件

在 JSON 文件中定义 JSON 格式的数据时，要遵守以下的 6 条规则：

 ① **属性名**必须使用**双引号**包裹

 ② **字符串类型的值**必须使用**双引号**包裹

 ③ JSON 中**不允许使用单引号**表示字符串

 ④ JSON 中**不能写注释**

 ⑤ JSON 的**最外层**必须是对象或数组格式

 ⑥ 不能使用 **undefined** 或**函数**作为 **JSON** 的值

### 9.4 原生xhr发送JSON数据

```JavaScript
  <script>
    /*
       目标: 使用xhr发起POST请求 
             接口地址: http://yourURL/api/post
             请求体数据格式为JSON数据
    */

    let obj = {
      name: 'zs',
      age: 20
    }

    // 1. 创建一个xhr对象
    let xhr = new XMLHttpRequest()

    // 2. 设置请求方式和请求地址
    xhr.open('post','http://yourURL/api/post')
    // 3. 设置请求头 中 请求体数据的编码格式
    xhr.setRequestHeader('Content-Type','application/json')
    // 4. 发送请求
    //需要自己来处理（把js对象处理成json数据）
    xhr.send(JSON.stringify(obj))         //序列化
    // 5. 监听load(请求成功)事件
    xhr.addEventListener('load',function () {
      console.log(JSON.parse(xhr.response))    //反序列化
    })
  </script>
```

## 十、Promise

### 10.1 异步函数 和回调函数的说明

**异步函数**：`setTimeout` `setInterval` `ajax` `fs.readFile` 异步函数的执行，由于是异步的，不会阻塞主线程代码的执行 。

什么是**回调函数**？ **把一个函数当成参数传递**, 将来特定的时机调用, 这个函数就叫回调函数。 一般异步操作，都会用到回调函数。

### 10.2 promise 的基本使用

promise解决回调地狱。

Promise 三种状态：

1. pending 进行中
2. fulfill  成功（已完成）
3. reject  失败（未完成）

[![](https://img.up.cdn.nahida.cn/2022/08/image-20220821205850586.png)](https://img.up.cdn.nahida.cn/2022/08/image-20220821205850586.png)

基本用法示例：

```JavaScript
<script>
    // =========================== Promise 介绍 =========================== 
    // 把一部代码封装写入搭配Promise种
    //Promise 三种状态：
    // 1. pending 进行中
    // 2. fulfill  成功（已完成）
    // 3. reject  失败（未完成）

    // =========================== Promise 基本语法 ===========================
    // Promise 是个构造函数，new Promise创建了实例对象
    //步骤：
    //  1. 许下诺言
    //  2. 获取诺言的结果

    //1. 许下诺言
    let p = new Promise((resolve,reject)=>{
      //参数世隔函数，把异步操作封装到该函数中
      console.log('当我考研上岸，我就一定好好学习')


      //许诺成功
      //当调用resolve(),会把promise 的状态变成fulfilled，成功（完成）
      // resolve('考上xx大学计算机学院研究生')

      //许诺失败
      //当调用reject(),会把promise 的状态变成rejected，失败（未完成）
      reject('再来一年')
    })
    console.log(p)

 //2. 获取诺言的结果
    // then...catch 方法获取诺言成功和失败的结果
    p.then((res)=>{
      //诺言成功的结果
      console.log(res,'好好学习天天向上')
    }).catch((err)=>{
      //诺言失败的结果
      console.log(err)
    })

  </script>
```

### 10.3 promise状态凝固

```JavaScript
<script>
  // =========================== 演示 promise 的状态是凝固的 ===========================
  // 一旦当promise状态发生改变，状态就会被凝固
  let p = new Promise((resolve, reject)=>{
    console.log('许诺了')

    resolve('许诺成功')  //fulfilled
    reject('许诺失败')   // rejected
  })
  console.log(p)


</script>
```

尽管后面跟了`reject('许诺失败')`，但是promise先调用了`resolve('许诺成功')`，这个promise的状态会凝固为完成状态，即`fulfilled`成功状态。如果这两个方法调用顺序互换，promise地状态则会凝固为`rejected`失败状态。

练习：

```html
<script>
  // =========================== 需求 ===========================
  // 点击按钮，来判断分数是否过线，如果超过，准备复试，如果没有的话，再来一年

  document.querySelector("button").onclick = function () {
    // 点击按钮的时候，许下诺言
    let p = new Promise((resolve, reject)=>{
      let score = parseInt(Math.random() * 500)
      console.log(score)
      if (score >= 273 ){
        resolve('准备复试，好好学习')
      }else {
        reject('没过线，再来一年')
      }
    })

    p.then((res)=>{
      console.log(res)
    }).catch((err)=>{
      console.log(err)
    })
  }
</script>
```

### 10.4 then返回值

promise链式编程：如果上一个 `.then` 中返回了一个新的 promise 对象， 则可以交给**下一个**`.then` 继续处理在 Promise 的链式操作中如果发生了错误，可以使用 `.catch` 方法进行捕获和处理

```html
<script>
  // =========================== Promise的链式调用 ===========================
  // then方法的返回值
  // 如果上一个.then() 方法中返回了一个新的Promise 实例对象，则可以通过下一个.then() 继续进行处理

  let p = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("结果1");    //状态 fulfilled 成功
    }, 2000);
  })

  // 获取到成功的结果
  p.then(res => {
    console.log("第一个then执行");
    console.log(res); // 
      
    // 再new一个promise  
    return new Promise((resolve, reject)=>{
      setTimeout(() => {
        resolve("结果2");    //状态 fulfilled 成功
      }, 2000);
    })
  }).then((res)=>{
    console.log('第二个then执行')
    console.log(res)
  })

</script>
```

### 10.5 优化

回调地狱：嵌套太多，头晕眼花

```html
<script>
    // =========================== 回调地狱 ===========================

    // 需求：延时2s秒输出红色，在延时1s输出黄色，之后在延时3s输出绿色
    // 回调函数的嵌套 ==> 回调地狱

    setTimeout(function () {
        console.log('is red')

        // 在开启延时器
        setTimeout(() => {
            console.log('is yeelow')

            setTimeout(() => {
                console.log('is green')

                setTimeout(function () {
                    console.log('is ok1')

                    // 在开启延时器
                    setTimeout(() => {
                        console.log('is ok2')

                        setTimeout(() => {
                            console.log('is ok3')


                        }, 3000)

                    }, 1000)

                }, 2000)


            }, 3000)

        }, 1000)

    }, 2000)
</script>
```

使用then返回值实现promise链式操作

```html
<script>
    // =========================== Promise解决回调地狱 ===========================
    // setTimeout(function () {
    //     console.log('is red')

    //     // 在开启延时器
    //     setTimeout(() => {
    //         console.log('is yeelow')

    //         setTimeout(() => {
    //             console.log('is green')


    //         }, 3000)

    //     }, 1000)

    // }, 2000)


    new Promise((resolve, reject) => {
        setTimeout(function () {
            resolve('is red') // 状态 fulfilled 成功  成功结果 is red
        }, 2000)
    }).then((res) => {
        console.log(res) // is red

        // return 新的promise 实例对象
        return new Promise((resolve, reject) => {
            setTimeout(function () {
                resolve('is yellow') // 状态 fulfilled 成功  成功结果 is yellow
            }, 1000)
        })
    }).then((res) => {
        console.log(res) // is yellow

        // return 新的promise 实例对象
        return new Promise((resolve, reject) => {
            setTimeout(function () {
                resolve('is green') // 状态 fulfilled 成功  成功结果 is green
            }, 3000)
        })
    }).then((res) => {
        console.log(res)
    })
</script>
```

**优化**

```html
<script>
    // =========================== 优化Promise解决回调地狱 ===========================
    // 将创建 promise 对象的过程，封装到一个函数中，需要promise对象，调函数即可
    function fn(color,time) {
        return new Promise((resolve, reject)=>{
            setTimeout(function () {
                let randomNum = Math.random()
                if(randomNum >=0.5){
                    resolve(color)
                }else{
                    catch('失败')
                }
                
            },time)
        })
    }

    fn('is red',2000).then((msg)=>{
        console.log(msg)
        return fn('is yello',1000)         //这里的return不可以省略
    }).then((res)=>{
        console.log(res)
        return fn('is yello',3000)
    }).then((res)=>{
        console.log(res)
    }).catch((err)=>{
        conlog.log(err)
        })
</script>
```

### 10.6  promise的静态方法

#### all方法

`Promise.all()` 等待机制

语法：`Promise.all([ promise1, promise2, ... ]).then( ... )`

特征：发起并行的promise异步操作，会等待所有的异步操作都完成，才会走 .then

#### race方法

`Promise.race()` 赛跑机制

语法：`Promise.race([ promise1, promise2, ... ]).then( ... )`

特征：发起并行的promise异步操作，只要任何一个异步操作完成，就会走 .then

示例：

```html
<script>
  // =========================== Promise的静态方法 ===========================

  // Promise.all([promise1, promise2, ... ]).then(... )
  //  参数是个数组，数组的每一项是promise对象，可以有若干个
  // 会等待所有的异步操作都完成，才会走.then

  // Promise.race([promise1, promise2, ... ]).then(... )
  // 只要任何一个异步操作完成，就会走.then





  // 演示
  // 获取图书接口       axios.get('/api/getbooks')
  // 获取新闻接口       axios.get('/api/news')
  // 测试get请求接口    axios.get('/api/get')

  // 设置接口的根路径
  axios.defaults.baseURL = 'http://www.luomoe.top:3006'


  // console.log(axios.get('/api/getbooks')) // promise实例对象
  // console.log(axios({})) // promise对象
  // console.log(axios.post()) // promise对象

  // axios.get('/api/getbooks').then(({ data: res }) => { })
 
  // 会等待所有的异步操作都完成，才会走.then  
  Promise.all([axios.get('/api/getbooks1232111'), axios.get('/api/news'), axios.get('/api/get')]).then((res) => {
    console.log(res) // 数组，里面每一项是axios请求成功的结果
  }).catch((err) => {
    // 只要有一个promise对象失败了，走到catch这
    console.log('在catch了', err)
  })

    
    
   //只要任何一个异步操作完成，就会走.then 
   Promise.race([axios.get('/api/getbooks'), axios.get('/api/news'), axios.get('/api/get')]).then((res) => {
     console.log(res) // 最先成功的结果（不是固定的）
   }).catch((err) => {
    // 所有的promise对象失败了，走到catch这
    console.log('在catch了', err)
  })
</script>
```

### 10.7、案例 - 封装自己的 Ajax 函数

```html
<body>
  <button id="btnGet">发送get请求</button>
  <button id="btnPost">发送post请求</button>

  <script>
    //  GET   http://www.liulongbin.top:3009/api/get
    //  POST  http://www.liulongbin.top:3009/api/post

    //封装myAxios() ajax 异步操作====> 需要promise来封装Ajax异步代码
    function myAxios({method = 'get',url,params,data}) {      //method默认为get
      return new Promise((resolve, reject)=>{
          //这里写Ajax异步代码
         //发送请求+ 处理相应
        //原生xhr
        //1. 创建出新的xhr对象
        //2. 方法、url地址 ==>open()
        //3. send(请求体数据) 发送请求

        //1.
        let xhr = new XMLHttpRequest()

        //2.
        if(params){
          let arr = []
          for (let key in params) {
            if (typeof params[key]=='string'){
              //如果是params[key]字符串,需要转码
              console.log(params[key])
              params[key] = encodeURI(params[key])
              console.log(params[key])
            }
            arr.push(`${key}=${params[key]}`)
          }
          url +=`?${arr.join('&')}`
          console.log(url)
        }


        //优化,统一转为小写
        method = method.toLowerCase()

        xhr.open(method,url)

        //3.
        // xhr.send(请求体数据)
        // 需要判断，请求方式不是get，而且有data的话，就来处理data数据
        if (method === 'get'){
          xhr.send()
        }else {

          if (data){

            xhr.setRequestHeader('Content-Type','application/json')
            xhr.send(JSON.stringify(data))
          }

        }


        //4. 处理相应
        xhr.addEventListener('load',function () {
          //服务器响应的结果： 把promise的状态fulfilled
          resolve(JSON.parse(xhr.response))
        })

        xhr.addEventListener('error',function () {
          reject('网络异常，请求失败')
        })
      })
    }

    // 发送get请求
    document.querySelector('#btnGet').addEventListener('click', function () {
        myAxios({
          url:'http://yourURL/api/get',
          method:'GET',
          params:{
            name:'张三',
            age:16
          }
        }).then(function (res) {
            console.log(res)
          }).catch((err)=>{
          console.log(err)
        })

    })

    // 发送post请求
    document.querySelector('#btnPost').addEventListener('click', function () {
      myAxios({
        url:'http://yourURL/api/post',
        method:'post',
        params:{
          name:'zs',
          age:16
        },
        data:{
          a:1,
          b:2
        }
      }).then(function ({data:res}) {
        console.log(res)
      })
    })

  </script>
</body>
```

导航：

```html
<body>
  <div class="container">
    <ul class="top">
      <li>
        <a href="javascript:;">首页</a>
        <ul class="sub">
          <li>
            <a href="javascript:;">
              <span>砂锅厨具</span>
              <img src="https://yanxuan.nosdn.127.net/3102b963e7a3c74b9d2ae90e4380da65.png?quality=95&imageView" alt="">
            </a>
          </li>
        </ul>
      </li>
    </ul>
  </div>

  <script src="https://static.cdn.luomoe.com/JavaScript_package/axios.js"></script>
  <script src="myAxios.js"></script>

  <script>
    // 具体看请求文档
    // 请求根路径为 http://yourURL.net
    let box = document.querySelector('.top')

    //获得一级目录
    myAxios({
      url:'http://yourURL.net/api/category/top',
      method:'get',
    }).then((res)=>{

      //继续发送请求，请求二级导航数据
      //map遍历数组并得到新数组
      let arr = res.data.map(item =>{
        return myAxios({
          url: 'http://yourURL.net/api/category/sub',
          method: 'get',
          params:{
            id: item.id
          }
        })
      })
      // console.log(arr)

      //如何获取所有的二级导航数据
      return Promise.all(arr)
    }).then((res)=>{

      box.innerHTML = res.map(items =>{

        //先处理二级导航
        let subStr = items.data.children.map(sub =>{
          return `
               <li>
                    <a href="javascript:;">
                      <span>${sub.name}</span>
                      <img src="${sub.picture}" alt="">
                    </a>
                </li>
          `
        }).join('')


        // 一级导航和二级导航
        return `
            <li>
              <a href="javascript:;">${items.data.name}</a>
              <ul class="sub">
                    ${subStr}
              </ul>
            </li>
        `
      }).join('')


    })


    // box.addEventListener()




  </script>
```

## 十一、async 和 await

### 11.1 基本使用

虽然我们用promise封装，解决了回调嵌套的问题=> 改链式了

但是多层嵌套时，链式的可维护性，可阅读性，也不太高，可以优化么？ 需要学习 async 和 await

```html
<script src="./lib/axios.js"></script>
<script>
    // async await基本使用
    //  异步终极解决方案：async  await
    //  是一对关键字，需要配合使用


    // ============================== 核心 ==============================
    // 1. async用于修饰一个函数, 表示一个函数是异步的
    //     如果async函数内没有await, 那么async没有意义的, 全是同步的内容
    //     只有遇到了await开始往下, 才是异步的开始
    // 2. await 要用在 async 函数中
    // 3. await 后面一般会跟一个promise对象,  await会阻塞async函数的执行,
    //     直到等到 promise成功的结果(resolve的结果)
    // 4. await 只会等待 promise 成功的结果, 如果失败了会报错, 需要 try catch


    // ============================== 核心1 ==============================
    // 1. async用于修饰一个函数, 表示一个函数是异步的
    //     如果async函数内没有await, 那么async没有意义的, 全是同步的内容
    //     只有遇到了await开始往下, 才是异步的开始

    // async function fn() {
    //     let num = await 1 + 10 // await 后面如果是表达式 ，await的结果就是该表达式的值
    //     console.log(num)  // 11
    // }
    // fn()
    // console.log(2)


    // ============================== 核心2 ==============================
    // await 要用在 async 函数中

    // function fn() {
    //     // error: await is only valid in async functions
    //     let num = await 1 + 10
    //     console.log(num)  // 11
    // }
    // fn()
    // console.log(2)


    // ============================== 核心3 ==============================
    // await 后面一般会跟一个promise对象,  await会阻塞async函数的执行,
    //     直到等到 promise成功的结果(resolve的结果)

    // axios.get('http://www.liulongbin.top:3006/api/getbooks')
    // axios.get('http://www.liulongbin.top:3006/api/getbooks').then(({data: res}) => {})

    // async function fn() {
    //     let { data: res } = await axios.get('http://www.yourURL:3006/api/getbooks')
    //     console.log(res) // axios请求成功的结果（图书）
    
   //先get完上面↑的promise对象，再完成下面↓的promise对象
    
    //     // 获取新闻列表数据
    //     let { data: resNews } = await axios.get('http://yourURL/api/news')
    //     console.log(resNews) // axios请求成功的结果（新闻）
    // }
    // fn()



    // ============================== 核心4 ==============================
    //   await 只会等待 promise 成功的结果, 如果失败了会报错, 需要 try catch

    // try catch 语法
    // try{
    //     // 放可以会出错的代码
    // }catch(e){
    //     // 一旦try中的代码报错了，会被catch捕获到，其中参数e就是错误消息
    // }

    async function fn() {

        try {
            let { data: res } = await axios.get('http://yourURL/api/getbooks')
            console.log(res) // axios请求成功的结果（图书）
        } catch (e) {
            console.log(e) // 错误消息
            alert('获取失败，请稍后重试~~~')
        }
    }
    fn()
</script>
```

### 11.2 解决回调地狱

```html
<script>
    
    function fn(color,time) {
        return new Promise((resolve, reject)=>{
            setTimeout(function () {
                resolve(color)
            },time)
        })
    }

    // 使用async await 解决回调地狱问题
    async function demo() {

        //await 后面跟promise对象
        let color1 =await fn('is red',2000)
        console.log(color1)

        let color2 =await fn('is yello',3000)
        console.log(color2)

        let color3 =await fn('is green',1000)
        console.log(color3)
    }
    demo()   //记得调用async函数

</script>
```

### 11.3 优化

```javascript
//立即执行函数:
//  ;(function(){})

;(async function () {

        //await 后面跟promise对象
        let color1 =await fn('is red',2000)
        console.log(color1)

        let color2 =await fn('is yello',3000)
        console.log(color2)

        let color3 =await fn('is green',1000)
        console.log(color3)
    })

;(async ()=> {

        //await 后面跟promise对象
        let color1 =await fn('is red',2000)
        console.log(color1)

        let color2 =await fn('is yello',3000)
        console.log(color2)

        let color3 =await fn('is green',1000)
        console.log(color3)
    })
```

导航栏的改写：

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Document</title>
  <link rel="stylesheet" href="./css/index.css" />
</head>

<body>
  <div class="container">
    <ul class="top">
      <!-- <li>
          <a href="javascript:;">首页</a>
          <ul class="sub">
            <li>
              <a href="javascript:;">
                <span>砂锅厨具</span>
                <img src="https://yanxuan.nosdn.127.net/3102b963e7a3c74b9d2ae90e4380da65.png?quality=95&imageView" alt="" />
              </a>
            </li>
          </ul>
        </li> -->
    </ul>
  </div>
  <script src="./lib/axios.js"></script>
  <script>
    let box = document.querySelector('.top')

    // 配置请求根路径
    axios.defaults.baseURL = 'http://yourURL.net';
    async function getNav() {
      //获得所有一级导航栏的信息，获得一级导航的id，然后由此获得二级导航的信息
      let {data:{data:res}} = await axios.get('/api/category/top')
      console.log(res)

      //获得所有二级导航栏的信息
      let topArr = res.map(items =>{
        return axios.get('/api/category/sub',{params:{id:items.id}})
      })
      let subRes = await Promise.all(topArr)      //得到所有二级导航栏的信息
      console.log(subRes)
      //遍历得到的二级导航栏信息数组，并插入导航栏中
      box.innerHTML = subRes.map(items=>{
        //先处理二级导航栏的信息
        let subStr = items.data.data.children.map(sub=> {
          return `
               <li>
                    <a href="javascript:;">
                      <span>${sub.name}</span>
                      <img src="${sub.picture}" alt="" />
                    </a>
                </li>
          `
        }).join('')
        return `
            <li>
              <a href="javascript:;">${items.data.data.name}</a>
              <ul class="sub">
                    ${subStr}
              </ul>
            </li>
        `
      }).join('')




    }
    getNav()
  </script>
</body>

</html>
```

## 十二、宏任务微任务

### 12.1 Event Loop 事件循环队列

[![](https://img.up.cdn.nahida.cn/2022/08/image-20220822162858375.png)](https://img.up.cdn.nahida.cn/2022/08/image-20220822162858375.png)

### 12.2 宏任务 和 微任务

**宏任务**

 主代码块, 定时器, 延时器的代码内容等都属于宏任务

 特征：上一个宏任务执行完, 才会考虑执行下一个宏任务

 注意点:

  1. js 主线程遇到异步的内容, 交给浏览器去等待, 不会阻塞主线程
  2. 一定是满足条件后的任务, 才会被添加到任务队列

**微任务**

  当前宏任务执行完，在下一个宏任务开始之前需要执行的任务

  promise 的 `.then` `.catch` 中的代码都属于微任务

![](https://img.up.cdn.nahida.cn/2022/08/image-20220822163628995.png)

```JavaScript
 // 宏任务：
    //  整个script标签代码
    //  定时器 延时器
    //  ajax代码

    // 微任务
    //  promise对象的then catch 代码

    // 宏任务 微任务 如何执行的
    //  1. 先执行宏任务
    //  2. 当宏任务执行结束了，再执行这个红任务的所有微任务（如果没有微任务，就不需要执行）
    //  3. 继续执行下一个宏任务了
```
