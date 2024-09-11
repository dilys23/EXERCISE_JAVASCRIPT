
// How to use slice()
// The slice() method returns a shallow copy of a portion of an array into a new array object
// slice() method takes one or two arguments: start and end
// nếu chỉ số start > end thì trả về mảng trống
// Với Array
const number = [1, 2, 3, 4, 5];
const slicedNumbers = number.slice(1, 3); // cắt từ số có vị trí là 1 đến số có vị trí là 3-1 = 2 
console.log(slicedNumbers);
// Với String
const text = "hello, world!";
const slicedText1 = text.slice(7, 12); // cắt từ vị trí thứ 7 đến vị trí 12-1
console.log(slicedText1)

const slicedText2 = text.slice(-12, -7); // cắt từ vị trí thứ -11  đến vị trí -7
console.log(slicedText2)

// 1. Write a JavaScript program to remove specified elements from the left of a given array of elements.
function sliceLeftNumber(arr, n = 1) {
    return arr.slice(n);
}
console.log (sliceLeftNumber([1, 2, 3, 4, 5], 3))// cắt từ số vị trí số 3 đến hết mảng (bỏ đi các số phía trước vị trí 3)
console.log(sliceLeftNumber(number, -3)) // nếu truyền vào 1 số âm thì nó sẽ cắt đi số phần tử từ cuối mảng trở lên 

// 2. Write a JavaScript program to remove specified elements from the right of a given array of elements.
function sliceRightNumber(arr, n = -1) {
    return arr.slice(n);
}
console.log (sliceRightNumber([1, 2, 3, 4, 5], 3))
console.log(sliceRightNumber(number, -3)) 

// Slice () với số dương là xóa từ trái qua phải 
// Slice () với số âm là xóa từ phải qua trái

// 3.  Intersection of Two Arrays
let arr1 = [1, 2, 3, 4, 5, 6]
let arr2 = [3, 4, 5, 8 ,5, 5, 0]
function intersection (arr1, arr2) {
    var newarr = new Array;
    for (var i = 0; i < arr1.length; i++) {
        if (arr2.indexOf(arr1[i]) != -1) { // dùng indexOf để dò là trong mảng Array 2 đó có phần tử của arr1 ko, có thì push vào arr mới
            newarr.push(arr1[i]);}
    }
    console.log('new Array',newarr);
}
function intersection1 (arr1, arr2)
{
    var newarr = new Array;
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++)
        {
            if (arr1[i] === arr2[j] && !newarr.includes(arr1[i])) // dùng include để kiểm tra là trong mảng đó đã có phần tử đó chưa, có rồi thì ko thêm dô nữa để tránh bị trùng
            {
                newarr.push(arr1[i]);
            }
        }
    }
   
        return newarr;
}
console.log("Cách 2",intersection1(arr1, arr2))
intersection(arr1, arr2);
