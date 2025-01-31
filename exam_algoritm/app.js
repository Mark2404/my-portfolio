// 1 talaba malumotlarini boshqarish

// class student {
//     constructor(name, age, grades,) {
//         this.name = name;
//         this.age = age;
//         this.grades = [90, 80, 70];
//     }
//     addGrade(grade) {
//         this.grades.push(grade);
//     }
//     getAvarege() {
//         let sum = 0;
//         for (let i = 0; i < this.grades.length; i++) {
//             sum += this.grades[i];
//         }
//         return sum / this.grades.length;
//     }
// }


// let student1 = new student("mark", 20, [90, 80, 70]);
// student1.addGrade(50);
// console.log(student1.getAvarege() + " o'rtacha bahosi");

/// arraydagi bir xil so'zlar sonini hosil qiluvchi obyektni yarating

// let animals = ["cat", "dog", "bird", "dog", "cat",];
// function count(animals) {
//     let obyekt = {};
//     for (let i = 0; i < animals.length; i++) {
//         if (obyekt[animals[i]]) {
//             obyekt[animals[i]] += 1;
//         } else {
//             obyekt[animals[i]] = 1;
//         }
//     }
//     return obyekt;
// }
// console.log(count(animals));

//// kiritilgan son tub ekanligini aniqlovchi dastur tuzing
// let num = +prompt("sonni kiriting");
// function Tub(num) {
//     for (let i = 2; i < num; i++) {
//         if (num % i === 0) {
//             return console.log("tub emas");
//         }
//     }
//     return console.log("tub son");
// }
// console.log(Tub(num));


/// n faktorial rekursiv funksiyasini yarating
// let num = +prompt("sonni kiriting");
// function faktorial(num) {
//     if (num === 1) {
//         return 1;
//     }
//     return num * faktorial(num - 1);
// }
// console.log(faktorial(num));

//// IncTime funksiyasi

// let T = +prompt('sekundni kiriting soat minutgacha sekundgacha chiqaraman');
// function IncTime(T) {
//     let h = Math.floor(T / 3600);
//     let m = Math.floor((T - h * 3600) / 60);
//     let s = T - h * 3600 - m * 60;
//     return `${h} soat ${m} minut ${s} sekund`;
// }
// console.log(IncTime(T));
