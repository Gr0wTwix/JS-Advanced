// (function solve() {
//     Array.prototype.last = () => {
//         return this[this.length - 1];
//     };
    
//     Array.prototype.skip = n => {
//         if (!(n < 0) && !(n > array.length)) {
//             let myResult = [];
//             for (let i = n; i < this.length; i++) {
//                 myResult.push(this[i]);
//             };
//             return myResult;
//         }
//     };
    
//     Array.prototype.take = n => {
//         if (!(n < 0) && !(n > array.length)) {
//             let myResult = [];
//             for (let i = 0; i < n; i++) {
//                 myResult.push(this[i]);
//             };
//             return myResult;
//         }
//     };
    
//     Array.prototype.sum = () => {
//         return this.reduce((a,b) => a + b, 0);
//     };
    
//     Array.prototype.average = () => {
//         return this.sum() / this.length;
//     };
// }());


(function solve() {
 
    Array.prototype.skip = function (n) {
 
        let newArr = [];
 
        for (let index = n; index < this.length; index++) {
 
            newArr.push(this[index]);
 
        }
        return newArr;
    }
 
    Array.prototype.last = function () {
 
        return this[this.length - 1];
 
    }
 
    Array.prototype.take = function (n) {
 
        let newArr = [];
 
        for (let index = 0; index < n; index++) {
 
            newArr.push(this[index]);
 
        }
        return newArr;
 
    }
 
    Array.prototype.sum = function () {
 
        let sum = 0;
 
        for (let index = 0; index < this.length; index++) {
 
            sum += this[index];
 
        }
        return sum;
 
    }
 
    Array.prototype.average = function () {
 
        return this.sum() / this.length;
 
    }
 
 
}());

