---
title: IO流
sidebar_position: 4
---

# java IO流

<!--## java  IO流-->

## 文件

文件就是保存数据的地方。

文件流，文件在程序中时以流的形式来操作的

![image-20220716163527341](https://img.up.cdn.nahida.cn/typora-user-images/image-20220716163527341.png)

### 创建文件

相关方法：

​  根据路径构建一个Fiile对象：`new File （String pathname）；`

​  根据父目录文件+子路径构建：`new File（File parent ， String child）；`

​  根据父目录+子路径构建 ：`new File ( String parent , String child);`

```java
package IOStream.opp1;

import org.junit.jupiter.api.Test;

import java.io.File;
import java.io.IOException;

public class demo01 {
    public static void main(String[] args) {



    }
    ////方式一   根据路径构建一个Fiile对象
    @Test
    public void create01(){
        String filPath = "e:\\news1.txt";
        File file = new File(filPath);

        try{
            file.createNewFile();
            System.out.println("创建文件成功");
        }catch (IOException e) {
            throw new RuntimeException(e);
        }
    }

    //方式2   根据父目录文件+子路径构建
    @Test
    // 此处@Test 使用一些jar包，直接测试，不需要mian引用编译.  try() catch{}  现实测试的结果
    public void creat02(){
        File parentFilePath = new File("e:\\");
        String fileName = "news2.txt";
        File file = new File(parentFilePath , fileName);

        // 先写 file.createNewFile()
        // 然后 快捷键  CTRL + alt + t   选try catch
        try {
            file.createNewFile();
            System.out.println("创建成功");
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }

    //方法三  根据父目录+子路径构建
    @Test
    public void creat03(){
        String parentFilePath = "e:\\";
        String childFPath = "news3.txt";
        File file = new File(parentFilePath, childFPath);

        try {
            file.createNewFile();
            System.out.println("创建成功");
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }
}
```

### 获取文件信息

getName  getAbsolutePath  getParent length exits isFile isDirectory

```java
package IOStream.opp1;

import org.junit.jupiter.api.Test;

import java.io.File;

public class demo02 {
    public static void main(String[] args) {

    }
    //
    @Test
    public void info(){
        File fileName = new File("e:\\news.txt");

        //调用相应的方法
        //getName  getAbsolutePath  getParent length exits isFile isDirectory

        System.out.println("文件名字：" + fileName.getName());
        System.out.println("文件绝对路径" + fileName.getAbsolutePath());
        System.out.println("文件父目录" + fileName.getParent());
        System.out.println("文件大小（字节）" + fileName.length());
        System.out.println("文件是否在" + fileName.exists());
        System.out.println("文件是否是一个文件" + fileName.isFile());
        System.out.println("是否是一个目录" + fileName.isDirectory());

    }
}
```

文件相关操作方法还有很多，请根据实际需要调用即可。在  File  目录下查找

### 目录操作

**mkdir 创建一级目录、mkdirs创建多级目录、delete删除空目录**

file.delete()返回 true or false，csdn的网友说这个慎用，因为：

​  用这个函数删除文件删到你找到找不到……

​  而且还是秒删……压根儿反应不过来。

​  如果你特别恨一个人，请用File.delete（）函数删除他的重要文件。

```java
package IOStream.opp1;

import org.junit.jupiter.api.Test;

import java.io.File;

public class demo03 {
    public static void main(String[] args) {

    }

    //判断 d:\\news.txt 是否存在，如果存在则删除
    //这里我们需要体会到，在java编程中，目录也可当作文件
    @Test
    public void m1(){
        String fileName = "f:\\news01.txt";
        File file = new File(fileName);
        if (file.exists()){
            if (file.delete()){                  //删除文件，返回true
                System.out.println("存在,删除");
                System.out.println(fileName + "delete success");
            }else {
                System.out.println("失败");
            }
        }else{
            System.out.println(fileName + " is null");
        }
    }


    //判断 f:\\demo 是否存在，如果存在则删除
    //这里我们需要体会到，在java编程中，目录也可当作文件
    @Test
    public void m2(){
        String filePath = "f:\\demo";
        File file2 = new File(filePath);
        if (file2.exists()){
            if (file2.delete()){                      //删除空目录，返回true
                System.out.println("存在，删除");
                System.out.println(filePath + "delete success");
            }else {
                System.out.println("失败");
            }
        }else{
            System.out.println(filePath + " is null");
        }
    }

    //判断是否存在，不存在则创建
    //不能用此方法目录创建多级目录，创建多级目录要用mkdirs（）;
    public void m3(){
        String filePath = "f:\\demo";
        File file2 = new File(filePath);
        if (file2.exists()){
            System.out.println("存在");
        }else{
            if(file2.mkdir()){               //创建成功，返回true
                System.out.println("成功");
            }else {
                System.out.println("失败");
            }

        }
    }


    @Test
    public void m4(){
        String filePath = "f:\\demo\\121";
        File file2 = new File(filePath);
        if (file2.exists()){
                System.out.println("存在");
        }else{
            if(file2.mkdirs()){                 //创建成功，返回true
                System.out.println("成功");
            }else {
                System.out.println("失败");
            }

        }
    }

}
```

## IO流原理和分类

java程序中，对于数据的输入/输出操作是以“流”的方式进行

在java.io包下提供各种接口

1. 按操作数据单位不同分为：字节流（8bit）二进制文件，字符流（按字符）文本文件
2. 按数据流的流向不同分为：输入流、输出流
3. 按流的角色的不同分为：结点流、处理流/包装流

​ InputStream   字节输入流

​ OutputStream 字节输出流

​ Reader  字符输出流

​ Writer  字节输入流

上述的四个流都是抽象类的

## FileInputStream

 InputStream字节输入流

```java
package IOStream.opp2;

import org.junit.jupiter.api.Test;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;

/**
 * 演示FileInputStream的使用
 */

public class Demo01 {
    public static void main(String[] args) {

    }

    /**
     * 演示读取文件
     * 缺点：是单个字节读取，效率地下
     * -->优化：使用 read（byte[] b）
     */

    @Test
    public void readFile01(){
        String filePath = "e:\\hello.txt";
        int readData = 0;
        FileInputStream fileInputStream = null;

        try {
            //创建FileInputStream 对象，用于读取文件
            fileInputStream = new FileInputStream(filePath);

            //从该输入流读取一个字节的数据。如果没有输入可用，此方法阻止
            //如果返回-1，表示读取完毕
           while ((readData = fileInputStream.read())  !=-1){
               System.out.print((char) readData);   //转为char类型
           }
        } catch (IOException e) {
            throw new RuntimeException(e);
        }finally {
            //关闭文件流，释放资源
            try {
                fileInputStream.close();
            } catch (IOException e) {
                throw new RuntimeException(e);
            }
        }

    }



    /**
     *
     * -->优化：使用 read（byte[] b）
     */

    @Test
    public void readFile02(){
        String filePath = "e:\\hello.txt";
        //定义一个字节数组
        byte[] buf = new byte[8];     //一次读取8个字节
        int readLen = 0;
        FileInputStream fileInputStream = null;

        try {
            //创建FileInputStream 对象，用于读取文件
            fileInputStream = new FileInputStream(filePath);

            //从该输入流读取最多b.length字节的数据到字节组。此方法将阻塞，知道某些输入可用
            //如果返回-1，表示读取完毕
            //如果读取正常，返回实际读取的字节数
            while ((readLen = fileInputStream.read(buf))  !=-1){

                System.out.print(new String(buf,0, readLen));   
            }
        } catch (IOException e) {
            throw new RuntimeException(e);
        }finally {
            //关闭文件流，释放资源
            try {
                fileInputStream.close();
            } catch (IOException e) {
                throw new RuntimeException(e);
            }
        }

    }
}
```

## FileOutputStream

 OutputStream字节输出流

```java
package IOStream.opp2;

import org.junit.jupiter.api.Test;

import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;

public class Demo02 {
    public static void main(String[] args) {

    }

    /**
     * 演示使用FileOutStream 将数据写到文件中
     * 如果该文件不存在，则创建该文件
     */

    @Test
    public  void  writeFile(){

        //创建FileOutStream对象
        String filePath = "e:\\a.txt";
        FileOutputStream fileOutputStream = null;

        try {

            //得到一个FileOutStream对象
            // new FileOutputStream(filePath) 的创建方式，当写入内容时，会覆盖原来的内容
            //new FileOutputStream(filePath , true) 创建方式，当写入内容是，是追加到文件后，不会覆盖
            fileOutputStream = new FileOutputStream(filePath , true);
            //写一个字节
//            fileOutputStream.write('H');
            //写一个字符串
            String str = "hello world";   //要换行，可以加一个\n ,但是 \n 也占一个字节，数组的一个位置
//            fileOutputStream.write(str.getBytes());   //str.getBytes() 可以把字符串 -> 字节数组
            //write(byte[] b , int off ,int len)   将len字节从位于偏移量 off 的指定字节数组写入次文件流
            fileOutputStream.write(str.getBytes(),0,3);   //这里添加了数组坐标，确定从数组的哪一个位置写入,写入多少个字节
        } catch (IOException e) {
            throw new RuntimeException(e);
        } finally {
            try {
                fileOutputStream.close();
            } catch (IOException e) {
                throw new RuntimeException(e);
            }
        }

    }

}
```

## 文件拷贝

```java
package IOStream.opp2;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;

/**
 * 文件拷贝
 */
public class Demo03 {
    public static void main(String[] args) {
        //完成文件拷贝  将e:\\a.txt 拷贝到f:\\
        /**
         * 思路：  文件②  <-（输出流）--- java程序  <-（输入流）--- 文件①
         * 1. 创建文件的输入流，将文件读入程序
         * 2. 创建文件的输入流，将读到的文件数据，写入到指定的文件
         */

        String srcFilePath = "e:\\a.txt";      //也可以拷贝其他文件，但是文件过大会出现问题，下面定义的数组大小要适当扩大
        String destFilePath = "e:\\a2.txt ";
        FileInputStream fileInputStream = null;
        FileOutputStream fileOutputStream = null;

        try {
            fileInputStream = new FileInputStream(srcFilePath);
            fileOutputStream = new FileOutputStream(destFilePath);
            //定义一个数组，提高读入的的效率
            byte[] buf = new byte[1024];
            int readLen = 0;
             while ((readLen = fileInputStream.read(buf))!=-1){
                 //读取到后，就写入文件 通过fileOutputStream
                 //即 边读边写
                 fileOutputStream.write(buf, 0 , readLen);  //一定要使用这个方法
            }
            System.out.println("拷贝成功");
        } catch (IOException e) {
            throw new RuntimeException(e);
        }finally {
            try {   //关闭输入流，输出流，释放资源
                if (fileInputStream != null) {
                    fileInputStream.close();
                }
                if (fileOutputStream != null) {

                    fileOutputStream.close();
                }

            } catch (IOException e) {
                throw new RuntimeException(e);
            }
        }

    }
}
```

## 文件字符流说明

FileReader、FileWriter是文件字符流

相关方法

- `new FileReader(File/String)`

- read:每次读取单个字符，返回该字符，如果到文件末尾返回-1

- read(char[]) : 批量读取多个字符到数组，返回读取到的字符数，如果到文件末尾返回-1

- 相关API:

  ​ new String(char[]) : 将char[]转换为String

  ​ new String(char[], off , len ) : 将char[]的部分转换为String

### FileReader

```
package IOStream.opp3;

import org.junit.jupiter.api.Test;

import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;


public class demo01 {
    /**
     * 单个字符读取文件
     */
    public static void main(String[] args) {
        String filePath = "e:\\story.txt";
        FileReader fileReader = null;
        int data = 0;

        try {
            fileReader = new FileReader(filePath);
            //循环读取，使用read，单个字符读取
            while ((data = fileReader.read()) !=-1){
                System.out.print((char) data);
            }
        } catch (IOException e) {
            throw new RuntimeException(e);
        }finally {
            if (fileReader != null){
                try {
                    fileReader.close();
                } catch (IOException e) {
                    throw new RuntimeException(e);
                }
            }
        }
    }

    /**
     * 字符数组读取文件
     */
    @Test
    public void readFile01(){
        System.out.println("============方法2=============");
        String filePath = "e:\\story.txt";
        FileReader fileReader = null;
        int radeLen = 0;
        char[] buf = new char[8];

        try {
            fileReader = new FileReader(filePath);
            //循环读取，使用read(buf),返回的是实际读取到的字符数
            //如果返回-1，说明文件结束
            while ((radeLen = fileReader.read(buf)) !=-1){
                System.out.print(new String(buf,0,radeLen));
            }
        } catch (IOException e) {
            throw new RuntimeException(e);
        }finally {
            if (fileReader != null){
                try {
                    fileReader.close();
                } catch (IOException e) {
                    throw new RuntimeException(e);
                }
            }
        }
    }
}
```

### FileWriter

注意：使用FileWriter后，必须要关闭（close）或者刷新（flush），否者写入不到指定文件

```java
package IOStream.opp3;

import java.io.FileWriter;
import java.io.IOException;

public class demo02 {
    public static void main(String[] args) {

        String filePath = "e:\\note.txt";
        //创建FileWriter对象
        FileWriter fileWriter = null;
        char[] chars = {'a','b','c','d'};

        try {
            fileWriter = new FileWriter(filePath);   //默认是覆盖方式
            //方法一： 写入单个字符  write(int)
            fileWriter.write('H');
            //方法二：写入指定数组   write(char[])
            fileWriter.write(chars);
            //方法三：写入数组的指定部分  write(char[], off, len)
            fileWriter.write("璃月摩拉克斯".toCharArray(),0,3);
            //方法四：写入整个字符串  write( string)
            fileWriter.write(" 巴巴托斯");
            //方法五“写入字符串的指定部分  write(string , off , len)
            fileWriter.write("须弥纳西妲",0,2);
            //在数据量大的情况下，可以使用循环操作。



        } catch (IOException e) {
            throw new RuntimeException(e);
        } finally {
            try {
                fileWriter.close();
            } catch (IOException e) {
                throw new RuntimeException(e);
            }
            //使用FileWriter后，必须要关闭（close）或者刷新（flush），才能真正写入到文件中
            //关闭文件流，等价 flush()+关闭
        }

        System.out.println("程序结束...");
    }
}
```

## 节点流、处理流

节点流可以从一个特定的数据源读写数据  （效率会低一些），如FileReader、FileWriter

数据源就是存放数据的地方

处理流（也叫，包装流）是”连接“在已存在的流（结点流 或 处理流）之上，为程序提供更加强大的读写功能，如BufferedReader、BufferedWriter

BufferedReader类中，有属性Reader，即可以封装一个结点流，该节点是任意的，只要是Reader子类

![image-20220808144516732](https://img.up.cdn.nahida.cn/typora-user-images/image-20220808144516732.png)

## 处理流的设计模式

处理流对节点流进行包装，使用了修饰器设计模式，不会直接与数据源相连【模拟修饰器设计模式】

处理流的功能主要体现在以下两个方面：

- 性能的提高：主要以增加缓冲的方式来提高输入处处的效率
- 操作的便捷：处理流可能提供了一些列便捷方式来一次输入输出大批量数据，使用更加灵活方便

BufferedReader和BufferedWriter属于字符流

## BufferedReader

BufferReader 读取文本文件

```java
package IOStream.opp3;

import java.io.BufferedReader;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;

/**
 * BufferReader的使用
 */

public class demo03 {
    public static void main(String[] args) throws IOException {
        String filePath = "e:\\story.txt";

        //创建
        BufferedReader bufferedReader = new BufferedReader(new FileReader(filePath));
        //读取
        String line;  //按行读取，效率高
        //说明
        //BufferedReader.readLine() 是按行读取文件
        //当返回null 时，表示文件读取完毕
        while ((line = bufferedReader.readLine()) !=null){
            System.out.println(line);
        }


        //关闭流，这里注意，只需要关闭BufferedReader，因为底层会自动关闭其他的Reader类型节点流。
        bufferedReader.close();

    }
}
```

## BufferedWriter

```java
package IOStream.opp3;

import java.io.BufferedWriter;
import java.io.FileWriter;
import java.io.IOException;

/**
 * BufferedWriter的使用
 */

public class demo04 {
    public static void main(String[] args) throws IOException {
        String filePath = "e:\\ok.txt";

        //默认覆盖。如果要在后边追加内容，FileWriter（ ，） 里加上布尔类型true
        BufferedWriter bufferedWriter = new BufferedWriter(new FileWriter(filePath,true));   
        
        bufferedWriter.write("BNU1");
        bufferedWriter.newLine();  //插入一个与系统相关的换行
        bufferedWriter.write("BNU2");
        bufferedWriter.write("BNU3");



        //关闭外层流即可，传入的FileWriter会在底层关闭
        bufferedWriter.close();
    }
}
```

## Buffered拷贝

（结合BufferedReader、BufferedWriter一起使用）（文本文件）

***BufferedReader和BufferedWriter属于字符流，按照字符操作，不要去操作二进制文件，否则该二进制文件会损坏。***

二进制文件一般是音视频文件、图片文件、doc文档、pdf文档等

```java
package IOStream.opp3;

import java.io.*;

/**
 * 拷贝文件
 */

public class demo05 {
    public static void main(String[] args) {
        String srcFilePath = "e://story.txt";
        String destFilePath = "e://story2.txt";

        BufferedReader br = null;
        BufferedWriter bw = null;
        String line;

        try {
             br = new BufferedReader(new FileReader(srcFilePath));
             bw = new BufferedWriter(new FileWriter(destFilePath));
            //readLine() 读取一行内容，但是没有换行
             while ((line = br.readLine())!=null){
                 bw.write(line);
                 bw.newLine();     //换行
             }
        } catch (IOException e) {
            throw new RuntimeException(e);
        } finally {
            try {
                if (br != null ){
                    br.close();
                }
                if (bw !=null){
                    bw.close();
                }
            } catch (IOException e) {
                throw new RuntimeException(e);
            }
        }
    }
}
```

## Buffered字节处理流

#### BufferedOutputStream、 BufferedInputStream

### 字节处理流拷贝文件

##### 二进制文件的拷贝，二进制文件一般是音视频文件、图片文件、doc文档、pdf文档等

可以操作文本文件吗？当然可以

```java
package IOStream.opp3;

import com.sun.xml.internal.ws.policy.privateutil.PolicyUtils;

import java.io.*;

/**
 * 二进制文件的拷贝
 * BufferedOutputStream、 BufferedInputStream的使用
 */
public class demo06 {
    public static void main(String[] args) {
        String srcFilePath = "e:\\123.png";
        String destFilePath = "e:\\1232.png";

        BufferedInputStream bis = null;
        BufferedOutputStream bos = null;

        try {
            bis = new BufferedInputStream(new FileInputStream(srcFilePath));
            bos = new BufferedOutputStream(new FileOutputStream(destFilePath));

            //循环的读取文件，并写入到destFilePath
            byte[] buff = new byte[1024];
            int readLen = 0;
            while ((readLen = bis.read(buff)) != -1){
                bos.write(buff,0,readLen);
            }
        } catch (IOException e) {
            throw new RuntimeException(e);
        } finally {
            //关闭流，关闭外层流即可，底层会自动关闭节点
            try {
                if(bis != null) {
                    bis.close();
                }
                if (bos !=null){
                    bos.close();
                }
            } catch (IOException e) {
                throw new RuntimeException(e);
            }
        }
    }
}
```

## 对象处理流

ObjectInputStream和ObjectOutputStream

序列化和反序列化

- 序列化就是  保存数据时，保存数据的值和数据类型
- 反序列化就是    恢复数据时，恢复数据的值和数据类型
- 需要让某个对象支持序列化机制，则必须让其类是可序列化的，为了让某个类是可序列化的，该类必须实现如下两个接口之一：
  - Serializable   //这个一个标准接口
  - Externalizable    //该接口有方法需要实现，因此我们一般实现上面的Serializable  接口

### ObjectOutputStream

完成数据的序列化   保存数据时，保存数据的值和数据类型

```java
package IOStream.opp4;

import java.io.FileOutputStream;
import java.io.IOException;
import java.io.ObjectOutputStream;
import java.io.Serializable;

public class demo01 {
    public static void main(String[] args) throws IOException {

        //序列化后，保存的文件格式
        String filePath = "e:\\data.txt";

        ObjectOutputStream oos = new ObjectOutputStream(new FileOutputStream(filePath));

        //序列化后数据到e:\data.txt
        oos.writeInt(100);   //int->integer 实现了Serializable接口
        oos.writeBoolean(true);   //boolean-> Boolean   实现了Serializable接口
        oos.writeChar('s');   //char-> character  实现了Serializable接口
        oos.writeDouble(9.5);   //double -> Double  实现了Serializable接口
        oos.writeUTF("巴巴托斯");  //String

        //保存一个Dog对象
        oos.writeObject(new Dog("旺财",10));
        oos.close();
        System.out.println("序列化形式");


    }
}

//如果需要序列化某个类的对象，  需要实现Serializable  ，否则报错
class Dog implements Serializable {
    private String name;
    private int age;

    public Dog(String name, int age) {
        this.name = name;
        this.age = age;
    }
}
```

### ObjectInputStream

恢复数据时，恢复数据的值和数据类型

数据序列化 ObjectOutputStream

```java
package IOStream.opp4;

import IOStream.opp5.Dog;

import java.io.FileOutputStream;
import java.io.IOException;
import java.io.ObjectOutputStream;

public class demo01 {
    public static void main(String[] args) throws IOException {

        //序列化后，保存的文件格式
        String filePath = "e:\\data.txt";

        ObjectOutputStream oos = new ObjectOutputStream(new FileOutputStream(filePath));

        //序列化后数据到e:\data.txt
        oos.writeInt(100);   //int->integer 实现了Serializable接口
        oos.writeBoolean(true);   //boolean-> Boolean   实现了Serializable接口
        oos.writeChar('s');   //char-> character  实现了Serializable接口
        oos.writeDouble(9.5);   //double -> Double  实现了Serializable接口
        oos.writeUTF("巴巴托斯");  //String

        //保存一个Dog对象
        oos.writeObject(new Dog("旺财",10));
        oos.close();
        System.out.println("序列化形式完成");


    }
}

//如果需要序列化某个类的对象，  需要实现Serializable  ，否则报错
```

对某个Dog对象进行定义

```java
package IOStream.opp5;

import java.io.Serializable;

public class Dog implements Serializable{

        private String name;
        private int age;

        public Dog(String name, int age) {
            this.name = name;
            this.age = age;
        }

        @Override
        public String toString() {
            return "Dog{" +
                    "name='" + name + '\'' +
                    ", age=" + age +
                    '}';
        }

        public String getName() {
            return name;
        }

        public void setName(String name) {
            this.name = name;
        }

        public int getAge() {
            return age;
        }

        public void setAge(int age) {
            this.age = age;
        }

}
```

反序列化ObjectInputStream

```java
package IOStream.opp4;



import IOStream.opp5.Dog;

import java.io.*;

public class demo02 {
    public static void main(String[] args) throws IOException, ClassNotFoundException {
        //指定反序列化的文件
        String filePath = "e:\\data.txt";

        ObjectInputStream ois = new ObjectInputStream(new FileInputStream(filePath));

        //读取
        //1. 读取（反序列化）的顺序需要和你保存数据（序列化）的顺序一致
        //2. 否则会出现异常

        System.out.println(ois.readInt());
        System.out.println(ois.readBoolean());
        System.out.println(ois.readChar());
        System.out.println(ois.readDouble());
        System.out.println(ois.readUTF());

        //dog 的编译类型是Object ，dog的运行类型是 Dog
        Object dog = ois.readObject();
    //    System.out.println("运行类型"+ dog.getClass());
    //    System.out.println(dog);    // System.out.println(ois.readObject());

        //细节
        //如果我们希望调用Dog的方法，我们需要向下转型
        //需要我们将Dog类的定义，拷贝到可以引用的位置
        Dog dog2 = (Dog)dog;
        System.out.println(dog2.getName());
        System.out.println(dog2.getAge());


        //关闭流
        ois.close();
    }
}
```

### 对象处理流使用细节

注意事项：

1. 读写顺序要一致
2. 要求序列化或反序列化对象，需要实现Serializable
3. 序列化的类中建议添加SerialVersionUID ，为了提高版本的兼容性
4. 序列化对象时，默认将里面虽有属性都进行序列化，`但除了static或transient修是的成员`
5. 序列化对象时，要求里面的属性的类型也需要实现序列化接口
6. 序列化具备可继承性，也就是如果某类已经实现序列化，则它所有的子类也已经默认实现了序列化

这也就是个序列号（版本号）

`private static final long SerialVersionUID = 1L;`

## 标准输入输出流

​             类型

System.in 标准输入               InputStream                   键盘

System.out 标准输出            PrintStream                    屏幕

```java
package IOStream.opp6;

import java.io.BufferedInputStream;
import java.io.InputStream;

public class demo01 {
    public static void main(String[] args) {
        //System 类 的 public final static InputStream in = null;
        //System.in 编译类型  InputStream
        //System.in 运行类型   BufferedInputStream
        // 标准输入 键盘
        System.out.println(System.in.getClass());

        //
        //System.out public final out = null;
        //编译类型：PrintStream
        //运行类型：PrintStream
        //标准输出 显示器
        System.out.println(System.out.getClass());
        /**
         * class java.io.BufferedInputStream
         * class java.io.PrintStream
         */
    }
}
```

```java
Scanner scanner = new Scanner(System.in);
System.out.println("输入内容");
String next = scanner.next();
System.out.println(next);
```

## 乱码引出转换流

转换流-InputStreamReader、OutputStreamWriter

```java
package IOStream.opp7;

import java.io.BufferedReader;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;

public class demo01 {
    public static void main(String[] args) throws IOException {
        //读取 e:\\a.txt 文件到程序
        //思路
        //1. 创建字符输入流 BufferedReader [处理流]
        //2. 使用BufferedReader 对象读取a.txt
        //3. 默认情况下，读取文件是UTF-8 编码

        String filePath = "e:\\story2.txt";
        BufferedReader br = new BufferedReader(new FileReader(filePath));

        String s = br.readLine();
        System.out.println("读到的内容"+ s);
        br.close();

    }
}
```

### InputStreamReader

![image-20220808203500043](https://img.up.cdn.nahida.cn/typora-user-images/image-20220808203500043.png)

1. InputStreamReader：Reader子类，可以将InputStream（字节流）包装（转换）成Reader （字符流）
2. OutPutStreamWriter : Writer 子类，实现将OutPutStream（字节流）包装成Writer 字符流
3. 当处理纯文本数据时，如果使用字符流效率更高，并且可以有效解决中文问题，所以建议将字节流转化成字符流
4. 可以在使用时，指定编码格式（UTF-8 , GBK ,GB2312, ISO8859-1等）

```java
package IOStream.opp7;

import java.io.*;

/**
 * 使用InputStreamReader 转换流解决中文乱码问题
 * 将字节流 FileInputSteam 转成字符流 InputStreamReader,指定编码UTF-8、gbk
 */

public class demo02 {
    public static void main(String[] args) throws IOException {
        String filePath = "e:\\story2.txt";

        //1. 把字节流 FileInputSteam 转成字符流 InputStreamReader
        //2. 指定编码 gbk
//      InputStreamReader isr = new InputStreamReader(new FileInputStream(filePath),"gbk");
        //3. 把InputStreamReader传入BufferedReader
//      BufferedReader br = new BufferedReader(isr);

        //2和3可以合在一起写
        BufferedReader br = new BufferedReader(new InputStreamReader(new FileInputStream(filePath), "gbk"));

        //4. 读取
        String s = br.readLine();
        System.out.println("读取内容" + s);

        //关闭
        br.close();


    }
}
```

### OutputStreamWriter

```java
package IOStream.opp7;

import java.io.*;

/**
 * 演示OutputStreamWriter的使用
 * 把FileOutputStream 字节流，转成字符流 OutPutStreamWriter
 * 指定处理的编码 gbk等
 */

public class demo03 {
    public static void main(String[] args) throws IOException {
        String filePath = "e:\\story23.txt";
        OutputStreamWriter osw = new OutputStreamWriter(new FileOutputStream(filePath), "utf-8");
        osw.write("hi,摩拉克斯");
        osw.close();
        System.out.println("保存成功");
    }
}
```

## 打印流

PrintStream打印流只有输出流，没有输入流

### PrintStream

```java
package IOStream.opp7;

import java.io.FileNotFoundException;
import java.io.PrintStream;

/**
 * 演示 PrintStream 字节打印流
 */

public class PrintStream_ {
    public static void main(String[] args) throws FileNotFoundException {
        PrintStream out = System.out;
        //默认情况下，PrintStream 输出数据的位置是 标准输出 ，即 显示器
        out.print("hello");
        //print 底层使用得使writer ， 所以我们可以直接调用writer进行打印/输出


        out.close();

        //我们也可以去修改打印流输出的位置（设备）
        //修改到e:\f1.txt
        //“璃月”会输出到位置e:\\f1.txt
        
        //源码：是native 方法修改了out
        
        
        System.setOut(new PrintStream("e:\\f1.txt"));
        System.out.println("璃月");
    }
}
```

### PrintWriter

```java
package IOStream.opp7;

import java.io.FileWriter;
import java.io.IOException;
import java.io.PrintWriter;

public class PrintWriter_ {
    public static void main(String[] args) throws IOException {
        //PrintWriter printWriter = new PrintWriter(System.out);
        PrintWriter printWriter = new PrintWriter(new FileWriter("e://f2.txt"));   //设置输出的位置e://f2.txt
        printWriter.print("hi,璃月");
        printWriter.close();   //关闭流

    }
}
```

## 配置文件  Properties

### 读文件

##### 传统方案：还是需要修改代码本身，实际运用及其不方便

```java
import java.io.BufferedReader;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;

public class Properties01 {
    public static void main(String[] args) throws IOException {


        //读取mysql.properties 文件，并得到ip、user 、 pwd
        BufferedReader br = new BufferedReader(new FileReader("e:\\mysql.txt"));
        String line = "";
        while ((line = br.readLine()) !=null){
            String[] split = line.split("=");
            System.out.println(split[0] + "值是：" + split[1]);

        }
        br.close();

    }
}
```

文件：

```
ip = 127.0.0.1
user = root
pwd = 12345
```

##### 方案二：Properties类

常见方法：

- `load` ：加载配置文件的键值对到Properties对象
- `list`：将数据显示到指定设备
- `getProperty(key)`根据键值获值
- `setProperty(key,value)`：设置键值对存储到配置文件中，在idea中，保存信息到配置文件，如果含有中文，会存储unicode码

```java
package IOStream.opp7;

import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.util.Properties;

public class Properties02 {
    public static void main(String[] args) throws IOException {

        //1.创建properties对象
        Properties properties = new Properties();

        //2.加载配置文件
        properties.load(new FileReader("e:\\mysql.txt"));
        //3.把键值对k-v 显示到控制台
        properties.list(System.out);
        //4.根据key 获取对于的值
        String user = properties.getProperty("user");
        String pwd = properties.getProperty("pwd");
        System.out.println("用户" + user + "   密码" + pwd);


    }
}
```

### 写文件

```java
package IOStream.opp7;

import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.Properties;

public class Properties03 {
    public static void main(String[] args) throws IOException {
        // 使用Properties 类来创建 配置文件，修改配置文件内容
        Properties properties = new Properties();

        //创建
        //如果该文件没有key 就是创建
        //如果该文件有key,就是修改
        

        properties.setProperty("charset", "utf-8");
        properties.setProperty("user", "root汤姆");
        properties.setProperty("pwd", "888888");

        //将键值对k-v 存储到文件中
        properties.store(new FileOutputStream("e://data007.txt"),null);  //null是占位的，是注释，表示没有注释
//        properties.store(new FileOutputStream("e://data007.txt"),"你好");    //带来“你好”的注释
        System.out.println("保存成功");
    }
}
```

## 家庭作业

### 作业一

![image-20220808223716272](https://img.up.cdn.nahida.cn/typora-user-images/image-20220808223716272.png)

```java
package IOStream.opp7;

import java.io.BufferedWriter;
import java.io.File;
import java.io.FileWriter;
import java.io.IOException;

public class homework01 {
    public static void main(String[] args) throws IOException {
        String filePath = "e:\\mytemp";
        File file = new File(filePath);
        if(!file.exists()){
            if (file.mkdirs()){
                System.out.println("创建成功");
            }else {
                System.out.println("创建失败");
            }
        }

        String filePath2 = filePath + "\\hello.txt";
        file = new File(filePath2);
        if(!file.exists()) {
            //创建文件
            if (file.createNewFile()) {
                System.out.println("文件创建成功");

                //如果文件存在，我们就使用BufferedWriter 字符流
                BufferedWriter bufferedWriter = new BufferedWriter(new FileWriter(file));
                bufferedWriter.write("hello GENSHIN IMPAT");
                bufferedWriter.close();

            } else {
                System.out.println("文件创建失败");
            }
        }else {
            System.out.println("文件存在");

        }
    }
}
```

### 作业二

![image-20220808223803025](https://img.up.cdn.nahida.cn/typora-user-images/image-20220808223803025.png)

```java
package IOStream.opp7;

import java.io.BufferedReader;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;

public class homework02 {
    public static void main(String[] args) {
        String filePath = "e:\\story002.txt";
        BufferedReader br = null;
        String line = "";
        int lineNum = 0;

        try {
            br = new BufferedReader(new FileReader(filePath));
            while ((line = br.readLine())!=null){
                System.out.println(++lineNum + line);
            }
        } catch (IOException e) {
            throw new RuntimeException(e);
        } finally {
            try {
                if (br !=null){
                    br.close();
                }
            } catch (IOException e) {
                throw new RuntimeException(e);
            }
        }
    }
}
```

如果追加条件，所读的文件编码为gbk编码，则修改第13行代码为

`br = new BufferedReader(new InputStreamReader(new FileInputStream(filePath), "gbk"));`

```java
package IOStream.opp7;

import java.io.*;

public class homework02 {
    public static void main(String[] args) {
        String filePath = "e:\\story2.txt";
        BufferedReader br = null;
        String line = "";
        int lineNum = 0;

        try {
            br = new BufferedReader(new InputStreamReader(new FileInputStream(filePath), "gbk"));
            while ((line = br.readLine())!=null){
                System.out.println(++lineNum + line);
            }
        } catch (IOException e) {
            throw new RuntimeException(e);
        } finally {
            try {
                if (br !=null){
                    br.close();
                }
            } catch (IOException e) {
                throw new RuntimeException(e);
            }
        }
    }
}
```

### 作业三

![image-20220808225326339](https://img.up.cdn.nahida.cn/typora-user-images/image-20220808225326339.png)

```java
package IOStream.opp7;

import org.junit.jupiter.api.Test;

import java.io.*;
import java.util.Properties;

public class homework03 {
    public static void main(String[] args) throws IOException {

        String filePath = "e:\\dog.properties";
        Properties properties = new Properties();
        properties.load(new FileReader(filePath));
//        properties.list(System.out);


        String name = properties.get("name")+ "";  // object->String
        int age = Integer.parseInt(properties.get("age")+"");  //object->int
        String color = properties.get("color")+"";

        Dog dog = new Dog(name, age, color);
        System.out.println("==========对象信息===========");
        System.out.println(dog);

        //序列化
        String serFilePath = "e://dog.dat";
        ObjectOutputStream oss = new ObjectOutputStream(new FileOutputStream(serFilePath));
        oss.writeObject(dog);

        //关闭
        oss.close();
        System.out.println("序列化完成...");


    }

    //反序列化的一个方法
@Test
    public void m1() throws IOException, ClassNotFoundException {
        String serFilePath = "e:\\dog.dat";
        ObjectInputStream objectInputStream = new ObjectInputStream(new FileInputStream(serFilePath));
        Dog dog = (Dog) objectInputStream.readObject();

        System.out.println("反序列化后：");
        System.out.println(dog);

        objectInputStream.close();

    }
}



class Dog implements Serializable{
    private String name;
    private int age;
    private String color;

    public Dog(String name, int age, String color) {
        this.name = name;
        this.age = age;
        this.color = color;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    @Override
    public String toString() {
        return "Dog{" +
                "name='" + name + '\'' +
                ", age=" + age +
                ", color='" + color + '\'' +
                '}';
    }
}


```