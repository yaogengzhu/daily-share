## 每日分享
### 第一小题  
- //题目描  // 移除数组 arr 中的所有值与 item 相等的元素，直接在给定arr 数组上进行操作，并将结果返回


<<<<<<< HEAD
###  浏览器上的拖拉事件
- 拖拉（drag）指的是，用户在某个对象上按下鼠标键不放，拖动它到另一个位置，然后释放鼠标键，将该对象放在那里。
=======

>>>>>>> 977eeeb6cb0391ba6902e8cdd381fb38f60de159

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
  -  第五：drop, 被拖拉的节点，释放到目标节点时，会触发这个事件。这个节点可以触发添加节点或者删除节点。

  ## EventTarget。addEventListener()
  ### `EventTarget.addEventListener()` 用于在当前节点或者对象傻姑娘，定义一个特定的事件的监听函数。一旦这个事情发生之后，就会执行监听函数，该方法是没有返回值的 。
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


## 利用css伪类来解决一些css美化问题；
![](https://github.com/yaogengzhu/life-share/blob/master/images/page1.png?raw=true)
### 具体意思
    - 在CSS中，伪类是可以级联使用的，于是，如果列表可以匹配:first-child:nth-last-child(2)则表示当前<li>元素即是第1个子元素，又是从后往前第2个子元素，因此，我们就能判断当前总共两个<li>子元素，我们就能精准实现我们想要的布局了，只需要配合相邻兄弟选择符加号+以及兄弟选择符弯弯~即可 
**摘自张旭鑫**

##  鼠标的11个事件
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
## 键盘事件的种类
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

## 关于JavaScript中两个原生API的使用介绍 -- 在代码里写的很清楚了 
- 第一个是contains   
- 第二个是compareDocumentPosition()   ['地址'](https://developer.mozilla.org/zh-CN/docs/Web/API/Node/compareDocumentPosition)
- 具体API介绍，可以上MDN上。

## 浏览器的进度事件
 进度事件用来描述资源加载的进度，主要是由ajax请求。img、audio、video、style、link等外部资源的加载触发。继承了progressEvent接口。主要有以下几个事件
 - abort: 外部资源中止加载时（用户取消）触发。但是如果发生错误导致终止，该事件不会触发 
 - error: 由于错误导致外部资源无法加载时触发。
 - load: 外部资源加载成功时触发 
 - loadstrat: 外部资源开始加载时触发 
 - loadend: 外部资源停止加载时触发，发生顺序排在error、abort、load等事件的后面。
 - progress: 外部资源加载不断的触发 
 - timeout: 加载超时时触发。


 ## 使用document.scrollingElement控制窗体滚动高度  
### 为何会有document.scrollingElement?  
如果只是为了获取当前页面的窗体的滚动高度，直接使用window.pageYOffset就可以（IE9+） ,桌面和移动端都是支持的 
但是windows.pageYOffset是一个只读的属性，我们无法用来设置窗体的滚动高度，此时，就要找到对应的滚动元素，通过设置scrollTop的值来改变窗体的滚动位置。
**注意** 对于桌面端和手机端窗口的滚动元素都是不一样的
- `document.documentElement.scrollTop` 是可以获取pc端窗口的滚动大小。
- `document.body.scrollTop` 是可以用来获取手机端滚动窗体的大小。
####  具体的demo 可以参考day5中的测试代码。
**通过上面两个例子可以知道获取滚动高度不一致的现象是兼容问题引起的**如果需要做适配，则需要写兼容代码。（就是两个代码一起写）
**因此`document.scrollingElement`这个属性才应运而生。可以直接动态的识别滚动的容器，无需在多写一连串的代码**
**`document.scrollingElement`** 在桌面端就是documen.documentElement,在移动端就是document.body
当然也可以直接设置其`scrollTop`的属性值来改变窗体的位置。
**本文参考张旭鑫---  建议以后使用`document.scrollingElement`来获取窗口的高度**

##  表单事件的种类
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

## css中的scroll-behaviour 和js 中的scrollIntoView让页面滚动平滑
- 在没有这没用这个方式之前，平时测试时使用的css锚点定位可以实现，但是这个种方式会带累这样的缺点
    - 改变location中的hash值来实现会使浏览器触发原生的滚动行为
    - 切换效果十分生硬效果不好。

- 结合input框的onfocus来实现的效果很棒～可以参考 **day6 06---.html**

**记住以后在敲代码过程中** 加上这个代码有意外的效果，返回按钮再也不用做其他更多的操作来。
```css
html, body { scroll-behavior:smooth; }
```
- 注意一定的兼容性～