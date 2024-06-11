	
	//Задачки на методы строк и чисел

	//++ 1.Создайте функцию, которая принимает строку и возвращает её длину.

	function backStringLength(str) {
	  return str.length;
	}
	
	backStringLength('раздватри') // 9
	
	//++ 2.Напишите функцию, которая принимает число и возвращает его квадрат.

	function backSquareOfNumber(num) {
	  return Math.pow(num, 2);
	}

	backSquareOfNumber(5); // 25
	
	//++ 3.Напишите функцию, которая принимает строку и возвращает её в верхнем регистре.

	function backStringToUpperCase(str) {
	  return str.toUpperCase();
	}

	backStringToUpperCase('раздватри') // "РАЗДВАТРИ"

	//++ 4.Создайте функцию, которая принимает число и возвращает его куб.

	function backCubeOfNumber(num) {
	  return Math.pow(num, 3);
	}

	backSquareOfNumber(5); // 125
	
	//++ 5.Напишите функцию, которая принимает строку и возвращает её в нижнем регистре.

	function backStringToLowerCase(str) {
	  return str.toLowerCase();
	}

	backStringToLowerCase('РАЗДВАТРИ') // "раздватри"
	
	//++ 6.Создайте функцию, которая принимает число и возвращает его абсолютное значение.

	function backAbsoluteNumber(num) {
	  return Math.abc(num);
	}

	backAbsoluteNumber(-5); // 5
	
	//-- 7.Напишите функцию, которая принимает строку и возвращает её длину без учёта пробелов.

	function backStringLengthWithOutSpaces(str) {

	}
	
	backStringLengthWithOutSpaces()

	//++ 8.Создайте функцию, которая принимает число и возвращает его факториал.

	function backFactorialOfNumber(num) {
	  let result = 1;
	  for(let i = 1; i <= num; i++) {
		result *= i;
	  }
	    return result;
	}
	
	backFactorialOfNumber(5); // 120
	
	//++ 9.Напишите функцию, которая принимает строку и возвращает её обратно в обратном порядке.

	function backReverseString(str) {
	  let newStr = '';
	  
	  for (let i = str.length - 1; i >= 0; --i) {
	  	newStr += str[i];
	  } 
	  return newStr;
	}
	
	backReverseString('Строка'); // акортС
	
	//++ 10.Создайте функцию, которая принимает число и возвращает true, если оно является простым, и false в противном случае.

	function checkIsSimpleNumber(num) {
	  return (num % 2 !== 0 && num % 3 !== 0) ? true : false;
	}

	checkIsSimpleNumber(5);
	
	// 11.Напишите функцию, которая принимает строку и возвращает количество гласных букв в ней.

	
	//++ 12.Создайте функцию, которая принимает число и возвращает его представление в двоичном виде.

	function backBinaryNumber(num) {
	  return num.toString(2);
	}

	backBinaryNumber(256); // 100000000
	
	//++ 13.Напишите функцию, которая принимает строку и возвращает её первую букву в верхнем регистре.

	function backFirstLetterOfStringToUpperCase(str) {
	  return str[0].toUpperCase();
	}
	
	backFirstLetterOfStringToUpperCase('дратути') // "Д"

	//++ 14.Создайте функцию, которая принимает число и возвращает сумму всех его цифр.

	function backSummaryOfFiguresInNumber(num) {
	  let sum = 0;
	  let str = String(num);
	  for (let i = 0; i < str.length; i++) sum += Number(str[i]);
	  return sum;
	}

	backSummaryOfFiguresInNumber(123); // 6
	
	//++ 15.Напишите функцию, которая принимает строку и возвращает её в виде массива слов.

	function backArrayOfStrings(str) {
	  let arr = str.split(' ');

	    for (let i = 0; i < arr.length; i++) {
	        arr[i] = arr[i].split().join();
	    }
	    return arr;
	}
	
	backArrayOfStrings('Это должен быть массив слов'); // ['Это', 'должен', 'быть', 'массив', 'слов']

	// 16.Создайте функцию, которая принимает число и возвращает его в виде строки с добавленными разделителями тысяч.


	
	// 17.Напишите функцию, которая принимает строку и возвращает её в виде палиндрома (если это возможно).


	
	// 18.Создайте функцию, которая принимает число и возвращает его наибольший делитель (кроме самого числа).


	
	// 19.Напишите функцию, которая принимает строку и возвращает её без повторяющихся символов.


	
	// 20.Создайте функцию, которая принимает число и возвращает его в виде римского числа.



	// сделай функцию которая в тексте первую и последнюю букву слова делает заглавной * (задача после массивов)