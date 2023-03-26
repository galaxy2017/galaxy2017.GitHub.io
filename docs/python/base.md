---
title: python基础
sidebar_position: 5
---
# python基础

## 计算机组成原理

### 什么是计算机？
计算机（computer）俗称电脑，是现代一种用于高速计算的电子机器，可以进行数值计算，又可以进行逻辑判断，还具有存储记忆功能，且能够按照程序的运行，自动、高速处理数据。


### 计算机是由什么组成的？
一个完整的计算机系统，是由硬件系统和软件系统两大部分组成的。
#### 硬件系统：
主要分为主机和外设两部分，是指那些构成计算机系统的物理实体，它们主要由各种各样的电子器件和机电装置组成。

从ENIAC(世界上第一台计算机)到当前最先进的计算机，硬件系统的设计采用的都是 冯·诺依曼体系结构。


- 运算器:　负责数据的算术运算和逻辑运算，即数据的加工处理。

- 控制器:　是整个计算机的中枢神经，分析程序规定的控制信息，并根据程序要求进行控制，协调计算机各部分组件工作及内存与外设的访问等。
> 运算器和控制器统称中央处理器（即CPU)

- 存储器:　实现记忆功能的部件，用来存储程序、数据和各种信号、命令等信息，并在需要时提供这些信息。

- 输入设备:　实现将程序、原始数据、文字、字符、控制命令或现场采集的数据等信息输入到计算机。

- 输出设备:　实现将计算机处理后生成的中间结果或最后结果（各种数据符号及文字或各种控制信号等信息）输出出来。



### 软件系统：
主要分为系统软件和应用软件，是指计算机证运行所需的各种各样的计算机程序。

系统软件的任务是既要保证计算机硬件的正常工作，又要使计算机硬件的性能得到充分发挥，并且为计算机用户提供一个比较直观、方便和友好的使用界面。

操作系统：是一种方便用户管理和控制计算机软硬件资源的系统软件，同时也是一个大型的软件系统，其功能复杂，体系庞大，在整个计算机系统中具有承上启下的地位。我们操作计算机实际上是通过操作系统来进行的，它是所有软件的基础和核心。

语言处理程序：也称为编译程序，作用是把程序员用某种编程语言(如Python)所编写的程序，翻译成计算机可执行的机器语言。机器语言也被称为机器码，是可以通过CPU进行分析和执行的指令集。



### 计算机是如何处理程序的？
- 按照冯·诺依曼存储程序的原理，计算机的工作流程大致如下：

    - 用户打开程序，程序开始执行；
    - 操作系统将程序内容和相关数据送入计算机的内存；
    - CPU根据程序内容从内存中读取指令；
    - CPU分析、处理指令，并为取下一条指令做准备；
    - 取下一条指令并分析、处理，如此重复操作，直至执行完程序中全部指令，最后将计算的结果放入指令指定的存储器地址中。

### 编程语言是什么？

是用来定义 计算机程序 的形式语言。我们通过编程语言来编写程序代码，再通过语言处理程序执行向计算机发送指令，让计算机完成对应的工作。

简单来说，编程语言就是人类和计算机进行交流的语言。

## python初探

### python简介

#### python的历史
1. 1989年圣诞节：Guido von Rossum开始写Python语言的编译器。
2. 1991年2月：第一个Python编译器（同时也是解释器）诞生，它是用C语言实现的（后面又出现了Java和C#实现的版本Jython和IronPython，以及PyPy、Brython、Pyston等其他实现），可以调用C语言的库函数。在最早的版本中，Python已经提供了对“类”，“函数”，“异常处理”等构造块的支持，同时提供了“列表”和“字典”等核心数据类型，同时支持以模块为基础来构造应用程序。
3. 1994年1月：Python 1.0正式发布。
4. 2000年10月16日：Python 2.0发布，增加了实现完整的[垃圾回收](https://zh.wikipedia.org/wiki/%E5%9E%83%E5%9C%BE%E5%9B%9E%E6%94%B6_(%E8%A8%88%E7%AE%97%E6%A9%9F%E7%A7%91%E5%AD%B8))，提供了对[Unicode](https://zh.wikipedia.org/wiki/Unicode)的支持。与此同时，Python的整个开发过程更加透明，社区对开发进度的影响逐渐扩大，生态圈开始慢慢形成。
5. 2008年12月3日：Python 3.0发布，它并不完全兼容之前的Python代码，不过因为目前还有不少公司在项目和运维中使用Python 2.x版本，所以Python 3.x的很多新特性后来也被移植到Python 2.6/2.7版本中。


#### Python的优缺点

##### Python的优点
Python的优点很多，简单的可以总结为以下几点。

1. 简单和明确，做一件事只有一种方法。
2. 学习曲线低，跟其他很多语言相比，Python更容易上手。
3. 开放源代码，拥有强大的社区和生态圈。
4. 解释型语言，天生具有平台可移植性。
5. 支持两种主流的编程范式（面向对象编程和函数式编程）都提供了支持。
6. 可扩展性和可嵌入性，可以调用C/C++代码，也可以在C/C++中调用Python。
7. 代码规范程度高，可读性强，适合有代码洁癖和强迫症的人群。

##### Python的缺点
Python的缺点主要集中在以下几点。

1. 执行效率稍低，因此计算密集型任务可以由C/C++编写。
2. 代码无法加密，但是现在很多公司都不销售卖软件而是销售服务，这个问题会被淡化。
3. 在开发时可以选择的框架太多（如Web框架就有100多个），有选择的地方就有错误。


#### Python的应用领域

目前Python在Web应用开发、云基础设施、DevOps、网络爬虫开发、数据分析挖掘、机器学习等领域都有着广泛的应用，因此也产生了Web后端开发、数据接口开发、自动化运维、自动化测试、科学计算和可视化、数据分析、量化交易、机器人开发、图像识别和处理等一系列的职位。

- Web应用开发
    Python经常被用于Web开发。比如，通过mod_wsgi模块，Apache可以运行用Python编写的Web程序。Python定义了WSGI标准应用接口来协调Http服务器与基于Python的Web程序之间的通信。一些Web框架，如Django,TurboGears,web2py,Zope等，可以让程序员轻松地开发和管理复杂的Web程序。

- 操作系统管理、服务器运维的自动化脚本
    在很多操作系统里，Python是标准的系统组件。 大多数Linux发行版以及NetBSD、OpenBSD和Mac OS X都集成了Python，可以在终端下直接运行Python。有一些Linux发行版的安装器使用Python语言编写，比如Ubuntu的Ubiquity安装器,Red Hat Linux和Fedora的Anaconda安装器。Gentoo Linux使用Python来编写它的Portage包管理系统。Python标准库包含了多个调用操作系统功能的库。通过pywin32这个第三方软件 包，Python能够访问Windows的COM服务及其它Windows API。使用IronPython，Python程序能够直接调用.Net Framework。一般说来，Python编写的系统管理脚本在可读性、性能、代码重用度、扩展性几方面都优于普通的shell脚本。

- 网络爬虫
    Python有大量的HTTP请求处理库和HTML解析库，并且有成熟高效的爬虫框架Scrapy和分布式解决方案scrapy-redis，在爬虫的应用方面非常广泛。

- 科学计算
    NumPy、SciPy、Pandas、Matplotlib可以让Python程序员编写科学计算程序。

- 桌面软件
    PyQt、PySide、wxPython、PyGTK是Python快速开发桌面应用程序的利器。

- 服务器软件（网络软件）
    Python对于各种网络协议的支持很完善，因此经常被用于编写服务器软件、网络爬虫。第三方库Twisted支持异步网络编程和多数标准的网络协议(包含客户端和服务器)，并且提供了多种工具，被广泛用于编写高性能的服务器软件。

- 游戏
    很多游戏使用C++编写图形显示等高性能模块，而使用Python或者Lua编写游戏的逻辑、服务器。相较于Python，Lua的功能更简单、体积更小；而Python则支持更多的特性和数据类型。

- 构思实现，产品早期原型和迭代
    Google、NASA、Facebook都在内部大量地使用Python。


### 搭建编程环境

#### Windows环境
可以在[Python官方网站](https://www.python.org)下载到Python的Windows安装程序（exe文件），需要注意的是如果在Windows 7环境下安装Python 3.x，需要先安装Service Pack 1补丁包（可以通过一些工具软件自动安装系统补丁的功能来安装），安装过程建议勾选“Add Python 3.x to PATH”（将Python 3.x添加到PATH环境变量）并选择自定义安装，在设置“Optional Features”界面最好将“pip”、“tcl/tk”、“Python test suite”等项全部勾选上。强烈建议选择自定义的安装路径并保证路径中没有中文。安装完成会看到“Setup was successful”的提示。如果稍后运行Python程序时，出现因为缺失一些动态链接库文件而导致Python解释器无法工作的问题，可以按照下面的方法加以解决。

如果系统显示api-ms-win-crt\*.dll文件缺失，可以参照[《api-ms-win-crt\*.dll缺失原因分析和解决方法》](<https://zhuanlan.zhihu.com/p/32087135>)一文讲解的方法进行处理或者直接在[微软官网](https://www.microsoft.com/zh-cn/download/details.aspx?id=48145)下载Visual C++ Redistributable for Visual Studio 2015文件进行修复；如果是因为更新Windows的DirectX之后导致某些动态链接库文件缺失问题，可以下载一个[DirectX修复工具](<https://dl.pconline.com.cn/download/360074-1.html>)进行修复。


#### Linux环境

Linux环境自带了Python 2.x版本，但是如果要更新到3.x的版本，可以在[Python的官方网站](https://www.python.org)下载Python的源代码并通过源代码构建安装的方式进行安装，具体的步骤如下所示。

安装依赖库（因为没有这些依赖库可能在源代码构件安装时因为缺失底层依赖库而失败）。

```Shell
yum -y install wget gcc zlib-devel bzip2-devel openssl-devel ncurses-devel sqlite-devel readline-devel tk-devel gdbm-devel db4-devel libpcap-devel xz-devel libffi-devel
```

下载Python源代码并解压缩到指定目录。

```Shell
wget https://www.python.org/ftp/python/3.7.3/Python-3.7.3.tgz
xz -d Python-3.7.3.tar.xz
tar -xvf Python-3.7.3.tar
```

切换至Python源代码目录并执行下面的命令进行配置和安装。

```Shell
cd Python-3.7.3
./configure --prefix=/usr/local/python37 --enable-optimizations
make && make install
```

修改用户主目录下名为.bash_profile的文件，配置PATH环境变量并使其生效。

```Shell
cd ~
vim .bash_profile
```

```Shell
# ... 此处省略上面的代码 ...

export PATH=$PATH:/usr/local/python37/bin

# ... 此处省略下面的代码 ...
```

激活环境变量。

```Shell
source .bash_profile
```


#### macOS环境

macOS也自带了Python 2.x版本，可以通过[Python的官方网站](https://www.python.org)提供的安装文件（pkg文件）安装Python 3.x的版本。默认安装完成后，可以通过在终端执行python命令来启动2.x版本的Python解释器，可以通过执行python3命令来启动3.x版本的Python解释器。


### 从终端运行Python程序



#### 确认Python的版本

可以Windows的命令行提示符中键入下面的命令。

```Shell
python --version
```
或者是在Linux或macOS系统的终端中键入下面的命令。

```Shell
python3 --version
```

当然也可以先输入python或python3进入交互式环境，再执行以下的代码检查Python的版本。

```Python
import sys

print(sys.version_info)
print(sys.version)
```


#### 编写Python源代码

可以用文本编辑工具（推荐使用[Sublime](<https://www.sublimetext.com/>)、[Atom](<https://atom.io/>)、[Visual Studio Code](<https://code.visualstudio.com/>)等高级文本编辑工具）编写Python源代码并用py作为后缀名保存该文件，代码内容如下所示。

```Python
print('hello, world!')
```


#### 运行程序

切换到源代码所在的目录并执行下面的命令，看看屏幕上是否输出了"hello, world!"。

```Shell
python hello.py
```

或

```Shell
python3 hello.py
```

### 代码中的注释

注释是编程语言的一个重要组成部分，用于在源代码中解释代码的作用从而增强程序的可读性和可维护性，当然也可以将源代码中不需要参与运行的代码段通过注释来去掉，这一点在调试程序的时候经常用到。注释在随源代码进入预处理器或编译时会被移除，不会在目标代码中保留也不会影响程序的执行结果。

1. 单行注释 - 以#和空格开头的部分
2. 多行注释 - 三个引号开头，三个引号结尾

```Python
"""
第一个Python程序 - hello, world!
向伟大的Dennis M. Ritchie先生致敬
"""
print('hello, world!')
# print("你好,世界！")
print('你好', '世界')
print('hello', 'world', sep=', ', end='!')
print('goodbye, world', end='!\n')
```

### 其他工具介绍

#### IDLE - 自带的集成开发工具

IDLE是安装Python环境时自带的集成开发工具，如下图所示。但是由于IDLE的用户体验并不是那么好所以很少在实际开发中被采用。

#### IPython - 更好的交互式编程工具

IPython是一种基于Python的交互式解释器。相较于原生的Python交互式环境，IPython提供了更为强大的编辑和交互功能。可以通过Python的包管理工具pip安装IPython和Jupyter，具体的操作如下所示。

```Shell
pip install ipython
```

或

```Shell
pip3 install ipython
```

当然，我们也可以通过安装Jupyter工具并运行名为notebook的程序在浏览器窗口中进行交互式代码编写操作。

```Shell
pip install jupyter
```

或

```Shell
pip3 intall jupyter
```

然后执行下面的命令：

```Shell
jupyter notebook
```

#####  预备:Jupyter Notebook环境快速上手(http://jupyter.org/assets/main-logo.svg)

###### 推荐:正常安装及启动
- [官网下载](https://www.anaconda.com)安装
- [清华镜像下载](https://mirrors.tuna.tsinghua.edu.cn/anaconda/archive/)安装
- 命令行启动`jupyter notebook`或点击快捷图标方式启动

启动后可以看到文件的目录的特点和当前的用户目录一样：
例如我自己的：打开Terminal--->pwd--->ls---》查看当前目录下的文件是否和notebook下的文件一样

启动的方式2种：
第一种：直接点击anaconda图标---》找到里面的jupyter notebook
第二种：terminal--->输入：jupyter notebook


##### 安装NBextensions的步骤
###### windows
- 1：确定是已经安装好anaconda
- 2：要在anaconda prompt模式下运行（jupyter notebook打开）
- 3：pip install jupyter_contrib_nbextensions（安装成功后，关掉jupyter notebook及相关网页，并重新打开，观察是否安装成功）
- 4：如果发现依旧失败，则可进行此步骤，注意（jupyter notebook关闭）             
       进行配置：jupyter contrib nbextension install --user --skip-running-check
- 5：安装完成后，重新启动jupyter notebook，“Nbextensions”出现在导航栏中，勾选目录。 

###### macos
- 1：确定是已经安装好anaconda
- 2：要在Mac终端下运行，如何找到终端（启动台-其他-终端）
- 3：先安装nbextensions依次输入运行下面代码：
   pip install jupyter_contrib_nbextensionsjupyter contrib nbextension install --user
- 4：再安装nbextensions_configurator,依次输入运行以下代码：
   pip install jupyter_nbextensions_configuratorjupyter nbextensions_configurator enable --user
- 5：安装完成后，关终端，启动anaconda中的jupyter notebook,在主页中，可以看见Nbextensions标签页，选中Hinterland 就能使用代码补全了。

###### 里面几个常用的插件
- Table of Contents：更容易导航
- Autopep8：轻轻一击就能获得简洁代码，相当于代码的格式化
- variable inspector：跟踪你的工作空间
- ExecuteTime：显示单元格的运行时间和耗时，后面在讲到magic里面有和他相似的内容功能

#### Notebook使用
- 目录
- 文件新建及导入导出
- 菜单
- 快捷键 [esc+h]
jupyter常用的快捷键：
	选中单元格情况下：M----->markdown，Y------>code
  
	shift + Tab :查看方法中的参数
  
	双击D，删除当前的单元格（删除之后，Crtl + Z还原无效）
  
	插入一行：b（bellow），a（above）
  

	执行单元：Ctrl + Enter(运行本单元，选中本单元)
  
    shift + Enter(运行本单元，选中下一个单元)
  
    Alt + Enter(运行本单元，向下插入一个单元)
  
	更多魔法指令：%lsmagic查看

##### Notebook中详解


* Python CELL
* Markdown CELL &* Latex in markdown cell
* Magic

shell这边分为两个部分，
1.Python cell----写Python代码
2.makedown cell
3.latex cell---写数学公式

#### Markdown CELL &* Latex in markdown cell
LaTeX实现的原理类似于HTML，Notebook中的Markdown格式解释器中内置Latex渲染器，可以将由\$与\$包裹的内容进行渲染并产生最终效果。

sum求和符号

$$\sum_{i =1}^{n}ab$$



##### 希腊字母   
|希腊字母小写/大写|LaTeX形式|希腊字母小写/大写|LaTeX形式|
|:---|:---|:---|:---|
|α A|\alpha A	|μ N|	\mu N|
|β B|\beta B|ξ Ξ|\xi \Xi|
|γ Γ	|\gamma \Gamma	|o O|o O|
|δ Δ	|\delta \ Delta	|π Π|	\pi \Pi|
|ϵ ε E	|\epsilon \varepsilon E	|ρ ϱ P	|\rho \varrho P|
|ζ Z	|\zeta Z	|σ Σ|	\sigma \Sigma|
|η H	|\eta H	|τ T	|\tau T|
|θ ϑ Θ	|\theta \vartheta \Theta|	υ Υ|	\upsilon \Upsilon|
|ι I	|\iota I	|ϕ φ Φ|	\phi \varphi \Phi|
|κ K	|\kappa K	|χ X	|\chi X|
|λ Λ	|\lambda \Lambda	|ψ Ψ|	\psi \Psi|

##### 不同字体
mathbb:$\mathbb{ABCDEFGHIJKLMNOPQRSTUVWXYZ,abcdefghijklmnopqrstuvwxyz}$   
mathscr:$\mathscr{ABCDEFGHIJKLMNOPQRSTUVWXYZ,abcdefghijklmnopqrstuvwxyz}$   
mathcal:$\mathcal{ABCDEFGHIJKLMNOPQRSTUVWXYZ,abcdefghijklmnopqrstuvwxyz}$   
mathbf:$\mathbf{ABCDEFGHIJKLMNOPQRSTUVWXYZ,abcdefghijklmnopqrstuvwxyz}$

##### 取消默认斜体
默认倾斜：$ x_{z}$   
取消默认倾斜$\rm x_{z}$
##### 特殊符号
$\bigcap_{i=1}^{n} \bigcup_{i=1}^n  \binom{5}{3}$   
$\forall$- 全称量词,表示任意的，$\exists$- 存在量词,表示存在/至少一个   
$\partial$ 偏导符号， $\propto$ 正比符号，$\mathop{\lim}_{n \to \infty }f(x)$无穷符号及极限

##### 简单公式
>$y=x^2$

>$e^{i\pi} + 1 = 0$

>$e^x=\sum_{i=0}^\infty \frac{1}{i!}x^i$

>独占一行：$$\frac{n!}{k!(n-k)!} = {n \choose k}$$

##### 矩阵
$A_{m,n} =
 \begin{pmatrix}
  a_{1,1} & a_{1,2} & \cdots & a_{1,n} \\
  a_{2,1} & a_{2,2} & \cdots & a_{2,n} \\
  \vdots  & \vdots  & \ddots & \vdots  \\
  a_{m,1} & a_{m,2} & \cdots & a_{m,n}
 \end{pmatrix}$


```python
import handcalcs.render
from math import sqrt,asin,sin
```


```python
%%render
a = 2
b = 3
c = 2*a+b/3
```


\[
\begin{aligned}
a &= 2\;
\\[10pt]
b &= 3\;
\\[10pt]
c &= 2 \cdot a + \frac{ b }{ 3 } = 2 \cdot 2 + \frac{ 3 }{ 3 } &= 5.0
\end{aligned}
\]



```python
# 基础用法2——在方程中进行显示
from handcalcs.decorator import handcalc
@handcalc(left="",right="",jupyter_display=True)
def my_calc(x,y,z):
    a = 2*x/y
    b = 3*a
    c = (a+b)/z 
    return locals()
my_calc(1,1,1)
```


\[
\begin{aligned}
a &= 2 \cdot \frac{ x }{ y } = 2 \cdot \frac{ 1 }{ 1 } &= 2.0
\\[10pt]
b &= 3 \cdot a = 3 \cdot 2.0 &= 6.0
\\[10pt]
c &= \frac{ a + b }{ z } = \frac{ 2.0 + 6.0 }{ 1 } &= 8.0
\end{aligned}
\]





    {'x': 1, 'y': 1, 'z': 1, 'a': 2.0, 'b': 6.0, 'c': 8.0}




```python
%%render
#symbolic
a = 1
b = 4
c = 3
x = (-b+sqrt(b**2-4*a*c))/(2*a)
```


\[
\begin{aligned}
a &= 1\;
\\[10pt]
b &= 4\;
\\[10pt]
c &= 3\;
\\[10pt]
x &= \frac{ - b + \sqrt{ \left( \left( b \right) ^{ 2 } - 4 \cdot a \cdot c \right) } }{ 2 \cdot a }\;
\end{aligned}
\]



```python
%%render
#symbolic
f = c/a + b #Comment
g = c*f / a # Comment
d = sqrt(a / b) + asin(sin(b / c)) + (a/b)**(0.5) + sqrt((a*b + b*c)/(b**2)) + sin(a/b) #Comment
```


\[
\begin{aligned}
f &= \frac{ c }{ a } + b\;\;\textrm{(Comment)}
\\[10pt]
g &= c \cdot \frac{ f }{ a }\;\;\textrm{(Comment)}
\\[10pt]
d &= \sqrt{ \frac{ a }{ b } } + \arcsin{ \left( \sin{ \left( \frac{ b }{ c } \right) } \right) } + \left( \frac{ a }{ b } \right) ^{ \left( 0.5 \right) } + \sqrt{ \frac{ a \cdot b + b \cdot c }{ \left( b \right) ^{ 2 } } } + \sin{ \left( \frac{ a }{ b } \right) }\;\;\textrm{(Comment)}
\end{aligned}
\]



```python
%%render
#Symbolic
Mag_1 = 100
if Mag_1< 10000:Mag = Mag_1+100
else:Mag = Mag_1-10000
```


\[
\begin{aligned}
Mag_{1} &= 100\;
\\[10pt]
if Mag_{1< 10000:Mag} &= Mag_{1} + 100\;
\\[10pt]
else:Mag &= Mag_{1} - 10000\;
\end{aligned}
\]



```python
%%tex
a = 2
b = 3
c = 2*a + b/3
```

    \[
    \begin{aligned}
    a &= 2\;
    \\[10pt]
    b &= 3\;
    \\[10pt]
    c &= 2 \cdot a + \frac{ b }{ 3 } = 2 \cdot 2 + \frac{ 3 }{ 3 } &= 5.0
    \end{aligned}
    \]


\[
\begin{aligned}
a &= 2\;
\\[10pt]
b &= 3\;
\\[10pt]
c &= 2 \cdot a + \frac{ b }{ 3 } = 2 \cdot 2 + \frac{ 3 }{ 3 } &= 5.0
\end{aligned}
\]

#### Notebook中的Magic开关
在jupyter的Code模式下，除了一般的python代码编辑外，jupyter还支持一些其他的编程语言，如R，Julia，bash等，不过需要使用magic单元。
- 为实现一些快捷操作，提升效率。Notebook中提供了Magic开关，能极大得优化我们使用Notebook的体验。
- Magic 开关分为两大类：%line magic(%表示magic只在本行有效) & %%cell magic(%%表示magic在整个cell单元有效)

#### Sublime / Visual Studio Code - 高级文本编辑器

- 首先可以通过[官方网站](https://www.sublimetext.com/)下载安装程序安装Sublime 3或Sublime 2。

- 安装包管理工具。
  1. 通过快捷键Ctrl+`或者在View菜单中选择Show Console打开控制台，输入下面的代码。

  - Sublime 3

  ```Python
  import  urllib.request,os;pf='Package Control.sublime-package';ipp=sublime.installed_packages_path();urllib.request.install_opener(urllib.request.build_opener(urllib.request.ProxyHandler()));open(os.path.join(ipp,pf),'wb').write(urllib.request.urlopen('http://sublime.wbond.net/'+pf.replace(' ','%20')).read())
  ```
  - Sublime 2

  ```Python
  import  urllib2,os;pf='Package Control.sublime-package';ipp=sublime.installed_packages_path();os.makedirs(ipp)ifnotos.path.exists(ipp)elseNone;urllib2.install_opener(urllib2.build_opener(urllib2.ProxyHandler()));open(os.path.join(ipp,pf),'wb').write(urllib2.urlopen('http://sublime.wbond.net/'+pf.replace(' ','%20')).read());print('Please restart Sublime Text to finish installation')
  ```
  2. 手动安装浏览器输入  https://sublime.wbond.net/Package%20Control.sublime-package 下载这个文件
  下载好以后，打开sublime text，选择菜单Preferences->Browse Packages... 打开安装目录
  此时会进入到一个叫做Packages的目录下，点击进入上一层目录Sublime Text3，在此目录下有一个文件夹叫做Installed Packages，把刚才下载的文件放到这里就可以了。然后重启sublime text3，观察Preferences菜单最下边是否有Package Settings 和Package Control两个选项，如果有，则代表安装成功了。


- 安装插件。通过Preference菜单的Package Control或快捷键Ctrl+Shift+P打开命令面板，在面板中输入Install Package就可以找到安装插件的工具，然后再查找需要的插件。我们推荐大家安装以下几个插件：

  - SublimeCodeIntel - 代码自动补全工具插件。
  - Emmet - 前端开发代码模板插件。
  - Git - 版本控制工具插件。
  - Python PEP8 Autoformat - PEP8规范自动格式化插件。
  - ConvertToUTF8 - 将本地编码转换为UTF-8。

> 说明：事实上Visual Studio Code可能是更好的选择，它不用花钱并提供了更为完整和强大的功能，有兴趣的同学可以自行研究。


#### PyCharm - Python开发神器

PyCharm是由JetBrains公司开发的提供给Python专业的开发者的一个集成开发环境，它最大的优点是能够大大提升Python开发者的工作效率，为开发者集成了很多用起来非常顺手的功能，包括代码调试、高亮语法、代码跳转、智能提示、自动补全、单元测试、版本控制等等。此外，PyCharm还提供了对一些高级功能的支持，包括支持基于Django框架的Web开发。

##### PyCharm的安装--科学上网，搜索安装方法，给自己的电脑配置pycharm

可以在JetBrains公司的官方网站找到PyCharm的[下载链接](https://www.jetbrains.com/pycharm/download/)，有两个可供下载的版本一个是社区版一个是专业版，社区版在[Apache许可证](https://zh.wikipedia.org/wiki/Apache%E8%AE%B8%E5%8F%AF%E8%AF%81)下发布，专业版在专用许可证下发布（需要购买授权下载后可试用30天），其拥有许多额外功能。安装PyCharm需要有JRE（Java运行时环境）的支持，如果没有可以在安装过程中选择在线下载安装。

> 说明：如果你是一名学生，希望购买PyCharm来使用，可以看看[教育优惠官方申请指南](https://sales.jetbrains.com/hc/zh-cn/articles/207154369)。

#### 实训平台
- notebook环境
- 链接地址：https://train.kaikeba.com


```python
#表示一个可以修改内核选项ast_node_interactivity,使得jupyter对独占一行的所有变量都自动显示
%config ZMQInteractiveShell.ast_node_interactivity='all'
a = 2
n = 4
c = 5
a
n
c
```




    2






    4






    5



## Python基础语法

### 第一个Python程序

​	Python语言简单，像其他语言一样，我们可以在本地的文本编辑中书写以下代码：

```python
my_name = input('please input your name:\n')
print(my_name)
```

​	保存文档后重命名为`hello.py`，在文档所在目录下打开终端，并输入命令行`python hello.py`即可运行该python代码。就是这么方便。不过笔者建议做python项目开发时可以使用Pycharm这样类似的工具，更方便，详见Python软件基础那一章，[具体使用方法点击链接](https://www.cnblogs.com/muziyunxuan/p/7985265.html)。

​	以上代码中，`input`函数一般用于在运行过程中，让用户输入，是python基础中经常用到的命令，括号中的字符串为显示在终端上的提示信息；`print`函数一般用于打印显示信息，括号内的变量等即为要显示的内容。

### Python交互方式

#### 文本模式

- Python代码保存在文件中，解释器对文件逐行解释执行
- 在终端中输入`python 要执行的文件名`，就像前文的hello name例子那样。

#### 交互模式

- 直接在终端中运行解释器
- 在交互模式中边输入边执行Python代码，会立即看到程序执行结果
- 常用Python解释器和IPython解释器

##### Python解释器

###### 优点

- 适合于学习/验证Python语法或者局部代码

###### 缺点

- 代码不能保存
- 不适合运行太大的程序

##### 使用方法

- 在终端中输入python即可进入python解释器环境
- 在python解释器环境中输入`exit()`即可退出解释器

##### IPython解释器

##### 特点

- 支持自动补全


- 自动缩进
- 支持`bash shell`命令
- 内置一些功能和函数
- 需要额外安装，命令`pip install ipython`

##### 使用方法


- 如图所示，在终端中输入ipython即可进入python解释器环境
- 在python解释器环境中输入`exit`即可退出解释器



### 缩进

​	学习 Python 与其他语言最大的区别就是，Python 的代码块不使用大括号 {} 来控制类，函数以及其他逻辑判断。python 最具特色的就是用缩进来写模块。

​	缩进的空白数量是可变的，但是所有代码块语句必须包含相同的缩进空白数量，这个必须严格执行。

例如如下代码缩进一致，运行则不会出错:

```python
if True:
    print("True")
else:
  	print("False")
```

如下代码，缩进不一致，运行则会出错：

```python
if True:
    print("True")
else:
 print("False")
```



### 多行语句

Python语句中一般以新行作为语句的结束符。但是我们可以使用斜杠（ \）将一行的语句分为多行显示，如下所示：

```python
total = item_one + \
        item_two + \
        item_three
```

语句中包含 [], {} 或 () 括号就不需要使用多行连接符。如下实例：

```python
days = ['Monday', 'Tuesday', 'Wednesday',
        'Thursday', 'Friday']
```

### Python引号

Python 可以使用引号( **'** )、双引号( **"** )、三引号( **'''** 或 **"""** ) 来表示字符串，引号的开始与结束必须的相同类型的。其中三引号可以由多行组成，编写多行文本的快捷语法，常用于文档字符串，在文件的特定地点，被当做注释。但是一段字符串只能有一种类型的引号来表示整个字符串，在字符串中间若需要引号，必须和起始结束的字符串不同。如：

```python
# 正确语法
string1 = '他说："他想学Python"'

# 错误语法
string1 = '他说：'他想学Python''
```



### Python注释

#### 单行注释

python中单行注释以及行末注释采用 # 开头。

```python
# 第一个注释
print("Hello, Python!");  # 第二个注释,代码与“#”号相隔两个空格
```

#### 多行注释

python 中多行注释使用三个单引号(''')或三个双引号(""")。

```python
'''
这是多行注释，使用单引号。
这是多行注释，使用单引号。
这是多行注释，使用单引号。
'''

"""
这是多行注释，使用双引号。
这是多行注释，使用双引号。
这是多行注释，使用双引号。
"""
```



### Python空行

​函数之间或类的方法之间用空行分隔，表示一段新的代码的开始。类和函数入口之间也用一行空行分隔，以突出函数入口的开始。

​空行与代码缩进不同，空行并不是Python语法的一部分。书写时不插入空行，Python解释器运行也不会出错。但是空行的作用在于分隔两段不同功能或含义的代码，便于日后代码的维护或重构。

注意：空行也是程序代码的一部分。

### 命令行参数

```Python
$ python test.py arg1 arg2 arg3
```

Python 中可以所用 **sys** 的 **sys.argv** 来获取命令行参数：

- sys.argv 是命令行参数列表。
- len(sys.argv) 是命令行参数个数。
- sys.argv[0] 表示脚本名。

实例`test.py`文件：

```python
import sys


print('参数个数为:', len(sys.argv), '个参数。')
print('参数列表:', str(sys.argv))
```

在终端命令中运行时输入`python test.py 1 2 3 4`,结果为：

```
$ python test.py 1 2 3 4
参数个数为: 5 个参数。
参数列表: ['test.py', '1', '2', '3', '4']
```


## 语言元素

### 指令和程序

计算机的硬件系统通常由五大部件构成，包括：运算器、控制器、存储器、输入设备和输出设备。其中，运算器和控制器放在一起就是我们通常所说的中央处理器，它的功能是执行各种运算和控制指令以及处理计算机软件中的数据。我们通常所说的程序实际上就是指令的集合，我们程序就是将一系列的指令按照某种方式组织到一起，然后通过这些指令去控制计算机做我们想让它做的事情。今天我们大多数时候使用的计算机，虽然它们的元器件做工越来越精密，处理能力越来越强大，但究其本质来说仍然属于[“冯·诺依曼结构”](https://zh.wikipedia.org/wiki/%E5%86%AF%C2%B7%E8%AF%BA%E4%BC%8A%E6%9B%BC%E7%BB%93%E6%9E%84)的计算机。“冯·诺依曼结构”有两个关键点，一是指出要将存储设备与中央处理器分开，二是提出了将数据以二进制方式编码。二进制是一种“逢二进一”的计数法，跟我们人类使用的“逢十进一”的计数法没有实质性的区别，人类因为有十根手指所以使用了十进制（因为在数数时十根手指用完之后就只能进位了，当然凡事都有例外，玛雅人可能是因为长年光着脚的原因把脚趾头也算上了，于是他们使用了二十进制的计数法，在这种计数法的指导下玛雅人的历法就与我们平常使用的历法不一样，而按照玛雅人的历法，2012年是上一个所谓的“太阳纪”的最后一年，而2013年则是新的“太阳纪”的开始，后来这件事情被以讹传讹的方式误传为”2012年是玛雅人预言的世界末日“这种荒诞的说法，今天我们可以大胆的猜测，玛雅文明之所以发展缓慢估计也与使用了二十进制有关）。对于计算机来说，二进制在物理器件上来说是最容易实现的（高电压表示1，低电压表示0），于是在“冯·诺依曼结构”的计算机都使用了二进制。虽然我们并不需要每个程序员都能够使用二进制的思维方式来工作，但是了解二进制以及它与我们生活中的十进制之间的转换关系，以及二进制与八进制和十六进制的转换关系还是有必要的。如果你对这一点不熟悉，可以自行使用[维基百科](https://zh.wikipedia.org/wiki/%E4%BA%8C%E8%BF%9B%E5%88%B6)或者[百度百科](https://baike.baidu.com)科普一下。

> 提示：近期关于**量子计算机**的研究已经被推倒了风口浪尖，量子计算机基于量子力学进行运算，使用量子瞬移的方式来传递信息。2018年6月，Intel宣布开发出新款量子芯片并通过了在接近绝对零度环境下的测试；2019年1月，IBM向全世界发布了首款商业化量子计算机；2020年6月18日，中国科学院宣布，中国科学技术大学潘建伟、苑震生等在超冷原子量子计算和模拟研究中取得重要进展——在理论上提出并实验实现原子深度冷却新机制的基础上，在光晶格中首次实现了1250对原子高保真度纠缠态的同步制备，为基于超冷原子光晶格的规模化量子计算与模拟奠定了基础。这一成果19日在线发表于学术期刊《科学》上 。


### 变量和类型

在程序设计中，变量是一种存储数据的载体。计算机中的变量是实际存在的数据或者说是存储器中存储数据的一块内存空间，变量的值可以被读取和修改，这是所有计算和控制的基础。计算机能处理的数据有很多种类型，除了数值之外还可以处理文本、图形、音频、视频等各种各样的数据，那么不同的数据就需要定义不同的存储类型。Python中的数据类型很多，而且也允许我们自定义新的数据类型（这一点在后面会讲到），我们先介绍几种常用的数据类型。

- 整型：Python中可以处理任意大小的整数（Python 2.x中有int和long两种类型的整数，但这种区分对Python来说意义不大，因此在Python 3.x中整数只有int这一种了），而且支持二进制（如`0b100`，换算成十进制是4）、八进制（如`0o100`，换算成十进制是64）、十进制（`100`）和十六进制（`0x100`，换算成十进制是256）的表示法。
- 浮点型：浮点数也就是小数，之所以称为浮点数，是因为按照科学记数法表示时，一个浮点数的小数点位置是可变的，浮点数除了数学写法（如`123.456`）之外还支持科学计数法（如`1.23456e2`）。
- 字符串型：字符串是以单引号或双引号括起来的任意文本，比如`'hello'`和`"hello"`,字符串还有原始字符串表示法、字节字符串表示法、Unicode字符串表示法，而且可以书写成多行的形式（用三个单引号或三个双引号开头，三个单引号或三个双引号结尾）。
- 布尔型：布尔值只有`True`、`False`两种值，要么是`True`，要么是`False`，在Python中，可以直接用`True`、`False`表示布尔值（请注意大小写），也可以通过布尔运算计算出来（例如`3 < 5`会产生布尔值`True`，而`2 == 1`会产生布尔值`False`）。
- 复数型：形如`3+5j`，跟数学上的复数表示一样，唯一不同的是虚部的`i`换成了`j`。


#### 变量命名

对于每个变量我们需要给它取一个名字，就如同我们每个人都有属于自己的响亮的名字一样。在Python中，变量命名需要遵循以下这些必须遵守硬性规则和强烈建议遵守的非硬性规则。

- 硬性规则：
  - 变量名由字母（广义的Unicode字符，不包括特殊字符）、数字和下划线构成，数字不能开头。
  - 大小写敏感（大写的`a`和小写的`A`是两个不同的变量）。
  - 不要跟关键字（有特殊含义的单词，后面会讲到）和系统保留字（如函数、模块等的名字）冲突。
- PEP 8要求：
  - 用小写字母拼写，多个单词用下划线连接。
  - 受保护的实例属性用单个下划线开头（后面会讲到）。
  - 私有的实例属性用两个下划线开头（后面会讲到）。

当然，作为一个专业的程序员，给变量（事实上应该是所有的标识符）命名时做到见名知意也是非常重要的。


#### 命名规则
- 固定规则

标示符由字母、下划线和数字组成，且数字不能开头

思考：下面的标示符哪些是正确的，哪些不正确为什么
fromNo12，from#12，my_Boolean，my-Boolean，Obj2，2ndObj
myInt，test1，Mike2jack，My_tExt，_test，test!32，haha(da)tt
int，jack_rose，jack&rose，GUI，G.U.I

注意：
python中的标识符是区分大小写的

- 行业内规则

1.见名知意

    起一个有意义的名字，尽量做到看一眼就知道是什么意思(提高代码可 读性) 比如: 名字 就定义为 name , 定义学生 用 student

2.驼峰命名法

       2.1 小驼峰式命名法（lower camel case）： 第一个单词以小写字母开始；第二个单词的首字母大写，例如：myName、aDog
       
       2.2 大驼峰式命名法（upper camel case）： 每一个单字的首字母都采用大写字母，例如：FirstName、LastName

3.下划线连接法

   不过在程序员中还有一种命名法比较流行，就是用下划线“_”来连接所有的单词，比如send_buf

#### 关键字

##### 定义：
    python一些具有特殊功能的标示符，这就是所谓的关键字

关键字，是python已经使用的了，所以不允许开发者自己定义和关键字相同的名字的标示符

##### 如何查看关键字？

- 方式1：

进入终端----》Python---》import keyword---》keyword.kwlist

关键字的学习以及使用，咱们会在后面的课程中依依进行学习

- 方式2：

`import keyword`
`print(keyword.kwlist)`


```python
import keyword
print(keyword.kwlist)
```

    ['False', 'None', 'True', 'and', 'as', 'assert', 'async', 'await', 'break', 'class', 'continue', 'def', 'del', 'elif', 'else', 'except', 'finally', 'for', 'from', 'global', 'if', 'import', 'in', 'is', 'lambda', 'nonlocal', 'not', 'or', 'pass', 'raise', 'return', 'try', 'while', 'with', 'yield']


#### 变量的使用

下面通过几个例子来说明变量的类型和变量使用。

```Python
"""
使用变量保存数据并进行算术运算
"""

a = 321
b = 123
print(a + b)
print(a - b)
print(a * b)
print(a / b)
print(a // b)
print(a % b)
print(a ** b)
```

```Python
"""
使用input()函数获取键盘输入
使用int()进行类型转换
用占位符格式化输出的字符串
"""

a = int(input('a = '))
b = int(input('b = '))
print('%d + %d = %d' % (a, b, a + b))
print('%d - %d = %d' % (a, b, a - b))
print('%d * %d = %d' % (a, b, a * b))
print('%d / %d = %f' % (a, b, a / b))
print('%d // %d = %d' % (a, b, a // b))
print('%d %% %d = %d' % (a, b, a % b))
print('%d ** %d = %d' % (a, b, a ** b))
```

```Python
"""
使用type()检查变量的类型
"""

a = 100
b = 12.345
c = 1 + 5j
d = 'hello, world'
e = True
print(type(a))
print(type(b))
print(type(c))
print(type(d))
print(type(e))
```

在对变量类型进行转换时可以使用Python的内置函数（准确的说下面列出的并不是真正意义上的函数，而是后面我们要讲到的创建对象的构造方法）。

- `int()`：将一个数值或字符串转换成整数，可以指定进制。
- `float()`：将一个字符串转换成浮点数。
- `str()`：将指定的对象转换成字符串形式，可以指定编码。
- `chr()`：将整数转换成该编码对应的字符串（一个字符）。
- `ord()`：将字符串（一个字符）转换成对应的编码（整数）。


**程序就是用来处理数据的，而变量就是用来存储数据的**

### 运算符


#### 算术运算符

下面以a=10 ,b=20为例进行计算

运算符 	描述 	  实例

\+ 	加 	两个对象相加 a + b 输出结果 30

\- 	减 	得到负数或是一个数减去另一个数 a - b 输出结果 -10

\* 	乘 	两个数相乘或是返回一个被重复若干次的字符串 a * b 输出结果 200

/ 	除 	x除以y b / a 输出结果 2

// 	取整除 	返回商的整数部分 9//2 输出结果 4 , 9.0//2.0 输出结果 4.0

% 	取余 	返回除法的余数 b % a 输出结果 0

** 	幂 	返回x的y次幂 a**b 为10的20次方， 输出结果 100000000000000000000

例如：

9/2.0---》4.5

9//2.0--->4.0

#### 赋值运算符

运算符   描述   实例

=  赋值运算符  把=号右边的结果给左边的变量 num=1+2*3 结果num的值为7 

赋值运算表达式

格式：变量 = 表达式

功能：计算了等号右侧“表达式”的值，并赋值给等号左侧的变量

值：赋值结束后变量的

num3 = 10

num4 = num3 + 20

#### 复合运算符

+= 加法赋值运算符 c += a 等效于 c = c + a 

-= 减法赋值运算符 c -= a 等效于 c = c - a 

*= 乘法赋值运算符 c *= a 等效于 c = c * a 

/= 除法赋值运算符 c /= a 等效于 c = c / a 

%= 取模赋值运算符 c %= a 等效于 c = c % a 

**= 幂赋值运算符 c **= a 等效于 c = c ** a 

//= 取整除赋值运算符 c //= a 等效于 c = c // a 

#### 比较运算符

运算符   描述     示例

==   检查两个操作数的值是否相等，如果是则条件变为真。 如a=3,b=3则（a == b) 为 true. 

!=   检查两个操作数的值是否相等，如果值不相等，则条件变为真。 如a=1,b=3则(a != b) 为 true. 

\>    检查左操作数的值是否大于右操作数的值，如果是，则条件成立。 如a=7,b=3则(a > b) 为 true. 

<    检查左操作数的值是否小于右操作数的值，如果是，则条件成立。 如a=7,b=3则(a < b) 为 false. 

\>=   检查左操作数的值是否大于或等于右操作数的值，如果是，则条件成立。 如a=3,b=3则(a >= b) 为 true. 

<=   检查左操作数的值是否小于或等于右操作数的值，如果是，则条件成立。 如a=3,b=3则(a <= b) 为 true. 

#### 逻辑运算符

运算符   逻辑表达式    描述     实例

- 1.`and`    x and y 布尔"与" - 如果 x 为 False，x and y 返回 False，否则它返回 y 的计算值。 。

    例如：
    
    a = 1
    
    b = 3
    
    c = a>b
    
    print(c and b)----》False
    
- 2.`or`    x or y 布尔"或" - 如果 x 是 True，它返回 True，否则它返回 y 的计算值。

- 3.`not`   not x 布尔"非" - 如果 x 为 True，返回 False 。如果 x 为 False，它返回 True。 not(a and b) 返回 False 



在Python中 None，False，空字符串""，0，空列表[]，空字典{}，空元组()都相当于False，在布尔上下文中为假；其它任何东西都为真

and：从左到右计算表达式，若所有值均为真，则返回最后一个值，若存在假，返回第一个假值。

or：是从左到右计算表达式，返回第一个为真的值，如果两个都是假，返回的是右边的值。


```python
print(3 and 4)
print(2 and 0)
print(0 and 2)
print(0 or 1)
print(4 or 1)
print([] or ())
```

    4
    0
    0
    1
    4
    ()


#### 位运算符

概述：

 按位运算符是把数字看作二进制来进行计算的。

 Python中的按位运算法则如下：

 下表中变量 a 为 60，b 为 13，二进制格式如下：

 60二进制--》0011 1100

 13二进制--》0000 1101

 运算符	   描述	           实例

&	按位与运算符：参与运算的两个值,如果两个相应位都为1,则该位的结果为1,否则为0	(a & b) 输出结果 12 ，二进制解释： 0000 1100

|	按位或运算符：只要对应的二个二进位有一个为1时，结果位就为1。	(a | b) 输出结果 61 ，二进制解释： 0011 1101

^	按位异或运算符：当两对应的二进位相异时，结果为1 	(a ^ b) 输出结果 49 ，二进制解释： 0011 0001

~	按位取反运算符：对数据的每个二进制位取反,即把1变为0,把0变为1 。~x 类似于 -x-1	(~a ) 输出结果 -61 ，二进制解释： 1100 0011，在一个有符号二进制数的补码形式。

<<	左移动运算符：运算数的各二进位全部左移若干位，由 << 右边的数字指定了移动的位数，高位丢弃，低位补0。	a << 2 输出结果 240 ，二进制解释： 1111 0000

\>>	右移动运算符：把">>"左边的运算数的各二进位全部右移若干位，>> 右边的数字指定了移动的位数 	a >> 2 输出结果 15 ，二进制解释： 0000 1111

#### 综合练习
Python支持多种运算符，下表大致按照优先级从高到低的顺序列出了所有的运算符，我们会陆续使用到它们。

| 运算符                                                       | 描述                           |
| ------------------------------------------------------------ | ------------------------------ |
| `[]` `[:]`                                                   | 下标，切片                     |
| `**`                                                         | 指数                           |
| `~` `+` `-`                                                  | 按位取反, 正负号               |
| `*` `/` `%` `//`                                             | 乘，除，模，整除               |
| `+` `-`                                                      | 加，减                         |
| `>>` `<<`                                                    | 右移，左移                     |
| `&`                                                          | 按位与                         |
| `^` `\|`                                                      | 按位异或，按位或               |
| `<=` `<` `>` `>=`                                            | 小于等于，小于，大于，大于等于 |
| `==` `!=`                                                    | 等于，不等于                   |
| `is`  `is not`                                               | 身份运算符                     |
| `in` `not in`                                                | 成员运算符                     |
| `not` `or` `and`                                             | 逻辑运算符                     |
| `=` `+=` `-=` `*=` `/=` `%=` `//=` `**=` `&=` `|=` `^=` `>>=` `<<=` | （复合）赋值运算符             |

>**说明：** 在实际开发中，如果搞不清楚运算符的优先级，可以使用括号来确保运算的执行顺序。

下面的例子演示了运算符的使用。

```Python
"""
运算符的使用
"""

a = 5
b = 10
c = 3
d = 4
e = 5
a += b
a -= c
a *= d
a /= e
print("a = ", a)

flag1 = 3 > 2
flag2 = 2 < 1
flag3 = flag1 and flag2
flag4 = flag1 or flag2
flag5 = not flag1
print("flag1 = ", flag1)
print("flag2 = ", flag2)
print("flag3 = ", flag3)
print("flag4 = ", flag4)
print("flag5 = ", flag5)
print(flag1 is True)
print(flag2 is not False)
```

### 练习

#### 练习1：华氏温度转摄氏温度。

```Python
"""
将华氏温度转换为摄氏温度
F = 1.8C + 32
"""

f = float(input('请输入华氏温度: '))
c = (f - 32) / 1.8
print('%.1f华氏度 = %.1f摄氏度' % (f, c))
```

#### 练习2：输入圆的半径计算计算周长和面积。

```Python
"""
输入半径计算圆的周长和面积
"""

import math

radius = float(input('请输入圆的半径: '))
perimeter = 2 * math.pi * radius
area = math.pi * radius * radius
print('周长: %.2f' % perimeter)
print('面积: %.2f' % area)
```

#### 练习3：输入年份判断是不是闰年。

```Python
"""
输入年份 如果是闰年输出True 否则输出False
"""

year = int(input('请输入年份: '))
# 如果代码太长写成一行不便于阅读 可以使用\或()折行
is_leap = (year % 4 == 0 and year % 100 != 0 or
           year % 400 == 0)
print(is_leap)
```


## 分支结构


### 应用场景

迄今为止，我们写的Python代码都是一条一条语句顺序执行，这种代码结构通常称之为顺序结构。然而仅有顺序结构并不能解决所有的问题，比如我们设计一个游戏，游戏第一关的通关条件是玩家获得1000分，那么在完成本局游戏后，我们要根据玩家得到分数来决定究竟是进入第二关，还是告诉玩家“Game Over”，这里就会产生两个分支，而且这两个分支只有一个会被执行。类似的场景还有很多，我们将这种结构称之为“分支结构”或“选择结构”。给大家一分钟的时间，你应该可以想到至少5个以上这样的例子，赶紧试一试。


- 生活中的场景：

   - 例如火车站、地铁等需要安检，如果没有携带违禁物品则放行，反之。。。
   
- 开发中的场景：

   - 密码的判断---用户登录某个应用时
   

 总结：
    
    如果某些条件满足，才能做某件事情，而不满足时不允许做，这就是所谓的判断
    
    不仅生活中有，在软件开发中“判断”功能也经常会用到

### if语句的格式

if语句是用来进行判断的，其使用格式如下：

- if 基本格式

    if 要判断的条件:
        条件成立时，要做的事情
        
    
- if ...  else  当条件不成立时

   if 条件:
   
        满足条件时要做的事情1
   
    else:
   
        不满足条件时要做的事情1
   
- if ... elif   当有多个条件时

  elif的使用格式如下:
  
    if xxx1:
  
        事情1
  
    elif xxx2:
  
        事情2
  
    elif xxx3:
  
        事情3


- if  ...  elif  ...else   当有多个条件并有可能不成立时

   if 性别为男性:
   
       输出男性的特征
   
   elif 性别为女性:
   
       输出女性的特征
   
   else:
   
       第三种性别的特征


- if 语句的嵌套
  
    在一个if语句中可以嵌入多个if相关的语句·

### if语句的使用

在Python中，要构造分支结构可以使用`if`、`elif`和`else`关键字。所谓**关键字**就是有特殊含义的单词，像`if`和`else`就是专门用于构造分支结构的关键字，很显然你不能够使用它作为变量名（事实上，用作其他的标识符也是不可以）。下面的例子中演示了如何构造一个分支结构。

```Python
"""
用户身份验证
"""

username = input('请输入用户名: ')
password = input('请输入口令: ')
# 如果希望输入口令时 终端中没有回显 可以使用getpass模块的getpass函数
# import getpass
# password = getpass.getpass('请输入口令: ')
if username == 'admin' and password == '123456':
    print('身份验证成功!')
else:
    print('身份验证失败!')
```

唯一需要说明的是和C/C++、Java等语言不同，Python中没有用花括号来构造代码块而是使用了缩进的方式来设置代码的层次结构，如果`if`条件成立的情况下需要执行多条语句，只要保持多条语句具有相同的缩进就可以了，换句话说连续的代码如果又保持了相同的缩进那么它们属于同一个代码块，相当于是一个执行的整体。

当然如果要构造出更多的分支，可以使用`if…elif…else…`结构，例如下面的分段函数求值。

$$f(x)=\begin{cases} 3x-5&\text{(x>1)}\\x+2&\text{(-1}\leq\text{x}\leq\text{1)}\\5x+3&\text {(x<-1)}\end{cases}$$
```Python
"""
分段函数求值

        3x - 5  (x > 1)
f(x) =  x + 2   (-1 <= x <= 1)
        5x + 3  (x < -1)
"""

x = float(input('x = '))
if x > 1:
    y = 3 * x - 5
elif x >= -1:
    y = x + 2
else:
    y = 5 * x + 3
print('f(%.2f) = %.2f' % (x, y))
```

当然根据实际开发的需要，分支结构是可以嵌套的，例如判断是否通关以后还要根据你获得的宝物或者道具的数量对你的表现给出等级（比如点亮两颗或三颗星星），那么我们就需要在`if`的内部构造出一个新的分支结构，同理`elif`和`else`中也可以再构造新的分支，我们称之为嵌套的分支结构，也就是说上面的代码也可以写成下面的样子。

```Python
"""
分段函数求值
		3x - 5	(x > 1)
f(x) =	x + 2	(-1 <= x <= 1)
		5x + 3	(x < -1)
"""

x = float(input('x = '))
if x > 1:
    y = 3 * x - 5
else:
    if x >= -1:
        y = x + 2
    else:
        y = 5 * x + 3
print('f(%.2f) = %.2f' % (x, y))
```

> **说明：** 大家可以自己感受一下这两种写法到底是哪一种更好。在之前我们提到的Python之禅中有这么一句话“Flat is better than nested.”，之所以提倡代码“扁平化”是因为嵌套结构的嵌套层次多了之后会严重的影响代码的可读性，所以能使用扁平化的结构时就不要使用嵌套。

### 一个有趣的赋值--三元操作符
格式：A = Y if X else Z
- 可以看出：
    - 如果X为真，那么就执行A=Y
    - 如果X为假，就执行A=Z


```python
name = "huike" if "you are in huike" else "kaikeba"
name
```




    'huike'





### 练习

#### 练习1：英制单位与公制单位互换

```Python
"""
英制单位英寸和公制单位厘米互换
"""

value = float(input('请输入长度: '))
unit = input('请输入单位: ')
if unit == 'in' or unit == '英寸':
    print('%f英寸 = %f厘米' % (value, value * 2.54))
elif unit == 'cm' or unit == '厘米':
    print('%f厘米 = %f英寸' % (value, value / 2.54))
else:
    print('请输入有效的单位')
```

#### 练习2：掷骰子决定做什么

```Python
"""
掷骰子决定做什么事情
"""

from random import randint

face = randint(1, 6)
if face == 1:
    result = '唱首歌'
elif face == 2:
    result = '跳个舞'
elif face == 3:
    result = '学狗叫'
elif face == 4:
    result = '做俯卧撑'
elif face == 5:
    result = '念绕口令'
else:
    result = '讲冷笑话'
print(result)
```
> **说明：** 上面的代码中使用了random模块的randint函数生成指定范围的随机数来模拟掷骰子。

#### 练习3：百分制成绩转等级制

```Python
"""
百分制成绩转等级制成绩
90分以上    --> A
80分~89分    --> B
70分~79分	   --> C
60分~69分    --> D
60分以下    --> E
"""

score = float(input('请输入成绩: '))
if score >= 90:
    grade = 'A'
elif score >= 80:
    grade = 'B'
elif score >= 70:
    grade = 'C'
elif score >= 60:
    grade = 'D'
else:
    grade = 'E'
print('对应的等级是:', grade)
```
#### 练习4：输入三条边长如果能构成三角形就计算周长和面积

```Python
"""
判断输入的边长能否构成三角形
如果能则计算出三角形的周长和面积
"""

import math

a = float(input('a = '))
b = float(input('b = '))
c = float(input('c = '))
if a + b > c and a + c > b and b + c > a:
    print('周长: %f' % (a + b + c))
    p = (a + b + c) / 2
    area = math.sqrt(p * (p - a) * (p - b) * (p - c))
    print('面积: %f' % (area))
else:
    print('不能构成三角形')
```
> **说明：** 上面的代码中使用了`math`模块的`sqrt`函数来计算平方根。用边长计算三角形面积的公式叫做[海伦公式](https://zh.wikipedia.org/zh-hans/海伦公式)。

#### 练习5：个人所得税计算器。

```Python
"""
输入月收入和五险一金计算个人所得税
"""

salary = float(input('本月收入: '))
insurance = float(input('五险一金: '))
diff = salary - insurance - 3500
if diff <= 0:
    rate = 0
    deduction = 0
elif diff < 1500:
    rate = 0.03
    deduction = 0
elif diff < 4500:
    rate = 0.1
    deduction = 105
elif diff < 9000:
    rate = 0.2
    deduction = 555
elif diff < 35000:
    rate = 0.25
    deduction = 1005
elif diff < 55000:
    rate = 0.3
    deduction = 2755
elif diff < 80000:
    rate = 0.35
    deduction = 5505
else:
    rate = 0.45
    deduction = 13505
tax = abs(diff * rate - deduction)
print('个人所得税: ￥%.2f元' % tax)
print('实际到手收入: ￥%.2f元' % (diff + 3500 - tax))
```
>**说明：** 上面的代码中使用了Python内置的`abs()`函数取绝对值来处理`-0`的问题。


#### 练习6：猜拳游戏


```python
import random

player = input('请输入：剪刀(0)  石头(1)  布(2):')

player = int(player)

# 产生随机整数：0、1、2 中的某一个
computer = random.randint(0, 2)

# 用来进行测试
# print('player=%d,computer=%d',(player,computer))

if ((player == 0) and (computer == 2)) or ((player == 1) and (computer == 0)) or ((player == 2) and (computer == 1)):
    print('获胜，哈哈，你太厉害了')
elif player == computer:
    print('平局，要不再来一局')
else:
    print('输了，不要走，洗洗手接着来，决战到天亮')
```

## 循环结构

### 应用场景

如果在程序中我们需要重复的执行某条或某些指令，例如用程序控制机器人踢足球，如果机器人持球而且还没有进入射门范围，那么我们就要一直发出让机器人向球门方向奔跑的指令。当然你可能已经注意到了，刚才的描述中其实不仅仅有需要重复的动作，还有我们上一个章节讲到的分支结构。再举一个简单的例子，比如在我们的程序中要实现每隔1秒中在屏幕上打印一个&quot;hello, world&quot;这样的字符串并持续一个小时，我们肯定不能够将`print('hello, world')`这句代码写上3600遍，如果真的需要这样做，那么编程的工作就太无聊了。因此，我们还需要了解一下循环结构，有了循环结构我们就可以轻松的控制某件事或者某些事重复、重复、再重复的去执行。

在Python中构造循环结构有两种做法，一种是`for-in`循环，一种是`while`循环。




### for-in循环

如果明确的知道循环执行的次数或者要对一个容器进行迭代（后面会讲到），那么我们推荐使用`for-in`循环，

例如下面代码中计算1~100求和的结果（$\displaystyle \sum \limits_{n=1}^{100}n$）。 

```Python
"""
用for循环实现1~100求和
"""

sum = 0
for x in range(101):
    sum += x
print(sum)
```

需要说明的是上面代码中的`range`类型，`range`可以用来产生一个不变的数值序列，而且这个序列通常都是用在循环中的，例如：

- `range(101)`可以产生一个0到100的整数序列。
- `range(1, 100)`可以产生一个1到99的整数序列。
- `range(1, 100, 2)`可以产生一个1到99的奇数序列，其中的2是步长，即数值序列的增量。

知道了这一点，我们可以用下面的代码来实现1~100之间的偶数求和。

```Python
"""
用for循环实现1~100之间的偶数求和
"""

sum = 0
for x in range(2, 101, 2):
    sum += x
print(sum)
```

也可以通过在循环中使用分支结构的方式来实现相同的功能，代码如下所示。

```Python
"""
用for循环实现1~100之间的偶数求和
"""

sum = 0
for x in range(1, 101):
    if x % 2 == 0:
        sum += x
print(sum)
```


#### break

 break的作用：用来结束整个循环


```python
name = 'kaikeba.com'
for x in name:
    if x == 'b':
        break
    print(x)
```

#### continue

用来结束本次循环，紧接着执行下一次的循环


```python
name = 'kaikeba.com'
for x in name:
    if x == 'b':
        continue
    print(x)
```

###### 注意事项

> break/continue只能用在循环中，除此以外不能单独使用

> break/continue在嵌套循环中，只对最近的一层循环起作用

> 防止死循环的产生

### while循环

如果要构造不知道具体循环次数的循环结构，我们推荐使用`while`循环。`while`循环通过一个能够产生或转换出`bool`值的表达式来控制循环，表达式的值为`True`循环继续，表达式的值为`False`循环结束。下面我们通过一个“猜数字”的小游戏（计算机出一个1~100之间的随机数，人输入自己猜的数字，计算机给出对应的提示信息，直到人猜出计算机出的数字）来看看如何使用`while`循环。

```Python
"""
猜数字游戏
计算机出一个1~100之间的随机数由人来猜
计算机根据人猜的数字分别给出提示大一点/小一点/猜对了
"""

import random

answer = random.randint(1, 100)
counter = 0
while True:
    counter += 1
    number = int(input('请输入: '))
    if number < answer:
        print('大一点')
    elif number > answer:
        print('小一点')
    else:
        print('恭喜你猜对了!')
        break
print('你总共猜了%d次' % counter)
if counter > 7:
    print('你的智商余额明显不足')
```

> **说明：** 上面的代码中使用了`break`关键字来提前终止循环，需要注意的是`break`只能终止它所在的那个循环，这一点在使用嵌套的循环结构（下面会讲到）需要引起注意。除了`break`之外，还有另一个关键字是`continue`，它可以用来放弃本次循环后续的代码直接让循环进入下一轮。

和分支结构一样，循环结构也是可以嵌套的，也就是说在循环中还可以构造循环结构。下面的例子演示了如何通过嵌套的循环来输出一个九九乘法表。

```Python
"""
输出乘法口诀表(九九表)
"""

for i in range(1, 10):
    for j in range(1, i + 1):
        print('%d*%d=%d' % (i, j, i * j), end='\t')
    print()
```



### 练习

#### 练习1：输入一个数判断是不是素数。

```Python
"""
输入一个正整数判断它是不是素数
"""
from math import sqrt

num = int(input('请输入一个正整数: '))
end = int(sqrt(num))
is_prime = True
for x in range(2, end + 1):
    if num % x == 0:
        is_prime = False
        break
if is_prime and num != 1:
    print('%d是素数' % num)
else:
    print('%d不是素数' % num)
```

#### 练习2：输入两个正整数，计算最大公约数和最小公倍数。

```Python
"""
输入两个正整数计算最大公约数和最小公倍数
"""

x = int(input('x = '))
y = int(input('y = '))
if x > y:
    x, y = y, x
for factor in range(x, 0, -1):
    if x % factor == 0 and y % factor == 0:
        print('%d和%d的最大公约数是%d' % (x, y, factor))
        print('%d和%d的最小公倍数是%d' % (x, y, x * y // factor))
        break
```

#### 练习3：打印三角形图案。

```Python
"""
打印各种三角形图案

*
**
***
****
*****

    *
   **
  ***
 ****
*****

    *
   ***
  *****
 *******
*********
"""

row = int(input('请输入行数: '))
for i in range(row):
    for _ in range(i + 1):
        print('*', end='')
    print()


for i in range(row):
    for j in range(row):
        if j < row - i - 1:
            print(' ', end='')
        else:
            print('*', end='')
    print()

for i in range(row):
    for _ in range(row - i - 1):
        print(' ', end='')
    for _ in range(2 * i + 1):
        print('*', end='')
    print()
```


## 构造程序逻辑

分支和循环结构会帮助我们将程序中逻辑建立起来，将来我们的程序无论简单复杂，都是由顺序结构、分支结构、循环结构构成的。对于编程语言的初学者来说，首先要锻炼的是将人类自然语言描述的解决问题的步骤和方法翻译成代码的能力，其次就是熟练的运用之前学过的运算符、表达式以及最近的两个章节讲解的分支结构和循环结构的知识。有了这些基本的能力才能够通过计算机程序去解决各种各样的现实问题。所以，开始做练习吧！

### 练习清单

1. 寻找[“水仙花数”](https://baike.baidu.com/item/%E6%B0%B4%E4%BB%99%E8%8A%B1%E6%95%B0)。
2. 寻找[“完美数”](https://baike.baidu.com/item/%E5%AE%8C%E5%85%A8%E6%95%B0/370913)。
3. [“百钱百鸡”](https://baike.baidu.com/item/%E7%99%BE%E9%B8%A1%E7%99%BE%E9%92%B1/5857320)问题。
4. 生成[“斐波拉切数列”](https://baike.baidu.com/item/%E6%96%90%E6%B3%A2%E9%82%A3%E5%A5%91%E6%95%B0%E5%88%97/99145)。
5. Craps赌博游戏。


```python
"""
找出100~999之间的所有水仙花数
水仙花数是各位立方和等于这个数本身的数
如: 153 = 1**3 + 5**3 + 3**3
"""

for num in range(100, 1000):
    low = num % 10
    mid = num // 10 % 10
    high = num // 100
    if num == low ** 3 + mid ** 3 + high ** 3:
        print(num)

```


```python
"""
找出1~9999之间的所有完美数
完美数是除自身外其他所有因子的和正好等于这个数本身的数
例如: 6 = 1 + 2 + 3, 28 = 1 + 2 + 4 + 7 + 14
"""
import math

for num in range(1, 10000):
    result = 0
    for factor in range(1, int(math.sqrt(num)) + 1):
        if num % factor == 0:
            result += factor
            if factor > 1 and num // factor != factor:
                result += num // factor
    if result == num:
        print(num)

```


```python
"""
求解《百钱百鸡》问题
1只公鸡5元 1只母鸡3元 3只小鸡1元 用100元买100只鸡
问公鸡 母鸡 小鸡各有多少只
"""

for x in range(0, 20):
    for y in range(0, 33):
        z = 100 - x - y
        if 5 * x + 3 * y + z / 3 == 100:
            print('公鸡: %d只, 母鸡: %d只, 小鸡: %d只' % (x, y, z))

```


```python
"""
输出斐波那契数列的前20个数
1 1 2 3 5 8 13 21 ...
"""

a = 0
b = 1
for _ in range(20):
    a, b = b, a + b
    print(a, end=' ')

```


```python
"""
Craps赌博游戏
玩家摇两颗色子 如果第一次摇出7点或11点 玩家胜
如果摇出2点 3点 12点 庄家胜 其他情况游戏继续
玩家再次要色子 如果摇出7点 庄家胜
如果摇出第一次摇的点数 玩家胜
否则游戏继续 玩家继续摇色子
玩家进入游戏时有1000元的赌注 全部输光游戏结束
"""
from random import randint

money = 1000
while money > 0:
    print('你的总资产为:', money)
    needs_go_on = False
    while True:
        debt = int(input('请下注: '))
        if 0 < debt <= money:
            break
    first = randint(1, 6) + randint(1, 6)
    print('玩家摇出了%d点' % first)
    if first == 7 or first == 11:
        print('玩家胜!')
        money += debt
    elif first == 2 or first == 3 or first == 12:
        print('庄家胜!')
        money -= debt
    else:
        needs_go_on = True

    while needs_go_on:
        current = randint(1, 6) + randint(1, 6)
        print('玩家摇出了%d点' % current)
        if current == 7:
            print('庄家胜')
            money -= debt
            needs_go_on = False
        elif current == first:
            print('玩家胜')
            money += debt
            needs_go_on = False

print('你破产了, 游戏结束!')

```

## 函数和模块的使用

在讲解本章节的内容之前，我们先来研究一道数学题，请说出下面的方程有多少组正整数解。

$$x_1 + x_2 + x_3 + x_4 = 8$$
事实上，上面的问题等同于将8个苹果分成四组每组至少一个苹果有多少种方案。想到这一点问题的答案就呼之欲出了。

$$C_M^N =\frac{M!}{N!(M-N)!}, \text{(M=7, N=3)} $$

可以用Python的程序来计算出这个值，代码如下所示。

```Python
"""
输入M和N计算C(M,N)
"""

m = int(input('m = '))
n = int(input('n = '))
fm = 1
for num in range(1, m + 1):
    fm *= num
fn = 1
for num in range(1, n + 1):
    fn *= num
fmn = 1
for num in range(1, m - n + 1):
    fmn *= num
print(fm // fn // fmn)
```

### 函数的作用

不知道大家是否注意到，在上面的代码中，我们做了3次求阶乘，这样的代码实际上就是重复代码。编程大师*Martin Fowler*先生曾经说过：“**代码有很多种坏味道，重复是最坏的一种！**”，要写出高质量的代码首先要解决的就是重复代码的问题。对于上面的代码来说，我们可以将计算阶乘的功能封装到一个称之为“函数”的功能模块中，在需要计算阶乘的地方，我们只需要“调用”这个“函数”就可以了。



### 定义函数

在Python中可以使用`def`关键字来定义函数，和变量一样每个函数也有一个响亮的名字，而且命名规则跟变量的命名规则是一致的。在函数名后面的圆括号中可以放置传递给函数的参数，这一点和数学上的函数非常相似，程序中函数的参数就相当于是数学上说的函数的自变量，而函数执行完成后我们可以通过`return`关键字来返回一个值，这相当于数学上说的函数的因变量。

在了解了如何定义函数后，我们可以对上面的代码进行重构，所谓重构就是在不影响代码执行结果的前提下对代码的结构进行调整，重构之后的代码如下所示。

```Python
def factorial(num):
    """
    求阶乘
    
    :param num: 非负整数
    :return: num的阶乘
    """
    result = 1
    for n in range(1, num + 1):
        result *= n
    return result


m = int(input('m = '))
n = int(input('n = '))
# 当需要计算阶乘的时候不用再写循环求阶乘而是直接调用已经定义好的函数
print(factorial(m) // factorial(n) // factorial(m - n))
```

> **说明：** Python的math模块中其实已经有一个factorial函数了，事实上要计算阶乘可以直接使用这个现成的函数而不用自己定义。下面例子中的某些函数其实Python中也是内置了，我们这里是为了讲解函数的定义和使用才把它们又实现了一遍，实际开发中不建议做这种低级的重复性的工作。




### 函数的参数

函数是绝大多数编程语言中都支持的一个代码的“构建块”，但是Python中的函数与其他语言中的函数还是有很多不太相同的地方，其中一个显著的区别就是Python对函数参数的处理。在Python中，函数的参数可以有默认值，也支持使用可变参数，所以Python并不需要像其他语言一样支持[函数的重载](https://zh.wikipedia.org/wiki/%E5%87%BD%E6%95%B0%E9%87%8D%E8%BD%BD)，因为我们在定义一个函数的时候可以让它有多种不同的使用方式，下面是两个小例子。

```Python
from random import randint


def roll_dice(n=2):
    """
    摇色子
    
    :param n: 色子的个数
    :return: n颗色子点数之和
    """
    total = 0
    for _ in range(n):
        total += randint(1, 6)
    return total


def add(a=0, b=0, c=0):
    return a + b + c


# 如果没有指定参数那么使用默认值摇两颗色子
print(roll_dice())
# 摇三颗色子
print(roll_dice(3))
print(add())
print(add(1))
print(add(1, 2))
print(add(1, 2, 3))
# 传递参数时可以不按照设定的顺序进行传递
print(add(c=50, a=100, b=200))
```

我们给上面两个函数的参数都设定了默认值，这也就意味着如果在调用函数的时候如果没有传入对应参数的值时将使用该参数的默认值，所以在上面的代码中我们可以用各种不同的方式去调用`add`函数，这跟其他很多语言中函数重载的效果是一致的。

其实上面的`add`函数还有更好的实现方案，因为我们可能会对0个或多个参数进行加法运算，而具体有多少个参数是由调用者来决定，我们作为函数的设计者对这一点是一无所知的，因此在不确定参数个数的时候，我们可以使用可变参数，代码如下所示。

```Python
# 在参数名前面的*表示args是一个可变参数
# 即在调用add函数时可以传入0个或多个参数
def add(*args):
    total = 0
    for val in args:
        total += val
    return total


print(add())
print(add(1))
print(add(1, 2))
print(add(1, 2, 3))
print(add(1, 3, 5, 7, 9))
```




### 用模块管理函数

对于任何一种编程语言来说，给变量、函数这样的标识符起名字都是一个让人头疼的问题，因为我们会遇到命名冲突这种尴尬的情况。最简单的场景就是在同一个.py文件中定义了两个同名函数，由于Python没有函数重载的概念，那么后面的定义会覆盖之前的定义，也就意味着两个函数同名函数实际上只有一个是存在的。

```Python
def foo():
    print('hello, world!')


def foo():
    print('goodbye, world!')


# 下面的代码会输出什么呢？
foo()
```

当然上面的这种情况我们很容易就能避免，但是如果项目是由多人协作进行团队开发的时候，团队中可能有多个程序员都定义了名为`foo`的函数，那么怎么解决这种命名冲突呢？答案其实很简单，Python中每个文件就代表了一个模块（module），我们在不同的模块中可以有同名的函数，在使用函数的时候我们通过`import`关键字导入指定的模块就可以区分到底要使用的是哪个模块中的`foo`函数，代码如下所示。

module1.py

```Python
def foo():
    print('hello, world!')
```

module2.py

```Python
def foo():
    print('goodbye, world!')
```

test.py

```Python
from module1 import foo

# 输出hello, world!
foo()

from module2 import foo

# 输出goodbye, world!
foo()
```

也可以按照如下所示的方式来区分到底要使用哪一个`foo`函数。

test.py

```Python
import module1 as m1
import module2 as m2

m1.foo()
m2.foo()
```

但是如果将代码写成了下面的样子，那么程序中调用的是最后导入的那个`foo`，因为后导入的foo覆盖了之前导入的`foo`。

test.py

```Python
from module1 import foo
from module2 import foo

# 输出goodbye, world!
foo()
```

test.py

```Python
from module2 import foo
from module1 import foo

# 输出hello, world!
foo()
```

需要说明的是，如果我们导入的模块除了定义函数之外还中有可以执行代码，那么Python解释器在导入这个模块时就会执行这些代码，事实上我们可能并不希望如此，因此如果我们在模块中编写了执行代码，最好是将这些执行代码放入如下所示的条件中，这样的话除非直接运行该模块，if条件下的这些代码是不会执行的，因为只有直接执行的模块的名字才是“\_\_main\_\_”。

module3.py

```Python
def foo():
    pass


def bar():
    pass


# __name__是Python中一个隐含的变量它代表了模块的名字
# 只有被Python解释器直接执行的模块的名字才是__main__
if __name__ == '__main__':
    print('call foo()')
    foo()
    print('call bar()')
    bar()
```

test.py

```Python
import module3

# 导入module3时 不会执行模块中if条件成立时的代码 因为模块的名字是module3而不是__main__
```



### 练习

#### 练习1：实现计算求最大公约数和最小公倍数的函数。

```Python
def gcd(x, y):
    (x, y) = (y, x) if x > y else (x, y)
    for factor in range(x, 0, -1):
        if x % factor == 0 and y % factor == 0:
            return factor


def lcm(x, y):
    return x * y // gcd(x, y)
```

#### 练习2：实现判断一个数是不是回文数的函数。

```Python
def is_palindrome(num):
    temp = num
    total = 0
    while temp > 0:
        total = total * 10 + temp % 10
        temp //= 10
    return total == num
```

#### 练习3：实现判断一个数是不是素数的函数。

```Python
def is_prime(num):
    for factor in range(2, num):
        if num % factor == 0:
            return False
    return True if num != 1 else False
```

#### 练习4：写一个程序判断输入的正整数是不是回文素数。

```Python
if __name__ == '__main__':
    num = int(input('请输入正整数: '))
    if is_palindrome(num) and is_prime(num):
        print('%d是回文素数' % num)
```

通过上面的程序可以看出，当我们将代码中重复出现的和相对独立的功能抽取成函数后，我们可以组合使用这些函数来解决更为复杂的问题，这也是我们为什么要定义和使用函数的一个非常重要的原因。

最后，我们来讨论一下Python中有关变量作用域的问题。

```Python
def foo():
    b = 'hello'

    def bar():  # Python中可以在函数内部再定义函数
        c = True
        print(a)
        print(b)
        print(c)

    bar()
    # print(c)  # NameError: name 'c' is not defined


if __name__ == '__main__':
    a = 100
    # print(b)  # NameError: name 'b' is not defined
    foo()
```

上面的代码能够顺利的执行并且打印出100和“hello”，但我们注意到了，在`bar`函数的内部并没有定义`a`和`b`两个变量，那么`a`和`b`是从哪里来的。我们在上面代码的`if`分支中定义了一个变量`a`，这是一个全局变量（global variable），属于全局作用域，因为它没有定义在任何一个函数中。在上面的`foo`函数中我们定义了变量`b`，这是一个定义在函数中的局部变量（local variable），属于局部作用域，在`foo`函数的外部并不能访问到它；但对于`foo`函数内部的`bar`函数来说，变量`b`属于嵌套作用域，在`bar`函数中我们是可以访问到它的。`bar`函数中的变量`c`属于局部作用域，在`bar`函数之外是无法访问的。事实上，Python查找一个变量时会按照“局部作用域”、“嵌套作用域”、“全局作用域”和“内置作用域”的顺序进行搜索，前三者我们在上面的代码中已经看到了，所谓的“内置作用域”就是Python内置的那些隐含标识符`min`、`len`等都属于内置作用域）。

再看看下面这段代码，我们希望通过函数调用修改全局变量`a`的值，但实际上下面的代码是做不到的。

```Python
def foo():
    a = 200
    print(a)  # 200


if __name__ == '__main__':
    a = 100
    foo()
    print(a)  # 100
```

在调用`foo`函数后，我们发现`a`的值仍然是100，这是因为当我们在函数`foo`中写`a = 200`的时候，是重新定义了一个名字为`a`的局部变量，它跟全局作用域的`a`并不是同一个变量，因为局部作用域中有了自己的变量`a`，因此`foo`函数不再搜索全局作用域中的`a`。如果我们希望在`foo`函数中修改全局作用域中的`a`，代码如下所示。

```Python
def foo():
    global a
    a = 200
    print(a)  # 200


if __name__ == '__main__':
    a = 100
    foo()
    print(a)  # 200
```

我们可以使用`global`关键字来指示`foo`函数中的变量`a`来自于全局作用域，如果全局作用域中没有`a`，那么下面一行的代码就会定义变量`a`并将其置于全局作用域。同理，如果我们希望函数内部的函数能够修改嵌套作用域中的变量，可以使用`nonlocal`关键字来指示变量来自于嵌套作用域，请大家自行试验。

在实际开发中，我们应该尽量减少对全局变量的使用，因为全局变量的作用域和影响过于广泛，可能会发生意料之外的修改和使用，除此之外全局变量比局部变量拥有更长的生命周期，可能导致对象占用的内存长时间无法被[垃圾回收](https://zh.wikipedia.org/wiki/%E5%9E%83%E5%9C%BE%E5%9B%9E%E6%94%B6_(%E8%A8%88%E7%AE%97%E6%A9%9F%E7%A7%91%E5%AD%B8))。事实上，减少对全局变量的使用，也是降低代码之间耦合度的一个重要举措，同时也是对[迪米特法则](https://zh.wikipedia.org/zh-hans/%E5%BE%97%E5%A2%A8%E5%BF%92%E8%80%B3%E5%AE%9A%E5%BE%8B)的践行。减少全局变量的使用就意味着我们应该尽量让变量的作用域在函数的内部，但是如果我们希望将一个局部变量的生命周期延长，使其在函数调用结束后依然可以访问，这时候就需要使用[闭包](https://zh.wikipedia.org/wiki/%E9%97%AD%E5%8C%85_(%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%A7%91%E5%AD%A6))，这个我们在后续的内容中进行讲解。

> **说明：** 很多人经常会将“闭包”一词和[“匿名函数”](https://zh.wikipedia.org/wiki/%E5%8C%BF%E5%90%8D%E5%87%BD%E6%95%B0)混为一谈，但实际上它们是不同的概念，如果想提前了解这个概念，推荐看看[维基百科](https://zh.wikipedia.org/wiki/)或者[知乎](https://www.zhihu.com/)上对这个概念的讨论。

说了那么多，其实结论很简单，从现在开始我们可以将Python代码按照下面的格式进行书写，这一点点的改进其实就是在我们理解了函数和作用域的基础上跨出的巨大的一步。

```Python
def main():
    # Todo: Add your code here
    pass


if __name__ == '__main__':
    main()
```

## 常用数据结构

### 使用字符串str

#### python中字符串的格式
如下定义的变量a，存储的是数字类型的值
> a = 100

如下定义的变量b，存储的是字符串类型的值

    b = "hello kaikeba.com"
    或者
    b = 'hello kaikeba.com'

小总结：

> 双引号或者单引号中的数据，就是字符串

##### Python 三引号
Python 中三引号可以将复杂的字符串进行赋值。

Python 三引号允许一个字符串跨多行，字符串中可以包含换行符、制表符以及其他特殊字符。

三引号的语法是一对连续的单引号或者双引号（通常都是成对的用）。

#### Python 转义字符
在需要在字符中使用特殊字符时，python 用反斜杠 \ 转义字符。如下表：



|转义字符 |	描述 |
| :---------------------------: | :----------------------------------------- |
|\\(在行尾时) |	续行符 |
|\\\ |	反斜杠符号 |
|\\' |	单引号 |
|\\" |	双引号 |
|\a |	响铃 |
|\b |	退格(Backspace) |
|\e |	转义 |
|\000 |	空 |
|\n |	换行 |
|\v |	纵向制表符 |
|\t |	横向制表符 |
|\r |	回车 |
|\f |	换页 |
|\oyy |	八进制数，yy代表的字符，例如：\o12代表换行 |
|\xyy |	十六进制数，yy代表的字符，例如：\x0a代表换行 |
|\other |	其它的字符以普通格式输出 |


```python
#使用\t排版
str1 = '网站\t\t域名\t\t\t年龄\t\t价值'
str2 = 'C语言中文网\tc.biancheng.net\t\t8\t\t500W'
str3 = '百度\t\twww.baidu.com\t\t20\t\t500000W'
print(str1)
print(str2)
print(str3)
print("--------------------")
# \n在输出时换行，\在书写字符串时换行
info = "Python教程：http://c.biancheng.net/python/\n\
C++教程：http://c.biancheng.net/cplus/\n\
Linux教程：http://c.biancheng.net/linux_tutorial/"
print(info)
```

    网站		域名			年龄		价值
    C语言中文网	c.biancheng.net		8		500W
    百度		www.baidu.com		20		500000W
    --------------------
    Python教程：http://c.biancheng.net/python/
    C++教程：http://c.biancheng.net/cplus/
    Linux教程：http://c.biancheng.net/linux_tutorial/



```python
s = 'sj\t'
s[-1]
```




    '\t'




```python
print('甲：吃饭去吗？\n乙: 走，吃饭去！')
```

    甲：吃饭去吗？
    乙: 走，吃饭去！



```python
string = '''甲：吃饭去吗？
乙: 走，吃饭去！'''
print(string)
```

    甲：吃饭去吗？
    乙: 走，吃饭去！



```python
pikachu = '''
　　 へ　　　　　／|
　　/＼7　　　 ∠＿/
　 /　│　　 ／　／
　│　Z ＿,＜　／　　  /`ヽ
　│　　　　　ヽ　　  /　　〉
　 Y　　　　　`　  /　　/
　ｲ●　､　●　⊂⊃  〈　　/
　() へ　　 　|　  ＼〈
　　>ｰ ､_　 ィ　│  ／／
　 / へ　　 /　ﾉ＜| ＼＼
　 ヽ_ﾉ　　(_／　│ ／／
　　7　　　　　　|／
　　＞―r￣￣`ｰ―＿'''
print(pikachu)
```


    　　 へ　　　　　／|
    　　/＼7　　　 ∠＿/
    　 /　│　　 ／　／
    　│　Z ＿,＜　／　　  /`ヽ
    　│　　　　　ヽ　　  /　　〉
    　 Y　　　　　`　  /　　/
    　ｲ●　､　●　⊂⊃  〈　　/
    　() へ　　 　|　  ＼〈
    　　>ｰ ､_　 ィ　│  ／／
    　 / へ　　 /　ﾉ＜| ＼＼
    　 ヽ_ﾉ　　(_／　│ ／／
    　　7　　　　　　|／
    　　＞―r￣￣`ｰ―＿


#### 字符串输出


```python
name = '张三'
position = '工程师'
address = '北京市海淀区'

print('--------------------------------------------------')
print("姓名：%s" % name)
print("职位：%s" % position)
print("公司地址：%s" % address)
print('--------------------------------------------------')
```

    --------------------------------------------------
    姓名：张三
    职位：工程师
    公司地址：北京市海淀区
    --------------------------------------------------


##### 格式化输出
常用的格式符号
下面是完整的，它可以与％符号使用列表:
```
格式符号	转换
%c	字符
%s	字符串
%d	有符号十进制整数
%u	无符号十进制整数
%o	八进制整数
%x	十六进制整数（小写字母0x）
%X	十六进制整数（大写字母0X）
%f	浮点数
%e	科学计数法（小写'e'）
%E	科学计数法（大写“E”）
%g	％f和％e 的简写
%G	％f和％E的简写
```


```python
# Python2.6 开始，新增了一种格式化字符串的函数 str.format()，它增强了字符串格式化的功能。
name = '张三'
position = '工程师'
address = '北京市海淀区'

print('--------------------------------------------------')
print("姓名：{}".format(name))
print("职位：{}".format(position))
print("公司地址：{}".format(address))
print('--------------------------------------------------')
```

##### Python 字符串的格式化，从 %格式到 format再到 f-string，格式化的方式是越来越直观，同时 f-string 的效率似乎也比前两个高。


```python
# f-string 的功能在 Python 3.6 及以后版本适用。
name = '张三'
position = '工程师'
address = '北京市海淀区'

print('--------------------------------------------------')
print(f"姓名：{name}")
print(f"职位：{position}")
print(f"公司地址：{address}")
print('--------------------------------------------------')
```

    --------------------------------------------------
    姓名：张三
    职位：工程师
    公司地址：北京市海淀区
    --------------------------------------------------



```python
message = (f"Hi {name}. "
        f"You are a {position}. "
        f"You were in {address}.")
message
```




    'Hi 张三. You are a 工程师. You were in 北京市海淀区.'



#### 字符串输入

注意：input获取的数据，都以字符串的方式进行保存，即使输入的是数字，那么也是以字符串方式保存


```python
username = input('请输入用户名:')
print("用户名为：%s" % userName)

password = input('请输入密码:')
print("密码为：%s" % password)
```

#### 下标与切片
##### 字符串中"下标"的使用

列表与元组支持下标索引好理解，字符串实际上就是字符的数组，所以也支持下标索引。



```python
name = 'abcdef'

print(name[0])
print(name[1])
print(name[2])
```

##### 切片
切片是指对操作的对象截取其中一部分的操作。字符串、列表、元组都支持切片操作。

切片的语法：[起始:结束:步长]
- 注意：选取的区间从"起始"位开始，到"结束"位的前一位结束（不包含结束位本身)，步长表示选取间隔。
- 注意是左闭右开的区间，即包含左边界，但是不包含右边界
- 其中：步长可以省略，默认为1。步长即每次截取一个元素，到下一次截取元素距离几个元素（默认为1，即紧挨着截取）

- 特别注意:
    - 冒号：的左右两侧都可以不写，其中左侧默认为0，即str第一个数据，右侧默认为数据个数+1，即list的最后一个数据
    - 左边界和右边界也可以超出str的范围，最长只能截取到str的范围内
    - 一般情况下，左边界<=右边界。若左边界>右边界，则要设置步长为负数，否则输出为空（此情况也就是从右向左截取）

我们以字符串为例讲解。

如果取出一部分，则可以在中括号[]中，使用:


     name = 'abcdef'
    
     print(name[0:3]) # 取 下标0~2 的字符

#### 字符串连接
用+号实现连接


```python
a = '你好'
b = 'kaikeba'
a+b
```




    '你好kaikeba'




```python
'你好' + 1
```


    ---------------------------------------------------------------------------
    
    TypeError                                 Traceback (most recent call last)
    
    <ipython-input-52-3d843124bde2> in <module>
    ----> 1 '你好' + 1


    TypeError: can only concatenate str (not "int") to str


#### 字符串常见操作
如有字符串mystr = 'hello world'，以下是常见的操作

<1> find

检测 str 是否包含在 mystr中，如果是返回开始的索引值，否则返回-1

mystr.find(str, start=0, end=len(mystr))

<2>index

跟find()方法一样，只不过如果str不在 mystr中会报一个异常.

mystr.index(str, start=0, end=len(mystr)) 

<3>count

返回 str在start和end之间 在 mystr里面出现的次数

mystr.count(str, start=0, end=len(mystr))


<4>replace

把 mystr 中的 str1 替换成 str2,如果 count 指定，则替换不超过 count 次.

mystr.replace(str1, str2,  mystr.count(str1))


<5>split

以 str 为分隔符切片 mystr，如果 maxsplit有指定值，则仅分隔 maxsplit 个子字符串

mystr.split(str=" ", 2)    


<6>capitalize

把字符串的第一个字符大写

mystr.capitalize()


<7>title

把字符串的每个单词首字母大写
```Python
a = "hello world"
a.title()
'Hello World'
```

<8>startswith

检查字符串是否是以 hello 开头, 是则返回 True，否则返回 False

mystr.startswith('hello')


<9>endswith

检查字符串是否以obj结束，如果是返回True,否则返回 False.

mystr.endswith(obj)


<10>lower

转换 mystr 中所有大写字符为小写

mystr.lower()        


<11>upper

转换 mystr 中的小写字母为大写

mystr.upper()    


<12>ljust

返回一个原字符串左对齐,并使用空格填充至长度 width 的新字符串

mystr.ljust(width) 


<13>rjust

返回一个原字符串右对齐,并使用空格填充至长度 width 的新字符串

mystr.rjust(width)    


<14>center

返回一个原字符串居中,并使用空格填充至长度 width 的新字符串

mystr.center(width)   


<15>lstrip

删除 mystr 左边的空白字符

mystr.lstrip()


<16>rstrip

删除 mystr 字符串末尾的空白字符

mystr.rstrip()    


<17>strip

删除mystr字符串两端的空白字符

<18>rfind

类似于 find()函数，不过是从右边开始查找.

mystr.rfind(str, start=0,end=len(mystr) )


<19>rindex

类似于 index()，不过是从右边开始.

mystr.rindex( str, start=0,end=len(mystr))


<20>partition

把mystr以str分割成三部分,str前，str和str后

mystr.partition(str)


<21>rpartition

类似于 partition()函数,不过是从右边开始.

mystr.rpartition(str)


<22>splitlines

按照行分隔，返回一个包含各行作为元素的列表

mystr.splitlines()  


<23>isalpha

如果 mystr 所有字符都是字母 则返回 True,否则返回 False

mystr.isalpha()  


<24>isdigit

如果 mystr 只包含数字则返回 True 否则返回 False.

mystr.isdigit() 


<25>isalnum

如果 mystr 所有字符都是字母或数字则返回 True,否则返回 False

mystr.isalnum()  


<26>isspace

如果 mystr 中只包含空格，则返回 True，否则返回 False.

mystr.isspace()   


<27>join

mystr 中每个元素后面插入str,构造出一个新的字符串

mystr.join(str)


想一想
（面试题）给定一个字符串aStr，返回使用空格或者'\t'分割后的倒数第二个子串


#### 字符串相关练习

第二次世界大战促使了现代电子计算机的诞生，最初的目的用计算机来快速的完成导弹弹道的计算，因此在计算机刚刚诞生的那个年代，计算机处理的信息基本上都是数值型的信息，而世界上的第一台电子计算机ENIAC每秒钟能够完成约5000次浮点运算。随着时间的推移，虽然数值运算仍然是计算机日常工作中最为重要的事情之一，但是今天的计算机更多的时间需要处理的数据可能都是以文本的方式存在的，如果我们希望通过Python程序操作本这些文本信息，就必须要先了解字符串类型以及与它相关的知识。

所谓**字符串**，就是由零个或多个字符组成的有限序列，一般记为$${\displaystyle s=a_{1}a_{2}\dots a_{n}(0\leq n \leq \infty)}$$

我们可以通过下面的代码来了解字符串的使用。

```Python
def main():
    str1 = 'hello, world!'
    # 通过len函数计算字符串的长度
    print(len(str1))  # 13
    # 获得字符串首字母大写的拷贝
    print(str1.capitalize())  # Hello, world!
    # 获得字符串变大写后的拷贝
    print(str1.upper())  # HELLO, WORLD!
    # 从字符串中查找子串所在位置
    print(str1.find('or'))  # 8
    print(str1.find('shit'))  # -1
    # 与find类似但找不到子串时会引发异常
    # print(str1.index('or'))
    # print(str1.index('shit'))
    # 检查字符串是否以指定的字符串开头
    print(str1.startswith('He'))  # False
    print(str1.startswith('hel'))  # True
    # 检查字符串是否以指定的字符串结尾
    print(str1.endswith('!'))  # True
    # 将字符串以指定的宽度居中并在两侧填充指定的字符
    print(str1.center(50, '*'))
    # 将字符串以指定的宽度靠右放置左侧填充指定的字符
    print(str1.rjust(50, ' '))
    str2 = 'abc123456'
    # 从字符串中取出指定位置的字符(下标运算)
    print(str2[2])  # c
    # 字符串切片(从指定的开始索引到指定的结束索引)
    print(str2[2:5])  # c12
    print(str2[2:])  # c123456
    print(str2[2::2])  # c246
    print(str2[::2])  # ac246
    print(str2[::-1])  # 654321cba
    print(str2[-3:-1])  # 45
    # 检查字符串是否由数字构成
    print(str2.isdigit())  # False
    # 检查字符串是否以字母构成
    print(str2.isalpha())  # False
    # 检查字符串是否以数字和字母构成
    print(str2.isalnum())  # True
    str3 = '  hello@163.com '
    print(str3)
    # 获得字符串修剪左右两侧空格的拷贝
    print(str3.strip())


if __name__ == '__main__':
    main()
```


### 使用列表list

list作为Python中最常用的数据结构之一，与其他编程语言的数组有相似的特点，但是它具有着更为强大的功能，接下来将详细地为大家介绍一下list的所有操作。

（注：tuple元组类型与list类似，但是tuple的元素不能修改；set集合与list也类似，但是集合中的元素是无序的，且会自动除去重复元素）

#### 列表的格式

想一想：

    前面学习的字符串可以用来存储一串信息，那么想一想，怎样存储咱们班所有同学的名字呢？
    
    定义100个变量，每个变量存放一个学生的姓名可行吗？有更好的办法吗？

答：
    列表

格式：列表名 = [列表选项1, 列表选项2, ……, 列表选项n]

例如：

    namesList = ['zhangsan','李四','王五']

比C语言的数组强大的地方在于列表中的元素可以是不同类型的

    testList = [1, 'a']   

#### 列表的常见操作

##### 1.list列表的创建
- 创建一个列表（不赋初值）:
```
a = []
a = list()
```

- 创建一个列表，并对其赋初值
```
a = [1,2,3]
```

- 列表更高级的创建方法——用表达式创建
```
a = [i for i in range(1, 11)]
#创建一个元素分别为1,2，...10的列表
a = [i for i in range(1, 11) if i % 2 == 0]
#创建一个1-10，且元素为偶数的列表
```

- 用list（）函数将其他（可迭代）数据转换为列表
```
list('ab c')   #列表为['a', 'b', ' ', 'c']
```

##### 2. 列表的索引

- 直接用中括号[ ]索引其下标即可，或用for循环遍历所有的值
- 注意，当下标为负数时则代表从后往前所以（或理解为长度+负下标），即-1代表最后一个元素，-2代表倒数第2个元素


```python
a = [1, 2, 3]
print(a[1])  # 输出2,因为一个list列表的下标从0开始，按照0, 1, 2,...的顺序排列
print(a[-1])  # 输出3
for i in a:
    print(i)  # 输出1 2 3
```

- 注意，字典dict中可以用.keys()和.values()分别遍历dict的键和值

- 字典dict中.get()函数可以返回指定键的值，相比于dict[“key”]访问的好处是如果字典中没有指定的key则返回None，而不会直接报错


```python
a = {"one": 1, "two": 2}
for i in a.values():
    print(i)  # 输出1 2
a.get(key, default)  # default_value不设置的话默认为None，设置的话即如果找不到则返回default设定的值
```

##### 3. 列表的分片操作（slice）

- 用[左边界下标：右边界下标：步长]截取list中特定的一段，注意是左闭右开的区间，即包含左边界，但是不包含右边界

- 其中：步长可以省略，默认为1。步长即每次截取一个元素，到下一次截取元素距离几个元素（默认为1，即紧挨着截取）

- 特别注意，冒号：的左右两侧都可以不写，其中左侧默认为0，即list第一个数据，右侧默认为数据个数+1，即list的最后一个数据
- 左边界和右边界也可以超出list的范围，最长只能截取到list的范围内
- 一般情况下，左边界<=右边界。若左边界>右边界，则要设置步长为负数，否则输出为空（此情况也就是从右向左截取）



```python
a = [1, 2, 3, 4, 5]
print(a[1:3])  # 输出[2,3]
print(a[:4])  # 输出[1,2,3,4]
print(a[2:])  # 输出[3,4,5]
print(a[2:10]  # 输出[3,4,5]
print(a[0:3:2])  # 输出[1,3]
print(a[2:0:-1])  # 输出[3,2]
```

##### 4. 列表删除元素
1. 用del函数删除列表指定位置的元素
> del(list1[index]) #删除list1中index位置的元素（index也可以表示一个范围，如[1, 3]）
2. 用pop函数剔除队尾元素，并将其返回
> a = list1.pop(index) #将list1中index位置元素剔除并赋值给a，默认删除最后一个元素
3. 用remove函数删除列表中值为指定值的元素
> list1.remove(value) #删除list中值为value的元素
4. 用clear函数彻底清空列表全部内容
> list1.clear() #清空list1的全部内容
5. 用分片赋值空列表的办法删除元素
> list1 = [1, 2, 3, 4, 5]   list1[2:] = []   list1  # 输出[1, 2]

**注意：集合中只有remove和discard，其中discard删除不存在的元素不会报错，但是remove与list中一样，会报错**

##### 5. 列表的拼接

- 可以简单的用 + 将两个列表连接起来
```
a = [1, 2]
b = [3]
c = a + b
```
那么c = [1, 2, 3]

- 用extend函数拼接两个列表
```
list1.extend(list2) #在list1后面接上list2
```

##### 6. 列表的重复

- 可以将一个列表直接乘一个数字n获得n倍重复后的列表，相当于n个这样的列表连接起来
```
a = [0]
b = a * 5
```
那么b = [0, 0, 0, 0, 0]

##### 7. 元素成员判断（判断一个元素是否存在一个列表中）
```Python
a = [1, 2, 3, 4, 5]
b = 2
print(b in a)
# 输出True

print(b not in a)
# 输出False
```
**若in前面的元素在列表中则运算值为真；否则为假 not in与in刚好相反**


##### 8. 求列表的长度

> len([1, 2, 3])   #列表的长度为3

##### 9. 求列表的最大、最小值

> max([1, 2, 3])   #最大值为3

##### 10. 在列表中插入元素

- append函数在队尾插入元素
> list1.append(5)  #在list1的最后插入元素5
- insert函数在任意位置插入元素
> list1.insert(index, data) #在指定位置（index处）插入元素data
- extend()函数在尾部扩展一个新列表
```
list1 = [1]
list1.extend([2, 3])  # list1为[1, 2, 3]
```
**注意，集合set中没有append和insert，取代的是add（）**
> set1.add(2) #向集合中加入元素2

##### 11. 反转一个列表

> list1.reverse() #翻转整个列表，即第一个与最后一个互换，第二个与倒数第二个互换....

##### 12. 计算列表中指定元素x的个数

> times = list.count(x)

##### 13. 查找列表中指定元素的位置

- 语法：index(X) 查找list中元素X的位置（若重复出现，则以第一次出现的为准）
```
a = [1, 2, 3, 4, 5] 
a.index(2) #结果为1
```

##### 14.（浅）复制一个list
```
list2 = list1.copy() #将list1的内容复制给list2
#注意这里与list2 = list1是有区别的，python中列表的直接赋值是一个传址操作，即改变list2的值也会同时影响list1的值
#但是copy函数进行的是一个传值操作，即改变list2的值对list1无影响
#浅复制的意思是若列表中嵌套一个列表，则对内部的列表仍然是传址复制
```

##### 15. 列表的排序：sort方法与sorted（）函数

- sort方法
    - 参数：
        - key:主要是用来进行比较的元素，只有一个参数，具体的函数的参数就是取自于可迭代对象中，指定可迭代对象中的一个元素来进行排序。(https://www.runoob.com/python/att-list-sort.html)
        - reverse：是否降序(True为降序，不指定该参数为升序)
    ```
    list1 = [(1,6),(3,4),(2,5)]
    list1.sort(key=lambda x:x[1], reverse=True)  # 根据第二个元素，降序排列
    # 输出:[(1, 6), (2, 5), (3, 4)]
    ```
- sorted()函数：
    
    - 与sort方法功能类似，但是sorted()函数有返回值，返回的是排序后的结果。

#### 列表相关练习

下面的代码演示了如何定义列表、使用下标访问列表元素以及添加和删除元素的操作。

```Python
def main():
    list1 = [1, 3, 5, 7, 100]
    print(list1)
    list2 = ['hello'] * 5
    print(list2)
    # 计算列表长度(元素个数)
    print(len(list1))
    # 下标(索引)运算
    print(list1[0])
    print(list1[4])
    # print(list1[5])  # IndexError: list index out of range
    print(list1[-1])
    print(list1[-3])
    list1[2] = 300
    print(list1)
    # 添加元素
    list1.append(200)
    list1.insert(1, 400)
    list1 += [1000, 2000]
    print(list1)
    print(len(list1))
    # 删除元素
    list1.remove(3)
    if 1234 in list1:
        list1.remove(1234)
    del list1[0]
    print(list1)
    # 清空列表元素
    list1.clear()
    print(list1)


if __name__ == '__main__':
    main()
```

和字符串一样，列表也可以做切片操作，通过切片操作我们可以实现对列表的复制或者将列表中的一部分取出来创建出新的列表，代码如下所示。

```Python
def main():
    fruits = ['grape', 'apple', 'strawberry', 'waxberry']
    fruits += ['pitaya', 'pear', 'mango']
    # 循环遍历列表元素
    for fruit in fruits:
        print(fruit.title(), end=' ')
    print()
    # 列表切片
    fruits2 = fruits[1:4]
    print(fruits2)
    # fruit3 = fruits  # 没有复制列表只创建了新的引用
    # 可以通过完整切片操作来复制列表
    fruits3 = fruits[:]
    print(fruits3)
    fruits4 = fruits[-3:-1]
    print(fruits4)
    # 可以通过反向切片操作来获得倒转后的列表的拷贝
    fruits5 = fruits[::-1]
    print(fruits5)


if __name__ == '__main__':
    main()
```

下面的代码实现了对列表的排序操作。

```Python
def main():
    list1 = ['orange', 'apple', 'zoo', 'internationalization', 'blueberry']
    list2 = sorted(list1)
    # sorted函数返回列表排序后的拷贝不会修改传入的列表
    # 函数的设计就应该像sorted函数一样尽可能不产生副作用
    list3 = sorted(list1, reverse=True)
    # 通过key关键字参数指定根据字符串长度进行排序而不是默认的字母表顺序
    list4 = sorted(list1, key=len)
    print(list1)
    print(list2)
    print(list3)
    print(list4)
    # 给列表对象发出排序消息直接在列表对象上进行排序
    list1.sort(reverse=True)
    print(list1)


if __name__ == '__main__':
    main()
```

我们还可以使用列表的生成式语法来创建列表，代码如下所示。

```Python
import sys


def main():
    f = [x for x in range(1, 10)]
    print(f)
    f = [x + y for x in 'ABCDE' for y in '1234567']
    print(f)
    # 用列表的生成表达式语法创建列表容器
    # 用这种语法创建列表之后元素已经准备就绪所以需要耗费较多的内存空间
    f = [x ** 2 for x in range(1, 1000)]
    print(sys.getsizeof(f))  # 查看对象占用内存的字节数
    print(f)
    # 请注意下面的代码创建的不是一个列表而是一个生成器对象
    # 通过生成器可以获取到数据但它不占用额外的空间存储数据
    # 每次需要数据的时候就通过内部的运算得到数据(需要花费额外的时间)
    f = (x ** 2 for x in range(1, 1000))
    print(sys.getsizeof(f))  # 相比生成式生成器不占用存储数据的空间
    print(f)
    for val in f:
        print(val)


if __name__ == '__main__':
    main()
```

除了上面提到的生成器语法，Python中还有另外一种定义生成器的方式，就是通过`yield`关键字将一个普通函数改造成生成器函数。下面的代码演示了如何实现一个生成[斐波拉切数列](https://zh.wikipedia.org/wiki/%E6%96%90%E6%B3%A2%E9%82%A3%E5%A5%91%E6%95%B0%E5%88%97)的生成器。所谓斐波拉切数列可以通过下面[递归](https://zh.wikipedia.org/wiki/%E9%80%92%E5%BD%92)的方法来进行定义：

$${\displaystyle F_{0}=0}$$

$${\displaystyle F_{1}=1}$$

$${\displaystyle F_{n}=F_{n-1}+F_{n-2}}({n}\geq{2})$$

<!-- ![](./img/fbnq.png) -->

```Python
def fib(n):
    a, b = 0, 1
    for _ in range(n):
        a, b = b, a + b
        yield a


def main():
    for val in fib(20):
        print(val)


if __name__ == '__main__':
    main()
```


### 使用元组tuple

元组类似于列表，是一个基于位置的有序对象集合，但是元组一旦创建之后就不能更改，因此列表中修改元素的操作对于元组都不适用。
- 为什么要使用元组？
    - 元组和其他不可变量类似于其他语言中“常量”的声明，它的不可变性提供了某种一致性，这样可以确保元组在程序中不会被另一个引用修改。
    - Mark Lutz——《Learning Python》中文版

#### 元组的创建


```python
t = (1, 2, 3)
t = tuple([1, 2])

# 特别说明，当元组中仅有一个元素时，要以逗号结尾。这是因为小括号同样可以把表达式括起来，为了与此区分开来，因此在单一对象元组是要在括号内加一个,用以区分。

t = (1)  # 表达式 
t = (1,)  # 元组
```

#### 元组的方法

由于元组并不能够像列表一样修改，因此元组并没有特别多的方法

> t = (1, 2, 3, 1, 2)

##### 1. index方法：根据元素找到其位置
> t.index(1, 2)  # 寻找第2个元素1的位置

结果为3

##### 2. count方法：返回元素的个数
> t.count(2)

结果为2

##### 3. namedtuple -有名元组

python标准库的collections模块提供了namedtuple有名元组，实现了同时支持使用序号和属性名访问。有名元组的属性来自类，因此并不与字典的键完全一样，但他们方便记忆：


```python
from collections import namedtuple
A = namedtuple('tt', ['a','b','c'])
bon = A('d','e','f')
bon
```




    tt(a='d', b='e', c='f')




```python
# namedtuple的访问：
A = namedtuple('tt', ['a','b','c'])
bon = A('d','e','f')
bon.a
```




    'd'




```python
bon[0]
```




    'd'




```python
bon._asdict()
```




    OrderedDict([('a', 'd'), ('b', 'e'), ('c', 'f')])



- Namedtuple比普通tuple具有更好的可读性，可以使代码更易于维护。同时与字典相比，又更加的轻量和高效。但是有一点需要注意，就是namedtuple中的属性都是不可变的。任何尝试改变其属性值的操作都是非法的。
- Namedtuple还有一个非常好的一点是，它与tuple是完全兼容的。也就是说，我们依然可以用索引去访问一个namedtuple。

#### 元组相关练习
Python 的元组与列表类似，不同之处在于元组的元素不能修改，在前面的代码中我们已经不止一次使用过元组了。顾名思义，我们把多个元素组合到一起就形成了一个元组，所以它和列表一样可以保存多条数据。下面的代码演示了如何定义和使用元组。

```Python
def main():
    # 定义元组
    t = ('大飞', 38, True, '北京')
    print(t)
    # 获取元组中的元素
    print(t[0])
    print(t[3])
    # 遍历元组中的值
    for member in t:
        print(member)
    # 重新给元组赋值
    # t[0] = '王大锤'  # TypeError
    # 变量t重新引用了新的元组原来的元组将被垃圾回收
    t = ('王大锤', 20, True, '云南昆明')
    print(t)
    # 将元组转换成列表
    person = list(t)
    print(person)
    # 列表是可以修改它的元素的
    person[0] = '李小龙'
    person[1] = 25
    print(person)
    # 将列表转换成元组
    fruits_list = ['apple', 'banana', 'orange']
    fruits_tuple = tuple(fruits_list)
    print(fruits_tuple)


if __name__ == '__main__':
    main()
```

这里有一个非常值得探讨的问题，我们已经有了列表这种数据结构，为什么还需要元组这样的类型呢？

1. 元组中的元素是无法修改的，事实上我们在项目中尤其是[多线程](https://zh.wikipedia.org/zh-hans/%E5%A4%9A%E7%BA%BF%E7%A8%8B)环境（后面会讲到）中可能更喜欢使用的是那些不变对象（一方面因为对象状态不能修改，所以可以避免由此引起的不必要的程序错误，简单的说就是一个不变的对象要比可变的对象更加容易维护；另一方面因为没有任何一个线程能够修改不变对象的内部状态，一个不变对象自动就是线程安全的，这样就可以省掉处理同步化的开销。一个不变对象可以方便的被共享访问）。所以结论就是：如果不需要对元素进行添加、删除、修改的时候，可以考虑使用元组，当然如果一个方法要返回多个值，使用元组也是不错的选择。
2. 元组在创建时间和占用的空间上面都优于列表。我们可以使用sys模块的getsizeof函数来检查存储同样的元素的元组和列表各自占用了多少内存空间，这个很容易做到。我们也可以在ipython中使用魔法指令%timeit来分析创建同样内容的元组和列表所花费的时间。


```python
%timeit [1,2,3,4,5,6]
```

    55.3 ns ± 0.0667 ns per loop (mean ± std. dev. of 7 runs, 10000000 loops each)



```python
%timeit (1,2,3,4,5,6)
```

    7.87 ns ± 0.00348 ns per loop (mean ± std. dev. of 7 runs, 100000000 loops each)


### 使用字典dict

字典与列表最大的区别就是字典强调的是“键值对”，key与value一一对应，字典中的存放顺序并不重要，重要的是“键”和“值的对应关系”

#### 字典的创建(字典中每一对数据都是“键”和“值”相对应的)

##### 第一种
> a = {key1:value1, key2:value2}
##### 第二种
> a = dict(key1=value1, key2=value2)  # 注意此种情况下键必须为字符串
##### 第三种
```
a = {}
a[key1] = value1  
a[key2] = value2 
```
##### 第四种
> a = dict([(key1, value1), (key2, value2)])

> a = dict(zip([key1, key2], [value1, value2]))  # 衍生，使用zip函数把键列表和值列表打包成键值对一一对应的元组
##### 第五种
> a = dict.fromkeys([key1, key2], value)  # 这种情况适用于多个键对应相同值的情况
##### 第六种
> a = {x: x**2 for x in [1, 2, 3]}  # 字典推导表达式

#### 字典的索引
```
dict1[key] 
#key是字典的键，返回的是对应的值value

dict1.get(key)
#get方法获取键的值，若键不存在，则返回设定的默认值default（默认为None）--与`[key]`获取值的区别是，get方法遇到键不存在的时候会返回设定值，而直接索引遇到键不存在时会报错“missing-key”
```

#### 字典的遍历
```
for i in dict1.keys():
    print(i, dict1[keys])  # 遍历字典中所有的键，并输出键值对

for i in dict1:  # 该方法与上述方法等价
    ...

for keys, values in dict1.items():  # 遍历字典中所有的键值对
    ...
```

#### 字典的排序

##### 对字典的排序有两种方法：

1. 借助.keys()方法和list()函数将键提取成list，对list排序后输出



```python

D = {'a':1, 'c':3, 'b':2}
D1 = list(D.keys())
D1.sort()
for i in D1: 
    print(i, D[i])

# 输出：
# a 1
# b 2
# c 3

```


2. 借助内置的sorted()函数可对任意对象类型排序，返回排序后的结果

    - tips:对于sorted（字典）来说，返回的是排序好的keys（以list的形式）



```python
D = {'a':1, 'c':3, 'b':2}
for i in sorted(D):
    print(i, D[i])
```

    a 1
    b 2
    c 3



```python
D.items()
```




    dict_items([('a', 1), ('c', 3), ('b', 2)])




```python
sorted(D.items(), key= lambda x:x[0])
```




    [('a', 1), ('b', 2), ('c', 3)]



里面三个参数

dict.items() #可迭代元素。

key= lambda d:d[0]#d[0]表示按键，d[1]表示按值。

reverse#默认是False，升序排列。当值为True时是降序排列。

返回的是一个列表，列表中是排列后的元组。


```python
print(sorted("This is a test string from Andrew".split(), key=str.lower))
```

    ['a', 'Andrew', 'from', 'is', 'string', 'test', 'This']


sorted(字典.items(), key=lambda x:x[0])	# 按照字典的k进行排序，返回由(k,v)构成的列表	# sorted(字典.items()) 默认就是按照字典的k进行排序	# key=lambda x:x[0] 表示按照x[0]进行排序	# x是sorted第一个参数返回的可迭代对象的每一个(k,v)	# x[0]就是元祖中的第一个值，也就是字典的k

1、基础的序列升序排序直接调用sorted()方法即可
需要注意：sort()方法仅定义在list中，而sorted()方法对所有的可迭代序列都有效

2、使用cmp函数排序，cmp是带两个参数的比较函数
list1 = [('david', 90), ('mary',90), ('sara',80),('lily',95)]

print(sorted(list1,cmp =lambdax,y: cmp(x[0],y[0])))#按照第一个位置的字母序排序

print(sorted(list1,cmp =lambdax,y: cmp(x[1],y[1])))#按照第二个位置的数字序排序

3、添加key参数，key 是带一个参数的函数
list.sort()和sorted()函数使用key参数来指定一个函数，此函数将在每个元素比较前被调用。

例如通过key指定的函数来忽略字符串的大小写

print(sorted("This is a test string from Andrew".split(), key=str.lower))

 4、用reverse排序

print(sorted(list1,reverse = True))#逆转

5、argsort()函数，是numpy库中的函数

argsort函数

argsort函数返回的是数组值从小到大的索引值


#### 字典的常用操作

| 操作 | 解释 |
| :--------------------- | :------------------------------------------------------------ |
| .keys() | （方法）获取所有键 |
| .values() | （方法）获取所有值 |
| .items() | （方法）获取所有“键+值”元组 |
| len() | 获取键值对的数量 |
| .get(key, default) | （方法）获取键的值，若键不存在，则返回设定的默认值default（默认为None）--与[key]获取值的区别是，get方法遇到键不存在的时候会返回设定值，而直接索引遇到键不存在时会报错“missing-key” |
| dict1.update(dict2) | （方法）合并两个字典 |

#### 字典相关练习
字典是另一种可变容器模型，类似于我们生活中使用的字典，它可以存储任意类型对象，与列表、集合不同的是，字典的每个元素都是由一个键和一个值组成的“键值对”，键和值通过冒号分开。下面的代码演示了如何定义和使用字典。

```Python
def main():
    scores = {'骆昊': 95, '白元芳': 78, '狄仁杰': 82}
    # 通过键可以获取字典中对应的值
    print(scores['骆昊'])
    print(scores['狄仁杰'])
    # 对字典进行遍历(遍历的其实是键再通过键取对应的值)
    for elem in scores:
        print('%s\t--->\t%d' % (elem, scores[elem]))
    # 更新字典中的元素
    scores['白元芳'] = 65
    scores['诸葛王朗'] = 71
    scores.update(冷面=67, 方启鹤=85)
    print(scores)
    if '武则天' in scores:
        print(scores['武则天'])
    print(scores.get('武则天'))
    # get方法也是通过键获取对应的值但是可以设置默认值
    print(scores.get('武则天', 60))
    # 删除字典中的元素
    print(scores.popitem())
    print(scores.popitem())
    print(scores.pop('骆昊', 100))
    # 清空字典
    scores.clear()
    print(scores)


if __name__ == '__main__':
    main()
```

### 使用集合set

Python中的集合类似于数学中的集合概念，它是一组无序、不可重复数据的组合。集合用{ ...}创建，某种程度上可以把集合看作是没有值的字典。


#### 集合的创建
```
s = {'s', 'e', 't'}
s = set(['a, b, c, d, e'])

#注意，python中{}为空字典类型，并非空集合。空集合需要用set()函数创建
s = set()  #创建一个空集合

#集合也可以用表达式（推导）的方式创建
{x * 2 for x in 'abc'}  #{'aa', 'bb', 'cc} 
{x **2 for x in range(1,5)}   #{1, 4, 9, 16}
```

#### 集合的常用操作
```
set1 `&` set2 #交运算
set1 `|` set2 #并运算
set1 `-` set2 #差运算，set1减去set1 `&` set2部分
```

#### 集合的常用方法
```
set1.add('x')  #添加元素。注意：集合中只能包含可哈希的对象，即list，dict都不能嵌入到集合中
set1.union(...)  #取并集，效果等同于 | ,但是括号里可以是list，tuple，其他dict甚至是dict
set1.intersection(...)  #取交集，同上
set1.issubset(set2)  #判断set1是否是set2的子集
```

#### 集合的不可变性与frozenset

注意：集合只能包含不可变的（可哈希化的）对象类型。因此，列表和字典甚至另一个集合都不能作为集合的元素，但是元组可以（因为元组是不可变的）。

由于集合本身是可变的，因此，要想在一个集合中嵌入另一个集合，需要用frozenset创建一个不可变的集合。
```
a = frozenset([1, 2, 3])
b = set([1, 2, a])    #b为{frozenset({1, 2, 3}), 1, 2}
```

#### 为什么使用集合？

- 由于集合内元素是不重复的，因此可以将list或其他类型的数据转换成集合，从而过滤掉其中的重复元素
- 通过集合的交并补等操作，可以比较列表、字符串以及其他可迭代对象的差异。

#### 集合相关练习
Python中的集合跟数学上的集合是一致的，不允许有重复元素，而且可以进行交集、并集、差集等运算。

<!-- ![](./img/set.png) -->

```Python
def main():
    set1 = {1, 2, 3, 3, 3, 2}
    print(set1)
    print('Length =', len(set1))
    set2 = set(range(1, 10))
    print(set2)
    set1.add(4)
    set1.add(5)
    set2.update([11, 12])
    print(set1)
    print(set2)
    set2.discard(5)
    # remove的元素如果不存在会引发KeyError
    if 4 in set2:
        set2.remove(4)
    print(set2)
    # 遍历集合容器
    for elem in set2:
        print(elem ** 2, end=' ')
    print()
    # 将元组转换成集合
    set3 = set((1, 2, 3, 3, 2, 1))
    print(set3.pop())
    print(set3)
    # 集合的交集、并集、差集、对称差运算
    print(set1 & set2)
    # print(set1.intersection(set2))
    print(set1 | set2)
    # print(set1.union(set2))
    print(set1 - set2)
    # print(set1.difference(set2))
    print(set1 ^ set2)
    # print(set1.symmetric_difference(set2))
    # 判断子集和超集
    print(set2 <= set1)
    # print(set2.issubset(set1))
    print(set3 <= set1)
    # print(set3.issubset(set1))
    print(set1 >= set2)
    # print(set1.issuperset(set2))
    print(set1 >= set3)
    # print(set1.issuperset(set3))


if __name__ == '__main__':
    main()
```

> **说明：** Python中允许通过一些特殊的方法来为某种类型或数据结构自定义运算符（后面的章节中会讲到），上面的代码中我们对集合进行运算的时候可以调用集合对象的方法，也可以直接使用对应的运算符，例如`&`运算符跟intersection方法的作用就是一样的，但是使用运算符让代码更加直观。

### 数据类型转换

#### list转str
假设有一个名为test_list的list，转换后的str名为test_str

则转换方法：

test_str = "".join(test_list)


```python
test_list = ['中国', '北京', '海淀']
test_str = "-".join(test_list)
test_str
```




    '中国-北京-海淀'




```python
#需要注意的是该方法需要list中的元素为字符型，若是整型，则需要先转换为字符型后再转为str类型。
test_list = [1,2,3]
test_str = ''.join([str(i) for i in test_list])
test_str
```




    '123'



#### str转list

假设有一个名为test_str的str，转换后的list名为test_list

则转换方法：

test_list=list(test_str)


```python
test_str = '123'
list(test_str)
```




    ['1', '2', '3']



#### 其他数据类型之间的转换
##### 这些函数返回一个新的对象，表示转换的值。
| 函数 | 	描述 |
| :-------: | :-------|
| int(x [,base]) | 将x转换为一个整数 |
| float(x) | 将x转换到一个浮点数 |
| complex(real [,imag]) | 创建一个复数 |
| str(x) | 将对象 x 转换为字符串 |
| repr(x) | 将对象 x 转换为表达式字符串 |
| eval(str) | 用来计算在字符串中的有效Python表达式,并返回一个对象 |
| tuple(s) | 将序列 s 转换为一个元组 |
| list(s) | 将序列 s 转换为一个列表 |
| set(s) | 转换为可变集合 |
| dict(d) | 创建一个字典。d 必须是一个序列 (key,value)元组。 |
| frozenset(s) | 转换为不可变集合 |
| chr(x) | 将一个整数转换为一个字符 |
| unichr(x) | 将一个整数转换为Unicode字符 |
| ord(x) | 将一个字符转换为它的整数值 |
| hex(x) | 将一个整数转换为一个十六进制字符串 |
| oct(x) | 将一个整数转换为一个八进制字符串 |

##### 基本数据类型
- 虽然python中的变量不需要声明，但使用时必须赋值
    1. 整形变量
    2. 浮点型变量
    3. 字符型
- 可以一个给多个变量赋值，也可以多个给多个变量赋值
- python3中有6个标准数据类型
    - Number(数字)
        - True=1
        - False=0
        - 数值的除法（/）总是返回一个浮点数，要获取整数使用//操作符
        - 在混合计算时，python会把整形转换为浮点数
    - String(字符串)
        - 字符串用'或"括起来，同时使用\转义特殊字符串
        - 如果不想让反斜杠发生转义，可以在字符串前面加个r表示原始字符串
        - 索引值以0为开始，-1为末尾的开始位置
        - 加号+是字符串的连接符，星号*表示复制当前的字符串，紧跟的数字为复制的次数
    - List(列表)
        - list写在方括号之间，元素用逗号隔开
        - 和字符串一样，list可以被索引和切片
        - list可以使用+操作符进行连接
        - list中的元素可以改变的
    - Tuple(元组)
        - 元组与列表类似，不同之处在于元组的元素不能修改，元组写在小括号里。元素之间用逗号隔开
        - 元组也可以被索引和切片，方法一样
        - 注意构造包含0或1个元素的元组的特殊语法规则
        - 元组也可以用+操作符进行拼接
    - Sets(集合)
        - set是一个无需不重复的序列，基本功能是进行成员关系的测试和删除重复元素
    - Dictionary(字典)
        - 字典是一种映射类型，字典用{}标识，它是一个无序的建(key):值(value)对集合
        - 建(key)必须使用不可变类型。在同一个字典中建(key)必须是唯一的
        - 创建空字典使用{}
- 类型之间的转换
    - int(x,base=10)x字符串或数字，base进制数，默认十进制 浮点转为整数
    - float 整数转换为浮点型
    - complex(1,2) 转换为复数
    - str(10)将对象转换为字符串
    - repe()将对象转换为表达式字符串
    - repr(dict)将对象转换为表达式字符串
    - eval(str)用来计算在字符串中有效的python表达式，返回一个对象
    - tuple(listi)将列表转化为元组
    - list()将元组转换为列表
    - set转换集合


### 练习

#### 练习1：在屏幕上显示跑马灯文字

```Python
import os
import time


def main():
    content = '北京欢迎你为你开天辟地…………'
    while True:
        # 清理屏幕上的输出
        os.system('cls')  # os.system('clear')
        print(content)
        # 休眠200毫秒
        time.sleep(0.2)
        content = content[1:] + content[0]


if __name__ == '__main__':
    main()
```

#### 练习2：设计一个函数产生指定长度的验证码，验证码由大小写字母和数字构成。

```Python
import random


def generate_code(code_len=4):
    """
    生成指定长度的验证码

    :param code_len: 验证码的长度(默认4个字符)

    :return: 由大小写英文字母和数字构成的随机验证码
    """
    all_chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    last_pos = len(all_chars) - 1
    code = ''
    for _ in range(code_len):
        index = random.randint(0, last_pos)
        code += all_chars[index]
    return code
```

#### 练习3：设计一个函数返回给定文件名的后缀名。

```Python
def get_suffix(filename, has_dot=False):
    """
    获取文件名的后缀名

    :param filename: 文件名
    :param has_dot: 返回的后缀名是否需要带点
    :return: 文件的后缀名
    """
    pos = filename.rfind('.')
    if 0 < pos < len(filename) - 1:
        index = pos if has_dot else pos + 1
        return filename[index:]
    else:
        return ''
```

#### 练习4：设计一个函数返回传入的列表中最大和第二大的元素的值。

```Python
def max2(x):
    m1, m2 = (x[0], x[1]) if x[0] > x[1] else (x[1], x[0])
    for index in range(2, len(x)):
        if x[index] > m1:
            m2 = m1
            m1 = x[index]
        elif x[index] > m2:
            m2 = x[index]
    return m1, m2
```

#### 练习5：计算指定的年月日是这一年的第几天

```Python
def is_leap_year(year):
    """
    判断指定的年份是不是闰年

    :param year: 年份
    :return: 闰年返回True平年返回False
    """
    return year % 4 == 0 and year % 100 != 0 or year % 400 == 0


def which_day(year, month, date):
    """
    计算传入的日期是这一年的第几天

    :param year: 年
    :param month: 月
    :param date: 日
    :return: 第几天
    """
    days_of_month = [
        [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
        [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    ][is_leap_year(year)]
    total = 0
    for index in range(month - 1):
        total += days_of_month[index]
    return total + date


def main():
    print(which_day(1980, 11, 28))
    print(which_day(1981, 12, 31))
    print(which_day(2018, 1, 1))
    print(which_day(2016, 3, 1))


if __name__ == '__main__':
    main()
```

#### 练习6：打印[杨辉三角](https://zh.wikipedia.org/wiki/%E6%9D%A8%E8%BE%89%E4%B8%89%E8%A7%92%E5%BD%A2)。

```Python
def main():
    num = int(input('Number of rows: '))
    yh = [[]] * num
    for row in range(len(yh)):
        yh[row] = [None] * (row + 1)
        for col in range(len(yh[row])):
            if col == 0 or col == row:
                yh[row][col] = 1
            else:
                yh[row][col] = yh[row - 1][col] + yh[row - 1][col - 1]
            print(yh[row][col], end='\t')
        print()


if __name__ == '__main__':
    main()
```

### 综合案例

#### 案例1：双色球选号

```Python
from random import randrange, randint, sample


def display(balls):
    """
    输出列表中的双色球号码
    """
    for index, ball in enumerate(balls):
        if index == len(balls) - 1:
            print('|', end=' ')
        print('%02d' % ball, end=' ')
    print()


def random_select():
    """
    随机选择一组号码
    """
    red_balls = [x for x in range(1, 34)]
    selected_balls = []
    selected_balls = sample(red_balls, 6)
    selected_balls.sort()
    selected_balls.append(randint(1, 16))
    return selected_balls


def main():
    n = int(input('机选几注: '))
    for _ in range(n):
        display(random_select())


if __name__ == '__main__':
    main()
```

> **说明：** 上面使用random模块的sample函数来实现从列表中选择不重复的n个元素。

#### 综合案例2：[约瑟夫环问题](https://zh.wikipedia.org/wiki/%E7%BA%A6%E7%91%9F%E5%A4%AB%E6%96%AF%E9%97%AE%E9%A2%98)

```Python
"""
《幸运的基督徒》
有15个基督徒和15个非基督徒在海上遇险，为了能让一部分人活下来不得不将其中15个人扔到海里面去，有个人想了个办法就是大家围成一个圈，由某个人开始从1报数，报到9的人就扔到海里面，他后面的人接着从1开始报数，报到9的人继续扔到海里面，直到扔掉15个人。由于上帝的保佑，15个基督徒都幸免于难，问这些人最开始是怎么站的，哪些位置是基督徒哪些位置是非基督徒。
"""


def main():
    persons = [True] * 30
    counter, index, number = 0, 0, 0
    while counter < 15:
        if persons[index]:
            number += 1
            if number == 9:
                persons[index] = False
                counter += 1
                number = 0
        index += 1
        index %= 30
    for person in persons:
        print('基' if person else '非', end='')


if __name__ == '__main__':
    main()

```

#### 综合案例3：[井字棋](https://zh.wikipedia.org/wiki/%E4%BA%95%E5%AD%97%E6%A3%8B)游戏

```Python
import os


def print_board(board):
    print(board['TL'] + '|' + board['TM'] + '|' + board['TR'])
    print('-+-+-')
    print(board['ML'] + '|' + board['MM'] + '|' + board['MR'])
    print('-+-+-')
    print(board['BL'] + '|' + board['BM'] + '|' + board['BR'])


def main():
    init_board = {
        'TL': ' ', 'TM': ' ', 'TR': ' ',
        'ML': ' ', 'MM': ' ', 'MR': ' ',
        'BL': ' ', 'BM': ' ', 'BR': ' '
    }
    begin = True
    while begin:
        curr_board = init_board.copy()
        begin = False
        turn = 'x'
        counter = 0
        os.system('clear')
        print_board(curr_board)
        while counter < 9:
            move = input('轮到%s走棋, 请输入位置: ' % turn)
            if curr_board[move] == ' ':
                counter += 1
                curr_board[move] = turn
                if turn == 'x':
                    turn = 'o'
                else:
                    turn = 'x'
            os.system('clear')
            print_board(curr_board)
        choice = input('再玩一局?(yes|no)')
        begin = choice == 'yes'


if __name__ == '__main__':
    main()
```

>**说明：** 最后这个案例来自[《Python编程快速上手:让繁琐工作自动化》](https://item.jd.com/11943853.html)一书（这本书对有编程基础想迅速使用Python将日常工作自动化的人来说还是不错的选择），对代码做了一点点的调整。

Python 解释器内置了很多函数和类型，您可以在任何时候使用它们。
内置函数https://docs.python.org/zh-cn/3.8/library/functions.html

# Python的引用

## python 的赋值是引用

python 的 一切都是对象

python 是 高度面向对象特性，所以实际上Python里面的任何元素都是一种对象。考虑一下如下代码：


```python
print(300)
```

    300


这个代码会做三件事情

1. 生成一个int对象

2. 把300的值赋给int对象

3. 在console里面打印300

可以从如下代码里面看出300为int的实例


```python
type(300)
```




    int



python的变量是一个符号，是实例的引用

变量赋值给变量，也是传引用

如果重新给m赋值，那么m会把自己的指针指向新实例

如果n再重新赋值，那么会没有变量指向实例300

1. python不允许程序员选择采用传值还是传引用。Python参数传递采用的肯定是“传对象引用”的方式。实际上，这种方式相当于传值和传引用的一种综合。如果函数收到的是一个可变对象（比如字典或者列表）的引用，就能修改对象的原始值——相当于通过“传引用”来传递对象。如果函数收到的是一个不可变对象（比如数字、字符或者元组）的引用，就不能直接修改原始对象——相当于通过“传值'来传递对象。

2. 当人们复制列表或字典时，就复制了对象列表的引用同，如果改变引用的值，则修改了原始的参数。

3. 为了简化内存管理，Python通过引用计数机制实现自动垃圾回收功能，Python中的每个对象都有一个引用计数，用来计数该对象在不同场所分别被引用了多少次。每当引用一次Python对象，相应的引用计数就增1，每当消毁一次Python对象，则相应的引用就减1，只有当引用计数为零时，才真正从内存中删除Python对象。

## Python中的值类型与引用类型

其实各个标准资料中没有说明Python有值类型和引用类型的分类，这个分类一般是C++和Java中的。但是语言是相通的，所以Python肯定也有类似的。实际上Python 的变量是没有类型的，这与以往看到的大部分语言都不一样（JS等弱类型的也是这样）。但 Python 却是区分类型的，那类型在哪里呢？事实是，类型是跟着内存中的对象走的。类型属于对象，变量是没有类型的。一般也分实参和形参。

### 变量
Python中的变量都是指针，这确实和之前学过的强类型语言是有不同的。因为变量是指针，所以所有的变量无类型限制，可以指向任意对象。指针的内存空间大小是与类型无关的，其内存空间只是保存了所指向数据的内存地址。

Python 的所有变量其实都是指向内存中的对象的一个指针，所有的变量都是！此外，对象还分两类：一类是可修改的，一类是不可修改的。我的理解是把可修改(mutable)的类型叫做值类型，不可修改(immutable)类型叫做引用类型。

### 对象
对象=确定内存空间+存储在这块内存空间中的值。

Java中，对象是分配在堆上的，存储真正的数据，而引用是在栈中开辟的内存空间用于引用某一个对象（值类型的变量也是存储到栈上）。

### 值类型
在Python中，数值（整型，浮点型），布尔型，字符串，元组属于值类型，本身不允许被修改（不可变类型），数值的修改实际上是让变量指向了一个新的对象（新创建的对象），所以不会发生共享内存问题。 这种方式同Java的不可变对象（String）实现方式相同。原始对象被Python的GC回收。


```python
a = 1
b = a
a = 2
print(b)  #输出的结果是1
```

修改值类型的值，只是让它指向一个新的内存地址，并不会改变变量b的值


```python
x = 1
print(id(x))
y = 1
print(id(y))
x = 2
y = 2
print(id(x), id(y))
z = y
print(id(y), id(z))
x += 2
print(id(x))
```

    94877546771200
    94877546771200
    94877546771232 94877546771232
    94877546771232 94877546771232
    94877546771296


- 类似于Java的字符串常量池。

    1. Python在底层做了一定的优化，对于使用过小整数以及短字符串都会被缓存起来。所以上述b引用的应该是被缓存过的3
    2. 之所以采用这种优化的方式，是因为python中数字和字符串一经创建都是不可修改的。所以不会出现，因使用了缓存的对象值造成“脏读”的问题

### 引用类型
在Python中，列表，集合，字典是引用类型，本身允许修改（可变类型）。



```python
list_a = [1,2]
list_b = list_a
print(id(list_a), id(list_b))
list_a[0] = 3
print(list_b)  #此时的输出结果是[3,2]
```

    140708389416464 140708389416464
    [3, 2]


修改引用类型的值，因为list_b的地址和list_a的一致，所以也会被修改

一般只为了复制值，可以使用分片操作。还可以使用拷贝操作


```python
a = [1, 2, 3]
print(id(a))
a = [1, 2, 3]
print(id(a))
a.append(4)
print(id(a))
a += [2]
print(id(a))
print(a)
```

    140708430177056
    140708581065184
    140708581065184
    140708581065184
    [1, 2, 3, 4, 2]


从上面的程序中可以看出，进行两次a = [1, 2, 3]操作，两次a引用的地址值是不同的，也就是说其实创建了两个不同的对象，这一点明显不同于不可变数据类型，所以对于可变数据类型来说，具有同样值的对象是不同的对象，即在内存中保存了多个同样值的对象，地址值不同。接着来看后面的操作，我们对列表进行添加操作，分别a.append(4)和a += [2]，发现这两个操作使得a引用的对象值变成了上面的最终结果，但是a引用的地址依旧是41575088，也就是说对a进行的操作不会改变a引用的地址值，只是在地址后面又扩充了新的地址，改变了地址里面存放的值，所以可变数据类型的意思就是说对一个变量进行操作时，其值是可变的，值的变化并不会引起新建对象，即地址是不会变的，只是地址中的内容变化了或者地址得到了扩充。

可变数据类型是允许同一对象的内容，即值可以变化，但是地址是不会变化的。但是需要注意一点，对可变数据类型的操作不能是直接进行新的赋值操作，比如说a = [1, 2, 3, 4, 5, 6, 7]，这样的操作就不是改变值了，而是新建了一个新的对象，这里的可变只是对于类似于append、+=等这种操作。

python中的不可变数据类型，不允许变量的值发生变化，如果改变了变量的值，相当于是新建了一个对象，而对于相同的值的对象，在内存中则只有一个对象，内部会有一个引用计数来记录有多少个变量引用这个对象；可变数据类型，允许变量的值发生变化，即如果对变量进行append、+=等这种操作后，只是改变了变量的值，而不会新建一个对象，变量引用的对象的地址也不会变化，不过对于相同的值的不同对象，在内存中则会存在不同的对象，即每个对象都有自己的地址，相当于内存中对于同值的对象保存了多份，这里不存在引用计数，是实实在在的对象。

### 可变类型导致的性能问题


```python
# 拼接字符串问题

string_build = ""
for data in container:
    string_build += str(data)
```

实际上，这段代码效率是非常低下的，字符串是不可变对象类型，当拼接两个字符串的时候，会创建第三个字符串，迭代次数过多或者数据量很大的字符串合并，就会在创建第三个字符串的时候浪费掉很多的内存空间，不仅如此，在迭代最后一次，为最后的结果还会开辟更大的空间来存储，实在是太浪费。因为str是不可变类型。


```python
builder_list = []
for data in container:
    builder_list.append(str(data))
"".join(builder_list)
 
### 另一种使用list实现的方法
"".join([str(data) for data in container])
 
### 或者使用map函数
"".join(map(str, container))
```

上面的代码，就充分利用了可变对象特点，当数据要更新的时候，不开辟新的空间，而是在原先的空间上增加，大大减少了空间的使用，提高了代码执行的效率。

### 引用和拷贝（references and copies）
当程序中使用=赋值操作符时，例如a=b，

对于不可变的对象，a作为b的一个拷贝被创建，a和b将指向不同的内存地址，a和b相互独立。


```python
def TestCopy():
    a = 10
    b = a
    a =20
    print (b) #b still is 10
```

但是对于可变的对象，a作为b的一个引用被创建，a和b的元素公用相同的内存地址，a和b的元素共享。


```python
def TestRef():
    a=[1,2,3,4]
    b=a   #b is a reference to a
    print (b is a) # True
    b[2] = -100 #change an element in b
    print (a) # a also changed to [1,2,-100,4]
```

### 深拷贝和浅拷贝（shallow copy and deep copy）
http://www.pythontutor.com/live.html#mode=edit

为了避免可变对象指向同一个对象，必须创建一个新的拷贝，而不是引用。

在python中可以对容器对象（例如lists和dictionaries）使用两种拷贝：浅拷贝和深拷贝。

浅拷贝创建一个新的对象，但是使用原来对象的元素的引用（如果是不变类型，相当于是拷贝）来填充新对象。可以使用copy.copy()来实现浅拷贝。


```python
import copy
a = [1, [2, 2], 3]
c = copy.deepcopy(a)
print(id(a))
print(id(c))
print(id(a) == id(c))
c[1][0] = 1
print(a, c)
```


```python
def TestShallowCopy():
    a = [ 1, 2, [3,4] ]
    b = list(a) # create a shallow copy of a
    print (b is a) #False
    b.append(100) #append element to b
    print (b)
    print (a) # a is unchanged
    b[2][0] = -100 # modify an element inside b
    print (b)
    print (a)  # a is changed
```

在这个例子中，a和b共享相同的可变元素。所以修改其中一个list对象中的元素，另一个list对象也会被修改。

深拷贝创建一个新的对象，同时递归地拷贝对象所包含的所有的元素。可以使用copy.deepcopy()来实现深拷贝。


```python
def TestDeepCopy():
    import copy
    a = [1, 2, [3, 4]]
    b = copy.deepcopy(a)
    b[2][0] = -100
    print (b)  # b is changed
    print (a)  # a is unchanged
```

在这个例子中，a和b是对立的list对象，且他们的元素也相互独立。

### 引用计数和垃圾回收

python中的所有的对象都是引用计数的，一个对象赋值或加入容器时，它的引用计数就会自增，当使用del时或变量赋值为其他值时，引用计数就会自减，当引用计数为0时，python的垃圾回收器就会回收该变量。


```python
def TestGarbageCollection():
    import sys
    print(sys.getrefcount(37))
    a = 37 # Creates an object with value 37
    print(sys.getrefcount(37))
    b = a # Increases reference count on 37
    print(sys.getrefcount(37))
    c = []
    c.append(b) # Increases reference count on 37
    print(sys.getrefcount(37))
    del a # Decrease reference count of 37
    print(sys.getrefcount(37))
    b = 42 # Decrease reference count of 37
    print(sys.getrefcount(37))
    c[0] = 2.0 # Decrease reference count of 37
    print(sys.getrefcount(37))

TestGarbageCollection()
```

    1602
    1603
    1604
    1605
    1604
    1603
    1602



```python
from turtle import *


def nose(x,y):
    """画鼻子"""
    penup()
    # 将海龟移动到指定的坐标
    goto(x,y)
    pendown()
    # 设置海龟的方向（0-东、90-北、180-西、270-南）
    setheading(-30)
    begin_fill()
    a = 0.4
    for i in range(120):
        if 0 <= i < 30 or 60 <= i <90:
            a = a + 0.08
            # 向左转3度
            left(3)
            # 向前走
            forward(a)
        else:
            a = a - 0.08
            left(3)
            forward(a)
    end_fill()
    penup()
    setheading(90)
    forward(25)
    setheading(0)
    forward(10)
    pendown()
    # 设置画笔的颜色(红, 绿, 蓝)
    pencolor(255, 155, 192)
    setheading(10)
    begin_fill()
    circle(5)
    color(160, 82, 45)
    end_fill()
    penup()
    setheading(0)
    forward(20)
    pendown()
    pencolor(255, 155, 192)
    setheading(10)
    begin_fill()
    circle(5)
    color(160, 82, 45)
    end_fill()


def head(x, y):
    """画头"""
    color((255, 155, 192), "pink")
    penup()
    goto(x,y)
    setheading(0)
    pendown()
    begin_fill()
    setheading(180)
    circle(300, -30)
    circle(100, -60)
    circle(80, -100)
    circle(150, -20)
    circle(60, -95)
    setheading(161)
    circle(-300, 15)
    penup()
    goto(-100, 100)
    pendown()
    setheading(-30)
    a = 0.4
    for i in range(60):
        if 0<= i < 30 or 60 <= i < 90:
            a = a + 0.08
            lt(3) #向左转3度
            fd(a) #向前走a的步长
        else:
            a = a - 0.08
            lt(3)
            fd(a)
    end_fill()


def ears(x,y):
    """画耳朵"""
    color((255, 155, 192), "pink")
    penup()
    goto(x, y)
    pendown()
    begin_fill()
    setheading(100)
    circle(-50, 50)
    circle(-10, 120)
    circle(-50, 54)
    end_fill()
    penup()
    setheading(90)
    forward(-12)
    setheading(0)
    forward(30)
    pendown()
    begin_fill()
    setheading(100)
    circle(-50, 50)
    circle(-10, 120)
    circle(-50, 56)
    end_fill()


def eyes(x,y):
    """画眼睛"""
    color((255, 155, 192), "white")
    penup()
    setheading(90)
    forward(-20)
    setheading(0)
    forward(-95)
    pendown()
    begin_fill()
    circle(15)
    end_fill()
    color("black")
    penup()
    setheading(90)
    forward(12)
    setheading(0)
    forward(-3)
    pendown()
    begin_fill()
    circle(3)
    end_fill()
    color((255, 155, 192), "white")
    penup()
    seth(90)
    forward(-25)
    seth(0)
    forward(40)
    pendown()
    begin_fill()
    circle(15)
    end_fill()
    color("black")
    penup()
    setheading(90)
    forward(12)
    setheading(0)
    forward(-3)
    pendown()
    begin_fill()
    circle(3)
    end_fill()


def cheek(x,y):
    """画脸颊"""
    color((255, 155, 192))
    penup()
    goto(x,y)
    pendown()
    setheading(0)
    begin_fill()
    circle(30)
    end_fill()


def mouth(x,y):
    """画嘴巴"""
    color(239, 69, 19)
    penup()
    goto(x, y)
    pendown()
    setheading(-80)
    circle(30, 40)
    circle(40, 80)


def setting():
    """设置参数"""
    pensize(4)
    # 隐藏海龟
    hideturtle()
    colormode(255)
    color((255, 155, 192), "pink")
    setup(840, 500)
    speed(10)


def main():
    """主函数"""
    setting() 
    nose(-100, 100)
    head(-69, 167)
    ears(0, 160)
    eyes(0, 140)
    cheek(80, 10)
    mouth(-20, 30)
    done()


if __name__ == '__main__':
    main()
```


```python
import pygame,sys,time,random
from pygame.locals import *
# 定义颜色变量
redColour = pygame.Color(255,0,0)
blackColour = pygame.Color(0,0,0)
whiteColour = pygame.Color(255,255,255)
greyColour = pygame.Color(150,150,150)

# 定义gameOver函数
def gameOver(playSurface):
    gameOverFont = pygame.font.Font('arial.ttf',72)
    gameOverSurf = gameOverFont.render('Game Over', True, greyColour)
    gameOverRect = gameOverSurf.get_rect()
    gameOverRect.midtop = (320, 10)
    playSurface.blit(gameOverSurf, gameOverRect)
    pygame.display.flip()
    time.sleep(5)
    pygame.quit()
    sys.exit()

# 定义main函数
def main():
    # 初始化pygame
    pygame.init()
    fpsClock = pygame.time.Clock()
    # 创建pygame显示层
    playSurface = pygame.display.set_mode((640,480))
    pygame.display.set_caption('Raspberry Snake')

    # 初始化变量
    snakePosition = [100,100]
    snakeSegments = [[100,100],[80,100],[60,100]]
    raspberryPosition = [300,300]
    raspberrySpawned = 1
    direction = 'right'
    changeDirection = direction
    while True:
        # 检测例如按键等pygame事件
        for event in pygame.event.get():
            if event.type == QUIT:
                pygame.quit()
                sys.exit()
            elif event.type == KEYDOWN:
                # 判断键盘事件
                if event.key == K_RIGHT or event.key == ord('d'):
                    changeDirection = 'right'
                if event.key == K_LEFT or event.key == ord('a'):
                    changeDirection = 'left'
                if event.key == K_UP or event.key == ord('w'):
                    changeDirection = 'up'
                if event.key == K_DOWN or event.key == ord('s'):
                    changeDirection = 'down'
                if event.key == K_ESCAPE:
                    pygame.event.post(pygame.event.Event(QUIT))
        # 判断是否输入了反方向
        if changeDirection == 'right' and not direction == 'left':
            direction = changeDirection
        if changeDirection == 'left' and not direction == 'right':
            direction = changeDirection
        if changeDirection == 'up' and not direction == 'down':
            direction = changeDirection
        if changeDirection == 'down' and not direction == 'up':
            direction = changeDirection
        # 根据方向移动蛇头的坐标
        if direction == 'right':
            snakePosition[0] += 20
        if direction == 'left':
            snakePosition[0] -= 20
        if direction == 'up':
            snakePosition[1] -= 20
        if direction == 'down':
            snakePosition[1] += 20
        # 增加蛇的长度
        snakeSegments.insert(0,list(snakePosition))
        # 判断是否吃掉了树莓
        if snakePosition[0] == raspberryPosition[0] and snakePosition[1] == raspberryPosition[1]:
            raspberrySpawned = 0
        else:
            snakeSegments.pop()
        # 如果吃掉树莓，则重新生成树莓
        if raspberrySpawned == 0:
            x = random.randrange(1,32)
            y = random.randrange(1,24)
            raspberryPosition = [int(x*20),int(y*20)]
            raspberrySpawned = 1
        # 绘制pygame显示层
        playSurface.fill(blackColour)
        for position in snakeSegments:
            pygame.draw.rect(playSurface,whiteColour,Rect(position[0],position[1],20,20))
            pygame.draw.rect(playSurface,redColour,Rect(raspberryPosition[0], raspberryPosition[1],20,20))

        # 刷新pygame显示层
        pygame.display.flip()
        # 判断是否死亡
        if snakePosition[0] > 620 or snakePosition[0] < 0:
            gameOver(playSurface)
        if snakePosition[1] > 460 or snakePosition[1] < 0:
            for snakeBody in snakeSegments[1:]:
                if snakePosition[0] == snakeBody[0] and snakePosition[1] == snakeBody[1]:
                    gameOver(playSurface)
        # 控制游戏速度
        fpsClock.tick(5)

if __name__ == "__main__":
    main()
```


    ---------------------------------------------------------------------------
    
    ModuleNotFoundError                       Traceback (most recent call last)
    
    <ipython-input-79-d3464dde5262> in <module>
    ----> 1 import pygame,sys,time,random
          2 from pygame.locals import *
          3 # 定义颜色变量
          4 redColour = pygame.Color(255,0,0)
          5 blackColour = pygame.Color(0,0,0)


    ModuleNotFoundError: No module named 'pygame'


