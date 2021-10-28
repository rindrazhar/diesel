// let input = 70;
let data = [200, 100, 100, 50, 10, 20, 80, 80, 10, 10, 300];
// data.push(input);

function dataResults(arr) {
  if (arr.length === 0) return arr;
  arr = arr.sort(function (a, b) {
    return b * 1 - a * 1;
  });
  var kc = [arr[0]];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i - 1] !== arr[i]) {
      kc.push(arr[i]);
    }
  }
  return kc;
}
console.log(dataResults(data));
