'use strict';

// ЗАДАНИЕ 1

function chetniChisla(a,b){
    for (let i=a; i<=b; i+=2){
        alert(i)
    }
}

let a = Number(prompt("Введите первое число"));
let b = Number(prompt("Введите второе число"));
chetniChisla(a,b);

// ЗАДАНИЕ 2

let i = 0;

while(i<3){
    alert(`Выводимое число ${i}!`);
    i++;
}

// ЗАДАНИЕ 3

let chislo = Number(prompt("Введите число"));
while (chislo <= 10){
    chislo = Number(prompt("Введите число"));
}
alert("Вы ввели число больше 10");
alert(chislo);

// ЗАДАНИЕ 4

let c = Number(prompt("Введите первое число"));
let d = Number(prompt("Введите второе число"));
function min(c,d){
   let result;
   if(c<d) result = c;
   else result =d;
   return result;
}

alert (`Меньшее число, ${min(c,d)}`);

// ЗАДАНИЕ 5

const ask = (question,yes,no) =>{
    if (confirm(question)) yes()
    else no();
  }

  ask(
    "Вы согласны?",
    () => { alert("Вы согласились."); },
    () => { alert("Вы отменили выполнение."); }
  );
  
// ЗАДАНИЕ 6

let age = Number(prompt("Введите ваш возраст"));
function checkage(){
    return age > 18 || confirm("Родители разрешили?");
}

checkage();