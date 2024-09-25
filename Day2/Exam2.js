// tạo mảng mới được lấy ra phần tử trong mảng bằng giá trị index truyền vào 
function getnewArray(array, index)
{
    const newArray = []
    for (let j = 0; j < index.length; j++)
    {

        for (let i = 0; i < array.length; i++)
        {
            if (i === index[j])
            {
                newArray.push(array[i])
            }
        }
    }
    return newArray;
}
console.log(getnewArray([1, 2, 3, 4], [3, 1]))
