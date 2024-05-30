
	// Методы объекта, ключевое слово this
	
	// Задача 1.
	/*
	Создайте объект calculator (калькулятор) с тремя методами:
	read() (читать) запрашивает два значения и сохраняет их как свойства объекта с именами a и b.
	sum() (суммировать) возвращает сумму сохранённых значений.
	mul() (умножить) перемножает сохранённые значения и возвращает результат.
	*/
	
	// Решение:
	let calculator = {
		read() {
			this.a = +prompt('Введите значение a', '');
			this.b = +prompt('Введите значение b', '');
		},
		sum() {
			return this.a + this.b;
		},
		mul() {
			return this.a * this.b;
		},
	};

	calculator.read();
	alert (calculator.sum());
	alert (calculator.mul());

	// Задача 2. 
	// У нас есть объект ladder (лестница), который позволяет подниматься и спускаться:
	let ladder = {
	  step: 0,
	  up() {
	    this.step++;
	  },
	  down() {
	    this.step--;
	  },
	  showStep: function() { // показывает текущую ступеньку
	    alert(this.step);
	  }
	};

	// Теперь, если нам нужно выполнить несколько последовательных вызовов, мы можем сделать это так:

	ladder.up();
	ladder.up();
	ladder.down();
	ladder.showStep(); // 1
	ladder.down();
	ladder.showStep(); // 0

	// Измените код методов up, down и showStep таким образом, чтобы их вызов можно было сделать по цепочке, например так:

	ladder.up().up().down().showStep().down().showStep();

	// Решение:
	let ladder = {
	  step: 0,
	  up() {
	    this.step++;
	    return this;
	  },
	  down() {
	    this.step--;
	    return this;
	  },
	  showStep: function() { // показывает текущую ступеньку
	    alert(this.step);
	    return this;
	  }
	};
	
	ladder.up().up().down().showStep().down().showStep();
		
	//_________________________

	// Конструктор, оператор new
	// Задача 1. Возможно ли создать функции A и B, чтобы new A() == new B()? Если да – приведите пример вашего кода.

	function A() { ... }
	function B() { ... }

	let a = new A();
	let b = new B();

	alert(a == b); // true

	// Решение:
	let func = {};

	function A() {
		return func;
	};
	function B() {
		return func;
	};

	let a = new A();
	let b = new B();

	alert(a == b); // true

	// Задача 2.
	/*
	Создайте функцию-конструктор Calculator, которая создаёт объекты с тремя методами:
	read() запрашивает два значения при помощи prompt и сохраняет их значение в свойствах объекта.
	sum() возвращает сумму этих свойств.
	mul() возвращает произведение этих свойств.
	Например:
	*/

	let calculator = new Calculator();
	calculator.read();

	alert("Sum=" + calculator.sum());
	alert("Mul=" + calculator.mul());


	// Решение:

	 function Calculator() {
		this.read = function () {
			this.a = +prompt('Введите значение a', '');
			this.b = +prompt('Введите значение b', '');
		};
		this.sum = function () {
			return this.a + this.b;
		};
		this.mul = function () {
			return this.a * this.b;
		};
	};
	
	let calculator = new Calculator();
	
	calculator.read();

	alert("Sum = " + calculator.sum());
	alert("Mul = " + calculator.mul());
	
	
	// Задача 3.

	/*
	Создайте функцию-конструктор Accumulator(startingValue).

	Объект, который она создаёт, должен уметь следующее:
	Хранить «текущее значение» в свойстве value. Начальное значение устанавливается в аргументе конструктора startingValue.
	Метод read() должен использовать prompt для считывания нового числа и прибавления его к value.
	Другими словами, свойство value представляет собой сумму всех введённых пользователем значений, с учётом начального значения startingValue.

	Ниже вы можете посмотреть работу кода:
	*/

	let accumulator = new Accumulator(1); // начальное значение 1

	accumulator.read(); // прибавляет введённое пользователем значение к текущему значению
	accumulator.read(); // прибавляет введённое пользователем значение к текущему значению

	alert(accumulator.value); // выведет сумму этих значений

	// Решение:

	
	function Accumulator (num) {
		this.value = num;
		this.read = function () {
			this.value += +prompt('Введите число, которое нужно добавить к value',''); 
		}
	};
	
	let accumulator = new Accumulator(0);	

	accumulator.read(); 
	alert (accumulator.value);
	accumulator.read();
	alert (accumulator.value);


	