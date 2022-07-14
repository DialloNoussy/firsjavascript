let myAlphabet = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "$",
  "*",
  "/",
  "-",
  "+",
];
console.log(myAlphabet.length);

function tableau(array){
console.log(array.length);

}
tableau(myAlphabet)
console.log("2eme exercice");


//2eme exercice//
let planets=[
  "orange","bannane","kiwi","pomme","mangue"
]
planets.forEach((planet,index)=>{
  console.log(index,planet);
})
console.log("3eme exo")
//3eme Exo
let someDataTypes=[
  "Ali",10,true,null
]
someDataTypes.forEach((someDataType,index)=>{
  console.log(index,typeof someDataType);
})
console.log("4eme exo")
//4eme exo

let array=[];
console.log(array);
array.push("Diallo",10,true,null)
console.log(array);
let nouvllearray=array.slice();
console.log(nouvllearray);

console.log("5eme exo");
//5eme exo

let furnitures = ['Table', 'Chairs','Couch'];
console.log(furnitures.toString().split(""))
console.log("6eme exo");
//6eme exo
let values1= ["Apple", 1, false, "2"];
let values2 = [`5`, "Fries", 2 , true];
let values3 = ["Mars", "Strawberry", 9];
console.log("-".repeat(20));

values1.forEach(value=>{
  if(typeof(value)==="number"){
    console.log(value)
  }
  else{}
})
console.log("7eme exo");
//7eme exo

let studentCoursesA = ['Math', 'English', 'Programming'];
let studentCoursesB = ['Geography', 'Spanish', 'Programming'];
let resultat=[];

function comparer() {
  for (let x = 0; x <studentCoursesA.length; x++) {
    if (studentCoursesA[x]==studentCoursesB[x]){}
    else {
      resultat.push(studentCoursesA[x],studentCoursesB[x])
    }
    
  }
return resultat;

}

console.log(comparer());
console.log("/".repeat(20));