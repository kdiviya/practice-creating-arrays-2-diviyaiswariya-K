//Task 1: Initialize the Array
let textArr = Array(7).fill("Hello");
console .log(textArr);

//Task 2: Update the Array
let modifyArr = textArr.fill("Hi", 2, 5);
console.log(modifyArr);

//Task 3: Populate the Array with a for Loop
let numberArr = Array(5);
for(let index =0; index < numberArr.length; index++){
    numberArr[index]= index *10;
}
console.log(numberArr);

