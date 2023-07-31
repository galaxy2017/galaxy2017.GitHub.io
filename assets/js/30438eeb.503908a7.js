"use strict";(self.webpackChunkdocs_luomoe_com=self.webpackChunkdocs_luomoe_com||[]).push([[7266],{3905:(n,e,t)=>{t.d(e,{Zo:()=>p,kt:()=>g});var a=t(7294);function l(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function r(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,a)}return t}function i(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?r(Object(t),!0).forEach((function(e){l(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function s(n,e){if(null==n)return{};var t,a,l=function(n,e){if(null==n)return{};var t,a,l={},r=Object.keys(n);for(a=0;a<r.length;a++)t=r[a],e.indexOf(t)>=0||(l[t]=n[t]);return l}(n,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);for(a=0;a<r.length;a++)t=r[a],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(l[t]=n[t])}return l}var o=a.createContext({}),c=function(n){var e=a.useContext(o),t=e;return n&&(t="function"==typeof n?n(e):i(i({},e),n)),t},p=function(n){var e=c(n.components);return a.createElement(o.Provider,{value:e},n.children)},u="mdxType",m={inlineCode:"code",wrapper:function(n){var e=n.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(n,e){var t=n.components,l=n.mdxType,r=n.originalType,o=n.parentName,p=s(n,["components","mdxType","originalType","parentName"]),u=c(t),d=l,g=u["".concat(o,".").concat(d)]||u[d]||m[d]||r;return t?a.createElement(g,i(i({ref:e},p),{},{components:t})):a.createElement(g,i({ref:e},p))}));function g(n,e){var t=arguments,l=e&&e.mdxType;if("string"==typeof n||l){var r=t.length,i=new Array(r);i[0]=d;var s={};for(var o in e)hasOwnProperty.call(e,o)&&(s[o]=e[o]);s.originalType=n,s[u]="string"==typeof n?n:l,i[1]=s;for(var c=2;c<r;c++)i[c]=t[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},3587:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var a=t(7462),l=(t(7294),t(3905));const r={title:"Java\u7684\u6ce8\u89e3\u4e0e\u53cd\u5c04",sidebar_position:5},i=void 0,s={unversionedId:"Java/annotations",id:"Java/annotations",title:"Java\u7684\u6ce8\u89e3\u4e0e\u53cd\u5c04",description:"\u4e00\u3001\u6ce8\u89e3",source:"@site/docs/Java/annotations.md",sourceDirName:"Java",slug:"/Java/annotations",permalink:"/docs/Java/annotations",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Java\u7684\u6ce8\u89e3\u4e0e\u53cd\u5c04",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"IO\u6d41",permalink:"/docs/Java/io"},next:{title:"Java\u7684\u53cd\u5c04",permalink:"/docs/Java/reflection"}},o={},c=[{value:"\u4e00\u3001\u6ce8\u89e3",id:"\u4e00\u6ce8\u89e3",level:2},{value:"1.1\u4ec0\u4e48\u662f\u6ce8\u89e3",id:"11\u4ec0\u4e48\u662f\u6ce8\u89e3",level:3},{value:"1.2 \u5185\u7f6e\u6ce8\u89e3",id:"12-\u5185\u7f6e\u6ce8\u89e3",level:3},{value:"1.3 \u5143\u6ce8\u89e3",id:"13-\u5143\u6ce8\u89e3",level:3},{value:"1.4 \u81ea\u5b9a\u4e49\u6ce8\u89e3",id:"14-\u81ea\u5b9a\u4e49\u6ce8\u89e3",level:3},{value:"\u4e8c\u3001 \u53cd\u5c04",id:"\u4e8c-\u53cd\u5c04",level:2},{value:"2.1 \u83b7\u5f97\u53cd\u5c04\u5bf9\u8c61",id:"21-\u83b7\u5f97\u53cd\u5c04\u5bf9\u8c61",level:3},{value:"2.2 \u5f97\u5230class\u7c7b\u7684\u51e0\u79cd\u65b9\u5f0f",id:"22-\u5f97\u5230class\u7c7b\u7684\u51e0\u79cd\u65b9\u5f0f",level:3},{value:"2.3 \u6240\u6709\u7c7b\u578b\u7684Class\u5bf9\u8c61",id:"23-\u6240\u6709\u7c7b\u578b\u7684class\u5bf9\u8c61",level:3},{value:"2.4 \u7c7b\u52a0\u8f7d\u5185\u5b58\u5206\u6790",id:"24-\u7c7b\u52a0\u8f7d\u5185\u5b58\u5206\u6790",level:3},{value:"2.5 \u5206\u6790\u7c7b\u521d\u59cb\u5316",id:"25-\u5206\u6790\u7c7b\u521d\u59cb\u5316",level:3},{value:"2.5 \u7c7b\u52a0\u8f7d\u5668",id:"25-\u7c7b\u52a0\u8f7d\u5668",level:3},{value:"2.6 \u83b7\u53d6\u7c7b\u7684\u8fd0\u884c\u65f6\u7ed3\u6784",id:"26-\u83b7\u53d6\u7c7b\u7684\u8fd0\u884c\u65f6\u7ed3\u6784",level:3},{value:"2.7 \u52a8\u6001\u521b\u5efa\u5bf9\u8c61\u6267\u884c\u65b9\u6cd5",id:"27-\u52a8\u6001\u521b\u5efa\u5bf9\u8c61\u6267\u884c\u65b9\u6cd5",level:3},{value:"2.8 \u6027\u80fd\u5bf9\u6bd4\u5206\u6790",id:"28-\u6027\u80fd\u5bf9\u6bd4\u5206\u6790",level:3},{value:"2.9 \u83b7\u53d6\u6cdb\u578b\u4fe1\u606f",id:"29-\u83b7\u53d6\u6cdb\u578b\u4fe1\u606f",level:3},{value:"2.10 \u83b7\u53d6\u6ce8\u89e3\u4fe1\u606f",id:"210-\u83b7\u53d6\u6ce8\u89e3\u4fe1\u606f",level:3}],p={toc:c};function u(n){let{components:e,...t}=n;return(0,l.kt)("wrapper",(0,a.Z)({},p,t,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u4e00\u6ce8\u89e3"},"\u4e00\u3001\u6ce8\u89e3"),(0,l.kt)("h3",{id:"11\u4ec0\u4e48\u662f\u6ce8\u89e3"},"1.1\u4ec0\u4e48\u662f\u6ce8\u89e3"),(0,l.kt)("p",null,"Annotation\u6ce8\u89e3"),(0,l.kt)("p",null,"Annotation\u7684\u4f5c\u7528\uff1a\u4e0d\u662f\u7a0b\u5e8f\u672c\u8eab\uff0c\u53ef\u4ee5\u5bf9\u7a0b\u5e8f\u505a\u51fa\u89e3\u91ca\u3002\u53ef\u4ee5\u88ab\u5176\u4ed6\u7a0b\u5e8f\uff08\u6bd4\u5982 \u7f16\u8bd1\u5668\u7b49\uff09\u8bfb\u53d6"),(0,l.kt)("p",null,'annotation\u7684\u683c\u5f0f\uff1a \u6ce8\u89e3\u662f\u4ee5 \u201d@\u6ce8\u91ca\u540d\u201c \u518d\u4ee3\u7801\u4e2d\u5b58\u5728\u7684\uff0c\u8fd8\u53ef\u4ee5\u6dfb\u52a0\u4e00\u5199\u53c2\u6570\u503c\uff0c\u4f8b\u5982@SupperWarnings(value = "unchecked")'),(0,l.kt)("p",null,"Annotation\u5728\u54ea\u53ef\u4ee5\u4f7f\u7528\uff1f \u53ef\u4ee5\u5728package\uff0cclass\uff0cmethod\uff0cfield\u7b49\u4e0a\u9762\uff0c\u76f8\u5f53\u4e8e\u7ed9\u4ed6\u4eec\u6dfb\u52a0\u989d\u5916\u7684\u8f85\u52a9\u4fe1\u606f\uff0c\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u53cd\u5c04\u673a\u5236\u7f16\u7a0b\u5b9e\u73b0\u5bf9\u8fd9\u4e9b\u5143\u6570\u636e\u7684\u8bbf\u95ee"),(0,l.kt)("h3",{id:"12-\u5185\u7f6e\u6ce8\u89e3"},"1.2 \u5185\u7f6e\u6ce8\u89e3"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"@Override"),"  \u91cd\u5199"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"@Deprecated"),"  \u4e0d\u9f13\u52b1\u4f7f\u7528\uff0c\u4f46\u662f\u53ef\u4ee5\u4f7f\u7528"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"@SuppreWarning"),"   \u8b66\u544a"),(0,l.kt)("h3",{id:"13-\u5143\u6ce8\u89e3"},"1.3 \u5143\u6ce8\u89e3"),(0,l.kt)("p",null,"\u5143\u6ce8\u89e3\u7684\u4f5c\u7528\u662f\u8d1f\u8d23\u6ce8\u89e3\u5176\u4ed6\u6ce8\u89e3"),(0,l.kt)("p",null,"@Target"),(0,l.kt)("p",null,"@Retention"),(0,l.kt)("p",null,"@Documented"),(0,l.kt)("p",null,"@ Inherited"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"package opp2;\n\nimport java.lang.annotation.*;\n\npublic class demo01 {\n    public void test(){\n\n    }\n}\n\n//\u5b9a\u4e49\u4e00\u4e2a\u6ce8\u89e3\n//Target \u8868\u793a\u6211\u4eec\u7684\u6ce8\u89e3\u53ef\u4ee5\u7528\u5728\u4e0a\u9762\u5730\u65b9\n@Target(value = {ElementType.METHOD, ElementType.TYPE})\n\n//Retention \u8868\u793a\u6211\u4eec\u7684\u6ce8\u89e3\u5728\u4e0a\u9762\u5730\u65b9\u6709\u6548\n//RUNTIME >CLASS >SOURCES\n@Retention(value = RetentionPolicy.RUNTIME)\n\n//Documented \u8868\u793a\u91ca\u653e\u5c06\u6211\u4eec\u7684\u6ce8\u89e3\u751f\u6210\u5728JavaDoc\u4e2d\n@Documented\n\n//Inherited \u5b50\u7c7b\u53ef\u4ee5\u7ee7\u627f\u7236\u7c7b\u7684\u6ce8\u89e3\n@Inherited\n@interface MyAnnotation{\n\n}\n")),(0,l.kt)("h3",{id:"14-\u81ea\u5b9a\u4e49\u6ce8\u89e3"},"1.4 \u81ea\u5b9a\u4e49\u6ce8\u89e3"),(0,l.kt)("p",null,"\u4f7f\u7528@interface \u81ea\u5b9a\u4e49\u6ce8\u89e3\u65f6\uff0c\u81ea\u52a8\u7ee7\u627fimport java.lang.annotation.Annotation\u63a5\u53e3"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"@interface\u7528\u6765\u58f0\u660e\u4e00\u4e2a\u6ce8\u89e3\uff0c\u683c\u5f0f\uff1a public @interface \u6ce8\u89e3\u540d{\u5b9a\u4e49\u5185\u5bb9}"),(0,l.kt)("li",{parentName:"ul"},"\u5176\u4e2d\u7684\u6bcf\u4e00\u4e2a\u65b9\u6cd5\u5b9e\u9645\u4e0a\u58f0\u660e\u7684\u662f\u4e00\u4e2a\u914d\u7f6e\u51fd\u6570"),(0,l.kt)("li",{parentName:"ul"},"\u65b9\u6cd5\u7684\u540d\u79f0\u5c31\u662f\u53c2\u6570\u7684\u540d\u79f0"),(0,l.kt)("li",{parentName:"ul"},"\u8fd4\u56de\u503c\u7c7b\u578b\u5c31\u662f\u53c2\u6570\u7684\u7c7b\u578b\uff08\u8fd4\u56de\u503c\u53ea\u80fd\u662f\u57fa\u672c\u7c7b\u578b\uff0cclass\uff0cstring\uff0cenum\uff09"),(0,l.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u901a\u8fc7default\u6765\u58f0\u660e\u53c2\u6570\u9ed8\u8ba4\u503c"),(0,l.kt)("li",{parentName:"ul"},"\u5982\u679c\u53ea\u6709\u4e00\u4e2a\u53c2\u6570\u6210\u5458\uff0c\u4e00\u822c\u53c2\u6570\u540d\u4e3avalue"),(0,l.kt)("li",{parentName:"ul"},"\u6ce8\u89e3\u5143\u7d20\u5fc5\u987b\u8981\u6709\u503c\uff0c\u6211\u4eec\u5b9a\u4e49\u6ce8\u89e3\u5143\u7d20\u65f6\uff0c\u7ecf\u5e38\u4f7f\u7528\u7a7a\u5b57\u7b26\u4e32\uff0c0\u4f5c\u4e3a\u9ed8\u8ba4\u503c")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'package opp2;\n\nimport java.lang.annotation.ElementType;\nimport java.lang.annotation.Retention;\nimport java.lang.annotation.RetentionPolicy;\nimport java.lang.annotation.Target;\n\npublic class demo02 {\n\n    //\u6ce8\u89e3\u53ef\u4ee5\u663e\u793a\u8d4b\u503c,\u5982\u679c\u6ca1\u6709\u8d4b\u503c\u5c31\u5fc5\u987b\u8d4b\u503c\n    @MyAnnotation2(name = "\u949f\u79bb")\n    public void test(){}\n\n    @MyAnnotation3("")\n    public void test2(){}\n}\n\n\n@Target(value = {ElementType.METHOD, ElementType.TYPE})\n@Retention(value = RetentionPolicy.RUNTIME)\n@interface MyAnnotation2{\n    //\u76f4\u63a5\u7684\u53c2\u6570\uff1a\u53c2\u6570\u7c7b\u578b +\u53c2\u6570\u540d\uff08\uff09\n    String name();\n    String color() default "";\n    int age() default 0;\n    int id() default -1;\n\n    String[] schools() default {""};\n}\n\n\n@Target(value = {ElementType.METHOD, ElementType.TYPE})\n@Retention(value = RetentionPolicy.RUNTIME)\n@interface MyAnnotation3{\n    String value();\n}\n')),(0,l.kt)("h2",{id:"\u4e8c-\u53cd\u5c04"},"\u4e8c\u3001 \u53cd\u5c04"),(0,l.kt)("p",null,"java.Reflection"),(0,l.kt)("p",null,"\u65f6Java\u88ab\u89c6\u4e3a\u52a8\u6001\u8bed\u8a00\u7684\u5173\u952e\uff0c\u53cd\u5c04\u673a\u5236\u5141\u8bb8\u7a0b\u5e8f\u5728\u6267\u884c\u671f\u501f\u52a9Reflection api\u83b7\u5f97\u4efb\u4f55\u7c7b\u7684\u4fe1\u606f\uff0c\u5e76\u80fd\u76f4\u63a5\u64cd\u4f5c\u4efb\u610f\u5bf9\u8c61\u7684\u5185\u90e8\u5c5e\u6027\u53ca\u65b9\u6cd5\u3002"),(0,l.kt)("h3",{id:"21-\u83b7\u5f97\u53cd\u5c04\u5bf9\u8c61"},"2.1 \u83b7\u5f97\u53cd\u5c04\u5bf9\u8c61"),(0,l.kt)("p",null,"getClass()"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'package opp2;\n\n/**\n * \u4ec0\u4e48\u662f\u53cd\u5c04\n */\npublic class demo03 {\n    public static void main(String[] args) throws ClassNotFoundException {\n        Class<?> c1 = Class.forName("opp2.User");\n        Class<?> c2 = Class.forName("opp2.User");\n        Class<?> c3 = Class.forName("opp2.User");\n        System.out.println(c1);\n\n        //\u4e00\u4e2a\u7c7b\u5728\u5185\u5b58\u4e2d\u53ea\u6709\u4e00\u4e2aclass\u5bf9\u8c61\n        //\u4e00\u4e2a\u7c7b\u88ab\u52a0\u8f7d\u540e\uff0c\u7c7b\u7684\u6574\u4e2a\u8fc7\u7a0b\u90fd\u4f1a\u88ab\u5c01\u88c5\u5728Class\u5bf9\u8c61\u4e2d\n        System.out.println(c1.hashCode());\n        System.out.println(c2.hashCode());\n        System.out.println(c3.hashCode());\n\n\n\n    }\n}\n\n//\u5b9e\u4f53\u7c7b\nclass User{\n    private String name;\n    private int id;\n    private int age;\n\n    public User(){\n\n    }\n\n    public User(String name, int id, int age) {\n        this.name = name;\n        this.id = id;\n        this.age = age;\n    }\n\n    public String getName() {\n        return name;\n    }\n\n    public void setName(String name) {\n        this.name = name;\n    }\n\n    public int getId() {\n        return id;\n    }\n\n    public void setId(int id) {\n        this.id = id;\n    }\n\n    public int getAge() {\n        return age;\n    }\n\n    public void setAge(int age) {\n        this.age = age;\n    }\n\n    @Override\n    public String toString() {\n        return "User{" +\n                "name=\'" + name + \'\\\'\' +\n                ", id=" + id +\n                ", age=" + age +\n                \'}\';\n    }\n}\n')),(0,l.kt)("h3",{id:"22-\u5f97\u5230class\u7c7b\u7684\u51e0\u79cd\u65b9\u5f0f"},"2.2 \u5f97\u5230class\u7c7b\u7684\u51e0\u79cd\u65b9\u5f0f"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://img.up.cdn.nahida.cn/typora-user-images/image-20220809214840457.png",alt:"image-20220809214840457"})),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'package opp2;\n\npublic class demo04 {\n    public static void main(String[] args) throws ClassNotFoundException {\n        Person person = new student();\n        System.out.println(person.name);\n\n        //\u65b9\u5f0f\u4e00 \uff1a\u901a\u8fc7\u5bf9\u8c61\u83b7\u5f97\n        Class c1 = person.getClass();\n        System.out.println(c1.hashCode());\n\n        //\u65b9\u6cd5\u4e8c\uff1aforName \u83b7\u5f97\n        Class c2 = Class.forName("opp2.student");\n        System.out.println(c2.hashCode());\n\n        //\u65b9\u6cd5\u4e09\uff1a \u7c7b\u540d.class\u83b7\u5f97\n        Class c3 = student.class;\n        System.out.println(c3.hashCode());\n\n        //\u65b9\u6cd5\u56db \u57fa\u672c\u5185\u7f6e\u7c7b\u578b\u7684\u5305\u88c5\u7c7b\u90fd\u6709\u4e00\u4e2aType\u5c5e\u6027\n        Class c4 = Integer.TYPE;\n        System.out.println(c4);\n\n        //\u65b9\u6cd5\u4e94\uff1a\u83b7\u5f97\u7236\u7c7b\u7c7b\u578b\n        Class c5 = c1.getSuperclass();\n        System.out.println(c5);\n    }\n}\n\nclass Person{\n    String name;\n    public Person(){}\n\n    public Person(String name) {\n        this.name = name;\n    }\n\n    @Override\n    public String toString() {\n        return "Person{" +\n                "name=\'" + name + \'\\\'\' +\n                \'}\';\n    }\n}\nclass student extends Person{\n    public  student(){\n        this.name = "\u5b66\u751f";\n    }\n}\n\nclass teacher extends Person{\n    public teacher(String name) {\n        this.name = "\u8001\u5e08";\n    }\n}\n')),(0,l.kt)("h3",{id:"23-\u6240\u6709\u7c7b\u578b\u7684class\u5bf9\u8c61"},"2.3 \u6240\u6709\u7c7b\u578b\u7684Class\u5bf9\u8c61"),(0,l.kt)("p",null,"class\uff1a\u5916\u90e8\u7c7b\u3001\u6210\u5458\uff08\u5185\u90e8\u6210\u5458\u3001\u5916\u90e8\u6210\u5458\uff09\uff0c\u5c40\u90e8\u5185\u90e8\u7c7b\uff0c\u533f\u540d\u5185\u90e8\u7c7b"),(0,l.kt)("p",null,"interface\uff1a\u63a5\u53e3"),(0,l.kt)("p",null,"[]  \uff1a\u6570\u7ec4"),(0,l.kt)("p",null,"enum\uff1a\u679a\u4e3e"),(0,l.kt)("p",null,"annotation\uff1a\u6ce8\u89e3@interface"),(0,l.kt)("p",null,"primitive type\uff1a\u57fa\u672c\u6570\u636e\u7c7b\u578b"),(0,l.kt)("p",null,"void"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"package opp2;\n\nimport javax.xml.bind.Element;\n\npublic class demo {\n    public static void main(String[] args) {\n        Class c1 = Object.class;    //\u7c7b\n        Class c2 = Comparable.class;   //\u63a5\u53e3\n        Class c3 = String[].class;     //\u4e00\u7ef4\u6570\u7ec4\n        Class c4 = int[][].class;   //\u4e8c\u7ef4\u6570\u7ec4\n        Class c5 = Override.class;   //\u6ce8\u89e3\n        Class c6 = Element.class;    //\u679a\u4e3e\n        Class c7 = Integer.class;    //\u57fa\u672c\u6570\u636e\u7c7b\u578b\n        Class c8 = void.class;     //void\n        Class c9 = Class.class;    //Class\n\n        System.out.println(c1);\n        System.out.println(c2);\n        System.out.println(c3);\n        System.out.println(c4);\n        System.out.println(c5);\n        System.out.println(c6);\n        System.out.println(c7);\n        System.out.println(c8);\n        System.out.println(c9);\n\n        int[] a = new int[10];\n        int[] b = new int[100];\n        System.out.println(a.getClass().hashCode());\n        System.out.println(b.getClass().hashCode());     //\u53ea\u8981\u5143\u7d20\u7c7b\u578b\u4e0e\u7ef4\u5ea6\u4e00\u6837\uff0c\u5c31\u662f\u540c\u4e00\u4e2aclass\n    }\n}\n")),(0,l.kt)("h3",{id:"24-\u7c7b\u52a0\u8f7d\u5185\u5b58\u5206\u6790"},"2.4 \u7c7b\u52a0\u8f7d\u5185\u5b58\u5206\u6790"),(0,l.kt)("p",null,"\u52a0\u8f7d------\x3e\u94fe\u63a5----\x3e\u521d\u59cb\u5316"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'package opp2;\n\npublic class demo06 {\n    public static void main(String[] args) {\n        A a = new A();\n        System.out.println(a.m);\n        /**\n         * 1.\u3010\u52a0\u8f7d\u3011\u5230\u5185\u5b58\uff0c\u4f1a\u4ea7\u751f\u4e00\u4e2a\u7c7b\u5bf9\u5e94\u7684Class\u5bf9\u8c61\n         * 2.\u3010\u94fe\u63a5\u3011\uff0c\u94fe\u63a5\u540e\uff0c m = 0\n         * 3.\u3010\u521d\u59cb\u5316\u3011\uff1a\n         *  <clint>(){\n         *      system.out.println("A\u7c7b\u7684\u9759\u6001\u4ee3\u7801\u5757\u521d\u59cb\u5316");\n         *      m = 300;\n         *      m = 100;\n         *  }\n         */\n    }\n}\n\nclass A{\n    static {\n        System.out.println("A\u7c7b\u7684\u9759\u6001\u4ee3\u7801\u5757");\n        m = 300;\n    }\n\n    /**\n     * m = 300\n     *    \u2193\n     * m = 100\n     */\n    static int m = 100;\n    public A(){\n        System.out.println("A\u7c7b\u7684\u65e0\u53c2\u6784\u9020\u521d\u59cb\u5316");\n    }\n}\n')),(0,l.kt)("h3",{id:"25-\u5206\u6790\u7c7b\u521d\u59cb\u5316"},"2.5 \u5206\u6790\u7c7b\u521d\u59cb\u5316"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u7c7b\u7684\u4e3b\u52a8\u5f15\u7528\uff08\u4e00\u5b9a\u4f1a\u53d1\u751f\u521d\u59cb\u5316\uff09"),(0,l.kt)("li",{parentName:"ul"},"\u7c7b\u7684\u88ab\u52a8\u5f15\u7528\uff08\u4e0d\u4f1a\u53d1\u751f\u7c7b\u7684\u521d\u59cb\u5316\uff09")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'package opp2;\n\npublic class demo07 {\n\n    static {\n        System.out.println("main\u7c7b\u88ab\u52a0\u8f7d");\n    }\n\n    public static void main(String[] args) throws ClassNotFoundException {\n        //1. \u4e3b\u52a8\u5f15\u7528\n        S s = new S();\n        //\u53cd\u5c04\u4e5f\u4f1a\u4e3b\u52a8\u5f15\u7528\n        Class.forName("opp.demo07.S");\n\n        //2. \u4e0d\u4f1a\u4ea7\u751f\u7c7b\u7684\u5f15\u7528\n        System.out.println(S.b);   //\u9759\u6001\u57df \u8bbf\u95ee\n        S[] array = new S[5];     //\u6570\u7ec4\u8bbf\u95ee\n        System.out.println(S.M);   //\u8bbf\u95ee\u5e38\u91cf\n    }\n}\n\nclass F{\n    static int b = 2;\n    static {\n        System.out.println("\u7236\u7c7b\u88ab\u52a0\u8f7d");\n    }\n}\n\nclass S extends F{\n    static {\n        System.out.println("\u5b50\u7c7b\u88ab\u52a0\u8f7d");\n        m = 300;\n    }\n    static int m = 100;\n    static final int M = 1;    //\u5e38\u91cf\n}\n')),(0,l.kt)("h3",{id:"25-\u7c7b\u52a0\u8f7d\u5668"},"2.5 \u7c7b\u52a0\u8f7d\u5668"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://img.up.cdn.nahida.cn/typora-user-images/image-20220810101042291.png",alt:"image-20220810101042291"})),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'package opp2;\n\npublic class demo08 {\n    public static void main(String[] args) throws ClassNotFoundException {\n        //\u83b7\u53d6\u7cfb\u7edf\u7c7b\u7684\u52a0\u8f7d\u5668\n        ClassLoader systemClassLoader = ClassLoader.getSystemClassLoader();\n        System.out.println(systemClassLoader);\n        //\u83b7\u53d6\u7cfb\u7edf\u7c7b\u52a0\u8f7d\u5668\u7684\u7236\u7c7b\u52a0\u8f7d\u5668->\u6269\u5c55\u52a0\u8f7d\u5668\n        ClassLoader parent = systemClassLoader.getParent();\n        System.out.println(parent);\n\n        //\u83b7\u53d6\u6269\u5c55\u7c7b\u7684\u7236\u7c7b\u52a0\u8f7d\u5668---\x3e\u6839\u52a0\u8f7d\u5668\uff08c/c++ ,java\u65e0\u6cd5\u83b7\u53d6\uff0c\u663e\u793a\u4e3a null\uff09\n        ClassLoader parent1 = parent.getParent();\n        System.out.println(parent1);    //null\n\n        //\u6d4b\u8bd5\u5f53\u524d\u7c7b\u662f\u54ea\u4e2a\u52a0\u8f7d\u5668\u52a0\u8f7d\u7684\n        ClassLoader aClass = Class.forName("opp2.demo08").getClassLoader();\n        System.out.println(aClass);\n\n        //\u6d4b\u8bd5JDK\n        aClass = Class.forName("java.lang.Object").getClassLoader();\n        System.out.println(aClass);   //null\n\n\n        //\u5982\u4f55\u8ba9\u83b7\u5f97\u7cfb\u7edf\u7c7b\u52a0\u8f7d\u5668\u53ef\u4ee5\u52a0\u8f7d\u7684\u8def\u5f84\n        System.out.println(System.getProperty("java.class.path"));\n\n    }\n}\n')),(0,l.kt)("h3",{id:"26-\u83b7\u53d6\u7c7b\u7684\u8fd0\u884c\u65f6\u7ed3\u6784"},"2.6 \u83b7\u53d6\u7c7b\u7684\u8fd0\u884c\u65f6\u7ed3\u6784"),(0,l.kt)("p",null,"\u901a\u8fc7\u53cd\u5c04\u83b7\u53d6\u8fd0\u884c\u65f6\u7c7b\u7684\u5b8c\u6574\u7ed3\u6784"),(0,l.kt)("p",null,"Field\u3001Method\u3001Constructor\u3001Superclass\u3001Interface\u3001Annotation"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'package opp2;\n\nimport java.lang.reflect.Constructor;\nimport java.lang.reflect.Field;\nimport java.lang.reflect.Method;\n\npublic class demo09 {\n    public static void main(String[] args) throws ClassNotFoundException, NoSuchFieldException, NoSuchMethodException {\n        Class<?> c1 = Class.forName("opp2.User");\n\n        User user = new User();\n        //c1 = user.getClass();\n\n        //\u83b7\u5f97\u7c7b\u7684\u540d\u5b57\n        System.out.println(c1.getName());\n        System.out.println(c1.getSimpleName());\n\n        //\u83b7\u5f97\u7c7b\u7684\u5c5e\u6027\n        Field[] field = c1.getFields();   //\u53ea\u80fd\u627e\u5230public\u5c5e\u6027\n//        for (Field field1 : field){\n//            System.out.println(field1);\n//        }\n//\n        field = c1.getDeclaredFields();\n        for (Field fields : field){        //\u627e\u5230\u5168\u90e8\u5c5e\u6027\n            System.out.println(fields);\n        }\n\n        Field name = c1.getDeclaredField("name");//\u83b7\u5f97\u6307\u5b9a\u5c5e\u6027\u7684\u503c\n        System.out.println(name);\n\n        //\u83b7\u5f97\u7c7b\u7684\u65b9\u6cd5\n        System.out.println("=====================================================");\n        Method[] methods = c1.getMethods();         //\u83b7\u53d6\u672c\u7c7b\u53ca\u7236\u7c7b\u7684\u5168\u90e8public\u65b9\u6cd5\n        for (Method method :methods){\n            System.out.println(method);\n        }\n\n        methods = c1.getDeclaredMethods();                  //\u83b7\u53d6\u672c\u7c7b\u7684\u6240\u6709\u65b9\u6cd5\n        System.out.println("============================");\n        for (Method method:methods){\n\n            System.out.println("getDeclaredMethods  " + method );\n        }\n\n        //\u83b7\u5f97\u6307\u5b9a\u65b9\u6cd5\n        System.out.println("=======================");\n        Method getName = c1.getMethod("getName",null);\n        Method setName = c1.getMethod("setName",String.class);\n        System.out.println(getName);\n        System.out.println(setName);\n\n        //\u83b7\u5f97\u6784\u9020\u5668\n        System.out.println("======================");\n        Constructor[] constructors = c1.getConstructors();\n        for (Constructor constructor:constructors){\n            System.out.println(constructor);\n        }\n        constructors = c1.getDeclaredConstructors();\n        for (Constructor constructor: constructors){\n            System.out.println("getDeclaredConstructors" + constructor);\n        }\n\n        //\u83b7\u5f97\u6307\u5b9a\u6784\u9020\u5668\n        Constructor<?> declaredConstructor = c1.getDeclaredConstructor(String.class, int.class, int.class);\n        System.out.println("\u6307\u5b9a" + declaredConstructor);\n\n    }\n}\n')),(0,l.kt)("h3",{id:"27-\u52a8\u6001\u521b\u5efa\u5bf9\u8c61\u6267\u884c\u65b9\u6cd5"},"2.7 \u52a8\u6001\u521b\u5efa\u5bf9\u8c61\u6267\u884c\u65b9\u6cd5"),(0,l.kt)("p",null,"\u80fd\u505a\u5565\uff1f"),(0,l.kt)("p",null,"\u6b65\u9aa4\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u901a\u8fc7Class\u7c7b\u7684getDeclaredConstructor(Class ... parameterType)\u83b7\u53d6\u672c\u7c7b\u7684\u6307\u5b9a\u5f62\u53c2\u7c7b\u578b\u7684\u6784\u9020\u5668"),(0,l.kt)("li",{parentName:"ol"},"\u5411\u6784\u9020\u5668\u7684\u884c\u53c2\u4e2d\u4f20\u9012\u4e00\u4e2a\u5bf9\u8c61\u7d20\u7ec4\u8fdb\u53bb\uff0c\u91cc\u9762\u5305\u542b\u4e86\u6784\u9020\u5668\u4e2d\u6240\u9700\u7684\u5404\u4e2a\u53c2\u6570"),(0,l.kt)("li",{parentName:"ol"},"\u901a\u8fc7Constructor\u5b9e\u4f8b\u5316\u5bf9\u8c61")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'package opp2;\n\nimport java.lang.reflect.Constructor;\nimport java.lang.reflect.Field;\nimport java.lang.reflect.InvocationTargetException;\nimport java.lang.reflect.Method;\n\npublic class demo10 {\n    public static void main(String[] args) throws ClassNotFoundException, InstantiationException, IllegalAccessException, NoSuchMethodException, InvocationTargetException, NoSuchFieldException {\n\n        //\u83b7\u5f97\u5bf9\u8c61\n        Class<?> c1 = Class.forName("opp2.User");\n\n        //\u6784\u9020\u5bf9\u8c61\n        User user = (User)c1.newInstance();   //\u672c\u8d28\u662f\u6784\u9020\u4e86\u65e0\u53c2\u6784\u9020\u5668\n        System.out.println(user);\n\n        //\u901a\u8fc7\u6784\u9020\u5668\u521b\u5efa\u5bf9\u8c61\n        Constructor<?> declaredConstructor = c1.getDeclaredConstructor(String.class, int.class, int.class);\n        User user1 = (User) declaredConstructor.newInstance("\u6469\u62c9\u514b\u65af",001,18);\n        System.out.println(user1);\n\n        //\u901a\u8fc7\u53cd\u5c04\u8c03\u7528\u666e\u901a\u65b9\u6cd5\n        User user2 =(User) c1.newInstance();\n        //\u901a\u8fc7\u53cd\u5c04\u83b7\u53d6\u4e00\u4e2a\u65b9\u6cd5\n        Method setName = c1.getDeclaredMethod("setName", String.class);\n        //invoke:\u6fc0\u6d3b\n        //\uff08\u5bf9\u8c61\uff0c\u65b9\u6cd5\u7684\u503c\uff09\n        setName.invoke(user2,"\u5df4\u5df4\u6258\u65af");\n        System.out.println(user2.getName());\n\n\n        //\u901a\u8fc7\u53cd\u5c04\u64cd\u4f5c\u5c5e\u6027\n        User user3 = (User) c1.newInstance();\n        Field name = c1.getDeclaredField("name");\n\n        name.setAccessible(true);   //\u5173\u95ed\u5b89\u5168\u68c0\u6d4b\u3002\u56e0\u4e3a\u539f\u6765\u7684\u7684\u5c5e\u6027\u662fprivate\uff0c\u4e0d\u80fd\u76f4\u63a5\u8bbf\u95ee\uff0c\u6240\u4ee5\u9700\u8981\u5173\u95ed\u5b89\u5168\u68c0\u6d4b\n        name.set(user3,"\u5df4\u5c14\u6cfd\u5e03");\n        System.out.println(user3.getName());\n\n\n    }\n}\n')),(0,l.kt)("h3",{id:"28-\u6027\u80fd\u5bf9\u6bd4\u5206\u6790"},"2.8 \u6027\u80fd\u5bf9\u6bd4\u5206\u6790"),(0,l.kt)("p",null,"setAccessible\uff1a\u542f\u52a8\u548c\u7981\u7528\u8bbf\u95ee\u5b89\u5168\u68c0\u67e5\u7684\u5f00\u5173\u3002\u53c2\u6570\u503c\u4e3atrue\u5219\u6307\u53cd\u5c04\u7684\u5bf9\u8c61\u5728\u4f7f\u7528\u65f6\u5e94\u8be5\u53d6\u6d88java\u8bed\u8a00\u8bbf\u95ee\u68c0\u67e5"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u63d0\u9ad8\u53cd\u5c04\u6548\u7387\u3002\u5982\u679c\u4ee3\u7801\u4e2d\u5fc5\u987b\u4f7f\u7528\u53cd\u5c04\uff0c\u800c\u8be5\u53e5\u4ee3\u7801\u9700\u8981\u9891\u53d1\u7684\u88ab\u8c03\u7528\uff0c\u90a3\u4e48\u8bf7\u8bbe\u7f6e\u4e3atrue"),(0,l.kt)("li",{parentName:"ul"},"\u4f7f\u5f97\u539f\u672c\u65e0\u6cd5\u8bbf\u95ee\u7684\u79c1\u6709\u6210\u5458\u4e5f\u53ef\u4ee5\u8bbf\u95ee")),(0,l.kt)("p",null,"\u53c2\u6570\u503c\u4e3afalse\u5219\u6307\u53cd\u5c04\u7684\u5bf9\u8c61\u5728\u4f7f\u7528\u65f6\u5bf9java\u8bed\u8a00\u8fdb\u884c\u8bbf\u95ee\u68c0\u67e5"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'package opp2;\n\nimport java.lang.reflect.InvocationTargetException;\nimport java.lang.reflect.Method;\n\npublic class demo11 {\n    public static void test1(){\n        User user = new User();\n        long startTime = System.currentTimeMillis();\n        for (int i = 0; i < 1000000000; i++) {\n            user.getName();\n        }\n        long endTime = System.currentTimeMillis();\n        System.out.println("\u666e\u901a\u65b9\u6cd5\u6267\u884c10\u4ebf\u6b21  " + (endTime-startTime)+"ms");\n    }\n\n    public static void test2() throws NoSuchMethodException, InvocationTargetException, IllegalAccessException {\n        User user = new User();\n        Class c1 = user.getClass();\n        Method getName = c1.getDeclaredMethod("getName", null);\n        long startTime = System.currentTimeMillis();\n        for (int i = 0; i < 1000000000; i++) {\n            getName.invoke(user,null);\n        }\n        long endTime = System.currentTimeMillis();\n        System.out.println("\u6620\u5c04\u65b9\u6cd5\u6267\u884c10\u4ebf\u6b21  " + (endTime-startTime) +"ms");\n    }\n\n    public static void test3() throws NoSuchMethodException, InvocationTargetException, IllegalAccessException {\n        User user = new User();\n        Class c1 = user.getClass();\n        Method getName = c1.getDeclaredMethod("getName", null);\n        getName.setAccessible(true);\n\n        long startTime = System.currentTimeMillis();\n        for (int i = 0; i < 1000000000; i++) {\n            getName.invoke(user,null);\n        }\n        long endTime = System.currentTimeMillis();\n        System.out.println("setAccessible\u6620\u5c04\u65b9\u6cd5\u6267\u884c10\u4ebf\u6b21  " + (endTime-startTime)+"ms");\n    }\n\n    public static void main(String[] args) throws InvocationTargetException, NoSuchMethodException, IllegalAccessException {\n        test1();\n        test2();\n        test3();\n    }\n\n}\n')),(0,l.kt)("h3",{id:"29-\u83b7\u53d6\u6cdb\u578b\u4fe1\u606f"},"2.9 \u83b7\u53d6\u6cdb\u578b\u4fe1\u606f"),(0,l.kt)("p",null,"Java\u91c7\u7528\u6cdb\u578b\u64e6\u9664\u7684\u673a\u5236\u6765\u5f15\u5165\u6cdb\u578b\uff0cJava\u4e2d\u7684\u6cdb\u578b\u4ec5\u4ec5\u662f\u7ed9\u7f16\u8f91\u5668javac\u4f7f\u7528\u7684\uff0c\u786e\u4fdd\u6570\u636e\u7684\u5b89\u5168\u6027\u548c\u514d\u53bb\u5f3a\u5236\u7c7b\u578b\u8f6c\u6362\u95ee\u9898\uff0c\u4f46\u662f\uff0c\u4e00\u65e6\u7f16\u8bd1\u5b8c\u6210\uff0c\u6240\u6709\u548c\u6cdb\u578b\u6709\u5173\u7684\u7c7b\u578b\u5168\u90e8\u64e6\u9664"),(0,l.kt)("p",null,"\u4e3a\u4e86\u901a\u8fc7\u53cd\u5c04\u64cd\u4f5c\u8fd9\u4e9b\u7c7b\u578b\uff0cJava\u65b0\u589e\u4e86ParameterizedType\uff0cGenericArrayType\uff0cTypeVariable\u548cWindcardType\u51e0\u79cd\u7c7b\u578b\u6765\u4ee3\u8868\u4e0d\u80fd\u88ab\u5f52\u4e00\u5230Class\u7c7b\u4e2d\u7684\u7c7b\u578b\u4f46\u662f\u53c8\u548c\u539f\u59cb\u7c7b\u578b\u9f50\u540d\u7684\u7c7b\u578b"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"ParameterizedType\uff1a\u8868\u793a\u4e00\u79cd\u53c2\u6570\u5316\u7c7b\u578b\uff0c\u4e0d\u5982Collection"),(0,l.kt)("li",{parentName:"ul"},"GenericArrayType\uff1a\u8868\u793a\u4e00\u79cd\u5143\u7d20\u7c7b\u578b\u662f\u53c2\u6570\u5316\u7c7b\u578b\u6216\u8005\u7c7b\u578b\u53d8\u91cf\u7684\u6570\u7ec4\u7c7b\u578b"),(0,l.kt)("li",{parentName:"ul"},"TypeVariable\uff1a\u662f\u5404\u79cd\u7c7b\u578b\u53d8\u91cf\u7684\u516c\u5171\u7236\u63a5\u53e3"),(0,l.kt)("li",{parentName:"ul"},"WindcardType\uff1a\u4ee3\u8868\u4e00\u79cd\u901a\u914d\u7b26\u7c7b\u578b\u7684\u516c\u793a")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'package opp2;\n\nimport java.lang.reflect.Method;\nimport java.lang.reflect.ParameterizedType;\nimport java.lang.reflect.Type;\nimport java.util.List;\nimport java.util.Map;\n\n/**\n * \u901a\u8fc7\u53cd\u5c04\u56de\u53bb\u6cdb\u578b\n */\npublic class demo12 {\n    public void test(Map<String,User> map, List<User>list){\n        System.out.println("test01");\n    }\n    public Map<String,User> test02(){\n        System.out.println("test02");\n        return null;\n    }\n\n    public static void main(String[] args) throws NoSuchMethodException {\n        Method method = demo12.class.getMethod("test", Map.class, List.class);\n        Type[] genericParameterTypes = method.getGenericParameterTypes();\n        for (Type ge : genericParameterTypes){\n            System.out.println("#" + ge);\n            if (ge instanceof ParameterizedType){\n                Type[] actualTypeArguments = ((ParameterizedType) ge).getActualTypeArguments();\n                for (Type act : actualTypeArguments){\n                    System.out.println(act);\n                }\n            }\n        }\n        method = demo12.class.getMethod("test02", null);\n        Type genericParameterType = method.getGenericReturnType();\n        if (genericParameterType instanceof ParameterizedType){\n            Type[] actualTypeArguments = ((ParameterizedType)     genericParameterType).getActualTypeArguments();\n            for (Type act : actualTypeArguments){\n                System.out.println(act);\n            }\n        }\n    }\n}\n')),(0,l.kt)("h3",{id:"210-\u83b7\u53d6\u6ce8\u89e3\u4fe1\u606f"},"2.10 \u83b7\u53d6\u6ce8\u89e3\u4fe1\u606f"),(0,l.kt)("p",null,"ORM \u5bf9\u8c61\u5173\u7cfb\u6620\u5c04"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-Java"},'package opp2;\n\nimport java.lang.annotation.*;\nimport java.lang.reflect.Field;\n\n/**\n * \u7ec3\u4e60\u53cd\u5c04\u64cd\u4f5c\u6ce8\u89e3\n */\npublic class demo13 {\n    public static void main(String[] args) throws ClassNotFoundException, NoSuchFieldException {\n        Class<?> c1 = Class.forName("opp2.Student2");\n        Annotation[] annotation = c1.getAnnotations();\n\n        //\u901a\u8fc7\u53cd\u5c04\u83b7\u5f97\u6ce8\u89e3\n        for (Annotation annotation1:annotation){\n            System.out.println(annotation1);\n        }\n\n        //\u83b7\u5f97\u6ce8\u89e3\u7684value\u503c\n        TableM tableM = c1.getAnnotation(TableM.class);\n        String value = tableM.value();\n        System.out.println(value);\n\n        //\u83b7\u5f97\u7c7b\u6307\u5b9a\u7684\u6ce8\u89e3\n//        Field name = c1.getDeclaredField("name");\n        Field name = c1.getDeclaredField("id");\n        Fk annotation1 = name.getAnnotation(Fk.class);\n        System.out.println(annotation1.columnName());\n        System.out.println(annotation1.Type());\n        System.out.println(annotation1.length());\n\n\n    }\n}\n\n@TableM("db_student")\nclass Student2{\n    @Fk(columnName = "db_id",Type = "int", length = 10)\n    private int id;\n    @Fk(columnName = "db_age",Type = "int", length = 10)\n    private int age;\n    @Fk(columnName = "db_name", Type = "varchar", length = 3)\n    private String name;\n    public Student2(){\n\n    }\n\n    public Student2(int id, int age, String name) {\n        this.id = id;\n        this.age = age;\n        this.name = name;\n    }\n\n    public int getId() {\n        return id;\n    }\n\n    public void setId(int id) {\n        this.id = id;\n    }\n\n    public int getAge() {\n        return age;\n    }\n\n    public void setAge(int age) {\n        this.age = age;\n    }\n\n    public String getName() {\n        return name;\n    }\n\n    public void setName(String name) {\n        this.name = name;\n    }\n\n    @Override\n    public String toString() {\n        return "Student2{" +\n                "id=" + id +\n                ", age=" + age +\n                ", name=\'" + name + \'\\\'\' +\n                \'}\';\n    }\n}\n\n\n//\u7c7b\u540d\u7684\u6ce8\u89e3\n@Target(ElementType.TYPE)\n@Retention(RetentionPolicy.RUNTIME)\n@interface TableM{\n    String value();\n}\n\n\n//\u5c5e\u6027\u7684\u6ce8\u89e3\n@Target(ElementType.FIELD)\n@Retention(RetentionPolicy.RUNTIME)\n@interface Fk{\n    String columnName();\n    String Type();\n    int length();\n}\n')))}u.isMDXComponent=!0}}]);