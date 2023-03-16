"use strict"


// Task 1


/*
{

  let str = 'aaa@bbb@ccc';
   console.log(str);
   console.log (str.replace(/@/g,'!'));
}
*/



// Task 2


/*
{

  let date = '2025-12-31';
  console.log(date);
  date = date.replace(/-/g,' ');
  date = date.replace(/(2025) (12) (31)/,'$3 $2 $1');
  console.log (date.replace(/ /g,':'));
  
  
}
*/



// Task 3


/*
{

  let str = 'Я учу javascript';

  console.log (str.substring(2,17));
  console.log (str.substr(2,14));
  console.log (str.slice(2, 17));
}
*/




// Task 4



/*
{

  let arr = [4, 2, 5, 19, 13, 0, 10];

  let sum = 0;

  for (let i = 0; i< arr.length; i ++){
    sum += Math.pow(arr[i],3);
  }
  
  console.log(Math.sqrt(sum));
}
*/



// Task 5



{

  function math (a,b){

   let c= Math.abs(a-b);
    console.log(c);

  }
math (3,5);
math (6,1);


}




// Task 6


/*
{

  let date = new Date();
  function addZero(num){
    if (num > 0 && num < 10) { 
      return '0' + num;
    } else {
      return num;
    }
  }
  
  console.log(date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds() + ' ' + addZero(date.getDate()) + '.' + addZero(date.getMonth() + 1) + '.' + date.getFullYear());
   
}
*/


//Task 7


/*
{

  let str = 'aa aba abba abbba abca abea';
  console.log( str.match(/a+b{1,}a/g));
}
*/



// Task 8

/*
{

  function phoneCheck (phone){

    let num = /^[\d\+][\d\(\)\ -]{4,14}\d$/;

    let valid = num.test(phone);
    console.log(valid);

  }
  phoneCheck(prompt('Введите номер телефона'));
}
*/



// Task 9


/*
{

function mail (email){

  let m =/^[\w]{2}[\w-\.]*@[\w-]+\.[a-z]{2,11}$/i;

  let check = m.test(email);
  console.log(check);
}
mail( prompt ('Введите электронный адрес'));
}
*/




// Task 10


/*
{

  function checkAddress(address) {
  let url = new URL(address); //создаем объект
   let arr = [];
   arr[0] = url.origin;   
    arr[1] = url.pathname;   
    arr[2] = url.search;   
    arr[3] = url.hash;
   
   console.log(arr);
  }
  checkAddress(prompt('Ввудите url адрес'));

}
*/