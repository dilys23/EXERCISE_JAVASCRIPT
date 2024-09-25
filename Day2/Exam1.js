//practice functions in js
// reverse a number input
// 1234-> 4321

function NumbertoArray(n) {
  const array = [];
  const numStr = String(n);
  for (let i = 0; i < numStr.length; i++) {
    array.push(Number(numStr[i]));
  }
  return array;
}

// Các cách chuyển số sang String 
function NumtoArray (n)
{
  return newArray = Array.from(String(n), Number)
}
function reverseNumber(n) {
  // change number to array
  const array = NumbertoArray(n);
  const array1 = [];
  for (let i = 0; i < array.length; i++) {
    array1.push(array[array.length - i -1 ]);
  }
  return array1.join(" ");
}
// tối ưu hàm 
function reverseNumber1(n)
{
  const array = NumtoArray(n)
  return array.reverse().join(" ");
}
console.log(reverseNumber(1234));
console.log(reverseNumber1(24578))
