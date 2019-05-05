* [每日分享]()
    * [数组的操作](#1)
    * [浏览器的拖拉事件](#2)
    * [addEventListener](#3)
    * [利用Css的伪类来解决一些问题](#4)
    * [鼠标的11个事件](#5)
    * [关于JavaScript中两个原生API(contains, compareDocumentPosition)](#6)
    * [浏览器的进度事件](#7)
    * [使用document.scrollingElement控制窗体滚动高度](#8)
    * [表单事件的种类](#9)
    * [Css中的scroll-behaviour 和js 中的scrollIntoView让页面滚动平滑](#10)
    * [浏览器的触摸事件](#11)
    * [浏览器的异步操作](#12)
    * [局部作用域和函数提升](#13)
    * [函数节流](#14)
    * [js中的apply，call区别和用法](#15)

<h2 id="2"> 数组的操作 </h2> 

- //题目描  // 移除数组 arr 中的所有值与 item 相等的元素，直接在给定arr 数组上进行操作，并将结果返回

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <script>
    //题目描述
   // 移除数组 arr 中的所有值与 item 相等的元素，直接在给定的 arr 数组上进行操作，并将结果返回
        function remove(arr , item) {
            return arr.filter((list) =>{
                return list !== item
            })
        }
        var arr = [1,2,3,4,5,6,6,6,6,6]
        var result = remove(arr,6)
        console.log(result)
    </script>
</body>
</html>
```
（本节完！）

<h2 id ="2"> 浏览器上的拖拉事件 </h2>

### 方法介绍 

- 拖拉（drag）指的是，用户在某个对象上按下鼠标键不放，拖动它到另一个位置，然后释放鼠标键，将该对象放在那里。
拖拉的对象有好几种，包括元素节点、图片、链接、选中的文字等等。在网页中，除了元素节点默认不可以拖拉，其他（图片、链接、选中的文字）都是可以直接拖拉的。为了让元素节点可拖拉，可以将该节点的draggable属性设为true。

- 当元素节点或选中的文本被拖拉时，就会持续触发拖拉事件，包括以下一些事件。
- drag：拖拉过程中，在被拖拉的节点上持续触发（相隔几百毫秒）。
- dragstart：用户开始拖拉时，在被拖拉的节点上触发，该事件的target属性是被拖拉的节点。通常应该在这个事件的监听函数中，指定拖拉的数据。
- dragend：拖拉结束时（释放鼠标键或按下 ESC 键）在被拖拉的节点上触发，该事件的target属性是被拖拉的节点。它与dragstart事件，在同一个节点上触发。不管拖拉是否跨窗口，或者中途被取消，dragend事件总是会触发的。
- dragenter：拖拉进入当前节点时，在当前节点上触发一次，该事件的target属性是当前节点。通常应该在这个事件的监听函数中，指定是否允许在当前节点放下（drop）拖拉的数据。如果当前节点没有该事件的监听函数，或者监听函数不执行任何操作，就意味着不允许在当前节点放下数据。在视觉上显示拖进入当前节点，也是在这个事件的监听函数中设置。
- dragover：拖拉到当前节点上方时，在当前节点上持续触发（相隔几百毫秒），该事件的target属性是当前节点。该事件与dragenter事件的区别是：dragenter事件在进入该节点时触发，然后只要没有离开这个节点，dragover事件会持续触发。
- dragleave：拖拉操作离开当前节点范围时，在当前节点上触发，该事件的target属性是当前节点。如果要在视觉上显示拖拉离开操作当前节点，就在这个事件的监听函数中设置。
- drop：被拖拉的节点或选中的文本，释放到目标节点时，在目标节点上触发。注意，如果当前节点不允许drop，即使在该节点上方松开鼠标键，也不会触发该事件。如果用户按下 ESC 键，取消这个操作，也不会触发该事件。该事件的监听函数负责取出拖拉数据，并进行相关处理。

### 总结 
- 事件拖拽一共经历了6 个阶段
  -  第一：dragstart ,用户刚拖拽时就立刻在被拖拉的节点上触发
  -  第二：dragend, 拖拉结束，该事件也在被拖拉的节点触发
  -  第三：dragover, 拖拉到目标节点的上方，当前目标节点事件持续触发。
  -  第三：dragenter, 拖拉进入当前目标节点，在当前节点上会触发一次。
  -  第四：dragleave, 拖拉离开当前节点范围时，在当前节点⬆️触发。
  -  第五：drop, 被拖拉的节点，释放到目标节点时，会触发这个事件。这个节点可以触发添加节点或者删除节点。\
(本节完！)

<h2 id = "3"> **`EventTarget.addEventListener()`** </h2>

### `EventTarget.addEventListener()` 用于在当前节点或者对象傻姑娘，定义一个特定的事件的监听函数。一旦这个事情发生之后，就会执行监听函数，该方法是没有返回值的  
  
- `target.addEventListener(type,listener[,userCapture])`
  该方法接收三个参数 。
    - **type** :事件名称，大小写敏感，不含on 
    - **listener** : 监听的事件函数，事件发生时，会执行该事件函数
    - **useCapture**: 可选参数（布尔类型的值） ，表示监听的事件函数是否在捕获阶段执行，如果参数是true，则在捕获阶段执行。为false则在冒泡阶段执行！ 默认参数为false。 大多情况下可以不写！
- 第二个参数除了可以是一个监听函数之外，还可以是一个handleEvent方法对象。`target.addEventListener('click',{ handleEvent:function(e){console.log(e)}})` // 第三个参数就不写了
  - 第三个参数不仅可以选，还可以设置。当然也可以是一个配置对象。该对象具有以下属性。   
    - **capture**:布尔值，表示该事件是否在捕获阶段执行监听函数
    - **once**:布尔值，表示监听函数是否只触发一次，然后就自动的移除。
    - **passive**:布尔值，表示监听函数不会调用preventDefault方法。如果监听函数调用了，浏览器忽略这个请求，并在监控太台输出一行警告。
    ````javascript
     btn1.addEventListener('click',function(e){
            alert('once')
        },{once:true})
    ````
###  既然可以绑定函数的监听事件，那当然还有有移除函数的监听事件

#### 方法 `target.removeEventListener()` 就可以实现
    - 这个方法的参数跟绑定的是一摸一样的。
    - **但是值得注意的是，第二个参数必须是要移除绑定的事件监听函数。这两个必须一样才能够实现被移除**
    - 当然参数基本保持一样就不会出现什么问题了。
(本节完！)

<h2 id ="4"> 利用css伪类来解决一些css美化问题</h2>

![图例](https://github.com/yaogengzhu/life-share/blob/master/images/page1.png?raw=true)

### 具体意思

- 在CSS中，伪类是可以级联使用的，于是，如果列表可以匹配:first-child:nth-last-child(2)则表示当前<li>元素即是第1个子元素，又是从后往前第2个子元素，因此，我们就能判断当前总共两个<li>子元素，我们就能精准实现我们想要的布局了，只需要配合相邻兄弟选择符加号+以及兄弟选择符弯弯~即可 

**摘自张旭鑫**
(本节完！)

<h2 id ="5">鼠标的11个事件</h2>

### 具体的事件解释如下：

- click：按下鼠标（通常是按下主按钮）时触发。
- dblclick：在同一个元素上双击鼠标时触发。
- mousedown：按下鼠标键时触发。
- mouseup：释放按下的鼠标键时触发。
- mousemove：当鼠标在一个节点内部移动时触发。当- 鼠标持续移动时，该事件会连续触发。为了避免性能问题，建议对该事件的监听函数做一些限定，比如限定一段时间内只能运行一次。
- mouseenter：鼠标进入一个节点时触发，进入子节点不会触发这个事件（详见后文）。
- mouseover：鼠标进入一个节点时触发，进入子节点会再一次触发这个事件（详见后文）。
- mouseout：鼠标离开一个节点时触发，离开父节点也会触发这个事件（详见后文）。
- mouseleave：鼠标离开一个节点时触发，离开父节点不会触发这个事件（详见后文）。
- contextmenu：按下鼠标右键时（上下文菜单出现前）触发，或者按下“上下文菜单键”时触发。
- wheel：滚动鼠标的滚轮时触发，该事件继承的是WheelEvent接口。

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
        div {
            margin: 30px;
            width: 100px;
            height: 100px;
            background-color: red;
        }

        h4 {
            color: #fff;
            margin: 0;
            padding: 0;
        }

        .box {
            margin: 20px;
            width: 30px;
            height: 30px;
            background-color: pink;
        }
    </style>
</head>
<button id="btn1">click</button>
<button id="btn2">dblclick</button>
<button id="btn3">mousedown</button>
<button id="btn4">mouseup</button>
<div id="btn6">
    <h4>mouseenter</h4>
    <h4>mouseover</h4>
    <div class="box"></div>
</div>

<div id="btn7">
    <h4>mouseout</h4>
    <div class="box"></div>
</div>

<div id="btn8">
    <h4>mouseleave</h4>
    <div class="box"></div>
</div>

<div id="btn9">
    <h4>contextmenu</h4>
    <div class="box"></div>
</div>

<body>
    <script>
        // 事件1 click ： 按下鼠标即可以触发
        btn1.addEventListener('click', function () {
            alert('click')
        })
        // 事件2 dblclick : 双击鼠标可以触发事件  notice: 是dblclick
        btn2.addEventListener('dblclick', function () {
            alert('dbclick')
        }, { once: true })   // 加啦once 只会触发一次。。。
        // 事件3 mousedown  按下鼠标键时触发 notice:此时我们监听的是对于按钮按下鼠标键才会触发
        btn3.addEventListener('mousedown', function () {
            alert('mousedown')
        })
        // 事件4 mouseup  // 点击按钮释放鼠标键时才会触发 
        btn4.addEventListener('mouseup', function () {
            alert('btn-mouseup')
        })
        // 事件4 mouseup  // 释放鼠标键时将会触发  那就绑定为document的全局事件
        document.addEventListener('mouseup', function () {
            alert('mouseup')
        })   // notice 在为看来，不要在全局绑定这样的事件，这样的事件一般在函数内去触发
        // 事件5 mousemove  鼠标在移动时触发，但是会持续触发。(test 时，也使用去全局触发)
        document.addEventListener('mousemove', function () {
            // console.log('moving……')
        })
        // 事件6 鼠标进进入节点的一瞬间会立刻触发，当进入子节点，或者离开时不会触发
        btn6.addEventListener('mouseenter', function () {
            // console.log('i am comming ^_^')
        })
        // 事件7 鼠标进入节点会触发这个事件。进入子节点还会触发这个事件 
        btn6.addEventListener('mouseover', function () {
            console.log('i am mouseover')
        })  // 注意 这个与mouseenter 相比。会多触发两次 。离开节点进入自节点会触发，离开子节点，进入父级节点还会触发一次
        // 事件8 mouseout 鼠标离开节点时触发。当鼠标进入子接点，相当离开父节点，一样会触发该事件。从子节点离开，进入父级节点一样会触发该事件！
        btn7.addEventListener('mouseout', function () {
            console.log('i am mouseout')
        })
        // 事件9 mouseleave   // 只有在父级节点出去的时候才会触发。不会在子节点中触发
        btn8.addEventListener('mouseleave', function () {
            console.log('i am mouseleva')
        })
        // 事件10 contextmenu  // 点击右键触发
        btn9.addEventListener('contextmenu',function(){
            console.log('i am contextmenu')
        })
        // 事件11 wheel  
        document.addEventListener('wheel',function(){
            console.log('i am mousewheel')
        })

    </script>
</body>

</html>
```
### 总结 

- **click** 事件是指的是，用户在同一个位置完成mousedown动作，在完成mouseup动作。因此呢，执行的顺序分别为，mousedown 首先触发 -后续执行mouseup,然后执行click 
- **dbclick** 事件会在mousedown - mouseup click - 后执行！
- **mouseenter 和 mouseover** 都是鼠标进入事件触发，但是两者的区别是。前者只触发一次，后者会在子节点上多次触发。
- **mouseout mouseleave** 都是鼠标离开时候触发。但两者的区别是，前者会在子节点内多次触发。后者只会离开节点时触发。

### 键盘事件的种类

    键盘事件是由用户敲击键盘时触发的，主要的事件有，keydown/keyup/keypress/三个事件。都继承自 `keyboardEvent` 接口
- `keydown`:按下键盘时触发
-  `keypress`:按下具体的键盘值触发。即Ctrl、Alt、Shfit、Meta这样无值的的键。这个事件不会触发。。。对于有值的事件，按下时首先会触发keydown事件，再触发这事件。
- `keyup`: 松开键盘时触发。
**触发事件顺序** 如果用户一直在按着键盘不放，首先会触发keydown---keypress---keydown-----keypress--- 直到键盘抬起触发-keyup

```javaScript
    document.body.addEventListener('keydown',function(e){
        console.log(e.key)
        switch(e.key){
            case 'Enter':
                // console.log('Enter事件')
                test()
                break
            case 'h':
            console.log('h事件')
            break
            }
    },false)
```

(本节完！)

<h2 id ="6"> 关于JavaScript中两个原生API(contains, compareDocumentPosition) </h2>
- 第一个是contains   
- 第二个是compareDocumentPosition()   ['地址'](https://developer.mozilla.org/zh-CN/docs/Web/API/Node/compareDocumentPosition)
- 具体API介绍，可以上MDN上。
(本节完！)

<h2 id ="7"> 浏览器的进度事件 </h2>
 进度事件用来描述资源加载的进度，主要是由ajax请求。img、audio、video、style、link等外部资源的加载触发。继承了progressEvent接口。主要有以下几个事件
 - abort: 外部资源中止加载时（用户取消）触发。但是如果发生错误导致终止，该事件不会触发 
 - error: 由于错误导致外部资源无法加载时触发。
 - load: 外部资源加载成功时触发 
 - loadstrat: 外部资源开始加载时触发 
 - loadend: 外部资源停止加载时触发，发生顺序排在error、abort、load等事件的后面。
 - progress: 外部资源加载不断的触发 
 - timeout: 加载超时时触发。
(本节完！)

<h2 id = "8"> 使用document.scrollingElement控制窗体滚动高度 </h2>

### 为何会有document.scrollingElement?  
- 如果只是为了获取当前页面的窗体的滚动高度，直接使用window.pageYOffset就可以（IE9+） ,桌面和移动端都是支持的 
- 但是windows.pageYOffset是一个只读的属性，我们无法用来设置窗体的滚动高度，此时，就要找到对应的滚动元素，通过设置scrollTop的值来改变窗体的滚动位置。
**注意** 对于桌面端和手机端窗口的滚动元素都是不一样的
- `document.documentElement.scrollTop` 是可以获取pc端窗口的滚动大小。
- `document.body.scrollTop` 是可以用来获取手机端滚动窗体的大小。
####  具体的demo 可以参考day5中的测试代码。
**通过上面两个例子可以知道获取滚动高度不一致的现象是兼容问题引起的**如果需要做适配，则需要写兼容代码。（就是两个代码一起写）
**因此`document.scrollingElement`这个属性才应运而生。可以直接动态的识别滚动的容器，无需在多写一连串的代码**
**`document.scrollingElement`** 在桌面端就是documen.documentElement,在移动端就是document.body
当然也可以直接设置其`scrollTop`的属性值来改变窗体的位置。
**本文参考张旭鑫---  建议以后使用`document.scrollingElement`来获取窗口的高度**
(本节完！)

<h2 id ="9">表单事件的种类</h2>
### input事件 
input事件当input、 select 、textarea、的值发生变化时就会触发，对于复选框或者单选框，用户改变选项时，也会触发这个事件，另外，对于contentditable属性的元素，只要值发生变化，也会触发input事件。
**input事件特点** 会连续触发，用户只要每次按键。就会触发一次input事件

```js
  <script>
        input.addEventListener('input',(e) =>{
            console.log(e)
        })
    </script>
```
>input事件跟change事件十分相似，都是会监听input输入事件，但是`change`事件不同的是会只有当离开焦点时才会触发。
**`select事件`**select事件当在input、textarea里选中文本时会触发 
**`change事件`** 该事件特点不会连续触发，只有当用户输入完成之后才会触发。
**invalid事件**用户提交表单的验证事件，如果表单元素的值不满足校验条件。则就会触发invalid事件。 
**reset,submit 事件** 这两个事件都发生在表单对象<form>上，而不是发生在表单成员上。
- **`reset`** 事件当表单重置（所有的表单成员都会变成默认值）时触发 
- **`submit`** 事件当数据向服务器提交时触发 。非常需要注意的时`submit`事件的发生对象时<form>元素，不是<button>
(本节完！)

<h2 id ="10"> css中的scroll-behaviour 和js 中的scrollIntoView让页面滚动平滑 </h2>
- 在没有这没用这个方式之前，平时测试时使用的css锚点定位可以实现，但是这个种方式会带累这样的缺点
    - 改变location中的hash值来实现会使浏览器触发原生的滚动行为
    - 切换效果十分生硬效果不好。
- 结合input框的onfocus来实现的效果很棒～可以参考 **day6 06---.html**
**记住以后在敲代码过程中** 加上这个代码有意外的效果，返回按钮再也不用做其他更多的操作来。

```css
html, body { scroll-behavior:smooth; }
```
- 注意一定的兼容性～
(本节完！)

<h2 id="11"> 浏览器的触摸事件 </h2>

### 浏览器的触摸事件组成
- 浏览器的触摸事件由三个部分组成，`touch`,`touchuList`,`touchEvet`,这个三个部分分别是代表一个触摸点，多个触摸点的集合，还有触摸引发的事件案例。
- touch的接口实例对象用来表示触摸点（一根手指或者一根触摸笔），包括了位置，大小，形状，压力，目标元素等属性。
- touchList 表示多个触摸点组成的。
- touchEvent 的接口实例对象代表由触摸引发的事件，（只有触摸屏才会引发这一个事件）
### touch 接口
    浏览器原生提供了Touch构造函数，用来生成touch实例。
`var touch = new Touch(touchOptions);`
拥有非常多的参数可选，具体可以点击这里 [查看](https://wangdoc.com/javascript/events/touch.html)
### touchEvent接口
- `ctrlKey`: 布尔值，表示Ctrl键是否同时按下，默认值为false
- `shiftKey`: 布尔值，表示Shift值是否同时按下，默认值为false
- `altKey`: 布尔值，表示Alt键是否同时按下，默认值为false 
- `metaKey`: 布尔值，表示触摸时，是否按下了Meta键（也就是window）。
### TouchEvent.changedTouches 
`TouchEvent.changedToches`属性返回一个TouchList实例，成员是由一组Touch实例对象，表示本次触摸的相关节点 。
- `touchstart` 事件：被激活的该触摸点 
- `touchmove` 事件，发生变化的触摸点。
- `touchend` 事件，消失的触摸点。

(本节完)

<h2 id="12">浏览器的异步操作</h2>

### 单线程模型

[具体点我,阮一峰带你来认识～](https://wangdoc.com/javascript/async/general.html)

单线程模型指的是，JavaScript 只在一个线程上执行，也就是说，JavaScript同时只能执行一个任务，其他任务都必须都在后面排队等待。

但是值得注意的是，JavaScript只在一个线程上运行，不代表JavaScript引擎只有一个线程。事实上，JavaScript引擎有多个线程，单个脚本只能在一个线程傻姑娘运行（称为主线程），其他线程都是在后台配合。

JavaScript在设计的时候就是使用的单线程，为什么这么设计呢？JavaScript在开发的时候就是为网页服务的语言，然是对于一个网页脚本来说。如果JavaScript有两个线程，一个线程在网页DOM节点上来添加内容，另一个线程却删除来这个节点，所以为了避免这个问题的出现。JavaScript的单线程特点也成为了这门语言的核心。

单线程的好处是，运行环境单纯，实现起来比较简单。缺点，如果执行一个任务耗时非常长的话，后面的任务必须进行排队等待，就导致整个程序执行的延缓。常见浏览器无响应（假死），通常就是某一段JavaScript代码长时间的执行（死循环造成的） 。JavaScript语言本省执行的速度并不慢，只是执行读取外部数据时，比如执行的ajaxa请求返回结果。这个时候，如果对方服务器长时间没有反应的话，或者网络不通畅，就会导致脚本长时间的停滞。

这么语言这好玩的是，排队如果是因为计算量大，CPU忙不过，倒也是算了。但是很多时候，CUP实际上是空闲的，因为IO操作（输入输出）很慢（比如Ajax操作读取网络数据），不得不等记过出来。在往下执行。JavaScript采用的是“事件循环”机制，什么是事件循环机制呢？（JavaScript语言的设计者意识到，CPU完全可以不管IO操作，挂起处于等待中的任务，先运行排在后面的任务，等到IO操作返回了结果，在回头取，把挂起的任务继续执行下去）

### 同步任务和异步任务

程序里面所有的任务都可以分为两类：同步任务和异步任务。

同步任务是没有被引擎挂起，在主线程上排队执行的任务。只有一个任务执行完了，才能去执行下一个任务。

异步任务是那些被引擎放在一边，不进入任务队列的任务。只有引擎认为某个异步任务可以执行了（比如Ajax的操作从服务器得到了结果—），该任务（采用回调函数的形式）才会进入主线程执行。排在异步任务后面的代码，不用等待异步任务结束会马上运行。也就是说，异步任务不具有堵塞的效应。

### 任务队列和事件循环 

JavaScript运行时，除了一个正在运行的主线程，引擎还提供了一个任务队列（task queue），里面是各种需要当前程序处理的异步任务。(实际上，根据异步任务的类型，存在多个任务队列)

首先，主线程会去执行所有的同步任务。等到同步任务全部执行完毕，就会去看任务队列里面的异步任务。如果满足条件的话，那么异步任务就会重新进入到主线程开始执行，这时它就变成了同步任务了，等到执行时，下一个异步任务在进入主线程开始执行。一旦任务队列被清空，程序就会结束执行。

JavaScript引擎怎么知道异步任务有没有结果呢？能不能进入主线程呢？答案就是引擎在不停的检查，一遍又一遍，只要同步任务执行完了，引擎就开始检查哪些挂起的异步任务。是不是可以进入主线程。这种循环的检查机制，叫做事件循环（event loop）。

### 异步的操作模式

### 回调函数
回调函数是异步操作最基本的方法。

#### 回调函数

```js
function f1(){} 
function f2(){}
// 调用
f1();
f2();
// 这两个函数执行顺序是。f1执行完毕之后，f2才能执行。
// 但是如果f1是异步函数，f2就会先执行。
function f1(callback){
    callback();
}
function f2 (){

}
// f1(f2)
// 这样的话，f2会立即执行。不会等到f1执行结束后。
```
回调函数的优点是，容易理解和实现，缺点是不利于代码的阅读和维护。各部分之间高度耦合，使得程序结构混乱，难以追踪(尤其是多个回调函数嵌套的情况)，而且每个任务只能指定一个回调函数。

### 事件监听

另外一个思路是采用事件驱动模式，异步任务的执行不取决于代码的顺序，而取决某个事件是否发生。

（未完！待续）

<h2 id="13">局部作用域和函数提升</h2>

### 首先来看题
```js
var a = 0;
b = 0;

function A(a) {
    // var  a = 1;

    A = function (b) {
        //  b = 2 
        // b = ++b // 3 
        // b = 3
        console.log("ok")
        console.log((b+ ++b));
    }
    console.log((a++),'ok');
}
A(1);  // 1 'ok'
A(2);  // ok 5
A(3); // ok 7
```
### 这个题涉及到两个知识点。
- 隐式全局变量
- 函数被覆盖成为全局函数
**分析** 只有当A(1) 被执行时，才会将A 中的函数重新赋值，变成全局函数，所以在第二次调用的时候，直接覆盖掉了之前的函数。

<h2 id="14">函数节流</h2>

### 认识函数节流
- 函数节流：指定时间间隔只会执行一次任务。（只介绍函数节流）
- 函数防抖：任务频繁的情况下，只有任务触发时间超过指定间隔的时候，任务才会执行。

### 函数节流（throttle)
通过监听`window`对象的`scroll`事件来分析这个问题，然后在函数体内中写入判断是否滚动底部的逻辑；
```js 
// 这里写原生js    html，bdoy的高度设置为3000
 document.addEventListener('scroll',function(e){
            // 判断浏览器是否滚动到地步的逻辑
            // console.log(e.target.body.offsetHeight)
            let pageHeight = e.target.body.offsetHeight;
            // body 总高度3000
            let scrollTop = document.scrollingElement.scrollTop;
            // 滚动高度。 变量
            console.log(scrollTop);
            let winHeight = window.innerHeight;
            // 获取浏览器窗口的高度 
            // 浏览器窗口高度821
            console.log(window.innerHeight);
            //定义一个阀值
            let thresold = pageHeight - scrollTop - winHeight;
            // 进行判断 
            if (thresold > -100 && thresold <= 20) {
                console.log('到底了');
            }
        })    
``` 
**可以自行测试这行代码** 
会发现一个问题， 这个代码在监听`scroll`事件的时候，会不停的触发我们设置的阀值计算。不停的进行判断是否到底，这样做，极大的消耗了浏览器的性能，而且在实际的开发场景中，不需要这么去做。实际开发过程中，每隔一段时间去判断这个逻辑效果比较好。所以***函数节流**所可以做的就每隔一段时间去执行一次原本需要无时无刻都需要在执行的函数。这个就是`函数节流`的最大用处。

```js
// 这个定义的函数需要在上面的那个函数中去被调用
       function throttle(fn, interval = 500){
            // 设置节流阀
            let canRun  = true;
            return function () {
                // 判断这个节流阀是否为true 。
                if (!canRun) return ;
                // 如果为true，进来之后，设置为false
                canRun = false;
                // 设置一个300毫秒的定时器
                setTimeout(() => {
                    // 改变this指向
                    fn.apply(this,arguments);
                    // 在执行之后，在将节流阀值设置为true 
                    canRun =true;
                }, interval);
            }
        }
```
####  **解析**
加上函数节流之后，当页面滚动的时候，每隔500ms才会去执行逻辑判断。
简单的来说，函数的节流就是通过一个闭包来保存一个标记，在函数的开头判断这个标记是否为true，如果为true的话就继续执行函数，否则就return掉，判断完标记后又立即把这个标记设置为false，然后在把外部传入的函数在一个定时器中去执行，在执行完毕之后，在把这个节流阀的值设置为true。表示可以执行下一次的循环，当定时器还没执行的时候，节流阀的值始终是false，就不会执行我们的判断函数。直接被return掉了。

[点我了解更多，原文出处，尊重原创](https://juejin.im/entry/58c0379e44d9040068dc952f)

（本小节完！）

<h2 id="15">js中的apply和call的区别和用法</h2>

*之所以插入这个小节，是对函数节流中使用了apply方法的一个补充知识*
### 首先了解apply和call两者的区别
```js
// 使用apply方式
var obj = {
    name:"zhuyaogeng"
}
function full(firstName, lastName){
    console.log(firstName+'==='+'' + this.name + '' +'==='+ lastName);
    console.log(this);
}
// 注意这里的参数是一个数组
full.apply(obj,['zhu','yaogeng']); // firstName zhu zhuyaogeng lastName yaogeng

//使用call方式 
var obj1 = {
    age:19
}
var getInfo = function(A,B){
    this.name = 'zhuyaogeng';
    console.log('this is a '+ A +' '+ B ,',he age is ' + this.age );
    console.log(this);
}
// 注意这里的参数是一个个的对象
getInfo.call(obj1,'good','boy');  // this is a good boy ,he age is 19
```
**总结** 
- 两种方式都是传递的两个参数，一个是作为函数上下文的对象，一个是作为函数参数所组成的数组，或者是参数列表。
- 两者用法一样，只是参数不一样。

### apply和call用法 
#### 用法1 改变this指向
```js
var obj3 = {
    name:'zhuyaogeng'
}
function full1(){
    this.age = 20;
    console.log(this);
    console.log(this.name);
    // 调用之后相当于
    // console.log(obj3.name);
}
full1.call(obj3); //zhuyaogeng
```
同理 `apply` 用法一致
```js
var obj4 = {
    age:22
}
function full2(){
    console.log(this.age);
}
full2.apply(obj4);
``` 
#### 总结 
call和appl方式的第一参数所作为函数上下文的对象，这里把obj3作为参数传递给函数。传递之后，函数的this指向就变成了obj3的对象。














