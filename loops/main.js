
// function sumEvenNumbers(range) {
//     var sum = 0,
//         count = 0;

//     for (var i = 1; i < range; i++) {
//         if ( i % 2 === 0) {
//             sum += i;
//             count++;
//         }
//     }
//     console.log(sum);
//     console.log(count);
// }
// sumEvenNumbers(47);

// function isPrime (num) {
//     if (num < 2) return 'Введите число больше 2';
//     for ( var i = 2; i < num; i++){
//         if ( num % i === 0 ) {
//             return;
//         }
//     }
//     return num;
// }
// console.log(isPrime(7))

// function searchRadicalNaturalNumber(num) {
//     var res;
//     for (var i = 0; i < num; i++) {
//         if (i*i <= num) {
//             res = i;
//         }
//     }
//     return res
// }
// console.log(searchRadicalNaturalNumber(10));


// Найти корень натурального числа с точностью до целого (метод бинарного поиска)
// function binarySearchRadicalNaturalNumber(num) {
//     var firstElem = 0,
//         lastElem = num,
//         middle, 
//         res = 0,
//         found = true

//     while ( found ) {

//         middle = Math.floor((firstElem + lastElem) / 2)

//         if(middle*middle === num ) {
//             found = false
//             res = middle
//         } else if (middle*middle >= num) {
//             lastElem = middle
//         } else {
//             firstElem = middle
//             for (var i = firstElem; i <= lastElem; i++) {
//                 if (i*i <= num) {
//                     found = false
//                     res = i 
//                 } else {
//                     found = false
//                 }
//             }
//         }
//     }
//     return res;
// }

// console.log(binarySearchRadicalNaturalNumber(5));


// Вычислить факториал числа n.
// function factorialNumber(num) {
//     var res = 1

//     for(var i = 1; i <= num; i++) {
//         res *=i
//     }
//     console.log(res)
//     return res
// }

// console.log(factorialNumber(5));


// Посчитать сумму цифр заданного числа
// function calculateSumNumber(num) {
//     var sum = 0;
//     var tmp;

//     while(num) {
//         tmp = num % 10
//         num = (num - tmp) / 10
//         sum += tmp
//     }

//     console.log(sum)
//     return sum
// }

// console.log(calculateSumNumber(31489348));


// Вывести число, которое является зеркальным отображением последовательности
// цифр заданного числа, например, задано число 123, вывести 321.
// function reversNumber(num) {
//     var res = 0;
//     console.log(); 
//     var tmp;

//     while(num) {
//         tmp = num % 10
//         num = (num - tmp) / 10
//         res = res * 10 + tmp
//     }

//     console.log(res)
//     return res
// }

// console.log(reversNumber(1235));