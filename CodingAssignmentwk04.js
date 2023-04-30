// 1.  Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
let ages = [3, 9, 23, 64, 2, 8, 28, 93];

/* 1a.Programmatically subtract the value of the first element in the array from the value in the last element of the array.   
Do not use numbers to reference the last element, find it programmatically.
ages[7] – ages[0] is not allowed! */
console.log(ages[ages.length -1]-3);

// 1b. Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).
ages.push(10);
console.log(ages);

// 1c. Use a loop to iterate through the array and calculate the average age.
let averageArray = (array) => {
    let sum = 0;
    for (let numbers of array) {
        sum += numbers;
    }
    return sum / array.length
} 
console.log(averageArray(ages));


// 2.  Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.
let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob']

// 2a. Use a loop to iterate through the array and calculate the average number of letters per name.
    let total = 0 ;
    for(let i = 0; i < names.length; i++){
    total += names[i].length
}
let averageLetters = total / names.length 
console.log(averageLetters);

// 2b. Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.


let joinedNames = (array) =>{
for(let i = 0; i < array.length; i++ )
    return array.join(' ');
}
console.log(joinedNames(names))

// 3.  How do you access the last element of any array?

 console.log(names[names.length-1])

// 4.  How do you access the first element of any array?
console.log(names[0])

/* 5.  Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array. */
    let nameLengths = []
    for(let i = 0; i < names.length; i++)
    nameLengths.push(names[i].length);
console.log(nameLengths)

// 6.  Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array. 
let sumOfNames = (array3) => {
    let total = 0;
    for(let i = 0; i < array3.length; i++) {
        total += array3[i]
    } return total
} 
console.log(sumOfNames(nameLengths));
/* 7.  Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in ‘Hello’ and 3, I would expect the function to return ‘HelloHelloHello’). */

let concatenatedWord = (word, n) => {
    let message = ''
    for(let i = 0; i < n; i++){
        message += word;
    }
    return message
}
console.log(concatenatedWord('hello', 6))

/* 8.  Write a function that takes two parameters, firstName and lastName, and returns a full name.  The full name should be the first and the last name separated by a space. */

let fullName = (firstName, lastName) => `${firstName} ${lastName}`;

console.log(fullName('Vanessa', 'DeLaCueva'));

/* 9.  Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100. */

let sum = array =>{
   let numbersTogether = 0
   for(let i = 0; i < array.length; i++)
      numbersTogether += array[i];
    return numbersTogether
}
let greaterThan =(sum) => {
    if(sum > 100){
    return true 
        }    else
         return false 
    }

let numbers = [1, 1]

console.log(greaterThan(sum(numbers)));

/* 10.  Write a function that takes an array of numbers and returns the average of all the elements in the array. */

let theAverage = (array1) => {
    let total = 0;
    for(let i = 0; i < array1.length; i++) {
        total += array1[i]
    } return total / array1.length
    
}
let thisArray=[1, 4, 3, 8, 8, 10];
console.log(theAverage(thisArray))

/* 11.  Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array. */

let arrayAverage = (firstArray, secondArray) =>{
    let total = 0;
    for(let i = 0; i < firstArray.length; i++) {
        total += firstArray[i]
    }   let total2 = 0;
    for(let i = 0; i < secondArray.length; i++) {
        total2 += secondArray[i]
} if(total > total2){
    return true
}else{
    return false
}
}
let numberOne = [1, 7]
let numberTwo = [3] 
console.log(arrayAverage(numberOne,numberTwo));

/* 12.  Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50. */

let willBuyDrink =(isHotOutside, moneyInPocket) =>{
    if(isHotOutside.toLowerCase() === 'ishotoutside' && moneyInPocket > 10.50){
        return true
    }else {
        return false
    }
}
console.log(willBuyDrink('isHOToutside', 11));

// 13.  Create a function of your own that solves a problem. 



let budget = (gasBill, phoneBill, rent, payCheck) => {
    let bills = gasBill + phoneBill + rent;
     return payCheck - bills;
}

let spendingMoney = (thisMonth)=> `This month I will have ${thisMonth} dollars money to spend.`
console.log(spendingMoney(budget(35, 100, 300, 700)))

//This function allows you to find out how much money you can spend after you have paid your bills. 