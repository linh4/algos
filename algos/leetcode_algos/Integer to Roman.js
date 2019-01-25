// Given an integer, convert it to a roman numeral. Input is guaranteed to be within the range from 1 to 3999.

var intToRoman = function(num) {
    const roman = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"]
    const int = [1000,900,500,400,100,90,50,40,10,9,5,4,1]
    let result = ""

    for(let i = 0; i < int.length; i++) {
        let val = int[i]
        if(num >= val) {
            let count = parseInt(num/val)
            num %= val;

            for(let j = 0; j < count; j++) {
                result = result + roman[i]
            }
        }
    }
    return result;
}

intToRoman(58)
// return "LVIII"
// 1994
// return "MCMXCIV"
