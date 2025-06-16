var courses = [
  {
    id: 1,
    name: 'Java',
    coin: 100
  }, 
  {
    id: 2,
    name: 'CSS',
    coin: 200
  },
]
var i = 0;

function coinHandler(accumulator, currentValue, currentIndex, originArray) {
  i++;

  var total = accumulator + currentValue.coin;

  console.table({
    'Lượt chạy: ': i,
    'Biến tích trữ: ': accumulator,
    'Giá khoá học: ': currentValue.coin,
  });
  return accumulator + currentValue.coin;
}

var totalCoin = courses.reduce(coinHandler, 0);
console.log(totalCoin);