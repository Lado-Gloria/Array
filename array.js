let array1 =[3,7,3,4,90,12];
let num =array1[array1.length-1];
console.log(num);

let array2 =[true, "green","where",12,56];
let num1 = array2[array2.length-1];
console.log(num1);

let mypet =["Cow","Bird","Snake","Dog"];
mypet.toString();
console.log(mypet);

const arr3 =[-5,9,5,3,2,-3,6,8,4,1];
arr3.sort();
console.log(arr3);

const fruit =["apple","mango","apple","orange","mango","mango"];
function remove (fruit){return fruit.filter((item,index)=>fruit.indexOf(item===index))
}
console.log(fruit)
let dec =["apple","mango","apple","orange","mango","mango"];
let dec1 = [...new Set(dec)];
console.log(dec1);

let word =["the","way","x",4]
let y ="we"
 if (word.includes(y)) {
    console.log(y)
 } else {
    console.log("notfound")
    
 }
