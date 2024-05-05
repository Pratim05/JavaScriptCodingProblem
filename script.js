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

// 10. Covert a String To camelCase and snake_case

const toCamelCase = (str)=>{
 let stArr = str.trim().toLowerCase().split(' ')
 stArr = stArr.map((c,i)=>{
        if(i === 0){
            return c.toLowerCase()
        }else{
            return c.charAt(0).toUpperCase() + c.slice(1).toLowerCase()
        }
    })
    return stArr.join('')
}
const toSnakeCase = (str)=>{
 return str.trim().replace(' ','_').toLowerCase()
 
}

console.log(toCamelCase('PratIm bErA'))
console.log(toSnakeCase('PratIm bErA'))
 

// 11. Check a letter is in UpperCase or not

const isUppercase = (char)=>{

    if(char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90) return true
    else return false

}

console.log(isUppercase('s'))
console.log(isUppercase('W'))


//12. If  a agiven String starts with a specific substring

const startsWith=(str,subStr)=>{
// using Built-in-function
// return str.toLowerCase().startsWith(subStr.toLowerCase())

    let subStrArr = str.trim().toLowerCase().split(' ')
    if(subStr === subStrArr[0]) return true
    else return false

}

console.log(startsWith('Hello world', 'hello'))
console.log(startsWith('hi world', 'hello'))



// 13. Reverse a String without using built-in-function

const reverseString = (str)=>{
    let reverseStr = ''
for (let index = str.length-1; index >= 0 ; index--) {
    reverseStr = reverseStr + str[index]   
}
return reverseStr

}


console.log(reverseString("PratiM"))



//14. Find Mean , Median , Mode

const calculateMeanMedianMode = (arr)=>{

  let length = arr.length
  let mid= Math.floor(arr.length /2)  

  let mean = arr.reduce((a,c)=>a+c,0) / length

  arr =  arr.sort((a,b)=>a-b)
  let median = length % 2 === 0 ? (arr[mid] + arr[mid-1]) / 2 : arr[mid]

  let counts = {}
  let max = 0
  let mode
  for (let element of arr) {
      counts[element]  = (counts[element] || 0) +1  
    if(counts[element] > max){
        max = counts[element]
        mode = element
    }
  }

  console.log("MEAN = ", mean ,"MEDIAN = " , median ,"MODE = ", mode)
}

calculateMeanMedianMode([3,5,7,9,9,5,9])
calculateMeanMedianMode([2,4,6,8])


// 15. Find the number of Occurrance in array and return an object

const FindOccurrence = (arr) =>{
    let counts = {}
    for (const element of arr) {
        counts[element]  = (counts[element] || 0) + 1  
    }
//   arr.forEach(element => {
//     let i = 0
//     let count = 0
//     while (i < arr.length){
//     if(element === arr[i]) count++
//     i++
//     }
//     counts[element] = count  
//   });
    return counts
}
 console.log(FindOccurrence([1,2,1,2,3,1]))


 //16. Fibbonacci  using recurtion

const Fibbonacci =(num)=>{

        if(num <= 1){
            return num
        }
        else {
            return Fibbonacci(num -1) + Fibbonacci(num-2)
        }
    
}
console.log(Fibbonacci(4));

// 17. Repeat the String

const repeatString = (str,n)=>{
// return n>0 ? str.repeat(n) : str

    let repeatedString = str
    for (let index = 0; index < n; index++) {
       repeatedString += str
    }
    return repeatedString
}
console.log(repeatString('abc',0))

// 18. Truncated string and add (....) at end

const truncatedString = (str , count)=>{

    return str.length <= 0 ? str : str.slice(0,count).concat('...')

}

console.log(truncatedString('a bat, a ball', 7))

// 19. Number range Generator

const numberRange = (firstIndex , lastIndex)=>{
    let arr = []
    for (let index = firstIndex; index <= lastIndex; index++) {
        arr.push(index)        
    }
 return arr
}


console.log(numberRange(-3, 5))

// 20. 