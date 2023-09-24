//EJERCICIOS DE ELEVACIÓN

//EJERCICIO 1
console.log(hello);
var hello = 'world';
//DESPUES QUE EL INTERPRETE REALICE LA ELEVACIÓN
// var hello;
// console.log(hello);
// hello = "world";

output = undefined;

//EJERCICIO 2
var needle = 'haystack';
test();
function test() {
    var needle = 'magnet';
    console.log(needle);
}
//DESPUES QUE EL INTERPRETE REALICE LA ELEVACIÓN
//var needle = "haystack"
// function test() {
//     var needle = "magnet";
//     console.log(needle);
// }
// test();

output = magnet;

//EJERCICIO 3
var brendan = 'super cool';
function print() {
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);
//DESPUES QUE EL INTERPRETE REALICE LA ELEVACIÓN
// var brendan = 'super cool';
// function print() {
//     brendan = 'only okay';
//     console.log(brendan);
// }
// console.log(brendan);

output = "super cool";

//EJERCICIO 4
var food = 'chicken';
console.log(food);
eat();
function eat() {
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}
//DESPUES QUE EL INTERPRETE REALICE LA ELEVACIÓN
// var food = 'chicken';
// console.log(food);
// function eat() {
//     var food = 'gone';
//     food = 'half-chicken';
//     console.log(food);
// }
// eat();

output1 = chicken;
output2 = half - chicken;

//EJERCICIO 5
mean();
console.log(food);
var mean = function () {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);
//DESPUES QUE EL INTERPRETE REALICE LA ELEVACIÓN
// var mean;
// mean = function () {
//     var food;
//     food = "chicken";
//     console.log(food);
//     food = "fish";
//     console.log(food);
// }
// mean();
// console.log(food);
// console.log(food);

output = meanNoEsUnfunción;

//EJERCICIO 6
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);
//DESPUES QUE EL INTERPRETE REALICE LA ELEVACIÓN
// var genre;
// console.log(genre);
// genre = "disco";
// function rewind() {
//     var genre; 
//     genre = "rock";
//     console.log(genre);
//     genre = "r&b";
//     console.log(genre);
// }
// rewind();
// console.log(genre);

output1 = indefinido;
output2 = rock;
output3 = r & b;
output4 = disco;

//EJERCICIO 7
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);
//DESPUES QUE EL INTERPRETE REALICE LA ELEVACIÓN
// dojo = "san jose";
// console.log(dojo);
// function learn() {
//     var dojo;
//     dojo = "seattle";
//     console.log(dojo);
//     dojo = "burbank";
//     console.log(dojo);
// }
// learn();
// console.log(dojo);

output1 = sanJose;
output2 = seattle;
output3 = burbank;
output4 = sanJose;

//EJERCICIO 8
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students) {
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if (dojo.students > 50) {
        dojo.hiring = true;
    }
    else if (dojo.students <= 0) {
        dojo = "closed for now";
    }
    return dojo;
}
//DESPUES QUE EL INTERPRETE REALICE LA ELEVACIÓN
// function makeDojo(name, students) {
//     const dojo = {};
//     dojo.name = name;
//     dojo.students = students;
//     if (dojo.students > 50) {
//         dojo.hiring = true;
//     }
//     else if (dojo.students <= 0) {
//         dojo = "closed for now";
//     }
//     return dojo;
// }
// console.log(makeDojo("Chicago", 65));
// console.log(makeDojo("Berkeley", 0));

output1 = {name: "Chicago", students: 65, hiring: true};
output2 = ErrorPorNuevaAsignaciónAUnaConstante;
