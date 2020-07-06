function getRandom() {
    return Math.random();
}
let number = 1;

while (number) {
    let random = Math.floor(getRandom()*10+1);
    number = +prompt('Угадайте число от 1 до 10',);
    if (number === random) {
        console.log('Вы угадали');
    }
    else if (number) {
        console.log('Вы не угадали');
    }
    else {
        console.log('Игра окончена');
    }
}
// игра с угадыванием

for (let i = 1; i <= 20; i++) {
    if (i % 2) continue;
    console.log(i);
}

for (let j = 1; j <= 20; j++) {
    if (!(j % 2)) continue;
    console.log(j);
}
// вывод четных и нечетных чисел через for

let y = 0;

do {
    y++;
    if (y % 2) continue;
    console.log(y);
} while (y<=20);

let t = 0;

do {
    t++;
    if (!(t % 2)) continue;
    console.log(t);
} while (t<20);

// вывод четных и нечетных чисел через do while

let a = 0;

while (a<20) {
    a++;
    if (a % 2) continue;
    console.log(a);
}

let b = 0;

while (b<20) {
    b++;
    if (!(b % 2)) continue;
    console.log(b);
}
// вывод четных и нечетных чисел через while

let p = 1;
let g = +prompt('Количество выведенных чисел',);
let q = +prompt('Введите число, кратное которому будут выводиться числа:',);
for (let s = 1; s <= 20; s++) {
    if (s % q) continue; {
        if (p > g) break; {
            console.log(s);
            p++;
        }
    }
}
// усложненный вывод чисел с указанием количества выведенных чисел