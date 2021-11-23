const perf = require('execution-time')();

function doublerAppend(nums){
    let new_nums = [];
    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.push(num);
    }
return new_nums
}

function doublerInsert(nums){
    let new_nums = [];
    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.unshift(num);
    }
return new_nums
}
// console.log(doublerAppend([1, 2, 4, 6, 10]))
// console.log(doublerInsert([1, 2, 4, 6, 10]))

function getSizedArray(size){
    let array = [];
    for (let i=0; i<size; i++){
        array.push(i);
    }
    return array
}

const tinyArray = getSizedArray(10);
const smallArray = getSizedArray(100);
const mediumArray = getSizedArray(1000);
const largeArray = getSizedArray(10000);
const extraLargeArray = getSizedArray(100000);
// console.log(tinyArray)
// console.log(smallArray)
// console.log(mediumArray)

perf.start();
doublerAppend(tinyArray);
let appendTiny = perf.stop();

perf.start();
doublerAppend(smallArray);
let appendSmall = perf.stop();

perf.start();
doublerAppend(mediumArray);
let appendMedium = perf.stop();

perf.start();
doublerAppend(largeArray);
let appendLarge = perf.stop();

perf.start();
doublerAppend(extraLargeArray);
let appendExtraLarge = perf.stop();

console.log("Append tiny:", appendTiny.preciseWords);
console.log("Append small:", appendSmall.preciseWords);
console.log("Append medium:", appendMedium.preciseWords);
console.log("Append large:", appendLarge.preciseWords);
console.log("Append extra large:", appendExtraLarge.preciseWords);

perf.start();
doublerInsert(tinyArray);
let insertTiny = perf.stop();

perf.start();
doublerInsert(smallArray);
let insertSmall = perf.stop();

perf.start();
doublerInsert(mediumArray);
let insertMedium = perf.stop();

perf.start();
doublerInsert(largeArray);
let insertLarge = perf.stop();

perf.start();
doublerInsert(extraLargeArray);
let insertExtraLarge = perf.stop();

console.log("Insert tiny:", insertTiny.preciseWords);
console.log("Insert small:", insertSmall.preciseWords);
console.log("Insert medium:", insertMedium.preciseWords);
console.log("Insert large:", insertLarge.preciseWords);
console.log("Insert extra large", insertExtraLarge.preciseWords);