---
title: Java的线程基础
sidebar_position: 7
---

<!--# 线程基础-->

## 一、进程线程

（数据结构）进程是程序的一次执行过程，或者是政治运行的一个程序。线程是由进程创建，是进程的一个实体，一个进程可以拥有多个线程。

## 二、并发并行

单线程：同一个时刻，只允许执行一个线程

多线程：同一时刻，可以执行多个线程

并发：同一时刻，多个任务交替执行。单核CPU实现的多任务就是并发

并行：同一时刻，多个任务同事执行。多核CPU可以实现并行

```java
package opp1;

import org.omg.SendingContext.RunTime;

public class demo01 {
    public static void main(String[] args) {
        Runtime runtime = Runtime.getRuntime();
        int cpuNums = runtime.availableProcessors();
        System.out.println(cpuNums);  //显示cpu核数

    }
}
```

## 三、继承Thread创建线程

创建线程的两种方法：

- 继承Thread类，重写run方法
- 实现runnable接口，重写run方法

```java
package opp1;



/**
 * 继承Thread创建线程
 */
public class demo02 {
    public static void main(String[] args) {
        //创建Cat对象
        Cat cat = new Cat();
        cat.start();   //启动线程
    }
}


//1. 当一个类继承了Thread类，该类就可以当作线程使用
//2. 我们会重写run方法，写上自己的业务代码
//3. run Thread 类 实现了 Runnable接口的run方法

class Cat extends Thread{
    int times = 0;
    @Override
    public void run() {   //重写run方法，写上自己的业务逻辑
        while (true) {
            //每隔一秒。控制台输出“喵喵”，共10次.执行完毕结束
            System.out.println("喵喵" + (++times));
            try {
                Thread.sleep(1000);
            } catch (InterruptedException e) {
                throw new RuntimeException(e);
            }
            if (times ==10){
                break;  //当times=10时候，进程退出
            }
        }
    }
}
```

## 四、多线程机制

当mian线程启动一个子线程 Thread-0 ，主线程不会阻塞，会继续执行

```java
package opp1;



/**
 * 继承Thread创建线程
 */
public class demo02 {
    public static void main(String[] args) throws InterruptedException {
        //创建Cat对象
        Cat cat = new Cat();
        cat.start();
        //当mian线程启动一个子线程 Thread-0 ，主线程不会阻塞，会继续执行
        //这时，我们的子线程会交替执行

        System.out.println("主线程"+ Thread.currentThread().getName());
        for (int i = 0; i<60 ; i++){
            System.out.println("主线程i="+ i);
            Thread.sleep(1000);
        }
    }
}


//1. 当一个类继承了Thread类，该类就可以当作线程使用
//2. 我们会重写run方法，写上自己的业务代码
//3. run Thread 类 实现了 Runnable接口的run方法

class Cat extends Thread{
    int times = 0;
    @Override
    public void run() {   //重写run方法，写上自己的业务逻辑
        while (true) {
            //每隔一秒。控制台输出“喵喵”，共80次.执行完毕结束
            System.out.println("喵喵" + (++times) + " 子线程"+Thread.currentThread().getName());
            try {
                Thread.sleep(1000);
            } catch (InterruptedException e) {
                throw new RuntimeException(e);
            }
            if (times ==80){
                break;  //当times=80时候，进程退出
            }
        }
    }
}
```

![image-20220809085507372](https://img.up.cdn.nahida.cn/typora-user-images/image-20220809085507372.png)

### 4.1 start

**为什么调用stat方法？**

`cat.start();  //最终会执行cat的run（）方法`

`cat.run();  //run方法只是一个普通方法，没有真正启动一个线程,就会把run方法执行完毕，才向下执行`

![image-20220809090450789](https://img.up.cdn.nahida.cn/typora-user-images/image-20220809090450789.png)

### 4.2 Runnable创建线程

```java
package opp1;

/**
 * Runnable接口 实现创建线程
 * 这里底层使用了设计模式：代理模式
 */

public class demo03 {
    public static void main(String[] args) {
        Dog dog = new Dog();
//        dog.start();     这里不能用start

        //创建Thread对象,把dog对象（实现Runnable），放入Thread，从而调用start
        Thread thread = new Thread(dog);
        thread.start();
    }
}

class Dog implements Runnable{    //通过Runnable接口，开发线程
    int count = 0;
    @Override
    public void run() {
        while(true){
            System.out.println("小狗汪汪叫 " +(++count) + Thread.currentThread().getName());
            try {
                Thread.sleep(1000);
            } catch (InterruptedException e) {
                throw new RuntimeException(e);
            }
            if (count == 10){
                break;
            }
        }
    }
}
```

### 4.3 子线程

```java
package opp1;

/**
 * main方法实现两个子线程
 */
public class demo04 {
    public static void main(String[] args) {
        T1 t1 = new T1();
        T2 t2 = new T2();
        Thread thread = new Thread(t1);     //新建一个进程
        Thread thread1 = new Thread(t2);
//  Thread thread2 = new Thread(t2);
        thread.start();   //启动第一个子线程
        thread1.start();   //启动第二个子线程
    }
}

class  T1 implements Runnable{

    int count = 0;
    @Override
    public void run() {

        while (true) {
            System.out.println("hello world" + (++count));

            try {
                Thread.sleep(1000);
            } catch (InterruptedException e) {
                throw new RuntimeException(e);
            }

            if (count == 5) {
                break;
            }
        }
    }
}

class  T2 implements Runnable{

    int count = 0;
    @Override
    public void run() {

        while (true) {
            System.out.println(" hi" + (++count));

            try {
                Thread.sleep(1000);
            } catch (InterruptedException e) {
                throw new RuntimeException(e);
            }

            if (count == 5) {
                break;
            }
        }
    }
}
```

### 4.4 多线程售票

经典售票问题

```java
package opp1;

/**
 * 使用多线程，模拟三个窗口同时售票，每个窗口都会卖出100张票
 */

public class demo05 {
    public static void main(String[] args) {

        /**
         * 使用继承 Thread
         * 会出现超卖的现象，sleep时间越短，就会出现超卖现象
         */
//        SellTicket01 sellTicket01 = new SellTicket01();
//        SellTicket01 sellTicket02 = new SellTicket01();
//        SellTicket01 sellTicket03 = new SellTicket01();
//        //
//
//        //会出现超卖的现象，sleep时间越短，就会出现超卖现象
//        sellTicket01.start();
//        sellTicket02.start();
//        sellTicket03.start();


        /**
         * 使用Runnable方法
         * 会出现超卖的现象，sleep时间越短，就会出现超卖现象
         */
        SellTicket02 sellTicket021 = new SellTicket02();

        Thread thread = new Thread(sellTicket021);
        Thread thread1 = new Thread(sellTicket021);
        Thread thread2 = new Thread(sellTicket021);

        thread.start();
        thread1.start();
        thread2.start();

    }
}

class SellTicket01 extends Thread{

    private static int num = 100;   //让多个线程共享num


    //快捷键 CTRL + O   ，选run方法
    @Override
    public void run() {
        while (true){
            if (num <=0){
                System.out.println(Thread.currentThread().getName() + "售票结束");
                break;
            }

            try {
                Thread.sleep(500);
            } catch (InterruptedException e) {
                throw new RuntimeException(e);
            }

            System.out.println("窗口线程名称:" + Thread.currentThread().getName() + "   还剩票数:" + (--num));
        }
    }
}

class SellTicket02 implements Runnable{
    private static int num = 100;   //让多个线程共享num
    @Override
    public void run() {
        while (true){
            if (num <=0){
                System.out.println(Thread.currentThread().getName() + "售票结束");
                break;
            }

            try {
                Thread.sleep(5);
            } catch (InterruptedException e) {
                throw new RuntimeException(e);
            }

            System.out.println("窗口线程名称:" + Thread.currentThread().getName() + "   还剩票数:" + (--num));
        }
    }
}
```

### 4.5通知线程退出

- 当线程完成任务后，会自动退出
- 还可以通过 使用变量 来控制 run方法退出的方式停止线程，即 通知方式

```java
package opp1;

public class demo06 {
    public static void main(String[] args) throws InterruptedException {
        T t1 = new T();
        t1.start();

        //如果希望主线程main 去控制t1，必须可以修改loop
        //让t1 退出run方法，从而终止 t1线程 -> 通知方式

        //让主线程休眠10秒，再通知t1线程退出
        System.out.println("main线程休眠10s");
        Thread.sleep(10 * 1000);
        t1.setLoop(false);


    }
}

class T extends Thread{
    int count = 0;
    private boolean loop = true;
    @Override
    public void run() {
        while (loop){

            try {
                Thread.sleep(1000);
            } catch (InterruptedException e) {
                throw new RuntimeException(e);
            }
            System.out.println("执行" + (++count));
        }
    }

    public void setLoop(boolean loop) {
        this.loop = loop;
    }
}
```

### 4.6线程中断

线程常用的方法第一组：

1. `setName`     //设置线程名称
2. `getName`     //返回该线程名称
3. `start`     //使该线程开始执行；Java虚拟机底层调用该线程的start0方法
4. `run`     //调用线程对象run方法
5. `setPriority`     //修改线程优先级
6. `getPriority`    //获得线程优先级
7. `sleep`     //在指定的毫秒数没让当前正在执行的线程休眠
8. `interrupt`     //中断进程

注意事项和细节

- start 底层会创建新的进程，调用run，run就是一个简单方法调用，不会启动新线程
- 线程优先级的范围
- interrupt，中断进程，但是并没有真正结束进程。多以一般用于种端正在休眠的进程
- sleep：线程的静态方法，使当前线程休眠

```java
package opp1;

public class demo07 {
    public static void main(String[] args) throws InterruptedException {
        T3 t3 = new T3();
        t3.setName("摩拉克斯");
        t3.setPriority(Thread.MIN_PRIORITY);
        t3.start();

        System.out.println(t3.getName());
        System.out.println("优先级"+ t3.getPriority());

        //主线程先打印5个hi ，然后中断子线程的休眠
        for (int i = 0; i < 5; i++) {
            Thread.sleep(1000);
            System.out.println("hi" +i);
        }
        t3.interrupt();  //当执行到这里时，就会中断 t3的线程

    }
}

class T3 extends Thread{     //自定义的线程类
    @Override
    public void run() {
        for (int i = 0; i < 100; i++) {
            //Thread.currentThread().getName() 获取当前线程的名称
            System.out.println(Thread.currentThread().getName() + "吃包子" + i);
        }

        try {
            System.out.println(Thread.currentThread().getName()+ "休眠中...");
            Thread.sleep(20000);
        } catch (InterruptedException e) {
            //当该线程执行到一个interrupt时，就会catch 一个异常，可以加入自己的业务代码
            //InterruptedException 是捕获到了一个中断异常，而不是终止
            System.out.println(Thread.currentThread().getName() + "被 interrupt了");
        }
    }
}
```

### 4.7线程插队

常用方法第二组

1. yield  : 线程的礼让。让出CPU，让其他线程执行，但是礼让时间不确定，所以也不一定礼让成功
2. join  ：线程插队。插队的线程一旦插队成功，则肯定先执行完插入线程的所有任务。

```java
package opp1;

public class demo08 {
    public static void main(String[] args) throws InterruptedException {
        T5 t5 = new T5();
        t5.start();

        for (int i = 1; i <= 20; i++) {
            Thread.sleep(1000);
            System.out.println("吃了" + i + "包子");
            if (i == 5) {
                System.out.println("================先吃了" + i + "包子===============");
                //join 线程插队，一定成功
                t5.join();   //再吃饺子
//                Thread.yield();     //线程礼让，不一定成功，看cpu心情
                System.out.println("=============饺子吃完了，又开始吃包子=============");
            }
        }
    }
}

class T5 extends Thread{
    @Override
    public void run() {
        for (int i = 1; i <= 20 ; i++) {
            try {
                Thread.sleep(500);
            } catch (InterruptedException e) {
                throw new RuntimeException(e);
            }
            System.out.println("吃了" + i + "饺子 JoinThread----------");
        }
    }
}
```

#### 线程插队练习

```java
package opp1;

/**
 * 主线程每隔1s，输出hi，一共10次
 * 当输出hi 5 时，启动一个子线程（要求runnable），每隔1s 输出hello ，等该线程输出10次hello后，退出
 * 主线程继续输出
 * 程序结束
 */
public class demo09 {
    public static void main(String[] args) throws InterruptedException {
        T6 t6 = new T6();
        Thread thread = new Thread(t6);
        for (int i = 1; i <= 10 ; i++) {
            System.out.println("hi  " + i);
            if (i == 5){
                //说明输出了5次 hi
                thread.start();
                thread.join();  //立即将t6子线程插入到主线程
            }
            Thread.sleep(1000);  //输出一次hi，让main线程也休眠1s
        }
    }
}

class T6 implements Runnable{
    int count = 0;
    @Override
    public void run() {
        while (true){
            System.out.println("hello  " + (++count));

            try {
                Thread.sleep(1000);
            } catch (InterruptedException e) {
                throw new RuntimeException(e);
            }

            if (count == 10){
                break;
            }
        }
    }
}
```

## 五、守护线程

用户现场和守护线程

1. 用户线程：也叫工作线程，当线程任务执行完毕或通知方式结束
2. 守护线程：一般是为工作线程服务的，当所有的用户线程结束，守护线程自动结束
3. 常见的守护线程：垃圾回收机制

```java
package opp1;

public class demo10 {
    public static void main(String[] args) throws InterruptedException {
        T7 t7 = new T7();

        //如果我们希望当main主线程结束后，子线程自动结束
        //只需要将子线程 设为守护线程
        t7.setDaemon(true);    //将子线程设为守护线程
        t7.start();

        for (int i = 0; i < 10; i++) {
            System.out.println("nahida 快来" + i);
            Thread.sleep(1000);
        }
    }
}

class T7 extends Thread{
    @Override
    public void run() {
        for ( ; ;){   //无限循环
            try {
                Thread.sleep(500);  //休眠50ms
            } catch (InterruptedException e) {
                throw new RuntimeException(e);
            }
            System.out.println("须弥什么时候开啊，等不及了");
        }
    }
}
```

## 六、线程7大状态

JDK：在 Thread.State   中（操作系统中的几种状态：挂起、就绪、运行、阻塞、终止等几个状态）

![image-20220809115518098](https://img.up.cdn.nahida.cn/typora-user-images/image-20220809115518098.png)

![image-20220809115626915](https://img.up.cdn.nahida.cn/typora-user-images/image-20220809115626915.png)

runnable状态是处于可运行状态。

![image-20220809120451345](https://img.up.cdn.nahida.cn/typora-user-images/image-20220809120451345.png)

```Java
package opp1;

public class demo11 {
    public static void main(String[] args) throws InterruptedException {
        T8 t8 = new T8();
        System.out.println("状态 " + t8.getState());

        t8.start();
        while (Thread.State.TERMINATED != t8.getState()){
            System.out.println("状态 " + t8.getState());
            Thread.sleep(500);
        }
        System.out.println("状态 " + t8.getState());
    }
}

class T8 extends Thread{
    @Override
    public void run() {
        while (true){
            for (int i = 0; i < 10; i++) {
                System.out.println("hi" + i);
                try {
                    Thread.sleep(1000);
                } catch (InterruptedException e) {
                    throw new RuntimeException(e);
                }
            }
            break;
        }
    }
}
```

## 七、线程同步机制

1. 在多线程编程，一些敏感数据不允许被多个线程同时访问，此时就使用同步访问技术，保证数据在任何同一时刻，最多有一个线程访问，以保证数据的完整性
2. 也可以这里理解：即当有一个线程在对内存进行操作时，其他线程都不可以对这个内存地址进行操作，知道该线程完成操作，其他线程才能对该内存地址进行操作

```java
package opp1;

/**
 * 使用多线程，模拟三个窗口同时售票，每个窗口都会卖出100张票
 */

public class demo05 {
    public static void main(String[] args) {

        /**
         * 使用继承 Thread
         * 会出现超卖的现象，sleep时间越短，就会出现超卖现象
         */
//        SellTicket01 sellTicket01 = new SellTicket01();
//        SellTicket01 sellTicket02 = new SellTicket01();
//        SellTicket01 sellTicket03 = new SellTicket01();
//        //
//
//        //会出现超卖的现象，sleep时间越短，就会出现超卖现象
//        sellTicket01.start();
//        sellTicket02.start();
//        sellTicket03.start();


        /**
         * 使用Runnable方法
         * 会出现超卖的现象，sleep时间越短，就会出现超卖现象
         */
//        SellTicket02 sellTicket021 = new SellTicket02();
//
//        Thread thread = new Thread(sellTicket021);
//        Thread thread1 = new Thread(sellTicket021);
//        Thread thread2 = new Thread(sellTicket021);
//
//        thread.start();
//        thread1.start();
//        thread2.start();

        /**
         * 实现接口方法，使用synchronize实现线程同步
         */
        SellTicket03 sellTicket031 = new SellTicket03();
  Thread thread = new Thread(sellTicket031);
        Thread thread1 = new Thread(sellTicket031);
        Thread thread2 = new Thread(sellTicket031);
        //

        //不会出现超卖的现象
        thread.start();
        thread1.start();
        thread2.start();



    }
}


//实现接口方法，使用synchronize实现线程同步
//因为这里涉及到多个线程共享资源，所以我们使用实现Runnable方式（重要）

class SellTicket03 implements Runnable{

    private static int num = 100;   //让多个线程共享num
    private boolean loop = true;

    public synchronized void sell(){   //同步方法，在同一时刻，只能有一个线程来执行sell方法
        if (num <=0){
            System.out.println(Thread.currentThread().getName() + "售票结束");
            loop = false;
            return;
        }

        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            throw new RuntimeException(e);
        }

        System.out.println("窗口线程名称:" + Thread.currentThread().getName() + "   还剩票数:" + (--num));
    }

    //快捷键 CTRL + O   ，选run方法
    @Override
    public  void run() {
        while (loop){
            sell();    //sell 是一个同步方法
        }
    }
}

//============================================================================================

class SellTicket01 extends Thread{

    private static int num = 100;   //让多个线程共享num


    //快捷键 CTRL + O   ，选run方法
    @Override
    public void run() {
        while (true){
            if (num <=0){
                System.out.println(Thread.currentThread().getName() + "售票结束");
                break;
            }

            try {
                Thread.sleep(500);
            } catch (InterruptedException e) {
                throw new RuntimeException(e);
            }

            System.out.println("窗口线程名称:" + Thread.currentThread().getName() + "   还剩票数:" + (--num));
        }
    }
}

class SellTicket02 implements Runnable{
    private static int num = 100;   //让多个线程共享num
    @Override
    public void run() {
        while (true){
            if (num <=0){
                System.out.println(Thread.currentThread().getName() + "售票结束");
                break;
            }

            try {
                Thread.sleep(5);
            } catch (InterruptedException e) {
                throw new RuntimeException(e);
            }

            System.out.println("窗口线程名称:" + Thread.currentThread().getName() + "   还剩票数:" + (--num));
        }
    }
}
```

### 7.1互斥锁

- 引入对象互斥锁的概念，来保证共享数据的完整性
- 每个对象都对应一个可称为“互斥锁”的标记，这个标记用来保证任一时刻，只能由一个线程访问该对象
- 关键字synchronized 来与对象互斥锁练习，当某个对象用synchronized修饰时，表面该对象在任一时刻只能由一个线程访问
- 同步的局限性：倒置程序的执行效率要降低
- 同步方法（非静态的）的锁可以是this ，也可以是其他对象（要求是同一个对象）
- 同步方法（静态的）的锁为当前类本身

```java
package opp1;

/**
 * 使用多线程，模拟三个窗口同时售票，每个窗口都会卖出100张票
 */

public class demo05 {
    public static void main(String[] args) {

        /**
         * 使用继承 Thread
         * 会出现超卖的现象，sleep时间越短，就会出现超卖现象
         */
//        SellTicket01 sellTicket01 = new SellTicket01();
//        SellTicket01 sellTicket02 = new SellTicket01();
//        SellTicket01 sellTicket03 = new SellTicket01();
//        //
//
//        //会出现超卖的现象，sleep时间越短，就会出现超卖现象
//        sellTicket01.start();
//        sellTicket02.start();
//        sellTicket03.start();


        /**
         * 使用Runnable方法
         * 会出现超卖的现象，sleep时间越短，就会出现超卖现象
         */
//        SellTicket02 sellTicket021 = new SellTicket02();
//
//        Thread thread = new Thread(sellTicket021);
//        Thread thread1 = new Thread(sellTicket021);
//        Thread thread2 = new Thread(sellTicket021);
//
//        thread.start();
//        thread1.start();
//        thread2.start();

        /**
         * 实现接口方法，使用synchronize实现线程同步
         */
        SellTicket03 sellTicket031 = new SellTicket03();
  Thread thread = new Thread(sellTicket031);
        Thread thread1 = new Thread(sellTicket031);
        Thread thread2 = new Thread(sellTicket031);
        //

        //不会出现超卖的现象
        thread.start();
        thread1.start();
        thread2.start();



    }
}


//实现接口方法，使用synchronize实现线程同步
//1. public synchronized void sell() 就是一个同步方法  【非静态】
//2. 这时锁在 this对象   【非静态】
//3. 也可以在代码块上写synchronized ， 如：class SellTicket04，互斥锁还是在this对象   【非静态】

class SellTicket03 implements Runnable{
 //因为这里涉及到多个线程共享资源，所以我们使用实现Runnable方式（重要）
    
    private static int num = 100;   //多个线程共享num
    private boolean loop = true;


    
    
    
//    ///////【同步方法（静态）】的锁为当前类本身！！！
//    ///////public synchronized static void m1() 的锁加在SellTicket03.class！！！【静态同步方法】
//    ///////这里的m1()方法使用时static修饰，所以是静态同步方法    【静态同步方法】
//
//    public synchronized static void m1(){
//
//    }
//
// ///////这里的m2()方法使用static修饰，则底下的synchronized代码块也是【静态同步方法】  
//    
//    public static void m2(){
//        synchronized (SellTicket03.class) {        
//               ///////如果在【静态同步方法】中，实现一个同步代码块，synchronized (当前类名.class)  ！！！
//            System.out.println("m2");
//        }
//    }
    
 
   
    
    public synchronized void sell(){   //同步方法，在同一时刻，只能有一个线程来执行sell方法  【非静态】
        if (num <=0){
            System.out.println(Thread.currentThread().getName() + "售票结束");
            loop = false;
            return;
        }

        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            throw new RuntimeException(e);
        }

        System.out.println("窗口线程名称:" + Thread.currentThread().getName() + "   还剩票数:" + (--num));
    }

    //快捷键 CTRL + O   ，选run方法
    @Override
    public  void run() {
        while (loop){
            sell();    //sell 是一个同步方法
        }
    }
}



//3. 也可以在代码块上写synchronized ， 如：class SellTicket04，互斥锁还在this对象 【非静态】   

class SellTicket04 implements Runnable{
    //因为这里涉及到多个线程共享资源，所以我们使用实现Runnable方式（重要）

    private static int num = 100;   //让多个线程共享num
    private boolean loop = true;
    Object object = new Object();

    public void sell() {   //同步方法，在同一时刻，只能有一个线程来执行sell方法   【非静态】
        synchronized (this) {                     //同步代码块！！！！！  【非静态】 
//      synchronized (object) {                     //同步代码块！！！互斥锁还在this对象object  【非静态】
            if (num <= 0) {
                System.out.println(Thread.currentThread().getName() + "售票结束");
                loop = false;
                return;
            }

            try {
                Thread.sleep(1000);
            } catch (InterruptedException e) {
                throw new RuntimeException(e);
            }

            System.out.println("窗口线程名称:" + Thread.currentThread().getName() + "   还剩票数:" + (--num));
        }
    }

    //快捷键 CTRL + O   ，选run方法
    @Override
    public  void run() {
        while (loop){
            sell();    //sell 是一个同步方法
        }
    }
}


//===================================================================================================

class SellTicket01 extends Thread{

    private static int num = 100;   //让多个线程共享num


    //快捷键 CTRL + O   ，选run方法
    @Override
    public void run() {
        while (true){
            if (num <=0){
                System.out.println(Thread.currentThread().getName() + "售票结束");
                break;
            }

            try {
                Thread.sleep(500);
            } catch (InterruptedException e) {
                throw new RuntimeException(e);
            }

            System.out.println("窗口线程名称:" + Thread.currentThread().getName() + "   还剩票数:" + (--num));
        }
    }
}

class SellTicket02 implements Runnable{
    private static int num = 100;   //让多个线程共享num
    @Override
    public void run() {
        while (true){
            if (num <=0){
                System.out.println(Thread.currentThread().getName() + "售票结束");
                break;
            }

            try {
                Thread.sleep(5);
            } catch (InterruptedException e) {
                throw new RuntimeException(e);
            }

            System.out.println("窗口线程名称:" + Thread.currentThread().getName() + "   还剩票数:" + (--num));
        }
    }
}
```

注意事项

1. 同步方法如果没有使用static修饰，默认锁对象为this
2. 如果同步方法使用static修饰，默认锁对象：当前类.class
3. 实现的落地步骤
   - 需要分析上锁的代码
   - 选择同步代码块或同步方法（尽量使用同步代码块）
   - 要求多个线程的锁对象为同一个即可

### 7.2进程死锁

多个线程都占用了对方的锁资源，但不肯相让，导致了思索，在编程时一定要避免死锁的发生

```java
package opp1;

import javax.swing.plaf.synth.SynthOptionPaneUI;

public class demo12 {
    public static void main(String[] args) {
        //模拟一个死锁现象
        DeadLockDemo A = new DeadLockDemo(true);
        DeadLockDemo B = new DeadLockDemo(false);
        A.setName("A线程");
        B.setName("B线程");
        A.start();
        B.start();

    }
}

class DeadLockDemo extends Thread{
    static Object o1 = new Object();
    static Object o2 = new Object();
    boolean flag;

    public DeadLockDemo(boolean flag){     //构造器
        this.flag = flag;
    }

    @Override
    public void run(){

        //下面业务逻辑的分析
        //1. 如果flag 为T ，线程就会先得到/持有 o1 对象锁
        //2. 如果线程A 得不到o2 对象锁，就会Blocked;
        //3. 如果flag 为False ，线程B 就会先得到/持有 o2对象锁，然后尝试获取o1对象锁
        //4. 如果线程B 得到o1 对象锁，就会Blocked

        if (flag){
            synchronized (o1){     //对象互斥锁，下面就是同步代码
                System.out.println(Thread.currentThread().getName() +"  进入1");
                synchronized (o2){   //这里获得li对象的监视权
                    System.out.println(Thread.currentThread().getName() +"  进入2");
                }
            }
        }else {
            synchronized (o2){
                System.out.println(Thread.currentThread().getName() +" 进入3");
                synchronized (o1){     //这里获得li对象的监视权
                    System.out.println(Thread.currentThread().getName() +" 进入4");
                }
            }
        }
    }

}
```

### 7.3释放锁

下面的操作会释放锁

1. 当前线程的同步方法、同步代码块执行结束
2. 当前线程在同步代码块、同步方法遇到break、return
3. 当前线程在同步代码块、同步方法中出现未处理的Error 或者Exception，导致异常结束
4. 当前线程在同步代码块、同步方法中执行了线程对象的wait( ) 方法，当前线程暂停，并释放锁。

下面的操作不会释放锁

1. 线程执行同步代码块或同步方法时，线程调用sleep、yield方法暂停当前线程的执行，不会释放锁

2. 线程执行同步代码块时，其他线程调用了该线程的suspend( ) 方法将该线程挂起，该线程不会释放锁。

   提示：应尽量避免使用suspend和resume 来控制线程，这两种方法不再推荐使用。

## 八、作业

### 作业一

![image-20220809155212471](https://img.up.cdn.nahida.cn/typora-user-images/image-20220809155212471.png)

方法一：

main先启动TA、TB两个线程

TA先继续打印随机数，TB 等待键盘输入“Q”指令

键盘输入“Q”指令，TB 通知TA停止。通过中间变量loop实现通知。

```java
package opp1;

import java.util.Random;
import java.util.Scanner;

public class demo13 {
    public static void main(String[] args) {
        TA ta = new TA();
        Thread thread1 = new Thread(ta);
        thread1.start();
        TB tb = new TB(ta);  //一定要注意
        tb.start();

    }
}

class TA implements Runnable{
    private boolean loop = true;

    @Override
    public void run() {

        while (loop){
            System.out.println((int)(Math.random()*100+1));
            try {
                Thread.sleep(1000);
            } catch (InterruptedException e) {
                throw new RuntimeException(e);
            }

        }

    }

    public void setLoop(boolean loop) {   //可以修改loop
        this.loop = loop;
    }
}

class TB extends Thread{
    private TA ta;
    private Scanner scanner = new Scanner(System.in);

    public TB(TA ta) {  //构造器中，直接传入TA对象
        this.ta = ta;
    }

    String str = " ";
    @Override
    public void run() {
        while (true) {
            System.out.println("输入Q 停止");
            char key = scanner.next().toUpperCase().charAt(0);
            if (key == 'Q') {
                ta.setLoop(false);
                System.out.println("B退出");
                break;
            }

        }
    }
}
```

方法二：进程守护

### 作业二

![image-20220809162257978](https://img.up.cdn.nahida.cn/typora-user-images/image-20220809162257978.png)

```java
package opp1;

public class demo16 {
    public static void main(String[] args) {
        Bank bank = new Bank();
        Thread t1 = new Thread(bank);
        Thread t2 = new Thread(bank);
        t1.setName("摩拉克斯");
        t2.setName("巴巴托斯");

        t1.start();
        t2.start();
    }
}

/**
 * 因为这里涉及到多个线程共享资源，所以我们使用实现Runnable方式
 */

class Bank implements Runnable{
    private int money = 10000;
    @Override
    public void run() {
        /**
         * 1. 这里使用synchronized实现线程同步
         * 2. 当多个线程执行到这里时，就会去争夺this对象锁
         * 3. 哪个线程争夺到 this对象锁，就执行synchronized代码块，执行完后会释放this对象锁
         * 4. 争夺不到this对象锁，就blocked，准备继续争夺
         * 5. this对象锁是非公平锁
         */
        while (true){
            synchronized(this) {
                if (money < 1000) {
                    System.out.println("余额不足");
                    break;
                }

                money -=1000;
                System.out.println(Thread.currentThread().getName() + "取出了1000元   当前余额为" + money + "元");
            }

            try {
                Thread.sleep(1000);
            } catch (InterruptedException e) {
                throw new RuntimeException(e);
            }
        }
    }
}
```
