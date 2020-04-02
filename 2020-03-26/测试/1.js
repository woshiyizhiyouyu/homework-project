/*
参数
Fn:想创建那个类的实例，就把哪个类传递进来
后续参数不固定个数，都是给当前类执行时候传递的值
返回值
Fn这个类的一个实例 
 */
function _new(Fn) {
    //处理传递的实参信息，把除传递给Fn的值以外的其他值都获取到
    let args = Array.from(arguments).slice(1);
    //创建一个实例对象（对象.__proto__ == 类.prototype）
    let obj = Object.create(Fn.prototype);
    //obj.__proto__ = Fn.prototype;IE浏览器不允许这样操作

    //执行Fn函数的时候，需要让Fn中的this指向实例对象obj
    let result = Fn().apply(obj, args);//执行FN让fn中的this等于obj并且把arg数组中的值传递给fn
    //把创建的实例对象返回(前提是fn执行返回的不是对象等引用值)
    if (result !== null && (typeof result === "object" || typeof result === "function")) {
        return result;
    }
    return obj;

}
/*
sanmao=new Dog ('三毛');
首先要把Dog当做普通函数执行（私有上下文、形参赋值、作用域链、变量提升、代码执行···）
特殊1：创建一个对象（这个对象是当前类的实例：对象.__proto__ == 类.prototype）
特殊2：并且让函数中的this指向创建的这个对象
特殊3：在函数没有返回结果或者返回基本数据类型时候，把创建的实例对象返回
*/
