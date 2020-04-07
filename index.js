/* binary(1) ➞ "1"
// 1*1 = 1

binary(5) ➞ "101"
// 1*1 + 1*4 = 5

binary(10) ➞ "1010"
// 1*2 + 1*8 = 10 */


function binary(num) {
    console.log(num.toString(2))
}

binary(1);
binary(5);
binary(10);