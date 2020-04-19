---
title: hexo-sakura主题美化第一篇如何安装使用他入门篇
author: kumiao
authorLink: https://mma324.github.io
avatar: https://cdn.jsdelivr.net/gh/mma324/hexobolg/hexobolg/imgkumaio.jpeg
authorAbout: 一个学习记录者
tag: 美化
categories: 技术
comment: true
date: 2020-04-17 13:40:44
description: 如何正确使用塔建那些坑记录一下自己使用这主题碰到问题以后好改 W(￣_￣)W
photos: https://cdn.jsdelivr.net/gh/mma324/hexobolg@master/hexobolg/imgtu2312.webp
---

# 前言

使用hexo服务搭建博客的好处有；

1全是静态文件，访问速度快；

2.主题插件多个性化

3.不需要后台可以随意绑定自己的域名

4.不用花一分钱就可以搭建一个博客，不需要服务器

5.想恢复到哪个历史版本都行

#### 感谢一下文章对我修改主题提拱帮助;

Sakura主题美化 （https://mp.weixin.qq.com/s/OAyOA28-bTJLE6aKtzpoqg ）

Hexo-neat插件优化提升访问效率 （https://blog.csdn.net/cungudafa/article/details/104327497）

还有啥来的不记得了谢谢了你们出的教程超级棒｡◕◡◕｡)ﾉ非常感谢



# 1.准备工作

在开始一切之前，你必须已经（自行百度）；

1.有一个github账号，没有的话去注册一个；

2 .安装了Node.js , Git，Notepad++

3.打开电脑wir+r在CMD中;

```
node -v //检查node版本
npm -v //检查npm版本
git --version //检查git版本
```

# 2塔建博客

1.新建一个名为你的用户名.github.io的仓库，如果你的github用户名是wacq那么你新建的名字<!--wacq.github.io-->的仓库（必须是你的用户名，其它名称不会自己生成静态页）我自己就踩个坑README初始化也要勾上

2.新建一个文件夹，用来存放自己的博客文件在该目录下右键点击*Git Bash Here*关闭cmd窗口

```
npm i hexo-cli -g //安装Hexo
hexo -v  //验证是否安装成功
hexo init //初始化文件夹
npm install //组件
hexo g //生成静态页
hexo s //浏览静态页
ctrl+c //关闭本地服务器
```

### 3.连接Github与本地

桌面右键点击Git Bash Here然后输入下面命令：

```
git config --global user.name "ladada" //github用户名
git config --global user.email "36214211@qq.com" //注册邮箱地址
```

生成密钥SSH key

```
ssh-keygen -t rsa -C "36214211@qq.com" //生成密钥
cat ~/.ssh/id_rsa.pub //査看密钥
```

复制下面密钥到github网站打开头像点击settings再点击SSH and GPG keys，新建一个SSH，名字随便下面你复制密钥点击确定保存。看不懂百度一键翻译网页

```
ssh -T git@github.com //github配对上有你用户名就ok了
```

博客的配置文件根目录下的config.yml文件，在这里你可以修改与博客相关的各种信息。

修改最后一行的配置：

```
deploy:
  type: git
  repository: https://github.com/gadsang/gadsang.github.io //改这github地址
  branch: master
```

改好后这么发布

```
hexo g //生成静态页
hexo d //发布静态页
```

### 4.写文章

博客根目录下右键打开git bash安装一个扩展

```
npm i hexo-deployer-git
hexo new "my-blog title"//新建一篇文章
```

### 5.绑定域名

默认的域名是你github用户名加github.io，改打开你的github博客项目点击settings，拉到下面Custom domain处，填上你自己的域名，保存这时候你的项目根目录应该会出现一个名为CNAME没有的话自己新建CNAME文件不要后缀 

```
hexo g
hexo d
```

完了！

# 3.代码笔记

常用的到的代码

```
hexo g //生成静态页
hexo s //浏览静态页
hexo d //发布静态页
hexo clean //清缓存改主题用的到
hexo s -p 5000 //改浏览静态页端口
hexo i //组件安装主题
hexo new "postName" //新建文章
hexo new page "pageName" //新建页面
hexo generate //生成静态页面至public目录
hexo server //开启预览访问端口（默认端口4000，'ctrl + c'关闭server）
hexo help  // 查看帮助
hexo v //查看Hexo的版本
```

[如果还是不会的吧你可以点击看看下面这文章更详细建议新手](https://zhuanlan.zhihu.com/p/35668237)

# 4.Sakura主题调教

## 4.1基本修改

参考你下载的主题文章的介绍目录在你下载主题文件的\source\  _posts目录有详细的懒就写了要注意的我会写出来：_

1.要配置一个图床图片全部云端改也没用W(￣_￣)W这个地方坑自己没注意看在主题的config.yml;

cdn: https://cdn.jsdelivr.net/gh/Natsuki-Kaede/Blog-Resources  //CDN链接，建议建立一个属于自己的图床，然后图片里 img:/icon/xxx.png 将被代替为你图床链接加图片名如 https://cdn.jsdelivr.net/gh/Natsuki-Kaede/Blog-Resources/icon/xxx.png

2.开屏背景图片建议压缩图片为webp文件小快

```
bg:
- https://cdn.jsdelivr.net/gh/Na/Blog@master/coveadar/cover.webp
- https://cdn.jsdelivr.net/gh/Na/Blog@master/coveadar/cover.webp
```

3.通讯社交配置 这个也要改你一改cdn图片就没有了主题大部分图片全在云端建议下载图片后在改cdn要不百度图片自己选吧下载后上传你图库加你图片名img:/icon/xxx.png就可以了注意/ICON/是你上传的那个文件夹后面是图片名

## 4.2个性化配置

### 2.2.1首屏文字

首屏文字/头像hexo的首屏默认为头像，以下是修改为文字的教程:

在\themes\Sakura\layout\_partial中找到 headertop.ejs 将

```ejs
原代码复制cit+f搜索
<div class="header-tou">
   <a href="<%- theme.url%>">
       <img src="<%- (theme.cdn || '') + theme.avatar %>">
   </a>
</div>
修改为：
<div class="header-tou">
   <h1 class="center-text glitch is-glitching Ubuntu-font" data-text="你想更换的文字">你想更换的文字</h1>
</div>
```

### 4.2.2鼠标点击特效

放在\themes\Sakura\layout\ _partial\layout.ejs

```js
<script src="鼠标点击特效的链接"></script>
<script src="https://cdn.jsdelivr.net/gh/wallleap/cdn/js/shehuizhuyi.js"></script>   //社会主义价值观文字
<script src="https://cdn.jsdelivr.net/gh/wallleap/cdn/js/love.js"></script>   //点击出现爱心
<script src="https://cdn.jsdelivr.net/gh/wallleap/cdn/js/clickBom.js"></script>   //气球爆炸（有点影响体验）
//建议不要放三种
```

### 4.2.3 背景效果和漂浮物效果

放在\themes\Sakura\layout\ _partial\layout.ejs

```js

<!--背景效果-->
<script src="https://cdn.jsdelivr.net/gh/wallleap/cdn/js/piao.js"></script>   //漂浮彩带，点击可变换

<script src="https://cdn.jsdelivr.net/gh/wallleap/cdn/js/canvas-nest.min.js"></script>   //可随鼠标滚动并吸附的线条


//漂浮物效果
<script src="https://cdn.jsdelivr.net/gh/wallleap/cdn/js/sakura.js"></script>   //樱花飘落

<script src="https://cdn.jsdelivr.net/gh/wallleap/cdn/js/snow.js"></script>   //雪花飘落
//谨慎添加，略微影响阅读体验
```

### 4.2.4live2d看板娘

layout.ejs中添加

```
<script src="https://cdn.jsdelivr.net/gh/stevenjoezhang/live2d-widget@latest/autoload.js"></script>

```

### 4.2.5加入预加载

sakura主题集成了图片懒加载，可是页面放到GitHub加载还是很慢，

```
<script src="//instant.page/3.0.0" type="module" defer integrity="sha384-OeDn4XE77tdHo8pGtE1apMPmAipjoxUQ++eeJa6EtJCfHlvijigWiJpD7VDPWXV1"></script>

```

### 4.2.6添加一言API、诗词

1.今日诗词网站 https://www.jinrishici.com/#添加到以前的描述那里，社交图标的上方首页

修改headertop.ejs找到下面的代码

```
<div class="header-info">  <!-- 找到这个位置 -->
        <!-- <p><%= theme.description %></p> -->  把这句注释掉        <p id="jinrishici-sentence">正在加载今日诗词....</p>
        <script src="https://sdk.jinrishici.com/v2/browser/jinrishici.js" charset="utf-8"></script>
  <!-- 添加上面的两句 -->
        <div class="top-social_v2">
```

![](https://imgconvert.csdnimg.cn/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL3dhbmcxMzc1ODMwMjQyL1BpY0dvLy9pbWcvMjAyMDAzMTMxMDM3MDUucG5n?x-oss-process=image/format,png)

2.首页下方通知也没啥用改了

修改index.ejs，查找<%= theme.notice%>，将其替换为下面的

```ejs

<span id="hitokoto" style="margin-left:5px;"> :D 获取中...</span>
      <p align="right" id="afrom"></p>
      <script src="https://cdn.jsdelivr.net/npm/bluebird@3/js/browser/bluebird.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/whatwg-fetch@2.0.3/fetch.min.js"></script>
      <script>
        fetch('https://v1.hitokoto.cn/?c=h')
          .then(function (res){
            return res.json();
          })
          .then(function (data) {
            var hitokoto = document.getElementById('hitokoto');
            var afrom = document.getElementById('afrom');
            hitokoto.innerText = data.hitokoto;
            afrom.innerText =  '——【' + data.from + ' ' + data.from_who + '】';
          })
          .catch(function (err) {
            console.error(err);
          })
      </script>
```

![](https://cdn.jsdelivr.net/gh/mma324/hexobolg@master/hexobolg/imgtu3211.webp)

### 4.2.7网站运行时间

footer.ejs选择合适位置添加代码

```ejs
<span id="timeDate">载入天数...</span><span id="times">载入时分秒...</span><script>
  var now = new Date();
  function createtime() {
    var grt= new Date("03/08/2020 16:44:00");//此处修改你的建站时间或者网站上线时间
    now.setTime(now.getTime()+250);
    days = (now - grt ) / 1000 / 60 / 60 / 24; dnum = Math.floor(days);
    hours = (now - grt ) / 1000 / 60 / 60 - (24 * dnum); hnum = Math.floor(hours);
    if(String(hnum).length ==1 ){hnum = "0" + hnum;} minutes = (now - grt ) / 1000 /60 - (24 * 60 * dnum) - (60 * hnum);
    mnum = Math.floor(minutes); if(String(mnum).length ==1 ){mnum = "0" + mnum;}
    seconds = (now - grt ) / 1000 - (24 * 60 * 60 * dnum) - (60 * 60 * hnum) - (60 * mnum);
    snum = Math.round(seconds); if(String(snum).length ==1 ){snum = "0" + snum;}
    document.getElementById("timeDate").innerHTML = "本站已安全运行 "+dnum+" 天 ";
    document.getElementById("times").innerHTML = hnum + " 小时 " + mnum + " 分 " + snum + " 秒";
  }
  setInterval("createtime()",250);</script>
```

### 4.2.8底部动态滚动文字

footer.ejs选择合适位置添加代码

```ejs
<div id="binft"></div>
  <script>
    var binft = function (r) {
      function t() {
        return b[Math.floor(Math.random() * b.length)]
      }
      function e() {
        return String.fromCharCode(94 * Math.random() + 33)
      }
      function n(r) {
        for (var n = document.createDocumentFragment(), i = 0; r > i; i++) {
          var l = document.createElement("span");
          l.textContent = e(), l.style.color = t(), n.appendChild(l)
        }
        return n
      }
      function i() {
        var t = o[c.skillI];
        c.step ? c.step-- : (c.step = g, c.prefixP < l.length ? (c.prefixP >= 0 && (c.text += l[c.prefixP]), c.prefixP++) : "forward" === c.direction ? c.skillP < t.length ? (c.text += t[c.skillP], c.skillP++) : c.delay ? c.delay-- : (c.direction = "backward", c.delay = a) : c.skillP > 0 ? (c.text = c.text.slice(0, -1), c.skillP--) : (c.skillI = (c.skillI + 1) % o.length, c.direction = "forward")), r.textContent = c.text, r.appendChild(n(c.prefixP < l.length ? Math.min(s, s + c.prefixP) : Math.min(s, t.length - c.skillP))), setTimeout(i, d)
      }
      var l = "",
      o = ["青青陵上柏，磊磊涧中石。", "人生天地间，忽如远行客。","斗酒相娱乐，聊厚不为薄。", "驱车策驽马，游戏宛与洛。","洛中何郁郁，冠带自相索。","长衢罗夹巷，王侯多第宅。","两宫遥相望，双阙百余尺。","极宴娱心意，戚戚何所迫？"].map(function (r) {
      return r + ""
      }),
      a = 2,
      g = 1,
      s = 5,
      d = 75,
      b = ["rgb(110,64,170)", "rgb(150,61,179)", "rgb(191,60,175)", "rgb(228,65,157)", "rgb(254,75,131)", "rgb(255,94,99)", "rgb(255,120,71)", "rgb(251,150,51)", "rgb(226,183,47)", "rgb(198,214,60)", "rgb(175,240,91)", "rgb(127,246,88)", "rgb(82,246,103)", "rgb(48,239,130)", "rgb(29,223,163)", "rgb(26,199,194)", "rgb(35,171,216)", "rgb(54,140,225)", "rgb(76,110,219)", "rgb(96,84,200)"],
      c = {
        text: "",
        prefixP: -s,
        skillI: 0,
        skillP: 0,
        direction: "forward",
        delay: a,
        step: g
      };
      i()
      };
      binft(document.getElementById('binft'));
  </script>
```

### 4.2.9加入天气插件

前往中国天气 https://cj.weather.com.cn/plugin/pc添加到link.ejs中

### 4.3.1在线联系

前往网站

DaoVoice https://www.daovoice.io/

可以使用GitHub或者微信登录，也可以前往

这里注册 http://dashboard.daovoice.io/get-started

![](https://imgconvert.csdnimg.cn/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL3dhbmcxMzc1ODMwMjQyL1BpY0dvLy9pbWcvMjAyMDAzMTMxMDQzNDIucG5n?x-oss-process=image/format,png)图片转载

### 4.3.2添加优美的标签页

修改主题配置文件，将这两行代码放到留言板之前

```
  标签: {path: /tags/, fa: fa-tag }
  分类: {path: /categories/, fa: fa-bookmark }
```

###### 图片转载

![](https://imgconvert.csdnimg.cn/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL3dhbmcxMzc1ODMwMjQyL1BpY0dvLy9pbWcvMjAyMDAzMTMxMDQ0MDAucG5n?x-oss-process=image/format,png)

首先我们要创建几个文件，layout目录创建tags.ejs  layout目录_widget创建tag-cloud.ejs

   tag-wordcloud.ejs

1.tags.ejs放在layout根目录下，下面两个文件放在layout子目录_widget下

### tags.ejs

```ejs
<%- partial('_partial/header') %>

<main class="content">

    <%- partial('_widget/tag-cloud') %>

    <%- partial('_widget/tag-wordcloud') %>

</main>
```

### 2._widget/tag-cloud.ejs

```ejs
<%
var colorArr = ['#F9EBEA', '#F5EEF8', '#D5F5E3', '#E8F8F5', '#FEF9E7',
    '#F8F9F9', '#82E0AA', '#D7BDE2', '#A3E4D7', '#85C1E9', '#F8C471', '#F9E79F', '#FFF'];
var colorCount = colorArr.length;
var hashCode = function (str) {
    if (!str && str.length === 0) {
        return 0;
    }

    var hash = 0;
    for (var i = 0, len = str.length; i < len; i++) {
        hash = ((hash << 5) - hash) + str.charCodeAt(i);
        hash |= 0;
    }
    return hash;
};
var i = 0;
var isTag = is_tag();
%>

<div id="tags" class="container chip-container">
    <div class="card">
        <div class="card-content">
            <div class="tag-title center-align">
                <i class="fa fa-tags"></i>&nbsp;&nbsp;文章标签
            </div>
            <div class="tag-chips">
                <% site.tags.map(function(tag) { %>
                <%
                    i++;
                    var color = i >= colorCount ? colorArr[Math.abs(hashCode(tag.name) % colorCount)]
                            : colorArr[i - 1];
                %>
                <a href="<%- url_for(tag.path) %>" title="<%- tag.name %>: <%- tag.length %>">
                    <span class="chip center-align waves-effect waves-light
                            <% if (isTag && tag.name == page.tag) { %> chip-active <% } else { %> chip-default <% } %>"
                            data-tagname="<%- tag.name %>" style="background-color: <%- color %>;"><%- tag.name %>
                        <span class="tag-length"><%- tag.length %></span>
                    </span>
                </a>
                <% }); %>
            </div>
        </div>
    </div>
</div>
```

### 3._widget/tag-wordcloud.ejs

```ejs
<link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/gh/wallleap/cdn/css/jqcloud.css">
<style type="text/css">
    #tag-wordcloud {
        width: 100%;
        height: 300px;
    }
</style>

<div class="container" data-aos="fade-up">
    <div class="card">
        <div id="tag-wordcloud" class="card-content"></div>
    </div>
</div>
<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.4.4/jquery.min.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/wallleap/cdn/js/jqcloud-1.0.4.js"></script>
<script type="text/javascript">
    <%
    let tagWordArr = [];
    site.tags.map(function(tag) {
        tagWordArr.push({'text': tag.name, 'weight': tag.length, 'link': tag.permalink});
    });

    let tagWords = JSON.stringify(tagWordArr);
    %>

    $('#tag-wordcloud').jQCloud(<%- tagWords %>, {
        autoResize: true
    });
</script>
```

### 4.将这段代码复制到style.css末尾

```css
.chip-container {    margin-top: 60px;}.chip-container .tag-title {    margin-bottom: 10px;    color: #3C4858;    font-size: 1.75rem;    font-weight: 400;}.chip-container .tag-chips {    margin: 1rem auto 0.5rem;    max-width: 850px;    text-align: center;}.chip-container .tags-posts {    margin-top: 20px;}.chip-container .chip-default {    color: #34495e;}.chip-container .chip-active {    color: #FFF !important;    background: linear-gradient(to bottom right, #FF5E3A 0%, #FF2A68 100%) !important;    box-shadow: 2px 5px 10px #aaa !important;}.chip-container .chip {    margin: 10px 10px;    padding: 19px 14px;    display: inline-flex;    line-height: 0;    font-size: 1rem;    font-weight: 500;    border-radius: 5px;    cursor: pointer;    box-shadow: 0 3px 5px rgba(0, 0, 0, .12);}.chip-container .chip:hover {    color: #fff;    background: linear-gradient(to right, #4cbf30 0%, #0f9d58 100%) !important;}.chip .tag-length {    margin-left: 5px;    margin-right: -2px;    font-size: 0.5rem;}.chip-default .tag-length {    color: #e91e63;    margin-top: 1px;}.chip-active .tag-length {    color: #fff;}.tag-title.center-align{    margin-top: 100px;    text-align : center;}

```

使用命令hexo new page "tags"，修改博客根目录下source/tags/index.md

```
---
title: tags
date: 2020-03-09 13:50:05
layout: tags
---
```

5.在 hexo g hexo s查看页面

### 4.3.3优美的分类页

![](https://s1.ax1x.com/2020/03/13/8ndoeH.png)

创建几个文件，文件所在目录layout创建categories.ejs ，

layout的_widget创建category-cloud.ejs，category-radar.ejs

### categories.ejs

```
<%- partial('_partial/header') %>
<main class="content">

    <%- partial('_widget/category-cloud') %>

    <% if (site.categories && site.categories.length > 0) { %>
    <%- partial('_widget/category-radar') %>
    <% } %>

</main>
```

### lcategory-cloud.ejs

```
<%
var colorArr = ['#F9EBEA', '#F5EEF8', '#D5F5E3', '#E8F8F5', '#FEF9E7',
    '#F8F9F9', '#82E0AA', '#D7BDE2', '#A3E4D7', '#85C1E9', '#F8C471', '#F9E79F', '#FFF'];
var colorCount = colorArr.length;
var hashCode = function (str) {
    if (!str && str.length === 0) {
        return 0;
    }

    var hash = 0;
    for (var i = 0, len = str.length; i < len; i++) {
        hash = ((hash << 5) - hash) + str.charCodeAt(i);
        hash |= 0;
    }
    return hash;
};
var i = 0;
var isCategory = is_category();
%>

<div id="category-cloud" class="container chip-container">
    <div class="card">
        <div class="card-content">
            <div class="tag-title center-align">
                <i class="fa fa-bookmark"></i>&nbsp;&nbsp;文章分类
            </div>
            <div class="tag-chips">
                <% if (site.categories && site.categories.length > 0) { %>
                <% site.categories.map(function(category) { %>
                <%
                    i++;
                    var color = i >= colorCount ? colorArr[Math.abs(hashCode(category.name) % colorCount)]
                            : colorArr[i - 1];
                %>
                <a href="<%- url_for(category.path) %>" title="<%- category.name %>: <%- category.length %>">
                    <span class="chip center-align waves-effect waves-light
                            <% if (isCategory && category.name == page.category) { %> chip-active <% } else { %> chip-default <% } %>"
                            style="background-color: <%- color %>;"><%- category.name %>
                        <span class="tag-length"><%- category.length %></span>
                    </span>
                </a>
                <% }); %>
                <% } else { %>
                <%= __('categoryEmptyTip') %>
                <% } %>
            </div>
        </div>
    </div>
</div>
```

### category-radar.ejs

```
<style type="text/css">
    #category-radar {
        margin-top: 50px;
        width: 100%;
        height: 360px;
    }
</style>

<div class="container" data-aos="fade-up">
    <div class="card">
        <div id="category-radar" class="card-content"></div>
    </div>
</div>

<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/wallleap/cdn/js/echarts.min.js"></script>
<script type="text/javascript">
    let radarChart = echarts.init(document.getElementById('category-radar'));

    <%
        var categories = site.categories;

        // Find the maximum and average values of the post categories.
        var radarValueArr = [];
        categories.some(function(category) {
            radarValueArr.push(category.length);
        });

        var max = Math.max.apply(null, radarValueArr) + Math.min.apply(null, radarValueArr);

        // Calculate the data needed for the radar chart.
        var indicatorArr = [];
        categories.map(function(category) {
            indicatorArr.push({'name': category.name, 'max': max});
        });

        var indicatorData = JSON.stringify(indicatorArr);
        var radarValueData = JSON.stringify(radarValueArr);
    %>

    let option = {
        title: {
            left: 'center',
            text: '文章分类雷达图',
            textStyle: {
                fontWeight: 500,
                fontSize: 22
            }
        },
        tooltip: {},
        radar: {
            name: {
                textStyle: {
                    color: '#3C4858'
                }
            },
            indicator: <%- indicatorData %>,
            nameGap: 5,
            center: ['50%','55%'],
            radius: '66%'
        },
        series: [{
            type: 'radar',
            color: ['#3ecf8e'],
            itemStyle: {normal: {areaStyle: {type: 'default'}}},
            data : [
                {
                    value : <%- radarValueData %>,
                    name : '文章分类数量'
                }
            ]
        }]
    };

    radarChart.setOption(option);
</script>
```

接着用命令hexo new page "categories"

创建分类页修改博客根目录下source/categories/index.md

```
---
title: categories
date: 2020-03-09 13:50:05
layout: categories
---
```

查看http://localhost:4000/categories

### 4.3.4字数统计和阅读时长

1.先安装相关插件，终端输入以下命令

```
npm install hexo-wordcount --save
```

2. 文件配置在theme\sakura\layout\_partial\下创建word.ejs文件

   ```
   <div style="margin-top:10px;">
   	    <span class="post-time">
   	      <span class="post-meta-item-icon">
   	        <i class="fa fa-keyboard-o"></i>
   	        <span class="post-meta-item-text">  字数统计: </span>
   	        <!-- 安装插件npm install hexo-wordcount --save -->
   	        <span class="post-count"><%= wordcount(post.content) %>字</span>
   	      </span>
   	    </span>
   	
   	    <span class="post-time">
   	      &nbsp; | &nbsp;
   	      <span class="post-meta-item-icon">
   	        <i class="fa fa-hourglass-half"></i>
   	        <span class="post-meta-item-text">  阅读时长: </span>
   	        <span class="post-count"><%= min2read(post.content) %>分</span>
   	      </span>
   	    </span>
   	</div>
   ```

   3.在\themes\sakura\layout\_widget\common-article.ejs文章标题中合适位置添加：（添加在 headr 标签前）

   ```
   <!-- 开始添加字数统计-->
   	      <% if(theme.word_count && !post.no_word_count){%>
   	        <%- partial('_partial/word') %>
   	      <% } %>
   	      <!-- 添加完成 
   ```

   4.在MyWeb\themes\sakura\_config.yml配置文末添加

   ```
   word_count: true
   ```

   在_post目录写md文章时，应该加上作者信息：
   author（名称），authorLink（链接），avatar（头像），authorAbout（简介）

   5.在\themes\sakura\layout\_widget\common-article.ejs文章标题中可修改样式：

   [原作者网]: https://blog.csdn.net/cungudafa/article/details/104308312

### 4.3.5插件

字数统计  npm i --save hexo-wordcount 安装

图片懒加载   hexo-lazyload-image-enhance https://github.com/barretlee/hexo-lazyload-image-enhance

画板娘     hexo-helper-live2d https://github.com/EYHN/hexo-helper-live2d

### 4.3.6添加404页面

在博客根目录的source目录下新建404.html随便找个模板，在开头加入代码

```
---
layout: false
---
```

### 4.3.7博客备份

hexo-git-backup https://github.com/coneycode/hexo-git-backup  

能够传到backup分支也可以把整个博客文件夹上传到GitHub私有仓库

## 5加速与体验优化建议

托管于GitHub Pages的博客速度总是不尽人意，Sakura主题加载了大量的资源，本身性能并不太好，这里提供一些加速方法，分为托管于GitHub Pages的加速方法和其他加速方法。 这里主要针对未备案域名.毕竟已备案的域名可以用国内的各种服务。

### 5.1图片加速

用github+jsdelivr塔建图床加速图片加载速度jsDelivr 是国外的一家优秀的公共 CDN 服务提供商jsDelivr有一个十分好用的功能——**它可以加速 Github 仓库的文件**。我们可以借此搭建一个免费、全球访问速度超快的图床，使用 PicGo[3](https://blog.iljw.me/2019/05/jsdelivr-cdn-github.html#fn3)将图片上传到指定 Github 仓库位置，再利用 jsDelivr 获得图片加速

### 5.2Cloudflare CDN替换为国内CDN

换成国内的BootCDN速度蛮不错在 \themes\Sakura\source\js\ 中找到 sakura-app.js

```
$.getScript('//cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.4/MathJax.js?config=TeX-MML-AM_CHTML', function () {
```

换

```
$.getScript('//cdn.bootcss.com/mathjax/2.7.7/MathJax.js?config=TeX-MML-AM_CHTML', function () {
```

在 \themes\Sakura\layout_widget\ 中找到 common-article.ejs

```
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/tocbot/4.4.2/tocbot.css">
```

换

```
<link rel="stylesheet" href="https://cdn.bootcss.com/tocbot/4.10.1/tocbot.css">
```

### 5.3启用压缩

##### 5.3.1GULP压缩

博客根目录下打开Git Bash，输入

```
npm install gulp -g
 
npm install gulp-minify-css gulp-uglify gulp-htmlmin gulp-htmlclean gulp --save

```

在博客根目录下创建文件 gulpfile.js

```
var gulp = require('gulp');
var minifycss = require('gulp-minify-css');
var uglify = require('gulp-uglify');
var htmlmin = require('gulp-htmlmin');
var htmlclean = require('gulp-htmlclean');
var imagemin = require('gulp-imagemin');
 
gulp.task('minify-html', function() {
 
    return gulp.src('./public/**/*.html')
        .pipe(htmlclean())
        .pipe(htmlmin({
            removeComments: true,
            minifyJS: true,
            minifyCSS: true,
            minifyURLs: true,
        }))
        .pipe(gulp.dest('./public'))
});
 
 
gulp.task('minify-css', function() {
    return gulp.src('./public/**/*.css')
        .pipe(minifycss({
            compatibility: 'ie8'
        }))
        .pipe(gulp.dest('./public'));
});
 
 
gulp.task('minify-js', function() {
    return gulp.src('./public/js/**/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./public'));
});
 
 
gulp.task('minify-images', function() {
    return gulp.src('./public/images/**/*.*')
        .pipe(imagemin(
        [imagemin.gifsicle({'optimizationLevel': 3}), 
        imagemin.jpegtran({'progressive': true}), 
        imagemin.optipng({'optimizationLevel': 7}), 
        imagemin.svgo()],
        {'verbose': true}))
        .pipe(gulp.dest('./public/images'))
});
 
 
gulp.task('default', [
    'minify-html','minify-css','minify-js','minify-images'
]);

```

## 还有啥来的慢慢更吧 W(￣_￣)W.....