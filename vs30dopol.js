//Преобразовать написанный код в 26-33 пунктах в функцию, принимающую на вход возраст.
//Пример: const checkAge = function(age) 
//  Вывести в консоль результат работы функции с возрастами 17, 18, 61:
  
/* const age_2 = 18;
const age_3 = 60;

const checkAge = function(age) {
          if(age <age_2){
          console.log("You don’t have access cause your age is'" + age + "'It`s less then");
      } else if (age >= age_2 && age < age_3){
          console.log("Welcom  !!!");
      } else if(age > age_3){
           console.log("Keep calm and look Culture channel");
      } else {
           console.log("Technical work");
      }else console.log('Not an integer value')
    } 

      checkAge(17)
      checkAge(18)
      checkAge(60)
      checkAge(61)

       */
//Преобразовать задание 1* таким образом, чтобы первым делом в функции
// проверялся тип данных. И если он не Number - кидалась ошибка.

/* const age_2 = 18;
const age_3 = 60;

const checkAge = function(age) {
 if(typeof age == 'number') {
          if(age <age_2){
          console.log("You don’t have access cause your age is'" + age + "'It`s less then");
      } else if (age >= age_2 && age < age_3){
          console.log("Welcom  !!!");
      } else if(age > age_3){
           console.log("Keep calm and look Culture channel");
      } else {
           console.log("Technical work");
      }
    } else console.log('Not an integer value')
  } 

      checkAge(17)
      checkAge(18)
      checkAge(60)
      checkAge(61)
      checkAge('aaa')
     
      */ 
      
 
 //Преобразовать 2* таким образом, чтобы значение '2' 
 //(строка в которой лежит ТОЛЬКО ЦИФРА) пропускалось, преобразовываясь в number     

const age_2 = 18;
const age_3 = 60;

const checkAge = function(age) {
//Преобразовываем снасала наше значение (age) в Number
  //age = Number(age) 
  //Выведем все значения после преобразования, которые получились
  //console.log(age)
  //Проверяем что здесь будет не фолс (т.к. '0' по сттандарту ложное, используем эту комманду)
  //используем с отрицанием
 if(age && !isNaN(age)) {
          if (age < age_2) {
          alert("You don’t have access cause your age is'" + age + "'It`s less then");
      } else if (age >= age_2 && age < age_3){
          alert("Welcom  !!!");
      } else if(age > age_3){
           alert("Keep calm and look Culture channel");
      } else {
           alert("Technical work");
      }
    } else alert('Not an integer value');
  } 
      
     // checkAge(17)
     // checkAge(18)
     // checkAge(60)
     // checkAge(61)
     // checkAge('aaa')
     // checkAge('20')
     // checkAge('0')
    //  checkAge(' ')
     
    //Нужно чтобы юзер сам вводил какието значения внутрь функции
    //задаем переменную, в котором будет передаваться значение, которое мы будем забирать из верстки
     let a = prompt('Enter your age')
     //Запрашиваем в браузере вывод диалогового окна, в котором что-то введем
//Вызов 
    checkAge(prompt('Enter your age'))

