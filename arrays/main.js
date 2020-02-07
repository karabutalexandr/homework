
function getMimValue(arr) {
    var minValue = arr[0];
    
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] < minValue) {
           minValue = arr[i] 
        } 
    }

    return minValue;
}

console.log(getMimValue([7, 5, 6, 15, 2, 3, 13, 4]));


// Найти максимальный элемент массива
// function getMaxValue(arr) {
//     var maxValue = arr[0];
    
//     for (var i = 1; i < arr.length; i++) {
//         if (arr[i] > maxValue) {
//             maxValue = arr[i];
//         } 
//     }

//     return maxValue;
// }

// console.log(getMaxValue([7, 5, 6, 15, 2, 3, 13, 4]));


// Найти индекс минимального элемента массива
// function getIndexMimValue(arr) {
//     var indexMinValue = 0;
    
//     for (var i = 1; i < arr.length; i++) {
//         if (arr[i] < arr[indexMinValue]) {
//            indexMinValue = i;
//         } 
//     }

//     return indexMinValue;
// }

// console.log(getIndexMimValue([7, 5, 6, 15, 2, 3, 13, 4]));


// Найти индекс максимального элемента массива
// function getIndexMaxValue(arr) {
//     var indexMaxValue = 0;
    
//     for (var i = 1; i < arr.length; i++) {
//         if (arr[i] > arr[indexMaxValue]) {
//             indexMaxValue = i;
//         } 
//     }

//     return indexMaxValue;
// }

// console.log(getIndexMaxValue([7, 5, 6, 15, 2, 3, 13, 4]));


// Посчитать сумму элементов массива с нечетными индексами
// function сalculateSumOddElem(arr) {
//     var sumOddElem = 0;

//     for (var i = 1; i < arr.length; i += 2) {
//         sumOddElem += arr[i];
//     }

//     return sumOddElem;
// }

// console.log(сalculateSumOddElem([7, 5, 6, 15, 2, 3, 13, 4]));


// Сделать реверс массива
// function reversArray(arr) {
//     var newArr = [];
//     var j = 0;

//     for (var i = arr.length -1; i >=0; i-- ) {
//         newArr[j] = arr[i];
//         j++;
//     }

//     return newArr
// }

// console.log(reversArray([7, 5, 6, 15, 2, 3, 13, 4]));


// Посчитать количество нечетных элементов массива
// function сalculateOddElem(arr) {
//     var numOddElem

//     if (arr.length % 2 === 0) numOddElem = arr.length/2 
//     if (arr.length % 2 !== 0) numOddElem = (arr.length - 1)/2 

//     console.log('Количество нечетных элементов массива равно ' + numOddElem )
//     return numOddElem
// }

// console.log(сalculateOddElem([7, 5, 6, 15, 2, 3, 13, 4, 8]));


// Поменять местами первую и вторую половину массива
// function changeArray(arr) {

//     var middleArray = arr.length /2;
//     var cpos = middleArray + arr.length % 2;
//         if (middleArray % 2 === 0){
//             for (var i = 0; i < middleArray; i++) {
//                 var t = arr[i];
//                 arr[i] = arr[cpos + i];
//                 arr[cpos + i] = t;
//             }
//         } else {
//             cpos -= 0.5
//             for (var i = 0; i < middleArray -1; i++) {
//                 var t = arr[i];
//                 arr[i] = arr[cpos + i];
//                 arr[cpos + i] = t;
//         }
        
//     }

//     console.log(arr)
//     return arr
// }

// console.log(changeArray([1, 2, 3, 4, 5]));


// Сортировка массива 
// function bubbleSort(arr) {
//     for (var i = 0; i < arr.length - 1; i++) {
//         for (var j = 0; j < arr.length - 1 - i; j++) {
//             if (arr[j] > arr[j+1]) {
//                 var tmp = arr[j+1]
//                 arr[j+1] = arr[j]
//                 arr[j] = tmp
//             }
//         }
//     }
//     console.log(arr)
//     return arr
// }

// console.log(bubbleSort([4, 6, 2, 5, 3, 1, 8, 7]));


// Сортировка массива 
// function selectSort(arr) {
//     for (var i = 0; i < arr.length - 1; i++) {
//         var minValue = i

//         for(var j = i + 1; j < arr.length; j++) {
//             if (arr[minValue] > arr[j]) minValue = j
//         }

//         if(minValue !== j) [arr[i], arr[minValue]] = [arr[minValue], arr[i]]
//     }
//     console.log(arr)
//     return arr
// }

// console.log(selectSort([4, 6, 2, 5, 3, 1, 8, 7]));

//Сортировка массива 
// function insertSort(arr) {
//     for (var i = 0; i < arr.length; i++) {
//         var valueArr = arr[i];
//         for(var j = i ; j >=1; j--) {
//             if (arr[j] < arr[j-1]) {
//                 [arr[j], arr[j-1]] = [arr[j-1], arr[j]];
//             }
//         }
//     }

//     console.log(arr)
//     return arr
// }

// console.log(insertSort([4, 6, 2, 5, 3, 1, 8, 7]));