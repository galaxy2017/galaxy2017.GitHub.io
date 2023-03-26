---
title: Java的反射
sidebar_position: 6
---
<!--# Java 反射-->

### 表示重要

## 一、反射机制问题 ###

这种方法贼牛X，也就是通过外部文件配置，在不修改源码的情况下，来控制程序，也符合设计模式的 ocp原则（开闭原则：不修改源码，扩容功能）

可以通过修改properties   配置文件的method的配置，实现修改程序的表现方式。

举例子：

src\re.properties   文件

```
classfullpath = opp3.Cat
method=cry                         // 如果 cry 改为 hi 则会改变
```

Cat.class

```
package opp3;

public class Cat {
    private String name = "招财";
    public void hi(){
        System.out.println("hi，招财");
    }
    public void cry(){
        System.out.println("hi，喵喵叫");
    }
}
```

ReflectionQuestion.class

```java
package opp3;

import javax.swing.plaf.synth.SynthOptionPaneUI;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.util.Properties;

/**
 * 反射问题的引入
 */
public class ReflectionQuestion {

    public static void main(String[] args) throws IOException, ClassNotFoundException, InstantiationException, IllegalAccessException, NoSuchMethodException, InvocationTargetException {
        //根据配置文件 re.properties 指定信息，创建Cat对象并调用hi方法

        //传统方法 new 对象——>调用方法
//        Cat cat = new Cat();
//        cat.hi();


        //尝试做 明白反射

        //1. 使用properties类，可以读写配置文件
        Properties properties = new Properties();
        properties.load(new FileInputStream("src\\re.properties"));
        String classfullpath = properties.get("classfullpath").toString();
        String method = properties.get("method").toString();
        System.out.println(classfullpath);
        System.out.println(method);


        //2. 创建对象，传统的方法就要用  反射机制
        System.out.println("==========================================");
        //3. 使用反射机制解决
        //（1）加载类,返回Class类型的对象
        //（2）通过cls 得到加载的类 opp3.Cat 的对象实例
        Class<?> cls = Class.forName(classfullpath);
        
        Cat cat = (Cat) cls.newInstance();
        System.out.println("运行类型"+cat.getClass());
        //（3）通过 cls 得到你加载的类 opp3.Cat 的 hi 的方法对象
        // 即：在反射中，可以把方法视为对象（万物皆对象）
        Method method1 = cls.getMethod(method);
        //通过method1 调用方法，即通过方法对象来实现调用方法
        method1.invoke(cat);     //反射机制  方法.invoke(对象)                  传统：对象.方法



    }
}
```

### 1.1 反射原理图

java.reflection

![image-20220810200337253](https://img.up.cdn.nahida.cn/typora-user-images/image-20220810200337253.png)

### 1.2 反射相关的主要类

1. `java.lang.Class`：代表一个类，Class对象表示某个类加载后在堆中的对象
2. `java.lang.reflect.Method`：代表类的方法，Method对象表示某个类的方法
3. `java.lang.reflect.Field`：代表类的成员变量，Field对象表示某个类的成员变量
4. `java.lang.reflect.Constructor`：代表类的构造方法，Constructor表示构造器

这些类在java.lang 包

```java
package opp3;

public class Cat {
    private String name = "招财";
    public int age = 10;
    public Cat(){}    //无参构造器
    public Cat(String name){ this.name = name; }
    public void hi(){
        System.out.println("hi，招财");
    }
    public void cry(){
        System.out.println("hi，喵喵叫");
    }

    public static class demo01 {
    }
}
```

```
classfullpath = opp3.Cat
method=cry
```

```java
package opp3;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.lang.reflect.Constructor;
import java.lang.reflect.Field;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.util.Properties;

public class demo01 {
    public static void main(String[] args) throws IOException, ClassNotFoundException, InstantiationException, IllegalAccessException, NoSuchMethodException, InvocationTargetException, NoSuchFieldException {

        Properties properties = new Properties();
        properties.load(new FileInputStream("src\\re.properties"));
        String classfullpath = properties.get("classfullpath").toString();
        String method = properties.get("method").toString();

        //2. 使用反射机制解决
        //（1）加载类,返回Class类型的对象
        Class<?> cls = Class.forName(classfullpath);
        //（2）通过cls 得到加载的类 opp3.Cat 的对象实例
        Cat cat = (Cat) cls.newInstance();
        System.out.println("运行类型"+cat.getClass());
        //（3）通过 cls 得到你加载的类 opp3.Cat 的 hi 的方法对象
        // 即：在反射中，可以把方法视为对象（万物皆对象）
        Method method1 = cls.getMethod(method);
        //通过method1 调用方法，即通过方法对象来实现调用方法
        method1.invoke(cat);     //反射机制  方法.invoke(对象)                  传统：对象.方法


        //java.lang.reflect.Field  代表类的成员变量，Field对象表示某个类的成员变量
        //得到name
        //getField 不能得到private私有的属性
 //       Field field = cls.getField("name");  //getField 不能得到private私有的属性    private String name = "招财";
        Field field = cls.getField("age");
        // 传统写法： 对象.成员变量   ，  反射：成员变量对象.get(对象)
        System.out.println(field.get(cat));      //  public int age = 10;

        //java.lang.reflect.Constructor 代表类的构造方法，Constructor表示构造器
        Constructor<?> constructor = cls.getConstructor(); // () 中可以指定构造器参数类型 。括号里为空，则为无参构造器
        System.out.println(constructor);    //public opp3.Cat()      public Cat(){}    //无参构造器

        Constructor<?> constructor1 = cls.getConstructor(String.class);//这里传入的 String.class 就是String类的Class对象
        System.out.println(constructor1);   //public opp3.Cat(java.lang.String)   public Cat(String name){ this.name = name; }


    }
}
```

### 1.3 反射调用优化

反射的

​ 优点：可以动态的创建和使用对象（也可以是框架底层核心），使用灵活，没有反射机制，框架即时就是去底层支撑

​ 缺点：使用反射基本就是解释执行，对执行速度有影响

```java
package opp3;

import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;

public class demo02 {
    public static void main(String[] args) throws ClassNotFoundException, InvocationTargetException, InstantiationException, IllegalAccessException, NoSuchMethodException {
        m1();
        m2();

    }

    //传统方法
    public static void m1(){
        Cat cat = new Cat();
        long startTime = System.currentTimeMillis();
        for (int i = 0; i < 1000000000; i++) {
            cat.hi();
        }
        long endTime = System.currentTimeMillis();
        System.out.println("传统方法用时：" + (endTime-startTime));
    }

    //反射机制
    public static void m2() throws ClassNotFoundException, InstantiationException, IllegalAccessException, NoSuchMethodException, InvocationTargetException {
        Class<?> cls = Class.forName("opp3.Cat");
        Object o = cls.newInstance();
        Method hi = cls.getMethod("hi");
        long startTime = System.currentTimeMillis();
        for (int i = 0; i < 1000000000; i++) {
            hi.invoke(o);
        }
        long endTime = System.currentTimeMillis();
        System.out.println("反射机制用时：" + (endTime-startTime));
    }
}
```

稍微优化一下 setAccessible(true);

setAccessible：启动和禁用访问安全检查的开关。参数值为true则指反射的对象在使用时应该取消java语言访问检查。

- 提高反射效率。如果代码中必须使用反射，而该句代码需要频发的被调用，那么请设置为true
- 使得原本无法访问的私有成员也可以访问

```java
package opp3;

import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;

public class demo02 {
    public static void main(String[] args) throws ClassNotFoundException, InvocationTargetException, InstantiationException, IllegalAccessException, NoSuchMethodException {
        m1();
        m2();
        m3();

    }

    //传统方法
    public static void m1(){
        Cat cat = new Cat();
        long startTime = System.currentTimeMillis();
        for (int i = 0; i < 1000000000; i++) {
            cat.hi();
        }
        long endTime = System.currentTimeMillis();
        System.out.println("传统方法用时：" + (endTime-startTime));
    }

    //反射机制
    public static void m2() throws ClassNotFoundException, InstantiationException, IllegalAccessException, NoSuchMethodException, InvocationTargetException {
        Class<?> cls = Class.forName("opp3.Cat");
        Object o = cls.newInstance();
        Method hi = cls.getMethod("hi");
        long startTime = System.currentTimeMillis();
        for (int i = 0; i < 1000000000; i++) {
            hi.invoke(o);
        }
        long endTime = System.currentTimeMillis();
        System.out.println("反射机制用时：" + (endTime-startTime));
    }

    //反射优化
    public static void m3() throws ClassNotFoundException, InstantiationException, IllegalAccessException, NoSuchMethodException, InvocationTargetException {
        Class<?> cls = Class.forName("opp3.Cat");
        Object o = cls.newInstance();
        Method hi = cls.getMethod("hi");
        hi.setAccessible(true);   //取消访问检查
        long startTime = System.currentTimeMillis();
        for (int i = 0; i < 1000000000; i++) {
            hi.invoke(o);
        }
        long endTime = System.currentTimeMillis();
        System.out.println("反射机制用时：" + (endTime-startTime));
    }

}
```

Method的setAccessible优化

```
Method hi = cls.getMethod("hi");
        hi.setAccessible(true);
```

Field的setAccessible优化

```java
Field name = cls.getField("name");
name.setAccessible(true);    
                //因为原来的的属性是private，不能直接访问，所以需要关闭安全检测   private String name = "招财";
```

## 二、Class类 ###

1. Class也是类，因此也继承Object类
2. Class类对象不是new 出来的，而是系统生成的
3. 对于某个类的Class类对象，在内存中只有一份，因此类只加载一次
4. 每个类的实例都会记得自己是哪个Class实例所生成
5. 通过Class可以完整地得到一个类的完整结构，通过一些列API
6. Class对象是存放在堆中
7. 类的字节码二进制数据，是放在方法区，有的地方称为类的元数据（包括 方法代码，变量名，方法名，访问权限等等）

![Java 注解与反射 基础插图](https://img.up.cdn.nahida.cn/2022/08/image-20220809214840457.png)

### 2.1 获取Class对象的六种方法

```java
package opp3;

/**
 * 演示getClass()
 */
public class GetClass {
    public static void main(String[] args) throws ClassNotFoundException {


        //1. Class.forName
        // 需要知道目标类的 的位置和类名
        String classPath = "opp3.Cat";
        Class<?> cls1 = Class.forName(classPath);
        System.out.println(cls1);

        //2.类名.class  ，应用场景：用于参数传递
        Class cls2 = Cat.class;
        System.out.println(cls2);

        //3. 对象.getClass()   运用场景：有对象实例
        // 运行时
        Cat cat = new Cat();
        Class cls3 = cat.getClass();
        System.out.println(cls3);

        //4. 通过类加载器【4种】获取类的Class对象
        //（1）先得到类加载器 cat
        ClassLoader classLoader = cat.getClass().getClassLoader();
        //(2)通过类加载器得到Class对象
        Class cls4 = classLoader.loadClass(classPath);
        System.out.println(cls4);

       //cls1 cls2 cls3 cls4  其实是同一个对象
        //5. 基本数据类型（int char boolean float double byte long short）按如下方式得到Class类对象
        Class<Integer> integerClass = int.class;
        Class<Character> characterClass = char.class;
        Class<Boolean> booleanClass = boolean.class;
        System.out.println(integerClass);   //其他基本类型就不展示了


        //6. 基本数据类型对应的包装类，可以通过 .TYPE 得到Class类对象
        Class<Integer> type = Integer.TYPE;
        Class<Character> characterClass1 = Character.class;   //其他包装类BOOLEAN DOUBLE BYTE 等也一样
        System.out.println(type);


    }
}
```

### 2.2 哪些类型有Class对象

1. class：外部类、成员（内部成员、外部成员），局部内部类，匿名内部类

2. interface：接口

3. [] ：数组

4. enum：枚举

5. annotation：注解@interface

6. primitive type：基本数据类型

7. void

   ```java
   package opp3;
   
   import java.io.Serializable;
   
   public class TypeClass {
       public static void main(String[] args) {
           Class<String> stringClass = String.class;   //外部类
           Class<Serializable> serializableClass = Serializable.class;      //接口
           Class<Integer[]> aClass = Integer[].class;          //数组
           Class<float[][]> aClass1 = float[][].class;        //二维数组
           Class<Deprecated> deprecatedClass = Deprecated.class; //注解
           //枚举
           Class<Thread.State> stateClass = Thread.State.class;
           Class<Long> longClass = long.class; //基本数据类型
           Class<Void> voidClass = void.class; //void数据类型
           Class<Class> classClass = Class.class;
   
           System.out.println(stateClass);
           System.out.println(serializableClass);
           System.out.println(aClass);
           System.out.println(aClass1);
           System.out.println(deprecatedClass);
           System.out.println(serializableClass);
           System.out.println(longClass);
           System.out.println(voidClass);
           System.out.println(classClass);
   
   
       }
   }
   ```

## 三、类加载 ###

### 3.1 静态和动态加载

- 静态加载：编译时加载相关类，如果没有则报错，依赖性太强
- 动态加载：运行时加载需要的类，如果运行时不用该类，则不报错，降低依赖性

类加载时机：

1. 当创建对象时（new）   //静态加载
2. 当子类被加载时，父类也加载   //静态加载
3. 调用类种的静态成员时    //静态加载
4. 通过反射

```java
package opp3;

import java.lang.reflect.Method;

public class ClassLoad_ {
    public static void main(String[] args) throws Exception {
//        //静态加载，依赖性很强
//        //编译前必须有Cat类，否则会报错
//        Cat cat = new Cat();
//        cat.hi();
        
        
        //静态加载
        //反射 -> 动态加载
        //因为是动态加载，则就算编译前没有写有Cat类也没有报错。
        //只有当动态加载到Cat类时，当发现没有Cat类时，才会报错
        Class aClass = Class.forName("opp3.Cat");
        Object o = aClass.newInstance();                         //新建一个对象o
        Method hi = aClass.getMethod("hi");            
        hi.invoke(o);                  //激活新建对象o 的hi方法
    }
}
```

### 3.2 类加载流程图

![image-20220811124538799](https://img.up.cdn.nahida.cn/typora-user-images/image-20220811124538799.png)

![image-20220811124950807](https://img.up.cdn.nahida.cn/typora-user-images/image-20220811124950807.png)

### 3.3 类加载的五个阶段

一、加载

二、验证阶段：

1. 目的是为了去额宝Class文件的字节流种包含的信息符合当前虚拟机的要求，并且不会危害虚拟机自身安全
2. 包括：文件格式验证（是否以魔数 oxcafebabe开头）、元数据验证、字节码验证和符号引用验证
3. 可以考虑使用 -Xverify:none 参数来关闭大部分的类验证措施，缩短虚拟机加载时间（只要你项目足够大，小项目就不考虑）

三、准备阶段：

```java
//1. n1  是实例属性，不是静态变量，因此在准备阶段不会分配内存
//2. n2  是静态变量，分配内存n2 是默认初始化 0 ，而不是20
//3. n3  是static final 常量，它和静态变量不一样，因为一旦赋值就不边 n3 = 30


// class内部
//属性-成员变量-字段

public int n1 = 10;
public static int n2 = 20;
public static final int n3 = 30
```

四、解析 阶段

​ 虚拟机将常量池内的符号引用替换为直接引用的过程

五、初始化

1. 到初始化阶段，才正在执行类中定义的java程序代码，此阶段是执行`<clinit>()`方法的过程
2. `<clinit>()`方法是按语句在源文件中出现的顺序，依次自动收集类中所有的静态变量的赋值动作和静态代码块中的语句，并进行合并
3. 虚拟机会保证一个类`<clinit>()`方法在多线程环境中被正确地加锁、同步，如果多个线程同时去初始化一个类，那么只会有一个线程去执行这个类的`<clinit>()`方法，其他线程都需要阻塞等待，知道活动线程执行`<clinit>()`方法完毕。

####

## 四、 反射获取类的结构信息 ###

### 4.1 第一组

1. getName();   获取全类名
2. getSimpleName();    获取简单类名
3. getFields();   获取所有public修饰的属性，包括父类的
4. getDeclaredFields();     获取本类中所有属性
5. getMethods();      获取多有的public修饰的方法，包括父类的
6. getDeclaredMethods();    获取本类所有的方法
7. getConstructors();    获取本类所有public修饰的构造器
8. getDeclaredConstructors();    获取本类中所有的构造器
9. getPackage();    以package形式返回父类信息
10. getSuperclass();    以class形式返回父类信息
11. getInterfaces();     以Class[]形式返回接口信息
12. getAnnotations();    以Annotations[]形式返回注解信息

```java
package opp3;

import org.testng.annotations.Test;

import java.lang.annotation.Annotation;
import java.lang.reflect.Constructor;
import java.lang.reflect.Field;
import java.lang.reflect.Method;

/**
 * 如何获取类的结构信息
 */


public class Demo05 {
    public static void main(String[] args) throws Exception{
        api_01();
    }

    @Test
    public static void  api_01() throws Exception {
        /**
         * 1. getName();   获取全类名
         * 2. getSimpleName();    获取简单类名
         * 3. getFields();   获取所有public修饰的属性，包括父类的
         * 4. getDeclaredFields();     获取本类中所有属性
         * 5. getMethods();      获取多有的public修饰的方法，包括父类的
         * 6. getDeclaredMethods();    获取本类所有的方法
         * 7. getConstructors();    获取本类所有public修饰的构造器，
         * 8. getDeclaredConstructors();    获取本类中所有的构造器
         * 9. getPackage();    以package形式返回父类信息
         * 10. getSuperclass();    以class形式返回父类信息
         * 11. getInterfaces();     以Class[]形式返回接口信息
         * 12. getAnnotations();    以Annotations[]形式返回注解信息
         */

        Class cls = Class.forName("opp3.Person");
        System.out.println(cls.getName());

        System.out.println(cls.getSimpleName());

        Field[] fields = cls.getFields();
        for (Field field : fields) {
            System.out.println("本类及父类的属性" + field);
        }

        Field[] declaredFields = cls.getDeclaredFields();
        for (Field declaredField : declaredFields) {
            System.out.println("本类的属性 " + declaredField);
        }

        Method[] methods = cls.getMethods();
        for (Method method : methods) {
            System.out.println("本类及父类method：  " + method.getName());
        }

        Method[] declaredMethods = cls.getDeclaredMethods();
        for (Method declaredMethod : declaredMethods) {
            System.out.println("本类所有方法" + declaredMethod.getName());
        }

        Constructor[] constructors = cls.getConstructors();
        for (Constructor constructor : constructors) {
            System.out.println("本类constructors：  " + constructor);
        }

        Constructor[] declaredConstructors = cls.getDeclaredConstructors();
        for (Constructor declaredConstructor : declaredConstructors) {
            System.out.println("本类的declaredConstructors:    " + declaredConstructor.getName());   //这里只是输出了名字
        }

        System.out.println(cls.getPackage());

        System.out.println(cls.getSuperclass());

        Class[] interfaces = cls.getInterfaces();
        for (Class anInterface : interfaces) {
            System.out.println("接口信息：" + anInterface);
        }

        Annotation[] annotations = cls.getAnnotations();
        for (Annotation annotation : annotations) {
            System.out.println("注解信息" + annotation);
        }


    }
}


class A {
    public String hobby;
    public A(){}
}

interface IA{

}
interface  IB{

}
@Deprecated
class Person extends A implements IA,IB{
    public String name;
    protected int age;
    String job;
    private double sal;

    public void m1(){}

    protected  void  m2(){}

    void m3(){}

    //构造器
    public Person(){}
    public Person(String name){}
    private Person(String name, int age){

    }
}
```

### 4.2 第二组

java.lang.reflect.Field类

1. getModifiers :以int 形式返回修饰符

   ​ （说明：默认修饰符是0 ， public 是1 ， private是2， protected是 4 ，static是8， final 是16）

   ​   其他的举例说明：修饰符  `public static`：1+8 = 9

2. getType：以Class形式返回类型

3. getName  :  返回属性名

```java
public void api_02() throws Exception{
    Class cls = Class.forName("opp3.Person");
    Field[] declaredFields = cls.getDeclaredFields();
    for (Field declaredField : declaredFields) {
        System.out.println("本类的所有属性 " + declaredField.getName()
            +" 该属性的修饰符值 " + declaredField.getModifiers()
            + "  该属性的类型 " + declaredField.getType());
    }
}
```

第三组：java.lang.reflect.Method类

1. getModifiers :以int 形式返回修饰符

   （说明：默认修饰符是0 ， public 是1 ， private是2， protected是 4 ，static是8， final 是16）

2. getReturnType： 以Class形式获取 返回类型

3. getName：返回方法名

4. getParameterTypes：以Class[]返回参数类型数组

```java
package opp3;

import org.testng.annotations.Test;

import java.lang.annotation.Annotation;
import java.lang.reflect.Constructor;
import java.lang.reflect.Field;
import java.lang.reflect.Method;
import java.lang.reflect.Type;

/**
 * 如何获取类的结构信息
 */


public class Demo05 {
    public static void main(String[] args) throws Exception{
        api_01();
    }

    @Test
    public void api_02() throws Exception{
        Class cls = Class.forName("opp3.Person");
        Field[] declaredFields = cls.getDeclaredFields();
        for (Field declaredField : declaredFields) {
            System.out.println("本类的所有属性 " + declaredField.getName()
                +" 该属性的修饰符值 " + declaredField.getModifiers()
                + "  该属性的类型 " + declaredField.getType());
        }

        Method[] declaredMethods = cls.getDeclaredMethods();
        for (Method declaredMethod : declaredMethods) {
            System.out.println("本类所有方法：" + declaredMethod.getName()
                +" 该方法的访问修饰符值："+declaredMethod.getModifiers()
                +" 该方法的返回类型：" + declaredMethod.getReturnType()
            );

            //输出当前这个方法的形参数组情况
            Type[] genericParameterTypes = declaredMethod.getGenericParameterTypes();
            for (Type genericParameterType : genericParameterTypes) {
                System.out.println("该方法的形参类型：" + genericParameterType);
            }
        }


    }

  
}


class A {
    public String hobby;
    public A(){}
}

interface IA{

}
interface  IB{

}
@Deprecated
class Person extends A implements IA,IB{
    public String name;
    protected int age;
    protected static int id;    //修饰符值 ： 4 + 8 = 12
    String job;
    private double sal;

    public void m1(String name,int age,double sal){}

    protected String  m2(){
        return null;
    }

    void m3(){}

    //构造器
    public Person(){}
    public Person(String name){}
    private Person(String name, int age){

    }
}
```

第四组：java.lang.reflect.Constructor类

1. getModifiers :以int 形式返回修饰符

   （说明：默认修饰符是0 ， public 是1 ， private是2， protected是 4 ，static是8， final 是16）

2. getName：返回构造器名（全类名）

3. getParameterTypes：以Class[]返回参数类型数组

```java
package opp3;

import org.testng.annotations.Test;

import java.lang.annotation.Annotation;
import java.lang.reflect.Constructor;
import java.lang.reflect.Field;
import java.lang.reflect.Method;
import java.lang.reflect.Type;

/**
 * 如何获取类的结构信息
 */


public class Demo05 {
    public static void main(String[] args) throws Exception{
        api_01();
    }

    @Test
    public void api_02() throws Exception{
        Class cls = Class.forName("opp3.Person");


        Constructor[] declaredConstructors = cls.getDeclaredConstructors();
        for (Constructor declaredConstructor : declaredConstructors) {

            System.out.println("============================");
            System.out.println("本类的declaredConstructors:    " + declaredConstructor.getName());   //这里只是输出了名字

            Class[] parameterTypes = declaredConstructor.getParameterTypes();
            for (Class parameterType : parameterTypes) {
                System.out.println("该构造器的形参类型：" + parameterType);
            }
        }

    }

}


class A {
    public String hobby;
    public A(){}
}

interface IA{

}
interface  IB{

}
@Deprecated
class Person extends A implements IA,IB{
    public String name;
    protected int age;
    protected static int id;    //修饰符值 ： 4 + 8 = 12
    String job;
    private double sal;

    public void m1(String name,int age,double sal){}

    protected String  m2(){
        return null;
    }

    void m3(){}

    //构造器
    public Person(){}
    public Person(String name){}
    private Person(String name, int age){

    }
}
```

## 五、反射爆破

### 5.1 创建实例

1. 方式一：调用类中的public修饰的无参构造器
2. 方式二：调用类中的指定构造器
3. Class类相关方法
   - newInstance：调用类中的无参构造器，获取对应类的对象
   - getConstructor(Class...clazz)：根据参数列表，获取对应的构造器对象
   - getDecalaredConstructor(Class...clazz)：根据参数列表，获取对应的构造器对象
4. Constructor类相关说法
   - setAccessible：爆破
   - newInstance(Object...obj)：调用构造器

```java
package opp3;

import java.lang.reflect.Constructor;

/**
 * 通过反射机制创建实例
 */
public class Demo06 {
    public static void main(String[] args) throws Exception {

        //1. 获取User类的Class对象
        Class<?> cls = Class.forName("opp3.User");
        //2.通过public的无参构造器创建实例
        Object o = cls.newInstance();
        System.out.println(o);

        //3.通过public的有参构造器创建实例
        //此时此刻的constructor对象：
        /*
            public User(String name){    //public的有参构造器
                this.name = name;
            }
         */
        //3.1 先得到对应的构造器
        Constructor<?> constructor = cls.getConstructor(String.class);
        //3.2 创建实例，并换入实参
        Object o1 = constructor.newInstance("纳西妲");
        System.out.println(o1);

        //4.通过非public的有参构造器创建实例
        //4.1 先得到私有private 的构造器
        /*
            private User(int age, String name) {    //private的有参构造器
                this.age = age;
                this.name = name;
            }
         */
        Constructor declaredConstructors = cls.getDeclaredConstructor(int.class, String.class);
        //因为是私有的构造器，所以需要  declaredConstructors.setAccessible(true);  【爆破】
        //4.2 创建实例
        declaredConstructors.setAccessible(true);
        Object o2 = declaredConstructors.newInstance(6000, "摩拉克斯");
        System.out.println(o2);

    }
}

class User{
    private int age = 500;
    private String name = "Nahida";

    public User(){    //无参构造器  public

    }

    private User(int age, String name) {    //private的有参构造器
        this.age = age;
        this.name = name;
    }

    public User(String name){    //public的有参构造器
        this.name = name;
    }
    @Override
    public String toString() {
        return "User{" +
                "age=" + age +
                ", name='" + name + '\'' +
                '}';
    }
}
```

### 5.2 操作属性

如何通过反射访问类中的成员

1. 根据属性名获取Field对象

   ​ `Field f = clazz 对象.getDeclaredField(属性名)`

2. 爆破：`f.setAccessible(true)     //f是Field`

3. 访问

   `f.set(o,值)；       //o表示对象`  

   `syso(f.get(o));   // o表示对象`

4. 如果是静态属性，则set和get中的参数o，可以写成null

```java
package opp3;

import java.lang.reflect.Field;

/**
 * 反射操作属性
 */
public class Demo07 {
    public static void main(String[] args) throws Exception {
        //1.得到Student对应的Class对象
        Class<?> aClass = Class.forName("opp3.Student");

        //2. 创建对象
        Object o = aClass.newInstance(); //o  运行类型就是Student
        System.out.println(o);

        //3. 使用反射得到 age 属性对象
        Field age = aClass.getField("age");
        age.set(o,88);   //通过反射操作属性，设置age属性的值为88
        System.out.println(o);
        System.out.println(age.get(o));   //返回age属性的值

        //4. 使用反射操作name属性
        Field name = aClass.getDeclaredField("name");

        //name 在类中是private私有的，需要setAccessible(true)
        name.setAccessible(true);
//        name.set(o,"巴巴托斯");      也可以如下一句：
        name.set(null,"巴巴托斯");        //因为name是静态static的，所以 o 也可以是null,   【注意】不是静态的的这么写会报错
        System.out.println(o);
        System.out.println(name.get(o));  //获取属性值


    }
}

class Student{
    public int age;             //公共 age
    public static String name;

    public Student(){   //构造器

    }

    @Override
    public String toString() {
        return "Student{" +
                "age=" + age +
                "，name=" + name +
                '}';
    }
}
```

### 5.3 操作方法

如何通过反射访问类中的成员

访问方法：

1. 根据方法名获取Method方法对象

   ​ `Method f = clazz 对象.getDeclaredMethod(方法名, XX.class)`  //得到本类所有方法

2. 获取对象：`Object o = clazz.newInstance();`

3. 爆破：`m.setAccessible(true);     //m是Method`

4. 访问

   `Object returnValue = m.invoke(o,实参列表);`

5. 如果是静态属性，则invoke中的参数o，可以写成null

```java
package opp3;

import java.lang.reflect.Method;

/**
 * 演示反射调用发发
 */
public class Demo08 {
    public static void main(String[] args) throws Exception {

        //1. 得到Boss 类对应Class对象
        Class<?> aClass = Class.forName("opp3.Boss");

        //2. 创建对象
        Object o = aClass.newInstance();

        //3. 调用public 的hi方法
//        Method hi = aClass.getMethod("hi", String.class);              //getMethod() 获取公共方法，这里可行，但是私有方法不行不能用
        //得到hi方法
        Method hi1 = aClass.getDeclaredMethod("hi", String.class);      //getDeclaredMethod()  获得类的所有方法，这里也可行
        hi1.invoke(o,"香菱");

        //4. 调用私有方法
        Method say = aClass.getDeclaredMethod("say", int.class, String.class, char.class);
        say.setAccessible(true);
        System.out.println(say.invoke(o,20,"云堇",'女'));
        //因为say方法是静态的，还可以这么写： o 写成null
        System.out.println(say.invoke(null,17,"胡桃",'女'));

        //返回值：
        //5. 在反射中，如果方法有返回值，统一返回object,但是它运行类型和方法定义的返回类型一致
        Object invoke = say.invoke(null, 16, "行秋", '男');
        System.out.println("invoke的运行类型：" + invoke.getClass());

    }
}

class Boss{
    public int age;
    private static String name;

    public Boss(){

    }

    private static  String say(int n, String s , char c){
        return n+ " " + s + " " + c;
    }

    public void hi(String s){
        System.out.println("hi " + s);
    }
}
```

## 六、作业

![image-20220811165706388](https://img.up.cdn.nahida.cn/typora-user-images/image-20220811165706388.png)

```java
package opp3.opp32;

import java.lang.reflect.Field;
import java.lang.reflect.Method;

public class HomeWork {
    public static void main(String[] args) throws Exception {
        //1. 得到PrivateTest类对应的Class对象
        Class<?> cls = Class.forName("opp3.opp32.PrivateTest");

        //2. 创建对象实例
        Object o = cls.newInstance();

        //3. 得到name属性
        Field name = cls.getDeclaredField("name");

        //4. 爆破
        name.setAccessible(true);
        name.set(o,"七七");

        //5. 获得getName方法对象
        Method getName = cls.getDeclaredMethod("getName");

        //6. 因为getName是公有的，所以直接输出
        Object invoke = getName.invoke(o);
        System.out.println("name的属性值：" + invoke );

    }

}

class PrivateTest{
    private String name = "HelloKitty";
    public String getName(){
        return name;
    }
}
```

![image-20220811170953180](https://img.up.cdn.nahida.cn/typora-user-images/image-20220811170953180.png)

```Java
package opp3.opp32;

import java.lang.reflect.Constructor;
import java.lang.reflect.Method;

public class HomeWork02 {
    public static void main(String[] args) throws Exception {
        //1. 利用Class类的forName 得到File类的class对象
        Class<?> cls = Class.forName("java.io.File");
        //2. 获得所有的构造器
        Constructor<?>[] declaredConstructors = cls.getDeclaredConstructors();
        //遍历输出所有的的构造器
        for (Constructor<?> declaredConstructor : declaredConstructors) {
            System.out.println("File的构造器：" + declaredConstructor);
        }
        //3. 单独的得到public java.io.File(java.lang.String)
        Constructor<?> declaredConstructor = cls.getDeclaredConstructor(String.class);
        String filePath = "e://mynew.txt";
        Object file = declaredConstructor.newInstance(filePath);    //创建文件File对象
        //4. 调用createNewFile()方法，创建文件
        Method createNewFile = cls.getDeclaredMethod("createNewFile");
        createNewFile.invoke(file);
        //file 的运行类型就是File
        System.out.println(file.getClass());
        System.out.println("文件创建成功");


    }
}
```
