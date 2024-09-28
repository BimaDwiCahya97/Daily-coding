const arr = [1,2,3]
// const aLength = arr.length*2
// console.log(aLength)
let result = []
const aLength = arr.length*2
const addIndx = (arr) => {
    for(let i = 0; i < aLength; i++){
       arr[i] = i+1
    }
    return arr
}
console.log(addIndx(arr))
console.log(arr[4] = 4)
console.log(arr)
