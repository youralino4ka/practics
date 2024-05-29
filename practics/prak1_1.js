//задание 1
let zodiacSign = prompt("введите ваш знак зодиака:");
switch(zodiacSign) {
case "Овен":
alert("Привет, Овен!");
break;
case "Телец":
alert("Привет, Телец!");
break;
default:
alert("Привет!");
break;
case "Близнецы":
alert("Привет, Близнецы!");
break;
case "Рак":
alert("Привет, Рак!");
break;
case "Лев":
alert("Привет, Лев!");
break;
case "Дева":
alert("Привет, Дева!");
break;
case "Весы":
alert("Привет, Весы!");
break;
case "Скорпион":
alert("Привет, Скорпион!");
break;
case "Стрелец":
alert("Привет, Стрелец!");
break;
case "Козерог":
alert("Привет, Козерог!");
break;
case "Водолей":
alert("Привет, Водолей!");
break;
case "Рыбы":
alert("Привет, Рыбы!");
break;
}

//задание 2
for (let i = 1; i <= 40; i++) {
    console.log(i);
    }
    
    let j = 1;
    while (j <= 40) {
    console.log(j);
    j++;
    }
    
    let k = 1;
    do {
    console.log(k);
    k++;
    } while (k <= 40);


//задание 3
<script>
    setInterval(function() {
        document.getElementById("message").innerHTML = "привет, я вирус"
    }, 1000);
</script>

//задание 4
let num1 = prompt("введите первое число:");
let num2 = prompt("введите второе число:");
let num3 = prompt("введите третье число:");
let sortedNums = [num1, num2, num3].sort((a, b) => a - b);
console.log(sortedNums);

//задание 5
for(let i = 0; i <= 15; i++) {
    if(i % 2 === 0) {
    console.log(i + " - четное");
    } else {
    console.log(i + " - нечетное");
    }
    }

//задание 6
let userNumber;
do {
userNumber = prompt("введите число больше 5:");
}
while (userNumber <= 5);
alert("поздравляем!");

//задание 7
for(let i = 8; i <= 20; i += 2) {
    console.log(i);
    }

//задание 8
let sum = 0;
for(let i = 0; i <= 1000; i++) {
if(i % 3 === 0 || i % 5 === 0) {
sum += i;
}
}
console.log(sum);

//задание 9
let number = 371;
let strNumber = number.toString();
let sum1 = 0;
for(let digit of strNumber) {
sum1 += parseInt(digit) ** 3;
}
if(sum1 === number) {
console.log(number + " это число армстронга");
} else {
console.log(number + " это не число армстронга");
}

//задание 10
let str = "";
for(let i = 1; i <= 5; i++) {
str += '* ';
console.log(str);
}