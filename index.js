//--------------------------------------------
///Задание 1
//У нас есть массив с элементами 1, 2, 5, 6, 88, 5.
//   С помощью цикла надо найти сумму элементов этого массива.

     /// Решение:

// let sum = 0;
// const numbers = [1, 2, 5, 6, 88, 5];
// for (let i = 0; i < numbers.length; i++) {
//   sum += numbers[i];
// }
// console.log(sum);

////-----------------------------------------
///Задание 2
//Создайте массив с различными числами. Должно быть как минимум 10 элементов
//  внутри массива. С помощью цикла найдите сумму квадратов элементов этого массива.
// Квадрат числа 5 будет 25.

     /// Решение:


    //  let sum = 0;
    //  let numbers = [2, 3, 4, 5, 6, 7, 8, 9, 11, 12];
     
    //  for (let i = 0; i < numbers.length; i++) {
    //    sum += numbers[i] ** 2;
    //  }
     
    //  console.log(sum);
     
     
     ////-----------------------------------------
     
     ////// 3) Имеется массив с элементами 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20;
     //    Нужно найти перебирая эти элементы с помощью цикла четные числа.
     
               /// Решение:
     
     let numbers=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
     let x =[];
     for (let i=0;i<numbers.length;i++){
       x= numbers[i]
       if (x%2==0){
         console.log(x)
       }
     }
     