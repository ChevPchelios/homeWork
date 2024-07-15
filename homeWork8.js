
  //__ Map и Set __
  
  Задача 1. Фильтрация уникальных элементов массива
  
  /*
  Допустим, у нас есть массив arr.
  Создайте функцию unique(arr), которая вернёт массив уникальных, не повторяющихся значений массива arr.
  Например:
  */
  //function unique(arr) {
    /* ваш код */
  //}

  /*
  let values = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
  ];

  alert( unique(values) ); // Hare,Krishna,:-O
  P.S. Здесь мы используем строки, но значения могут быть любого типа.
  P.P.S. Используйте Set для хранения уникальных значений.
  */
  
  // Решение:
 
  function unique(arr) {
    return Array.from(new Set(arr));
  }
  let values = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
  ];

  console.log( unique(values) ); // Hare,Krishna,:-O


  .___________________________________________

  Задача 2. Отфильтруйте анаграммы

  /*Анаграммы – это слова, у которых те же буквы в том же количестве, но они располагаются в другом порядке.
  Например:
  nap - pan
  ear - are - era
  cheaters - hectares - teachers
  Напишите функцию aclean(arr), которая возвращает массив слов, очищенный от анаграмм.

  Например:

  let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

  alert( aclean(arr) ); // "nap,teachers,ear" или "PAN,cheaters,era"
  Из каждой группы анаграмм должно остаться только одно слово, не важно какое.
  */

  // Решение:

  function aclean(arr) {
    let map = new Map();

    for(let word of arr) {
      let sort = word.toLowerCase().split('').sort().join('');
      map.set(sort, word);
    }
  return Array.from(map.values());

  }
  let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
  
  console.log( aclean(arr) );

  .___________________________________________


  //__ WeakMap и WeakSet __
  
  Задача 1. Хранение отметок "не прочитано"
  
  /*
  Есть массив сообщений:

  let messages = [
    {text: "Hello", from: "John"},
    {text: "How goes?", from: "John"},
    {text: "See you soon", from: "Alice"}
  ];
  
  У вас есть к ним доступ, но управление этим массивом происходит где-то ещё. 
  Добавляются новые сообщения и удаляются старые, и вы не знаете в какой момент это может произойти.

  Имея такую вводную информацию, решите, какую структуру данных вы могли бы использовать для ответа на вопрос «было ли сообщение прочитано?». 
  Структура должна быть подходящей, чтобы можно было однозначно сказать, было ли прочитано это сообщение для каждого объекта сообщения.

  P.S. Когда сообщение удаляется из массива messages, оно должно также исчезать из структуры данных.

  P.P.S. Нам не следует модифицировать сами объекты сообщений, добавлять туда свойства. 
  Если сообщения принадлежат какому-то другому коду, то это может привести к плохим последствиям.
  */

  // Решение:

  let messages = [
    {text: "Hello", from: "John"},
    {text: "How goes?", from: "John"},
    {text: "See you soon", from: "Alice"}
  ];

  let messageIsRead = new WeakSet();

  messageIsRead.add(messages[0]);

    if (messageIsRead.has(messages[0]) == true) { 
      messages.shift();
    }

  console.log(messages); // тут сообщение уже удалено
  console.log(messageIsRead); // а тут сборщик мусора обязательно его удалит, хз когда
  
  .___________________________________________
  
  Задача 2. Хранение времени прочтения
  
  /*
  Есть массив сообщений такой же, как и в предыдущем задании.

  let messages = [
    { text: "Hello", from: "John" },
    { text: "How goes?", from: "John" },
    { text: "See you soon", from: "Alice" }
  ];
  
  Теперь вопрос стоит так: какую структуру данных вы бы предложили использовать для хранения информации о том, когда сообщение было прочитано?
  В предыдущем задании нам нужно было сохранить только факт прочтения «да или нет». 
  Теперь же нам нужно сохранить дату, и она должна исчезнуть из памяти при удалении «сборщиком мусора» сообщения.
  P.S. Даты в JavaScript можно хранить как объекты встроенного класса Date, которые мы разберём позднее.

  Для хранения даты мы можем использовать WeakMap:
  */

  let messages = [
    {text: "Hello", from: "John"},
    {text: "How goes?", from: "John"},
    {text: "See you soon", from: "Alice"}
  ];

  let timeWhenMessageWasRead = new WeakMap();
  timeWhenMessageWasRead.set(messages[0], new Date(2024, 6, 7));

  console.log(timeWhenMessageWasRead);
  
  .___________________________________________


  //__ Object.keys, values, entries __

  Задача 1. Сумма свойств объекта
  
  /*
  Есть объект salaries с произвольным количеством свойств, содержащих заработные платы.
  Напишите функцию sumSalaries(salaries), которая возвращает сумму всех зарплат с помощью метода Object.values и цикла for..of.
  Если объект salaries пуст, то результат должен быть 0.

  Например:

  let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
  };

  alert( sumSalaries(salaries) ); // 650
  */

  // Решение:

  let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
  };

  function sumSalaries(salaries) {
    let result = 0;

    for(let sale of Object.values(salaries)) {
      result += sale;
    }
    return result;
  } 

  console.log( sumSalaries(salaries) ); // 650

  .___________________________________________

  Задача 2. Подсчёт количества свойств объекта

  /*
  Напишите функцию count(obj), которая возвращает количество свойств объекта:

  let user = {
    name: 'John',
    age: 30
  };

  alert( count(user) ); // 2
  Постарайтесь сделать код как можно короче.
  P.S. Игнорируйте символьные свойства, подсчитывайте только «обычные».
  */

  // Решение:

  let user = {
    name: 'John',
    age: 30
  };

  function count(obj) {
    let map = new Map(Object.entries(obj));
    return map.size;
  }

  console.log( count(user) ); // 2

  // или так

  let user = {
    name: 'John',
    age: 30
  };

  function count(obj) {
    return new Map(Object.entries(obj)).size;
  }

  console.log( count(user) ); // 2

  .___________________________________________

  // __ Деструктурирующее присваивание __

  Задача 1. Деструктурирующее присваивание

  /*
  У нас есть объект:

  let user = {
    name: "John",
    years: 30
  };
 
  Напишите деструктурирующее присваивание, которое:
  свойство name присвоит в переменную name.
  свойство years присвоит в переменную age.
  свойство isAdmin присвоит в переменную isAdmin (false, если нет такого свойства)
  Пример переменных после вашего присваивания:

  let user = { name: "John", years: 30 };
  */
  // ваш код должен быть с левой стороны:
  // ... = user

  /*
  alert( name ); // John
  alert( age ); // 30
  alert( isAdmin ); // false  
  */

  // Решение:

  let user = {
    name: "John",
    years: 30
  };

  let {name, years: age, isAdmin = false} = user;

  console.log( name ); // John
  console.log( age ); // 30
  console.log( isAdmin ); // false
  
  .___________________________________________

  Задача 2. Максимальная зарплата
    /*
  У нас есть объект salaries с зарплатами:

  let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
  };
  Создайте функцию topSalary(salaries), которая возвращает имя самого высокооплачиваемого сотрудника.

  Если объект salaries пустой, то нужно вернуть null.
  Если несколько высокооплачиваемых сотрудников, можно вернуть любого из них.
  P.S. Используйте Object.entries и деструктурирование, чтобы перебрать пары ключ/значение.
  */

  // Решение:

  let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
  };
  function topSalary(salaries) {

    let start = 0;
    let nameOfMaxSalaryEmployee = null;

    for(let [name, salary] of Object.entries(salaries)) {
      if (start < salary) {
        start = salary;
        nameOfMaxSalaryEmployee = name;
      }
    }
    return nameOfMaxSalaryEmployee;
  }
  topSalary(salaries);

  .___________________________________________

  // __ Дата и время __
  

  // Задача 1. Создайте дату
  
  /*
  Создайте объект Date для даты: 20 февраля 2012 года, 3 часа 12 минут. Временная зона – местная.
  Для вывода используйте alert.
  */

  // Решение:

  let taskDate = new Date(2012, 1, 20, 3, 12);
  console.log(taskDate);

  // Задача 2. Покажите день недели
  
  /*
  Напишите функцию getWeekDay(date), показывающую день недели в коротком формате: «ПН», «ВТ», «СР», «ЧТ», «ПТ», «СБ», «ВС».
  Например:

  let date = new Date(2012, 0, 3);  // 3 января 2012 года
  alert( getWeekDay(date) );        // нужно вывести "ВТ"
  */

  // Решение:

  let date = new Date(2012, 0, 3);
  
  function getWeekDay(date) {
    let daysOfWeek = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];

    return daysOfWeek[date.getDay()];
  }

  getWeekDay(date);

  // Задача 3. День недели в европейской нумерации
  
  /*
  В Европейских странах неделя начинается с понедельника (день номер 1), затем идёт вторник (номер 2) и так до воскресенья (номер 7). 
  Напишите функцию getLocalDay(date), которая возвращает «европейский» день недели для даты date.

  let date = new Date(2012, 0, 3);  // 3 января 2012 года
  alert( getLocalDay(date) );       // вторник, нужно показать 2
  */

  // Решение:
  // Подобное решение предлагает и учебник, но они хотят просто вывести цифру "2" в ответе
  // В этом варианте специльно поменял день на воскресенье, чтобы он вывел цифру "7"

  let date = new Date(2012, 0, 8);
  
  function getWeekDay(date) {
    let days = date.getDay();
   
   if (days == 0) {
     days = 7;
   }
    
    return days;
  }

  getWeekDay(date);

  // Этот вариант выведет цифру "2" в качетсве ответа и, по-факту, задание тоже выполнено верно 
  
  let date = new Date(2012, 0, 3);
  
  function getWeekDay(date) {
    let days = date.getDay();
    return days;
  }

  getWeekDay(date);
  

  // Задача 4. Какой день месяца был много дней назад?
  
  /*
  Создайте функцию getDateAgo(date, days), возвращающую число, которое было days дней назад от даты date.
  К примеру, если сегодня двадцатое число, то getDateAgo(new Date(), 1) вернёт девятнадцатое и getDateAgo(new Date(), 2) – восемнадцатое.
  Функция должна надёжно работать при значении days=365 и больших значениях:
  
  let date = new Date(2015, 0, 2);
  alert( getDateAgo(date, 1) ); // 1, (1 Jan 2015)
  alert( getDateAgo(date, 2) ); // 31, (31 Dec 2014)
  alert( getDateAgo(date, 365) ); // 2, (2 Jan 2014)
  P.S. Функция не должна изменять переданный ей объект date.
  */

  // Решение:

  function getDateAgo(date, days) {
    console.log(date); // показывает ненышнюю дату;
    let resultDate = new Date(date);
    resultDate.setDate(resultDate.getDate() - days);
    console.log(date); // показывает ненышнюю дату после всех махинаций, чтобы убедиться, что она не изменилась;
  return resultDate;
  }
  
  getDateAgo(new Date(), 365);

  // Задача 5. Последнее число месяца?
  
  /*
  Напишите функцию getLastDayOfMonth(year, month), возвращающую последнее число месяца. 
  Иногда это 30, 31 или даже февральские 28/29.
  Параметры:

  year – год из четырёх цифр, например, 2012.
  month – месяц от 0 до 11.
  К примеру, getLastDayOfMonth(2012, 1) = 29 (високосный год, февраль).
  */

  // Решение:

  function getLastDayOfMonth(year, month,) {
    let lastDate = new Date(year, month + 1 , 0);
    console.log(lastDate);
    return lastDate.getDate();
  }
  getLastDayOfMonth(2024, 1); // 29

  // Задача 6. Сколько сегодня прошло секунд?
  
  /*
  Напишите функцию getSecondsToday(), возвращающую количество секунд с начала сегодняшнего дня.
  Например, если сейчас 10:00, и не было перехода на зимнее/летнее время, то:
  getSecondsToday() == 36000 // (3600 * 10)
  Функция должна работать в любой день, т.е. в ней не должно быть конкретного значения сегодняшней даты.
  */

  // Решение:

  function getSecondsToday() {
    let nowDate = new Date();
    let startThisDate = new Date(nowDate.getFullYear(), nowDate.getMonth(), nowDate.getDate());
    let countDifferenceBetweenDates = Math.round((nowDate - startThisDate) / 1000);
    
    return countDifferenceBetweenDates;
  }
  getSecondsToday();

  
  // Задача 7. Сколько секунд осталось до завтра?
  
  /*
  Создайте функцию getSecondsToTomorrow(), возвращающую количество секунд до завтрашней даты.
  Например, если сейчас 23:00, то:
  getSecondsToTomorrow() == 3600
  P.S. Функция должна работать в любой день, т.е. в ней не должно быть конкретного значения сегодняшней даты.
  */

  // Решение:
  
  function getSecondsToTomorrow() {
    let nowDate = new Date();
    let startNextDay = new Date(nowDate.getFullYear(), nowDate.getMonth(), nowDate.getDate() + 1);
    let countDifferenceBetweenDates = Math.round((startNextDay - nowDate) / 1000);
    
    return countDifferenceBetweenDates;
  }
  getSecondsToTomorrow();

  // Задача 8. Форматирование относительной даты
  
  /*
  Напишите функцию formatDate(date), форматирующую date по следующему принципу:
  Если спустя date прошло менее 1 секунды, вывести "прямо сейчас".
  В противном случае, если с date прошло меньше 1 минуты, вывести "n сек. назад".
  В противном случае, если меньше часа, вывести "m мин. назад".
  В противном случае, полная дата в формате "DD.MM.YY HH:mm". 
  А именно: "день.месяц.год часы:минуты", всё в виде двух цифр, т.е. 31.12.16 10:00.
  
  Например:
  alert( formatDate(new Date(new Date - 1)) ); // "прямо сейчас"
  alert( formatDate(new Date(new Date - 30 * 1000)) ); // "30 сек. назад"
  alert( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 мин. назад"

  // вчерашняя дата вроде 31.12.2016, 20:00
  alert( formatDate(new Date(new Date - 86400 * 1000)) );
  */

  // Решение:

  // это не сделал

  function formatDate(date) {
    /*let dateForCompare = new Date();
    let diffrenceBetweenDates = dateForCompare - date;
    console.log(diffrenceBetweenDates);
    let secondsPast = Math.round (diffrenceBetweenDates / 1000);
    console.log(secondsPast);
      
      if (diffrenceBetweenDates < 1000) {
       alert ('Прямо сейчас');
        
      }

      if (secondsPast < 60) {
        alert (secondsPast + 'сек назад');
      }


    return ;*/
  }
  
  formatDate(new Date(new Date - 1)); // "прямо сейчас"
  formatDate(new Date(new Date - 30 * 1000)); // "30 сек. назад"
  formatDate(new Date(new Date - 5 * 60 * 1000)); // "5 мин. назад"
  
  .___________________________________________

  // __ Формат JSON, метод toJSON __

  Задача 1. Преобразуйте объект в JSON, а затем обратно в обычный объект
  
  /*
  Преобразуйте user в JSON, затем прочитайте этот JSON в другую переменную.
  
  let user = {
    name: "Василий Иванович",
    age: 35
  };
  */

  // Решение:

  let user = {
    name: "Василий Иванович",
    age: 35
  };

  let json = JSON.stringify(user);
  console.log(json);
  let backToObject = JSON.parse(json);
  console.log(backToObject);

  Задача 2. Исключить обратные ссылки
  
  /*
  В простых случаях циклических ссылок мы можем исключить свойство, из-за которого они возникают, из сериализации по его имени.
  Но иногда мы не можем использовать имя, так как могут быть и другие, нужные, свойства с этим именем во вложенных объектах. 
  Поэтому можно проверять свойство по значению.
  Напишите функцию replacer для JSON-преобразования, которая удалит свойства, ссылающиеся на meetup:

  let room = {
    number: 23
  };

  let meetup = {
    title: "Совещание",
    occupiedBy: [{name: "Иванов"}, {name: "Петров"}],
    place: room
  };

  // цикличные ссылки
  room.occupiedBy = meetup;
  meetup.self = meetup;
  */

  //alert( JSON.stringify(meetup, function replacer(key, value) {
    /* ваш код */
  //}));

  /* в результате должно быть:
  {
    "title":"Совещание",
    "occupiedBy":[{"name":"Иванов"},{"name":"Петров"}],
    "place":{"number":23}
  }
  */

  // Решение:

  let room = {
    number: 23
  };

  let meetup = {
    title: "Совещание",
    occupiedBy: [{name: "Иванов"}, {name: "Петров"}],
    place: room
  };

  // цикличные ссылки
  room.occupiedBy = meetup;
  meetup.self = meetup;

  console.log( JSON.stringify(meetup, function replacer(key, value) {
    return (key != '' && value == meetup) ? undefined : value;
  }));

  