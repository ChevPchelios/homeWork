	
	//Задачки на методы строк и чисел
	

	+++// 7.Напишите функцию, которая принимает строку и возвращает её длину без учёта пробелов.
	
	function backStringLengthWithOutSpaces(str) {
	  let arr = str.split(' ').join('');
	  return arr.length;
	}

	backStringLengthWithOutSpaces('Длина этой строки будет без пробелов'); // 31 (с пробелами 36)

	____________________________

	
	-+// 11.Напишите функцию, которая принимает строку и возвращает количество гласных букв в ней.

	// Вариант решения 1: (через перебор массивов, ещё не сделал)

	function backNumberOfVowelLetter(str) {
	  let initialArray = str.split('');
	  let arrayForCompare = ['а', 'е', 'ё', 'у', 'о', 'и', 'э', 'ы', 'я', 'ю',];
	  


	  return arrayForCompare;
	}

	backNumberOfVowelLetter('Слово')

	____________________________

	// Вариант решения 2: (через регулярную строку)
	// Мы это ещё не проходили, так что это просто нагуглено и пока не особо понятно как работает

	function backNumberOfVowelLetter(str) {

	  var vowels = /['а','е','ё','у','о','и','э','ы','я','ю',]/gi;
	  var matchesArray = str.match(vowels);
	  
	  console.log ( matchesArray )
	  return matchesArray.length;
	}
	  
	backNumberOfVowelLetter('В этой строке девять гласных букв'); // ['э', 'о', 'о', 'е', 'е', 'я', 'а', 'ы', 'у'] 9

	____________________________
	
	+++ Upd//++ 15.Напишите функцию, которая принимает строку и возвращает её в виде массива слов.
	// Исправил предыдущию версию решения, там лишний цикл был, ненужный.

	function backArrayOfStrings(str) {
	  let arr = str.split(' ');
	  return arr;
	}
	
	backArrayOfStrings('Это должен быть массив слов'); // ['Это', 'должен', 'быть', 'массив', 'слов']

	____________________________

	--// 16.Создайте функцию, которая принимает число и возвращает его в виде строки с добавленными разделителями тысяч.

	function backStringOfNumberWithSeparator(num) {
	  num = String(num);
	  let array = num.split('');
	  
	  for (let i = array.length - 1; i <= 0 ; --i) {

	  	if ( i % 3 === 0) array = array.join('_');
	  }
	  return array;
	}

	backStringOfNumberWithSeparator(100000000);
	
	---// 17.Напишите функцию, которая принимает строку и возвращает её в виде палиндрома (если это возможно).



	____________________________

	+++// 18.Создайте функцию, которая принимает число и возвращает его наибольший делитель (кроме самого числа).

	function backMaxDivisiorOfNumber(num) {
	  for (let i = num - 1; i >= 1; --i) {
		if (num % i == 0) return i;
	  }  
	}
	
	backMaxDivisiorOfNumber(112); // 56

	____________________________
	
	---// 19.Напишите функцию, которая принимает строку и возвращает её без повторяющихся символов. *


	
	---// 20.Создайте функцию, которая принимает число и возвращает его в виде римского числа. *



	+++// сделай функцию которая в тексте первую и последнюю букву слова делает заглавной * (задача после массивов)

	function makeFirstAndLastFiguresToUpperCase(text) {
	  let arr = text.split(' ');
	  let result = arr.map(item => item[0].toUpperCase() + item.substring(1, item.length - 1) + item[item.length - 1].toUpperCase());

	  return result;
	}
	
	makeFirstAndLastFiguresToUpperCase ('В этой строчке первые и последние буквы слов заглавные'); 

	// ['ВВВ', 'ЭтоЙ', 'СтрочкЕ', 'ПервыЕ', 'ИиИ', 'ПоследниЕ', 'БуквЫ', 'СлоВ', 'ЗаглавныЕ']
	// нормально работает, если каждый элемент в массиве длиннее 3-х символов
	// задать игнорирование элементов массива с длинной менее 3 символов
