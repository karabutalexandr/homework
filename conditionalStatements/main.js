// //Если а – четное посчитать а*б, иначе а+б
// function getValue(firstParam, secondParam) {
//     if (a % 2 === 0) {
//         return a * b;
//     } 
//     return a + b;
// }
// console.log(getValue(2, 5));

// //Определить какой четверти принадлежит точка с координатами (х,у)
// function getPartByCoordinates(x, y) {
//     if ( x > 0 && y > 0 ) {
//         console.log( Точка принадлежит первой четверти )
//     }
//     if ( x > 0 && y < 0 ) 
//         console.log( Точка принадлежит второй четверти )
//     if ( x < 0 && y < 0 ) 
//         console.log( Точка принадлежит третей четверти )
//     if ( x > 0 && y > 0 ) 
//         console.log( Точка принадлежит четверной четверти )
//     if ( x === 0 && y === 0 ) 
//         console.log( Точка находится в центре координат )
// }
// console.log(getPartByCoordinates(1, 5));



// Найти суммы только положительных из трех чисел
// var a = 1
// var b = -1
// var c = 2

// var sum = 0
// if (a > 0) sum +=a
// if (b > 0) sum +=b
// if (c > 0) sum +=c
// console.log ('Сумма положительных чисел равна ' + sum)


// Посчитать выражение max(а*б*с, а+б+с)+3
// var a = 1
// var b = 2
// var c = 3

// var res = Math.max( a*b*c, a+b+c ) + 3
// console.log(res)


// Написать программу определения оценки студента по его рейтингу
// var val = 25,
//     f = 'F',
//     e = 'E',
//     d = 'D',
//     c = 'C',
//     b = 'B',
//     a = 'A'
// function getMark(val) {
//     if ( val >= 0 && val <= 19) console.log( 'Оценка студента F' )
//     if ( val <= 39) console.log( 'Оценка студента E' )
//     if ( val <= 59) console.log( 'Оценка студента D' )
//     if ( val <= 74) console.log( 'Оценка студента C' )
//     if ( val <= 89) console.log( 'Оценка студента B' )
//     if ( val <= 100) console.log( 'Оценка студента A' )
// }
// console.log(getMark(75))