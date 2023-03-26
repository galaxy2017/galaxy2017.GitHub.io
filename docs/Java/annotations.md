---
title: Java的注解与反射
sidebar_position: 5
---
## 一、注解

### 1.1什么是注解

Annotation注解

Annotation的作用：不是程序本身，可以对程序做出解释。可以被其他程序（比如 编译器等）读取

annotation的格式： 注解是以 ”@注释名“ 再代码中存在的，还可以添加一写参数值，例如@SupperWarnings(value = "unchecked")

Annotation在哪可以使用？ 可以在package，class，method，field等上面，相当于给他们添加额外的辅助信息，我们可以通过反射机制编程实现对这些元数据的访问

### 1.2 内置注解

`@Override`  重写

`@Deprecated`  不鼓励使用，但是可以使用

`@SuppreWarning`   警告

### 1.3 元注解

元注解的作用是负责注解其他注解

@Target

@Retention

@Documented

@ Inherited

```java
package opp2;

import java.lang.annotation.*;

public class demo01 {
    public void test(){

    }
}

//定义一个注解
//Target 表示我们的注解可以用在上面地方
@Target(value = {ElementType.METHOD, ElementType.TYPE})

//Retention 表示我们的注解在上面地方有效
//RUNTIME >CLASS >SOURCES
@Retention(value = RetentionPolicy.RUNTIME)

//Documented 表示释放将我们的注解生成在JavaDoc中
@Documented

//Inherited 子类可以继承父类的注解
@Inherited
@interface MyAnnotation{

}
```

### 1.4 自定义注解

使用@interface 自定义注解时，自动继承import java.lang.annotation.Annotation接口

- @interface用来声明一个注解，格式： public @interface 注解名{定义内容}
- 其中的每一个方法实际上声明的是一个配置函数
- 方法的名称就是参数的名称
- 返回值类型就是参数的类型（返回值只能是基本类型，class，string，enum）
- 可以通过default来声明参数默认值
- 如果只有一个参数成员，一般参数名为value
- 注解元素必须要有值，我们定义注解元素时，经常使用空字符串，0作为默认值

```java
package opp2;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

public class demo02 {

    //注解可以显示赋值,如果没有赋值就必须赋值
    @MyAnnotation2(name = "钟离")
    public void test(){}

    @MyAnnotation3("")
    public void test2(){}
}


@Target(value = {ElementType.METHOD, ElementType.TYPE})
@Retention(value = RetentionPolicy.RUNTIME)
@interface MyAnnotation2{
    //直接的参数：参数类型 +参数名（）
    String name();
    String color() default "";
    int age() default 0;
    int id() default -1;

    String[] schools() default {""};
}


@Target(value = {ElementType.METHOD, ElementType.TYPE})
@Retention(value = RetentionPolicy.RUNTIME)
@interface MyAnnotation3{
    String value();
}
```

## 二、 反射

java.Reflection

时Java被视为动态语言的关键，反射机制允许程序在执行期借助Reflection api获得任何类的信息，并能直接操作任意对象的内部属性及方法。

### 2.1 获得反射对象

getClass()

```java
package opp2;

/**
 * 什么是反射
 */
public class demo03 {
    public static void main(String[] args) throws ClassNotFoundException {
        Class<?> c1 = Class.forName("opp2.User");
        Class<?> c2 = Class.forName("opp2.User");
        Class<?> c3 = Class.forName("opp2.User");
        System.out.println(c1);

        //一个类在内存中只有一个class对象
        //一个类被加载后，类的整个过程都会被封装在Class对象中
        System.out.println(c1.hashCode());
        System.out.println(c2.hashCode());
        System.out.println(c3.hashCode());



    }
}

//实体类
class User{
    private String name;
    private int id;
    private int age;

    public User(){

    }

    public User(String name, int id, int age) {
        this.name = name;
        this.id = id;
        this.age = age;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    @Override
    public String toString() {
        return "User{" +
                "name='" + name + '\'' +
                ", id=" + id +
                ", age=" + age +
                '}';
    }
}
```

### 2.2 得到class类的几种方式

![image-20220809214840457](https://img.up.cdn.nahida.cn/typora-user-images/image-20220809214840457.png)

```java
package opp2;

public class demo04 {
    public static void main(String[] args) throws ClassNotFoundException {
        Person person = new student();
        System.out.println(person.name);

        //方式一 ：通过对象获得
        Class c1 = person.getClass();
        System.out.println(c1.hashCode());

        //方法二：forName 获得
        Class c2 = Class.forName("opp2.student");
        System.out.println(c2.hashCode());

        //方法三： 类名.class获得
        Class c3 = student.class;
        System.out.println(c3.hashCode());

        //方法四 基本内置类型的包装类都有一个Type属性
        Class c4 = Integer.TYPE;
        System.out.println(c4);

        //方法五：获得父类类型
        Class c5 = c1.getSuperclass();
        System.out.println(c5);
    }
}

class Person{
    String name;
    public Person(){}

    public Person(String name) {
        this.name = name;
    }

    @Override
    public String toString() {
        return "Person{" +
                "name='" + name + '\'' +
                '}';
    }
}
class student extends Person{
    public  student(){
        this.name = "学生";
    }
}

class teacher extends Person{
    public teacher(String name) {
        this.name = "老师";
    }
}
```

### 2.3 所有类型的Class对象

class：外部类、成员（内部成员、外部成员），局部内部类，匿名内部类

interface：接口

[]  ：数组

enum：枚举

annotation：注解@interface

primitive type：基本数据类型

void

```java
package opp2;

import javax.xml.bind.Element;

public class demo {
    public static void main(String[] args) {
        Class c1 = Object.class;    //类
        Class c2 = Comparable.class;   //接口
        Class c3 = String[].class;     //一维数组
        Class c4 = int[][].class;   //二维数组
        Class c5 = Override.class;   //注解
        Class c6 = Element.class;    //枚举
        Class c7 = Integer.class;    //基本数据类型
        Class c8 = void.class;     //void
        Class c9 = Class.class;    //Class

        System.out.println(c1);
        System.out.println(c2);
        System.out.println(c3);
        System.out.println(c4);
        System.out.println(c5);
        System.out.println(c6);
        System.out.println(c7);
        System.out.println(c8);
        System.out.println(c9);

        int[] a = new int[10];
        int[] b = new int[100];
        System.out.println(a.getClass().hashCode());
        System.out.println(b.getClass().hashCode());     //只要元素类型与维度一样，就是同一个class
    }
}
```

### 2.4 类加载内存分析

加载------>链接---->初始化

```java
package opp2;

public class demo06 {
    public static void main(String[] args) {
        A a = new A();
        System.out.println(a.m);
        /**
         * 1.【加载】到内存，会产生一个类对应的Class对象
         * 2.【链接】，链接后， m = 0
         * 3.【初始化】：
         *  <clint>(){
         *      system.out.println("A类的静态代码块初始化");
         *      m = 300;
         *      m = 100;
         *  }
         */
    }
}

class A{
    static {
        System.out.println("A类的静态代码块");
        m = 300;
    }

    /**
     * m = 300
     *    ↓
     * m = 100
     */
    static int m = 100;
    public A(){
        System.out.println("A类的无参构造初始化");
    }
}
```

### 2.5 分析类初始化

- 类的主动引用（一定会发生初始化）
- 类的被动引用（不会发生类的初始化）

```java
package opp2;

public class demo07 {

    static {
        System.out.println("main类被加载");
    }

    public static void main(String[] args) throws ClassNotFoundException {
        //1. 主动引用
        S s = new S();
        //反射也会主动引用
        Class.forName("opp.demo07.S");

        //2. 不会产生类的引用
        System.out.println(S.b);   //静态域 访问
        S[] array = new S[5];     //数组访问
        System.out.println(S.M);   //访问常量
    }
}

class F{
    static int b = 2;
    static {
        System.out.println("父类被加载");
    }
}

class S extends F{
    static {
        System.out.println("子类被加载");
        m = 300;
    }
    static int m = 100;
    static final int M = 1;    //常量
}
```

### 2.5 类加载器

![image-20220810101042291](https://img.up.cdn.nahida.cn/typora-user-images/image-20220810101042291.png)

```java
package opp2;

public class demo08 {
    public static void main(String[] args) throws ClassNotFoundException {
        //获取系统类的加载器
        ClassLoader systemClassLoader = ClassLoader.getSystemClassLoader();
        System.out.println(systemClassLoader);
        //获取系统类加载器的父类加载器->扩展加载器
        ClassLoader parent = systemClassLoader.getParent();
        System.out.println(parent);

        //获取扩展类的父类加载器--->根加载器（c/c++ ,java无法获取，显示为 null）
        ClassLoader parent1 = parent.getParent();
        System.out.println(parent1);    //null

        //测试当前类是哪个加载器加载的
        ClassLoader aClass = Class.forName("opp2.demo08").getClassLoader();
        System.out.println(aClass);

        //测试JDK
        aClass = Class.forName("java.lang.Object").getClassLoader();
        System.out.println(aClass);   //null


        //如何让获得系统类加载器可以加载的路径
        System.out.println(System.getProperty("java.class.path"));

    }
}
```

### 2.6 获取类的运行时结构

通过反射获取运行时类的完整结构

Field、Method、Constructor、Superclass、Interface、Annotation

```java
package opp2;

import java.lang.reflect.Constructor;
import java.lang.reflect.Field;
import java.lang.reflect.Method;

public class demo09 {
    public static void main(String[] args) throws ClassNotFoundException, NoSuchFieldException, NoSuchMethodException {
        Class<?> c1 = Class.forName("opp2.User");

        User user = new User();
        //c1 = user.getClass();

        //获得类的名字
        System.out.println(c1.getName());
        System.out.println(c1.getSimpleName());

        //获得类的属性
        Field[] field = c1.getFields();   //只能找到public属性
//        for (Field field1 : field){
//            System.out.println(field1);
//        }
//
        field = c1.getDeclaredFields();
        for (Field fields : field){        //找到全部属性
            System.out.println(fields);
        }

        Field name = c1.getDeclaredField("name");//获得指定属性的值
        System.out.println(name);

        //获得类的方法
        System.out.println("=====================================================");
        Method[] methods = c1.getMethods();         //获取本类及父类的全部public方法
        for (Method method :methods){
            System.out.println(method);
        }

        methods = c1.getDeclaredMethods();                  //获取本类的所有方法
        System.out.println("============================");
        for (Method method:methods){

            System.out.println("getDeclaredMethods  " + method );
        }

        //获得指定方法
        System.out.println("=======================");
        Method getName = c1.getMethod("getName",null);
        Method setName = c1.getMethod("setName",String.class);
        System.out.println(getName);
        System.out.println(setName);

        //获得构造器
        System.out.println("======================");
        Constructor[] constructors = c1.getConstructors();
        for (Constructor constructor:constructors){
            System.out.println(constructor);
        }
        constructors = c1.getDeclaredConstructors();
        for (Constructor constructor: constructors){
            System.out.println("getDeclaredConstructors" + constructor);
        }

        //获得指定构造器
        Constructor<?> declaredConstructor = c1.getDeclaredConstructor(String.class, int.class, int.class);
        System.out.println("指定" + declaredConstructor);

    }
}
```

### 2.7 动态创建对象执行方法

能做啥？

步骤：

1. 通过Class类的getDeclaredConstructor(Class ... parameterType)获取本类的指定形参类型的构造器
2. 向构造器的行参中传递一个对象素组进去，里面包含了构造器中所需的各个参数
3. 通过Constructor实例化对象

```java
package opp2;

import java.lang.reflect.Constructor;
import java.lang.reflect.Field;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;

public class demo10 {
    public static void main(String[] args) throws ClassNotFoundException, InstantiationException, IllegalAccessException, NoSuchMethodException, InvocationTargetException, NoSuchFieldException {

        //获得对象
        Class<?> c1 = Class.forName("opp2.User");

        //构造对象
        User user = (User)c1.newInstance();   //本质是构造了无参构造器
        System.out.println(user);

        //通过构造器创建对象
        Constructor<?> declaredConstructor = c1.getDeclaredConstructor(String.class, int.class, int.class);
        User user1 = (User) declaredConstructor.newInstance("摩拉克斯",001,18);
        System.out.println(user1);

        //通过反射调用普通方法
        User user2 =(User) c1.newInstance();
        //通过反射获取一个方法
        Method setName = c1.getDeclaredMethod("setName", String.class);
        //invoke:激活
        //（对象，方法的值）
        setName.invoke(user2,"巴巴托斯");
        System.out.println(user2.getName());


        //通过反射操作属性
        User user3 = (User) c1.newInstance();
        Field name = c1.getDeclaredField("name");

        name.setAccessible(true);   //关闭安全检测。因为原来的的属性是private，不能直接访问，所以需要关闭安全检测
        name.set(user3,"巴尔泽布");
        System.out.println(user3.getName());


    }
}
```

### 2.8 性能对比分析

setAccessible：启动和禁用访问安全检查的开关。参数值为true则指反射的对象在使用时应该取消java语言访问检查

- 提高反射效率。如果代码中必须使用反射，而该句代码需要频发的被调用，那么请设置为true
- 使得原本无法访问的私有成员也可以访问

参数值为false则指反射的对象在使用时对java语言进行访问检查

```java
package opp2;

import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;

public class demo11 {
    public static void test1(){
        User user = new User();
        long startTime = System.currentTimeMillis();
        for (int i = 0; i < 1000000000; i++) {
            user.getName();
        }
        long endTime = System.currentTimeMillis();
        System.out.println("普通方法执行10亿次  " + (endTime-startTime)+"ms");
    }

    public static void test2() throws NoSuchMethodException, InvocationTargetException, IllegalAccessException {
        User user = new User();
        Class c1 = user.getClass();
        Method getName = c1.getDeclaredMethod("getName", null);
        long startTime = System.currentTimeMillis();
        for (int i = 0; i < 1000000000; i++) {
            getName.invoke(user,null);
        }
        long endTime = System.currentTimeMillis();
        System.out.println("映射方法执行10亿次  " + (endTime-startTime) +"ms");
    }

    public static void test3() throws NoSuchMethodException, InvocationTargetException, IllegalAccessException {
        User user = new User();
        Class c1 = user.getClass();
        Method getName = c1.getDeclaredMethod("getName", null);
        getName.setAccessible(true);

        long startTime = System.currentTimeMillis();
        for (int i = 0; i < 1000000000; i++) {
            getName.invoke(user,null);
        }
        long endTime = System.currentTimeMillis();
        System.out.println("setAccessible映射方法执行10亿次  " + (endTime-startTime)+"ms");
    }

    public static void main(String[] args) throws InvocationTargetException, NoSuchMethodException, IllegalAccessException {
        test1();
        test2();
        test3();
    }

}
```

### 2.9 获取泛型信息

Java采用泛型擦除的机制来引入泛型，Java中的泛型仅仅是给编辑器javac使用的，确保数据的安全性和免去强制类型转换问题，但是，一旦编译完成，所有和泛型有关的类型全部擦除

为了通过反射操作这些类型，Java新增了ParameterizedType，GenericArrayType，TypeVariable和WindcardType几种类型来代表不能被归一到Class类中的类型但是又和原始类型齐名的类型

- ParameterizedType：表示一种参数化类型，不如Collection
- GenericArrayType：表示一种元素类型是参数化类型或者类型变量的数组类型
- TypeVariable：是各种类型变量的公共父接口
- WindcardType：代表一种通配符类型的公示

```java
package opp2;

import java.lang.reflect.Method;
import java.lang.reflect.ParameterizedType;
import java.lang.reflect.Type;
import java.util.List;
import java.util.Map;

/**
 * 通过反射回去泛型
 */
public class demo12 {
    public void test(Map<String,User> map, List<User>list){
        System.out.println("test01");
    }
    public Map<String,User> test02(){
        System.out.println("test02");
        return null;
    }

    public static void main(String[] args) throws NoSuchMethodException {
        Method method = demo12.class.getMethod("test", Map.class, List.class);
        Type[] genericParameterTypes = method.getGenericParameterTypes();
        for (Type ge : genericParameterTypes){
            System.out.println("#" + ge);
            if (ge instanceof ParameterizedType){
                Type[] actualTypeArguments = ((ParameterizedType) ge).getActualTypeArguments();
                for (Type act : actualTypeArguments){
                    System.out.println(act);
                }
            }
        }
        method = demo12.class.getMethod("test02", null);
        Type genericParameterType = method.getGenericReturnType();
        if (genericParameterType instanceof ParameterizedType){
            Type[] actualTypeArguments = ((ParameterizedType)     genericParameterType).getActualTypeArguments();
            for (Type act : actualTypeArguments){
                System.out.println(act);
            }
        }
    }
}
```

### 2.10 获取注解信息

ORM 对象关系映射

```Java
package opp2;

import java.lang.annotation.*;
import java.lang.reflect.Field;

/**
 * 练习反射操作注解
 */
public class demo13 {
    public static void main(String[] args) throws ClassNotFoundException, NoSuchFieldException {
        Class<?> c1 = Class.forName("opp2.Student2");
        Annotation[] annotation = c1.getAnnotations();

        //通过反射获得注解
        for (Annotation annotation1:annotation){
            System.out.println(annotation1);
        }

        //获得注解的value值
        TableM tableM = c1.getAnnotation(TableM.class);
        String value = tableM.value();
        System.out.println(value);

        //获得类指定的注解
//        Field name = c1.getDeclaredField("name");
        Field name = c1.getDeclaredField("id");
        Fk annotation1 = name.getAnnotation(Fk.class);
        System.out.println(annotation1.columnName());
        System.out.println(annotation1.Type());
        System.out.println(annotation1.length());


    }
}

@TableM("db_student")
class Student2{
    @Fk(columnName = "db_id",Type = "int", length = 10)
    private int id;
    @Fk(columnName = "db_age",Type = "int", length = 10)
    private int age;
    @Fk(columnName = "db_name", Type = "varchar", length = 3)
    private String name;
    public Student2(){

    }

    public Student2(int id, int age, String name) {
        this.id = id;
        this.age = age;
        this.name = name;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Override
    public String toString() {
        return "Student2{" +
                "id=" + id +
                ", age=" + age +
                ", name='" + name + '\'' +
                '}';
    }
}


//类名的注解
@Target(ElementType.TYPE)
@Retention(RetentionPolicy.RUNTIME)
@interface TableM{
    String value();
}


//属性的注解
@Target(ElementType.FIELD)
@Retention(RetentionPolicy.RUNTIME)
@interface Fk{
    String columnName();
    String Type();
    int length();
}
```
