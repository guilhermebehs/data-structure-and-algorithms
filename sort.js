

function bubbleSort(list){
   
    for(let i =0; i < list.length; i++){
        for(let j =0; j < list.length-1; j++)
        if(list[i] < list[j]){
            const temp = list[j]
            list[j] = list[i]
            list[i] = temp
        }
    }

   return list  
}

function quickSort(list){
   
    let pivot

    if(list.length === 1)
      return list
    if(list.length === 2)
      return  list[0] > list[1] ? [list[1], list[0]] : [list[0], list[1]]


    pivot = Math.floor(list.reduce((prev,next)=>prev+next)/list.length)  


    let smallerThan =[]
    let greaterThan = []      
    for(const number of list)  
        if(pivot > number) 
          smallerThan.push(number)
        else if(pivot < number)
          greaterThan.push(number)

   return quickSort(smallerThan).concat(pivot).concat(quickSort(greaterThan))    
}

function selectionSort(list){
  let sortedList = []
  const listOriginalLength = list.length
  for(let i=0; i < listOriginalLength; i++){
      let smallerIndex = 0;
      for(let y=0; y < list.length; y++){
        if(list[y] < list[smallerIndex])
           smallerIndex = y
      }
      sortedList.push(list[smallerIndex])
      list.splice(smallerIndex,1)

  }
      
  return sortedList

}

console.log('Bubble sort')
console.time()
console.log(bubbleSort([3,2,4,1,5,10,13,9,8,6,7]))
console.timeEnd()


console.log('Quick sort')
console.time()
console.log(quickSort([3,2,4,1,5,10,13,9,8,6,7]))
console.timeEnd()


console.log('Selection sort')
console.time()
console.log(selectionSort([3,2,4,1,5,10,13,9,8,6,7]))
console.timeEnd()