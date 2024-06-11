	
	___ МЕТОДЫ ЧИСЕЛ ___

	Создайте скрипт, который запрашивает ввод двух чисел (используйте prompt) и после показывает их сумму.

	// вроде нормально робит
	function readNumber() {
	  let num;

	  do {
	    num = prompt("Введите число", 0);
	  } while ( !isFinite(num) );

	  if (num === null || num === '') return null;

	  return +num;
	}

	alert(`Число: ${readNumber()}`);

	.____________________________

	// робит, но криво
	function readNumber() {
	  let num;

	  do {
	    num = prompt("Введите число", 0);
	  } while ( num === Number() || num === NaN);

	  if (num === null || num === '') return null;

	  return +num;
	}

	alert(`Число: ${readNumber()}`);

	.____________________________
	

	Встроенный метод Math.random() возвращает случайное число от 0 (включительно) до 1 (но не включая 1)

	Напишите функцию random(min, max), которая генерирует случайное число с плавающей точкой от min до max (но не включая max).

	Пример работы функции:

	alert( random(1, 5) ); // 1.2345623452
	alert( random(1, 5) ); // 3.7894332423
	alert( random(1, 5) ); // 4.3435234525
	
	
	function random(min, max) {
	  return min + Math.random() * (max - min);
	}

	alert( random(1, 5) );
	alert( random(1, 5) );
	alert( random(1, 5) );

	.____________________________


	Напишите функцию randomInteger(min, max), которая генерирует случайное целое (integer) число от min до max (включительно).

	Любое число из интервала min..max должно появляться с одинаковой вероятностью.

	Пример работы функции:

	alert( randomInteger(1, 5) ); // 1
	alert( randomInteger(1, 5) ); // 3
	alert( randomInteger(1, 5) ); // 5
	
	Можно использовать решение из предыдущей задачи.

	// работает, но решение неверное (неверный метод округления, часов всего будет попадаться число 2)
	
	function randomInteger(min, max) {
		let num = (max - min) * Math.random() + min;
		return Math.round(num);
	}
	alert( randomInteger(1, 5) );
	alert( randomInteger(1, 5) );
	alert( randomInteger(1, 5) );

	.____________________________

	// верное решение из примера (но мне кажется не менее сомнительным)

	function randomInteger(min, max) {
		let num = min + Math.random() * (max + 1 - min) ;
		return Math.floor(num);
	}
	alert( randomInteger(1, 5) );
	alert( randomInteger(1, 5) );
	alert( randomInteger(1, 5) );

		___ МЕТОДЫ СТРОК ___

	Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом. Например:

	ucFirst("вася") == "Вася";

	// Решение:

	function ucFirst(str) {
		return str[0].toUpperCase() + str.slice(1);
	}

	alert (ucFirst('саша')); //Саша

	/*
	Однако есть небольшая проблемка. Если строка пуста, str[0] вернёт undefined, а у undefined нет метода toUpperCase(), поэтому мы получим ошибку.

	Выхода два:
	. slice Использовать str.charAt(0), поскольку этот метод всегда возвращает строку (для пустой строки — пустую).
	. Добавить проверку на пустую строку.
	*/

	Первый вариант:
	let str = 'Саша'
	let strFix = str.charAt(0);
	alert (strFix + str.slice(1)); //Саша
	
	Второй вариант:

	function ucFirst(str) {
	  if (!str) return str;

	  return str[0].toUpperCase() + str.slice(1);
	}

	alert( ucFirst("вася") ); // Вася

	.____________________________

	Напишите функцию checkSpam(str), возвращающую true, если str содержит 'viagra' или 'XXX', а иначе false.

	Функция должна быть нечувствительна к регистру:

	checkSpam('buy ViAgRA now') == true
	checkSpam('free xxxxx') == true
	checkSpam("innocent rabbit") == false

	// Решение:
	
	function checkSpam(str) {
		str = str.toLowerCase();
		return str.includes('viagra') || str.includes('xxx');
	}

	checkSpam('buy ViAgRA now') // true
	checkSpam('free xxxxx') // true
	checkSpam("innocent rabbit") // false

	.____________________________

	Создайте функцию truncate(str, maxlength), которая проверяет длину строки str и, если она превосходит maxlength, заменяет конец str на "…", 
	так, чтобы её длина стала равна maxlength.
	
	Результатом функции должна быть та же строка, если усечение не требуется, либо, если необходимо, усечённая строка.

	Например:

	truncate("Вот, что мне хотелось бы сказать на эту тему:", 20) = "Вот, что мне хотело…"

	truncate("Всем привет!", 20) = "Всем привет!"

	// Решение:
	
	function truncate(str, maxLength) {
		if (str.length < maxLength) return str;
		else return str.slice(0, maxLength - 1) + '…';
	}

	truncate("Вот, что мне хотелось бы сказать на эту тему:", 20);

	// Решение из примера:

	function truncate(str, maxlength) {
	  return (str.length > maxlength) ?
	    str.slice(0, maxlength - 1) + '…' : str;
	}

	.____________________________
	
	Есть стоимость в виде строки "$120". То есть сначала идёт знак валюты, а затем – число.

	Создайте функцию extractCurrencyValue(str), которая будет из такой строки выделять числовое значение и возвращать его.

	Например:

	alert( extractCurrencyValue('$120') === 120 ); // true

	// Решение:

	function extractCurrencyValue(str) {
	  return +str.slice(1);
	}
	extractCurrencyValue('$120'); // 120