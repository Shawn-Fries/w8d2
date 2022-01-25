// Uniq

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


// Two Sum

Array.prototype.twoSum = function() {
    let result = [];
    let that = this;

    //debugger;
   this.forEach(function (ele1, index1) {
        that.forEach(function (ele2, index2) {
            if (index2 > index1 && ele1 + ele2 === 0) {
                result.push([ele1, ele2]);
            }
        })
   })

    // self.forEach(function (ele1, index1) {
    //     self.forEach(function (ele2, index2) {
    //         if (index2 > index1 && ele1 + ele2 === 0) {
    //             result.push([ele1, ele2]);
    //         }
    //     })
    // })
    return result;
}

