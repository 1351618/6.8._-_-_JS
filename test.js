

// console.log("123hgdhdj4");
//======================================================
// let a_str = prompt("введите число");


// if (!isNaN(a_str)) {
//     if (a_str % 2 === 0) {
//         alert(a_str + " число четное");
//         console.log(a_str + " число четное");
//     } else {
//         alert(a_str + " число не четное");
//         console.log(a_str + " число не четное");

//     }
// } else {
//     alert("это не число");
//     console.log("это не число");
// }


// //===================================================
// let name = "John";
// let age = 25;

// let message = `Меня зовут ${name}. Мне ${age} лет.`;
// console.log(message); // Меня зовут John. Мне 25 лет.
// //==============================================




// задание 1 =======================================================================
document.getElementById("task_1").addEventListener("click", function () {
    let value = prompt("Введите значение:");
    let number = +value; // преобразование в число с помощью унарного плюса

    if (isNaN(number)) { // проверка на NaN
        console.log("Упс, кажется, вы ошиблись");
    } else if (typeof number === "number") { // проверка на тип Number
        if (number % 2 === 0) {
            console.log("Число чётное");
        } else {
            console.log("Число нечётное");
        }
    } else {
        console.log("Упс, кажется, вы ошиблись");
    }
});


// Задание 2 ========================================
document.getElementById("task_2").addEventListener("click", function () {
    // let x = 10;
    // let x = "Hello world";
    let x = true;

    if (typeof x === "number") {
        console.log(x + " — число");
    } else if (typeof x === "string") {
        console.log(x + " — строка");
    } else if (typeof x === "boolean") {
        console.log(x + " — логический тип");
    } else {
        console.log("Тип x не определён");
    }
});



// Задание 3 ========================================
document.getElementById("task_3").addEventListener("click", function () {
    let a = "hello vorld";
    let b = a.split("").reverse().join("");
    console.log(b);
});



// let a2 = "привет всем";
// let b2 = a2.split("").reverse().join("");
// console.log(b2);


//Задание 4==========================================================
document.getElementById("task_4").addEventListener("click", function () {
    let a3 = Math.PI;
    let string = a3.toString();
    let rend1 = string.charAt(Math.floor(Math.random() * string.length));
    let rend2 = string.charAt(Math.floor(Math.random() * string.length));
    let rend = parseInt(rend1 + rend2);
    console.log(rend);
});

//==================================================
// for (let i = 0; i < 100; i = i + 1) {
//     console.log(i);
// }


// задание 5 ==============================================
document.getElementById("task_5").addEventListener("click", function () {
    let masiv = [12, 23, 45, 56, 67, 64];
    console.log(masiv.length);

    for (let i = 0; i < masiv.length; i++) {
        console.log(`${i} = ${masiv[i]}`);
    }
});
//===========================================================



// let count = 0;
// while (count < 5) { //вариант цикла
//   console.log(count);
//   count++;
// }

// while (true) {  //бесконечный цикл
//     console.log('infinity loop')
// }



// задание 6 ========================================
document.getElementById("task_6").addEventListener("click", function () {
    let arr = [1, 2, 3, 4, 5];
    let isAllEqual = true;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] !== arr[0]) {
            isAllEqual = false;
            break;
        }
    }
    console.log(isAllEqual);
});




// задание 7 ========================================
document.getElementById("task_7").addEventListener("click", function () {
    let task_6 = [1, 4, 5, "8", null, "=", 4, 9, 0, 4, "hf", 8, 6]
    let i = 0;
    while (i < task_6.length) {
        if (!isNaN(task_6[i])) {
            let task_6_num = Number(task_6[i]);
            if (task_6_num === 0) {
                console.log(`${task_6_num} нолик`);
            } else if (task_6_num % 2 === 0) {
                console.log(`${task_6_num} число четное`);
            } else {
                console.log(`${task_6_num} не четное число`);
            }
        } else {
            console.log(`${task_6[i]} == строка ==`);
        }
        i++
    }
});
//=================================================================================




// Задание 8 ==================================================================
document.getElementById("task_8").addEventListener("click", function () {
    let my_dictionary = {
        key_1: "value_1",
        key_2: "value_2",
        key_3: "value_3",
    }
    let list_key = Object.keys(my_dictionary);

    for (let i = 0; i < list_key.length; i++) {
        let opr_key = list_key[i];
        let opr_val = my_dictionary[opr_key];
        console.log(`«Ключ — ${opr_key}, значение — ${opr_val}»`);
    }
});
// =================================================================================


// document.getElementById("task_0").addEventListener("click", function () {
// });