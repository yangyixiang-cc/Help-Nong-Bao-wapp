![农产道项目Logo](./data/readme/logo.png)

#  概述

农产道小程序是一个关于农业的微信原生小程序，具有推荐/论坛/电商/后台模块。采用微信云开发快速开发项目，后台管理使用腾讯云CMS内容管理快速搭建。

##  什么是微信云开发？

简而言之，就是无需服务器，几行代码就可以快速开发一个小程序。

![传统开发和云开发对比图](./data/readme/s1.jpg)

#  技术栈

* 微信小程序原生框架
* Mobx状态管理库
* 微信云开发（云函数、云存储、云数据库）
* 腾讯云内容管理CMS

#  功能实现

##  整体架构

###  项目主要模块

‘项目主要分为四大模块：

1. 首页模块
2. 农友圈
3. 农资超市
4. 我的模块

![模块图](./data/readme/s3.png)

###   项目业务功能实现

![项目整体业务设计](./data/readme/s4.png)

###  项目目录结构

![项目目录结构](./data/readme/s5.png)

##  页面展示

###  首页模块

<div style="display: flex;">
    <img src="./data/readme/s9.png" style="width:20%;" />
    <img src="./data/readme/s10.png" style="width:20%;" />
    <img src="./data/readme/s13.png" style="width:20%;" /> 
</div>




###  农友圈模块

<div style="display:flex;">
    <img src="./data/readme/s14.png" style="width:20%;" />
    <img src="./data/readme/s15.png" style="width:20%;" />
    <img src="./data/readme/s16.png" style="width:20%;" />
    <img src="./data/readme/s17.png" style="width:20%;" />
</div>

### 农资超市模块

<div style="display:flex;">
    <img src="./data/readme/s18.png" style="width:20%;" />
    <img src="./data/readme/s23.png" style="width:20%;" />
    <img src="./data/readme/s24.png" style="width:20%;" />
    <img src="./data/readme/s26.png" style="width:20%;" />
</div>

###  我的模块

<div style="display:flex;">
    <img src="./data/readme/s27.png" style="width:20%" />
</div>


#  本地运行

克隆项目

```sh
git clone https://github.com/yangyixiang-cc/Help-Nong-Bao-wapp.git
```

打开微信小程序开发工具将项目导入

* 更换APPID
* 选择使用微信云开发

![image-20230225135831718](./data/readme/image-20230225135831718.png)

点击项目文件，选择进入内建终端，进入 miniprogram目录：输入 `npm install`  安装项目依赖。

![image-20230225140120821](./data/readme/image-20230225140120821.png)

***

点击菜单栏->云开发按钮->创建一个云开发环境。

![image-20230225140358254](./data/readme/image-20230225140358254.png)

然后选择数据库按钮->创建集合



![image-20230225140702313](./data/readme/image-20230225140702313.png)

依次建立以下集合：

* address
* article
* colletArticle
* collectComment
* collectPost
* comments
* goods
* merchantSettlement
* notice
* order
* postCollectComment
* postComments
* posts
* state
* supportPost
* swiper
* tab
* users

然后依次导入项目根目录下的`data/json/`  下对应名称的`.json` 数据。

***

返回项目编辑器界面：打开 `app.js envList.js` 文件，更改云开发环境`ID` 。

![image-20230225141446924](./data/readme/image-20230225141446924.png)

然后右击 `cloudfunctions`  文件，选择当前云开发环境，然后同步云函数到云环境中。

![image-20230225141716160](./data/readme/image-20230225141716160.png)

***

然后打开云开发操作界面，选择更多->内容管理：

参照微信小程序开发文档->内容管理章节部署成功后打开内容管理平台：

[微信小程序开发文档->CMS内容管理章节](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/guide/extensions/cms/guidance.html)

![image-20230225141839845](./data/readme/image-20230225141839845.png)

选择右侧的导入模型：

![image-20230225142513926](./data/readme/image-20230225142513926.png)

* 导入项目根目录下 `data/json/`下的 `schema-export-5ues1pu8.json` 文件即可

然后就可以在后台添加内容了

**导入出错，参考以下文章**

 [点击进入](https://blog.csdn.net/qiushi_1990/article/details/130295442)

![](./data/readme/s2.png)

**注意：项目根目录下 `/data/img`  下的图片你可能会用到。**

***

最后点击编译项目即可。

#  反馈

如果您有任何反馈，请通过发送至[电子邮件](mailto:workyyx@163.com)与我联系/或者提交`issues` 。

# 注意

不能用于商业用途以及用于比赛，只能进行学习和参考。
