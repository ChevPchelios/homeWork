	// Задание 1. Вывести все числа от 1 до 10.
	
	// через цикл for
	for (let i = 1; i <= 10; i++) {
		console.log (i);
	}

	// через switch (простите за эту порнуху, больше так не буду(( )
	switch (true) {
	case true:
		console.log(1);
		console.log(2);
		console.log(3);
		console.log(4);
		console.log(5);
		console.log(6);
		console.log(7);
		console.log(8);
		console.log(9);
		console.log(10);
		break;
	}

	// Задание 2. Вывести все четные числа от 1 до 20.
	
	// через цикл for
	for (let i = 1; i <= 20; i++) {
		if (i % 2 ===  0) console.log (i);
	}

	//-- через switch

	// Задание 3. Вывести все нечетные числа от 1 до 20.
	
	// через цикл for
	for (let i = 1; i < 20; i++) {
		if (i % 2 !==  0) console.log (i);
	}

	//-- через switch

	// Задание 4. Вывести таблицу умножения на 5 от 1 до 10.

	// через цикл for
	for (let i = 1; i <= 10; i++) {
		let n = 5;
		let result = n * i;
		console.log (`${i}*${n}`+' = '+(result));
	}

	//-- через switch
	
	//-- Задание 5. Вывести все буквы латинского алфавита от A до Z.

	
	// Задание 6. Вывести все квадраты чисел от 1 до 10.

	let result = 0;
	for (let i = 1; i <= 10; i++) {
		if (true) {
			 result = i ** 2;
		} else {
			continue;
		}
		console.log (result);
	}

	// Задание 7. Вывести сумму всех чисел от 1 до 100.
	
	let result = 0;
	for (let i = 1; i <= 100; i++) {
		if (true) {
			 result += i;
		} else {
			continue;
		}
		console.log (result);
	}
	
	// Задание 8. Вывести факториал числа 5.
	
	let result = 1;
	for (let i = 1; i <= 5; i++) {
		if (true) {
			 result *= i;
		} else {
			continue;
		}
		console.log (result);
	}	
	
	// Задание 9. Вывести все числа от 10 до 1 в обратном порядке.
	
	for (let i = 10; i >= 1; i--) {
		console.log(i);
	}

	// Задание 10. Вывести все числа от 20 до 1 в обратном порядке.
	
	let i = 20;
	while (i > 1) {
		if (i >= 1) {
			console.log (i);
			--i;
		} else {
			continue;
		}
	}

	// Задание 11. Вывести все числа, кратные 3, от 1 до 30.
	
	for (let i = 1; i < 30; i++) {
		if (i % 3 ==0) {
			console.log (i);
		}
	}

	// Задание 12. Вывести все числа, кратные 4, от 1 до 40.
	
	let i = 1;
	while (i <= 40) {
		if (i % 4 == 0) {
			console.log (i);
		}
		++i;
		if (i > 40) break;
	}

	// Задание 13. Вывести все числа, кратные 5, от 1 до 50.
	
	let i = 1;
	do {
		if (i % 5 == 0) {
			console.log (i);
		}
		i++;
		if (i > 50) break;
	} while (i <= 50);

	// Задание 14. Вывести сумму всех чисел от 1 до 50, кратных 7.

	let result = 0;
	for (let i = 1; i < 50; i++) {
		if (i % 7 == 0) {
			 result += i;
		} else {
			continue;
		}
		console.log (result);
	}

	// Задание 15. Вывести сумму всех чисел от 1 до 1000, кратных 10.

	let result = 0;
	for (let i = 1; i < 1000; i++) {
		if (i % 10 == 0) {
			 result += i;
		} else {
			continue;
		}
		console.log (result);
	}

	// Задание 16. Вывести все числа от 1 до 50, пропуская каждое второе число.

	for (let i = 1; i < 50; i++) {
		if (i % 2 == 0) continue;
			console.log(i);
	}

	// Задание 17. Вывести все числа от 1 до 100, пропуская каждое третье число.

	for (let i = 1; i < 100; i++) {
		if (i % 3 ==0) continue;
			console.log(i);
	}

	// Задание 18. Вывести все числа от 1 до 50, увеличенные на 5.

	for (let i = 1; i <= 50; i++) {
		let result = i - 5;
		console.log(result);
	}

	// Задание 19. Вывести все числа от 1 до 50, уменьшенные на 2.

	for (let i = 1; i <= 50; i++) {
		let result = i - 2;
		console.log(result);
	}

	// Задание 20. Вывести все числа от 1 до 100, которые делятся и на 3, и на 5.

	for (let i = 1; i < 100; i++) {
		if (i % 3 == 0 && i % 5 ==0) {
			console.log(i);
		} else {
			continue;
		}	
	}