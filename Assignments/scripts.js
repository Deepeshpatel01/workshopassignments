                                                                     //Assignments  1 //

                                                                    

// Q.1 write the program to print the given string is palindrome or not

function isPlandrome(str){
    const len = str.length
    for(let i=0;i<len/2;i++){
        if(str[i]!==str[len-1-i]){
            return 'not a plandrome'
        }
        else{
            return 'is a plandrome'
        }
    }
}
console.log(isPlandrome('madam'))
console.log(isPlandrome('hello'))
console.log(isPlandrome('racecar'))
console.log(isPlandrome('12321'))
console.log(isPlandrome('12345'))


console.log("-----------------------------------------------------------------------------------------------------------------------------------")


// Q.2 write the program to print the given string is anagram or not
function isAnagram(str1,str2){
    const len1 = str1.length
    const len2 = str2.length    
    if(len1!==len2){
        return 'not anagram'
    }
    const sortedStr1 = str1.split('').sort().join('')
    const sortedStr2 = str2.split('').sort().join('')
    if(sortedStr1===sortedStr2){
        return 'is anagram'
    }
    else{
        return 'not anagram'
    }   
}
console.log(isAnagram('listen','silent'))
console.log(isAnagram('hello','world'))

console.log("-----------------------------------------------------------------------------------------------------------------------------------")




//Q.3 write the program to print the reverse of string
function reverseWordOrder(sentence) {
  return sentence.split(' ').reverse().join(' ');
}
console.log(reverseWordOrder('Hello Java Script'))

console.log("-----------------------------------------------------------------------------------------------------------------------------------")











                                                                       //Assignments  2 //




                                                                   //JavaScript Object Questions



//  Q.1  . Destructure Nested Object
//• Extract age and city using destructuring
//const user = { name: "Alice", details: { age: 25, city: "Paris" } };

  const user ={name:"Alice",details:{age:25,city:"Paris"}};
  const {name} = user
  let ={details:{age:Ag,city:Ct}}=user
  console.log(Ag,Ct)

  console.log("-----------------------------------------------------------------------------------------------------------------------------------")


//2. Merge Objects
//• Merge obj1 and obj2 so that obj2 values override obj1
//const obj1 = { a: 1, b: 2 };
//const obj2 = { b: 3, c: 4 };

const obj1={a:1,b:2}
   const obj2={b:3,c:4}
   const merged={...obj1,...obj2};
   console.log(merged);

   console.log("-----------------------------------------------------------------------------------------------------------------------------------")



//3. Convert Object to Array
//• Convert this object to an array of key-value pairs
//const product = { id: 1, name: "Laptop", price: 1000 };

const product = { id: 1, name: "Laptop", price: 1000 };

const res = Object.entries(product);

console.log(res);


console.log("-----------------------------------------------------------------------------------------------------------------------------------")



//4. Update Nested Value Without Mutation
//• Create a new object with city changed to "Tokyo" (don’t mutate original)
//const person = { name: "John", address: { city: "London", zip: 12345 } }; 


const person = { name: "John", address: { city: "London", zip: 12345 } };
const updatedPerson = {
  ...person,
  address: { ...person.address, city: "Tokyo" }
};
console.log(updatedPerson);
console.log(person);


console.log("-----------------------------------------------------------------------------------------------------------------------------------")


//5. Filter Object  Keys by Condition
//• Create a new object with only students scoring 60 or above
//const scores = { Alice: 85, Bob: 58, Charlie: 90, Dave: 45 };

const scores = { Alice: 85, Bob: 58, Charlie: 90, Dave: 45 };
const passed = Object.fromEntries(
  Object.entries(scores).filter(([name, score]) => score >= 60)
);

console.log(passed);

console.log("-----------------------------------------------------------------------------------------------------------------------------------")

                

                                                             //JavaScript Array Questions



// 1. Remove Duplicates
// • Remove duplicates and return a unique array
// const arr = [1, 2, 2, 3, 4, 4, 5]; 


const arr =[1,2,2,3,4,4,5];
const uniquearray=new Set(arr)
console.log(uniquearray)


console.log("-----------------------------------------------------------------------------------------------------------------------------------")



// 2. Flatten Nested Array
// • Flatten this array to a single level
// const arr = [1, [2, [3, [4, 5]]]];


const arrr = [1, [2, [3, [4, 5]]]];

function flattenArray(input) {
  let result = [];

  for (let i = 0; i < input.length; i++) {
    if (Array.isArray(input[i])) {
      result = result.concat(flattenArray(input[i])); // call again if it's an array
    } else {
      result.push(input[i]); // add value directly
    }
  }

  return result;
}

console.log(flattenArray(arrr)); // Output: [1, 2, 3, 4, 5]


console.log("-----------------------------------------------------------------------------------------------------------------------------------")



// 3. Sort Objects by Property
// • Sort users by age (ascending)
// const users = [
//  { name: "John", age: 30 },
//  { name: "Alice", age: 25 },
//  { name: "Bob", age: 28 }
// ];

const users = [
  { name: "John", age: 30 },
  { name: "Alice", age: 25 },
  { name: "Bob", age: 28 }
];

users.sort(function(a, b) {
  return a.age - b.age;
});

console.log(users);



console.log("-----------------------------------------------------------------------------------------------------------------------------------")


/*4. Group Elements by Property
• Group people by gender (output an object with male/female 
arrays)const people = [
 { name: "Tom", gender: "male" },
 { name: "Sara", gender: "female" },
 { name: "Alex", gender: "male" }
];*/
     

const people = [
  { name: "Tom", gender: "male" },
  { name: "Sara", gender: "female" },
  { name: "Alex", gender: "male" }
];

const results = {
  male: [],
  female: []
};

for (let i = 0; i < people.length; i++) {
  const person = people[i];

  if (person.gender === "male") {
    results.male.push(person);
  } else if (person.gender === "female") {
    results.female.push(person);
  }
}

console.log(result);




console.log("-----------------------------------------------------------------------------------------------------------------------------------")


//5. Transform Array of Objects
//• Convert this to { 1: "John", 2: "Jane" }
//const users = [{ id: 1, name: "John" },{ id: 2, name: "Jane" }];

const Users = [{ id: 1, name: "John" }, { id: 2, name: "Jane" }];
const result = {};

for (let i = 0; i < Users.length; i++) {
  result[Users[i].id] = Users[i].name;
}

console.log(result); 




console.log("-----------------------------------------------------------------------------------------------------------------------------------")
