function sum (arr) {
    return arr.reduce (function (aggr, val){
        return aggr + val;
    },0);

}
console.log (sum ([5,7,9]));