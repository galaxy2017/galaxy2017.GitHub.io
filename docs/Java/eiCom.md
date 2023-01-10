---
title: 八大常用类
sidebar_position: 2
---

# 八大常用类

<!--# Java八大常用类-->

## 一、设计原则

### 1.1 设计原则1  单一原则

高内聚，低耦合

### 1.2 设计原则2  开闭原则 OCP（重要）

对谁开放，对谁关闭

对扩展开放，对修改关闭

### 1.3 设计原则3  里氏替代原则

父类可以出现的地方，子类也可以出现（继承多态）

### 1.4 设计原则4  依赖倒置原则（重要）

核心是面向接口编程

### 1.5 设计原则5  接口分离原则

建立单一接口，不要建立庞大臃肿的接口，尽量细化接口，接口中的方法尽量少

### 1.6 设计原则6  迪米特法则

尽量降低类与类之间的耦合

两个类之间不必彼此通信

### 1.7 设计原则7  组合聚合复用原则

优先使用对象组合，而不是类继承（要尽量使用合成和聚合，尽量不要使用继承）

## 二、类与类之间的关系

### 2.1 继承、实现

### 2.2 依赖和关联

#### 2.2.1 依赖关系

一个类A使用到另一个类B，但是这种使用关系是具有偶然性、临时性、是非常弱的。但是类B的变化会影响到类A

类B作为类A的方法参数（或者==局部变量==存在）

#### 2.2.2 关联关系

比依赖关系强，必然的，长期的，强烈的

类B作为==成员变量==形成存在于类A中

一对一、一对多、多对多关系

```java
package oop2.demo03;

import java.util.ArrayList;
import java.util.List;

public class Test03 {

}


//人类
class People{
    //体现了人类与身份证类一对一的关系
    private Sfz s = new Sfz();
}

//身份证类
class  Sfz{

}

//===========================================================================
//学生类
class Student{
    private Clazz c = new Clazz();  //一个学生在一个班级中

}

//班级类
class Clazz{
    private Student[] arr = new Student[20];    //一个班级里有多个学生     一对多关系

    //或者
    private List<Student> list= new ArrayList<>();

}

//====================================================================================多对多
//教师类
class Teach{

    //一个老师可以带多个课程
    private List<Cou> list = new ArrayList<>();
}

//课程类
class Cou{

    //一个课程可以被多个老师带
    private List<Teach> list = new ArrayList<>();
}
```

## 2.3 聚合、组合

关联关系的细分出来的聚合、组合，关联关系的一些特例（一对多的具体分析）

#### 2.3.1 聚合

整体和部分的关系。整体部分可分离，整体的生命周期和部分的生命周期不同

（例如：计算机与CPU、公司与员工、班级与学生的关系）

#### 2.2.4 组合

整体和部分的关系。整体部分不可分离，比聚合更强，更加紧密

（例如人与头（器官）的关系）

### 三、常用类 1 包装类

#### 3.1 引入

包装类均位于java.lang 包

| 基本数据类型 |  包装类   |
| :----------: | :-------: |
|     byte     |   Byte    |
|   boolean    |  Boolean  |
|    short     |   Short   |
|     char     | Character |
|     int      |  Integer  |
|     long     |   Long    |
|    float     |   Float   |
|    double    |  Double   |

优点：

（1）某些方法的参数必须是对象，为了让基本数据类型的数据作为参数，提供包装类

（2）包装类还可以提供更多功能

（3）其他的特别重要的功能：比如可以实现字符串和基本数据类型之间的转换

```Java
package oop2.demo05;
    /*
    包装类的作用
     */
public class TestA {
    public static void main(String[] args) {
        String a = "10";

        int aa = 10;   //基本数据的类型
        Integer bb = new Integer(10);   //包装类表示的数据


        int i = Integer.parseInt(a);    //把String类型的数据转成int类型，a被转成int类型并存入i中
        int c = i * aa;           //
        
        //   Integer.parseInt()    常用：转化为int型
        //    Double.parseDouble()    转为为double型，其他的以此类推

        System.out.println(i);
        System.out.println(c);

        System.out.println(Integer.SIZE);    //32

        System.out.println(Integer.MAX_VALUE);
        System.out.println(Integer.MIN_VALUE);


    }
}
```

#### 3.2 自动装箱、自动拆箱

自动装箱   基本数据类型 ---> 包装类
自动拆箱   包装类---> 基本数据类型

```java
package oop2.demo05;


//基本类型的数据和包装类之间的相互转化
public class TestB {
    public static void main(String[] args) {
        int aa = 10;
        Integer bb = new Integer(aa);    //把基本的数据类型转为包装类

        int cc = bb.intValue();    //把包装类转成基本类型

       /*
        自动装箱   基本数据类型 ---> 包装类
        自动拆箱   包装类---> 基本数据类型
         */

        int a = 10;
        Integer b = a;     // 这是JDK的自动装箱  底层使用的是Integer.valueOf() 完成自动装箱过程

        int c = b;   //自动拆箱
                    // 底层使用intValue()完成自动拆箱的过程

    }
}
```

#### 3.3 自动装箱、自动拆箱的使用

注意：

1. JDK1.5 以后，增加了自动装箱和自动拆箱的功能。
2. 自动装箱调用valueOf() 方法，而不是new Integer()方法
3. 自动拆箱调用xxxValue() 方法
4. 包装类在自动装箱时，为了提高效率，对于-128~127之间的值会进行缓存处理。超过范围后，对象之间不能再使用==进行数值比较，而是使用equals方法

```java
package oop2.demo05;

public class TestC {
    public static void main(String[] args) {
        int a = 10;
        Integer b = 10;   //自动装箱
        System.out.println(a==b);            //自动拆箱   ture     b拆箱
        System.out.println(b.equals(a));     //自动装箱   ture     a装箱，判断a的值是否与b的值相同

        //==================================================================================

        Integer aa = new Integer(10);
        Integer bb = new Integer(10);

        System.out.println(aa == bb);        //False  aa与bb同一类型，不发生拆箱装箱。new两次Integer 缓存的物理地址不一样
        System.out.println(aa.equals(bb));   //true


        //======================================================================================

        Integer aaa = 122;    //自动装箱         在-128~127之内
        Integer bbb = 122;    //自动装箱


        System.out.println(aaa == bbb);         //true     aaa和bbb在-128~127之内,，此种写法，他们是同一类型，同一对象
        System.out.println(aaa.equals(bbb));    //true


        //======================================================================================

        Integer aaaa = 233;        //在-127~128之外，同一类型，同一对象
        Integer bbbb = 233;
        System.out.println(aaaa==bbbb);   //false   aaa和bbb在-128~127之外,相当于new两次Integer，导致了他们的物理地址不一致
        System.out.println(aaaa.equals(bbbb));   //这种情况下，只比较值大小是否相等，只能用equals方法

    }
}
```

## 四、 常用类 2 String类（重要，重点掌握）

字符串相关类，面试问的多，但是应用简单

String类的简单掌握方法

```java
package oop2.demo06;

import javax.sound.midi.Soundbank;
import java.util.Locale;
import java.util.UUID;

public class StringB {
    public static void main(String[] args) {

        String a = "beijing";
        String b = "";   //空字符串
        String c = null;  //空对象   不能使用isEmpty() 方法

        System.out.println(a.length());   //返回字符串的长度     重要
        System.out.println(b.isEmpty());   //是否为空
        System.out.println(a.startsWith("ei"));    //判断是否是以  ei 开头
        System.out.println(a.endsWith("ing"));   //判断是否是 以  ing 结尾
        System.out.println(a.toUpperCase());    //转换为英文大写
        System.out.println(a.toLowerCase());   //转为小写


        System.out.println("================================字符串查找方法（全部掌握）=======================");

        System.out.println(a.charAt(0));    //查找字符串中的第n个字母 （底层代码是以char类型的数组，数字从0开始）
        System.out.println(a.indexOf("i"));   //查找字符串中i，第一次出现的时候，数组索引数值，根据指定的字符串查询指定下标，找不到返回-1

        System.out.println(a.indexOf("j",2));   //从指定位置查询字符下标.从数组下标为（2）开始，顺序找，找到j的字符下标

        System.out.println(a.lastIndexOf("j",6));   //从数组下标为（6）开始找开始，倒序找，找到j的字符下标

        System.out.println(a.substring(2,6));  //从数组下标为（2）到数组下标（6）截取字符串，找到j的字符下标
        System.out.println(a.substring(2));    //从数组下标为（2）开始截取字符串，一直到结束


        String fileName = "2.3.93.jpg";
        int i = fileName.lastIndexOf(".");
        System.out.println(i);

        //文件后缀
        String substring = fileName.substring(i);
        System.out.println(substring);

        //文件名称
        String uuid = UUID.randomUUID().toString();   //随机生成文件名
        System.out.println(uuid+substring);



    }
}
```

### 4.1 字符串的分割、连接、去空格等方法

```java
package oop2.demo06;

import java.io.UnsupportedEncodingException;
import java.nio.charset.StandardCharsets;
import java.util.Arrays;

public class StringC {
    public static void main(String[] args) throws UnsupportedEncodingException {

        String str = "beijing北京";

        System.out.println("========================字符串中的转化方法======================");

        byte[] bytes = str.getBytes();

        String str2 = new String(bytes,"GBK");   //可以给指定的字符串进行重新的编码，我们以后会使用

        System.out.println(Arrays.toString(bytes));

        System.out.println("========================字符串中的拼接、替换、查询是否含有======================");

        String str3 = "b-j-n-u";
        System.out.println(str3.contains("b"));         //判断是否含有指定的字符串，掌握
        System.out.println(str3.replace("b","北"));     //把b替换成北  。替换指定的字符串内容，掌握
        System.out.println(str3.replaceAll("j","京"));   //替换指定的字符串内容，支持正则表达式，掌握


        System.out.println(str3.concat("yyy"));     //b-j-n-uyyy
        str3.concat("a");
        str3.concat("b");
        str3.concat("c");
        System.out.println(str3);    //b-j-n-u

        str3= str3.concat("a");
        str3= str3.concat("b");
        str3= str3.concat("c");
        System.out.println(str3);    //b-j-n-uabc
        //str3= str3.concat("a").concat("b").concat("c");

        System.out.println("========================字符串分割（掌握）======================");

        String str5 = "b-j-n-u";
        String[] split =  str5.split("-");
        System.out.println(Arrays.toString(split));     //分割，按照指定的字符位置开始分割字符串

        String str6 = " b j n u ";
        System.out.println("------->"+str6.trim()+"<--------");   //去除字符串中的开始和结束的空格


    }
}
```

### 4.2  字符串的比较大小

```java
package oop2.demo06;

public class StringD {
    public static void main(String[] args) {
        String str = "bjnu";
        String str2 = "Bjnu";

        System.out.println(str.equals(str2));   //是否相等
        System.out.println(str.compareTo(str2));   //比较两个字符串的大小，区分大小写的
        System.out.println(str.compareToIgnoreCase(str2));  //   比较字符串的大小写，不区分大小写
    }
}
```

### 4.3 举例子

```java
package oop2.home;
/*
    获得指定后缀yy.uu.jj.png
 */

public class Demo1 {
    public static void main(String[] args) {
        String str = "yy.uu.jj.png";
        int i = str.lastIndexOf(".");     //获得最后一个.的下标
        System.out.println(str.substring(i));   //根据最后一个点的下标，开始截取
    }
}
```

```java
package oop2.home;
/*
    按照要求把对应学科提取出来   ”java-前端-AI-后台-大数据“
 */

import java.util.Arrays;

public class Demo2 {
    public static void main(String[] args) {
        String str = "java-前端-AI-后台-大数据";
        String[] split = str.split("-");
        System.out.println(Arrays.toString(split));
    }
}
```

```java
package oop2.home;

/*
    从键盘录入一个String身份证，判断是否合法：
    位数是否是18位数
    前17位数必须是数字
    最后一位可以是数字或者是X
 */

public class Demo3 {
    public static void main(String[] args) {
        String str = "440906200001253285";

        if(str.length()==18){
            for (int i = 0; i < str.length()-1; i++) {
                char c = str.charAt(i);
                if(!Character.isDigit(c)){
                    System.out.println("用户身份证前17位必须是数字");
                    return;
                }
            }
            char c2 = str.charAt(17);
            if(Character.isDigit(c2)||"X".equals(Character.toString(c2))||'X'==c2){
                System.out.println("身份证合法");
            }else {
                System.out.println("不合法");
            }

        }else {
            System.out.println("身份证必须是18位");
        }


    }


}
```

```java
package oop2.home;
/*
    校验一个邮箱是否合法：123456789@qq.com
    必须有@
    . 和 @不能在开头和结尾
    .必须在@之后，且不能相邻
    不能有连续的两个.
    @只能有一个
    . 只能有一个

 */

public class Demo4 {
    public static void main(String[] args) {
        String str = "123456789@qq.com";

        //获得第一个@的下标
        int a1 = str.indexOf("@");


        //获得最后一个@的下标
        int a2 = str.lastIndexOf("@");


        //获得第一个 .  的位置
        int b1 = str.indexOf(".");


        //获得最后一个  . 的位置
        int b2 = str.lastIndexOf(".");


        //获得 .. 的下标
        int i = str.indexOf("..");

        /*
            b1>a1+1   所表达的含义
            b1的值一定是大于0
            @的位置在 . 之前的    @的位置就一定不会在最后
            . 必须在@之后且不相邻
         */

        if (a1>0 && a1==a2 && b1>a1+1 && b2<str.length()-1 && i<0){
            System.out.println("合法");
        }else {
            System.out.println("非法");
        }

    }
}
```

## 五、常用类 3 StringBuffer和StringBuilder类

StringBuffer和StringBuilder 非常类似，均代表可变的字符序列。这两个类都是抽象类的，方法一模一样

StringBuffer线程安全，做线程同步检查，效率低

StringBuilder线程不安全，不做线程同步检查，效率较高，建议使用该类

### 5.1 StringBuilder的使用

速度对比：

```java
package oop2.demo06;

public class StringF {
    public static void main(String[] args) {
        String str = "bnu";
        StringBuilder builder = new StringBuilder();
        long l = System.currentTimeMillis();
        for (int i = 0; i < 100000; i++) {
            //str = str.concat("sxt");
            //builder.append("sxt");
        }

        long l1 = System.currentTimeMillis();
        System.out.println(l1-l);     //查看运行的时间，用以对比StringBuilder 和String运行的速度
    }
}
```

##### 一些常用方法

```java
package oop2.demo06;

public class StringG {
    public static void main(String[] args) {

        //String s = "bnu";
        StringBuilder builder = new StringBuilder("bnu");
        builder.append("北京师范大学");     //内容追加的方法 ，常用。
        builder.insert(0,"BNU");   //指定的位置插入字符串。数组下标从0开始
        char c = builder.charAt(2);   //取出指定下标字符
        builder.setCharAt(3,'J');    //设置指定位置的的字符
        builder.replace(0,4,"北师大");    //进行指定位置的字符替换  [0,4)
        builder.deleteCharAt(3);  //删除指定位置字符
        builder.delete(1,3);   //删除多个字符 [1, 3)
        builder.reverse();   //倒序输出字符串

        System.out.println(builder);
        System.out.println(c);

        //String类型与  StringBuilder类 互转
        String str = "bnu";
        StringBuilder stringBuilder = new StringBuilder(str);
        String s = stringBuilder.toString();


    }
}
```

### 5.2 一些面试题

StringBuilder 底层默认char数组长度为16

StringBuilder 底层的扩容机制 是   ：  原有的数组长度*2+2

```java
package oop2.demo06;

public class StringL {
    public static void main(String[] args) {
        String str = "abcd";
        String a = "a";
        String b = "b";
        String c = "c";
        String d = "d";
        //字符串拼接的时候，如果全部是常量 ，和直接写一个结果的含义是一样的
        String str2 = "a" + "b" + "c" + "d";    //创建了几个对象？  1个


        String str3 = a+b+c+d;     //创建了1个对象
        //只要含有变量的连接，采用的就是优化的机制:
        StringBuilder builder = new StringBuilder();
        builder.append(a);
        builder.append(b);
        builder.append(c);
        builder.append(d);



        System.out.println(str==str2);  //true
        System.out.println(str2==str3);  //false
    }
}
```

## 六、常用类 4 Date类和DateFormat类

我们把1970年1月1日00：00：00 定为基准时间

### 6.1 Date类

大部分方法已过时，不常用

```java
package oop2.date;
/*
    Date中的三个类

    sql包下的类
    Date: 只含有年月日
    Time: 只含有时分秒
    Timestamp: 时间戳，既含有年月日，又含有时分秒
 */

import java.sql.Date;

public class DateB {
    public static void main(String[] args) {
        //只含有年月日 ，没有时分秒
        java.sql.Date date1 = new java.sql.Date(System.currentTimeMillis());
        System.out.println(date1);

        String d = "2019-9-10";
        Date date = Date.valueOf(d);
        System.out.println(date);      //字符串类型转化为Date类型
    }
}
```

### 6.2 DateFormat类

日期格式化的类

```java
package oop2.date;
/*
    作用：格式化日期类
 */

import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

public class DateFormatA {
    public static void main(String[] args) throws ParseException {
        Date date = new Date();
        System.out.println(date);

        //时间格式化
        DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd hh:mm:ss");    // 也可以：  yyyy年MM月dd日 hh:mm:ss
    //    DateFormat dateFormat2 = new SimpleDateFormat("yyyy年MM月dd日 hh:mm:ss");

        //调用格式方法
        String format = dateFormat.format(date);
    //    String format2 = dateFormat2.format(date);

        System.out.println(format);
    //    System.out.println(format2);


        System.out.println("===================  [B]  String类型转为Date类型  ====================================");

        String str = "2020-09-09 09:09:09";
        DateFormat dateFormat1 = new SimpleDateFormat("yyyy-MM-dd hh:mm:ss");  //转的格式和string的格式要一致
        Date parse = dateFormat1.parse(str);
        System.out.println(parse);

    }
}
```

## 七、常用类 5 Calendar类（日历类）

在1.7 1.8版本还能用，到高版本也已经过时了。

```java
package oop2.date;

import java.util.Calendar;
import java.util.Date;
import java.util.GregorianCalendar;

public class MyCalendar {
    public static void main(String[] args) {
        //创建日历类对象

        Calendar calendar = new GregorianCalendar();
        System.out.println(calendar);
        System.out.println(calendar.get(Calendar.YEAR));
        System.out.println(calendar.get(Calendar.MONTH));
        System.out.println(calendar.get(Calendar.DAY_OF_MONTH));

        System.out.println(calendar.get(Calendar.HOUR));

        //可以对年月日进行修改实现
        calendar.set(Calendar.MONTH,6);

        System.out.println(calendar.get(Calendar.MONTH));

        int max = calendar.getMaximum(Calendar.DATE);    //获得本月中一共有多少天
        System.out.println(max);


        /*
            Calendar和Date 类可以相互转换
         */

        //把日期类对象转成日历类对象
        Date date = new Date();
        Calendar calendar1 = new GregorianCalendar();
        calendar1.setTime(date);


        //把日历类对象转化为日期类
        Date time = calendar1.getTime();

    }
}
```

## 八、常用类 6 JDK8的新日期类

引入了 java.time 包  。少用的。常用的还是Date和DateFormat类

```java
package oop2.date;

import java.time.Instant;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

/**
 * JDK1.8中新增加的
 */

public class MyTimeA {
    public static void main(String[] args) {

        //Instant
        Instant now = Instant.now();
        System.out.println(now);
        System.out.println(now.MAX);
        System.out.println(now.MIN);
        System.out.println(now.EPOCH);


        //LocalDate    这个只含有年月日
        LocalDate localDate = LocalDate.now();
        System.out.println(localDate);

        //DateTimeFormatter
        DateTimeFormatter dft = DateTimeFormatter.ofPattern("yyyy年MM月dd日");
        String format = localDate.format(dft);
        System.out.println(format);

        // String 类型转LocalDate
        LocalDate.parse("2029年09月10日",dft);

    }
}
```

## 九、常用类 7 Math类和Random类

### 9.1 Math类

```java
package oop2.Mathh;

public class MathA {
    public static void main(String[] args) {
        System.out.println(Math.PI);

        System.out.println(Math.E);
        System.out.println(Math.round(3.156));    //四舍五入
        System.out.println(Math.ceil(3.16));   //向上取整
        System.out.println(Math.floor(3.9));   //向下取整
        System.out.println(Math.random());   //产生随机数[0 , 1)
        
        
        
        System.out.println(Math.sqrt(64));  //开平方
        System.out.println(Math.pow(2,3));    //  2的3次幂
        System.out.println(Math.abs(-5));     // 去绝对值
        System.out.println(Math.max(2,9));    //比较两个数的大小
        System.out.println(Math.min(3,2));
        
    }
}
```

### 9.2 Random类  随机数

```java
package oop2.Mathh;

import java.util.Random;

public class RandomA {
    public static void main(String[] args) {
        Random random = new Random();                //   Random()括号里有数字，则为种子，之后产生的数叫伪随机数

        //产生0-10内随机整数
        int i = random.nextInt(10);                //如过是   nextInt()  ，括号没有数，将会产生int类型范围内的数
                                                            //其他类型就是nextXXXXX类型

        System.out.println(i);

        // 产生4位随机数
        int s = random.nextInt(9000)+1000;
        System.out.println(s);

    }
}
```

## 十、常用类 8 枚举

定义枚举要使用enum 关键字

用来限制一些关键信息

```java
package oop2.Mathh;

public class Student {
    private String name;
    private Gender sex;

    public Student(String name , Gender sex){
        this.name = name;
        this.sex = sex;
    }

    public Student (){}

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Gender getSex() {
        return sex;
    }

    public void setSex(Gender sex) {
        this.sex = sex;
    }

    @Override
    public String toString() {
        return "Student{" +
                "name='" + name + '\'' +
                ", sex='" + sex + '\'' +
                '}';
    }
}
```

```java
package oop2.Mathh;

public enum Gender {
    男,女
}
```

```java
package oop2.Mathh;

public class TestA {
    public static void main(String[] args) {
        Student student = new Student("zhangs",Gender.男);     //在这里的sex就只能选择Gender里的枚举的内容
    }
}
```
