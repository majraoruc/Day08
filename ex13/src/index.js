//Only change code below this line

function randomRangeNumber(minNumber, maxNumber) {
    var num = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
    return num;
}
console.log(randomRangeNumber(4, 51));
//Only change code above this line
module.exports = randomRangeNumber;