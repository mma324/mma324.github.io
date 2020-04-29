"use strict";
hexo.extend.filter.register('after_render:html', function (htmlContent) {
     const injectHead =
 `<style type="text/css" lang="css">
body {
  background: #0AE;
  text-align: center;
  line-height: 100vh;
}

.group {
  position: relative;
  display: inline-block;
  line-height: 16px;
}

.bigSqr {
  position: relative;
  display: inline-block;
  width: 40px;
  height: 40px;
  overflow: hidden;
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
  -webkit-animation: bigSqrShrink 1s linear infinite;
          animation: bigSqrShrink 1s linear infinite;
}

.square {
  position: absolute;
  width: 20px;
  height: 20px;
  background: #FFF;
}

.first {
  left: 0px;
  top: 20px;
}

.second {
  left: 20px;
  top: 20px;
  -webkit-animation: drop2 1s linear infinite;
          animation: drop2 1s linear infinite;
}

.third {
  left: 0px;
  top: 0px;
  -webkit-animation: drop3 1s linear infinite;
          animation: drop3 1s linear infinite;
}

.fourth {
  left: 20px;
  top: 0px;
  -webkit-animation: drop4 1s linear infinite;
          animation: drop4 1s linear infinite;
}

.text {
  line-height: 16px;
  font-family: "Open Sans", "Roboto", Arial, sans-serif;
  font-weight: 400;
  color: #FFF;
  display: block;
  margin: 10px auto;
  padding: 3px;
}

@-webkit-keyframes bigSqrShrink {
  0% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  100% {
    -webkit-transform: scale(0.5);
            transform: scale(0.5);
  }
}

@keyframes bigSqrShrink {
  0% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  100% {
    -webkit-transform: scale(0.5);
            transform: scale(0.5);
  }
}
@-webkit-keyframes drop2 {
  0% {
    -webkit-transform: translateY(-50px);
            transform: translateY(-50px);
  }
  25% {
    -webkit-transform: translate(0);
            transform: translate(0);
  }
  100% {
    -webkit-transform: translate(0);
            transform: translate(0);
  }
}
@keyframes drop2 {
  0% {
    -webkit-transform: translateY(-50px);
            transform: translateY(-50px);
  }
  25% {
    -webkit-transform: translate(0);
            transform: translate(0);
  }
  100% {
    -webkit-transform: translate(0);
            transform: translate(0);
  }
}
@-webkit-keyframes drop3 {
  0% {
    -webkit-transform: translateY(-50px);
            transform: translateY(-50px);
  }
  50% {
    -webkit-transform: translate(0);
            transform: translate(0);
  }
  100% {
    -webkit-transform: translate(0);
            transform: translate(0);
  }
}
@keyframes drop3 {
  0% {
    -webkit-transform: translateY(-50px);
            transform: translateY(-50px);
  }
  50% {
    -webkit-transform: translate(0);
            transform: translate(0);
  }
  100% {
    -webkit-transform: translate(0);
            transform: translate(0);
  }
}
@-webkit-keyframes drop4 {
  0% {
    -webkit-transform: translateY(-50px);
            transform: translateY(-50px);
  }
  75% {
    -webkit-transform: translate(0);
            transform: translate(0);
  }
  100% {
    -webkit-transform: translate(0);
            transform: translate(0);
  }
}
@keyframes drop4 {
  0% {
    -webkit-transform: translateY(-50px);
            transform: translateY(-50px);
  }
  75% {
    -webkit-transform: translate(0);
            transform: translate(0);
  }
  100% {
    -webkit-transform: translate(0);
            transform: translate(0);
  }
}
 </style>
 <script>
(function () {
    const loaded = function(){
       setTimeout(function(){
            const loader = document.getElementById("loading-container");
            loader.className="fadeout" ;//使用渐隐的方法淡出loading page
            document.getElementById("body-wrap").style.display="flex";
            setTimeout(function(){
                loader.style.display="none";
            },1000); 
        },1000);//强制显示loading page 1s  
    };
    loaded();
})()
 </script>`;
     const injectBody = `
 <div id="loading-container">
     <div class="group"> 
  <div class="bigSqr">
    <div class="square first"></div>
    <div class="square second"></div>
    <div class="square third"></div>
    <div class="square fourth"></div>
  </div>
  <div class="text">loading</div>
</div>;
     if (/<\/head>/gi.test(htmlContent)) {
         let lastIndex = htmlContent.lastIndexOf('</head>');
         htmlContent = htmlContent.substring(0, lastIndex) + injectHead + htmlContent.substring(lastIndex, htmlContent.length);
     }
     if (/<body>/gi.test(htmlContent)) {
         let index = htmlContent.indexOf('<body>');
         htmlContent = htmlContent.substring(0, index) + injectBody + htmlContent.substring(index, htmlContent.length);
     }
     return htmlContent;
 }, 1);