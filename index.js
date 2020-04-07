/* binary(1) ➞ "1"
// 1*1 = 1

binary(5) ➞ "101"
// 1*1 + 1*4 = 5

binary(10) ➞ "1010"
// 1*2 + 1*8 = 10 */

var input = (11)

function convertNum () {
    let decimalNum = number  => {
        return (number >>> 0).toString(2);
    }
let binaryNum = decimalNum (input)
console.log(binaryNum)
}

convertNum()