---
title: java基础篇
sidebar_position: 1
---

# java基础篇

<!--# Java基础-->

## 一、第一个java（hello.java）

hello.java

```
public class hello {

  public static void main(String[] args) {

​    System.out.print("Hello world");

​    System.out.print("你好,世界");

  }

}
```

java的函数名必须与主函数名一致。

代码文件所在文件夹，运行时候输入的命令：

```
javac hello.java

java hello
```

### 1.1遇到的情况

1. Java大小写敏感
2. 尽量英文
3. 文件名与类名保持一致
4. 注意符号的中英文切换

### 1.2 编译型与解释型

### 1.3 IDEA的使用

新建项目——>src新建一个java类 java

打开

快捷1：psvm

快捷2 ：sout

生成如下代码：

```java
public class hello {
    public static void main(String[] args) {
        System.out.println();
    }
}
```

### 1.4 比较方便管理的方法

（1）打开--->文件--->项目--->空项目（下一步）--->输入对应目录与项目名称（确定，下一步）

（2）回到当前项目页--->文件--->新模块--->选择JDK版本（next）---> 填写对应的模块名称（然后一直点next）

（3）文件--->项目结构      查看项目结构目录以及JDK版本

## 二、Java基础

### 2.1注释

`注释（书写注释是一个非常好的习惯）`

#### 2.1.1 单行注释   //

```
//输出一个Hello world
```

#### 2.2.2 多行注释    /**/

```
/* 

 多行注释多行所行

 */
```

#### 2.3.3 文档注释

```
/**
*java doc
*java doc
*java doc
*/
```

### 2.2 标识型和关键字

#### 2.2.1 重要Java关键字列表

abstract:它利用计算机来完成抽象。它是与类和方法相关的非访问修饰符。

enum：它利用Java描述enum。

instanceof：它用于知道对象是否是预定义写入（类、子类或接口）的情况。

private：它是一个访问修饰符。任何被宣布为私有的东西都不能在其类外看到。

protected：如果您需要使组件能够在当前类之外查看，那么，只需对特定于您的类的子类进行查看，此时将宣布该组件。

public: 任何人从任何地方都可以到达的地方。

#### 2.2.2 访问修改函数

static：它用于使成员（块、方法、变量或嵌套类）可以独立于任何其他成员使用，而无需参考特定情况。

strictfp：用于限制、浮点、浮点运算和计算，并在浮点变量中执行任务时保证每个阶段的结果相同。

synchronized：它用于在Java中获得适用于块和方法的同步。

transient：作为序列化的一部分使用的因子修饰符。在序列化的季节，如果我们不想对记录中的特定变量进行多余的估计，那么此时，我们使用transient关键字。

volatile：如果修饰符告诉编译器，由不稳定变量调整的变量通过程序的不同部分发生惊人的变化，则使用volatile。

### 2.3 Java关键字的类型

#### 2.3.1 Enum

Enum有效地表示编程语言中命名常量的集合。例如，一副扑克牌中的四套西服可能有四个名为Club、Diamond、Heart和Spade的统计员，其中一个位置有一个名为西服的已识别类别。不同的插图结合了正常识别的构图（如行星、一周中的几天、色调、方位等）。

当我们在编译时知道每一个可能的值时，JavaEnum就可以利用它。例如，这可能包括菜单上的决策、调整模式、召唤线横幅等。枚举写入中常量的排列永远保持不变并不重要。

#### 2.3.2 Strictfp关键字

strictfp是Java中的一个关键字，它利用限制浮点值，并在执行滑行点变量中的任务时保证每个阶段的结果相同。

浮点计算从属于平台，即当类文档在各种平台（16/32/64位处理器）上运行时，不同的输出（浮点变量）完成。为了解决这类问题，根据IEEE754滑行点计数指南，以JDK1.2的形式提出了strictfp口号。

#### 2.3.3 Strictfp的重要关注点

Strictfp修饰符按原样使用类、接口和技术。

Strictfp无法使用独特的策略。尽管如此，它还是利用了理论类/接口。

由于接口的技术当然是动态的，strictfp不能与接口内的任何方法一起使用。

#### 2.3.4 标识符注意点

1. 所有标识符都应该以字母，或者美元符号（$）或者下划线（_）开始
2. 不能使用关键字作为变量名或者方法名
3. 大小写非常敏感
4. 不能以数字或者其他符号开头
5. 可以使用中文名和拼音，但是不建议使用，不方便后期维护

### 2.4 数据类型

#### 2.4.1. 整数类型

byte 占1个字节（8位）

short 占2个字节（16位）

int 占4个字节（32位）

long 占8个字节（64位）

#### 2.4.2 浮点数类型

float 4字节

double 8字节

#### 2.4.3 字符类型  

char 2字节

#### 2.4.5 Boolean类型

1位：true  false

```java
public class demo02 {
    public static void main(String[] args) {
        int num1 = 10;
        int num2 = 20;
        int num3 = 40;
        long num4 = 100L;   //Long 类型要在数字后加个L

        //小数：浮点数
        float num5 = 50.1F;    //float 类型要在数字后加个F

        //字符
        char name = 'A';
        char name3 = '张';

        //字符串
        String name2 = "张三";

        //布尔类型
        boolean flag = true;

    }
}
```

### 2.5 数据类型扩展及面试题

**最好完全避免使用浮点数进行比较！！！！！！！！**

```java
public class demo03 {
    public static void main(String[] args) {
        //整数拓展  进制   二进制0b    十进制    八进制0    十六进制0x
        int i = 10;
        int i2 = 010;
        int i3 = 0x10;

        System.out.println(i);
        System.out.println(i2);
        System.out.println(i3);

        //===================================================================
        //浮点数拓展
        //===================================================================
        //float: 有限  离散  舍入误差 大约  接近但不等于
        //double
        //最好完全避免使用浮点数进行比较

        float f = 0.1f;
        double d = 0.1;

        System.out.println(f==d);   //判断是否相等 ：false
        System.out.println(f);
        System.out.println(d);

        //字符

        char c1 = 'a';
        char c2 = '中';

        System.out.println(c1);
        System.out.println((int) c1);    //强制转换，将a转化为数字
        System.out.println(c2);
        System.out.println((int) c2);    //强制转换

        // 所有字符本本质还是数字

        //转义字符
        //   \t  制表符
        //   \n  换行

    }
}
```

### 2.6   类型转换

运算中，不同类型的数据先转换为同一类型，然后进行运算。

从低到高位数据类型：**byte 、short、char—>int—>long—>float—>double**

```java
public class demo05 {
    public static void main(String[] args) {
        int i = 128;
        byte b = (byte) i;   //强制转换

        System.out.println(i);
        System.out.println(b); //溢出
    }
}
```

强制转换  （类型）变量名                 高—>低位

自动转化          低—>高位

**注意点：**

1. 不能对布尔值进行转换
2. 不能把对象类型转换为不想干的类型
3. 在把高容量转换到低容量的时候，强制转换
4. 转换的是时候可能存在内存溢出，或者精度问题！！！！！！！！

```java
public class demo05 {
    public static void main(String[] args) {
        int i = 128;
        byte b = (byte) i;   //强制转换

        System.out.println(i);
        System.out.println(b); //溢出

        System.out.println((int)23.7);    //double类型 23
        System.out.println((int)-45.89f);   //浮点数类型 -45

        char c = 'a';
        int d = c+1;
        System.out.println(d);    //98
        System.out.println((char) d);   //b
    }
}
```

```java
public class demo06 {
    public static void main(String[] args) {
        // 操作比较大的数字的时候，注意溢出的问题
        // JDK7 新特性，数字之间可以用下划线分割
        int money = 10_0000_0000L;  //Long 类型要在数字后加个L
        int years = 20;
        int total = money*years;  //-1474836480 ,计算的时候已经溢出了
        long total2 =money*years; //默认是int类型，转换之前就已经存在问题了


        long total3 = money*((long)years);   //需要把years转换为long类型
        System.out.println(total3);
    }
}
```

### 2.7 变量、常量、作用域

类变量

实例变量

局部变量

```java
public class demo08 {
    // 实例变量，从属于对象;如果不进行初始化，这个类型的默认值  0 0.0
    // 布尔值默认为false
    //除了基本类型，其余的类型默认值为null
    String name;
    int age;

    //类变量
    static double salary = 2500;

    //main方法
    public static void main(String[] args) {

        //局部变量；使用前必须声明和初始化值
        int i = 10;
        System.out.println(i);

        //变量类型   变量名字= new demo08();
        demo08 demo08 = new demo08();
        System.out.println(demo08.age);   //  0
        System.out.println(demo08.name);     //  null

        //类变量
        System.out.println(salary);
    }

    
    
    
    //其他方法
    public void add(){

    }
}
```

常量：设置之后不可再更改

**常量修饰符:  final**

```java
public class demo09 {
    //常量修饰符:  final
    //修饰符，不存在先后顺序
    static final double PI = 3.1415926;
    public static void main(String[] args) {
        System.out.println(PI);
    }
}
```

### 2.8 命名规范

1. 见名知意
2. 类成员变量： 首字母小写和驼峰原则：monthSalary 除了第一个单词意外后面单词首字母大写。
3. 局部变量：首字母小写和驼峰原则
4. 常量：大写字母和下划线  MAX_VALUE
5. 类名：首字母大写和驼峰原则：Man，GoogMan
6. 方法名：首字母大写和驼峰原则：run()，runRun()

### 2.9 运算符

算术运算符 +、-、*、/、%、++、--

赋值运算符 =

关系运算符 >、<、>=、<=、==、!=、instanceof

逻辑运算符   &&  ||  !   (与或非)

位运算符

条件运算符

拓展运算符

```java
package operator;

public class demo1 {
    public static void main(String[] args) {
        //2元运算符号
        //CTRL + D  复制当前行到下一行
        int a = 10;
        int b = 20;
        int c = 30;
        int d = 40;

        System.out.println(a+b);
        System.out.println(a-b);
        System.out.println(a*b);
        System.out.println(a/(double)b);   //可能产生小数，强转成double

    }
}
```

```java
package operator;

public class Demo02 {
    public static void main(String[] args) {
        long a = 12345678946545L;
        int b = 123;
        short c = 10;
        byte d = 8;

        System.out.println(a+b+c+d);   //long
        System.out.println(b+c+d);    //int
        System.out.println(c+d);     //int   没有long类型，数据类型自动转为int类型,除非强转成double
    }
}
```

```Java
package operator;

public class Demo03 {
    public static void main(String[] args) {
        //关系运算符号
        int a = 10;
        int b = 20;
        int c = 21;
        System.out.println(a>b);
        System.out.println(a<b);
        System.out.println(a==b);
        System.out.println(a!=b);

        System.out.println(c%a);    //取余运算，模运算


    }
}
```

### 2.10   自增自减运算符、初识math类

```java
package operator;

public class Demo04 {
    public static void main(String[] args) {
        // ++  --  自增、自减运算符
        int a = 3;

        int b = a++;     //  a = a +1     先赋值，再自增

        System.out.println(a);   //   a = 4;

        int c = ++a;     // ++a  a = a + 1;     先自增，再赋值

        System.out.println(a);
        System.out.println(a);
        System.out.println(b);
        System.out.println(b);
        System.out.println(c);
        System.out.println(c);

        //幂运算    2^3  2*2*2 = 8
        double pow = Math.pow(2,3);
        System.out.println(pow);


    }
}
```

### 2.11  逻辑运算符、位运算符

```java
package operator;

public class Demo05 {
    public static void main(String[] args) {
        // 逻辑运算符  &&  ||  ！
        boolean a = true;
        boolean b = false;

        System.out.println("a && b " +(a && b));   //两个都是真，结果为真
        System.out.println("a || b " + (a || b));   //两个其中有一个是真，结果为真
        System.out.println("!(a && b) " + !(a && b));   //  如果为真，则为假；如果为假，则为真。


        //短路运算
        int c = 5;
        boolean d = (c<4)&&(c++<4);   //  c<4 为false ，不运行c++ ,结果最后还是c = 5;
        System.out.println(c);
        System.out.println(d);

    }
}
```

```java
package operator;

public class Demo06 {
    public static void main(String[] args) {
        /*
        * 位运算
        * A  =  0011 1100
        * B  =  0000 1101
        *
        * A&B = 0000 1100
        * A|B = 0011 1101
        * A^B = 0011 0001  //异或 相同取0，不同取1
        * ~B  = 1111 0010  //取反
        *
        * 2*8 = 16 2*2*2*2
        * <<   *2       //  左移：  2倍
        * >>   /2       //  右移除： 除以2  
        *
        *
        * 0000 0000      0
        * 0000 0001      1
        * 0000 0010      2
        * 0000 0011      3
        * 0000 0100      4
        * 0000 1000      8
        * 0001 0000      16
        *
        *
        * */
        System.out.println(2<<3);
    }
}

```

### 2.12   三元运算符及小结

```java
package operator;

public class Domo07 {
    public static void main(String[] args) {
        int a = 10;
        int b = 20;
        a+=b;  // a=a+b
        a-=b;  // a=a-b

        System.out.println(a);


        //字符串连接符  +  ，string

        System.out.println(""+a+b);     // 1020     其中的“+”是字符串连接符
        System.out.println(a+b+"");     // 30   其中a与b之间的“+”是运算符，b后面的的“+”是字符串连接符
    }
}
```

```java
package operator;

public class Demo08 {
    public static void main(String[] args) {
        //三元运算符
        // x ? y :z
        //如果 x==true ,则结果为y,否者为z

        int score = 80;
        String Type2 = score < 60 ? "不及格":"及格";
        System.out.println(Type2);
    }
}
```

### 2.13   包机制

包的本质就是一个文件夹（）

一般利用公司域名倒置作为包名：com.luomoe.base

```java
package com.baidu.base;     //包

import com.baidu.base.demo03;   //引入
import com.baidu.base.*;   //引入 包内所有的类
```

### 2.14 JavaDoc生成文档

1. javadoc 命令是用来生成自己的API文档    /** 然后回车

```java
/**
 * @author zhangshan
 * @version 1.0
 * @since 1.8
 *
 *
 */
```

2.

cmd命令(生成web文档)

javadoc -encoding UTF-8 -charset UTF-8 Doc.java

3. 使用IEDA生成javadoc文档

   （1）打开 idea,点击 Tools–> Generate JavaDoc,会弹出生成JavaDoc文档的配置页面。

   （2）进行参数配置

   （3）在输出目录里生成JavaDoc。

## 三、Java流程控制

### 3.1 用户交互Scanner

java.util.Scanner   可以通过Scanner类来活区用户的输入。

```java
Scanner s = new Scanner(System in)
```

Sannner类的next()和nextLine()方法获取用户输入字符串。在读取前我们一般需要使用hasNext（）与hasNextLine（）判断是否还有输入数据

```java
package scanner;

import java.util.Scanner;

public class Demo01 {
    public static void main(String[] args) {
        //创建一个扫描器对象，用于接受数据键盘数据
        Scanner scanner = new Scanner(System.in);
        System.out.println("使用next方法接收：");

        //判断用户有没有输入字符
        if (scanner.hasNext()){
            String str = scanner.next();
            System.out.println("输出的内容为："+str);
        }


        //凡是属于IO流的类如果不关闭，会一直占用资源，要养成好习惯，用完就关掉
        scanner.close();
    }
}
```

```java
package scanner;

import java.util.Scanner;

public class Demo02 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("使用nextLine方法接收：");
        if (scanner.hasNext()){
            String str = scanner.nextLine();
            System.out.println("输出的内容为："+str);
        }

        scanner.close();

    }
}
```

#### 注意

使用next()方法输入字符时，以空格键结束，敲击回车键运行下一行代码。如输入"Hello world"，最终结果为“Hello”;

使用nextLine()方法输入字符时，保留空格键，敲击回车键结束输入并运行接下来的代码。如输入"Hello world"，最终结果为“Hello world”;

### 3.2 Scanner进阶使用

nextInt()、nextDouble()、nextFloat()等等输入对应数据类型

hasNextInt()、hasNextDouble()、hasNextFloat()

```java
package scanner;

import java.util.Scanner;

public class Demo04 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        //从键盘接收数据
        int i = 0;
        float f = 0.1f;

        System.out.println("请输入整数");
        if (scanner.hasNextInt()){
            i = scanner.nextInt();
            System.out.println("整数数据："+ i);
        }else {
            System.out.println("输入的不是整数数据");
        }


        System.out.println("请输入小数");
        if (scanner.hasNextFloat()){
            f = scanner.nextFloat();
            System.out.println("小数数据："+ f);
        }else {
            System.out.println("输入的不是小数数据");
        }

        scanner.close();

    }
}
```

```java
package scanner;

import java.util.Scanner;

public class Demo05 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        double sum = 0;

        int m = 0;
        System.out.println("请输入：");
        while(scanner.hasNextDouble()){
            System.out.println("请输入：");
            double x = scanner.nextDouble();
            m = m+1;
            sum = sum + x;
        }
        System.out.println(m+"个数的总和为"+sum);
        System.out.println(m+"个数的平均值"+(sum/m));

        scanner.close();

    }
}
```

### 3.3 顺序结构

按照编写代码的顺序先后运行

```java
package struct;

public class FullDemo {
    public static void main(String[] args) {
        System.out.println("1");
        System.out.println("2");
        System.out.println("3");
        System.out.println("4");
        System.out.println("5");
        System.out.println("6");
    }
}
```

### 3.4 if选择结构

单选择结构

```java
if(布尔表达式){

}
```

双选择结构

```java
if(布尔表达式){
 真的结果
}else{
    假的结果
}
```

多选择结构

```java
if(布尔表达式1){
 1的结果
}else if(布尔表达式2){
 2的结果
}else if(布尔表达式3){
 3的结果
}else{
 以上条件都不满足的结果
}
```

嵌套if结构

```java
if(布尔表达式){
 if(布尔表达式){
 }
}
```

### 3.5 Switch结构

```java
switch(expression){
    case value:
        //语句
        break;  //可选
    case value:
        //语句
        break;  //可选
    default:   //可选
        //语句
        
        
}
```

```java
package struct;

public class Switch01 {
    public static void main(String[] args) {
        char grade = 'C';
        switch (grade){
            case 'A':
                System.out.println("优秀");
                break;                            //退出
            case 'B':
                System.out.println("良好");
                break;
            case 'C':
                System.out.println("及格");        //没有break，会继续执行下一句程序
            default:
                System.out.println("未知");         //   A B C以外的情况
        }
    }
}
```

SWITCH支持String的判断（可以是字符串）

### 3.6 While循环详解

先判断再执行。

```java
while(布尔){

}
```

```java
package struct;

public class While01 {
    public static void main(String[] args) {
        //输出0-100
        int i = 0;
        while (i<100){
            ++i;
            System.out.println(i);
        }
    }
}
```

```
package struct;

public class While02 {
    public static void main(String[] args) {
        while (true){
            //死循环
        }
    }
}
```

```java
package struct;

public class While03 {
    public static void main(String[] args) {
        int sum = 0;
        int i = 0;
        while (i<=100){
            sum = sum + i ;
            i++;
        }
        System.out.println(sum);
    }
}
```

### 3.7 Do...While循环详解

先执行，再判断。满足条件退出循环

```
do{
 //代码

}while(布尔表达);
```

```java
package struct;

public class DoWhile01 {
    public static void main(String[] args) {
        int i = 0;
        int sum = 0;
         do{
             sum = sum + i;
             i++;
         }while (i<=100);
        System.out.println(sum);
    }
}
```

### 3.8 For循环详解

for循环是支持迭代的一种通用结构，是最有效、最灵活的循环结构

```java
for(初始化 ; 布尔判断 ; 更新){
    //代码语句
}
```

```java
package struct;

public class For01 {
    public static void main(String[] args) {
        int a = 1;
        while (a<=100){
            System.out.println(a);
            a+=2;
        }

        System.out.println("while循环结束");

        for (int i = 1; i<=100; i+=2){                //快捷键   100.for
            System.out.println(i);
        }

        System.out.println("for循环结束");
    }

}
```

```java
package struct;

public class For02 {
    public static void main(String[] args) {
            //练习1 计算0-100的奇数和与偶数和
        int oddSum = 0;
        int evenSum = 0;

        for (int i = 0 ; i <=100 ; i++){
            if (i%2!=0){
                oddSum+=i;
            }else{
                evenSum+=i;
            }
        }

        System.out.println("奇数和为"+ oddSum);
        System.out.println("偶数和为"+ evenSum);

    }
}
```

```java
package struct;

public class For05 {
    public static void main(String[] args) {
        //练习2 用while或for 循环输出1-1000之间被5整除的数，并每行输出3个
        for (int i= 0; i<=1000; i++){
            if(i%5==0){
                System.out.print(i+"\t");
            }
            if (i%(5*3)==0){
                System.out.println();
            }
        }

        //   print()输出不换行，println()输出换行

    }
}
```

#### 打印九九乘法表

```java
package struct;

public class For006 {
    public static void main(String[] args) {
        //打印九九乘法表
        for (int j = 0; j <= 9; j++) {
            for (int i = 1; i <= j; i++) {
                System.out.print(j + "*" + i + "=" + (j * i)+"\t");
            }
            System.out.println();
        }
    }
}
```

### 3.9 增强for循环

```java
for(声明语句:表达式){

}
```

```java
package struct;

public class ForPro {
    public static void main(String[] args) {
        int[] numbers = {10,20,30,40,50};       //定义一个数组

        for (int x:numbers){
            System.out.println(x);      //循环数组的每一个元素，并赋值给X，输出X的值
        }

        System.out.println("=========================");
        //类似于：
        for (int i = 0; i<5; i++){
            System.out.println(numbers[i]);
        }

    }
}
```

### 3.10 break、continue、goto

#### 3.10.1 break

执行到break，直接跳出循环

```java
package struct;

public class Demo007 {
    public static void main(String[] args) {
        int i = 0;
        while (i<100){
            i++;
            System.out.println(i);
            if (i==10){
                break;
            }
        }
        System.out.println("123");
    }

}
```

#### 3.10.2 contine

执行到contine，只停止当前循环的语句。会继续循环下去，直到满足循环条件

```java
package struct;

public class Demo008 {
    public static void main(String[] args) {
        int i = 0;
        while (i<100){
            i++;
            if (i%10==0){
                System.out.println();
                continue;
            }
            System.out.print(i);
        }
        System.out.println("123");
    }
}
```

#### 3.10.3 goto

goto有害，不建议使用

#### 打印三角形及Debug

```java
package struct;

public class TestDemo01 {
    public static void main(String[] args) {
        //打印一个三角形 5行
        for (int i = 1; i <=5; i++) {
            for (int j = 5; j >=i; j--) {
                System.out.print(" ");
            }
            for (int j = 1; j <=i; j++) {
                System.out.print("*");
            }
            for (int j = 1; j <i; j++) {
                System.out.print("*");
            }
            System.out.println();
        }

    }
}
```

## 四、Java方法

### 4.1 基础与命名规范

 方法是语句的集合，执行一个功能。方法再程序中被创建，再其他地方被引用

**一个方法只做一个功能**

方法的命名规则：首字母小写，驼峰规则。

```java
package method;

public class Demo01 {
    //mian 方法
    public static void main(String[] args) {
        int sum = add(1,2);                      //调用一个方法：加法
                  // 实际参数：实际调用传递给他的参数
        System.out.println(sum);
        
        test();
    }
    
    //加法
    // a b是形参，形式参数，用来定义作用的
    public static int add(int a,int b){
        return a+b;
    }
    public static void test(){
        for (int i = 0; i < 1000; i++) {
            if (i % 5 == 0) {
                System.out.print(i+"\t");
            }
            if (i%(5*3)==0){
                System.out.println();
            }
        }
    }
}
```

### 4.2 方法定义和调用

Java方法类似于其他语言的函数

参数是可选的，方法可以不含任何参数

```
修饰符 返回值类型 方法名（参数类型 参数名）{
  ...
​  方法体
  ...
​  return  返回值；   //如果返回值类型是void，则不需要return；

}


```

```java
package method;

public class Demo02 {
    public static void main(String[] args) {
    int max = max(30,40);
    System.out.println(max);
    }

    public static int max(int num1,int num2){
        int result = 0;
        if (num1==num2){
            System.out.println("相等");
            return 0;
        }
        if(num1>num2){
            result = num1;
        }else {
            result = num2;
        }
        return  result;
    }
}
```

1. 当方法返回一个值的时候，方法调用通常被当作一个值。

   ```java
   int large = max(30,40);
   ```

2. 如果方法返回值是void,方法调用一定是一条语句。

   ```Java
   System.out.println("相等");
   ```

值传递（Java），Java都是值传递

方法调用：类型名.方法名

### 4.3 方法的重载

重载就是在一个类中，方法名字一样，但是参数类型不一样（形参不一样）

方法名称必须相同

参数列表必须不同（个数不同、或者类型不同、参数排列顺序不同）

方法的返回类型可以相同也可以不同

仅仅返回类型不同不足以成为方法的重载。

```java
package method;

public class Demo02 {
    public static void main(String[] args) {
    double max = max(30,40);
    System.out.println(max);
    }

    public static int max(int num1,int num2){
        int result = 0;
        if (num1==num2){
            System.out.println("相等");
            return 0;
        }
        if(num1>num2){
            result = num1;
        }else {
            result = num2;
        }
        return  result;
    }
    
    public static double max(double num1,double num2){       //方法重载
        int result = 0;
        if (num1==num2){
            System.out.println("相等");
            return 0;
        }
        if(num1>num2){
            result = num1;
        }else {
            result = num2;
        }
        return  result;
    }
}
```

### 4.4 命令行传递参数

（不常用）

1. 到指定文件夹   javac demo03.java
2. 回到src文件夹
3. cmd    java com.baidu.method.Demo03                  java com.baidu.method.是包名
4. 命令行传参：java com.baidu.method.Demo03 this is baidu

### 4.5 可变参数

在方法声明中，在指定参数类型后加一个省略号(...)

一个方法中只能指定一个可变参数，他必须是方法的最后一个参数。任何普通的参数必须在它之前声明。

```java
package method;

public class Demo04 {
    public static void main(String[] args) {
       Demo04 demo04 = new Demo04();
       demo04.text(1,2,3,4,5,6);
    }

    public void text(int x,int...i){      //可变参数int...i需要在最后声明
        System.out.println(i[0]);
        System.out.println(i[1]);
        System.out.println(i[2]);
        System.out.println(i[3]);
        System.out.println(i[4]);
    }


}
```

```java
package method;

public class Demo04 {
    public static void main(String[] args) {
       printMax(34,3,3,2,56.5);
       printMax(new double[]{1,2,3});
    }

    public static void printMax(double...numbers){
        if(numbers.length==0){
            System.out.println("no arg passed");
            return;
        }

        double result = numbers[0];
        for (int i = 1; i < numbers.length; i++) {
            if(numbers[i]>result){
                result = numbers[i];
            }
        }
        System.out.println("the max value is " + result);
    }


}
```

### 4.6 递归讲解

自己调用自己

递归头：什么时候不调用自身方法。如果没有头，将陷入死循环

递归体：什么时候需要调用自己

```java
package method;

public class Demo05 {
    public static void main(String[] args) {
        System.out.println(f(5));
    }

    public static int f(int n ){
        if(n==1){
            return 1;
        }else {
            return n*f(n-1);
        }
    }
}
```

写一个计算器 加减乘除、循环+switch进行用户交互，传递需要操作的两个数，输出结果

## 五、数组

### 5.1：什么是数组

数组是同类型数据的集合

数组的下标从0开始

### 5.2：数组的声明和创建

首先必须声明数组变量，才能在程序中使用数组。

```java
dataType[] arrayRefVar;     //首选方法
或
dataType arrayReVar[];
```

java语言使用new操作符来创建数组，语法如下：

```java
dataType[] arrayReVar = new dataType[arraySize];
```

```java
package array;

public class ArrayDemo01 {
    public static void main(String[] args) {
        //变量类型  变量名字 = 变量的值；
        //数组类型

        int[] nums; //首选方法√
        int nums2[];  //不是首选方法

        //new一个数组
        nums = new int[10];  //长度为10的int类型数组；或者说这个数组可以存放10个int类型数据

    }
}
```

```java
package array;

public class ArrayDemo01 {
    public static void main(String[] args) {
        //变量类型  变量名字 = 变量的值；
        //数组类型

        int[] nums; //首选方法√   声明一个数组

        nums = new int[10];  //创建一个数组
        nums[0]= 1;    //给数组元素中赋值
        nums[1]= 2;
        nums[2]= 3;
        nums[3]= 4;
        nums[4]= 5;
        nums[5]= 6;
        nums[6]= 7;
        nums[7]= 8;
        nums[8]= 9;
        nums[9]= 10;

        //计算所有元素的和
        int sum = 0;
        for (int i = 0; i < nums.length; i++) {
            sum = sum + nums[i];
        }
        System.out.println(sum);
    }
}
```

经典二合一

```java
//        int[] nums; //首选方法√   声明一个数组
//        nums = new int[10];  //创建一个数组


          int[] nums = new int[10];    //经典二合一
```

获取数组的长度  arraty.length   数组名.length

### 5.3：三种初始化及内存分析

静态初始化

动态初始化

数组的默认初始化

```java
package array;

public class ArrayDemo02 {
    public static void main(String[] args) {
        //静态初始化: 创建+赋值
        int[]a = {1,2,3,4,5,6,7,8,9};
        Man[] men = {new Man(1,1),new Man(2,2)};

        //动态初始化:包含默认初始化
        int[]b = new int[10];


    }
}
```

### 5.4：下标越界及小结

数组一旦被创建，长度大小不可改变。

数组元素必须是相同类型，不允许出现混合类型。

数组元素可以是任何数据类型，包括基本类型和引用类型。

数组属于引用类型，数组也可以看作是对象，数组的每个元素相当于该对象的成员变量。

数组本身就是对象，Java中对象是在堆中的，因此数组无论保存原始类型还是其他对象类型，数组对象本身是在堆中的

### 5.5：数组的使用

```java
package array;

public class ArrayDemo03 {
    public static void main(String[] args) {
        int[] arrsys = {1,2,3,4,5};
        for (int i = 0; i < args.length ; i++) {
            System.out.println(arrsys[i]);
        }
        int sum = 0;
        for (int i = 0; i < arrsys.length; i++) {
            sum +=arrsys[i];
        }
        System.out.println("sum=" + sum);

        int max =arrsys[0];
        for (int i = 0; i < arrsys.length; i++) {
            if (arrsys[i]>max){
                max=arrsys[i];
            }
        }
        System.out.println("max=" + max);
    }
}
```

```java
package array;

public class ArrayDemo04 {
    public static void main(String[] args) {
        int[] arrays = {1,2,3,4,5};
        //直接for循环，无下标
        for (int array : arrays){
            System.out.println(array);
        }

        printArrsy(arrays);
        System.out.println( );
        System.out.println("========================");
        int[] reverse = reverse(arrays);
        printArrsy(reverse);
    }
    
    //打印数组元素
    public static void printArrsy(int[] arrays){
        for(int i = 0; i<arrays.length;i++){
            System.out.print(arrays[i]+" ");
        }
    }
    
    //反转数组
    public static int[] reverse(int[] arrays){
        int[] result = new int[arrays.length];        
        //反转操作
        for (int i = 0,j = result.length-1; i < arrays.length; i++,j--) {
            result[j] = arrays[i];
        }
        
        
        return result;
    }
}
```

### 5.6：二维数组、多维数组

```java
package array;

public class ArratDemo05 {
    public static void main(String[] args) {
        
        int[][] array = {
            {1,2},{2,3},{3,4},{4,5}
            };

        /**
         * array[0][0] = 1    array[0][1] = 2   {1,2}
         * array[1][0] = 2    array[1][1] = 3   {2,3}
         */

        for (int i = 0; i < array.length; i++) {
            for (int j = 0; j < array[i].length; j++) {
                System.out.println(array[i][j]);
            }
        }
    }
}
```

### 5.7：Arrays类讲解

数组的工具类  java.util.Arrays

```java
package array;

import java.lang.reflect.Array;
import java.util.Arrays;

public class ArrayDemo06 {
    public static void main(String[] args) {
        int[] array = {1,2,36565,895645,5648754,87,68,12,3};
        System.out.println(Arrays.toString(array));     //打印数组全部内容
        Arrays.sort(array);                            //数组排序，从小到大
        System.out.println(Arrays.toString(array));
        
        Arrays.fill(array,0);
        System.out.println(Arrays.toString(array));
    }
}
```

查看JDK帮助文档，知道具体方法。

1. 给数组赋值  fill方法
2. 对数组排序 sort方法
3. 比较数组 equals方法
4. 查找数组元素  binarySearch方法（能对排序好的数组进行二分查找）

### 5.8：冒泡排序

八大排序算法之一

```java
package array;

import java.util.Arrays;

public class ArrayDemo07 {
    public static void main(String[] args) {
        //冒泡排序
        int[] a = {1,3,6,2,9,8,0};
        int[] sort = sort(a);
        System.out.println(Arrays.toString(sort));

    }

    public static int[] sort(int[] array){
        int temp = 0;
        for (int i = 0; i < array.length-1; i++) {

            boolean flag = false;
            for (int j = 0; j < array.length-1-i; j++) {
                if (array[j+1] < array[j]){
                    temp = array[j];
                    array[j] = array[j+1];
                    array[j+1] = temp;
                    flag = true;
                }
            }
            if (flag==false){
                break;
            }
        }
        return array;
    }
}

```

### 5.9：稀疏数组

数据结构的内容，减少存储空间的使用

for .each循环，遍历数组的简单写法。

```java
for(int[] ints : 数组名){

}
```

```java
package array;

public class ArrayDemo08 {
    public static void main(String[] args) {
        int[][] array1 = new int[11][11];
        array1[1][2]=1;
        array1[2][3]=2;
        System.out.println("输出原始数组");

        for (int[] ints :array1){
            for (int anInt : ints) {
                System.out.print(anInt+"\t");
            }
            System.out.println();
        }


        //转换为稀疏数组
        /**
         *
         */
        //获取有效值的个数
        int sum = 0;
        for (int i = 0; i < 11; i++) {
            for (int j = 0; j < 11; j++) {
                if (array1[i][j]!=0){
                    sum++;
                }
            }
        }

        //创建一个稀疏数组
        int[][] array2 = new int[sum+1][3];
        array2[0][0] = 11;
        array2[0][1] = 11;
        array2[0][2] = sum;


        //遍历二维数组，将非0的值，存放在稀疏数组中
        int count = 0;
        for (int i = 0; i < array1.length; i++) {
            for (int j = 0; j < array1[i].length; j++) {
                if (array1[i][j]!=0){
                    count++;
                    array2[count][0] = i;
                    array2[count][1] = j;
                    array2[count][2] = array1[i][j];
                }
            }
            
        }
        System.out.println("==============================");
        System.out.println("输出稀疏数组");
        for (int i = 0; i < array2.length; i++) {
            System.out.println(array2[i][0]+"\t"+
                               array2[i][1]+"\t"+
                               array2[i][2]+"\t"
                                );
        }

        System.out.println("==============================");
        //读取稀疏数组
        int[][] array3 = new int [array2[0][0]][array2[0][1]];

        for (int i = 1; i < array2.length; i++) {
            array3[array2[i][0]][array2[i][1]] = array2[i][2];

        }
        System.out.println("输出还原数组");
        for (int[] ints :array3){
            for (int anInt : ints) {
                System.out.print(anInt+"\t");
            }
            System.out.println();
        }
    }
}
```

## 六、对象

### 6.1：什么是对象

本质：以类的方式组织代码，以对象的组织（封装）数据

面向对象编程 OOP

面向过程：步骤简单，第一步做什么，第二步做什么...

面向对象思维：物以类聚，分类的思维模式，思考问题首先会解决问题需要哪些分类。面向对象适合处理复杂的问题，适合处理需要多人协作的的问题

三大特征：封装、继承、多态

### 6.2：回顾方法的定义以及加深

```Java
package oop;

public class Demo01 {

    //main 方法
    public static void main(String[] args) {

    }

    /**
     * 修饰符  返回值类型  方法名（）{
     *     //方法体
     *     return 返回值
     * }
     */

    public String sayHello(){
        return "Hello World";
    }

    public void Hello(){

    }
}
```

### 6.3：回顾方法的调用

静态传递：

```java
package oop;

public class Demo02 {
    public static void main(String[] args) {
        //静态方法
       Student.say();     //直接调用静态方法

    }

    //
}
```

 Student.java

```java
package oop;

public class Student {
    public static void say(){               //static 静态方法
        System.out.println("学生说话");
    }
}
```

实际参数和形式参数的类型要对应

```java
package oop;

public class Demo03 {
    public static void main(String[] args) {

        //实际参数和形式参数的类型要对应

       int add = Demo03.add(1,2);
    }

    public static int add(int a, int b){
        return a+b;
    }
}
```

值传递

```java
package oop;

public class Demo04 {
    public static void main(String[] args) {
        int a = 1;
        System.out.println(a);                // a = 1
        Demo04.chang(a);
        System.out.println(a);                  // a = 1

    }

    public static void chang(int a){
        a = 10;
    }
}
```

引用传递

```Java
package oop;

// 引用传递：对象本质还是值传递
public class Demo05 {
    public static void main(String[] args) {
        Persion persion = new Persion();
        System.out.println(persion.name);             //null
        Demo05.change(persion);
        System.out.println(persion.name);               // 张三
    }

    public static void change(Persion persion){
        //persion 是一个对象，指向---> Persion persion = new Persion();这是一个具体的人，可以改变属性
        persion.name = "张三";
    }
}



// 定义了一个Persion 类：有一个属性：name
class Persion{
    String name;
}
```

### 6.4：类与对象的创建

类是一种抽象的数据类型，他是对某一种事物整体描述/定义，但不能代表某一具体事物。

对象是抽象概念具体实例。以类的方式组织代码，以对象的组织（封装）数据

​   **Application.java**

```java
package oop.demo02;

// 一个项目应该只存在一个main方法

public class Application {
    public static void main(String[] args) {
        //类：抽象的；实例化
        //类实例化后会返回一个自己的对象
        //student 对象就是一个Student类的具体实例

        Student xiaoming = new Student();   
        //使用new关键字创建的时候，除了分配空间之外，还会给创建好的对象进行默认初始化，以及类中构造器的调用
        
        Student liming = new Student();

        xiaoming.name = "小明";
        xiaoming.age = 3;

        System.out.println(xiaoming.name);
        System.out.println(xiaoming.age);

        liming.name = "李明";
        liming.age = 666;

        System.out.println(liming.name);
        System.out.println(liming.age);
    }
}
```

​   **Student.java**

```java
package oop.demo02;

//学生类
public class Student {
    //属性：字段
    String name;
    int age;


    //方法
    public void study(){
        System.out.println(this.name+"在学习");       //this 表示当前所在的类

    }
}
```

### 6.5：构造器详解

类中的构造器也称为构造方法，是在进行创建对象的时候必须要调用的。

#### 6.5.1 两大特点

1. 必须和类的名字相同
2. 必须没有返回类型，也不能写void

#### 6.5.2 注意点

1. 定义有参构造之后，如果想使用无参构造，必须显示的定义一个无参的构造

2. IDEA快捷键 Alt + Insert

   ​  **Application.java**

```java
package oop.demo02;

// 一个项目应该只存在一个main方法

public class Application {
    public static void main(String[] args) {

        Persion persion1 = new Persion();    //实例化了一个对象
        Persion persion2 = new Persion("lisi");    //实例化了一个对象
        System.out.println(persion.name);
    }
}
```

​    **Persion.java**

```java
package oop.demo02;

public class package oop.demo02;

public class Persion {
        //一个类即使什么都不写，他也会存在一个方法

        //显示的定义构造器
        String name;

        /* 实例化初始值：
         使用new关键字，本质是在调用构造器

         无参的构造：如下
        public Persion(){
            this.name = "zhangsan";
        }
        */

        //一个空的无参构造
        public Persion(){

        }


        //有参构造:一旦定义了有参构造，无参就必须显示定义
        public Persion(String name){
            this.name = name;
        }

}
 {
        //一个类即使什么都不写，他也会存在一个方法

        //显示的定义构造器
        String name;

        /* 实例化初始值：
         使用new关键字，本质是在调用构造器
         无参的构造：如下
         
         
        public Persion(){
            this.name = "zhangsan";
        }
        
        */

        //一个空的无参构造
        public Persion(){
        }


        //有参构造:一旦定义了有参构造，无参就必须显示定义
        public Persion(String name){
            this.name = name;
        }

}
```

### 6.6：创建对象内存分析

![image-20220513170524971](https://img.up.cdn.nahida.cn/2022/06/image-20220513170524971.png)

```java
package oop.Demo003;

public class Application {
    public static void main(String[] args) {
        Pet Dog = new Pet();
        Pet Cat = new Pet();

        Dog.name = "旺财";
        Dog.age = 2;
        Dog.shout();
    }
}
```

```java
package oop.Demo003;

public class Pet {
    String name;
    int age;


    public void shout(){
        System.out.println("叫了一声");
    }
}
```

### 6.7：简单小结类与对象

```java
/**
 属性：字段fiel 成员变量
 
 默认初试化：
  数字：0 0.0
  char: u0000
  boolean: false
  引用：null
  
 
 对象的创建和使用：
  必须使用new 关键字创建对象，构造器 Persion persion = new persion();
  对象的属性 persion.name
  对象的方法 persion.sleep()
 
    类：
     静态的属性 属性
        动态的方法 方法
    
    封装、继承、多态

*/
```

### 6.8：封装详解

高内聚，低耦合

属性私有，get/set

```java
package oop.Demo04;

public class Application {
    public static void main(String[] args) {
        Student s1 = new Student();
        s1.setName("张三");
        System.out.println(s1.getName());
        s1.setAge(999);    //不合法
        System.out.println(s1.getAge());
    }
}
```

​    GET和SET方法

```java
package oop.Demo04;

// 类
public class Student {


    //属性私有 private修饰关键词
    //名字
    private String name;   //private 私有
    //学号
    private int id;
    private int age;  
    //性别
    private char sex;




    //提供一些可以操作的属性的方法
    //提供一些public 的get、set的方法

    //get 获取这个数据值
    public String getName(){
        return this.name;
    }

    //set 给这个数据设置值

    public void setName(String name) {
        this.name = name;
    }

    //快捷方式  ALT + INSERT 设置get、set的方法


    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        if(age>120 || age <0){
            System.out.println("不合法");
        }else {
            this.age = age;
        }

    }
}
```

### 6.9：什么是继承

extands 修饰关键字，扩展，继承

继承是类和类之间的关系。子类和父类之间在意义上应该具有“子类  is  a  父类”

Java中只有单继承，没有多继承。“一个爸爸有多个儿子，一个儿子只有爸爸”： Object——>Persion

​                                         |——>Studnt

​                                         |——>Teacher

```java
package oop.demo05;

public class Application {
    public static void main(String[] args) {
        Student student = new Student();
        student.say();

    }
}
```

```java
package oop.demo05;

//Persion是父类，Student和Teacher是派生类
// 子类继承了父类，就拥有了父类的全部方法
//public 公共
//protected 受保护的
//default 常规,默认
//private 私有，子类不能继承

//在java中所有的类 都默认继承Object类
// CTRL+ H 快捷键 查看层次结构


public class Persion {
    public void say(){
        System.out.println("说了一句话");
    }
}
```

```java
package oop.demo05;

public class Student extends Persion{     //extends 继承了Persion的公共属性和公共方法     Student是Persio

}
```

```java
package oop.demo05;

public class Teacher extends Persion{     //extends 继承了Persion     Teacher是Persion

}
```

### 6.10：Super详解（继承）

**super 注意点**

1. super调用父类构造方法，必须在构造方法的第一个
2. super必须只能出现在子类的方法或者构造的方法中
3. super和this不能同时调用构造方法

**super VS this**

代表的对象不同：

​  this ：本身吊桶的是当前类的对象

​  super：是指父亲类的对象的应用

前提：

​  this：没有继承也可以用

​  super：只能在继承条件才可以使用

构造方法

​  this（）； 调用本类的构造

​  super（）；调用父类的构造

```java
package oop.demo05;

public class Application {
    public static void main(String[] args) {
        Student student = new Student();
        student.say();
        student.test("李白");
        student.test1();
    }
}
```

```java
package oop.demo05;

//Persion是父类，Student和Teacher是派生类
// 子类继承了父类，就拥有了父类的全部方法
//public 公共
//protected 受保护的
//default 常规,默认
//private 私有，子类不能继承

//在java中所有的类 都默认继承Object类
// CTRL+ H 快捷键 查看层次结构


public class Person {
    public void say(){

        System.out.println("说了一句话");
    }

    public void Person() {
        System.out.println("Person无参执行");
    }

    protected String name = "zhangsan";

    public void print(){
        System.out.println("Person");
    }


}
```

```java
package oop.demo05;

public class Student extends Person{     //extends 继承了Persion的属性     Student是Person的子类
    private String name = "libai";
    public void print(){

        //执行顺序，先父后子
        //隐藏代码，调用了父类的无参构造
        //父类无参，子类的也无参
        System.out.println("Student");
    }

    public Student() {
        System.out.println("Student无参执行");
    }

    public void test(String name){
        System.out.println(name);   //李白
        System.out.println(this.name);   //libai
        System.out.println(super.name);  //zhangsan
    }

    public void test1(){
        System.out.println("=================");
        print();         //student
        this.print();    //student
        super.print();     //Persion     super读取了父类的print方法。如果print方法被声名为private将不回被读出
    }
}
```

### 6.11：方法重写

重写：需要有继承关系，子类重写父类的方法！

1. 方法名必须相同
2. 参数列表必须相同
3. 修饰符：范围可以扩大,范围可以扩大不能缩小：public>protected>default>private
4. 抛出异常：范围可以被缩小但是不能扩大；classNotFoundException -->Exception(大)

重写，子类的方法和父类的方法一致；方法体不同

为什么需要重写

1. 父类的功能，子类不一定需要或者不一定满足！   Alt + Insert    --> override

```java
package oop.Demo06;

public class Application {
    public static void main(String[] args) {
        //静态方法和动态方法区别很大
       //静态方法：static，静态方法 方法调用的之和等号左边的、定义的数据类型有关
        //非静态：重写

        A a = new A();
        a.test();    //A=》test

        //父类的引用指向了子类
        B b = new A();   //动态 子类重写了父类的方法
        b.test();    // ！！！ 注意动态时：A=》test       （静态时候：B=》test）  
    }
}
```

```java
package oop.Demo06;


//重写的都是方法的重写，和属性无关
public class B {
    public  void test(){
        System.out.println("B=》test");
    }


}
```

```java
package oop.Demo06;


//继承关系
public class A extends B{


    @Override  //重写，注解：有功能的注释
    public void test() {
        //super.test();
        System.out.println("A=》test");
    }


}
```

### 6.12：多态

动态编译，可扩展性变得更强

多态，即同一方法根据发送对象的不同而采用不同的行为方式

一个对象的实际类型是确定的，但可以指向对象的引用类型很多（父类，有关系的类）

多态的存在条件

1. 有继承关系
2. 子类重写父类方法
3. 父类引用指向子类的对象

注意：

1. 多态是方法的多态，属性没有多态性

2. 父类和子类，有联系 类型转换异常！ClassCastException! 类型转换异常

3. 存在条件：继承关系，方法需要重写，父类引用指向子类对象！

4. 不能重写的：

   static 方法，属于类，它不属于实例

   final 常量；

   private方法等

```java
package oop.Demo07;

public class Application {
    public static void main(String[] args) {
        //一个对象的实际类型是确定的
        //new Student（）;
        //new Person();


        //可以指向的引用类型就不确定了；父类的引用指向子类
        //Student 能调用的方法都是自己的或者继承父类的
        Student s1 = new Student();
        //Person 父类型，可以指向子类，但是不能调用子类独有的方法
        Person s2 = new Student();
        Object s3 = new Student();

        s1.run();      //son
        s2.run();  //son


        //对象能执行哪些方法，主要看对象等号左边的类型，和等号右边关系不大
        s1.eat();
        ((Student) s2).eat();   //子类重写了父类的方法   此类写法，是因为person类无eat方法，强转

    }
}
```

```java
package oop.Demo07;

public class Person {
    public void run(){
        System.out.println("run");
    }
}
```

```java
package oop.Demo07;

public class Student extends Person{
    @Override
    public void run() {
        System.out.println("son");
    }

    public void eat(){
        System.out.println("eat");
    }
}
```

```java
package oop.Demo07;

public class Person {
    public void run(){
        System.out.println("run");
    }
}

```

### 6.13  类与类之间

#### 6.13.1：instanceof

instanceof（类型转换）引用类型，**判断一个对象是什么类型**，或者说“你认的爹是不是你爹”

```java
package oop.Demo07;

public class Application {
    public static void main(String[] args) {
      //  Object > String
      //  Object > Person > Teacher
      //   Object > Person > Student

       Object object = new Student();

       // System.out.println(X instanceof  Y);  能不能编通过，X与Y是否纯在父子关系

        System.out.println(object instanceof Student);     //ture
        System.out.println(object instanceof Person);       //ture
        System.out.println(object instanceof Object);       //ture
        System.out.println(object instanceof Teacher);      //false    此处的object是Student类型的，与Teacher不是父子关系
        System.out.println(object instanceof String);       //false

        Person person = new Student();
        System.out.println(person instanceof Student);     //ture
        System.out.println(person instanceof Person);       //ture
        System.out.println(person instanceof Object);       //ture
        System.out.println(person instanceof Teacher);      //false
    //    System.out.println(person instanceof String);       //编译报错,没有关系就报错

        Student student = new Student();
        System.out.println(student instanceof Student);     //ture
        System.out.println(student instanceof Person);       //ture
        System.out.println(student instanceof Object);       //ture
      //  System.out.println(student instanceof Teacher);      //编译报错
        //    System.out.println(student instanceof String);       //编译报错


    }
}

```

```java
package oop.Demo07;

public class Person {
    public void run(){
        System.out.println("run");
    }
}

```

```java
package oop.Demo07;

public class Student extends Person{

    public void go() {
        System.out.println("go");
    }

}

```

```java
package oop.Demo07;

public class Teacher extends Person{
}

```

#### 6.13.2 类型之间的转换

```java
// 父类
public class Parent {}

// 子类
public class Son extends Parent {}

// "孙女类"
public class Daughter extends Parent {}
```

##### 6.13.2.1 子类转父类  

```java
Son son = new Son();
Parent parent = (Parent) son;
```

运行没问题

##### 6.13.2父类的引用指向子类转父类对象

```java
Parent son = new Son();
Parent parent = (Parent) son;
```

运行没问题，这种肯定也是可以的

父类转子类

##### 6.13.3 父类的引用指向父类转子类对象

```java
Parent parent = new Parent();
Son son = (Son) parent;
```

运行有问题会报 ClassCastException

##### 6.13.4 父类的引用指向子类转子类对象

```java
Parent parent = new Son();
Son son = (Son) parent;
```

运行没有问题

##### 6.13.5 父类的引用指向子类转另一个子类对象

```java
Parent parent = new Son();
Daughter daughter = (Daughter) parent;
```

运行时报出 ClassCastException 的异常

```java
package oop.Demo07;

public class Application {
    public static void main(String[] args) {

        //  Person父类  run（）方法   ，   Student子类 go（）方法
        // 父类的方法，子类可以用，但是子类特有的方法，父类不可以调用
        Person person = new Person();
        person.run();
        //  person.go();   子类特有的方法，父类不可以调用
        Student student1 = new Student();
        student1.go();
        student1.run();

        //向上转型，子转父
        //也可以理解为将一个子类的对象转化为父类的对象（隐形转型，自动的）,小类转大类
        Person one = new Person();
        one.run();

        Person two = new Student();
        //  父类引用子类实例，可以调用子类重写父类的的方法以及父类派生的方法，无法调用子类独有的方法
        //  注意：父类中的静态方法无法被子类重写，所以向上转型之后，只能调用到父类原有的静态方法。（如果父类中存在静态方法）
        two.run();
        // two.go();     报错，父类引用子类实例，无法调用子类独有的方法
        //子类转化为父类，可能会丢失自己本来的一些方法。  子类转父类，子类拓展的方法会丢失。


        // 向下转型，必须强转
        //类型之间的的转化 ：父转子,向下转换要强制转换，也就是父类转为子类要强转
         Person obj = new Student();
        // obj.go()   会报错， obj是父类Person对象实例，需要将obj转换为Student类型,才可以使用Student类型的方法
         Student student = (Student) obj;
         student.go();
        //二合一：  ((Student) obj).go();








     /*
     1. 父类引用指向子类的对象
     2. 把子类转换为父类，向上转型，直接转；
     3. 把父类转换为子类，向下转型，强制转换；
     4. 方便方法的调用，减少重复的代码，简洁

      */

    }
}
```

### 6.14：static关键字详解

```java
package oop.Demo08;


//static :
public class Student {
    private static int age;   //静态的变量
    private double score;       // 非静态的变量
    public void run(){

    }
    public static void go(){

    }

    public static void main(String[] args) {
        Student s1 = new Student();

        System.out.println(Student.age);
        System.out.println(s1.age);
    //    System.out.println(Student.score);   报错，非静态，非实例
        System.out.println(s1.score);      //s1实例化了可以直接调用


        Student.go();
        s1.go();
        s1.run();    // new Student().run()

    }
}

```

```java
package oop.Demo08;

    //运行编译，会优先运行先后顺序：   静态代码块、匿名代码块、构造方法

public class Person {
    {
        //代码块（匿名代码块）   一般用于赋初值
        System.out.println("匿名");
    }
    static {
        //静态代码块 ，只执行一次
        System.out.println("静态");
    }
    public Person(){
        System.out.println("构造方法");
    }

    public static void main(String[] args) {
        Person person1 = new Person();
        System.out.println("======================");
        Person person2 = new Person();
    }
    
    
    /*
    最终运行结果：
    
    
    静态
    匿名
    构造方法
    ======================
    匿名
    构造方法
    
     */
}
```

```java
package oop.Demo08;

import static java.lang.Math.random;     //静态导入包
import static java.lang.Math.PI;     //静态导入包

public class test {
    public static void main(String[] args) {
        System.out.println(Math.random());     //没有加入静态导入包时，即没有加import这两句代码


        //加入了静态导入包
        System.out.println(random());
        System.out.println(PI);
    }
}

```

### 6.15：抽象类  abstract

```java
package oop.Dmoe09;

//abstract 抽象类
public abstract class Action {
    // 约束~有人帮我们实现
    //abstract ， 抽象方法，只有方法名字，没有方法的实现
    public abstract void doSomething();


    //1.不能new这个抽象类，只能靠子类去实现它，约束！
    //2.抽象类中可以写普通的方法
    //3.抽象方法必须写在抽象类中
    //抽象的抽象：约束
}
```

```java
package oop.Dmoe09;

//抽象类只能继承抽象类
public abstract class A  extends Action{

}
```

### 6.16：接口的定义与实现

接口：只有规范！自己无法写方法，专业的约束！约束和现实分离：面向接口编程。

声明类的关键字是class，声明接口的关键字是interface

接口的作用

1. 约束

2. 定义一些方法，让不同的人实现

3. public abstract

4. public static final

5. 接口不能被实例化，接口中没有构造方法

6. implements 可以实现多个接口

7. 必须要重写接口中的方法

```java
package oop.Demo10;

//interface 定义的关键字，接口都需要有实现类
public interface UserService {
    //常量
    int age = 999;    //很少用

    //接口中所有定义的方法其实都是抽象的 public abstract

    void add(String name);
    void delete(String name);
    void update(String name);
    void query(String name);


}

```

```java
package oop.Demo10;

public interface TimeService {
    void timer();
}
```

```java
package oop.Demo10;


//类可以实现接口  implements 接口
//快捷键CTRL+i 快速实现方法
//实现了接口的类，就需要重写接口中的方法

//接口实现多继承
public class UserServiceImpl implements UserService,TimeService{

    @Override
    public void add(String name) {

    }

    @Override
    public void delete(String name) {

    }

    @Override
    public void update(String name) {

    }

    @Override
    public void query(String name) {

    }

    @Override
    public void timer() {

    }


    /*
    接口的作用

    1. 约束
    2. 定义一些方法，让不同的人实现
    3. public abstract
    4. public static final
    5. 接口不能被实例化，接口中没有构造方法
    6. implements 可以实现多个接口
    7. 必须要重写接口中的方法
     */
}
```

### 6.17：N种内部类

在一个类的内部再定义一个类

```java
package oop;

import oop.Demo11.Outer;

public class Application {
    public static void main(String[] args) {
        // new
        Outer outer = new Outer();

        //通过外部类来实例化内部类
        Outer.Inner inner = outer.new Inner();
        inner.in();
        inner.getID();
    }
}



```

一些不怎么推荐的写法

```java
package oop.Demo11;

public class Outer {

    private int id = 10;
    public void out(){
        System.out.println("这是外部类的方法");
    }

    public class Inner{
        public void in(){
            System.out.println("这是内部类的方法");
        }

        //获得外部类的私有属性

        public void getID(){
            System.out.println(id);
        }
    }

    /*   静态内部类

    public static class Inner{
        public void in(){
            System.out.println("这是内部类的方法");
        }
        public void getID(){
            System.out.println(id);
        }
    }


    }


     */

    //局部内部类
    public void method(){
        class Inner2{

        }
    }

}

//一个Java类中可以有多个class类，但是只能有一个public class

class A{

}
```

```java
package oop.Demo11;

import org.omg.CORBA.PUBLIC_MEMBER;

public class test {
    public static void main(String[] args) {

        new Apple().eat();
        new UserService(){

            @Override
            public void hello() {

            }
        };
    }
}

class Apple{
    public void eat(){
        System.out.println("1");
    }

}

interface UserService{
    void hello();
}
```

## 七、异常处理

### 7.1 Error和Exception

异常 Exception

三种异常：检查行异常、运行时异常、错误（错误不是异常ERROR）

### 7.2 捕获和抛出异常

5个关键字：try、catch、finally、throw、throws

```java
package com.exception;

public class TEST {
    public static void main(String[] args) {
        int a = 1;
        int b = 0;
         try{   //try监控区域
            System.out.println(a/b);
        }catch (Error e){    //cath捕获异常
             System.out.println("程序出现异常，变量b不能为0");
         }catch (Exception e){    //cath捕获异常
             System.out.println("程序出现异常，变量b不能为0");
         }catch (Throwable e){    //cath捕获异常
             System.out.println("程序出现异常，变量b不能为0");
         }finally {     //处理善后工作，也可以不需要。
             System.out.println("finally");
         }
        
        //catch可以有多个
        //finally 可以不要finally ，假设是IO资源，这需要finally善后工作关闭
        
        
        //快捷键：  选中想要测试的内容， CTRL + Alt + T

    }
}
```

```java
package com.exception;

public class TEST {
    public static void main(String[] args) {
        int a = 1;
        int b = 0;
         try{   //try监控区域

             if (b==0){
                 throw new ArithmeticException();  //主动抛出异常
             }
            System.out.println(a/b);
        }catch (ArithmeticException e){    //catch捕获异常   catch( 想要捕获的异常类型 )
             System.out.println("程序出现异常，变量b不能为0");
         }finally {     //处理善后工作
             System.out.println("finally");
         }

    }
}
```

```java
package com.exception;

public class TEST {
    public static void main(String[] args) {
        try {
            new TEST().test(1,0);
        } catch (ArithmeticException e) {
            e.printStackTrace();
        }
    }

    //假设这方法中，处理不了这个异常。方法上抛出异常。
    public  void test(int a, int b){
        if(b==0){
            throw new ArithmeticException();   //主动抛出异常，一般在方法中使用
        }
    }
}
```

### 7.3 自定义溢出和经验小结

自定义异常类步骤：

1. 创建自定义异常类。
2. 在方法中通过throw关键字抛出异常对象
3. 如果在当前抛出异常的方法中处理异常，可以使用try-catch语句捕获并处理；否者在方法的声明中通过throws关键字指明抛出给方法调用者的异常，继续进行下一步操作。
4. 在出现异常方法的调用者中捕获并处理异常。

```java
package com.exception;

public class TEST {

    //可能会存在异常的方法
    static void test(int a) throws MyException{
        System.out.println("传递的参数为："+a);
        if(a>10){
            throw new MyException(a);    //抛出
        }
        System.out.println("OK");
    }

    public static void main(String[] args) {
        try {
            test(11);
        }catch (MyException e){
            System.out.println("MyException=>"+e);
        }
    }


}
```

```java
package com.exception;


//自定义的异常类，要继承Exception
public class MyException extends Exception{
        //传递数字>10
    private int detail;
    public MyException(int a){
        this.detail = a;
    }

    //toString  方法构建 快捷键  ALT+ INSERT
    @Override
    public String toString() {
        return "MyException{" +
                "detail=" + detail +
                '}';
    }
}
```

经验总结

1. 处理运行时异常，采用逻辑去合理规避同时辅助try-catch处理
2. 在多重catch块后面，可以加一个catch (Excetion) 来处理可能会被遗漏的异常
3. 对于不明确的代码，也可以加上try-catch，处理异常     ，也有快捷键  ALT + ENTER
4. 尽量去处理异常，切忌只是简单地调用printStackTrace() 去打印输出
5. 具体如何处理异常，要根据不同的业务需求和异常类型去决定
6. 尽量添加finally语句块去释放占用的资源
