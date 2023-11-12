const list = Array.from(Array(100000).keys())


function binarySearch(number, inputList){
    let lowestIndex = 0
    let highestIndex = inputList.length - 1
    let middle = Math.floor((lowestIndex + highestIndex) / 2) 
    
    for(let i=0; i < inputList.length; i++){
         if(number === inputList[middle])
           return {number, tries:i+1}
        if(number > inputList[middle]){
            lowestIndex = middle + 1  
        }
        else{
            highestIndex = middle -1
        }
        middle = Math.floor((lowestIndex + highestIndex) / 2)
    }
} 

function sequentialSearch(number, inputList){
    for(const currentNumber of inputList)
        if(number === currentNumber)
          return number
}

console.log('Binary Search')
console.time()
for(let i = 1; i < list.length; i++)
    binarySearch(i,list)

console.timeEnd()

console.log('Sequential Search')
console.time()
for(let i = 1; i < list.length; i++)
    sequentialSearch(i,list)

console.timeEnd()
