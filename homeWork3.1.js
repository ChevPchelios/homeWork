// Задача 1. Напишите функцию, которая проверяет, является ли число четным.

	//Function declaration
	function checkNum(num) {
		if (num % 2 === 0) return 'Число является четным';
		else if (num !== Number()) return 'Не является числом' //работает если использовать кавычки 
		else return 'Число не является четным'
	}

	//Arrow function
	let checkNum = (num) => {
		if (num % 2 ===0) return 'Число является четным';
		else return 'Число не является четным';
	};

// Задача 2. Напишите функцию, которая находит сумму всех чисел от 1 до заданного числа.

	//Function declaration
	function calcSum(num) {
		let result = 0;
		for (let i = 1; i <= num; i++) {
			result += i;
		}
		return result;
	}

	//Arrow function
	let calcSum = (num) => {
		let result = 0;
		for (let i = 1; i <= num; i++) {
			result += i;
		}
		return result;
	};

// Задача 3. Напишите функцию, которая определяет, является ли заданное слово палиндромом.
	
	//Function declaration
	// Работает только с учётом регистра и с кавычками
		function checkPalindrome(str) {
			 let check = '';
			 for (let i = str.length - 1; i >= 0; --i) {
			   check += str[i];
			 }
			  return str == check;
			}
			checkPalindrome('TeneT');
			checkPalindrome('737')

	//Arrow function
		let checkPalindrome = (str) => {
			 let check = '';
			 for (let i = str.length - 1; i >= 0; --i) {
			   check += str[i];
			 }
			  return str == check;
			};

// Задача 4. Напишите функцию, которая вычисляет факториал заданного числа.
	
	//Function declaration
	function calcFactorial(num) {
		let result = 1;
		for(let i = 1; i <= num; i++) {
			result *= i;
		}
		return result;
	}
		
	//Arrow function
	let calcFactorial = (num) => {
		let result = 1;
		for(let i = 1; i <= num; i++) {
			result *= i;
		}
		return result;
	};

// Задача 5. Напишите функцию, которая проверяет, является ли заданное число простым.
	
	//Function declaration
	function checkNum(num) {
		if (num > 1 && num % 2 !== 0 && num % 3 !== 0 || num === 2 || num === 3) return 'Число является простым';
		else return 'Число не является простым';
	}

	//Arrow function
	let checkNum = (num) => {
		if (num > 1 && num % 2 !== 0 && num % 3 !== 0 || num === 2 || num === 3) return 'Число является простым';
		else return 'Число не является простым';
	};

	// Задачи из learnJs

	/*
	Задача 1. Напишите код, выполнив задание из каждого пункта отдельной строкой:

	1) Создайте пустой объект user.
	2) Добавьте свойство name со значением John.
	3) Добавьте свойство surname со значением Smith.
	4) Измените значение свойства name на Pete.
	5) Удалите свойство name из объекта.
	*/

	//Решение:
	
	let user = {};
	user.name = 'John';
	user.surname = 'Smith';
	user.name = 'Pete';
	delete user.name;

	alert(user.name); // undefined

	/*
	Задача 2. Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.

	Должно работать так:
	let schedule = {};
		alert( isEmpty(schedule) ); // true
	schedule["8:30"] = "get up";
		alert( isEmpty(schedule) ); // false
	*/

	//Решение:
	let obj = {};
		function isEmpty(obj) {
		for (let prop in obj) {
			return true;
		}
		return false;
	}

	isEmpty(obj); // false, если нет свойств объекта

	/*
	Задача 3. У нас есть объект, в котором хранятся зарплаты нашей команды:

	let salaries = {
	  John: 100,
	  Ann: 160,
	  Pete: 130,
	}
	
	Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390.
	Если объект salaries пуст, то результат должен быть 0.
	*/
	
	//Решение:
	
	let salaries = {};

	let sum = 0;
    let key;
	for (key in salaries) {
	  sum += salaries[key];
	}
	console.log(sum); // 0
	alert(sum); // 0
	// без alert или console.log - undefined(почему?)

	/*
	Пытался так, но оно не работает((
	let salaries = {};
	let sum;
	if (true) console.log (sum = salaries.John + salaries.Ann + salaries.Pete);
	else if (sum === NaN) {
		sum = 0;
	} 
	alert(sum); // NaN (?)
	*/


	/*
	Задача 4. Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.

	Например:
	// до вызова функции
	let menu = {
	  width: 200,
	  height: 300,
	  title: "My menu"
	};

	multiplyNumeric(menu);

	// после вызова функции
	menu = {
	  width: 400,
	  height: 600,
	  title: "My menu"
	};
	Обратите внимание, что multiplyNumeric не нужно ничего возвращать. Следует напрямую изменять объект.

	P.S. Используйте typeof для проверки, что значение свойства числовое.
	*/

	//Решение:
	//
	let menu = {
	  width: 200,
	  height: 300,
	  title: "My menu",
	};

	function multiplyNumeric(menu) {
		for (let key in menu) {
		  if (typeof menu[key] == Number()) {
		  	 menu[key] *=  2;
		  }
	}
	
	multiplyNumeric(menu);
