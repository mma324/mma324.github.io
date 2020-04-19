---
title:  hexo Sakura主题文章列表视觉优化 Sakura主题美化
author: kumiao
authorLink: https://mma324.github.io
avatar: https://cdn.jsdelivr.net/gh/mma324/hexobolg/hexobolg/imgkumaio.jpeg
authorAbout: 一个学习记录者
tag: 随笔
categories: 美化
comment: true
date: 2020-04-17 19:00:04
description: Sakura主题文章列表视觉优化 Sakura主题美化第九弹
photos: https://cdn.jsdelivr.net/gh/mma324/hexobolg@master/hexobolg/imgtu321-01.webp
---

> ### 节选此文：[Sakura 主题文章列表视觉优化](https://fz6m.com/175)，创意来源：[Xian](https://html.mk/)

[^转]: https://m1314.cn/359.html 这是大佬可以点击去看看他博客

教程是直接贴 css 代码，因为都一次性做好了，但是难免会因为每个人曾经改过布局，就会造成一定的位置差，所以小白请**谨慎**。在V3.3.7版本原版主题通过测试~

![](https://ae01.alicdn.com/kf/H48a4cc51623245f1bb55ad7ac634e61bQ.jpg)

### CSS代码

```
/*大于1024宽度才会生效*/
@media (min-width: 1024px){
    .post-date {
        background-color: #FFC0CB !important;
        padding: 2px 7px;
        border-radius: 10px;
        color: #ffffff !important; 
        width: max-content;
        font-size: 10px !important;
        margin-top: 5%;
    }
 
    .icon-time::before {
        content: "\e689";
        color: #ffffff !important;
        font-size: 10px;
    }
 
    .post-meta {
        color: #ffffff !important;
        font-size: 10px;
        text-align: center;
    }
 
    .post-meta span {
        padding: 3px 6px 3px 6px;
        border-radius: 7px;
    }
 
    .post-meta span:nth-child(1) {
        background-color: #D8BFD8;
    }
 
    .post-meta span:nth-child(2) {
        background-color: #DDA0DD;
    }
 
    .post-meta span:nth-child(3) {
        background-color: #EE82EE;
    }
 
    .icon-attention::before {
        content: "\e693";
        font-size: 10px;
        color: #ffffff !important;
    }
 
    .icon-mark::before {
        content: "\e6ab";
        font-size: 10px;
        color: #ffffff !important;
    }
 
    .icon-file::before {
        content: "\e6ad";
        font-size: 10px;
        color: #ffffff !important;
    }
 
    .post-meta span a {
        color: #ffffff !important;
    }
 
    .icon-caidan::before {
        color: #FFC0CB !important;
    }
 
    .float-content {
        font-size: 14px;
        margin-top: 20px;
        text-align: center;
    }
 
    .post-list-thumb .post-title h3 {
        text-align: center;
    }
 
    .float-content p {
        margin-top: 25px;
    }
 
    .post-content {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
 
    .post-list-thumb::after {
        content: "\00a0";
        width: 4px;
        height: 0px;
        position: absolute;
        left: 0px;
        top: 0px;
        background-color: #FFC0CB;
        box-shadow: #FFC0CB 0px 0px 6px;
        border-radius: 10px;
        transition: all 0.8s ease 0s;
    }
 
    .post-list-thumb-left::after {
        right: 0;
        left: auto;
    }
 
    .post-list-thumb:hover:after {
        height: 100%;
    }
 
    .post-thumb a img {
        width: 400px !important;
        height: 250px !important;
        box-shadow: 1px 1px 30px 2px rgba(216,191,216,.3);
        border-radius: 20px;
        border: 1px solid #eee;
        transition: all 1s !important;
    }
 
    .post-list-thumb:hover {
        box-shadow: 0 1px 12px -6px rgba(0,0,0,.5);
    }
 
    .post-list-thumb:hover img {
        transform: scale(1.05);
    }
 
    .post-thumb a {
        overflow: inherit !important;
        top: 25px;
    }
 
    .post-thumb {
        width: 45%;
        transform: translateX(70px);
    }
 
    .post-list-thumb-left .post-thumb {
        float: left;
        transform: translateX(-40px);
    }
 
    .post-content-wrap {
        transform: translateX(-30px) translateY(16px);
            padding-right: 0px !important;
    }
 
    .post-list-thumb-left .post-content-wrap {
        transform: translateX(30px) translateY(16px);
        padding-left: 0px !important;
    }
}

```

###  删除不必要的区块

![](https://ae01.alicdn.com/kf/Hcf21679543eb420488d7eb8fbcf8d7eb3.jpg)

在\themes\sakura\source\css\style.css删除

```
hr { 
    box-sizing:content-box;
    height:0
}

```

```
hr {
    background-color:#ccc;
    border:0;
    height:1px;
    margin-bottom:1.5em
}

```

.entry-content hr:before里的：

```
    content:'...';
```

```
hr {
    height: 3px !important;
    border: none !important;
    background-color: #bfbfbf !important;
    background-image: repeating-linear-gradient(-45deg, #fff, #fff 4px, transparent 4px, transparent 8px) !important;
}

```

这还没完，因为除归档外所有列出文章的地方都用 < hr> 分割了，css同样会起作用。 那就把

改成< hr改成< br > 呗 在\themes\sakura\layout\_widget\category-items.ejs中，将倒数第二行的< hr>改< br>还有NEXT POST和PREVIOUS POST按钮也要改。直接删除\themes\sakura\layout\_widget\common-article.ejs中，<%= post.prev.title%>和<%= post.next.title%>< /h3>下面的< hr>

