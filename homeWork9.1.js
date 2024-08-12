
	// __ Рекурсия и стек __

	Задача 1. Вычислить сумму чисел до данного
	
	/*
	Напишите функцию sumTo(n), которая вычисляет сумму чисел 1 + 2 + ... + n.

	Например:

	sumTo(1) = 1
	sumTo(2) = 2 + 1 = 3
	sumTo(3) = 3 + 2 + 1 = 6
	sumTo(4) = 4 + 3 + 2 + 1 = 10
	...
	sumTo(100) = 100 + 99 + ... + 2 + 1 = 5050
	
	Сделайте три варианта решения:

	С использованием цикла.
	Через рекурсию, т.к. sumTo(n) = n + sumTo(n-1) for n > 1.
	С использованием формулы арифметической прогрессии.
	Пример работы вашей функции:
	*/

	// function sumTo(n) { /*... ваш код ... */ }
	
	/*
	alert( sumTo(100) ); // 5050
	P.S. Какой вариант решения самый быстрый? Самый медленный? Почему?

	P.P.S. Можно ли при помощи рекурсии посчитать sumTo(100000)?
	*/
	
	// Решение:

	// Через рекурсию:

	function sumTo(n) {
      let result = 0;
      if (n == 1) {
      	return n;
      } else {
      	result = n + sumTo(n - 1);
      }
      return result;
	}
	sumTo(100); // 5050 (максимульно возможная глубина рекурсии у меня 8956)

	или так:
	
	function sumTo(n) {
      return (n == 1) ? n : n + sumTo(n - 1);
	}
	sumTo(100);

	// Через цикл:
	
	function sumTo(n) {
      let result = 0;
      for (let i = 0; i <= n; i++){
      	result += i; 
      }
      return result;
	}
	sumTo(100); // 5050

	// Через арифметическую прогрессию:

	function sumTo(n) {
      let result = 0;
      return result = n * (n + 1) / 2
	}
	sumTo(100); // 5050

	Задача 2. Вычислить факториал
	
	/*
	Факториал натурального числа – это число, умноженное на "себя минус один", затем на "себя минус два", и так далее до 1. 
	Факториал n обозначается как n!
	Определение факториала можно записать как:

	n! = n * (n - 1) * (n - 2) * ...*1
	Примеры значений для разных n:

	1! = 1
	2! = 2 * 1 = 2
	3! = 3 * 2 * 1 = 6
	4! = 4 * 3 * 2 * 1 = 24
	5! = 5 * 4 * 3 * 2 * 1 = 120
	Задача – написать функцию factorial(n), которая возвращает n!, используя рекурсию.

	alert( factorial(5) ); // 120
	P.S. Подсказка: n! можно записать как n * (n-1)! Например: 3! = 3*2! = 3*2*1! = 6
	*/

	// Решение:

	function factorial(n) {
	  return (n == 1) ? n : n * factorial(n - 1);
	}
	factorial(5); // 120

	Задача 3. Числа Фибоначчи
	/*
	Последовательность чисел Фибоначчи определяется формулой Fn = Fn-1 + Fn-2. То есть, следующее число получается как сумма двух предыдущих.

	Первые два числа равны 1, затем 2(1+1), затем 3(1+2), 5(2+3) и так далее: 1, 1, 2, 3, 5, 8, 13, 21....
	Числа Фибоначчи тесно связаны с золотым сечением и множеством природных явлений вокруг нас.
	Напишите функцию fib(n) которая возвращает n-е число Фибоначчи.

	Пример работы:
	*/
	// function fib(n) { /* ваш код */ }
	/*
	alert(fib(3)); // 2
	alert(fib(7)); // 13
	alert(fib(77)); // 5527939700884757
	P.S. Все запуски функций из примера выше должны работать быстро. Вызов fib(77) должен занимать не более доли секунды.
	*/

	// Решение:
	
	function fib(n) {
	  if (n == 1 || n == 2) {
	  	return 1;
	  } else {
		return fib(n - 1) + fib(n - 2);
	  }
	}
	fib(10); // 55

	или так:

	function fib(n) {
	  return (n == 1 || n == 2) ? 1 : fib(n - 1) + fib(n - 2);
	}
	fib(10); // 55

	// в учебнике хотят fib(77) за доли секунды, но это бред. Даже их пиздатый код с динамическим программированием снизу вверх не даёт такой скорости
	// по крайней мере у меня на ноуте такого не произошло

	Задача 4. Вывод односвязного списка
	
	/*
	Допустим, у нас есть односвязный список (как описано в главе Рекурсия и стек):

	let list = {
	  value: 1,
	  next: {
	    value: 2,
	    next: {
	      value: 3,
	      next: {
	        value: 4,
	        next: null
	      }
	    }
	  }
	};
	Напишите функцию printList(list), которая выводит элементы списка по одному.
	Сделайте два варианта решения: используя цикл и через рекурсию.
	Как лучше: с рекурсией или без?
	*/

	// Решение:
	
	// через цикл
	
	let list = {
	  value: 1,
	  next: {
	    value: 2,
	    next: {
	      value: 3,
	      next: {
	        value: 4,
	        next: null
	      }
	    }
	  }
	};

	function printList(list) {
	  let showList = list;
	  
	  do {
	  	console.log(showList.value);
	  	showList = showList.next;
	  } while (showList);

	}
	printList(list);

	// через рекурсию

	let list = {
	  value: 1,
	  next: {
	    value: 2,
	    next: {
	      value: 3,
	      next: {
	        value: 4,
	        next: null
	      }
	    }
	  }
	};

	function printList(list) {
	  let showList = list;
	  console.log(showList.value);
	  if (showList.next) {
	    printList (showList.next);
	  } 
	}
	printList(list);

	Задача 5. Вывод односвязного списка в обратном порядке
	
	/*
	Выведите односвязный список из предыдущего задания Вывод односвязного списка в обратном порядке.
	Сделайте два решения: с использованием цикла и через рекурсию.
	*/

	// Решение:
	
	// через цикл
	
	let list = {
	  value: 1,
	  next: {
	    value: 2,
	    next: {
	      value: 3,
	      next: {
	        value: 4,
	        next: null
	      }
	    }
	  }
	};

	function printListReverse(list) {
	  let showListReverse = list, arrayForReverse = [];
	  
	  do {
	  	arrayForReverse.push(showListReverse.value) ;
	  	showListReverse = showListReverse.next;
	  } while (showListReverse == true);

	  for(let i = arrayForReverse.length - 1; i >= 0; i--) {
	  	console.log(arrayForReverse[i]);
	  }
	}
	printListReverse(list);

	// через рекурсию

	let list = {
	  value: 1,
	  next: {
	    value: 2,
	    next: {
	      value: 3,
	      next: {
	        value: 4,
	        next: null
	      }
	    }
	  }
	};

	function printListReverse(list) {
 	  let showListReverse = list;
	  
	    if (showListReverse.next) {
	  	  printListReverse (showListReverse.next);
	    }
	  console.log(showListReverse.value);
	}
	printListReverse (list);

	

	// __ Область видимости переменных. Замыкание __

	Задача 1. Сумма с помощью замыкания
	
	/*
	Напишите функцию sum, которая работает таким образом: sum(a)(b) = a+b.
	Да, именно таким образом, используя двойные круглые скобки (не опечатка).

	Например:

	sum(1)(2) = 3
	sum(5)(-1) = 4
	*/

	// Решение:

	let sum = function(x) {
	  return function(y) {
	  	let z = x + y;
	  	return z;
	  };
	};

	let result = sum(1)(2); // 3 
	console.log(result);

	// или так

	let sum = x => y => {
	  let z = x + y;
	  return z;
	}

	let result = sum(5)(-1); // 4
	console.log(result);


	Задача 2. Фильтрация с помощью функции
	/*
	У нас есть встроенный метод arr.filter(f) для массивов. Он фильтрует все элементы с помощью функции f. 
	Если она возвращает true, то элемент добавится в возвращаемый массив.

	Сделайте набор «готовых к употреблению» фильтров:

	inBetween(a, b) – между a и b (включительно).
	inArray([...]) – находится в данном массиве.
	Они должны использоваться таким образом:

	arr.filter(inBetween(3,6)) – выбирает только значения между 3 и 6 (включительно).
	arr.filter(inArray([1,2,3])) – выбирает только элементы, совпадающие с одним из элементов массива.
	Например:
	*/

	/* .. ваш код для inBetween и inArray */
	let arr = [1, 2, 3, 4, 5, 6, 7];

	alert( arr.filter(inBetween(3, 6)) ); // 3,4,5,6
	alert( arr.filter(inArray([1, 2, 10])) ); // 1,2

	._______________________________________________
	
	// Решение (рабочее):

	function inBetween(a, b) {
	  return function(x) {
	    return x >= a && x <= b;
	  };
	}

	let arr = [1, 2, 3, 4, 5, 6, 7];
	console.log( arr.filter(inBetween(3, 6)) ); // 3,4,5,6


	function inArray(arr) {
	  return function(x) {
	    return arr.includes(x);
	  };
	}

	let arr = [1, 2, 3, 4, 5, 6, 7];
	console.log( arr.filter(inArray([1, 2, 10])) ); // 1,2
	

	// Решение (попытки сделать через конструктор или своством объекта_не работает):

	
	function Filtrator() {

	  this.inBetween = function(a,b) {
	    return arr.filter(item => (item => a && item <= b));
	  }

	 /* this.inArray = function() {

	  }*/
	}

	let arr = [1, 2, 3, 4, 5, 6, 7];
	let filtrator = new Filtrator();
	
	console.log ( filtrator.inBetween(3, 6) ); // 3,4,5,6
	

	._______________________________________________


 	let filtrator = {

	  inBetween = function(a,b) {
	    return item => (item => a && item <= b);
	  }
	  /*
	  this.inArray = function(arr) {
	  	return arr.includes(item);
	  }*/
	}

	let arr = [1, 2, 3, 4, 5, 6, 7];

	console.log ( arr.filter(filtrator.inBetween(3, 6)) ); // 3,4,5,6
	//console.log ( arr.filter(this.inArray([1, 2, 10])) ); // 1,2

	._______________________________________________

	Задача 3. Сортировать по полю
	
	/*
	У нас есть массив объектов, который нужно отсортировать:

	let users = [
	  { name: "Иван", age: 20, surname: "Иванов" },
	  { name: "Пётр", age: 18, surname: "Петров" },
	  { name: "Анна", age: 19, surname: "Каренина" }
	];
	
	Обычный способ был бы таким:

	// по имени (Анна, Иван, Пётр)
	users.sort((a, b) => a.name > b.name ? 1 : -1);

	// по возрасту (Пётр, Анна, Иван)
	users.sort((a, b) => a.age > b.age ? 1 : -1);
	Можем ли мы сделать его короче, например вот таким?

	users.sort(byField('name'));
	users.sort(byField('age'));
	То есть чтобы вместо функции мы просто писали byField(fieldName).

	Напишите функцию byField, которая может быть использована для этого.
	*/
	
	._______________________________________________
	
	// Решение: (какая-то нерабочая хуита, хотя в книжке примерно то же самое предлагают)

	let users = [
	  { name: "Иван", age: 20, surname: "Иванов" },
	  { name: "Пётр", age: 18, surname: "Петров" },
	  { name: "Анна", age: 19, surname: "Каренина" }
	];

	function byField(fieldName) {
	  return (a, b) => a.fieldName > b.fieldName ? 1 : -1;
	}

	byField(this.age);

	._______________________________________________
	
	Задача 4. Армия функций
	
	/*
	Следующий код создаёт массив из стрелков (shooters).

	Каждая функция предназначена выводить их порядковые номера. Но что-то пошло не так…

	function makeArmy() {
	  let shooters = [];

	  let i = 0;
	  while (i < 10) {
	    let shooter = function() { // функция shooter
	      alert( i ); // должна выводить порядковый номер
	    };
	    shooters.push(shooter); // и добавлять стрелка в массив
	    i++;
	  }

	  // ...а в конце вернуть массив из всех стрелков
	  return shooters;
	}

	let army = makeArmy();

	// все стрелки выводят 10 вместо их порядковых номеров (0, 1, 2, 3...)
	army[0](); // 10 от стрелка с порядковым номером 0
	army[1](); // 10 от стрелка с порядковым номером 1
	army[2](); // 10 ...и т.д.
	
	Почему у всех стрелков одинаковые номера?

	Почините код, чтобы он работал как задумано.
	*/
	
	._______________________________________________

	// Решение:

	function makeArmy() {
	  let shooters = [];

	  let i = 0;

	  while (i < 10) {
	  	let j = i
	    let shooter = function() {
	      alert( j );
	    };
	    shooters.push(shooter);
	    i++;
	  }

	  return shooters;
	}

	let army = makeArmy();

	army[0](); // 0
	army[1](); // 1
	army[2](); // 2

	// или так:

	function makeArmy() {
	  let shooters = [];

	  for(let i = 0; i < 10; i++) {
	    let shooter = function() {
	      alert( i );
	    };
	    shooters.push(shooter);
	  }

	  return shooters;
	}

	let army = makeArmy();

	army[0](); // 0
	army[1](); // 1
	army[2](); // 2
