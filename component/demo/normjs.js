/**
 * 这是一个普通的js
 * Created by zhangfei on 2017/6/11.
 */
class Norm{
    constructor(x,y){
        this.x = x;
        this.y = y;
    }
    testFun(a,b){
        return a + b ;
    } ;
    toString() {
        return '(' + this.x + ', ' + this.y + ')';
    } ;
}

var m = new Norm(123,456) ;
console.log( m.x ) ;
console.log( m.testFun ) ;
export default  Norm;