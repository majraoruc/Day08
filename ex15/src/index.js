//Only change code below this line

function convertToInt(string) {
    var intValue = parseInt(string,16);
    return intValue;
}
console.log(convertToInt("BA"));
console.log(convertToInt("F1"));
console.log(convertToInt("JeffBezos"));
//Only change code above this line
module.exports = convertToInt;