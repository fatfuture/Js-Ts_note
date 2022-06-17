







function greeting(name) {
    var text = 'Hello ' + name; // local variable
    // 每次调用时，产生闭包，并返回内部函数对象给调用者
    return function() { console.log(text); }//注意该函数无名称，称为匿名函数
}
var sayHello = greeting('Closure');//调用greeting()返回了什么？
sayHello();  // 注意此处的使用方法。通过闭包访问到了局部变量text

