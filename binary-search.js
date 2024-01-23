const list = Array.from(Array(100000).keys())


function binarySearch(number, inputList){
    let lowestIndex = 0
    let highestIndex = inputList.length - 1
    let middle = null
    
    for(let i=0; i < inputList.length; i++){
        middle = Math.floor((lowestIndex + highestIndex) / 2)
        if(number === inputList[middle])
           return number
        if(number > inputList[middle]){
            lowestIndex = middle + 1  
        }
        else{
            highestIndex = middle -1
        }
    }
} 

function sequentialSearch(number, inputList){
    for(const currentNumber of inputList)
        if(number === currentNumber)
          return number
}

console.time('Binary Search')
for(let i = 1; i < list.length; i++)
    binarySearch(i,list)

console.timeEnd('Binary Search')

console.time('Sequential Search')
for(let i = 1; i < list.length; i++)
    sequentialSearch(i,list)
console.timeEnd('Sequential Search')
