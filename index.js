//1) Якщо значення змінної number позитивне або 0 - виводимо ''positive", інакше - "negative"

const number = 5;
if (number >= 0) {
  console.log("positive");
} else {
  console.log("negative");
}

//2) Є дві змінні - num1 і num2. Якщо num1>num2 - вивести результат віднімання, інакше - вивести результат множення

const num1 = 7;
const num2 = 3;
if (num1 > num2) {
  console.log(num1 - num2);
} else {
  console.log(num1 * num2);
}

//Якщо значення змінної кратно(тобто ділеться без остачі) на 7 і одночасно кратна 3 - виводимо "you win!", інакше - "you loose"

const num3 = 20;
if (num3 % 7 === 0 && num3 % 3 === 0) {
  console.log("you win");
} else {
  console.log("you lose");
}
