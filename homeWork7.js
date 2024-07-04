
	// Реализовать функцию, которая на вход будет получать строку, возвращать топ 3 используемых слова в этой строке.
	// Обязательно добавить проверку типа (на вход должна быть только строка).

	// Решение: 		

function backTopThreeWord(string) {
  let initialArray = string.toLowerCase().split(' '), object = {}, intermediateArray = [], resultArray = [];
/*
  initialArray.forEach(function(index) {
    if (isFinite(initialArray[index]) === true || initialArray[index] === null || initialArray[index] === undefined || initialArray[index] === '') {
      initialArray.splice(index, 1);
  	}
  });
	 console.log(initialArray);
*/
  initialArray.forEach(function(item) {
    object[item] = object[item] + 1 || 1;
  });
  intermediateArray = Object.entries(object);
  resultArray = intermediateArray.sort((a,b) => a[1] - b[1]);
	    
  resultArray.splice(0, resultArray.length - 3);
  resultArray.reverse();
  console.log(resultArray);
		
  alert(`Топ 3 использованных в тексте слова:
№ 1: Слово "${resultArray[0][0]}" использовано ${resultArray[0][1]} раз(а),
№ 2: Слово "${resultArray[1][0]}" использовано ${resultArray[1][1]} раз(а),
№ 3: Слово "${resultArray[2][0]}" использовано ${resultArray[2][1]} раз(а).`);
	}
			
backTopThreeWord('дВа 1 ДВА раЗ тРи рАз трИ два Три три ТРи 8 чеТЫре пяТЬ');




