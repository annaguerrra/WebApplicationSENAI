let variavel1 = 5 // escopo local => escopo de função
var variavel2 = 100 // escopo global
const variavel3 = 15 // imutavel

// #define VAR 1

const name = "Anna";
const age = 18;

// array
let arr = [];
let girls = ["Guerra", 18, true];

// objects
const obj = {
    name: "Anna", 
    age: 18,
    Work: "Bosch",
    family:{
        Father: "Marcio",
        Mother: "Jane",
        Brother: "Victor",
        Boyfriend: "Leoleo"
    }
};
// common function
function sum(x,y){
    return x + y;
}
// arrow function
const sumArrow = (a,b) => a + b;

console.log("My bf's name is " + obj.family.Boyfriend); 
console.log(obj.Work);
console.log(girls[0]);
console.log("My name is " + name + " and I'm " + age + " years old" );
console.log("A soma de 2 + 2 = " + sum(2,2));
console.log("A soma de 3 + 3 = " + sumArrow(3,3));


// array methods
// .map()    .filter()   .find()   .findindex()   .indexof()   .reduce()

// getElementbyId("id")
let title = document.getElementById('element1').innerHTML;
console.log(title);

// const receiveText = () => {
//     let inputText = document.getElementById('input')
//     console.log(inputText);
// }

// const changecolor = () => {
//     let csquare = document.getElementById('circle1');
//     if(csquare.className == "circle ok"){
//         csquare.classList.remove("ok");
//         csquare.classList.add("bad");
//     }
//     else{
//         csquare.classList.remove("bad");
//         csquare.classList.add("ok");
//     }
// }

const change = () => {
    let csquare = document.getElementById('input');
    
}