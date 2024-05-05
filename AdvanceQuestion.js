 // 1. Password Validaion

const simplePasswordValidator = (password)=>{
    let hasLowerCase = false
    let hasUpperCase = false
    let hasNumber = false
    for (let char of password){
        if(char.charCodeAt(0)>=65 && char.charCodeAt(0) <=90){
            hasUpperCase = true
        }
       else if(char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122){
            hasLowerCase = true
        }
       else if(!isNaN(Number(char))){
            hasNumber = true
        }
    }

    if(!hasLowerCase || !hasUpperCase || !hasNumber || password.length < 8){
        return false
    }
    return true
}



 console.log(simplePasswordValidator('abCkd15tyU'))



 // 2. Random Hex color generator

 const hexColorGenerate = ()=>{
    return `#${Math.random().toString(16).slice(2,8).padEnd(6,0)}`
 }

 console.log(hexColorGenerate())


// 3. Check a object is empty or not 

 const isEmptyObj = (obj)=>{

    return Object.keys(obj).length === 0 ? 'It is empty' : 'It is not empty'

 }

 console.log(isEmptyObj({}))
//  console.log(isEmptyObj({index: null}))



// 4. Convert object to array and vice varsa

const obj = {
    name : 'Pratim Bera',
    roll_no : 61,
    age :20
}
let entries = Object.entries(obj) // object to array (to make flat array use array.flat())
console.log(entries)
let newObj = Object.fromEntries(entries) // array to object
console.log(newObj)


// 5. Calculate simple interest 

const calSimpleInt = (p,r,t)=>{

 return (p*r*t)/100

}
console.log(calSimpleInt(1000,5,3))


// Number of Days Between two date

const calDaysInBetween = (dateString1,dateString2)=>{
    let D1 = new Date(dateString1)
    let D2 = new Date(dateString2)

    let diff = D2 - D1

    return diff/(24*60*60*1000)

}
console.log(calDaysInBetween("2024-01-01", "2024-01-31"))





 