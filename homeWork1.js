
	// ++Задача 1. Напишите условие, которое проверяет, является ли число x положительным.
		/*let x = prompt('Введите число','');
		
		if (x > 0) {
			alert ('true');
		} else {
			alert ('false');
		}*/
		// let tern = (x > 0) ? alert('true') : alert('false'); // то же самое, но тернарной функцией

	// ++Задача 2. Напишите условие, которое проверяет, является ли число y отрицательным.
		/*let y = prompt('Введите число','');
		
		if (y < 0) {
			alert ('true');
		} else {
			alert ('false');
		}*/
		// let tern = (y < 0) ? alert('trueя') : alert('false'); // то же самое, но тернарной функцией


	// ++Задача 3. Напишите условие, которое проверяет, является ли число z четным.
		/*let z = prompt('Введите число','');
		let result = z % 2;
		
		if (result === 0) {
			alert ('true');
		} else {
			alert ('false');
		}*/
		// let tern = (result === 0) ? alert('true') : alert('false'); // то же самое, но тернарной функцией

	// ++Задача 4. Напишите условие, которое проверяет, является ли число n кратным 3.
		/*let n = prompt('Введите число','');
		let result = n % 3;
		
		if (result === 0) {
			alert ('true');
		} else {
			alert ('false');
		}*/
		// let tern = (result === 0) ? alert('true') : alert('false'); // то же самое, но тернарной функцией

	// ++Задача 5. Напишите условие, которое проверяет, что строка str содержит хотя бы одну букву 'a'.
		/*let str = prompt('Введите слово','');
		
		if (str.includes ('а') || str.includes ('a')) {		//В первом случае русская 'а', во втором латинская (функция includes была честно нагуглена)
			alert ('true');
		} else {
			alert ('false');
		}*/
		//let tern = (str.includes ('а') || str.includes ('a')) ? alert('true') : alert('false'); // то же самое, но тернарной функцией

	// ++Задача 6. Напишите условие, которое проверяет, что строка name не пустая.
		/*let name = prompt('Введите значение','');
		
		if (name === '' || name === null) {
			alert ('Строка пустая');
		} else {
			alert ('Строка не пустая');
		}

		let tern = (name === '' || name === null) ? alert('Строка пустая') : alert('Строка не пустая'); // то же самое, но тернарной функцией
		*/
		

	// ++Задача 7. Напишите условие, которое проверяет, что значение age находится в диапазоне от 18 до 60.
		/*let age = prompt('Введите число','');

		if (age >= 18 && age <= 60) {
			alert ('true');
		} else {
			alert ('false');
		}

		let tern = (age >= 18 && age <= 60) ? alert('true') : alert('false'); // то же самое, но тернарной функцией*/


	// --Задача 8. Напишите условие, которое проверяет, что значение isAdmin равно true.
		/*let isAdmin = prompt('Введите значение переменной','');

		if (Number(isAdmin) == true) {
			alert ('true');
		} else {
			alert ('false');
		}*/

		//let tern = (+isAdmin == true) ? alert('true') : alert('false'); // то же самое, но тернарной функцией


	// --Задача 9. Напишите условие, которое проверяет, что значение isMember равно false.
		/*let isMember = prompt('Введите значение переменной','');

		if (Number(isMember) == false) {
			alert ('true');
		} else {
			alert ('false');
		}*/

		//let tern = (+isMember == false) ? alert('true') : alert('false'); // то же самое, но тернарной функцией


	// --Задача 10. Напишите условие, которое проверяет, что переменная num не равна 0. (Логическое преобразование)
		/*let num = prompt('Введите значение переменной','');

		if (+num != 0) {
			alert ('true');
		} else {
			alert ('false');
		}*/

		//let tern = (+num != 0) ? alert('true') : alert('false'); // то же самое, но тернарной функцией


	// --Задача 11. Напишите условие, которое проверяет, что переменная isValid равна true. (Логическое преобразование)
		/*let num = prompt('Введите значение переменной','');

		if (Boolean(num) === true) {
			alert ('true');
		} else {
			alert ('false');
		}*/

		//let tern = (age >= 18 && age <= 60) ? alert('true') : alert('false'); // то же самое, но тернарной функцией


	// ++Задача 12. Напишите условие, которое проверяет, что значение x больше либо равно y.
		/*let x = prompt('Введите значение x','');
		let y = prompt('Введите значение y','');

		if (x >= y) {
			alert ('true');
		} else {
			alert ('false');
		}*/

		//let tern = (x >= y) ? alert('true') : alert('false'); // то же самое, но тернарной функцией


	// ++Задача 13. Напишите условие, которое проверяет, что a не равно b.
		/*let a = prompt('Введите значение a','');
		let b = prompt('Введите значение b','');

		if (a != b) {
			alert ('true');
		} else {
			alert ('false');
		}*/

		//let tern = (a != b) ? alert('true') : alert('false'); // то же самое, но тернарной функцией


	// ++Задача 14. Напишите условие, которое проверяет, что name равно либо 'Alice' или 'Bob'.
		/*let name = prompt('Введите имя','');

		if (name === 'Alice' || name === 'Bob') {
			alert ('true');
		} else {
			alert ('false');
		}
		*/
		//let tern = (name === 'Alice' || name === 'Bob') ? alert('true') : alert('false'); // то же самое, но тернарной функцией


	// ++Задача 15. Напишите условие, которое проверяет, что year больше 2000 и меньше 2025.
		/*let year = prompt('Введите год','');

		if (year >= 2000 && year <= 2025) {
			alert ('true');
		} else {
			alert ('false');
		}*/

		//let tern = (year >= 2000 && year <= 2025) ? alert('true') : alert('false'); // то же самое, но тернарной функцией


	// ++Задача 16. Напишите условие, которое проверяет, что email содержит символ '@'.
		/*let email = prompt('Введите email','');

		if (email.includes('@')) {		// функция includes была честно нагуглена
			alert ('true');
		} else {
			alert ('false');
		}*/

		//let tern = (email.includes('@')) ? alert('true') : alert('false'); // то же самое, но тернарной функцией


	// ++Задача 17. Напишите условие, которое проверяет, что password состоит минимум из 8 символов.
		/*let str = prompt('Введите пароль','');

		if (str.substr(8)) {			// функция substr была честно нагуглена
			alert ('Надежный пароль');
		} else {
			alert ('Пароль меньше 8-ми симфолов');
		}*/

		//let tern = (str.substr(8)) ? alert('Надежный пароль') : alert('Пароль меньше 8-ми симфолов'); // то же самое, но тернарной функцией


	// ++ Задача 18. Напишите условие, которое проверяет, что x не равно y и y не равно z.
		/*let x = prompt('Введите значение переменной x','');
		let y = prompt('Введите значение переменной y','');
		let z = prompt('Введите значение переменной z','');

		if (x != y && y != z) {
			alert ('true');
		} else {
			alert ('false');
		}*/

		//let tern = (x != y && y != z) ? alert('true') : alert('false'); // то же самое, но тернарной функцией


	// ++ Задача 19. Напишите условие, которое проверяет, что age больше 0 и меньше или равно 100.
		/*let age = prompt('Введите значение переменной','');

		if (age > 0 && age <= 100) {
			alert ('true');
		} else {
			alert ('false');
		}*/

		//let tern = (age > 0 && age <= 100) ? alert('true') : alert('false'); // то же самое, но тернарной функцией


	// --Задача 20. Напишите условие, которое проверяет, что isValid равно false или isError равно true.
		/*let isValid = prompt('Введите значение переменной isValid','');
		let isError = prompt('Введите значение переменной isError','');
		isValid = Boolean(isValid);
		isError = Boolean(isError);
		
		if (isValid === false || isError === true) {
			alert ('true');
		} else {
			alert ('false');
		}*/

		//let tern = (age >= 18 && age <= 60) ? alert('true') : alert('false'); // то же самое, но тернарной функцией