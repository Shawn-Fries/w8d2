Array.prototype.uniq = function () {
    let charExists  = {};
    let result = [];
    this.forEach(function (ele) {
        if (!charExists[ele]) {
            charExists[ele] = true; 
            result.push(ele);
        }
    })
    return result; 
}
// if (!result.includes(ele)) {
//     result.push(ele);
// }

console.log([1,1,2,2,3,3,4,4,5,5].uniq())

