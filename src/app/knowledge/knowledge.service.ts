import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class KnowledgeService {

  constructor() { }

  
  dataList:any = [
    {
      title:'typeof和instanceof类型判断',
      content:`
        <h2>typeof对于原始类型来说，除了null都可以显示正确的类型</h2>
        <p>typeof 1 // number</p>
        <p>typeof '1' // string</p>
        <p>typeof undefined // undefined</p>
        <p>typeof true // boolean</p>
        <p>typeof Symbol() // symbol</p>
        <h2>typeof对于对象来说，除了函数都会显示object，所以说typeof并不能准确判断变量到底是什么类型</h2>
        <p>typeof [] // object </p>
        <p>typeof {} // object</p>
        <p>typeof console.log // function</p>
        <h2>如果我们想判断一个对象的正确类型，这是可以考虑使用instanceof，它的内部机制是通过原型链来判断的</h2>
        <p>const Person = function (){}</p>
        <p>const p1 = new Person()</p>
        <p>P1 instanceof Person // true</p>
        <p>var str = 'string';</p>
        <p>str instanceof String // false</p>
        <p>var str2 = new String('string');</p>
        <p>str2 instanceof String // true</p>
        <h2>对于原始类型，如果用instanceof判断类型，需要new，否则为false</h2>
      `
    },
    {
      title:'类型转换',
      content:`
        <h2>在JS中类型转换只有三种，分别是 转为布尔值、转为数字、转为字符串</h2>
        <p>转Boolean：在条件判断时，除了undefined、null、false、NaN、''、0、-0，其他所有值都转为true，包括所有对象。</p>
        <h2>对象转为原始类型：对象在转换类型时，会调用内置的ToPrimitive函数，该函数算法逻辑如下</h2>
        <p>如果已经是原始类型了，就不需要转换了</p>
        <p>调用x.valueOf() 如果转换为基础类型，就返回转换的值</p>
        <p>调用x.toString() 如果转换为基础类型，就返回转换的值</p>
        <p>如果都没有返回原始类型，就会报错</p>
      `
    },
    {
      title:'闭包',
      content:`
        <h2>闭包的定义其实很简单：函数A内部有一个函数B，函数B可以访问到函数A中的变量，那么函数B就是闭包。</h2>
        <h2>闭包存在的意义就是让我们可以间接访问函数内部的变量。</h2>
        <h2>经典面试题：循环中使用闭包解决var定义函数的问题：</h2>
        <p>for(var i=0;i<5;i++){</p>
        <p>&nbsp;&nbsp;setTimeout(function timer(){</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;console.log(i)</p>
        <p>&nbsp;&nbsp;},1000)</p>
        <p>}</p>
        <h2>因为setTimeout是个异步函数，所以会先把循环全部执行完毕，这时候i就是5了，所有会一直输入5。</h2>
        <h3>第一种解决办法（推荐）：使用let定义i来解决</h3>
        <p>for(let i=0;i<5;i++){</p>
        <p>&nbsp;&nbsp;setTimeout(function timer(){</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;console.log(i)</p>
        <p>&nbsp;&nbsp;},1000)</p>
        <p>}</p>
        <hr>
        <h3>第二种解决办法：使用闭包来解决</h3>
        <p>for(var i=0;i<5;i++){</p>
        <p>&nbsp;&nbsp;;(function(t){</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;setTimeout(function timer(){</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;console.log(i)</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;},1000)</p>
        <p>&nbsp;&nbsp;})(i)</p>
        <p>}</p>
      `
    },
    {
      title:'深拷贝浅拷贝',
      content:`
        <h2>浅拷贝：首先可以通过Object.assign来解决这个问题，Object.assign只会拷贝所有的属性值到新的对象中，如果属性值是对象的话，拷贝的是地址。</h2>
        <p>let a = { age:30 };</p>
        <p>let b = Object.assign({},a);</p>
        <p>a.age = 1;</p>
        <p>console.log(b.age) // 30</p>
        <h2>还可以通过展开运算符...来实现浅拷贝</h2>
        <p>let a = { age:30 };</p>
        <p>let b = { ...a };</p>
        <p>a.age = 1;</p>
        <p>console.log(b.age) // 30</p>
        <h2>通过浅拷贝能够解决大部分问题，但是当我们遇到以下情况就需要使用深拷贝了：</h2>
        <p>let a = {</p>
        <p>&nbsp;&nbsp;age:30,</p>
        <p>&nbsp;&nbsp;jobs:{</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;type:'c'</p>
        <p>&nbsp;&nbsp;}</p>
        <p>}</p>
        <p>let b = { ...a };</p>
        <p>a.jobs.type = 'A';</p>
        <p>console.log(b.jobs.type) // A 浅拷贝只解决了第一层的问题，如果接下去的值中还有对象的话，就需要用深拷贝</p>
        <h2>深拷贝：JSON.parse(JSON.stringify(a))</h2>
        <p>a.jobs.type = 'A';</p>
        <p>console.log(b.jobs.type) // c</p>
        <p>该方法有局限性：会忽略undefined、会忽略symbol、不能序列化函数、不能解决循环引用的对象</p>
      `
    },
    {
      title:'原型',
      content:`
        <h2>原型链就是多个对象通过_proto_的方式连接了起来。为什么obj可以访问到valueOf函数，就是因为obj通过原型链找到了valueOf函数。</h2>
        <p>Object是所有对象的爸爸，所有对象都可以通过_proto_找到它。</p>
        <p>Function是所有函数的爸爸，所有函数都可以通过_proto_找到它。</p>
        <p>函数的prototype是一个对象。</p>
        <p>对象的_proto_属性指向原型，_proto_将对象和原型连接起来组成了原型链。</p>
      `
    },
    {
      title:'var、let和const的区别',
      content:`
        <h2>什么是提升？什么是暂时性死区？var、let和const的区别是什么？</h2>
        <p>函数提升优先于变量提升，函数提升会把整个函数挪到作用域顶部，变量提升只会把声明挪到作用域顶部。</p>
        <p>var存在提升，我们能在声明之前使用。let和const因为暂时性死区的原因，不能在声明前使用。</p>
        <p>var在全局作用域下声明变量会导致变量挂载在window上，let和const不会。</p>
        <p>let和const作用基本一致，但const声明的变量不能再次赋值。</p>
      `
    },
    {
      title:'原型继承和Class继承',
      content:`
        <h2>原型如何实现继承？Class如何实现继承？Class本质是什么？</h2>
        <p>class:其实在jS中并不存在类，class只是语法糖，本质还是函数</p>
        <p>class Parent(){  }</p>
        <p>Parent instanceof Function // true</p>
        <hr>
        <h3>组合继承：组合继承是最常用的继承方式</h3>
        <p>function Parent(value){
        <p>&nbsp;&nbsp;this.val = value;
        <p>}
        <p>Parent.prototype.getValue = function(){</p>
        <p>&nbsp;&nbsp;console.log(this.val)</p>
        <p>}</p>
        <p>function Child(value){</p>
        <p>&nbsp;&nbsp;Parent.call(this,value);</p>
        <p>}</p>
        <p>Child.prototype = new Parent();</p>
        <p>const child = new Child(1);</p>
        <p>child.getValue() // 1</p>
        <p>child instanceof Parent // true</p>
        <h2>以上继承的方式核心是在子类的构造函数中通过 Parent.call(this) 继承父类的属性，然后改变子类的原型为 new Parent() 来继承父类的函数。</h2>
        <h2>这种继承方式有点在于构造函数可以传参，不会与父类引用属性共享，可以复用父类的函数，但是也存在一个缺点就是在继承父类函数的时候调用了父类的构造函数，导致子类的原型上多了不需要的父类属性，存在内存上的浪费。</h2>
        <hr>
        <h3>组合类继承：这种继承方式对组合继承进行了优化，组合继承缺点在于继承父类函数时调用了构造函数，我们只需要优化掉这点就行。</h3>
        <p>function Parent(value){</p>
        <p>&nbsp;&nbsp;this.val = value;</p>
        <p>}</p>
        <p>Parent.prototype.getValue = function(){</p>
        <p>&nbsp;&nbsp;console.log(this.val)</p>
        <p>}</p>
        <p>function Child(value){</p>
        <p>&nbsp;&nbsp;Parent.call(this,value);</p>
        <p>}</p>
        <p>Child.prototype = Object.create(Parent.ptototype,{</p>
        <p>&nbsp;&nbsp;constructor:{</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;value:Child,</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;enumerable:false,</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;writable:true,</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;configurable:true</p>
        <p>&nbsp;&nbsp;}</p>
        <p>})</p>
        <p>const child = new Child(1);</p>
        <p>child.getValue() // 1</p>
        <p>child instanceof Parent // true</p>
        <h2>以上继承实现的核心就是将父类的原型赋值给子类，并且将构造函数设置为子类，这样既解决了无用的父类属性问题，还能正确的找到子类的构造函数。</h2>
        <hr>
        <h3>class类继承：以上两种继承方式都是通过原型去解决的，在ES6中，我们可以使用class去实现继承，并且实现起来很简单。</h3>
        <p>class Parent{</p>
        <p>&nbsp;&nbsp;constructor(value){</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;this.val = value;</p>
        <p>&nbsp;&nbsp;}</p>
        <p>}</p>
        <p>getValue(){</p>
        <p>&nbsp;&nbsp;console.log(this.val)</p>
        <p>}</p>
        <p>class Child extends Parent{</p>
        <p>&nbsp;&nbsp;constructor(value){</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;super(value)</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;this.val = value;</p>
        <p>&nbsp;&nbsp;}</p>
        <p>}</p>
        <p>let child = new Child(1);</p>
        <p>child.getValue() // 1</p>
        <p>child instanceof Parent // true</p>
        <h2>class实现继承的核心在于使用 extends 表明继承自哪个父类，并且在子类构造函数中必须调用super，因为这段代码可以看成 Parent.call(this,value)</h2>
      `
    },
    {
      title:'模块化',
      content:`
        <h2>为什么要使用模块化？都有哪几种方式可以实现模块化，各有什么特点？</h2>
        <p>&nbsp;&nbsp;1、解决命名冲突</p>
        <p>&nbsp;&nbsp;2、提供复用性</p>
        <p>&nbsp;&nbsp;3、提高代码可维护性</p>
        <hr>
        <h2>立即执行函数：</h2>
        <p>&nbsp;&nbsp;使用立即执行函数实现模块化是常见的手段，通过函数作用域解决了命名冲突、污染全局作用域的问题。</p>
        <p>&nbsp;&nbsp;(function(globalVariable){</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;globalVariable.test = function(){</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;// ... 声明各种变量、函数，都不会污染全局作用域</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;}</p>
        <p>&nbsp;&nbsp;})(globalVariable)</p>
      `
    },
    {
      title:'实现一个简单的promise',
      content:`
        <h2>// 三个常量用于表示状态</h2>
        <p>const Pending = 'pending';</p>
        <p>const Resolved = 'resolved';</p>
        <p>const Rejected = 'rejected';</p>
        <p>function Promise(fn){</p>
        <p>const that = this;</p>
        <p>this.state = Pending;</p>
        <p>// value变量用来保存resolve或者reject中传入的值</p>
        <p>this.value = null; </p>
        <p>// 用于保存then中的回调，因为当执行玩Promise时状态可能还是等待中</p>
        <p>that.resolvedCallbacks = [];</p>
        <p>that.rejectedCallbacks = [];</p>
        <p>function resolve(value){</p>
        <p>&nbsp;&nbsp;// 首先两个函数都得判断当前状态是否为等待中</p>
        <p>&nbsp;&nbsp;if(that.state === Pending){</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;that.state = Resolved;</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;this.value = value;</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;// 遍历回调数组并执行</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;that.resolvedCallbacks.map(cd=>{</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;cd(that.value);</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;})</p>
        <p>}</p>
        <p>function reject(value){</p>
        <p>&nbsp;&nbsp;if(that.state === Pending){</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;that.state = Rejected;</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;that.value = value;</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;that.rejectedCallbacks.map(cb=>{</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;cb(that.value);</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;})</p>
        <p>&nbsp;&nbsp;}</p>
        <p>}</p>
        <p>// 完成以上两个函数以后，我们就该实现如何执行Promise中传入的函数了</p>
        <p>try{</p>
        <p>&nbsp;&nbsp;fn(resolve,reject);</p>
        <p>}cach(e){</p>
        <p>&nbsp;&nbsp;reject(e);</p>
        <p>}</p>
        <p>// 最后我们来实现较为复杂的then函数</p>
        <p>Promise.prototype.then = function(onFulfilled,onRejected){</p>
        <p>&nbsp;&nbsp;const that = this;</p>
        <p>&nbsp;&nbsp;// 判断两个参数是否为函数类型，因为这两个参数是可选参数</p>
        <p>&nbsp;&nbsp;onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : v=>v;</p>
        <p>&nbsp;&nbsp;onRejected = typeof onRejected === 'function' ? onRejected : e=>throw e;</p>
        <p>&nbsp;&nbsp;// 当状态不是等待态时，就去执行相对应的函数。如果是等待态，就往回调函数中push</p>
        <p>&nbsp;&nbsp;if(this.state === Pending){</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;this.resolvedCallbacks.push(onFulfilled);</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;this.rejectedCallbacks.push(onRejected);</p>
        <p>&nbsp;&nbsp;}</p>
        <p>&nbsp;&nbsp;if(this.state === Resolved){</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;onFulfilled(that.value);</p>
        <p>&nbsp;&nbsp;}</p>
        <p>&nbsp;&nbsp;if(this.state === Rejected){</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;onRejected(that.value);</p>
        <p>&nbsp;&nbsp;}</p>
        <p>}</p>
      `
    },
    {
      title:'手写call、apply和bind函数',
      content:`
        
      `
    }
  ]
  // <h2></h2>
  // <p></p>
  // &nbsp;&nbsp;
}
