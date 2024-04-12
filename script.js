// 1. Find Factorial of any number

const factorial = (n)=>{
    if(n<0) return false

    // if(n===0 || n===1){
    //     return 1
    // }else{
    //     return n * factorial(n-1)
    // } 
    return ((n===0 || n===1) ? 1 : n * factorial(n-1))

}
console.log(factorial(5))



// 2. calculate the avarage


const calculateAvarage = (arr)=>{
    let arrLength = arr.length
    avarage = (arr.reduce((a,c)=>(a+c),0))/arrLength
return avarage

}

console.log(calculateAvarage([5,10,2,8]))

// 3. Check array is equal or not

const arrayEquals =(arr1, arr2)=>{
    let isArrayEqual = false
    if(arr1.length !== arr2.length){
       return false
    }
   return arr1.every((cur,i)=> cur === arr2[i])

}


console.log(arrayEquals([1,2,3],[1,2,3]))
console.log(arrayEquals([1,2,3],[1,2,4]))
console.log(arrayEquals([],[]))


// 4. sum of its digit

const SumOfDigit = (n)=>{
    // let total = 0
    // while (n !== 0) {
    //     total = total +  n % 10
    //     n = Math.floor(n/10)
    // }
    // return total

    return Array.from(String(n), Number).reduce((a,c)=> a += c, 0)
}

console.log(SumOfDigit(1234))


// 5. Remove Duplicate
const removeDuplicate = (arr)=>{
    // let newArr = new Set(arr)
    // return Array.from(newArr)
    return [...new Set(arr)]
}

console.log(removeDuplicate([1,-2,3,-4,5,6,2,3,4,-2]))


// 6. Count Vowels
const CountVowels = (str)=>{
    let c = 0
    vowels = ['a','e','i','o','u']
    for (const x of str.toLowerCase()) {
         vowels.includes(x) ? c++ : ''
        
    }
    return c

}

console.log(CountVowels('ThE qUICK brown fox')) // 5
console.log(CountVowels('heLoo world')) // 4



// 7. Check if power of two or not

// const isPowerofTwo = (n)=>{
// let check = false
//     for (let index = 0; index < n/2; index++) {
//         if(Math.pow(2,index)=== n){
//             check = true
//         }      
//     }
//     return check
// }

//Bitwise METHOD >>

const isPowerofTwo = (n)=>{
    if(n & (n-1) && n!==0) return false
    else{
        return true
    }
    }
    
console.log(isPowerofTwo(8))
console.log(isPowerofTwo(16))
console.log(isPowerofTwo(1))
console.log(isPowerofTwo(9))


// 8. Sum of Square of all elements in an array

const sumOfSquare = (arr)=>{

    return arr.reduce((acum,curr)=> acum + (curr *curr) ,0)

}
console.log(sumOfSquare([1,2,3])) //14


// 9. Find Minimum from array

const findMin = (arr)=>{

    Min = arr.length !== 0  ?  Math.min(...arr) : "Empty Array"
    return Min

}

console.log(findMin([1,2,-3,4,-7]))