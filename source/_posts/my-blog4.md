---
title:  HEXO sakura主题美化
author: kumiao
authorLink: https://mma324.github.io
avatar: https://cdn.jsdelivr.net/gh/mma324/hexobolg/hexobolg/imgkumaio.jpeg
authorAbout: 一个学习记录者
tag: 随笔
categories: 转载
comment: true
date: 2020-04-19 18:42:07
description: 制作sakura主题Mishiro大佬的博客同款LOGO笔记
photos: https://cdn.jsdelivr.net/gh/mma324/hexobolg@master/hexobolg/imgtu321-1.webp
---

> sakura主题Mishiro大佬的博客：[樱花家的白猫](https://2heng.xin/)本文转载于[雾时之森](https://m1314.cn/212.html)，[cungudafa修改](https://cungudafa.top/post/58d.html)
>

首先找到一款你想要的字体，百度自行。由于中文字体包都很大不利于WEB环境，这里我们需要使用 Fontmin 从字体包里提取出我们要使用的字体。

## 1.下载 [Fontmin客户端](https://ecomfe.github.io/fontmin/#app) 和 [你要用的字体包](http://fonts.mobanwang.com/201403/10867.html)

## 2.挑选出需要的字：（字体包提前重命名为logo）

![](https://i.loli.net/2020/04/19/Fpku5bGvcaT4mqi.png)

## 3.生成简要型字体样式

## 4.在themes\sakura\source\fonts\下新建文件夹名字为LOGO，生成简要型字体文件复制到此处

![](https://i.loli.net/2020/04/19/D9NxQUOGcyalP2m.png)

![](https://i.loli.net/2020/04/19/wOtpVl4HMrWKoGF.png)

## 5.在文件themes\sakura\layout\_partial\head.ejs合适位置添加：

![](https://i.loli.net/2020/04/19/pxCrelvbHXaiUAS.png)

```
 <!-- 自定义logo -->
   <link rel="stylesheet" type="text/css" href="/css/logo.css">
   <link rel="stylesheet" type="text/css" href="/fonts/LOGO/logo.css">

```

## 6.修改文件themes\sakura\layout\_partial\header.ejs第4-11行：

![](https://i.loli.net/2020/04/19/mxLDNYpqgJFvWdT.png)

```ejs
         <span class="site-title">
             <span class="logolink logo">
                 <a href="/">
                     <ruby>
                     <span class="sakuraso">酷喵森</span>
                     <span class="no">の</span>   /*转动符号随意*/
                     <span class="shironeko">凉叶</span>
                     <rp></rp>
                     <rt class="logo"><%= theme.prefixName %></rt>
                     <rp></rp>
                     </ruby>
                   </a>
             </span>
           </span>

```

## 7.themes\Sakura\source\css下新建logo.css文件

```
 .logo {
     font-family: 'logo', 'Merriweather Sans', Helvetica, Tahoma, Arial, 'PingFang SC', 'Hiragino Sans GB', 'Microsoft Yahei', 'WenQuanYi Micro Hei', sans-serif;
 }
 
 .logolink .sakuraso {
     background-color: rgba(255, 255, 255, .5);
     border-radius: 5px;
     color: #464646;  /*logo自行改颜色*/
     height: auto;
     line-height: 25px;
     margin-right: 0;
     padding-bottom: 0px;
     padding-top: 1px;
     text-size-adjust: 100%;
     width: auto
 }
 
 .logolink a:hover .sakuraso {
     background-color: orange;
     color: #fff;
 }
 
 .logolink a:hover .shironeko,
 .logolink a:hover rt {
     color: orange; /*logo自行改颜色*/
 }
 
 .logolink.logo a {
     color: #464646; /*logo自行改颜色*/
     float: left;
     font-size: 25px;
     font-weight: 800;
     height: 56px;
     line-height: 56px;
     padding-left: 6px;
     padding-right: 15px;
     padding-top: 11px;
     text-decoration-line: none;
 }
 .logolink.logo .sakuraso,.logolink.logo .no {
     font-size: 25px;
     border-radius: 9px;
     padding-bottom: 2px;
     padding-top: 5px;
 }
 .logolink.logo .no {
     display: inline-block;
     margin-left: 5px;
 }
 
 .logolink a:hover .no {
     -webkit-animation: spin 1.5s linear infinite;
     animation: spin 1.5s linear infinite;
 }
 
 .logolink ruby {
     ruby-position: under;
     -webkit-ruby-position: after;
 }
 
 .logolink ruby rt {
     font-size: 12px;
     transform: translateY(-15px);
     opacity: 0;
     transition-property: opacity;
     transition-duration: 0.5s, 0.5s;
 }
 
 .logolink a:hover ruby rt {
     opacity: 1
 }

```

### 完成了hexo g 生成hexo s查看就行了

